# Konakai Peruvian Cuisine — Proyecto web

**Cliente:** Konakai Peruvian Cuisine · Fort Lauderdale, FL · Instagram [@konakaiperuviancuisine](https://www.instagram.com/konakaiperuviancuisine/)
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
| Datos de contacto (dirección, teléfono, horario) | ⏳ **Bloqueado: esperando al cliente** |
| Dominio propio | ⏳ Pendiente de decisión del cliente |
| Google Business Profile | ⏳ Pendiente (lo crea o gestiona el cliente) |

Mientras falte un dato, la web **lo oculta** en vez de mostrar uno inventado. Por eso hoy no aparecen el botón Llamar, el horario ni el botón Pedir.

---

## 1. Datos que necesitamos del cliente

Todo se carga en `main.js`, en `BUSINESS` y `MENU`.

- [ ] Dirección completa (calle, número, suite, ZIP)
- [ ] Teléfono
- [ ] WhatsApp para reservas (si lo usan)
- [ ] Horario por día
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
