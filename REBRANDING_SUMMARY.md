# Vid30 Rebranding Summary

## ✅ Changes Completed

This document summarizes all branding changes made to rebrand the Kodi project as **Vid30**.

### 1. **version.txt** ✅
   - `APP_NAME`: Kodi → **Vid30**
   - `COMPANY_NAME`: XBMC Foundation → **Vid30**
   - `DEV_NAME`: Team Kodi → **Team Vid30**
   - `ABOUT_WEBSITE`: https://kodi.tv/about/ → **https://www.vid30.fr/about/**
   - `FORUM_WEBSITE`: https://forum.kodi.tv/ → **https://www.vid30.fr/community/**
   - `DOCS_WEBSITE`: https://kodi.wiki/ → **https://docs.vid30.fr/**
   - `COPYRIGHT_YEARS`: 2005-2021 → **2005-2021 XBMC Foundation, 2025 Vid30**
   - `WEBSITE`: http://kodi.tv → **https://www.vid30.fr**
   - `APP_PACKAGE`: org.xbmc.kodi → **fr.vid30.app**
   - `PACKAGE_IDENTITY`: XBMCFoundation.Kodi → **Vid30.MediaCenter**
   - `PACKAGE_PUBLISHER`: Updated with new GUID
   - `PACKAGE_DESCRIPTION`: Updated with Vid30 branding (notes "Based on Kodi")
   - `ADDON_REPOS`: repository.xbmc.org → **repository.vid30.fr** with URL **https://addons.vid30.fr**

### 2. **CMakeLists.txt** ✅
   - `project(kodi ...)` → `project(vid30 ...)`

### 3. **sonar-project.properties** ✅
   - `sonar.projectKey`: xbmc_xbmc → **vid30_vid30**
   - `sonar.organization`: teamkodi → **vid30**

### 4. **README.md** ✅
   - Complete rewrite with Vid30 branding
   - Updated all links to www.vid30.fr
   - Kept attribution section acknowledging Kodi
   - Simplified to focus on current features
   - Updated contribution guidelines
   - Added clear "Based on Kodi" statement

### 5. **privacy-policy.txt** ✅
   - Title: Kodi Privacy Policy → **Vid30 Privacy Policy**
   - Updated date: 2016 Oct 23 → **2025 Nov 25**
   - All references to "Kodi" → **Vid30**
   - Added note: "This policy is based on the original Kodi Privacy Policy with modifications for Vid30"
   - Updated website/forum references

### 6. **ATTRIBUTION.md** ✅ (NEW)
   - Created comprehensive attribution file
   - Credits original Kodi project and XBMC Foundation
   - Acknowledges 500+ developers and 100+ translators
   - References Kodi's GitHub repository
   - Emphasizes respect for open-source principles

---

## 📋 Important Notes

### What Was NOT Changed (As Required)
- ✅ **LICENSE.md** - Original GPL-2.0-or-later license kept intact
- ✅ **LICENSES/** folder - All original license files preserved
- ✅ **docs/CONTRIBUTING.md** - Original contribution guidelines preserved
- ✅ **docs/CODE_GUIDELINES.md** - Original code guidelines preserved
- ✅ Source code comments - All copyright headers in source files remain unchanged

### What Remains to Do

#### 1. **Directory Rename (Optional but Recommended)**
   Currently: `/xbmc/` folder structure
   Recommended: Rename to `/vid30/` for complete branding
   
   **Note:** This is a MAJOR refactoring that will affect:
   - CMake includes and references
   - Include paths throughout the codebase
   - Many configuration files
   - Addon compatibility
   
   **Recommendation:** Keep `/xbmc/` folder for now to maintain compatibility. You can rename later if needed.

#### 2. **Media Assets**
   - Replace `/media/` folder contents with Vid30 branding
   - Update logos, icons, splash screens, banners
   - Create new promotional images

#### 3. **Addon Repository Setup**
   - Set up `https://addons.vid30.fr` server
   - Migrate or create new addon infrastructure
   - Update addon naming conventions if desired

#### 4. **Web Properties**
   - Create/update **www.vid30.fr** website
   - Set up **docs.vid30.fr** documentation site
   - Set up **addons.vid30.fr** addon repository
   - Create community forum at **www.vid30.fr/community/**

#### 5. **Source Code Attribution Headers (Optional)**
   Consider adding to heavily modified source files:
   ```c
   /*
    * Portions copyright (C) 2005-2021 XBMC Foundation
    * Portions copyright (C) 2025 Vid30
    * Licensed under GPLv2 or later - see LICENSE.md
    */
   ```

---

## 🔄 Files Modified

| File | Status | Changes |
|------|--------|---------|
| `version.txt` | ✅ Complete | 11 parameters updated |
| `CMakeLists.txt` | ✅ Complete | Project name changed |
| `sonar-project.properties` | ✅ Complete | Sonar keys updated |
| `README.md` | ✅ Complete | Complete rewrite |
| `privacy-policy.txt` | ✅ Complete | Updated throughout |
| `ATTRIBUTION.md` | ✅ Created | New attribution file |
| `LICENSE.md` | ✅ Preserved | No changes |
| `LICENSES/` | ✅ Preserved | No changes |
| `docs/CONTRIBUTING.md` | ✅ Preserved | No changes |
| `docs/CODE_GUIDELINES.md` | ✅ Preserved | No changes |

---

## 🎯 Next Steps

1. **Test the build**: Run CMake to ensure project name change works
   ```bash
   cd /home/john-yves/Documents/Platform/vid30_kiro
   cmake .
   ```

2. **Update media assets**: Replace logos and branding images in `/media/`

3. **Set up web presence**: Create the three web properties mentioned above

4. **Configure addon repository**: Set up or migrate addon infrastructure

5. **Update any CI/CD pipelines**: If using GitHub Actions or Jenkins, update project references

6. **Test on target platforms**: Verify builds work on Android, Linux, Windows

---

## ✨ Copyright Compliance

This rebranding maintains full GPL-2.0-or-later compliance:
- ✅ Original license preserved
- ✅ Kodi attribution maintained
- ✅ XBMC Foundation credited
- ✅ All contributors' work respected
- ✅ Open-source principles honored

---

**Rebranding completed on:** November 25, 2025
**Branch:** branding-personnalise
**Repository:** jynadal/vid30
