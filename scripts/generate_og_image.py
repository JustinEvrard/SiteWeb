"""Generates the Open Graph / social share preview image for the portfolio.
Run with: python scripts/generate_og_image.py
Outputs: assets/img/og-image.png (1200x630)
"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os

WIDTH, HEIGHT = 1200, 630
OUT_PATH = os.path.join(os.path.dirname(__file__), "..", "assets", "img", "og-image.png")

BG = (15, 17, 21)
TEXT = (238, 240, 244)
MUTED = (154, 160, 172)
ACCENT = (133, 131, 255)      # purple
ACCENT_2 = (255, 147, 118)    # orange

FONTS_DIR = "C:/Windows/Fonts"
f_black = lambda size: ImageFont.truetype(f"{FONTS_DIR}/seguibl.ttf", size)
f_bold = lambda size: ImageFont.truetype(f"{FONTS_DIR}/seguisb.ttf", size)
f_regular = lambda size: ImageFont.truetype(f"{FONTS_DIR}/segoeui.ttf", size)

img = Image.new("RGBA", (WIDTH, HEIGHT), (*BG, 255))

# ---- Soft glow blobs ----
glow = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
glow_draw = ImageDraw.Draw(glow)
glow_draw.ellipse([-250, -260, 550, 420], fill=(*ACCENT, 90))
glow_draw.ellipse([750, 320, 1500, 980], fill=(*ACCENT_2, 80))
glow = glow.filter(ImageFilter.GaussianBlur(110))
img.alpha_composite(glow)

# ---- Decorative faint code glyphs (own layer so alpha actually blends) ----
glyphs = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
glyphs_draw = ImageDraw.Draw(glyphs)
glyphs_draw.text((820, -60), "</>", font=f_black(320), fill=(255, 255, 255, 16))
glyphs_draw.text((-50, 470), "{ }", font=f_black(190), fill=(255, 255, 255, 14))
img.alpha_composite(glyphs)

draw = ImageDraw.Draw(img)

# ---- Logo mark ----
draw.text((90, 56), "JE", font=f_bold(32), fill=TEXT)
logo_w = draw.textlength("JE", font=f_bold(32))
draw.text((90 + logo_w + 2, 56), ".", font=f_bold(32), fill=ACCENT_2)

# ---- Eyebrow ----
draw.text((92, 152), "P O R T F O L I O", font=f_bold(21), fill=ACCENT)

# ---- Headline ----
name_y = 190
draw.text((88, name_y), "Justin ", font=f_black(84), fill=TEXT)
justin_w = draw.textlength("Justin ", font=f_black(84))
draw.text((88 + justin_w, name_y), "Evrard", font=f_black(84), fill=ACCENT)

# ---- Tagline (two lines, second clause accented) ----
tagline_y = 320
draw.text((90, tagline_y), "Je construis des logiciels avec rigueur,", font=f_regular(30), fill=MUTED)
draw.text((90, tagline_y + 44), "et un peu d'art.", font=f_regular(30), fill=ACCENT_2)

# ---- Tag pills ----
def pill(x, y, label, font):
    pad_x, pad_y = 22, 13
    w = draw.textlength(label, font=font)
    h = font.size
    draw.rounded_rectangle(
        [x, y, x + w + pad_x * 2, y + h + pad_y * 2],
        radius=999,
        fill=(27, 30, 38, 255),
        outline=(58, 63, 76, 255),
        width=2,
    )
    draw.text((x + pad_x, y + pad_y - 2), label, font=font, fill=(216, 217, 224))
    return x + w + pad_x * 2 + 14

tag_font = f_bold(20)
x = 90
y = 450
for label in ["Node.js", "Java", "Python", "UQAM"]:
    x = pill(x, y, label, tag_font)

os.makedirs(os.path.dirname(OUT_PATH), exist_ok=True)
img.convert("RGB").save(OUT_PATH, "PNG")
print(f"Saved {OUT_PATH} ({img.size[0]}x{img.size[1]})")
