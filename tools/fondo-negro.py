"""
Versión "fondo negro" de las fotos de platos (estilo pizarra oscura, plato siempre visible).

Uso:
  python tools/fondo-negro.py                 # procesa todas las fotos de platos
  python tools/fondo-negro.py nombre1 ...     # solo algunas
  python tools/fondo-negro.py --revision      # además arma hojas de revisión (original | resultado)

Salida: ../FOTOS FONDO NEGRO/<nombre>.jpg  (fuera del repo). Luego:
  python tools/build-images.py --negro        # genera las fotos de la web desde esa carpeta

Cada foto se configura en tools/platos-fondo.json:
  "auto"                         -> rembg detecta comida y plato
  {"elipse": [cx, cy, rx, ry, ang]} -> contorno del plato marcado a mano (fracciones del ancho/alto, ángulo en grados)
  {"poli": [[[x,y], ...]]}       -> plato rectangular o irregular (polígonos)
  "con_comida": true             -> suma lo que rembg detecta como comida (decoración que sobresale del plato)
  "original"                     -> se deja la foto tal cual
"""
import sys, json, importlib.util
from pathlib import Path
import numpy as np, cv2
from PIL import Image, ImageOps, ImageDraw, ImageFont
from scipy import ndimage

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT.parent / "FOTOS PLATOS HD"
OUT = ROOT.parent / "FOTOS FONDO NEGRO"
CFG = json.loads((ROOT / "tools" / "platos-fondo.json").read_text(encoding="utf-8"))
spec = importlib.util.spec_from_file_location("bi", ROOT / "tools" / "build-images.py")
bi = importlib.util.module_from_spec(spec); spec.loader.exec_module(bi)
NOT_DISHES = {"ev-brindis", "ev-coctel"}
DISHES = {n: f for n, f in bi.PHOTOS.items() if not n.startswith("loc-") and n not in NOT_DISHES}
MAX = 2400
_session = None

def session():
    global _session
    if _session is None:
        from rembg import new_session
        _session = new_session("u2net")
    return _session

def largest(m, frac=.08):
    lab, n = ndimage.label(m)
    if not n: return m
    s = ndimage.sum(m, lab, range(1, n + 1))
    return np.isin(lab, [i + 1 for i, v in enumerate(s) if v >= s.max() * frac])

def hull_of(m, h, w):
    cnt, _ = cv2.findContours(largest(m).astype(np.uint8), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
    out = np.zeros((h, w), np.uint8)
    if cnt: cv2.drawContours(out, [cv2.convexHull(np.vstack(cnt))], -1, 1, -1)
    return out

def auto_mask(im, rgb):
    from rembg import remove
    h, w = rgb.shape[:2]
    food = largest(np.asarray(remove(im, session=session(), only_mask=True)) > 128)
    food = ndimage.binary_fill_holes(ndimage.binary_closing(food, iterations=5))
    hull_a = hull_of(food, h, w)
    lab = cv2.cvtColor(rgb.astype(np.uint8), cv2.COLOR_RGB2LAB).astype(np.float32)
    k = max(9, int(min(h, w) * .025))
    ring = ndimage.binary_dilation(food, iterations=k) & ~food
    ref = np.median(lab[ring], axis=0)
    cand = ndimage.binary_opening(np.linalg.norm(lab - ref, axis=2) < 22, iterations=2)
    near = ndimage.distance_transform_edt(~food) < int(.32 * np.sqrt(food.sum()))
    lab_c, _ = ndimage.label((cand & near) | food)
    ids = np.unique(lab_c[food]); ids = ids[ids > 0]
    hull_b = hull_of(ndimage.binary_opening(np.isin(lab_c, ids), iterations=3) | food, h, w)
    sides = lambda m: {s for s, v in {"t": m[0].any(), "b": m[-1].any(), "l": m[:, 0].any(), "r": m[:, -1].any()}.items() if v}
    ok_b = not (sides(hull_b) - sides(hull_a)) and hull_b.sum() < 2.6 * max(1, hull_a.sum())
    return (hull_b if ok_b else hull_a).astype(np.float32), food

def ellipse_mask(shapes, h, w):
    m = np.zeros((h, w), np.uint8)
    for cx, cy, rx, ry, ang in shapes:
        cv2.ellipse(m, (int(cx * w), int(cy * h)), (int(rx * w), int(ry * h)), ang, 0, 360, 1, -1)
    return m.astype(np.float32)

def slate(h, w, seed=7):
    rng = np.random.default_rng(seed)
    base = np.full((h, w), 30.0)
    for scale, amp in ((h / 3, 6), (h / 12, 4), (3, 5)):
        n = rng.normal(0, 1, (max(2, int(h / scale)), max(2, int(w / scale))))
        base += cv2.resize(n, (w, h), interpolation=cv2.INTER_CUBIC) * amp
    yy, xx = np.mgrid[0:h, 0:w]
    vig = 1 - .35 * (((xx - w / 2) / (w / 2)) ** 2 + ((yy - h / 2) / (h / 2)) ** 2)
    g = np.clip(base * vig, 8, 60)
    return np.dstack([g * .98, g * .97, g])

def process(name):
    cfg = CFG.get(name, "auto")
    im = ImageOps.exif_transpose(Image.open(SRC / DISHES[name])).convert("RGB")
    im.thumbnail((MAX, MAX), Image.LANCZOS)
    if cfg == "original":
        return im
    rgb = np.asarray(im).astype(np.float32); h, w = rgb.shape[:2]
    if cfg == "auto":
        mask, _ = auto_mask(im, rgb)
    else:
        mask = ellipse_mask(([cfg["elipse"]] if "elipse" in cfg else []) + cfg.get("extra", []), h, w)
        for poly in cfg.get("poli", []):
            m = np.zeros((h, w), np.uint8)
            cv2.fillPoly(m, [np.array([[x * w, y * h] for x, y in poly], np.int32)], 1)
            mask = np.maximum(mask, m.astype(np.float32))
        if cfg.get("con_comida", False):       # la comida que sobresale del plato (choros, brochetas, decoración) se conserva
            from rembg import remove
            food = largest(np.asarray(remove(im, session=session(), only_mask=True)) > 128, .02)
            if "comida_desde_y" in cfg:            # ignora lo detectado arriba de esa altura (copas, botellas)
                food[: int(cfg["comida_desde_y"] * h)] = False
            mask = np.maximum(mask, ndimage.binary_fill_holes(food).astype(np.float32))
    alpha = cv2.GaussianBlur(mask, (0, 0), max(1.5, min(h, w) / 900))
    bg = slate(h, w)
    sh = cv2.GaussianBlur(mask, (0, 0), min(h, w) * .03)
    bg = bg * (1 - np.roll(sh, int(h * .02), axis=0)[..., None] * .55)
    out = rgb * alpha[..., None] + bg * (1 - alpha[..., None])
    return Image.fromarray(np.clip(out, 0, 255).astype(np.uint8))

def review(names, results):
    font = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 20)
    cells = []
    for n in names:
        o = ImageOps.exif_transpose(Image.open(SRC / DISHES[n])).convert("RGB"); o.thumbnail((360, 360))
        d = ImageDraw.Draw(o)                              # cuadrícula de 10% para marcar elipses
        for k in range(1, 10):
            d.line([(o.width * k / 10, 0), (o.width * k / 10, o.height)], fill=(255, 255, 0), width=1)
            d.line([(0, o.height * k / 10), (o.width, o.height * k / 10)], fill=(255, 255, 0), width=1)
        r = results[n].copy(); r.thumbnail((360, 360))
        c = Image.new("RGB", (740, 400), (24, 22, 20)); c.paste(o, (0, 0)); c.paste(r, (380, 0))
        ImageDraw.Draw(c).text((4, 372), f"{n}  [{CFG.get(n, 'auto') if isinstance(CFG.get(n, 'auto'), str) else 'elipse'}]", font=font, fill=(255, 230, 150))
        cells.append(c)
    for p in range(0, len(cells), 6):
        sh = Image.new("RGB", (1480, 1200), (24, 22, 20))
        for i, c in enumerate(cells[p:p + 6]): sh.paste(c, ((i % 2) * 740, (i // 2) * 400))
        sh.save(OUT / f"_revision_{p // 6 + 1}.jpg", quality=82)

if __name__ == "__main__":
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    names = args or list(DISHES)
    OUT.mkdir(exist_ok=True)
    results = {}
    for n in names:
        results[n] = process(n)
        results[n].save(OUT / f"{n}.jpg", quality=94)
        print("ok", n)
    if "--revision" in sys.argv:
        review(names, results)
