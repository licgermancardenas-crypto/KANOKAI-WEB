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
  /* Teléfonos con su uso. El primero es el principal (llamadas y pedidos para llevar). */
  phones: [
    { num: "(954) 909-5525", en: "Restaurant · pickup orders", es: "Restaurante · pedidos para llevar" },
    { num: "(954) 404-4272", en: "WhatsApp · reservations & events", es: "WhatsApp · reservas y eventos" },
  ],
  email: "konakai1992@gmail.com",
  whatsapp: "19544044272",   // (954) 404-4272, confirmado por el cliente
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

/* Pedido para llevar por WhatsApp (sin comisión de apps) */
const WA_PICKUP = {
  es: "Hola KONAKAI, quiero hacer un pedido para recoger: ",
  en: "Hi KONAKAI, I'd like to place a pickup order: ",
};

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
    en: ["Arroz con Mariscos", "Rice cooked in a rich seafood stock with ají amarillo, ají panca and cilantro, loaded with shrimp, squid and mussels."],
    es: ["Arroz con Mariscos", "Arroz cocido en fondo de mariscos con ají amarillo, ají panca y culantro, con camarones, calamar y choros."] },
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
  ["gx-parihuela", "Parihuela", "Parihuela"],
  ["gx-chijaukay", "Chijaukay", "Chijaukay"],
  ["gx-arroz-nortena", "Arroz a la Norteña", "Arroz a la Norteña"],
  ["gx-chupe", "Chupe", "Chupe"],
  ["gx-salmon-oriental", "Salmón Oriental", "Salmón Oriental"],
  ["gx-lomo-pobre", "Lomo Saltado a lo Pobre", "Lomo Saltado a lo Pobre"],
  ["gx-special-platter", "Konakai Special Platter", "Konakai Special Platter"],
  ["gx-tacu-tacu-seco", "Tacu Tacu con Seco", "Tacu Tacu con Seco"],
  ["gx-tallarin-churrasco", "Tallarín Verde con Churrasco", "Tallarín Verde con Churrasco"],
  ["gx-pollo-pobre", "Pollo a la Parrilla a lo Pobre", "Pollo a la Parrilla a lo Pobre"],
];
/* Nombres de las fotos usadas en la carta (para la ampliación) */
const PHOTO_NAMES = {
  "g-chaufa-especial": ["Arroz Chaufa Especial Konakai · chicken, pork & shrimp fried rice", "Arroz Chaufa Especial Konakai · pollo, puerco y camarón"],
  "g-trilogia-copas": ["Trilogía de Ceviches", "Trilogía de Ceviches"], "g-leche-tigre": ["Leche de Tigre", "Leche de Tigre"],
  "g-causa-acevichada": ["Causa Acevichada", "Causa Acevichada"], "g-jalea-pargo": ["Jalea de Pargo", "Jalea de Pargo"],
  "g-pollo-pina": ["Chifa chicken with pineapple", "Pollo con piña (chifa)"], "g-aji-gallina": ["Ají de Gallina", "Ají de Gallina"],
  "g-torta-chocolate": ["Chocolate Cake", "Torta de Chocolate"], "g-flan": ["Flan", "Flan"],
  "palta-rellena": ["Palta Rellena", "Palta Rellena"], "cheesecake-maracuya": ["Passion Fruit Cheesecake", "Cheesecake de Maracuyá"],
};

const ABOUT_IMGS = ["hero-trilogia-ceviches", "loc-noche", "loc-terraza"];

/* ========================================================= */

const I18N = {
  es: {
    "a11y.skip": "Ir al menú",
    "nav.menu": "Menú", "nav.about": "Nosotros", "nav.reviews": "Reseñas", "nav.visit": "Ubicación",
    "cta.reserve": "Reservar mesa", "cta.whatsapp": "Reservar por WhatsApp", "cta.menu": "Ver la carta",
    "cta.directions": "Cómo llegar",
    "hero.rating": "+1,400 reseñas en Google",
    "hero.eyebrow": "Cocina peruana y chifa desde 1992",
    "hero.title": "La mesa peruana de confianza en Broward desde 1992.",
    "hero.lead": "Ceviches, lomo saltado humeante, el mejor chifa de la zona y sabores de la selva. A minutos de Sawgrass Mills y Fort Lauderdale.",
    "menu.eyebrow": "Sabores que se sienten", "menu.title": "Nuestra Carta",
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
    "reviews.count": "Basado en +1,400 reseñas de Google", "reviews.cta": "Leer todas las reseñas en Google",
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
    "order.title": "¿Lo quieres en casa?", "order.sub": "Pide para llevar sin comisiones por WhatsApp, o delivery por Uber Eats.",
    "order.pickup": "Para llevar:",
    "loc.eyebrow": "Ubicación", "loc.title": "Tu mesa te espera en Sunrise.",
    "loc.parking": "Estacionamiento gratuito",
    "cta.call": "Llámanos",
    "cta.book": "Reserva tu mesa",
    "a11y.skip": "Ir al contenido",
    "pm.eyebrow": "Sabores que se sienten", "pm.title": "Nuestra Carta", "pm.sub": "Cocina peruana, chifa y de la selva · Sunrise, FL",
    "pe.eyebrow": "Eventos y celebraciones", "pe.title": "Eventos privados, catering y karaoke", "pe.sub": "Konakai · Sunrise, Florida",
    "pe.platters": "Ver piqueos para compartir", "ev.more": "Más sobre eventos y catering →",
    "how.eyebrow": "Cómo funciona", "how.title": "Tu evento en tres pasos",
    "how.1.t": "Cuéntanos tu idea", "how.1.p": "Fecha, cantidad de personas y qué quieres celebrar, por WhatsApp o por teléfono.",
    "how.2.t": "Te proponemos el menú", "how.2.p": "Piqueos para compartir, platos de fondo y bebidas, con sus precios.",
    "how.3.t": "Confirmas y celebras", "how.3.p": "Te guardamos el espacio y nos encargamos de la comida.",
    "plat.eyebrow": "Para compartir", "plat.title": "Piqueos para tu grupo",
    "plat.lead": "Precios de nuestra carta. Para grupos grandes armamos opciones a medida.",
    "faq.eyebrow": "Preguntas frecuentes", "faq.title": "Lo que más nos preguntan",
    "faq.1.q": "¿Cómo reservo para un evento?", "faq.1.a": "Escríbenos por WhatsApp al (954) 404-4272 o llama al (954) 909-5525 con la fecha y la cantidad de personas.",
    "faq.2.q": "¿Cuándo hay karaoke?", "faq.2.a": "Los viernes y sábados desde las 9 PM.",
    "faq.3.q": "¿Se incluye propina en los grupos?", "faq.3.a": "Sí: a los grupos de 5 o más personas se les agrega un 18% de propina.",
    "faq.4.q": "¿Hacen catering?", "faq.4.a": "Sí. Cuéntanos la fecha, la cantidad de personas y el lugar, y te enviamos opciones y precios.",
    "faq.5.q": "¿Hay estacionamiento?", "faq.5.a": "Sí, hay estacionamiento gratuito.",
    "open.now": "Abierto ahora · cierra a las", "open.closed": "Cerrado ahora · abre", "open.today": "hoy a las", "open.tomorrow": "mañana a las",
    "menu.cartaTitle": "La carta completa", "menu.searchLabel": "Buscar en la carta", "menu.searchPh": "Buscar: ceviche, chaufa, lomo…",
    "menu.noResults": "Ningún plato coincide con tu búsqueda.",
    "order.waPickup": "Pedir para llevar por WhatsApp", "order.call": "Llamar:",
    "hero.sub": "Restaurante peruano · Sunrise, Florida", "hero.hours": "Horario de atención",
    "hero.note": "Reservas por WhatsApp o teléfono · Estacionamiento gratuito · Karaoke vie y sáb",
    "menu.lead": "Ceviches curados al momento, clásicos criollos al wok, nuestro famoso chifa y los sabores de la selva. 173 platos, cocinados como lo hace nuestra familia desde 1992.",
    "menu.favs": "Favoritos de la casa",
    "closing.eyebrow": "Hasta pronto", "closing.title": "Te esperamos para compartir la mesa",
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

const $ = (s, el = document) => (el ? el.querySelector(s) : null);
const $$ = (s, el = document) => (el ? [...el.querySelectorAll(s)] : []);
const on = (sel, ev, fn) => { const el = $(sel); if (el) el.addEventListener(ev, fn); };
const EN_DEFAULTS = {};
$$("[data-i18n]").forEach(el => (EN_DEFAULTS[el.dataset.i18n] = el.innerHTML));
EN_DEFAULTS["menu.less"] = "Hide the menu";

let lang = document.documentElement.lang === "es" ? "es" : "en";   // la página define el idioma: / (inglés) y /es/ (español)
let activeTab = SECTIONS[0].id;
const t = k => (lang === "es" && I18N.es[k]) || EN_DEFAULTS[k];
const money = (p, from) => p ? `${from ? (lang === "es" ? "desde " : "from ") : ""}$${p}` : "";

/* Foto responsive: el navegador elige 800/1400/2400 px según el tamaño en pantalla y la densidad */
const srcset = n => `/img/${n}-400.webp 400w, /img/${n}-800.webp 800w, /img/${n}-1400.webp 1400w, /img/${n}-2400.webp 2400w`;
const pic = (name, alt, sizes = "100vw", lazy = true) =>
  `<picture><source type="image/webp" srcset="${srcset(name)}" sizes="${sizes}"><img src="/img/${name}.jpg" alt="${alt}"${lazy ? ' loading="lazy" decoding="async"' : ""}></picture>`;
const dishName = img => {
  const d = FEATURED.find(x => x.img === img); if (d) return d[lang][0];
  const g = GALLERY.find(x => x[0] === img); if (g) return lang === "es" ? g[2] : g[1];
  if (PHOTO_NAMES[img]) return PHOTO_NAMES[img][lang === "es" ? 1 : 0];
  return "Konakai";
};

function renderFeatured() {
  if (!$("#featuredGrid")) return;
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
  if (!$("#menuTabs")) return;
  $("#menuTabs").innerHTML = SECTIONS.map(c =>
    `<button class="tab" role="tab" data-id="${c.id}" aria-selected="${c.id === activeTab}" tabindex="${c.id === activeTab ? 0 : -1}">${c[lang]}</button>`).join("");
}
function renderList() {
  if (!$("#menuList")) return;
  $("#menuList").innerHTML = renderCarta(lang, activeTab);
}
function showTab(id) {
  activeTab = id; renderTabs();
  if ($("#menuSearch") && $("#menuSearch").value) { $("#menuSearch").value = ""; filterMenu(""); }
  $$("#menuList .mcat").forEach(sec => (sec.hidden = sec.dataset.cat !== id));
}
/* Buscador de la carta (ignora tildes y mayúsculas) */
const norm = x => x.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
function filterMenu(q) {
  const query = norm(q.trim());
  const secs = $$("#menuList .mcat");
  if (!query) {
    secs.forEach(sec => { sec.hidden = sec.dataset.cat !== activeTab; $$(".mi, .mgroup, .mcat-sub, .cat-note", sec).forEach(x => (x.hidden = false)); });
    $("#menuTabs").classList.remove("dim"); $("#searchEmpty").hidden = true; return;
  }
  let total = 0;
  secs.forEach(sec => {
    if (sec.dataset.cat === "glossary") { sec.hidden = true; return; }
    let secCount = 0;
    $$(".mgroup", sec).forEach(g => {
      let n = 0;
      $$(".mi", g).forEach(mi => { const ok = norm(mi.textContent).includes(query); mi.hidden = !ok; if (ok) n++; });
      g.hidden = !n; secCount += n;
    });
    $$(".mcat-sub, .cat-note", sec).forEach(x => (x.hidden = true));
    sec.hidden = !secCount; total += secCount;
  });
  $("#menuTabs").classList.add("dim");
  $("#searchEmpty").hidden = total > 0;
}
function renderGallery() {
  if (!$("#galleryGrid")) return;
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
  if (!$("#orderBar")) return;
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
  if (!BUSINESS.beholdFeedId || beholdLoaded || !$("#galleryGrid")) return;
  beholdLoaded = true;
  const s = document.createElement("script"); s.type = "module"; s.src = "https://w.behold.so/widget.js";
  document.head.appendChild(s);
  $("#galleryGrid").outerHTML = `<behold-widget feed-id="${BUSINESS.beholdFeedId}"></behold-widget>`;
}
function renderAbout() {
  if (!$("#aboutImgs")) return;
  $("#aboutImgs").innerHTML = ABOUT_IMGS.map((g, i) =>
    `<button type="button" class="ai ai-${i}" data-speed="${[0.05, -0.04, 0.02][i]}" data-zoom="${g}" aria-label="Konakai">${pic(g, "Konakai", "(max-width: 860px) 50vw, 28vw")}</button>`).join("");
}
function renderReviews() {
  const box = $("#quotes"); if (!box) return;
  box.hidden = !REVIEWS.length;
  box.innerHTML = REVIEWS.map(r =>
    `<figure class="quote"><div class="stars" aria-hidden="true">★★★★★</div><blockquote>“${r.text}”</blockquote><figcaption>${r.author} · ${r.source}</figcaption></figure>`).join("");
}
function renderBusiness() {
  const B = BUSINESS, show = (sel, ok) => $$(sel).forEach(el => (el.hidden = !ok));
  $$(".js-address").forEach(el => (el.textContent = B.address));
  $$(".js-directions").forEach(el => (el.href = B.directionsUrl));
  const map = $(".js-map"), src = `https://maps.google.com/maps?q=${encodeURIComponent(B.mapQuery)}&z=15&output=embed`;
  if (map && map.getAttribute("src") !== src) map.src = src;

  const tel = p => `tel:+1${p.num.replace(/\D/g, "")}`;
  if ($(".js-phones")) $(".js-phones").innerHTML = B.phones.map(p => `<a class="phone-row" href="${tel(p)}"><span class="phone-label">${p[lang]}</span><span class="phone-num">${p.num}</span></a>`).join("");
  $$(".js-call").forEach(el => (el.href = tel(B.phones[0])));
  $$(".js-phone1").forEach(el => (el.textContent = B.phones[0].num));
  $$(".js-wa-pickup").forEach(el => (el.href = `https://wa.me/${B.whatsapp}?text=${encodeURIComponent(WA_PICKUP[lang])}`));
  show(".js-phone-row", B.phones.length > 0);

  const wa = `https://wa.me/${B.whatsapp}?text=${encodeURIComponent(WA_TEXT[lang])}`;
  $$(".js-whatsapp").forEach(el => (el.href = wa));
  show(".js-whatsapp, .js-wa-dep", !!B.whatsapp);
  $(".wa-float") && $(".wa-float").setAttribute("aria-label", t("cta.whatsapp"));

  $$(".js-ig").forEach(el => (el.href = B.instagram));
  $$(".js-email").forEach(el => { el.href = `mailto:${B.email}`; el.textContent = B.email; });
  $$(".js-reviews").forEach(el => (el.href = B.reviewsUrl));
  if ($(".js-hours")) $(".js-hours").innerHTML = B.hours.map(h => `<li><span>${h[lang]}</span><span>${h.time}</span></li>`).join("");
  renderOpenChip();
}
/* "Abierto ahora" según la hora de Florida. Horario: Dom–Jue 12–22 h · Vie–Sáb 12–01 h */
function renderOpenChip() {
  const chip = $(".js-open-chip"); if (!chip) return;
  const parts = Object.fromEntries(new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", weekday: "short", hour: "numeric", minute: "numeric", hourCycle: "h23" })
    .formatToParts(new Date()).map(p => [p.type, p.value]));
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(parts.weekday), m = (+parts.hour % 24) * 60 + +parts.minute;
  const late = d => d === 5 || d === 6;                         // vie y sáb cierran a la 1 AM
  const prev = (day + 6) % 7;
  let open = false, closes = "";
  if (m < 60 && late(prev)) { open = true; closes = "1 AM"; }
  else if (m >= 12 * 60) { const end = late(day) ? 25 * 60 : 22 * 60; if (m < end) { open = true; closes = late(day) ? "1 AM" : "10 PM"; } }
  const es = lang === "es";
  chip.classList.toggle("is-open", open);
  $("span", chip).textContent = open
    ? `${t("open.now") || "Open now · closes"} ${closes}`.replace("Abierto ahora · cierra a las 1 AM", "Abierto ahora · cierra a la 1 AM")
    : `${t("open.closed") || "Closed now · opens"} ${m < 12 * 60 ? (t("open.today") || "today at") : (t("open.tomorrow") || "tomorrow at")} 12 PM`;
  chip.hidden = false;
}
EN_DEFAULTS["open.now"] = "Open now · closes"; EN_DEFAULTS["open.closed"] = "Closed now · opens";
EN_DEFAULTS["open.today"] = "today at"; EN_DEFAULTS["open.tomorrow"] = "tomorrow at";
setInterval(renderOpenChip, 60000);

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
  tg.setAttribute("hreflang", lang === "es" ? "en" : "es");
  renderFeatured(); renderTabs(); renderList(); renderAbout(); renderGallery(); renderInstagram(); renderEvents(); renderOrder(); renderReviews(); renderBusiness(); renderReserve();
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

/* ---------- Movimiento: parallax, revelados escalonados e inclinación 3D ---------- */
(() => {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const hero = $(".hero, .page-hero"), heroImg = hero && $("img", hero), heroCopy = hero && $(".hero-copy, .page-hero-copy", hero);
  let ticking = false;
  const update = () => {
    ticking = false;
    const y = scrollY, vh = innerHeight;
    // Portada: la foto se aleja más lento y se acerca; el texto sube y se desvanece
    if (hero && heroImg && heroCopy && y < hero.offsetHeight) {
      const p = y / hero.offsetHeight;
      heroImg.style.transform = `translate3d(0, ${y * 0.35}px, 0) scale(${1 + p * 0.12})`;
      heroCopy.style.transform = `translate3d(0, ${y * -0.15}px, 0)`;
      heroCopy.style.opacity = String(Math.max(0, 1 - p * 1.4));
    }
    // Capas con distinta velocidad (sensación de profundidad)
    for (const el of $$("[data-speed]")) {      // elementos con parallax (velocidad relativa)
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) continue;
      const center = r.top + r.height / 2 - vh / 2;
      el.style.transform = `translate3d(0, ${center * -parseFloat(el.dataset.speed)}px, 0)`;
    }
  };
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener("resize", update);
  heroImg && (heroImg.style.animation = "none");   // el zoom de entrada lo reemplaza el parallax
  update();

  // Revelado escalonado de tarjetas y fotos al entrar en pantalla
  const stagger = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    const kids = [...e.target.children];
    kids.forEach((k, i) => { k.style.transitionDelay = `${Math.min(i, 8) * 70}ms`; k.classList.add("pop-in"); });
    stagger.unobserve(e.target);
  }), { rootMargin: "0px 0px -10% 0px" });
  const watchStagger = () => $$(".dish-grid, .masonry, .ev-cards, .pillars").forEach(g => {
    if (g.dataset.staggered) return; g.dataset.staggered = "1";
    [...g.children].forEach(k => k.classList.add("pop"));
    stagger.observe(g);
  });
  // esperar a que applyLang() pinte las grillas; luego, en cada re-render (cambio de idioma) mostrarlas sin animar
  requestAnimationFrame(() => {
    watchStagger();
    const mo = new MutationObserver(() => $$(".dish-grid, .masonry").forEach(g => [...g.children].forEach(k => k.classList.add("pop", "pop-in"))));
    $$(".dish-grid, .masonry").forEach(g => mo.observe(g, { childList: true }));
  });

  // Inclinación 3D de las fotos de eventos y nosotros siguiendo el mouse
  if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
    $$(".ev-photos, .about-imgs").forEach(box => {
      box.addEventListener("pointermove", e => {
        const r = box.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        box.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${y * -7}deg)`;
      });
      box.addEventListener("pointerleave", () => (box.style.transform = ""));
    });
  }
})();

/* Eventos */
$("#langToggle").addEventListener("click", () => {
  const alt = document.querySelector(`link[rel="alternate"][hreflang="${lang === "es" ? "en" : "es"}"]`);
  location.href = (alt ? new URL(alt.href).pathname : (lang === "es" ? "/" : "/es/")) + location.hash;
});
on("#menuSearch", "input", e => filterMenu(e.target.value));

/* Panel de reserva: se abre desde cualquier "Book your table" */
const drawer = $("#reserveDrawer");
const openReserve = () => { setNav(false); drawer.showModal(); document.body.classList.add("drawer-open"); setTimeout(() => $("#resDate").focus(), 50); };
document.addEventListener("click", e => {
  const a = e.target.closest('[data-reserve], a[href="#reserve"], .js-open-reserve');
  if (!a || !BUSINESS.whatsapp) return;
  e.preventDefault(); openReserve();
});
drawer.addEventListener("close", () => document.body.classList.remove("drawer-open"));
$(".drawer-close").addEventListener("click", () => drawer.close());
drawer.addEventListener("click", e => { if (e.target === drawer) drawer.close(); });
on("#menuTabs", "click", e => {
  const b = e.target.closest(".tab"); if (!b) return;
  showTab(b.dataset.id);
});
on("#menuTabs", "keydown", e => {
  const i = SECTIONS.findIndex(c => c.id === activeTab);
  const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0; if (!d) return;
  showTab(SECTIONS[(i + d + SECTIONS.length) % SECTIONS.length].id);
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
  $("img", lb).src = `/img/${z.dataset.zoom}-2400.webp`;
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
if (h && !$("#menuList")) location.replace((lang === "es" ? "/es/menu" : "/menu") + location.hash);
if (h && h[1]) activeTab = sectionOf(h[1]);

applyLang();
if (h && $("#fullMenu")) $("#fullMenu").scrollIntoView();
if (location.hash === "#reserve" && BUSINESS.whatsapp) openReserve();

/* Botón flotante de WhatsApp: se oculta donde ya hay botones de reserva (portada, cierre, pie) */
(() => {
  const fab = $(".wa-float"); if (!fab) return;
  const vis = new Set();
  new IntersectionObserver(es => {
    es.forEach(e => (e.isIntersecting ? vis.add(e.target) : vis.delete(e.target)));
    fab.classList.toggle("fab-hidden", vis.size > 0);
  }, { threshold: .2 }).observe($(".hero") || $(".page-hero") || document.body);
  ["#visit + .visit", ".closing", ".footer", "#fullMenu"].forEach(sel => { const el = $(sel); el && new IntersectionObserver(es => {
    es.forEach(e => (e.isIntersecting ? vis.add(e.target) : vis.delete(e.target)));
    fab.classList.toggle("fab-hidden", vis.size > 0);
  }, { threshold: .2 }).observe(el); });
})();
