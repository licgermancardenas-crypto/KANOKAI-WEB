// Arma las páginas finales a partir de index.html (inglés):
//  1. Escribe la carta completa (menu-data.js) como HTML dentro de index.html + schema.org/Menu.
//  2. Genera /es/index.html: misma página con todos los textos en español ya escritos en el HTML
//     (Google indexa cada idioma por separado; ambas páginas se enlazan con hreflang).
//
// Uso:  node tools/build-menu.mjs
// Correrlo después de editar index.html, main.js (textos) o menu-data.js, y antes de hacer commit.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://konakai-web.vercel.app";

// --- carta ---
const ctx = {};
vm.createContext(ctx);
vm.runInContext(readFileSync(join(root, "menu-data.js"), "utf8") + "\n;this.CARTA = CARTA; this.renderCarta = renderCarta; this.SECTIONS = SECTIONS;", ctx);
const { CARTA, renderCarta, SECTIONS } = ctx;

// --- textos en español (objeto I18N de main.js) ---
const mainJs = readFileSync(join(root, "main.js"), "utf8");
const i18nSrc = mainJs.slice(mainJs.indexOf("const I18N = "), mainJs.indexOf("\nconst TAGS"));
const ictx = {}; vm.createContext(ictx);
vm.runInContext(i18nSrc + "\n;this.I18N = I18N;", ictx);
const ES = ictx.I18N.es;

const between = (src, start, end, content) => {
  const a = src.indexOf(start), b = src.indexOf(end);
  if (a < 0 || b < 0) throw new Error(`No se encontraron los marcadores ${start} / ${end}`);
  return src.slice(0, a + start.length) + "\n" + content + "\n" + src.slice(b);
};
const must = (src, a, b) => { if (!src.includes(a)) throw new Error("No encontrado: " + a.slice(0, 80)); return src.replace(a, b); };

const schema = {
  "@context": "https://schema.org", "@type": "Menu", "@id": `${SITE}/#menu`,
  name: "Konakai Peruvian Cuisine Menu", inLanguage: ["en", "es"],
  hasMenuSection: CARTA.map(c => ({
    "@type": "MenuSection", name: c.en,
    hasMenuItem: c.groups.flatMap(g => g.items).map(i => {
      const price = i.p && i.p !== "MKP" ? i.p : (i.v || []).map(v => v[1]).find(x => x !== "MKP");
      return { "@type": "MenuItem", name: i.n, ...(i.d && { description: i.d }),
        ...(price && { offers: { "@type": "Offer", price, priceCurrency: "USD" } }) };
    }),
  })),
};

// ===== 1. Página en inglés =====
const enFile = join(root, "index.html");
let en = readFileSync(enFile, "utf8");
en = between(en, "<!--CARTA:START-->", "<!--CARTA:END-->", renderCarta("en", SECTIONS[0].id));
en = between(en, "<!--MENU-LD:START-->", "<!--MENU-LD:END-->", `  <script type="application/ld+json">${JSON.stringify(schema)}</script>`);
writeFileSync(enFile, en);

// ===== 2. Página en español =====
let es = en;
es = must(es, '<html lang="en">', '<html lang="es">');
es = es.replace(/<title>[^<]*<\/title>/, "<title>Konakai | Restaurante peruano y chifa en Sunrise, FL</title>");
es = es.replace(/<meta name="description" content="[^"]*">/,
  '<meta name="description" content="Restaurante peruano familiar desde 1992 en Sunrise, FL, a minutos de Sawgrass Mills y Fort Lauderdale. Ceviche, lomo saltado, arroz chaufa, mariscos y platos de la selva. Reserva por WhatsApp.">');
es = must(es, `<link rel="canonical" href="${SITE}/">`, `<link rel="canonical" href="${SITE}/es/">`);
es = es.replace(`<meta property="og:url" content="${SITE}/">`, `<meta property="og:url" content="${SITE}/es/">`);
es = es.replace(/<meta property="og:title" content="[^"]*">/, '<meta property="og:title" content="Konakai · Cocina peruana y chifa en Sunrise, FL">');
es = es.replace('<meta property="og:locale" content="en_US">', '<meta property="og:locale" content="es_US">')
       .replace('<meta property="og:locale:alternate" content="es_US">', '<meta property="og:locale:alternate" content="en_US">');
// textos marcados con data-i18n
let missing = 0;
es = es.replace(/(<([a-z0-9]+)\b[^>]*\bdata-i18n="([^"]+)"[^>]*>)([\s\S]*?)(<\/\2>)/g, (all, open, tag, key, inner, close) => {
  if (ES[key] === undefined) { missing++; return all; }
  return open + ES[key] + close;
});
es = es.replace(/placeholder="[^"]*"(\s+data-i18n-ph="([^"]+)")/g, (all, attr, key) => ES[key] ? `placeholder="${ES[key]}"${attr}` : all);
es = between(es, "<!--CARTA:START-->", "<!--CARTA:END-->", renderCarta("es", SECTIONS[0].id));
mkdirSync(join(root, "es"), { recursive: true });
writeFileSync(join(root, "es", "index.html"), es);

const dishes = CARTA.reduce((n, c) => n + c.groups.reduce((m, g) => m + g.items.length, 0), 0);
console.log(`OK: carta de ${dishes} platos en ${SECTIONS.length} secciones · /es/ generado (${missing} textos sin traducción, quedan en inglés).`);
