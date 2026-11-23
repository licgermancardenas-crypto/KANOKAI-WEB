# Konakai Peruvian Cuisine — Proyecto web

**Cliente:** Konakai Peruvian Cuisine · 4305 NW 88th Ave, Sunrise, FL 33351 (área de Fort Lauderdale) · (954) 909-5525 · familia desde 1992, especialistas en chifa · Instagram [@konakaiperuviancuisine](https://www.instagram.com/konakaiperuviancuisine/)
**Responsable:** German Cardenas
**Web en vivo:** https://kanokai-web.vercel.app · **Repo:** licgermancardenas-crypto/KANOKAI-WEB
**Deploy:** automático en Vercel con cada push a `main`.

---

## Estado — 23 nov 2026

| Área | Estado |
|---|---|
| Diseño y desarrollo (desktop + móvil, EN/ES) | ✅ Listo |
| Menú con 15 platos y fotos | ✅ Listo, falta que el cliente valide nombres y precios |
| SEO técnico (title, meta, Schema Restaurant + Menu, sitemap, robots, OG) | ✅ Listo |
| Datos de contacto (dirección, teléfono, horario) | ✅ Tomados de la ficha de Google (nov 2026), falta que el cliente confirme |
| Estructura UX de 6 bloques + WhatsApp flotante | ✅ Listo |
| Reseñas textuales (3) | ⏳ Elegir con el cliente y cargar en `REVIEWS` |
| Número de WhatsApp | ⚠️ Se usa (954) 404-4272: **confirmar** |
| Dominio propio | ⏳ Pendiente de decisión del cliente |
| Google Business Profile | ⏳ Pendiente (lo crea o gestiona el cliente) |

Mientras falte un dato, la web **lo oculta** en vez de mostrar uno inventado. Hoy está oculto solo el botón Pedir en línea (no tienen link) y los testimonios textuales.

---

## 1. Datos que necesitamos del cliente

Todo se carga en `main.js`, en `BUSINESS` y `MENU`.

- [x] Dirección, teléfonos y horario (de Google; confirmar)
- [ ] ¿Qué número tiene WhatsApp?
- [ ] 3 reseñas favoritas para mostrar textualmente
- [ ] Precios de los platos sin precio y la carta completa en PDF
- [ ] Link para pedir en línea (Toast, Uber Eats, DoorDash…) si existe
- [ ] Validar el nombre de cada plato (los nombres salieron de las fotos)
- [ ] Precios (opcional mostrarlos)
- [ ] Platos que faltan en la carta, más bebidas y postres
- [ ] Historia real del restaurante: quiénes son, de qué región de Perú, desde cuándo
- [ ] Logo en alta (SVG o PNG) si tienen uno; hoy se usa un wordmark tipográfico
- [ ] Fotos del local (interior y fachada) y del equipo
- [ ] ¿Delivery, catering, eventos privados? (definen secciones nuevas)
- [ ] Dominio: ¿ya tienen uno? ¿cuál quieren?

## 2. Próximas fases

**Fase 2: contenido real.** Cargar los datos de la sección 1, actualizar el Schema (`telephone`, `streetAddress`, `openingHours`, `priceRange`) y cambiar `canonical`/`sitemap` al dominio final.

**Fase 3: SEO local.**
- Crear o reclamar el Google Business Profile con el mismo nombre, dirección y teléfono que la web.
- Darse de alta en Yelp, TripAdvisor y Apple Maps.
- Conseguir reseñas en Google.
- Registrar la web en Google Search Console y enviar el sitemap.

Palabras clave objetivo: *peruvian restaurant fort lauderdale*, *ceviche fort lauderdale*, *lomo saltado near me*, *peruvian food broward*, *tacacho con cecina miami*.

**Fase 4: funciones de backend (solo si el cliente las pide).**

| Necesidad | Solución recomendada |
|---|---|
| Reservas | WhatsApp (ya preparado) → OpenTable / Resy / Toast Tables |
| Pedidos online | Toast / ChowNow (sin comisión de apps) |
| Formulario de contacto o catering | Vercel Function + Resend (email) |
| Editar menú sin programador | Google Sheet o CMS ligero (Sanity) |

Hoy **no hace falta backend**: la web es estática, rápida y sin costos de servidor.

## 3. Checklist de QA antes de cada entrega

- [ ] Móvil 390px: iPhone y Android (Chrome y Safari)
- [ ] Desktop: Chrome, Safari y Firefox
- [ ] El botón ES/EN cambia todos los textos
- [ ] Llamar, Cómo llegar, Instagram, WhatsApp y Pedir abren lo correcto
- [ ] Ningún dato `TODO` visible en la web
- [ ] Sin errores en la consola
- [ ] Lighthouse móvil ≥ 90 en Performance, Accesibilidad y SEO
- [ ] Vista previa al compartir por WhatsApp o Instagram (imagen OG)
