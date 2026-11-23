/* =========================================================
   DATOS DEL RESTAURANTE — EDITAR AQUÍ
   Fuente: ficha de Google de Konakai Peruvian Cuisine (nov 2026).
   Regla: un dato vacío ("" o []) se OCULTA. Nunca publicar datos inventados.
   ========================================================= */
const BUSINESS = {
  address: "4305 NW 88th Ave, Sunrise, FL 33351",
  mapQuery: "Konakai Peruvian Cuisine, 4305 NW 88th Ave, Sunrise, FL 33351",
  phones: ["(954) 909-5525", "(954) 404-4272"],
  email: "konakai1992@gmail.com",
  whatsapp: "19544044272",   // CONFIRMAR con el cliente cuál número tiene WhatsApp
  instagram: "https://www.instagram.com/konakaiperuviancuisine/",
  reviewsUrl: "https://www.google.com/maps/search/?api=1&query=Konakai+Peruvian+Cuisine+4305+NW+88th+Ave+Sunrise+FL",
  hours: [
    { en: "Sun – Thu", es: "Dom – Jue", time: "12:00 PM – 10:00 PM" },
    { en: "Fri – Sat", es: "Vie – Sáb", time: "12:00 PM – 1:00 AM" },
  ],
};

/* Mensaje predefinido de WhatsApp */
const WA_TEXT = {
  es: "Hola KONAKAI, me gustaría reservar una mesa para ",
  en: "Hi KONAKAI, I'd like to reserve a table for ",
};

/* Platos estrella (con foto). tag: "rec" = Recomendado, "share" = Para compartir.
   price: "" = sin precio publicado. */
const FEATURED = [
  { img: "ceviche-aji-amarillo", price: "19.99", tag: "rec",
    en: ["Ceviche Clásico en Ají Amarillo", "House fish cured in lime and golden ají amarillo, with sweet potato and Peruvian corn."],
    es: ["Ceviche Clásico en Ají Amarillo", "Pescado de la casa en limón y ají amarillo, con camote y choclo."] },
  { img: "lomo-saltado-tallarin", price: "26.99", tag: "rec",
    en: ["Tallarín a la Huancaína con Lomo Saltado", "Wok-seared beef with onion and tomato over noodles in creamy huancaína."],
    es: ["Tallarín a la Huancaína con Lomo Saltado", "Lomo saltado al wok sobre tallarín en cremosa salsa huancaína."] },
  { img: "plato-amazonico", price: "46.99", tag: "share",
    en: ["Piqueo Amazónico", "Cecina, chorizo, tacacho, juane, salsa criolla and fried sweet plantains."],
    es: ["Piqueo Amazónico", "Cecina, chorizo, tacacho, juane, sarsa de cebolla y maduros fritos."] },
  { img: "tacacho-cecina", price: "59.99", tag: "share",
    en: ["Chacarero Amazónico", "Cecina, chorizo, tacacho, juane, sweet plantains, fried egg and churrasco or grilled chicken."],
    es: ["Chacarero Amazónico", "Cecina, chorizo, tacacho, juane, maduros, huevo frito y churrasco o pollo a la plancha."] },
  { img: "chicharron-pescado", price: "21.99", tag: "",
    en: ["Chicharrón de Pescado", "Crispy fried fish with yuca and salsa criolla. Also with corvina or calamari."],
    es: ["Chicharrón de Pescado", "Pescado frito crocante con yuca y salsa criolla. También de corvina o calamar."] },
  { img: "papas-rellenas", price: "15.99", tag: "",
    en: ["Papa Rellena", "Golden potato stuffed with seasoned beef, with salsa criolla."],
    es: ["Papa Rellena", "Papa dorada rellena de carne sazonada, con salsa criolla."] },
];

/* La carta completa está en menu-data.js (CARTA). */

/* Reseñas reales: copiar textualmente de Google con permiso del cliente.
   Formato: { text: "...", author: "Nombre I.", source: "Google" }. Vacío = se oculta. */
const REVIEWS = [];

const ABOUT_IMGS = ["sudado-pescado", "ceviche-cucharitas", "juane-maduros"];

/* ========================================================= */

const I18N = {
  es: {
    "a11y.skip": "Ir al menú",
    "nav.menu": "Menú", "nav.about": "Nosotros", "nav.reviews": "Reseñas", "nav.visit": "Ubicación",
    "cta.reserve": "Reservar mesa", "cta.whatsapp": "Reservar por WhatsApp", "cta.menu": "Ver la carta",
    "cta.directions": "Cómo llegar",
    "hero.rating": "+1,400 reseñas en Google",
    "hero.eyebrow": "Negocio familiar desde 1992 · Sunrise, FL",
    "hero.title": "La mesa peruana de confianza en Broward desde 1992.",
    "hero.lead": "Ceviches, lomo saltado humeante, el mejor chifa de la zona y sabores de la selva. A minutos de Sawgrass Mills y Fort Lauderdale.",
    "menu.eyebrow": "Favoritos de la casa", "menu.title": "Nuestros platos estrella",
    "menu.full": "Ver la carta completa", "menu.less": "Ocultar la carta",
    "menu.note": "Avísanos si tienes alguna alergia alimentaria. Se agrega 18% de propina a grupos de 5 o más. Precios sujetos a cambio.",
    "about.eyebrow": "La experiencia Konakai",
    "about.title": "Tres décadas de cocina peruana, una sola familia.",
    "about.p1": "Konakai es un restaurante familiar desde 1992. Cocinamos todo el Perú: ceviches de la costa, clásicos criollos como el lomo saltado y el ají de gallina, y el chifa, la cocina peruano-china al wok que nos hizo conocidos.",
    "about.p2": "Pescado fresco, ají peruano de verdad y recetas de casa. Un ambiente cálido y familiar para cumpleaños, almuerzos de domingo y cenas largas con amigos.",
    "pill.1.t": "Especialistas en chifa", "pill.1.p": "Arroz chaufa y saltados al wok con el verdadero sabor ahumado.",
    "pill.2.t": "Del mar", "pill.2.p": "Ceviches, parihuela, choros a la chalaca y pulpo anticuchero.",
    "pill.3.t": "Sabores de la selva", "pill.3.p": "Tacacho, cecina y juane, difíciles de encontrar en Florida.",
    "reviews.eyebrow": "Lo que dicen las familias", "reviews.title": "Querido en Broward desde 1992",
    "reviews.count": "Basado en 1,439 reseñas de Google", "reviews.cta": "Leer todas las reseñas en Google",
    "visit.eyebrow": "Ubicación y horario", "visit.title": "Ven con hambre.",
    "visit.address": "Dirección", "visit.phone": "Teléfono / reservas", "visit.hours": "Horario",
    "visit.near": "Cerca de Sawgrass Mills · 20 min del centro de Fort Lauderdale",
    "visit.lunch": "Almuerzos ejecutivos de lunes a viernes, 12–3:30 PM (excepto feriados)",
    "visit.events": "Karaoke viernes y sábado desde las 9 PM · Eventos privados y cumpleaños · Delivery",
    "visit.email": "Email",
    "res.eyebrow": "Reserva directa", "res.title": "Reserva tu mesa en 20 segundos",
    "res.lead": "Elige fecha, hora y personas. Se abre WhatsApp con el mensaje listo para enviar.",
    "res.name": "Tu nombre", "res.date": "Fecha", "res.time": "Hora", "res.people": "Personas",
    "res.notes": "Ocasión o comentario (opcional)", "res.notesPh": "Cumpleaños, silla de bebé…",
    "res.submit": "Reservar por WhatsApp", "res.namePh": "Opcional",
    "res.fine": "Grupos de 5 o más: se agrega 18% de propina. Te confirmaremos por WhatsApp.",
    "about.p3": "Los viernes y sábados la noche sigue con karaoke desde las 9 PM. Celebramos cumpleaños, eventos especiales y todo tipo de celebración.",
  },
};
const TAGS = { rec: { en: "Recommended", es: "Recomendado" }, share: { en: "To share", es: "Para compartir" } };

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const EN_DEFAULTS = {};
$$("[data-i18n]").forEach(el => (EN_DEFAULTS[el.dataset.i18n] = el.innerHTML));
EN_DEFAULTS["menu.less"] = "Hide the menu";

let lang = "en";
try { lang = localStorage.getItem("konakai-lang") || "en"; } catch {}
let activeTab = CARTA[0].id;
let fullOpen = false;
const t = k => (lang === "es" && I18N.es[k]) || EN_DEFAULTS[k];
const money = (p, from) => p ? `${from ? (lang === "es" ? "desde " : "from ") : ""}$${p}` : "";

const pic = (name, alt, lazy = true) =>
  `<picture><source srcset="img/${name}.webp" type="image/webp"><img src="img/${name}.jpg" alt="${alt}"${lazy ? ' loading="lazy"' : ""}></picture>`;
const dishName = img => { const d = FEATURED.find(x => x.img === img); return d ? d[lang][0] : "Konakai"; };

function renderFeatured() {
  $("#featuredGrid").innerHTML = FEATURED.map((d, i) => {
    const [name, desc] = d[lang];
    const tag = d.tag ? `<span class="tag tag-${d.tag}">${TAGS[d.tag][lang]}</span>` : "";
    return `<article class="dish" style="animation-delay:${i * 60}ms">
      <button type="button" data-zoom="${d.img}" aria-label="${name}">${pic(d.img, name)}${tag}</button>
      <div class="dish-body">
        <div class="dish-top"><h3>${name}</h3>${d.price ? `<span class="price">${money(d.price)}</span>` : ""}</div>
        <p>${desc}</p>
      </div>
    </article>`;
  }).join("");
}
function renderTabs() {
  $("#menuTabs").innerHTML = CARTA.map(c =>
    `<button class="tab" role="tab" data-id="${c.id}" aria-selected="${c.id === activeTab}" tabindex="${c.id === activeTab ? 0 : -1}">${c[lang]}</button>`).join("");
}
const fmt = p => p === "MKP" ? (lang === "es" ? "Precio de mercado" : "Market price") : `$${p}`;
const desc = i => (lang === "es" ? i.de || i.d : i.d) || "";
function renderList() {
  const cat = CARTA.find(c => c.id === activeTab);
  const item = i => `<li class="mi">
      <div class="mi-row"><span class="ml-name">${i.n}</span><span class="ml-dots" aria-hidden="true"></span>${i.p ? `<span class="ml-price">${i.from ? (lang === "es" ? "desde " : "from ") : ""}${fmt(i.p)}</span>` : ""}</div>
      ${desc(i) ? `<p class="mi-desc">${desc(i)}</p>` : ""}
      ${i.v ? `<ul class="mi-vars">${i.v.map(([l, p, les]) => `<li><span>${lang === "es" && les ? les : l}</span><span class="ml-price">${fmt(p)}</span></li>`).join("")}</ul>` : ""}
    </li>`;
  $("#menuList").innerHTML =
    (cat.note ? `<p class="cat-note">${cat.note[lang]}</p>` : "") +
    cat.groups.map(g => `<section class="mgroup">${g.en ? `<h3 class="mgroup-title">${g[lang]}</h3>` : ""}<ul class="mitems">${g.items.map(item).join("")}</ul></section>`).join("");
}
function renderAbout() {
  $("#aboutImgs").innerHTML = ABOUT_IMGS.map((g, i) =>
    `<button type="button" class="ai ai-${i}" data-zoom="${g}" aria-label="Konakai">${pic(g, "Konakai")}</button>`).join("");
}
function renderReviews() {
  const box = $("#quotes");
  box.hidden = !REVIEWS.length;
  box.innerHTML = REVIEWS.map(r =>
    `<figure class="quote"><div class="stars" aria-hidden="true">★★★★★</div><blockquote>“${r.text}”</blockquote><figcaption>${r.author} · ${r.source}</figcaption></figure>`).join("");
}
function renderBusiness() {
  const B = BUSINESS, show = (sel, ok) => $$(sel).forEach(el => (el.hidden = !ok));
  $$(".js-address").forEach(el => (el.textContent = B.address));
  $$(".js-directions").forEach(el => (el.href = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(B.mapQuery)}`));
  const map = $(".js-map"), src = `https://maps.google.com/maps?q=${encodeURIComponent(B.mapQuery)}&z=15&output=embed`;
  if (map.getAttribute("src") !== src) map.src = src;

  $(".js-phones").innerHTML = B.phones.map(p => `<a href="tel:+1${p.replace(/\D/g, "")}">${p}</a>`).join("<br>");
  show(".js-phone-row", B.phones.length > 0);

  const wa = `https://wa.me/${B.whatsapp}?text=${encodeURIComponent(WA_TEXT[lang])}`;
  $$(".js-whatsapp").forEach(el => (el.href = wa));
  show(".js-whatsapp, .js-wa-dep", !!B.whatsapp);
  $(".wa-float").setAttribute("aria-label", t("cta.whatsapp"));

  $$(".js-ig").forEach(el => (el.href = B.instagram));
  $$(".js-email").forEach(el => { el.href = `mailto:${B.email}`; el.textContent = B.email; });
  $$(".js-reviews").forEach(el => (el.href = B.reviewsUrl));
  $(".js-hours").innerHTML = B.hours.map(h => `<li><span>${h[lang]}</span><span>${h.time}</span></li>`).join("");
}
function renderFullToggle() {
  const b = $("#fullMenuToggle");
  b.textContent = t(fullOpen ? "menu.less" : "menu.full");
  b.setAttribute("aria-expanded", fullOpen);
  $("#fullMenu").hidden = !fullOpen;
}

function applyLang() {
  document.documentElement.lang = lang;
  $$("[data-i18n]").forEach(el => (el.innerHTML = t(el.dataset.i18n)));
  $$("[data-i18n-ph]").forEach(el => {
    el.dataset.phEn ??= el.placeholder;
    el.placeholder = lang === "es" ? I18N.es[el.dataset.i18nPh] : el.dataset.phEn;
  });
  const tg = $("#langToggle");
  tg.textContent = lang === "es" ? "EN" : "ES";
  tg.setAttribute("aria-label", lang === "es" ? "Switch to English" : "Cambiar a español");
  renderFeatured(); renderTabs(); renderList(); renderAbout(); renderReviews(); renderBusiness(); renderFullToggle(); renderReserve();
}

/* SEO: carta como datos estructurados */
function injectMenuSchema() {
  const data = {
    "@context": "https://schema.org", "@type": "Menu", "@id": "https://kanokai-web.vercel.app/#menu",
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
  const sc = document.createElement("script");
  sc.type = "application/ld+json"; sc.textContent = JSON.stringify(data);
  document.head.appendChild(sc);
}

/* ---------- Reserva por WhatsApp ---------- */
const pad = n => String(n).padStart(2, "0");
const todayISO = () => { const d = new Date(); return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; };
const parseDate = v => { const [y, m, d] = v.split("-").map(Number); return new Date(y, m - 1, d); };
const label12 = mins => {
  const h = Math.floor(mins / 60) % 24, m = mins % 60, ap = h < 12 ? "AM" : "PM", h12 = h % 12 || 12;
  return `${h12}:${pad(m)} ${ap}`;
};
function renderTimes() {
  const sel = $("#resTime"), dv = $("#resDate").value, prev = sel.value;
  const dow = dv ? parseDate(dv).getDay() : -1;
  const last = dow === 5 || dow === 6 ? 24 * 60 : 21 * 60 + 30;   // Vie–Sáb hasta 12 AM, resto 9:30 PM
  let opts = "";
  for (let m = 12 * 60; m <= last; m += 30) opts += `<option value="${m}">${label12(m)}</option>`;
  sel.innerHTML = `<option value="">${lang === "es" ? "Elige hora" : "Pick a time"}</option>` + opts;
  if ([...sel.options].some(o => o.value === prev)) sel.value = prev;
}
function renderPeople() {
  const sel = $("#resPeople"), prev = sel.value || "2";
  let o = "";
  for (let n = 1; n <= 12; n++) o += `<option value="${n}">${n} ${lang === "es" ? (n === 1 ? "persona" : "personas") : (n === 1 ? "person" : "people")}</option>`;
  o += `<option value="13+">13+ ${lang === "es" ? "personas" : "people"}</option>`;
  sel.innerHTML = o; sel.value = prev;
}
function renderReserve() {
  $("#resDate").min = todayISO();
  renderTimes(); renderPeople();
  $("#reserveForm").hidden = !BUSINESS.whatsapp;
}
$("#resDate").addEventListener("change", renderTimes);
$("#reserveForm").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.currentTarget;
  if (!f.reportValidity()) return;
  const es = lang === "es";
  const date = parseDate($("#resDate").value).toLocaleDateString(es ? "es-US" : "en-US", { weekday: "long", day: "numeric", month: "long" });
  const time = label12(Number($("#resTime").value));
  const people = $("#resPeople").value;
  const name = $("#resName").value.trim(), notes = $("#resNotes").value.trim();
  let msg = es
    ? `Hola KONAKAI, me gustaría reservar una mesa para ${people} ${people === "1" ? "persona" : "personas"} el ${date} a las ${time}.`
    : `Hi KONAKAI, I'd like to reserve a table for ${people} ${people === "1" ? "person" : "people"} on ${date} at ${time}.`;
  if (name) msg += es ? ` A nombre de: ${name}.` : ` Name: ${name}.`;
  if (notes) msg += es ? ` Comentario: ${notes}.` : ` Note: ${notes}.`;
  const url = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(msg)}`;
  const w = window.open(url, "_blank", "noopener");
  if (!w) location.href = url;
});

/* Eventos */
$("#langToggle").addEventListener("click", () => {
  lang = lang === "es" ? "en" : "es";
  try { localStorage.setItem("konakai-lang", lang); } catch {}
  applyLang();
});
$("#fullMenuToggle").addEventListener("click", () => { fullOpen = !fullOpen; renderFullToggle(); });
$("#menuTabs").addEventListener("click", e => {
  const b = e.target.closest(".tab"); if (!b) return;
  activeTab = b.dataset.id; renderTabs(); renderList();
});
$("#menuTabs").addEventListener("keydown", e => {
  const i = CARTA.findIndex(c => c.id === activeTab);
  const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0; if (!d) return;
  activeTab = CARTA[(i + d + CARTA.length) % CARTA.length].id; renderTabs(); renderList();
  $(`.tab[data-id="${activeTab}"]`).focus();
});

const burger = $("#burger");
const setNav = open => {
  document.body.classList.toggle("nav-open", open);
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? (lang === "es" ? "Cerrar menú" : "Close menu") : (lang === "es" ? "Abrir menú" : "Open menu"));
};
burger.addEventListener("click", () => setNav(!document.body.classList.contains("nav-open")));
$$("#navLinks a").forEach(a => a.addEventListener("click", () => setNav(false)));
addEventListener("keydown", e => { if (e.key === "Escape") setNav(false); });

const lb = $("#lightbox");
document.addEventListener("click", e => {
  const z = e.target.closest("[data-zoom]"); if (!z) return;
  $("img", lb).src = `img/${z.dataset.zoom}.jpg`;
  $("img", lb).alt = $(".lb-cap", lb).textContent = dishName(z.dataset.zoom);
  lb.showModal();
});
$(".lb-close").addEventListener("click", () => lb.close());
lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });

const nav = $(".nav");
const onScroll = () => nav.classList.toggle("scrolled", scrollY > 40);
addEventListener("scroll", onScroll, { passive: true }); onScroll();

const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { rootMargin: "0px 0px -8% 0px" });
$$(".section-head, .about-grid, .score, .visit-grid").forEach(el => { el.classList.add("reveal"); io.observe(el); });

$("#year").textContent = new Date().getFullYear();
/* Link directo a la carta: /#carta o /#carta-chifa */
const h = location.hash.match(/^#carta(?:-(\w+))?$/);
if (h) { fullOpen = true; if (CARTA.some(c => c.id === h[1])) activeTab = h[1]; }

injectMenuSchema();
applyLang();
if (h) $("#fullMenu").scrollIntoView();
