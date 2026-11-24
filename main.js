/* =========================================================
   DATOS DEL RESTAURANTE — EDITAR AQUÍ
   Fuente: ficha de Google de Konakai Peruvian Cuisine (nov 2026).
   Regla: un dato vacío ("" o []) se OCULTA. Nunca publicar datos inventados.
   ========================================================= */
const BUSINESS = {
  address: "4305 NW 88th Ave, Sunrise, FL 33351",
  mapQuery: "Konakai Peruvian Cuisine, 4305 NW 88th Ave, Sunrise, FL 33351",
  directionsUrl: "https://maps.google.com/?cid=11511504645038760523",
  /* Vista 360°: punto frente al local (OpenStreetMap) y hacia dónde mira la cámara (0=N, 90=E, 180=S, 270=O) */
  streetView: { lat: 26.177652, lng: -80.2694242, heading: 0, pitch: 5 },
  phones: ["(954) 909-5525", "(954) 404-4272"],
  email: "konakai1992@gmail.com",
  whatsapp: "19544044272",   // CONFIRMAR con el cliente cuál número tiene WhatsApp
  instagram: "https://www.instagram.com/konakaiperuviancuisine/",
  /* Pedidos online / delivery. Vacío = el botón se oculta. */
  order: {
    uberEats: "https://www.ubereats.com/store/konakai-peruvian-cuisine-sunrise/xiiVzcXHUcqFt3ue8vZhCA", // CONFIRMAR con el cliente
    doordash: "",
    grubhub: "",
    direct: "",          // web propia de pedidos (Toast, ChowNow…)
  },
  /* Feed de Instagram en vivo con Behold (behold.so): pegar aquí el Feed ID cuando el cliente conecte su cuenta. */
  beholdFeedId: "",
  reviewsUrl: "https://www.google.com/maps/search/?api=1&query=Konakai+Peruvian+Cuisine+4305+NW+88th+Ave+Sunrise+FL",
  hours: [
    { en: "Mon–Thu & Sun", es: "Lun–Jue y Dom", time: "12:00 PM – 10:00 PM" },
    { en: "Fri – Sat", es: "Vie – Sáb", time: "12:00 PM – 1:00 AM" },
  ],
};

/* Mensaje de WhatsApp para eventos (se completa con el tipo elegido) */
const WA_EVENT = {
  es: t => `Hola KONAKAI, quiero organizar ${t} y me gustaría recibir asesoría. Fecha aproximada: ___ · Cantidad de personas: ___`,
  en: t => `Hi KONAKAI, I'd like to plan ${t} and would love some guidance. Approximate date: ___ · Number of guests: ___`,
};
const EVENT_TYPES = [
  { id: "bday",     es: "un cumpleaños",       en: "a birthday",       les: "Cumpleaños",       len: "Birthday" },
  { id: "private",  es: "un evento privado",   en: "a private event",  les: "Evento privado",   len: "Private event" },
  { id: "catering", es: "un servicio de catering", en: "catering",     les: "Catering",         len: "Catering" },
  { id: "karaoke",  es: "una noche de karaoke", en: "a karaoke night", les: "Karaoke",          len: "Karaoke" },
  { id: "custom",   es: "un evento a medida",  en: "a custom event",   les: "Otro / a medida",  len: "Something else" },
];

/* Mensaje predefinido de WhatsApp */
const WA_TEXT = {
  es: "Hola KONAKAI, me gustaría reservar una mesa para ",
  en: "Hi KONAKAI, I'd like to reserve a table for ",
};

/* Platos estrella (con foto). tag: "rec" = Recomendado, "share" = Para compartir.
   price: "" = sin precio publicado. */
const FEATURED = [
  { img: "ceviche-carretillero", price: "22.99", tag: "rec",
    en: ["Ceviche Carretillero", "Our classic ceviche crowned with crispy calamari, sweet potato and Peruvian corn."],
    es: ["Ceviche Carretillero", "Nuestro ceviche clásico coronado con chicharrón de calamar, camote y choclo."] },
  { img: "tropikal-konakai", price: "58.99", tag: "share",
    en: ["Tropikal Konakai", "Causa, jalea mixta, tostones and shrimp chalaca, with a vuelve a la vida cocktail."],
    es: ["Tropikal Konakai", "Causa, jalea mixta, tostones y camarones a la chalaca, con su vuelve a la vida."] },
  { img: "pulpo-anticuchero", price: "27.99", tag: "rec",
    en: ["Pulpo Anticuchero", "Octopus marinated in Peruvian spices and grilled, served sizzling with golden potatoes."],
    es: ["Pulpo Anticuchero", "Pulpo marinado en especias peruanas, a la parrilla y servido en plancha caliente con papas doradas."] },
  { img: "lomo-saltado", price: "24.99", tag: "rec",
    en: ["Lomo Saltado", "Wok-seared steak with onion, tomato and cilantro in wine and soy sauce, with rice and fries."],
    es: ["Lomo Saltado", "Lomo al wok con cebolla, tomate y culantro en vino y sillao, con arroz y papas fritas."] },
  { img: "ceviche-afrodisiaco", price: "33.99", tag: "",
    en: ["Ceviche Afrodisíaco del Chef", "Corvina, shrimp, mussels, octopus, scallops, calamari and avocado."],
    es: ["Ceviche Afrodisíaco del Chef", "Corvina, camarón, choros, pulpo, conchas, calamar y palta."] },
  { img: "arroz-con-mariscos", price: "24.99", tag: "",
    en: ["Arroz con Mariscos", "Peruvian-style seafood rice, similar to paella."],
    es: ["Arroz con Mariscos", "Arroz con mariscos a la peruana, al estilo de una paella."] },
  { img: "kam-lu-wonton", price: "28.99", tag: "share",
    en: ["Kam Lu Wonton", "Chifa classic: sweet and sour chicken, pork and shrimp over crispy wontons with pineapple."],
    es: ["Kam Lu Wonton", "Clásico del chifa: pollo, cerdo y camarón agridulce sobre wantán crocante con piña."] },
  { img: "tacacho-cecina-chorizo", price: "29.99", tag: "",
    en: ["Cecina, Chorizo con Tacacho", "From the Amazon: smoked cecina, regional chorizo and green-plantain tacacho."],
    es: ["Cecina, Chorizo con Tacacho", "De la selva: cecina ahumada, chorizo regional y tacacho de plátano verde."] },
  { img: "anticuchos", price: "17.99", tag: "",
    en: ["Anticuchos", "Beef heart skewers marinated in ají panca, grilled over high heat."],
    es: ["Anticuchos", "Brochetas de corazón de res marinadas en ají panca, a la parrilla."] },
];

/* La carta completa está en menu-data.js (CARTA). */

/* Reseñas reales: copiar textualmente de Google con permiso del cliente.
   Formato: { text: "...", author: "Nombre I.", source: "Google" }. Vacío = se oculta. */
const REVIEWS = [];

/* Galería: [archivo, nombre EN, nombre ES] */
const GALLERY = [
  ["g-ceviche-mixto", "Ceviche Mixto Carretillero", "Ceviche Mixto Carretillero"],
  ["g-trilogia-copas", "Trilogy of Ceviches", "Trilogía de Ceviches"],
  ["g-causa-acevichada", "Causa Acevichada", "Causa Acevichada"],
  ["g-chaufa-camaron", "Shrimp Fried Rice", "Chaufa de Camarón"],
  ["g-jalea-pargo", "Jalea de Pargo", "Jalea de Pargo"],
  ["g-leche-tigre", "Leche de Tigre Carretillera", "Leche de Tigre Carretillera"],
  ["g-pollo-pina", "Chifa Chicken with Pineapple", "Pollo con Piña (chifa)"],
  ["g-aji-gallina", "Ají de Gallina", "Ají de Gallina"],
  ["g-torta-chocolate", "Chocolate Cake", "Torta de Chocolate"],
  ["g-flan", "Flan", "Flan"],
];

const ABOUT_IMGS = ["parihuela-noche", "palta-rellena", "cheesecake-maracuya"];

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
    "nav.events": "Eventos",
    "ev.eyebrow": "Eventos y celebraciones", "ev.title": "Arma tu evento en Konakai",
    "ev.lead": "Cumpleaños, reuniones de empresa, aniversarios o una noche de karaoke con amigos: ponemos la comida peruana, el ambiente y la música. Tú solo disfruta.",
    "ev.1.t": "Eventos privados", "ev.1.p": "Reserva un espacio para tu grupo con menú pensado para la ocasión.",
    "ev.2.t": "Servicio de catering", "ev.2.p": "Llevamos nuestros piqueos, ceviches y chifa a tu oficina, casa o celebración.",
    "ev.3.t": "Karaoke", "ev.3.p": "Viernes y sábado desde las 9 PM. Comida, rumba y amigos.",
    "ev.4.t": "Festeja tu cumpleaños", "ev.4.p": "Celebra con tu familia y te ayudamos a que sea un día especial.",
    "ev.5.t": "Arma tu evento", "ev.5.p": "Piqueos para compartir, menú a medida y bebidas para tu grupo.",
    "ev.cta.t": "Te asesoramos en directo", "ev.cta.p": "Cuéntanos qué tienes en mente y te respondemos por WhatsApp con opciones y precios.",
    "ev.cta.pick": "¿Qué quieres celebrar?", "ev.cta.btn": "Hablar con un asesor",
    "order.title": "¿Lo quieres en casa?", "order.sub": "Pide delivery o recoge en el local.",
    "order.pickup": "Para llevar:",
    "loc.eyebrow": "Ubicación", "loc.title": "Tu mesa te espera en Sunrise.",
    "loc.parking": "Estacionamiento gratuito",
    "cta.call": "Llámanos",
    "sv.open": "Ver la fachada en 360°", "sv.eyebrow": "Vista 360°", "sv.title": "Fachada de Konakai · 4305 NW 88th Ave",
    "sv.hint": "Arrastra para mirar alrededor. Imágenes © Google.", "sv.ext": "Abrir en Google Maps",
    "nav.gallery": "Galería", "gallery.eyebrow": "Galería", "gallery.title": "Directo de nuestra cocina",
    "gallery.ig": "Más en Instagram",
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

/* Foto responsive: el navegador elige 800/1400/2400 px según el tamaño en pantalla y la densidad */
const srcset = n => `img/${n}-800.webp 800w, img/${n}-1400.webp 1400w, img/${n}-2400.webp 2400w`;
const pic = (name, alt, sizes = "100vw", lazy = true) =>
  `<picture><source type="image/webp" srcset="${srcset(name)}" sizes="${sizes}"><img src="img/${name}.jpg" alt="${alt}"${lazy ? ' loading="lazy" decoding="async"' : ""}></picture>`;
const dishName = img => {
  const d = FEATURED.find(x => x.img === img); if (d) return d[lang][0];
  const g = GALLERY.find(x => x[0] === img); if (g) return lang === "es" ? g[2] : g[1];
  return "Konakai";
};

function renderFeatured() {
  $("#featuredGrid").innerHTML = FEATURED.map((d, i) => {
    const [name, desc] = d[lang];
    const tag = d.tag ? `<span class="tag tag-${d.tag}">${TAGS[d.tag][lang]}</span>` : "";
    return `<article class="dish" style="animation-delay:${i * 60}ms">
      <button type="button" data-zoom="${d.img}" aria-label="${name}">${pic(d.img, name, "(max-width: 600px) 92vw, (max-width: 980px) 46vw, 380px")}${tag}</button>
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
function renderList() {
  $("#menuList").innerHTML = renderCarta(lang, activeTab);
}
function showTab(id) {
  activeTab = id; renderTabs();
  $$("#menuList .mcat").forEach(sec => (sec.hidden = sec.dataset.cat !== id));
}
function renderGallery() {
  $("#galleryGrid").innerHTML = GALLERY.map(([img, en, es]) => {
    const name = lang === "es" ? es : en;
    return `<button type="button" class="gitem" data-zoom="${img}" aria-label="${name}">${pic(img, name, "(max-width: 760px) 92vw, 50vw")}<span class="gcap">${name}</span></button>`;
  }).join("");
}
let eventType = "bday";
function renderEvents() {
  const box = $("#evChips"); if (!box) return;
  box.innerHTML = EVENT_TYPES.map(e =>
    `<button type="button" class="chip" data-ev="${e.id}" aria-pressed="${e.id === eventType}">${lang === "es" ? e.les : e.len}</button>`).join("");
  const ev = EVENT_TYPES.find(e => e.id === eventType);
  const msg = WA_EVENT[lang](lang === "es" ? ev.es : ev.en);
  $$(".js-wa-event").forEach(a => (a.href = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(msg)}`));
}
function renderOrder() {
  const O = BUSINESS.order;
  const links = [
    ["direct", lang === "es" ? "Pedir en línea" : "Order online", "o-direct"],
    ["uberEats", "Uber Eats", "o-uber"], ["doordash", "DoorDash", "o-dd"], ["grubhub", "Grubhub", "o-gh"],
  ].filter(([k]) => O[k]);
  $("#orderLinks").innerHTML = links.map(([k, label, cls]) =>
    `<a class="obtn ${cls}" href="${O[k]}" target="_blank" rel="noopener">${label}<span aria-hidden="true">↗</span></a>`).join("");
  $("#orderBar").hidden = !links.length && !BUSINESS.phones.length;
}
let beholdLoaded = false;
function renderInstagram() {
  if (!BUSINESS.beholdFeedId || beholdLoaded) return;
  beholdLoaded = true;
  const s = document.createElement("script"); s.type = "module"; s.src = "https://w.behold.so/widget.js";
  document.head.appendChild(s);
  $("#galleryGrid").outerHTML = `<behold-widget feed-id="${BUSINESS.beholdFeedId}"></behold-widget>`;
}
function renderAbout() {
  $("#aboutImgs").innerHTML = ABOUT_IMGS.map((g, i) =>
    `<button type="button" class="ai ai-${i}" data-zoom="${g}" aria-label="Konakai">${pic(g, "Konakai", "(max-width: 860px) 50vw, 28vw")}</button>`).join("");
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
  $$(".js-directions").forEach(el => (el.href = B.directionsUrl));
  const map = $(".js-map"), src = `https://maps.google.com/maps?q=${encodeURIComponent(B.mapQuery)}&z=15&output=embed`;
  if (map.getAttribute("src") !== src) map.src = src;

  $(".js-phones").innerHTML = B.phones.map(p => `<a href="tel:+1${p.replace(/\D/g, "")}">${p}</a>`).join("<br>");
  $$(".js-call").forEach(el => (el.href = `tel:+1${B.phones[0].replace(/\D/g, "")}`));
  $$(".js-phone1").forEach(el => (el.textContent = B.phones[0]));
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
  renderFeatured(); renderTabs(); renderList(); renderAbout(); renderGallery(); renderInstagram(); renderEvents(); renderOrder(); renderReviews(); renderBusiness(); renderFullToggle(); renderReserve();
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

/* ---------- Ubicación: carrusel Ken Burns ---------- */
(() => {
  const root = $(".location"), slides = $$(".kb-slide", root), bars = $$(".kb-bar", root);
  if (!slides.length) return;
  const DUR = 7000;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let i = 0, timer = null, visible = false;
  const show = n => {
    const prev = slides[i];
    i = (n + slides.length) % slides.length;
    const cur = slides[i];
    slides.forEach(sl => sl !== prev && sl !== cur && sl.classList.remove("run"));
    prev.classList.remove("is-active");
    cur.classList.remove("run"); void cur.offsetWidth; cur.classList.add("run", "is-active");
    bars.forEach((b, k) => { b.classList.toggle("done", k < i); b.classList.remove("on"); });
    void bars[i].offsetWidth; bars[i].classList.add("on");
  };
  const play = () => { if (reduce || timer || !visible || document.hidden) return; timer = setInterval(() => show(i + 1), DUR); root.classList.remove("paused"); };
  const stop = () => { clearInterval(timer); timer = null; root.classList.add("paused"); };
  if (reduce) { root.classList.add("paused"); return; }
  bars[0].classList.add("on");
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; visible ? play() : stop(); }, { threshold: .15 }).observe(root);
  document.addEventListener("visibilitychange", () => (document.hidden ? stop() : play()));
})();

/* ---------- Vista 360° (Street View) ---------- */
(() => {
  const dlg = $("#sv360"), btn = $("#sv360Open");
  if (!dlg || !btn) return;
  const { lat, lng, heading, pitch } = BUSINESS.streetView;
  const embed = `https://maps.google.com/maps?q=&layer=c&cbll=${lat},${lng}&cbp=11,${heading},0,0,${pitch}&source=embed&output=svembed`;
  $(".js-sv-ext").href = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${lat},${lng}&heading=${heading}&pitch=${pitch}`;
  btn.addEventListener("click", () => {
    const fr = $("iframe", dlg);
    if (!fr.src) fr.src = embed;          // se carga solo al abrir: no pesa en la carga inicial
    dlg.showModal();
  });
  $(".sv360-close", dlg).addEventListener("click", () => dlg.close());
  dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });
})();

/* Chips de eventos */
document.addEventListener("click", e => {
  const c = e.target.closest("[data-ev]"); if (!c) return;
  eventType = c.dataset.ev; renderEvents();
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
  showTab(b.dataset.id);
});
$("#menuTabs").addEventListener("keydown", e => {
  const i = CARTA.findIndex(c => c.id === activeTab);
  const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0; if (!d) return;
  showTab(CARTA[(i + d + CARTA.length) % CARTA.length].id);
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
  $("img", lb).src = `img/${z.dataset.zoom}-2400.webp`;
  $("img", lb).alt = $(".lb-cap", lb).textContent = dishName(z.dataset.zoom);
  lb.showModal();
});
$(".lb-close").addEventListener("click", () => lb.close());
lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });

const nav = $(".nav");
const onScroll = () => nav.classList.toggle("scrolled", scrollY > 40);
addEventListener("scroll", onScroll, { passive: true }); onScroll();

const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { rootMargin: "0px 0px -8% 0px" });
$$(".section-head, .about-grid, .score, .visit-grid, .masonry").forEach(el => { el.classList.add("reveal"); io.observe(el); });

$("#year").textContent = new Date().getFullYear();
/* Link directo a la carta: /#carta o /#carta-chifa */
const h = location.hash.match(/^#carta(?:-(\w+))?$/);
if (h) { fullOpen = true; if (CARTA.some(c => c.id === h[1])) activeTab = h[1]; }

applyLang();
if (h) $("#fullMenu").scrollIntoView();
