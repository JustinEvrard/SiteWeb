"""Generates the favicon set (monogram matching the site's DA: dark bg,
purple/orange gradient, "JE." mark).
Run with: python scripts/generate_favicon.py
Outputs: assets/img/favicon.ico, favicon-32.png, favicon-16.png,
apple-touch-icon.png (180), favicon-512.png
"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "assets", "img")
os.makedirs(OUT_DIR, exist_ok=True)

BG = (15, 17, 21)
TEXT = (238, 240, 244)
ACCENT = (133, 131, 255)    # purple
ACCENT_2 = (255, 147, 118)  # orange

FONTS_DIR = "C:/Windows/Fonts"
SIZE = 512

def build_master():
    img = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))

    # Rounded-square background
    bg = Image.new("RGBA", (SIZE, SIZE), (*BG, 255))
    mask = Image.new("L", (SIZE, SIZE), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, SIZE, SIZE], radius=int(SIZE * 0.24), fill=255)
    img.paste(bg, (0, 0), mask)

    # Soft corner glows (purple top-left, orange bottom-right)
    glow = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse([-140, -140, 280, 280], fill=(*ACCENT, 130))
    gd.ellipse([SIZE - 280, SIZE - 280, SIZE + 140, SIZE + 140], fill=(*ACCENT_2, 110))
    glow = glow.filter(ImageFilter.GaussianBlur(90))
    glow.putalpha(Image.composite(glow.split()[3], Image.new("L", (SIZE, SIZE), 0), mask))
    img.alpha_composite(glow)

    # "JE" monogram + accent dot
    font = ImageFont.truetype(f"{FONTS_DIR}/seguibl.ttf", int(SIZE * 0.46))
    draw = ImageDraw.Draw(img)

    je_w = draw.textlength("JE", font=font)
    dot_font = font
    dot_w = draw.textlength(".", font=dot_font)
    total_w = je_w + dot_w * 0.7

    bbox = font.getbbox("JE")
    text_h = bbox[3] - bbox[1]
    x = (SIZE - total_w) / 2
    y = (SIZE - text_h) / 2 - bbox[1]

    draw.text((x, y), "JE", font=font, fill=TEXT)
    draw.text((x + je_w - SIZE * 0.015, y), ".", font=dot_font, fill=ACCENT_2)

    return img

master = build_master()
master.save(os.path.join(OUT_DIR, "favicon-512.png"))

for size, name in [(180, "apple-touch-icon.png"), (32, "favicon-32.png"), (16, "favicon-16.png")]:
    master.resize((size, size), Image.LANCZOS).save(os.path.join(OUT_DIR, name))

master.save(
    os.path.join(OUT_DIR, "favicon.ico"),
    sizes=[(16, 16), (32, 32), (48, 48)],
)

print("Favicon set generated in", OUT_DIR)
