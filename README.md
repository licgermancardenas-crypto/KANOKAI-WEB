# Konakai — Web

Sitio web de **Konakai**, cocina peruana en Fort Lauderdale, FL.

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

### Cambiar la carta

1. Editar `menu-data.js` (platos, precios, descripciones EN/ES).
2. Correr `node tools/build-menu.mjs`: escribe la carta dentro de `index.html` para que Google la indexe.
3. Commit y push: Vercel publica solo.

Regla: un dato vacío se **oculta** en la web (nunca se publican datos inventados).

Plan, pendientes del cliente y checklist de QA: ver [PROJECT.md](PROJECT.md).

### Fotos

Se generan desde los originales (`../FOTOS PLATOS HD`) con `python tools/build-images.py`: cada foto en WebP de 800, 1400 y 2400 px (el navegador elige según la pantalla) + JPG de 1600 px como respaldo. Para cambiar o agregar una foto, editar `PHOTOS` en ese script.

## Deploy

Compatible con Vercel / Netlify / GitHub Pages tal cual (raíz del repo).
