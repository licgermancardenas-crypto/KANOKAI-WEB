// Escribe la carta (menu-data.js) como HTML estático dentro de index.html,
// más los datos estructurados schema.org/Menu, para que Google indexe cada plato.
//
// Uso:  node tools/build-menu.mjs
// Correrlo cada vez que se edite menu-data.js (y antes de hacer commit).

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://konakai-web.vercel.app";

const ctx = {};
vm.createContext(ctx);
vm.runInContext(readFileSync(join(root, "menu-data.js"), "utf8") + "\n;this.CARTA = CARTA; this.renderCarta = renderCarta;", ctx);
const { CARTA, renderCarta } = ctx;

const replaceBetween = (src, start, end, content) => {
  const a = src.indexOf(start), b = src.indexOf(end);
  if (a < 0 || b < 0) throw new Error(`No se encontraron los marcadores ${start} / ${end}`);
  return src.slice(0, a + start.length) + "\n" + content + "\n" + src.slice(b);
};

const html = renderCarta("en", CARTA[0].id);

const schema = {
  "@context": "https://schema.org", "@type": "Menu", "@id": `${SITE}/#menu`,
  name: "Konakai Peruvian Cuisine Menu", inLanguage: ["en", "es"],
  hasMenuSection: CARTA.map(c => ({
    "@type": "MenuSection", name: c.en,
    hasMenuItem: c.groups.flatMap(g => g.items).map(i => {
      const price = i.p && i.p !== "MKP" ? i.p : (i.v || []).map(v => v[1]).find(x => x !== "MKP");
      return {
        "@type": "MenuItem", name: i.n,
        ...(i.d && { description: i.d }),
        ...(price && { offers: { "@type": "Offer", price, priceCurrency: "USD" } }),
      };
    }),
  })),
};

const file = join(root, "index.html");
let src = readFileSync(file, "utf8");
src = replaceBetween(src, "<!--CARTA:START-->", "<!--CARTA:END-->", html);
src = replaceBetween(src, "<!--MENU-LD:START-->", "<!--MENU-LD:END-->",
  `  <script type="application/ld+json">${JSON.stringify(schema)}</script>`);
writeFileSync(file, src);

const dishes = CARTA.reduce((n, c) => n + c.groups.reduce((m, g) => m + g.items.length, 0), 0);
console.log(`Carta escrita en index.html: ${CARTA.length} categorías, ${dishes} platos.`);
