/* =========================================================
   DATOS DEL RESTAURANTE — EDITAR AQUÍ
   (Todo lo marcado TODO debe confirmarse con el cliente)
   ========================================================= */
/* Regla: un dato vacío ("" o []) se OCULTA en la web. Nunca publicar datos inventados. */
const BUSINESS = {
  address: "Fort Lauderdale, FL",           // TODO: dirección completa (calle, número, ZIP)
  mapQuery: "Fort Lauderdale, FL",          // TODO: igual a la dirección completa
  phone: "",                                // TODO: ej. "+1 (954) 555-1234"
  whatsapp: "",                             // TODO: solo dígitos con código país, ej. "19545551234"
  instagram: "https://www.instagram.com/konakaiperuviancuisine/",
  orderUrl: "",                             // TODO: Toast / Uber Eats / DoorDash
  hours: [                                  // TODO: ej. { en: "Tue – Thu", es: "Mar – Jue", time: "11:30 AM – 9:00 PM" }
  ],
};

/* Precios: dejar "" para ocultar. */
const MENU = [
  { id: "ceviches", en: "Ceviches", es: "Ceviches", items: [
    { img: "ceviche-clasico", price: "",
      en: ["Classic Ceviche", "Fresh fish cured in lime, red onion, ají limo, sweet potato and Peruvian corn."],
      es: ["Ceviche Clásico", "Pescado fresco en limón, cebolla morada, ají limo, camote y choclo."] },
    { img: "ceviche-aji-amarillo", price: "",
      en: ["Ají Amarillo Ceviche", "Our leche de tigre blended with golden ají amarillo. Bright, creamy, a little heat."],
      es: ["Ceviche al Ají Amarillo", "Leche de tigre con ají amarillo. Cremoso, cítrico y con su picor."] },
    { img: "ceviche-rocoto", price: "",
      en: ["Rocoto Ceviche", "Fish in a rocoto pepper cream with crunchy cancha and choclo."],
      es: ["Ceviche al Rocoto", "Pescado en crema de rocoto con cancha y choclo."] },
    { img: "ceviche-cucharitas", price: "",
      en: ["Ceviche Spoons", "Six bites of ceviche, perfect to share or start the night."],
      es: ["Cucharitas de Ceviche", "Seis bocados de ceviche para compartir o empezar la noche."] },
  ]},
  { id: "starters", en: "To share", es: "Para picar", items: [
    { img: "papas-rellenas", price: "",
      en: ["Papa Rellena", "Golden potato croquettes stuffed with seasoned beef, with salsa criolla."],
      es: ["Papa Rellena", "Papa dorada rellena de carne sazonada, con salsa criolla."] },
    { img: "yuquitas-huancaina", price: "",
      en: ["Yuquitas a la Huancaína", "Crispy cassava fries with our creamy huancaína sauce."],
      es: ["Yuquitas a la Huancaína", "Yuca frita crocante con nuestra salsa huancaína."] },
    { img: "chicharron-pescado", price: "",
      en: ["Chicharrón de Pescado", "Crispy fried fish, cassava and salsa criolla."],
      es: ["Chicharrón de Pescado", "Pescado frito crocante, yuca y salsa criolla."] },
  ]},
  { id: "mains", en: "Mains", es: "Fondos", items: [
    { img: "lomo-saltado-tallarin", price: "",
      en: ["Lomo Saltado & Huancaína Noodles", "Wok-seared beef, onion and tomato over noodles in huancaína with parmesan."],
      es: ["Lomo Saltado con Tallarín a la Huancaína", "Lomo al wok con cebolla y tomate sobre tallarín en huancaína con parmesano."] },
    { img: "bistec-huancaina", price: "",
      en: ["Steak & Huancaína Noodles", "Grilled steak with chimichurri, huancaína noodles and golden potatoes."],
      es: ["Bistec con Tallarín a la Huancaína", "Bistec a la parrilla con chimichurri, tallarín a la huancaína y papas."] },
    { img: "milanesa-huancaina", price: "",
      en: ["Milanesa & Huancaína Noodles", "Breaded cutlet, huancaína noodles and potatoes."],
      es: ["Milanesa con Tallarín a la Huancaína", "Milanesa apanada, tallarín a la huancaína y papitas."] },
    { img: "sudado-pescado", price: "",
      en: ["Sudado de Pescado", "Whole fish braised in a tomato, onion and ají broth, with cassava."],
      es: ["Sudado de Pescado", "Pescado entero en jugo de tomate, cebolla y ají, con yuca."] },
    { img: "pampano-tostones", price: "",
      en: ["Grilled Pompano", "Whole pompano with herbs, served with crispy tostones."],
      es: ["Pámpano a la Plancha", "Pámpano entero con hierbas y tostones crocantes."] },
  ]},
  { id: "selva", en: "From the Amazon", es: "De la selva", items: [
    { img: "tacacho-cecina", price: "",
      en: ["Tacacho con Cecina", "Green-plantain tacacho, smoked cecina, regional chorizo, sweet plantain, juane and a fried egg."],
      es: ["Tacacho con Cecina", "Tacacho, cecina, chorizo regional, maduro, juane y huevo frito."] },
    { img: "juane-maduros", price: "",
      en: ["Juane", "Seasoned rice and chicken, wrapped and steamed the jungle way, with sweet plantain."],
      es: ["Juane", "Arroz sazonado con gallina al estilo de la selva, con maduros."] },
    { img: "plato-amazonico", price: "",
      en: ["Amazon Platter", "Juane, tacacho, chorizo regional and fried sweet plantains. Made to share."],
      es: ["Plato Amazónico", "Juane, tacacho, chorizo regional y maduros fritos. Para compartir."] },
  ]},
];

const GALLERY = [
  "ceviche-aji-amarillo", "tacacho-cecina", "papas-rellenas", "pampano-tostones", "chicharron-3",
  "ceviche-clasico", "sudado-pescado", "plato-amazonico-2", "yuquitas-huancaina", "ceviche-rocoto",
  "bistec-huancaina", "chicharron-2",
];

/* ========================================================= */

const I18N = {
  es: {
    "nav.menu": "Menú", "nav.selva": "Selva", "nav.gallery": "Galería", "nav.visit": "Visítanos",
    "cta.call": "Llámanos", "cta.menu": "Ver el menú", "cta.order": "Pedir en línea",
    "cta.directions": "Cómo llegar", "cta.whatsapp": "Reservar por WhatsApp",
    "a11y.skip": "Ir al menú",
    "bar.call": "Llamar", "bar.directions": "Cómo llegar", "bar.menu": "Menú",
    "hero.eyebrow": "Restaurante peruano · Fort Lauderdale",
    "hero.title": "Comida peruana, de la costa a la selva.",
    "hero.lead": "Ceviche al momento, lomo saltado al wok y los sabores amazónicos del tacacho y el juane. Cocina peruana de verdad, aquí en Fort Lauderdale.",
    "hl.1.t": "Ceviche al momento", "hl.1.p": "Pescado fresco, limón y ají, curado cuando lo pides. Nunca antes.",
    "hl.2.t": "La selva en tu plato", "hl.2.p": "Tacacho, cecina, chorizo regional y juane: platos de la Amazonía peruana difíciles de encontrar en Florida.",
    "hl.3.t": "Para compartir", "hl.3.p": "Porciones generosas, recetas de familia y una mesa donde siempre cabe uno más.",
    "visit.soon": "Próximamente", "visit.callfor": "Escríbenos por Instagram",
    "story.eyebrow": "Nuestra cocina",
    "story.title": "Las cevicherías de Lima. Los mercados de Iquitos. Tu barrio.",
    "story.p1": "En Konakai cocinamos el Perú con el que crecimos: ceviches bien cítricos, chicharrón crocante, huancaína cremosa y el plátano ahumado de la Amazonía.",
    "story.p2": "Todo se prepara desde cero, con ají peruano, pescado fresco y recetas que viajaron con nosotros.",
    "menu.eyebrow": "La carta", "menu.title": "Lo que estamos cocinando",
    "menu.note": "Pregunta por la pesca del día y los especiales fuera de carta.",
    "selva.eyebrow": "Sabores de la Amazonía peruana",
    "selva.title": "Tacacho, cecina y juane",
    "selva.p": "Plátano verde majado con chancho, cecina ahumada, chorizo regional, maduro y juane: el desayuno selvático que alimenta a toda la familia. Difícil de encontrar en Florida. Fácil de encontrar aquí.",
    "selva.cta": "Ver platos de la selva",
    "gallery.eyebrow": "Galería", "gallery.title": "Desde nuestra cocina",
    "visit.eyebrow": "Visítanos", "visit.title": "Ven con hambre.",
    "visit.address": "Dirección", "visit.phone": "Teléfono", "visit.hours": "Horario",
    "footer.tag": "Cocina peruana · Fort Lauderdale, FL",
    "gallery.ig": "Síguenos en @konakaiperuviancuisine",
  },
};

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const EN_DEFAULTS = {};
$$("[data-i18n]").forEach(el => (EN_DEFAULTS[el.dataset.i18n] = el.innerHTML));

let lang = "en";
try { lang = localStorage.getItem("konakai-lang") || (navigator.language || "").startsWith("es") && "es" || "en"; } catch {}
let activeTab = MENU[0].id;

const pic = (name, alt, lazy = true) =>
  `<picture><source srcset="img/${name}.webp" type="image/webp"><img src="img/${name}.jpg" alt="${alt}"${lazy ? ' loading="lazy"' : ""}></picture>`;

function allDishes() { return MENU.flatMap(c => c.items); }
function dishName(img) { const d = allDishes().find(x => x.img === img); return d ? d[lang][0] : ""; }

function renderTabs() {
  $("#menuTabs").innerHTML = MENU.map(c =>
    `<button class="tab" role="tab" data-id="${c.id}" aria-selected="${c.id === activeTab}" tabindex="${c.id === activeTab ? 0 : -1}">${c[lang]}</button>`).join("");
}
function renderMenu() {
  const cat = MENU.find(c => c.id === activeTab);
  $("#menuGrid").innerHTML = cat.items.map((d, i) => {
    const [name, desc] = d[lang];
    return `<article class="dish" style="animation-delay:${i * 60}ms">
      <button type="button" data-zoom="${d.img}" aria-label="${name}">${pic(d.img, name)}</button>
      <div class="dish-body"><h3>${name}</h3><p>${desc}</p>${d.price ? `<span class="price">${d.price}</span>` : ""}</div>
    </article>`;
  }).join("");
}
function renderGallery() {
  $("#galleryGrid").innerHTML = GALLERY.map(g => {
    const alt = dishName(g) || "Konakai";
    return `<button type="button" class="reveal" data-zoom="${g}" aria-label="${alt}">${pic(g, alt)}</button>`;
  }).join("");
  observeReveal();
}
function renderBusiness() {
  const B = BUSINESS, es = lang === "es";
  const tel = B.phone.replace(/[^\d+]/g, "");
  const show = (sel, ok) => $$(sel).forEach(el => (el.hidden = !ok));

  $$(".js-address").forEach(el => (el.textContent = B.address));
  $$(".js-directions").forEach(el => (el.href = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(B.mapQuery)}`));
  const map = $(".js-map"), src = `https://maps.google.com/maps?q=${encodeURIComponent(B.mapQuery)}&z=14&output=embed`;
  if (map.getAttribute("src") !== src) map.src = src;

  $$(".js-phone").forEach(el => { el.textContent = B.phone; el.href = `tel:${tel}`; });
  $$(".js-call").forEach(el => (el.href = `tel:${tel}`));
  show(".js-phone-row, .js-call", !!tel);

  const waText = encodeURIComponent(es ? "Hola Konakai, quisiera reservar una mesa." : "Hi Konakai, I'd like to reserve a table.");
  $$(".js-whatsapp").forEach(el => (el.href = `https://wa.me/${B.whatsapp}?text=${waText}`));
  show(".js-whatsapp", !!B.whatsapp);

  $$(".js-order").forEach(el => (el.href = B.orderUrl || "#"));
  show(".js-order", !!B.orderUrl);
  $$(".js-ig").forEach(el => (el.href = B.instagram));

  $(".js-hours").innerHTML = B.hours.length
    ? B.hours.map(h => `<li><span>${h[lang]}</span><span>${es && h.time === "Closed" ? "Cerrado" : h.time}</span></li>`).join("")
    : `<li><span>${es ? "Pronto publicaremos el horario." : "Hours coming soon."}</span></li>
       <li><a href="${B.instagram}" target="_blank" rel="noopener">${es ? "Escríbenos por Instagram" : "Message us on Instagram"}</a></li>`;
}

/* SEO: menú como datos estructurados (schema.org/Menu) */
function injectMenuSchema() {
  const data = {
    "@context": "https://schema.org", "@type": "Menu",
    "@id": "https://kanokai-web.vercel.app/#menu",
    name: "Konakai Peruvian Cuisine Menu", inLanguage: ["en", "es"],
    hasMenuSection: MENU.map(c => ({
      "@type": "MenuSection", name: c.en,
      hasMenuItem: c.items.map(d => ({
        "@type": "MenuItem", name: d.en[0], description: d.en[1],
        image: `https://kanokai-web.vercel.app/img/${d.img}.jpg`,
      })),
    })),
  };
  const sc = document.createElement("script");
  sc.type = "application/ld+json"; sc.textContent = JSON.stringify(data);
  document.head.appendChild(sc);
}

function applyLang() {
  document.documentElement.lang = lang;
  $$("[data-i18n]").forEach(el => {
    const k = el.dataset.i18n;
    el.innerHTML = lang === "es" && I18N.es[k] ? I18N.es[k] : EN_DEFAULTS[k];
  });
  const t = $("#langToggle");
  t.textContent = lang === "es" ? "EN" : "ES";
  t.setAttribute("aria-label", lang === "es" ? "Switch to English" : "Cambiar a español");
  renderTabs(); renderMenu(); renderGallery(); renderBusiness();
}

/* Events */
$("#langToggle").addEventListener("click", () => {
  lang = lang === "es" ? "en" : "es";
  try { localStorage.setItem("konakai-lang", lang); } catch {}
  applyLang();
});
$("#menuTabs").addEventListener("click", e => {
  const b = e.target.closest(".tab"); if (!b) return;
  activeTab = b.dataset.id; renderTabs(); renderMenu();
});
$("#menuTabs").addEventListener("keydown", e => {
  const i = MENU.findIndex(c => c.id === activeTab);
  const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0; if (!d) return;
  activeTab = MENU[(i + d + MENU.length) % MENU.length].id; renderTabs(); renderMenu();
  $(`.tab[data-id="${activeTab}"]`).focus();
});
$$("[data-tab]").forEach(a => a.addEventListener("click", () => { activeTab = a.dataset.tab; renderTabs(); renderMenu(); }));

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

let io;
function observeReveal() {
  io ||= new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { rootMargin: "0px 0px -8% 0px" });
  $$(".reveal:not(.in)").forEach(el => io.observe(el));
}
$$(".story, .section-head, .selva-inner, .visit-grid").forEach(el => el.classList.add("reveal"));

$("#year").textContent = new Date().getFullYear();
injectMenuSchema();
applyLang();
