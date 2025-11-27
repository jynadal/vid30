# 📦 Media Assets Replacement Guide — Vid30 Branding

This guide explains which image assets need to be replaced with Vid30 branding and provides a checklist for each.

---

## 📍 Key Image Assets to Replace

### **HIGH PRIORITY** (User-facing / Critical)

| File Path | Dimensions | Purpose | Action |
|-----------|-----------|---------|--------|
| `media/banner.png` | (check current) | Main project banner for README | ✏️ Replace with Vid30 banner |
| `docs/resources/banner.png` | (check current) | Documentation banner | ✏️ Replace with Vid30 banner |
| `docs/resources/banner_slim.png` | (check current) | Slim version for docs | ✏️ Replace with Vid30 banner (slim) |
| `media/splash.jpg` | (check current) | App splash screen | ✏️ Replace with Vid30 splash |
| `media/applaunch_screen.png` | (check current) | Application launch screen | ✏️ Replace with Vid30 launch screen |
| `docs/resources/kodi.gif` | (check current) | Animated demo/showcase GIF | ✏️ Replace with Vid30 demo GIF |

### **MEDIUM PRIORITY** (Application Icons & Logos)

| File Path | Dimensions | Purpose | Action |
|-----------|-----------|---------|--------|
| `media/vendor_logo.png` | (check current) | Primary logo asset | ✏️ Replace with Vid30 logo |
| `media/vendor_icon.png` | (check current) | Vendor/app icon | ✏️ Replace with Vid30 icon |
| `media/icon256x256.png` | 256×256 | Application icon (large) | ✏️ Replace with Vid30 icon |
| `media/icon120x120.png` | 120×120 | Application icon (medium) | ✏️ Replace with Vid30 icon |
| `media/icon80x80.png` | 80×80 | Application icon (medium-small) | ✏️ Replace with Vid30 icon |
| `media/icon48x48.png` | 48×48 | Application icon (small) | ✏️ Replace with Vid30 icon |
| `media/icon32x32.png` | 32×32 | Application icon (very small) | ✏️ Replace with Vid30 icon |
| `media/icon16x16.png` | 16×16 | Application icon (favicon) | ✏️ Replace with Vid30 icon |

### **LOW PRIORITY** (Legacy / Reference)

| File Path | Dimensions | Purpose | Action |
|-----------|-----------|---------|--------|
| `media/qr/kodilove/qr-logo.png` | (check current) | QR code logo (Kodi branding) | ⚠️ Optional: Replace or keep as reference |
| `media/qr/kodilove/qr-popcorn.jpg` | (check current) | QR code graphic | ⚠️ Optional: Replace or delete |
| `docs/resources/doxygen/Thumbnail-symbol-whitebg-small.jpg` | (check current) | Doxygen documentation symbol | ⚠️ Keep (technical documentation) |

---

## 🛠️ How to Replace Images

### **Option 1: Use Design Tools** (Recommended)

1. **Create Vid30 branding assets:**
   - Banner (1920×1080 or 1200×600) — use for `media/banner.png` and `docs/resources/banner.png`
   - Slim banner (1200×300 or similar) — use for `docs/resources/banner_slim.png`
   - Square logo (256×256, 512×512) — use for icon variants
   - Splash screen (1080×1920 portrait or landscape)
   - Demo GIF (animated showcase)

2. **Tools to use:**
   - **Canva.com** — Free templates for logos, banners, splash screens
   - **Figma** — Free design tool; export as PNG
   - **GIMP** (free, open-source) — Full image editor
   - **Inkscape** (free, open-source) — Vector graphics (SVG → PNG)

3. **Export images in correct dimensions:**
   - Save as PNG (transparent background preferred for logos/icons)
   - Save as JPG (for splash screens, photos)
   - Use consistent quality settings

### **Option 2: Placeholder Generation** (Quick Start)

If you don't have Vid30 assets yet, I can:
- Generate simple placeholder images with "Vid30" text
- Use a solid color background (e.g., your brand color)
- Create all required sizes automatically

**Would you like me to generate placeholders?** (Tell me your brand color hex, e.g., `#FF6B35`)

### **Option 3: Manual Command-Line Replacement**

Once you have your image files ready, copy them:

```bash
# Create media backups first
mkdir -p /home/john-yves/Documents/Platform/vid30_kiro/media/.backup_kodi
cp /home/john-yves/Documents/Platform/vid30_kiro/media/banner.png media/.backup_kodi/
cp /home/john-yves/Documents/Platform/vid30_kiro/media/vendor_logo.png media/.backup_kodi/
# ... backup other files ...

# Replace with your new Vid30 images
# Place your new images in a temp folder, then:
cp ~/path/to/vid30-banner.png /home/john-yves/Documents/Platform/vid30_kiro/media/banner.png
cp ~/path/to/vid30-logo.png /home/john-yves/Documents/Platform/vid30_kiro/media/vendor_logo.png
# ... copy other images ...

# Verify replacements
file /home/john-yves/Documents/Platform/vid30_kiro/media/*.png
```

---

## 📋 Replacement Checklist

### **Banners & Marketing Assets**
- [ ] `media/banner.png` → Vid30 banner
- [ ] `docs/resources/banner.png` → Vid30 banner (same or similar)
- [ ] `docs/resources/banner_slim.png` → Vid30 slim banner (optional)
- [ ] `media/splash.jpg` → Vid30 splash screen
- [ ] `media/applaunch_screen.png` → Vid30 launch screen
- [ ] `docs/resources/kodi.gif` → Vid30 demo GIF (optional)

### **Application Icons**
- [ ] `media/vendor_logo.png` → Vid30 logo
- [ ] `media/vendor_icon.png` → Vid30 icon
- [ ] `media/icon256x256.png` → Vid30 icon (256×256)
- [ ] `media/icon120x120.png` → Vid30 icon (120×120)
- [ ] `media/icon80x80.png` → Vid30 icon (80×80)
- [ ] `media/icon48x48.png` → Vid30 icon (48×48)
- [ ] `media/icon32x32.png` → Vid30 icon (32×32)
- [ ] `media/icon16x16.png` → Vid30 icon (16×16)

### **QR & Legacy Assets**
- [ ] `media/qr/kodilove/qr-logo.png` → Update or delete
- [ ] `media/qr/kodilove/qr-popcorn.jpg` → Delete or replace

---

## 📐 Recommended Image Dimensions

| Asset | Dimensions | Format | Notes |
|-------|-----------|--------|-------|
| Main Banner | 1920×1080 or 1200×600 | PNG | Used in README |
| Slim Banner | 1200×300 | PNG | Narrow version for sidebars |
| Logo (vector) | 512×512 (scalable) | SVG or PNG | High-res for printing |
| Application Icon | 256×256 | PNG | Master; scale down for others |
| Splash Screen | 1080×1920 | JPG/PNG | Portrait for mobile apps |
| Favicon | 32×32, 64×64 | PNG/ICO | Browser tab icon |
| QR Code | 500×500 minimum | PNG | Ensure sufficient contrast |

---

## 🎨 Design Tips for Vid30 Branding

1. **Color Palette:**
   - Define primary, secondary, accent colors
   - Ensure good contrast for accessibility (WCAG AA minimum)

2. **Logo Design:**
   - Create vector version first (Inkscape, Figma)
   - Export to multiple PNG sizes (16×16 up to 512×512)
   - Ensure logo works on both light and dark backgrounds

3. **Consistency:**
   - Use same font, style, and color scheme across all assets
   - Keep spacing and alignment consistent

4. **Transparency:**
   - Use transparent PNG for logos (enables flexible backgrounds)
   - Use solid backgrounds for splash screens

5. **Metadata:**
   - Add copyright notice to image EXIF/metadata (optional):
     ```bash
     # Using exiftool (install: apt-get install libimage-exiftool-perl)
     exiftool -Copyright="© 2025 Vid30. All rights reserved." media/banner.png
     ```

---

## ✅ Next Steps

### **If you have Vid30 assets ready:**
1. Gather all image files in a folder
2. Tell me the path to your images
3. I'll copy them to the correct locations in `media/` and `docs/resources/`
4. We'll commit the changes to git

### **If you need to create assets:**
1. **Use Canva/Figma/GIMP** to design Vid30 branding
2. **Export in required dimensions** (see table above)
3. **Tell me your brand color** if you want placeholder generation
4. **Share the images** and I'll integrate them

### **Quick Placeholder Generation (if needed):**
If you'd like me to create temporary placeholder images with Vid30 branding, provide:
- Primary brand color (hex code, e.g., `#FF6B35`)
- Brand name position (centered, top, bottom)
- Any tagline or subtitle

---

## 📖 File References in Code

After replacing images, ensure these files reference the correct paths:

1. **`README.md`** — Check banner references:
   ```markdown
   ![Vid30 Logo](docs/resources/banner.png)
   ```

2. **CMakeLists.txt** / **version.txt** — May reference icons for packaging

3. **`xbmc/` source files** — May embed icon paths (less critical)

4. **Android/iOS build configs** — May reference icon assets

---

## 🔄 Git Workflow

Once images are replaced:

```bash
cd /home/john-yves/Documents/Platform/vid30_kiro

# Check file status
git status

# Add new/modified image files
git add media/
git add docs/resources/

# Create backup branch before committing (optional)
git checkout -b backup-kodi-assets
git commit -m "backup: Kodi original media assets"
git checkout main

# Commit replacements
git add -A
git commit -m "branding: Replace Kodi assets with Vid30 branding"

# Push to GitHub & GitLab
git push origin main
git push gitlab main
```

---

## 📞 Need Help?

- **Image dimensions not clear?** Run: `file media/*.png` for current sizes
- **Want to automate resizing?** I can use ImageMagick or Python (PIL) to resize a master image
- **Need to generate placeholders?** Tell me your brand color and I'll create them

Let me know what you'd like to do next! 🎨
