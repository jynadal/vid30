# 📸 Vid30 Media Assets — Current Inventory & Replacement Plan

**Generated:** 27 November 2025  
**Status:** Ready for branding replacement

---

## 🎯 Asset Inventory with Current Dimensions

### **BANNERS & PROMOTIONAL ASSETS**

| File | Current Size | Format | Priority | Status |
|------|-------------|--------|----------|--------|
| `docs/resources/banner.png` | **1100 × 500** | PNG (8-bit) | 🔴 HIGH | `[ ] Replace` |
| `docs/resources/banner_slim.png` | **1100 × 320** | PNG (8-bit) | 🔴 HIGH | `[ ] Replace` |
| `media/banner.png` | **320 × 180** | PNG (8-bit RGB) | 🔴 HIGH | `[ ] Replace` |
| `media/splash.jpg` | **1920 × 1080** | JPEG | 🔴 HIGH | `[ ] Replace` |
| `media/applaunch_screen.png` | **1920 × 1080** | PNG | 🔴 HIGH | `[ ] Replace` |
| `docs/resources/kodi.gif` | **1280 × 720** | GIF (animated) | 🟡 MEDIUM | `[ ] Replace` |

### **APPLICATION ICONS (Various Sizes)**

| File | Current Size | Format | Priority | Status |
|------|-------------|--------|----------|--------|
| `media/vendor_logo.png` | **465 × 128** | PNG (RGBA) | 🔴 HIGH | `[ ] Replace` |
| `media/vendor_icon.png` | **128 × 128** | PNG (RGBA) | 🔴 HIGH | `[ ] Replace` |
| `media/icon256x256.png` | **256 × 256** | PNG (RGB) | 🟡 MEDIUM | `[ ] Replace` |
| `media/icon120x120.png` | **120 × 120** | PNG (RGB) | 🟡 MEDIUM | `[ ] Replace` |
| `media/icon80x80.png` | **80 × 80** | PNG (RGB) | 🟡 MEDIUM | `[ ] Replace` |
| `media/icon48x48.png` | **48 × 48** | PNG (RGB) | 🟡 MEDIUM | `[ ] Replace` |
| `media/icon32x32.png` | **32 × 32** | PNG (RGB) | 🟡 MEDIUM | `[ ] Replace` |
| `media/icon16x16.png` | **16 × 16** | PNG (RGB) | 🟡 MEDIUM | `[ ] Replace` |

### **QR & LEGACY ASSETS**

| File | Current Size | Format | Priority | Status |
|------|-------------|--------|----------|--------|
| `media/qr/kodilove/qr-logo.png` | (unknown) | PNG | 🟢 LOW | `[ ] Update/Delete` |
| `media/qr/kodilove/qr-popcorn.jpg` | (unknown) | JPEG | 🟢 LOW | `[ ] Delete` |

---

## 🔴 HIGH PRIORITY REPLACEMENTS (Start Here!)

These are user-facing assets that appear in:
- Project README
- Application splash screens
- Documentation headers
- Website/GitHub/GitLab profiles

### **1. Banners** (Recommended approach: Create 1 master, adapt for different sizes)

**Master banner recommendation:** `1100 × 500` PNG
- Used for: `docs/resources/banner.png`
- Easily scales to: `320 × 180` (media/banner.png)
- Crops to: `1100 × 320` (slim version)

**What to include:**
- Vid30 logo/text (centered or left-aligned)
- Clean, professional design
- Transparent background (PNG) or solid brand color
- High contrast for readability on GitHub/documentation

### **2. Splash Screen** (`media/splash.jpg` — 1920 × 1080)

**Purpose:** Shown when application starts (Android/Desktop)

**Design tips:**
- Full-screen image (1920 × 1080)
- Include Vid30 logo prominently
- Center vertical composition for safe area
- Keep text readable on small/large screens
- Background: gradient or solid color

### **3. Application Launch Screen** (`media/applaunch_screen.png` — 1920 × 1080)

**Purpose:** Similar to splash screen (variant for different UI)

**Design tips:**
- Same dimensions as splash screen
- Slightly different layout (more subtle, includes loading text)
- Consistent with splash screen branding

### **4. Application Icons** (Create 1 master @ 256×256, scale down)

**Master icon:** `256 × 256` PNG with transparency
- Simple, recognizable Vid30 symbol
- Scalable design (works at 16×16 and 256×256)
- Preferably flat design or monochromatic

**Scaling strategy:**
```
256×256 (master) → Scale down to:
  ├─ 128×128 (vendor_icon.png)
  ├─ 120×120
  ├─ 80×80
  ├─ 48×48
  ├─ 32×32
  └─ 16×16 (favicon)
```

---

## 🟡 MEDIUM PRIORITY (Do After High Priority)

### **5. Vendor Logo** (`media/vendor_logo.png` — 465 × 128)

**Purpose:** Horizontal logo (wider format)

**Design tips:**
- Horizontal layout (wider than tall)
- Include "Vid30" text + optional tagline
- Use same color/style as main icon
- Clear spacing between logo symbol and text

### **6. Demo GIF** (`docs/resources/kodi.gif` — 1280 × 720)

**Purpose:** Animated showcase of Vid30 interface (optional)

**Options:**
- Create screen recording of Vid30 interface (if available)
- Create animated intro/explainer GIF
- Use simple animation (logo reveal, color transitions, etc.)
- **Note:** GIF files can be large; consider WebP or MP4 as fallback

---

## 🟢 LOW PRIORITY (Optional)

### **QR Code Assets**

- `media/qr/kodilove/qr-logo.png` — Kodi branding QR code
  - **Action:** Replace with Vid30 QR code OR delete if not needed
  
- `media/qr/kodilove/qr-popcorn.jpg` — Decorative QR code graphic
  - **Action:** Delete or replace with Vid30 branding

---

## 📋 Replacement Workflow Options

### **Option A: Create Assets in Design Tool (Recommended)**

1. **Design software to use:**
   - **Canva (Free, browser-based)** — Fastest for beginners
   - **Figma (Free tier available)** — Professional, collaborative
   - **GIMP (Free, open-source)** — Full-featured image editor
   - **Inkscape (Free, open-source)** — Vector graphics (SVG → PNG export)

2. **Step-by-step:**
   - Design master banner (1100 × 500)
   - Design master icon (256 × 256)
   - Design vendor logo (465 × 128)
   - Export all as PNG with transparency
   - Download to your computer

3. **Tell me:**
   - Path to your new image files
   - Any color scheme or design notes

### **Option B: I Create Placeholder Assets**

If you don't have designs ready, I can:

1. **Generate temporary placeholder images:**
   - All required sizes
   - Your brand color + "Vid30" text
   - Professional appearance

2. **You provide:**
   - Primary brand color (hex code, e.g., `#FF6B35`)
   - Optional: Secondary color
   - Optional: Text style preference

3. **I generate:**
   - All banner sizes
   - All icon sizes
   - Splash screen
   - Ready to use immediately

---

## 🚀 Step-by-Step Replacement Process

### **When you have your images ready:**

```bash
# 1. Navigate to repo
cd /home/john-yves/Documents/Platform/vid30_kiro

# 2. Backup original Kodi assets (just in case)
mkdir -p .backup/kodi-media
cp media/*.png media/*.jpg .backup/kodi-media/
cp docs/resources/banner*.png docs/resources/kodi.gif .backup/kodi-media/

# 3. Copy your new Vid30 images
# (assuming you downloaded them to ~/Downloads/vid30-assets/)

cp ~/Downloads/vid30-assets/banner.png docs/resources/banner.png
cp ~/Downloads/vid30-assets/banner-slim.png docs/resources/banner_slim.png
cp ~/Downloads/vid30-assets/banner-small.png media/banner.png
cp ~/Downloads/vid30-assets/splash.jpg media/splash.jpg
cp ~/Downloads/vid30-assets/applaunch.png media/applaunch_screen.png
cp ~/Downloads/vid30-assets/icon-256.png media/icon256x256.png
cp ~/Downloads/vid30-assets/icon-256.png media/vendor_icon.png  # resize to 128×128
# ... etc for other icons ...

# 4. Verify files replaced
file media/*.png media/*.jpg docs/resources/banner*.png

# 5. Check git status
git status

# 6. Add and commit
git add media/ docs/resources/
git commit -m "branding: Replace Kodi media assets with Vid30 branding"

# 7. Push to GitHub & GitLab
git push origin main
git push gitlab main
```

---

## 🎨 Quick Brand Color Reference

**If you need to create assets, define your brand color:**

| Element | Color | Hex Code | Notes |
|---------|-------|----------|-------|
| Primary | (To be defined) | `#??????` | Main logo/banner color |
| Secondary | (To be defined) | `#??????` | Accent/highlights |
| Background | (To be defined) | `#??????` | Default background |
| Text | (To be defined) | `#??????` | Primary text |

---

## ✅ Replacement Checklist

### **Before You Start:**
- [ ] Decide design approach (DIY with Canva/Figma, or request placeholders)
- [ ] Gather brand colors/style guide
- [ ] Choose icon design style (flat, gradient, modern, etc.)

### **High Priority Images:**
- [ ] `docs/resources/banner.png` (1100 × 500)
- [ ] `docs/resources/banner_slim.png` (1100 × 320)
- [ ] `media/banner.png` (320 × 180)
- [ ] `media/splash.jpg` (1920 × 1080)
- [ ] `media/applaunch_screen.png` (1920 × 1080)

### **Application Icons:**
- [ ] `media/vendor_logo.png` (465 × 128)
- [ ] `media/vendor_icon.png` (128 × 128)
- [ ] `media/icon256x256.png` (256 × 256)
- [ ] `media/icon120x120.png` (120 × 120)
- [ ] `media/icon80x80.png` (80 × 80)
- [ ] `media/icon48x48.png` (48 × 48)
- [ ] `media/icon32x32.png` (32 × 32)
- [ ] `media/icon16x16.png` (16 × 16)

### **Optional/Legacy:**
- [ ] `docs/resources/kodi.gif` (1280 × 720)
- [ ] `media/qr/kodilove/qr-logo.png`
- [ ] `media/qr/kodilove/qr-popcorn.jpg`

### **After Replacement:**
- [ ] Verify all files in git status
- [ ] Test that README displays banner correctly
- [ ] Commit with message: `"branding: Replace Kodi media assets with Vid30 branding"`
- [ ] Push to GitHub
- [ ] Push to GitLab
- [ ] Update any documentation referencing old assets

---

## 💡 Tips & Tricks

### **Batch Resize Icons with ImageMagick** (if needed)

```bash
# Install ImageMagick (if not already installed)
sudo apt-get install imagemagick

# Resize a master 256px icon to all required sizes
convert master-icon.png -resize 128x128 media/vendor_icon.png
convert master-icon.png -resize 120x120 media/icon120x120.png
convert master-icon.png -resize 80x80 media/icon80x80.png
convert master-icon.png -resize 48x48 media/icon48x48.png
convert master-icon.png -resize 32x32 media/icon32x32.png
convert master-icon.png -resize 16x16 media/icon16x16.png
```

### **Auto-Generate Placeholder Icons**

```bash
# Using ImageMagick to create simple placeholders
# (I can do this if you provide brand color)
convert -size 256x256 xc:'#FF6B35' \
  -pointsize 40 -fill white -gravity center \
  -annotate +0+0 'Vid30' \
  media/icon256x256.png
```

---

## 📞 What I Can Help With

✅ **I can:**
- Guide you through design process
- Generate placeholder assets (if you provide brand color)
- Resize/optimize images (if you provide master files)
- Update file paths in code
- Manage git commits and pushes

❌ **You'll need to:**
- Design custom branding (using Canva/Figma/GIMP)
- Or provide a hex color code for placeholder generation

---

## 🎬 Next Steps

**Choose one:**

1. **"I'll design assets myself"** 
   - Use Canva/Figma/GIMP
   - Create all images
   - Tell me when ready to integrate

2. **"Generate placeholders"**
   - Provide brand color (hex code)
   - I'll create all required sizes
   - You can refine later

3. **"I have existing Vid30 images"**
   - Share path to your image folder
   - I'll copy and optimize them
   - Commit to git

**Let me know which option and I'll guide the next steps!** 🚀
