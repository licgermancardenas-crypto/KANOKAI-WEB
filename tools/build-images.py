"""
Genera las fotos de la web desde los originales HD, en varios tamaños (srcset).

Uso:  python tools/build-images.py
Origen:  ../FOTOS PLATOS HD  (fuera del repo, no se sube a GitHub)
Salida:  img/<nombre>-800.webp, -1400.webp, -2400.webp  +  img/<nombre>.jpg (1600 px, respaldo y redes)

Para agregar o cambiar una foto: editar PHOTOS (nombre en la web -> archivo original) y volver a correr.
"""
import sys
from pathlib import Path
from PIL import Image, ImageOps, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT.parent / "FOTOS PLATOS HD"
SRC2 = ROOT.parent / "FOTOS PLATOS"      # fotos agregadas después (nombre con prefijo "@")
def src_of(f): return SRC2 / f[1:] if f.startswith("@") else SRC / f
OUT = ROOT / "img"
WIDTHS = (400, 800, 1400, 2400)          # se limita al tamaño real del original
JPG_SIZE, JPG_Q, WEBP_Q = 1600, 88, 86

P = "WhatsApp Image 2026-11-22 at "
PHOTOS = {
    # portada y platos estrella
    "hero-trilogia-ceviches": P + "5.09.54 PM.jpeg",
    "ceviche-carretillero":   P + "4.16.57 PM (3).jpeg",
    "tropikal-konakai":       P + "4.25.22 PM (2).jpeg",
    "pulpo-anticuchero":      P + "5.10.05 PM (1).jpeg",
    "anticuchos":             P + "4.13.57 PM (7).jpeg",
    "lomo-saltado":           P + "4.17.01 PM.jpeg",
    "arroz-con-mariscos":     P + "5.10.03 PM (1).jpeg",
    "kam-lu-wonton":          P + "4.25.20 PM (3).jpeg",
    "tacacho-cecina-chorizo": P + "4.13.57 PM (6).jpeg",
    "ceviche-afrodisiaco":    P + "4.16.57 PM (1).jpeg",
    # nosotros
    "parihuela-noche":        P + "4.25.24 PM (1).jpeg",
    "palta-rellena":          P + "4.25.21 PM (3).jpeg",
    "cheesecake-maracuya":    P + "4.25.19 PM (1).jpeg",
    # galería
    "g-ceviche-mixto":        P + "4.16.57 PM (2).jpeg",
    "g-trilogia-copas":       P + "5.10.03 PM (2).jpeg",
    "g-causa-acevichada":     P + "4.25.22 PM (3).jpeg",
    "g-chaufa-especial":      P + "4.25.19 PM (3).jpeg",
    "g-jalea-pargo":          P + "5.10.02 PM (1).jpeg",
    "g-leche-tigre":          P + "5.09.59 PM (1).jpeg",
    "g-pollo-pina":           P + "4.13.58 PM (5).jpeg",
    "g-aji-gallina":          P + "4.25.06 PM.jpeg",
    "g-torta-chocolate":      P + "4.25.18 PM (2).jpeg",
    "g-flan":                 P + "4.25.19 PM.jpeg",
    # galería 2 (platos que no aparecen en otras secciones)
    "gx-chijaukay":           P + "4.13.58 PM (3).jpeg",
    "gx-special-platter":     P + "4.13.58 PM (4).jpeg",
    "gx-salmon-oriental":     P + "5.10.01 PM (1).jpeg",
    "gx-parihuela":           P + "4.25.05 PM.jpeg",
    "gx-arroz-nortena":       P + "4.25.06 PM (1).jpeg",
    "gx-chupe":               P + "4.25.06 PM (2).jpeg",
    "gx-tallarin-churrasco":  P + "5.10.05 PM (4).jpeg",
    "gx-lomo-pobre":          P + "4.16.59 PM (1).jpeg",
    "gx-tacu-tacu-seco":      P + "4.16.59 PM (5).jpeg",
    "gx-pollo-pobre":         P + "4.16.57 PM (6).jpeg",
    # carta (identificadas con las fotos del PDF del cliente)
    "m-pescado-plancha":      P + "4.16.55 PM (7).jpeg",
    "m-huevera-macho":        P + "4.16.56 PM (4).jpeg",
    "m-pargo-macho":          P + "4.16.56 PM (6).jpeg",
    # nuevas (nov 23)
    "m-anticucho":            P + "4.25.06 PM (4).jpeg",
    "m-anticucho-huancaina":  "@WhatsApp Image 2026-11-23 at 10.25.45 PM.jpeg",
    "m-cau-cau":              "@WhatsApp Image 2026-11-24 at 11.25.56 PM.jpeg",
    "m-aeropuerto-pollo":     "@WhatsApp Image 2026-11-24 at 11.26.14 PM.jpeg",
    "m-sopa-wonton":          "@WhatsApp Image 2026-11-24 at 11.26.39 PM.jpeg",
    "m-parihuela":            "@WhatsApp Image 2026-11-24 at 11.26.59 PM.jpeg",
    "m-special-platter":      "@WhatsApp Image 2026-11-24 at 11.27.29 PM.jpeg",
    "m-criollo":               "@WhatsApp Image 2026-11-24 at 11.35.16 PM (1).jpeg",
    "m-palta-rellena":         "@WhatsApp Image 2026-11-24 at 11.35.15 PM.jpeg",
    "gx-alfajores":            "@WhatsApp Image 2026-11-24 at 11.35.14 PM.jpeg",
    "gx-cocteles":             "@WhatsApp Image 2026-11-24 at 11.35.16 PM.jpeg",
    "gx-vinos":                "@WhatsApp Image 2026-11-24 at 11.35.15 PM (1).jpeg",
    "gx-ceviche-terraza":      "@WhatsApp Image 2026-11-24 at 11.36.59 PM.jpeg",
    "hero-ceviche-mixto":     P + "4.25.27 PM (1).jpeg",
    # ubicación
    "loc-terraza":            P + "4.16.57 PM (2).jpeg",
    "loc-jardin":             P + "4.25.22 PM (2).jpeg",
    "loc-noche":              P + "4.25.24 PM (1).jpeg",
    # eventos
    "ev-brindis":             P + "4.25.24 PM (2).jpeg",
    "ev-piqueo":              P + "5.10.00 PM.jpeg",
    "ev-coctel":              P + "4.25.24 PM.jpeg",
}

def fit(im, w):
    if im.width <= w:
        return im.copy()
    h = round(im.height * w / im.width)
    return im.resize((w, h), Image.LANCZOS).filter(ImageFilter.UnsharpMask(radius=1.0, percent=55, threshold=3))

def main():
    only = set(sys.argv[1:])          # opcional: generar solo estos nombres
    missing = [f for f in PHOTOS.values() if not src_of(f).exists()]
    if missing:
        raise SystemExit("Faltan originales:\n  " + "\n  ".join(missing))
    for name, fname in PHOTOS.items():
        if only and name not in only:
            continue
        im = ImageOps.exif_transpose(Image.open(src_of(fname))).convert("RGB")
        # srcset por ANCHO: -800, -1400, -2400 (si el original es más angosto, se guarda a su ancho real)
        made = []
        for w in WIDTHS:
            fit(im, w).save(OUT / f"{name}-{w}.webp", quality=WEBP_Q, method=6)
            made.append(min(w, im.width))
        long_side = max(im.size)
        jpg = fit(im, round(im.width * min(1, JPG_SIZE / long_side)))
        jpg.save(OUT / f"{name}.jpg", quality=JPG_Q, optimize=True, progressive=True)
        print(f"{name:24s} original {im.width}x{im.height}  ->  webp {made}  jpg {jpg.size}")

if __name__ == "__main__":
    main()
