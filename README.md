# Kanokai — Web

Sitio web de **Kanokai**, cocina peruana en Fort Lauderdale, FL.

Sitio estático (HTML + CSS + JS, sin build). Bilingüe EN/ES.

## Ver en local

```bash
python -m http.server 5173
# abrir http://127.0.0.1:5173
```

## Editar contenido

Todo está al inicio de `main.js`:

- `BUSINESS` — dirección, teléfono, Instagram, link de pedidos, horario (los `TODO` faltan confirmar).
- `MENU` — platos por categoría (nombre/descripción EN y ES, foto, precio).
- `GALLERY` — fotos de la galería.

Fotos en `img/` (cada una en `.jpg` y `.webp`, máx. 1400px).

## Deploy

Compatible con Vercel / Netlify / GitHub Pages tal cual (raíz del repo).
