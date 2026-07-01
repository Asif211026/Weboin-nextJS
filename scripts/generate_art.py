"""
Generates abstract "glaze" artwork for the portfolio section — soft blurred
color blobs on a charcoal base, standing in for real client photography.
Purely generative, no external assets, so there are no licensing concerns.
"""
import random
from PIL import Image, ImageDraw, ImageFilter

W, H = 1600, 1200
BASE = (34, 29, 26)  # charcoal

PROJECTS = {
    "ember-co": [(201, 98, 43), (232, 162, 61), (168, 70, 28)],       # ember/gold
    "fieldnote": [(122, 138, 96), (196, 190, 150), (74, 90, 62)],      # sage/moss
    "solstice-market": [(214, 129, 40), (232, 200, 120), (168, 55, 40)],  # sunset
    "northbound": [(90, 108, 130), (140, 122, 107), (54, 66, 84)],     # slate/clay
    "loam-studio": [(160, 90, 58), (110, 120, 78), (196, 150, 110)],   # terracotta/loam
    "verge-health": [(70, 140, 132), (196, 210, 198), (40, 92, 88)],   # teal/clean
}

def blob(draw_img, cx, cy, r, color, alpha):
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=color + (alpha,))
    return layer

def make_art(name, colors, seed):
    random.seed(seed)
    img = Image.new("RGBA", (W, H), BASE + (255,))
    for i, c in enumerate(colors):
        cx = random.randint(int(W * 0.15), int(W * 0.85))
        cy = random.randint(int(H * 0.15), int(H * 0.85))
        r = random.randint(int(H * 0.35), int(H * 0.6))
        alpha = 170 if i == 0 else 130
        layer = blob(img, cx, cy, r, c, alpha)
        layer = layer.filter(ImageFilter.GaussianBlur(90))
        img = Image.alpha_composite(img, layer)

    # subtle grain for tactile, "fired ceramic" texture
    grain = Image.effect_noise((W, H), 22).convert("L")
    grain_rgba = Image.merge("RGBA", (grain, grain, grain, Image.new("L", (W, H), 14)))
    img = Image.alpha_composite(img, grain_rgba)

    # gentle vignette so foreground titles stay readable
    vignette = Image.new("L", (W, H), 0)
    vd = ImageDraw.Draw(vignette)
    vd.ellipse([-W * 0.3, -H * 0.3, W * 1.3, H * 1.3], fill=90)
    vignette = vignette.filter(ImageFilter.GaussianBlur(200))
    dark = Image.new("RGBA", (W, H), BASE + (255,))
    img = Image.composite(img, dark, vignette)

    img.convert("RGB").save(f"/home/claude/design-agency/public/portfolio/{name}.jpg", quality=87)

for i, (name, colors) in enumerate(PROJECTS.items()):
    make_art(name, colors, seed=i * 7 + 3)

print("done")
