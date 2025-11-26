# 🚀 Vid30 Branding - Next Steps Guide

**Status:** Core branding ✅ COMPLETE | Pushed to GitHub ✅ COMPLETE  
**Date:** November 26, 2025  
**Repository:** jynadal/vid30 (GitHub)  

---

## 📋 Current Progress

### ✅ Completed
- [x] Rebranded core files (version.txt, CMakeLists.txt, README.md, etc.)
- [x] Created attribution documentation (ATTRIBUTION.md)
- [x] Generated completion reports
- [x] Pushed to GitHub (https://github.com/jynadal/vid30)
- [x] Added GitLab support instructions

### ⏳ Remaining Work

Three priority tiers of remaining tasks. Start with **HIGH PRIORITY** items.

---

## 🔴 HIGH PRIORITY (Do These First)

### 1. Set Up Web Presence
**Why:** Required for users to access documentation, downloads, and community  
**Target:** Create 4 web properties

#### 1a. Main Website (https://www.vid30.fr)
- **Content needed:**
  - Home page with features overview
  - About section (mention Kodi foundation)
  - Downloads page (links to builds for Android, Linux, Windows, Web)
  - Blog/News section
  - Contact information
  - Footer with attribution to Kodi

- **Recommended tools:**
  - Static site: Hugo, Jekyll, Next.js
  - CMS: WordPress with custom theme
  - Hosted: GitHub Pages, Vercel, Netlify, or traditional hosting

- **Quick start (Hugo):**
  ```bash
  hugo new site vid30.fr
  cd vid30.fr
  # Add theme and content
  ```

#### 1b. Documentation Hub (https://docs.vid30.fr)
- **Content needed:**
  - Installation guides (Android, Linux, Windows, Web)
  - User manual
  - Addon development guide
  - API reference
  - FAQ

- **Recommended tools:**
  - Sphinx (Python-based, integrates with GitHub)
  - MkDocs (Markdown-based, simple)
  - Read the Docs (free hosting)

- **Quick start (MkDocs):**
  ```bash
  pip install mkdocs mkdocs-material
  mkdocs new docs.vid30.fr
  cd docs.vid30.fr
  # Edit docs in markdown
  mkdocs build
  ```

#### 1c. Community Forums (https://www.vid30.fr/community)
- **Options:**
  - Discourse (recommended, modern forum software)
  - phpBB (lightweight)
  - Embedded on main site (Discussions)

#### 1d. Addon Repository Portal (https://addons.vid30.fr)
- **Purpose:** Browse, search, and install Vid30 addons
- **See Section 3** below for full setup

---

### 2. Update Media Assets
**Why:** Branding must be visual; users need recognizable logos and icons  
**Files to update:** `/media/` folder

#### Assets needed:
```
/media/
├── logo.png                    # Main logo (transparent, 512x512+)
├── logo-text.png              # Logo with text
├── icon.ico                   # Windows icon
├── icon.png                   # App icon (256x256+)
├── splash-screen.png          # Startup splash (1920x1080)
├── banner.png                 # Website banner
├── screenshots/               # NEW: User interface screenshots
│   ├── home.png
│   ├── playback.png
│   └── library.png
└── promotional/               # NEW: Marketing materials
    ├── poster.png
    ├── social-media.png
    └── thumbnail.png
```

#### Design considerations:
- Use consistent color scheme (choose Vid30 brand colors)
- Keep it modern but professional
- Ensure icons are recognizable at small sizes
- Test on all platforms (Android, Windows, Linux, Web)

#### Tools:
- Canva (easy, online)
- Figma (collaborative, professional)
- Adobe Creative Suite (advanced)
- Inkscape (free, open-source)

#### Action items:
1. Create brand style guide (colors, fonts, sizing)
2. Design logo and primary assets
3. Generate platform-specific icons:
   - Android: PNG 192x192, 512x512
   - Windows: ICO format
   - Web: PNG + SVG
   - Splash: 1920x1080
4. Replace files in `/media/` folder
5. Test in application UI

---

### 3. Set Up Addon Repository
**Why:** Addons extend Vid30; users need easy access to install them  
**Scope:** Full infrastructure setup

#### 3a. Repository Server Setup
**Option A: Self-hosted**
- Create addon server at https://addons.vid30.fr
- Technologies:
  - Nginx/Apache web server
  - Python Flask/Django backend (for addon metadata)
  - MySQL/PostgreSQL database
  - Storage for addon ZIP files (S3, local filesystem)

**Option B: Managed Service**
- Use existing addon hosting services
- Examples: GitHub Releases (simple), GitLab Pages, or specialized addon platforms

#### 3b. Addon Structure
- Directory format:
  ```
  repository.vid30/
  ├── addons.xml           # Addon index
  ├── addons.xml.md5       # Checksum
  └── [addon-slug]/
      ├── addon.xml
      ├── [version]/
      │   └── addon-slug-version.zip
      └── icon.png
  ```

#### 3c. Addon Migration
- List compatible Kodi addons (from repository.xbmc.org)
- Create manifest for Vid30 addons
- Update addon package IDs to use `fr.vid30.app` namespace
- Host migrated addons on https://addons.vid30.fr
- OR: Create fork of Kodi addon repo and rebrand

#### 3d. Addon Management Interface (Optional)
- Simple web interface for addon browsing
- Install button that deep-links to app
- Search and filter functionality
- User ratings/reviews

---

## 🟡 MEDIUM PRIORITY (Do These Second)

### 4. Build & Test
**Why:** Ensure CMake changes work and app compiles successfully

#### Test the build:
```bash
cd /home/john-yves/Documents/Platform/vid30_kiro

# Configure with CMake
cmake -B build -S .

# Compile
cmake --build build

# Run tests (if any)
cd build
ctest --output-on-failure
```

#### Verify:
- [ ] No CMake errors related to `project(vid30 ...)`
- [ ] All binaries built successfully
- [ ] Application launches without errors
- [ ] App version shows "Vid30" (from version.txt)

#### Expected build output:
```
-- Project: vid30
-- Build type: Release
-- Configuring done
[100%] Built target vid30
```

---

### 5. Update CI/CD Pipelines
**Why:** Automated builds and tests keep project healthy as you develop

#### 5a. GitHub Actions (`.github/workflows/`)
Review existing workflows:
```bash
ls -la .github/workflows/
```

Update references:
- Replace `xbmc/xbmc` → `jynadal/vid30`
- Replace `Kodi` → `Vid30` in job names and badges
- Update artifact naming (e.g., `kodi-*.zip` → `vid30-*.zip`)
- Check build matrix (Android, Linux, Windows, Web)

Example update:
```yaml
# Before
name: Build Kodi
jobs:
  build-kodi:

# After
name: Build Vid30
jobs:
  build-vid30:
```

#### 5b. Jenkins (if used)
- Update Jenkins job names and descriptions
- Change artifact paths
- Update build badges in README

#### 5c. SonarCloud
- Project already configured in `sonar-project.properties`
- Verify at: https://sonarcloud.io/organizations/vid30

---

## 🟢 OPTIONAL (Nice-to-Have)

### 6. Directory Restructuring
**Complexity:** HIGH | **Risk:** MEDIUM | **Benefit:** MEDIUM  

#### Current structure:
```
/xbmc/                  # All source code
/addons/                # Plugin system
```

#### Option 1: Keep as-is (RECOMMENDED)
- Pros: No refactoring needed, backwards compatible
- Cons: Confusing to new developers

#### Option 2: Rename `/xbmc/` to `/vid30/`
- Requires updating all CMake includes
- Update all import paths in source files
- Update build scripts
- **Effort:** 4-8 hours

```bash
# If you want to do this:
git mv xbmc vid30
# Then update CMakeLists.txt and all references
```

#### Recommendation
**Skip this for now.** Focus on web presence and addon repository. You can refactor later if needed.

---

## 📝 Implementation Roadmap

### Week 1-2: Web Presence
```
Day 1-3: Set up main website (www.vid30.fr)
Day 4-5: Create documentation hub (docs.vid30.fr)
Day 6-7: Set up community forums
Day 8-10: Plan and design media assets
Day 11-14: Update media assets and test UI
```

### Week 3: Addon Repository
```
Day 15-18: Set up addon server infrastructure
Day 19-21: Migrate compatible addons
```

### Week 4: Testing & Polish
```
Day 22-24: Build and test CMake
Day 25-26: Update CI/CD pipelines
Day 27-28: Final QA and documentation
```

---

## ✅ Quick Checklist

### Before Launch
- [ ] Website live and accessible at www.vid30.fr
- [ ] Documentation available at docs.vid30.fr
- [ ] Addon repository running at addons.vid30.fr
- [ ] Media assets updated (logo, icons, splash screen)
- [ ] Build tested successfully
- [ ] GitHub Actions workflows passing
- [ ] README badges updated (build status, license, etc.)
- [ ] ATTRIBUTION.md visible in repository

### Post-Launch
- [ ] Announce on social media
- [ ] Create GitHub releases with build artifacts
- [ ] Set up app store listings (Google Play, etc.)
- [ ] Create first set of official addons
- [ ] Gather user feedback

---

## 📞 Questions & Resources

### Kodi Attribution
See: `ATTRIBUTION.md` (already created)

### Brand Details
See: `BRANDING_REFERENCE.md`

### Changes Made
See: `REBRANDING_COMPLETION_REPORT.md`

### For each step above, refer to the respective section's "Tools" or "Quick start"

---

## 🎯 Your Next Action

**Pick ONE of these to start:**

1. **If you want a fast launch:** Start with #2 (Media Assets) - can be done in parallel with website
2. **If you want robust infrastructure:** Start with #1 (Web Presence) - foundation for everything
3. **If you want to validate the build first:** Start with #4 (Build & Test) - quick win to boost confidence

**My recommendation:** Start with **#2 (Media Assets)** while you plan **#1 (Web Presence)**. They can run in parallel and give quick visual progress.

---

## 🚀 Ready to Continue?

Which section would you like to tackle first? I can provide detailed guidance and help with:
- Design recommendations
- Code templates
- Configuration examples
- Testing procedures

Just let me know! 🎉

---

*Last updated: November 26, 2025*  
*Repository: jynadal/vid30*  
*Status: Core branding complete, ready for next phase*
