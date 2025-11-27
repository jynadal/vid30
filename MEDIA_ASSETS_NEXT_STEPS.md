# 🎨 Media Assets Task — Summary & Next Steps

**Created:** 27 November 2025  
**Task Status:** 📋 In Progress

---

## ✅ What's Done

### **Documentation Created**

I've created two comprehensive guides to help you replace Kodi assets with Vid30 branding:

1. **`MEDIA_ASSETS_GUIDE.md`**
   - Detailed guide on which images to replace
   - Priority levels (HIGH/MEDIUM/LOW)
   - Design tool recommendations (Canva, Figma, GIMP)
   - Image dimension specifications
   - Git workflow for replacements
   - Accessibility and design tips

2. **`MEDIA_ASSETS_INVENTORY.md`**
   - Current inventory of ALL image assets
   - Exact dimensions of each file
   - Replacement checklist
   - Step-by-step replacement workflow
   - Batch resizing commands (ImageMagick)
   - Quick reference table

---

## 📸 Key Assets to Replace

### **HIGH PRIORITY** (User-facing, do first)

| File | Current Size | Purpose |
|------|-------------|---------|
| `docs/resources/banner.png` | 1100 × 500 | README header banner |
| `docs/resources/banner_slim.png` | 1100 × 320 | Documentation sidebar |
| `media/banner.png` | 320 × 180 | Small project banner |
| `media/splash.jpg` | 1920 × 1080 | App launch splash screen |
| `media/applaunch_screen.png` | 1920 × 1080 | Application UI launch |

### **MEDIUM PRIORITY** (Application icons)

| File | Current Size | Purpose |
|------|-------------|---------|
| `media/vendor_logo.png` | 465 × 128 | Horizontal logo (with text) |
| `media/vendor_icon.png` | 128 × 128 | App icon variant |
| `media/icon256x256.png` | 256 × 256 | Master application icon |
| 7 other icon sizes | 16×16 to 120×120 | Various platforms/UIs |

### **LOW PRIORITY** (Optional)

| File | Purpose |
|------|---------|
| `docs/resources/kodi.gif` | Animated demo (optional) |
| `media/qr/` | QR codes (legacy, can delete) |

---

## 🚀 Three Options for Creating Assets

### **Option A: Design Yourself** ✏️

Use one of these free tools:
- **Canva.com** (easiest, browser-based, templates available)
- **Figma.com** (professional, free tier, exports to PNG)
- **GIMP** (download free, full image editor)
- **Inkscape** (free, vector graphics → PNG export)

**Steps:**
1. Create master banner (1100 × 500)
2. Create master icon (256 × 256)
3. Create splash screen (1920 × 1080)
4. Export as PNG with transparency
5. Download to your computer
6. Tell me the folder path

### **Option B: I Generate Placeholders** 🤖

I can automatically create professional placeholder images.

**You provide:**
- Brand color (hex code, e.g., `#FF6B35`)
- Optionally: secondary color, text style

**I create:**
- All banner sizes
- All icon sizes
- Splash screen
- Ready to use immediately

### **Option C: Use Existing Images** 📁

If you already have Vid30 branding assets:

**You provide:**
- Path to your image folder
- Which images map to which files

**I:**
- Copy and optimize them
- Resize as needed
- Commit to git

---

## 📋 Quick Checklist for Next Step

What would you like to do?

```
Choose ONE:

[ ] A. I'll design assets myself (Canva/Figma/GIMP)
      → Create images, then tell me the folder path
      
[ ] B. Generate placeholder assets
      → Tell me your brand color (hex code)
      → I'll create all sizes automatically
      
[ ] C. I have existing Vid30 images
      → Tell me where they're located
      → I'll integrate them
```

---

## 📖 Documentation Files Reference

For detailed information, see:

1. **`MEDIA_ASSETS_GUIDE.md`** — Full guide with all options
2. **`MEDIA_ASSETS_INVENTORY.md`** — Current inventory & dimensions
3. **`README.md`** — Updated project description
4. **`ATTRIBUTION.md`** — Copyright & attribution to Kodi
5. **`version.txt`** — App metadata (already updated for Vid30)

---

## 🔗 Current Project Status

| Component | Status | Notes |
|-----------|--------|-------|
| **Branding (Code)** | ✅ Complete | version.txt, CMakeLists.txt, README updated |
| **GitHub Repo** | ✅ Complete | Repository created and pushed |
| **GitLab Repo** | ⏳ Pending | Need to add remote and push |
| **Documentation** | ✅ Complete | Guides created for media assets |
| **Media Assets** | 📋 In Progress | Awaiting your decision on creation method |
| **Attribution** | ✅ Complete | ATTRIBUTION.md created with Kodi credits |

---

## 🎬 Next Action

**Tell me your choice (A, B, or C) and I'll proceed!**

For example:
- _"Option B - Generate placeholders. Brand color: #FF6B35"_
- _"Option A - I'll design myself, will send images later"_
- _"Option C - Images are in ~/Downloads/vid30-assets/"_

Once you reply, I'll:
1. Generate/integrate your media assets
2. Verify all image dimensions
3. Commit to git
4. Push to GitHub & GitLab
5. Update README with new branding

---

## 💾 Git Status

All documentation guides are committed:
```
commit 2b3035f
  docs: Add comprehensive media assets replacement guides
  - MEDIA_ASSETS_GUIDE.md
  - MEDIA_ASSETS_INVENTORY.md
```

Working tree is clean and ready for media asset integration.

---

## 📞 Questions?

- **Design tool recommendations?** See MEDIA_ASSETS_GUIDE.md "Design Tips" section
- **Image dimensions not clear?** Check MEDIA_ASSETS_INVENTORY.md table
- **How to batch resize?** See "Batch Resize Icons with ImageMagick" in MEDIA_ASSETS_INVENTORY.md
- **Which images are most critical?** Focus on HIGH PRIORITY banners first

**Let's finish this branding task! 🚀**
