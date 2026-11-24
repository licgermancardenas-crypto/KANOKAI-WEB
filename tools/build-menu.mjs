// Arma las 6 páginas del sitio a partir de index.html (portada en inglés, que también es la plantilla):
//
//   /            /es/            portada
//   /menu        /es/menu        carta completa (menu-data.js escrito en el HTML + schema Menu)
//   /events      /es/eventos     eventos, catering y karaoke (+ piqueos de la carta + FAQ con schema)
//
// El contenido propio de cada subpágina está en pages/*.main.html; el resto (head, menú, pie,
// panel de reserva) sale de index.html. Las versiones en español usan los textos de I18N.es (main.js).
//
// Uso:  node tools/build-menu.mjs     (correrlo después de cambiar textos, páginas o la carta)

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://konakai-web.vercel.app";
const read = f => readFileSync(join(root, f), "utf8");
const write = (f, s) => { mkdirSync(dirname(join(root, f)), { recursive: true }); writeFileSync(join(root, f), s); };

// --- carta ---
const ctx = {}; vm.createContext(ctx);
vm.runInContext(read("menu-data.js") + "\n;this.CARTA = CARTA; this.renderCarta = renderCarta; this.SECTIONS = SECTIONS; this.DISH_PHOTOS = DISH_PHOTOS;", ctx);
const { CARTA, renderCarta, SECTIONS, DISH_PHOTOS } = ctx;

// --- textos en español ---
const mainJs = read("main.js");
const ictx = {}; vm.createContext(ictx);
vm.runInContext(mainJs.slice(mainJs.indexOf("const I18N = "), mainJs.indexOf("\nconst TAGS")) + "\n;this.I18N = I18N;", ictx);
const ES = ictx.I18N.es;

// --- páginas ---
const PAGES = [
  { key: "home", en: "/", es: "/es/", file: { en: "index.html", es: "es/index.html" },
    title: { en: "Konakai Peruvian Cuisine | Sunrise, FL", es: "Konakai Peruvian Cuisine | Restaurante peruano en Sunrise, FL" },
    desc: { en: null, es: "Restaurante peruano familiar desde 1992 en Sunrise, FL, a minutos de Sawgrass Mills y Fort Lauderdale. Ceviche, lomo saltado, arroz chaufa, mariscos y platos de la selva. Reserva por WhatsApp." } },
  { key: "menu", en: "/menu", es: "/es/menu", main: "pages/menu.main.html", file: { en: "menu/index.html", es: "es/menu/index.html" },
    title: { en: "Menu | Konakai Peruvian Cuisine, Sunrise FL", es: "Carta | Konakai, cocina peruana en Sunrise FL" },
    desc: { en: "The full Konakai menu with prices: ceviches, tiraditos, lomo saltado, arroz chaufa and chifa, seafood, Amazon dishes, lunch specials, desserts, pisco cocktails and wine.",
            es: "La carta completa de Konakai con precios: ceviches, tiraditos, lomo saltado, arroz chaufa y chifa, mariscos, platos de la selva, almuerzos, postres, cócteles de pisco y vinos." } },
  { key: "events", en: "/events", es: "/es/eventos", main: "pages/events.main.html", file: { en: "events/index.html", es: "es/eventos/index.html" },
    title: { en: "Private Events, Catering & Karaoke | Konakai, Sunrise FL", es: "Eventos privados, catering y karaoke | Konakai" },
    desc: { en: "Celebrate at Konakai in Sunrise, FL: private events, birthdays, Peruvian catering and karaoke on Friday and Saturday nights. Platters to share and direct help on WhatsApp.",
            es: "Celebra en Konakai, Sunrise FL: eventos privados, cumpleaños, catering peruano y karaoke los viernes y sábados. Piqueos para compartir y asesoría directa por WhatsApp." } },
];
const enToEs = Object.fromEntries(PAGES.map(p => [p.en, p.es]));

const between = (src, start, end, content) => {
  const a = src.indexOf(start), b = src.indexOf(end);
  if (a < 0 || b < 0) throw new Error(`No se encontraron los marcadores ${start} / ${end}`);
  return src.slice(0, a + start.length) + "\n" + content + "\n" + src.slice(b);
};
const setMeta = (html, page, lang) => {
  const url = SITE + page[lang];
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${page.title[lang].replace(/&/g, "&amp;")}</title>`);
  if (page.desc[lang]) html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${page.desc[lang]}">`);
  html = html.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${url}">`);
  html = html.replace(/<link rel="alternate" hreflang="en" href="[^"]*">/, `<link rel="alternate" hreflang="en" href="${SITE + page.en}">`);
  html = html.replace(/<link rel="alternate" hreflang="es" href="[^"]*">/, `<link rel="alternate" hreflang="es" href="${SITE + page.es}">`);
  html = html.replace(/<link rel="alternate" hreflang="x-default" href="[^"]*">/, `<link rel="alternate" hreflang="x-default" href="${SITE + page.en}">`);
  html = html.replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${url}">`);
  html = html.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${page.title[lang].replace(/&/g, "&amp;")}">`);
  return html;
};
const toSpanish = html => {
  html = html.replace('<html lang="en">', '<html lang="es">')
    .replace('<meta property="og:locale" content="en_US">', '<meta property="og:locale" content="es_US">')
    .replace('<meta property="og:locale:alternate" content="es_US">', '<meta property="og:locale:alternate" content="en_US">');
  html = html.replace(/(<([a-z0-9]+)\b[^>]*\bdata-i18n="([^"]+)"[^>]*>)([\s\S]*?)(<\/\2>)/g,
    (all, open, tag, key, inner, close) => ES[key] === undefined ? all : open + ES[key] + close);
  html = html.replace(/placeholder="[^"]*"(\s+data-i18n-ph="([^"]+)")/g, (all, attr, key) => ES[key] ? `placeholder="${ES[key]}"${attr}` : all);
  // enlaces internos a la versión en español (/, /#x, /menu, /events)
  html = html.replace(/href="(\/(?:menu|events)?)(#[^"]*)?"/g, (all, path, hash = "") => enToEs[path] ? `href="${enToEs[path]}${hash}"` : all);
  return html;
};

// --- bloques generados ---
const menuSchema = lang => JSON.stringify({
  "@context": "https://schema.org", "@type": "Menu", "@id": `${SITE}${lang === "es" ? "/es/menu" : "/menu"}#menu`,
  name: lang === "es" ? "Carta de Konakai Peruvian Cuisine" : "Konakai Peruvian Cuisine Menu", inLanguage: lang,
  hasMenuSection: CARTA.map(c => ({
    "@type": "MenuSection", name: c[lang],
    hasMenuItem: c.groups.flatMap(g => g.items).map(i => {
      const price = i.p && i.p !== "MKP" ? i.p : (i.v || []).map(v => v[1]).find(x => x !== "MKP");
      const d = lang === "es" ? i.de || i.d : i.d;
      return { "@type": "MenuItem", name: i.n, ...(d && { description: d }),
        ...(price && { offers: { "@type": "Offer", price, priceCurrency: "USD" } }) };
    }),
  })),
});
const PLATTERS = ["Konakai Frío", "Criollo", "Marino", "Tropikal Konakai", "Piqueo Amazónico", "Chacarero Amazónico"];
const platters = lang => {
  const es = lang === "es";
  const all = CARTA.flatMap(c => c.groups.flatMap(g => g.items));
  return PLATTERS.map(n => all.find(i => i.n === n)).filter(Boolean).map(i => {
    const photo = DISH_PHOTOS[i.n] || null;
    const price = i.p ? `<span class="ml-price">$${i.p}</span>` : "";
    const vars = i.v ? `<ul class="mi-vars">${i.v.map(([l, p, les]) => `<li><span>${es && les ? les : l}</span><span class="ml-price">${p === "MKP" ? (es ? "Precio de mercado" : "Market price") : "$" + p}</span></li>`).join("")}</ul>` : "";
    return `      <article class="plat-card">${photo ? `<button type="button" class="plat-img" data-zoom="${photo}" aria-label="${i.n}"><img src="/img/${photo}-800.webp?v=5" alt="${i.n}" loading="lazy"></button>` : ""}
        <div class="plat-body"><div class="plat-top"><h3>${i.n}</h3>${price}</div><p>${es ? i.de || i.d : i.d}</p>${vars}</div></article>`;
  }).join("\n");
};
const faqSchema = html => {
  const qa = [...html.matchAll(/<details><summary[^>]*>([\s\S]*?)<\/summary><p[^>]*>([\s\S]*?)<\/p><\/details>/g)];
  return qa.length ? `  <script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: qa.map(m => ({ "@type": "Question", name: m[1], acceptedAnswer: { "@type": "Answer", text: m[2] } })) })}</script>` : "";
};

// --- armado ---
const shell = read("index.html");                      // portada EN = plantilla
const mainOf = html => html.match(/<main id="main">[\s\S]*<\/main>/)[0];
const report = [];
for (const page of PAGES) {
  for (const lang of ["en", "es"]) {
    let html = page.main ? shell.replace(mainOf(shell), read(page.main).trim()) : shell;
    if (page.main) html = html.replace(/\s*<link rel="preload" as="image"[^>]*>/, "");   // la foto precargada es la de la portada
    html = setMeta(html, page, lang);
    let ld = "";
    if (page.key === "menu") {
      html = between(html, "<!--CARTA:START-->", "<!--CARTA:END-->", renderCarta(lang, SECTIONS[0].id));
      ld = `  <script type="application/ld+json">${menuSchema(lang)}</script>`;
    }
    if (page.key === "events") html = between(html, "<!--PLATTERS:START-->", "<!--PLATTERS:END-->", platters(lang));
    if (lang === "es") html = toSpanish(html);
    if (page.key === "events") ld = faqSchema(html);
    html = between(html, "<!--MENU-LD:START-->", "<!--MENU-LD:END-->", ld);
    write(page.file[lang], html);
    report.push(page[lang]);
  }
}
console.log("OK:", report.join("  "));
