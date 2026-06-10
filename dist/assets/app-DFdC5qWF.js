(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();window.SITE={name:"ZOE",tagline:"Studios",logo:"assets/logo.png",telegram:"https://t.me/arnislive",discord:"https://discord.gg/rZnFf2NM6D",youtube:"#"};window.RELEASE={version:"Fusion 1.8.4",badge:"LATEST EDITION",changelog:["Add BGMI 4.4 support for all emulators. You will need 32bit bgmi for that (both vip and free). You can find xapk and installer inside tools > Installer.","Fixed Network Bridge Error Bug.",'Add Turbo Graphics option for VIP. If you enable this then your keymap might not work. To fix it, go to graphics, scroll down to "UI for non standard screens" and make it 0 from 30.',"To reduce graphics glitches, go to extra > check clear all & logout and in tools check balanced / smooth quality. Try playing on DirectX renderer.","You can now go to FusionTools > Installer to download xapk. No need to ask every time.","Small fixes here and there."],vip:{price:"₹240/-",validity:"until v4.5 release",terms:["Non-refundable","Fixed Price"],features:["Support: Mumu and Gameloop support 32bit only. Mumu 64bit support will come later. Other emulators support both.","All VIP features added later","240 FPS Unlocked (up to Ultra HD in-game)","Resolution Support: 480p to 4K [Except Gameloop(2k)]"],contact:[{name:"@infinish_10",url:"https://t.me/infinish_10"},{name:"@ssmpmaddy",url:"https://t.me/ssmpmaddy"}],activation:"Copy key, open fusion, check vip activated (no need to enter or paste key). Use given exe with key for activation."},downloadUrl:"https://www.mediafire.com/file/shtp2fkw6zikhsd/Fusion.exe/file"};window.POSTS=[{id:10,title:"Twitter (X) login for emulators",slug:"twitter-login",url:"twitter-login.html",category:"TUTORIAL",excerpt:"Having trouble signing into X inside your emulator? Follow this simple workaround and you'll be logged in within minutes.",date:"2026-06-07",readTime:"4 min read",icon:'<img src="assets/twitter_login.jpg" alt="thumbnail">',cover_image:"assets/twitter_login.jpg",content:`
# Login to X (Twitter) on an Emulator

Having trouble signing into X inside your emulator? Follow this simple workaround and you'll be logged in within minutes.

### Step 1 — Sign in on a Normal Browser
Open X (Twitter) on your phone or PC browser and log into your account normally.

### Step 2 — Change Your Email
Go to X Account Settings and replace your current email address with another Gmail account.

### Step 3 — Sign Into Play Store
On your emulator, log into the Google Play Store using that same Gmail account.

### Step 4 — Install X (Twitter)
#### GameLoop Users
Install X from:
- GameLoop App Market
- [Or the download link provided below](https://drive.google.com/file/d/1IlGFVsNOJhkG0szp8ZWhbqtOc2FTI3vc/view?pli=1)

⚠ Do NOT install X from the Play Store on GameLoop.

### Step 5 — Continue with Google
Open X and select:
> **Continue with Google**

Choose the same Gmail account used in the previous steps.

### Step 6 — You're In!
X should automatically recognize your account and sign you in successfully.

Enjoy 😀

---

### Important Note
This method is intended for users experiencing login issues on emulators.

To avoid problems:
- ✓ Use the same Gmail account everywhere
- ✓ Use that Gmail in X Account Settings
- ✓ Use that Gmail in the emulator's Play Store
- ✓ Use "Continue with Google" during login

Once everything matches, login usually works without any issues.
    `},{id:1,title:"BGMI 4.4 Gameloop Setup Guide",slug:"bgmi-setup",url:"bgmi-setup.html",category:"BGMI",excerpt:"Complete step-by-step guide to set up BGMI 4.4 on Gameloop emulator with bypass. Covers installation, configuration, and troubleshooting.",date:"2026-05-28",readTime:"8 min read",size:"2.3 GB",icon:'<img src="assets/glp_setup.jpg" alt="thumbnail">',cover_image:"assets/glp_setup.jpg",youtube_url:"https://youtu.be/dQw4w9WgXcQ",content:`
# GameLoop & BGMI Setup Guide

Comprehensive installation, configuration, and launch protocol via Fusion.

## Phase 1: GameLoop & Engine Initialization

### 1️⃣ Download & Install GameLoop
• Download and install Gameloop.
• For VIP’s use [Gameloop 32 bit](https://t.me/arnislivechats/2078)
• For free users use [Gameloop 64 bit](https://t.me/arnislivechats/2079)

> **Note:** While 32-bit, 64-bit, or Chinese versions generally work, downloading the 64-bit version is recommended if you are using Free Fusion.

### 2️⃣ Install the Required Engine via X
• Open GameLoop and navigate to the App Market.
• Search for and download X (formerly Twitter).

> **⚠️ Mandatory Step:** This is not optional. Installing X forces GameLoop to download and install the underlying engine required to run BGMI.

### 3️⃣ Close GameLoop Completely
• Once X is fully installed and opens on your screen, close X and exit GameLoop entirely.
• Make sure it is not minimized in your system tray.

## Phase 2: Fusion Launch & BGMI Installation

### 4️⃣ Launch GameLoop via Fusion
• Open the Fusion application.
• Click "Launch" to start GameLoop from within Fusion.

> **Note:** Do not worry about BGMI not being installed yet. This is normal at this stage.

### 5️⃣ Run the BGMI Installer
• Ensure GameLoop is running via Fusion.
• Locate the BGMI v4.4 Installer (available from Tools → Installations inside Fusion).
• Extract the installer files to a known location.
• Run the \`install.bat\` file.

> **⚠️ Crucial:** Do NOT close GameLoop while the .bat file is running.

## Phase 3: Resource Download & Final Launch

### 6️⃣ Download In-Game Resources
• Open BGMI normally within GameLoop.
• Download all required in-game resources.

### 7️⃣ Restart Sequence
Once the download completes, BGMI will display:
"The update has been finished, please restart the game."
• Click OK.
• If BGMI attempts to start automatically again, exit the game.
• Close GameLoop completely.

### 8️⃣ Final Launch
• Open Fusion one last time.
• Click "Launch".
• Allow Fusion to start BGMI by itself.

**✅ Setup Complete!**

---

## Additional Configurations

### 🎮 Keymapping Setup
Keymapping Video Guide: [CLICK HERE](https://t.me/arnislive07/40)
• Ensure GameLoop is already fully installed.
• Open Fusion and navigate to Tools.
• Go to the GameLoop section.
• Download snailyt.exe.
• Open the executable.
• Go to Toolbox Section, and kill all Gameloop Processes.
• Set your keymap according to your display resolution.

### 🛒 Play Store Access & Troubleshooting
To manually access the Google Play Store:
• On the GameLoop home screen, press F9 (or Fn + F9 on some keyboards) to reveal hidden system apps.
• Open the Browser.
• Search for "Playstore".
• Click the official Play Store link.
• Choose to open it with the Play Store app.
• Sign in with your Google account.

### 🌐 Network Issues?
> If you experience connection drops or network errors while doing this, try resetting your Windows Firewall.
    `},{id:2,title:"MuMu Player 12 — Complete BGMI Setup (Coming Soon)",slug:"mumu-bgmi-setup",category:"BGMI",excerpt:"How to install and configure BGMI on MuMu Player 12 with Fusion bypass. Includes 64-bit and 32-bit instructions.",date:"2026-05-25",readTime:"6 min read",size:"1.8 GB",icon:'<img src="https://picsum.photos/seed/emulator/800/450?grayscale" alt="thumbnail">'},{id:3,title:"Network Bridge Error — Fix Guide (Coming Soon)",slug:"network-bridge-fix",category:"TUTORIAL",excerpt:"Step-by-step fix for the Network Bridge Failed error that occurs when starting the bypass on Gameloop or other emulators.",date:"2026-05-20",readTime:"3 min read",icon:'<img src="https://picsum.photos/seed/network/800/450?grayscale" alt="thumbnail">'},{id:4,title:"Best Sensitivity Settings for Emulator (Coming Soon)",slug:"sensitivity-guide",category:"GUIDE",excerpt:"Find the perfect sensitivity for your emulator setup. Covers mouse DPI, polling rate, in-game settings, and aim training tips.",date:"2026-05-15",readTime:"5 min read",icon:'<img src="https://picsum.photos/seed/mouse/800/450?grayscale" alt="thumbnail">'},{id:99,title:"How to Disable Virtualization Based Security (VBS)",slug:"disable-vbs",url:"disable-vbs.html",category:"TUTORIAL",excerpt:"Complete guide to turning off Windows Virtualization Based Security, Core Isolation, and related optional features for maximum emulator performance.",date:"2026-06-10",readTime:"4 min read",icon:'<img src="https://picsum.photos/seed/security/800/450?grayscale" alt="thumbnail">',content:`
# Disable Virtualization Based Security (VBS)

Virtualization-Based Security (VBS) and Core Isolation (Memory Integrity) can cause performance issues or conflicts with Android emulators. 

Here is how to completely disable them on Windows 11.

### Step 1 — Disable Core Isolation (Memory Integrity)
The easiest way is through Windows Settings:
1. Open the **Start menu** and search for **"Core isolation"**.
2. Click to open the Core isolation settings page.
3. Toggle the **Memory integrity** switch to **Off**.
4. **Restart your computer**.

### Step 2 — Disable Optional Features
Some Windows features rely on the hypervisor and keep VBS active:
1. Open the **Start menu** and search for **"Turn Windows features on or off"**.
2. Open it and uncheck the following (if they are listed):
   * **Virtual Machine Platform**
   * **Windows Hypervisor Platform**
   * **Microsoft Defender Application Guard**
3. Click **OK** and restart your PC.

### Step 3 — Force Disable via Script (Recommended)
If VBS is still running, you can use our automated script to edit the Registry and disable hypervisor launch:

1. [Download Disable Hyper-V & VBS Tool](https://www.mediafire.com/file/m78tr8e11rf99vv/HD-DisableHyperV_native_v2.exe/file)
2. Right-click the downloaded \`.exe\` file.
3. Select **"Run as Administrator"**.
4. Follow any on-screen prompts.
5. **Restart your PC** for the final time.

*(Note: Disabling virtualization features may prevent programs like VMware, Docker, or WSL2 from working).*
    `},{id:5,title:"Gameloop Keymap setup full guide",slug:"gl-keymap",url:"gl-keymap.html",category:"GUIDE",excerpt:"Gameloop Keymap tutorial",date:"2026-05-31",readTime:"5 MIN READ",youtube_url:"https://youtu.be/dQw4w9WgXcQ",cover_image:"assets/glp_keymap.jpg",icon:'<img src="assets/glp_keymap.jpg" alt="thumbnail">',content:`
# GameLoop Key Mapping Setup Guide

Having issues with key mapping? Most problems happen because the selected mapping doesn't match your emulator resolution.

Important
• Match your key mapping with your Engine Resolution.

• 720p → Use 720p mapping.

• 1080p normal → Use 1080p normal mapping.

• 1080p ipad → Use 1080p ipad mapping.

• 2K iPad (1920×1440) → Use 2K iPad mapping.

• 2K normal (2560×1440) → Use 2K normal mapping.

• 4K normal (3840×2160) → Use 4K normal mapping.

• 4K iPad (2880×2160) → Use 4K iPad mapping.

Before Applying New Mapping
Reset GameLoop key mapping.
Reset in-game button layout to default.
Keep button transparency above 1%.
Close GameLoop completely.
Kill all GameLoop processes using SnailYT.exe.
Apply the correct mapping and launch the game.
Customization
✅ Safe to edit:

• Reload

• Crouch

• Jump

• Prone

• Other single-action buttons

❌ Do NOT modify:

• Fire button

• Aim button

• F key

• G key

• CTRL key

• Other protected macro keys

Note
Initial lag after entering a match is normal while shaders are being built. Once complete, gameplay and key mapping should work smoothly.
    `},{id:6,title:"iPad Resolution for Emulators (Coming Soon)",slug:"ipad-resolution",category:"GUIDE",excerpt:"How to set iPad view resolution on your emulator for wider FOV and better gameplay. 4K, 2K, and 1080p options covered.",date:"2026-05-05",readTime:"4 min read",icon:'<img src="https://picsum.photos/seed/ipad/800/450?grayscale" alt="thumbnail">'},{id:7,title:"FPS Optimization",slug:"fps-optimization",category:"GUIDE",excerpt:"PROFESSIONAL PC OPTIMIZATION & STREAM SETUP. Maximize your FPS, eliminate input lag, and stream smoothly.",date:"2026-06-08",readTime:"3 min read",icon:'<img src="assets/fps_optimise.jpg" alt="thumbnail">',cover_image:"assets/fps_optimise.jpg",content:`
# FPS Optimization
**Get Stable up to 240 FPS**

⚙️ **PROFESSIONAL PC OPTIMIZATION & STREAM SETUP**
Maximize your FPS, eliminate input lag, and stream smoothly. Hardware-tailored setups for competitive players and creators.

━━━━━━━━━━━━━━━

### 🛠️ INDIVIDUAL SERVICES

 * **PC Optimization | ₹2,000**
   Includes Windows debloating, custom power plans, registry tweaks, and network latency/ping optimization. (Does not include emulator or OBS setups).

 * **Fusion & Game Setup | ₹700**
   Includes emulator engine configuration, Gameloop keymapping fixes, and vibrancy color filters. (Does not include Windows or OBS tweaks).

 * **OBS Stream Setup | ₹500**
   Includes custom hardware encoder profiles (NVENC), bitrate tuning, and vertical layout configurations. (Does not include Windows or emulator tweaks).

━━━━━━━━━━━━━━━

### 🎁 DISCOUNTED BUNDLES

 * **PC + Game Setup Bundle | ₹2,300** *(Save ₹400)*
   Includes Full PC Optimization + Fusion & Game Setup. Perfect for competitive players.

 * **All-In-One Streamer Bundle | ₹2,700** *(Save ₹500)*
   Includes ALL THREE services: Full PC Optimization, Game Setup, and OBS Configuration.

━━━━━━━━━━━━━━━

### 📌 TERMS & POLICY

 * 💸 **Payment**: Advance payment required to secure your slot.

 * 🚫 **Non-Refundable**: All sales are final once work begins. Non-negotiable rates.

 * ⚠️ **Performance Note**: Tweaks are calculated safely for your exact hardware, not generic scripts. While optimization unlocks maximum stability and lower latency, final gameplay performance and constant FPS ultimately depend on your system specifications. Every configuration is fully tested to ensure zero stability issues.

━━━━━━━━━━━━━━━

📩 **DM me directly to book your slot!**
👉 **[@arnislive28](https://t.me/arnislive28)** and **[@drinkyourperiod](https://t.me/drinkyourperiod)** on Telegram
    `}];window.TOOLS=[{title:"Fusion EXE",icon:'<img src="https://img.icons8.com/?id=CXkWHHhC2F7K&format=png&size=96" class="vintage-icon" alt="icon">',size:"15 MB",category:"Essentials",desc:"Main Fusion bypass executable.",url:"https://www.mediafire.com/file/shtp2fkw6zikhsd/Fusion.exe/file"},{title:"Visual C++ Redistributable",icon:'<img src="https://img.icons8.com/?id=mErfGEjknd1i&format=png&size=96" class="vintage-icon" alt="icon">',size:"14 MB",category:"Essentials",desc:'Required runtime for Fusion. Fixes "Failed to perform critical functions" error.',url:"https://aka.ms/vs/16/release/vc_redist.x64.exe"},{title:"BGMI 32-Bit XAPK",icon:'<img src="https://img.icons8.com/?id=I1G7ggfEYFSz&format=png&size=96" class="vintage-icon" alt="icon">',size:"1.16 GB",category:"Game Files",desc:"Compatible with MuMu, MSI, LD, and Tencent.",url:"https://d.apkpure.net/b/XAPK/com.pubg.imobile?versionCode=21120"},{title:"MuMu Chinese 4.1.33 Offline Installer",icon:'<img src="https://img.icons8.com/?id=I1G7ggfEYFSz&format=png&size=96" class="vintage-icon" alt="icon">',size:"Unknown",category:"MuMu Tools",desc:"Offline installer for MuMu Chinese 4.1.33.",url:"https://www.mediafire.com/file/hu4xoe22lienesq/MuMuNG-setup-V4.1.33.3741-0717235142.zip/file"},{title:"Convert MuMu Chinese to English",icon:'<img src="https://img.icons8.com/?id=mErfGEjknd1i&format=png&size=96" class="vintage-icon" alt="icon">',size:"4 MB",category:"MuMu Tools",desc:"Paste in C:\\Program Files\\MuMu Player 12\\shell\\rcc and select replace all.",url:"https://www.mediafire.com/file/8g7wzh963ts05oy/rcc_en.7z/file"},{title:"MuMu Essentials",icon:'<img src="https://img.icons8.com/?id=I1G7ggfEYFSz&format=png&size=96" class="vintage-icon" alt="icon">',size:"16 MB",category:"MuMu Tools",desc:"All essential files and configs needed for MuMu Player setup.",url:"https://www.mediafire.com/file/nmt69v07q72sz0o/Mumu_essentials.zip/file"},{title:"MuMu Keymaps",icon:'<img src="https://img.icons8.com/?id=mErfGEjknd1i&format=png&size=96" class="vintage-icon" alt="icon">',size:"16 KB",category:"MuMu Tools",desc:"Keymap configuration for MuMu player.",url:"https://www.mediafire.com/file/yzf1jq108nndziw/MUMU.KEYMAPS.zip/file"},{title:"GameLoop 32-Bit Installer",icon:'<img src="https://img.icons8.com/?id=U0SjjYU6UnxL&format=png&size=96" class="vintage-icon" alt="icon">',size:"Unknown",category:"Gameloop Tools",desc:"GameLoop 32-bit official installer.",url:"https://down.gameloop.com/k_pack_up/16412/c25220736/GLP_installer_1000218456_market.exe"},{title:"GameLoop 64-Bit Installer",icon:'<img src="https://img.icons8.com/?id=U0SjjYU6UnxL&format=png&size=96" class="vintage-icon" alt="icon">',size:"Unknown",category:"Gameloop Tools",desc:"GameLoop 64-bit official installer.",url:"https://down.gameloop.com/channel/3/26460/GLP_installer_900223150_market.exe"},{title:"GameLoop BGMI Installer (32-Bit)",icon:'<img src="https://img.icons8.com/?id=I1G7ggfEYFSz&format=png&size=96" class="vintage-icon" alt="icon">',size:"1.16 GB",category:"Gameloop Tools",desc:"Only compatible with GameLoop.",url:"https://www.mediafire.com/file/8ogfsbzqwczoh5o/bgmi_installer_gameloop_arm32.zip/file"},{title:"Chinese GameLoop Setup",icon:'<img src="https://img.icons8.com/?id=U0SjjYU6UnxL&format=png&size=96" class="vintage-icon" alt="icon">',size:"225 MB",category:"Gameloop Tools",desc:"Use 1.1.1.1 VPN, otherwise it won't work.",url:"https://www.mediafire.com/file/fhj7xy99a4n5ucv/TGB.zip/file"},{title:"Chinese GameLoop Files",icon:'<img src="https://img.icons8.com/?id=I1G7ggfEYFSz&format=png&size=96" class="vintage-icon" alt="icon">',size:"45 MB",category:"Gameloop Tools",desc:"Password: 123",url:"https://www.mediafire.com/file/9yvyia2w1j382fo/Chinese+Gameloop+Files.zip/file"},{title:"Device Registration APK",icon:'<img src="https://img.icons8.com/?id=r0zyQDa3KzSs&format=png&size=96" class="vintage-icon" alt="icon">',size:"800 KB",category:"Utilities",desc:"APK for device registration on uncertified Android devices.",url:"https://www.mediafire.com/file/f7etcxdyf7mir3h/com.evozi.deviceid.apk/file"},{title:"SnailYT.exe",icon:'<img src="https://img.icons8.com/?id=mErfGEjknd1i&format=png&size=96" class="vintage-icon" alt="icon">',size:"4 MB",category:"Utilities",desc:"SnailYT GLP utility tool.",url:"https://www.mediafire.com/file/wgy3x9n4is67z4l/snailyt.exe/file"},{title:"Gameloop Guide PDF",icon:'<img src="https://img.icons8.com/?id=GJvXdaU9uHhq&format=png&size=96" class="vintage-icon" alt="icon">',size:"3 MB",category:"Guides",desc:"Comprehensive PDF guide for Gameloop setup and configuration.",url:"assets/BGMI_Setup_Guide.pdf"}];window.FAQ=[{id:1,q:"Failed to perform critical functions error",a:'If you are getting "Failed to perform critical functions" error, install the Visual C++ Redistributable package from the link below. This installs the required runtime dependencies.',category:"errors",links:[{text:"Download VC++ Redistributable (x64)",url:"https://aka.ms/vs/16/release/vc_redist.x64.exe"}]},{id:2,q:"Best advice to improve bullet connection",a:"For bullet connectivity, you need: good Sensitivity + a mouse with high polling rate (around 1000Hz) + stable FPS. You need to find a sensitivity that suits you best — that is the only real way to improve bullet connection.<br><br>There are no magic tricks. If you have bad bullet connection, it means you cannot aim-trace the enemy player. Changing resolution does NOT improve bullet connection — what actually happens is your sensitivity changes with the resolution. On iPad resolution, the X-axis sensitivity increases while Y stays the same, giving you better reflex and aim shift. That's all.",category:"settings",links:[]},{id:3,q:"Convert MuMu Chinese into English",a:'Download the language patch ZIP file and paste it in: <code>C:\\Program Files\\MuMu Player 12\\shell\\rcc</code> — then select "Replace All" when prompted.',category:"emulators",links:[{text:"Download Language Patch",url:"https://www.mediafire.com/file/8g7wzh963ts05oy/rcc_en.7z/file"}]},{id:4,q:"Gameloop keymapping tutorial",a:"Watch this video tutorial for complete Gameloop keymapping setup:",category:"settings",links:[{text:"Watch Keymapping Tutorial",url:"https://t.me/arnislive07/40"}]},{id:5,q:"Gameloop Chinese to English language change",a:"Open Gameloop and press F9. Go to Settings. Scroll to the bottom and find the globe icon 🌐. Click on it, select the first option, scroll down to English, select United States, then drag English US to the first position using the four-line handle on the right. The language will change.",category:"emulators",links:[]},{id:6,q:"Device registration link for uncertified devices",a:"If your emulator shows as uncertified, register your device using Google's official Android device registration page:",category:"settings",links:[{text:"Google Device Registration",url:"https://www.google.com/android/uncertified/"}]},{id:7,q:"Where is the Gameloop keymap location?",a:"Gameloop keymaps are stored at: <code>C Drive > Users > [YOUR PC NAME] > AppData > Roaming > AndroidTBox</code>",category:"settings",links:[]},{id:8,q:"Device registration APK",a:"Use this APK to register your device if the web method does not work:",category:"downloads",links:[{text:"Download Registration APK",url:"https://www.mediafire.com/file/f7etcxdyf7mir3h/com.evozi.deviceid.apk/file"}]},{id:9,q:"How to clean Gameloop registry",a:"Open Registry Editor (regedit) and delete both of these paths:<br><br><code>Computer\\HKEY_CURRENT_USER\\SOFTWARE\\Tencent</code><br><code>Computer\\HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Tencent</code><br><br>Delete both entries to completely clean Gameloop registry.",category:"emulators",links:[]},{id:10,q:"MuMu Chinese to English (Video Guide)",a:"Watch this YouTube video for a visual guide on converting MuMu Player from Chinese to English:",category:"emulators",links:[{text:"Watch YouTube Guide",url:"https://youtu.be/sasJE7sHNVQ?si=O9AgdCFC1EyqcC9m"}]},{id:11,q:"Chinese Gameloop files / setup download",a:"Download the complete Chinese Gameloop package with all required files:",category:"downloads",links:[{text:"Chinese GL Setup",url:"https://www.mediafire.com/file/fhj7xy99a4n5ucv/TGB.zip/file"},{text:"Chinese GL Files",url:"https://www.mediafire.com/file/9yvyia2w1j382fo/Chinese+Gameloop+Files.zip/file"}]},{id:12,q:"iPad resolution settings for emulators",a:"Set these resolutions in your emulator settings for iPad view:<br><br><strong>iPad view 4K:</strong> 2880×2160<br><strong>iPad view 2K:</strong> 1920×1440<br><strong>iPad view 1080p:</strong> 1440×1080<br><strong>Optional better 1080p:</strong> 1280×1080",category:"settings",links:[]},{id:13,q:"MuMu essentials pack",a:"Download all essential files needed for MuMu Player configuration:",category:"downloads",links:[{text:"Download MuMu Essentials",url:"https://www.mediafire.com/file/nmt69v07q72sz0o/Mumu_essentials.zip/file"}]},{id:14,q:"MuMu keymapping setup",a:"Check this Telegram post for MuMu Player keymapping configuration:",category:"settings",links:[{text:"MuMu Keymapping Guide",url:"https://t.me/snailytchat/810729"}]},{id:15,q:'BGMI stuck on "Starting Battlegrounds Mobile India"',a:"To fix being stuck on the starting screen:<br><br>1. Use Warp VPN and start the game<br>2. Start the game manually and check if it launches<br>3. If not, clear BGMI cache and restart emulator + PC. Try this 3-4 times.<br>4. If it still doesn't work, reinstall the emulator<br>5. If you have the XAPK of BGMI, install it directly — no need to uninstall the game first",category:"errors",links:[]},{id:16,q:"Fix read/write popup issue in BGMI",a:'To fix this issue:<br><br>1. Open Android settings in emulator (press F9 or Fn+F9 on home screen in Gameloop)<br>2. Go to Settings → Apps → Battlegrounds Mobile India<br>3. Go to Storage and click "Clear Data"<br>4. After this, open BGMI manually — DO NOT launch from Fusion<br>5. Download all resources. Now you can use Fusion to launch the game.',category:"errors",links:[]},{id:17,q:"SnailxGLP tool download",a:"Download the SnailYT GLP utility:",category:"downloads",links:[{text:"Download SnailxGLP",url:"https://www.mediafire.com/file/wgy3x9n4is67z4l/snailyt.exe/file"}]},{id:18,q:"Fusion Telegram channel",a:"Join the official Fusion community on Telegram for updates, support, and announcements:",category:"general",links:[{text:"Join Telegram Channel",url:"https://t.me/prosnailyt"}]},{id:19,q:"Do you provide hacks / ESP?",a:"We do NOT support hacks or cheats of any kind. Play fair and keep the game environment clean for everyone. Using hacks can result in permanent bans.",category:"general",links:[]},{id:20,q:"EXE flagged as virus by Windows Defender",a:"We don't have a Microsoft code signing certificate yet — it's paid and we're students. Thousands of people have used our software safely. You can verify through VirusTotal if you want to be sure. The software is completely virus-free.",category:"general",links:[{text:"Check on VirusTotal",url:"https://www.virustotal.com/"}]},{id:21,q:"Gameloop complete guide PDF",a:"Download the comprehensive Gameloop setup and configuration guide:",category:"downloads",links:[{text:"Download Gameloop Guide PDF",url:"assets/BGMI_Setup_Guide.pdf"}]}];class b{constructor(i){this.canvas=i,this.ctx=i.getContext("2d"),this.reset()}reset(){this.x=Math.random()*this.canvas.width,this.y=Math.random()*this.canvas.height,this.size=Math.random()*2+.5,this.speedX=Math.random()*.4-.2,this.speedY=Math.random()*.4-.2,this.life=Math.random()*.5+.1,this.maxLife=this.life,this.alpha=0,this.fadeSpeed=.005+Math.random()*.005,this.fadingIn=!0}update(){this.x+=this.speedX,this.y-=this.speedY,this.fadingIn?(this.alpha+=this.fadeSpeed,this.alpha>=this.life&&(this.fadingIn=!1)):(this.alpha-=this.fadeSpeed,this.alpha<=0&&this.reset()),(this.x<0||this.x>this.canvas.width||this.y<0||this.y>this.canvas.height)&&this.reset()}draw(){this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.size,0,Math.PI*2),this.ctx.fillStyle=`rgba(200, 169, 126, ${this.alpha*.5})`,this.ctx.fill(),this.ctx.shadowBlur=this.size*2,this.ctx.shadowColor=`rgba(200, 169, 126, ${this.alpha*.3})`}}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("dustCanvas");if(!e)return;const i=e.getContext("2d");let t=[];function n(){e.width=window.innerWidth,e.height=window.innerHeight}function o(){n(),window.addEventListener("resize",n);const s=Math.floor(e.width*e.height/15e3);for(let c=0;c<s;c++)t.push(new b(e));a()}function a(){i.clearRect(0,0,e.width,e.height),t.forEach(s=>{s.update(),s.draw()}),requestAnimationFrame(a)}o()});function E(){const e=document.getElementById("siteName");e&&(e.textContent=SITE.name);const i=document.getElementById("siteTagline");i&&(i.textContent=SITE.tagline);const t=document.getElementById("footerBrand");t&&(t.textContent=SITE.name+" "+SITE.tagline);const n=document.getElementById("headerTG"),o=document.getElementById("mobileTG"),a=document.getElementById("footerTG");n&&(n.href=SITE.telegram),o&&(o.href=SITE.telegram),a&&(a.href=SITE.telegram)}const S=window.AudioContext||window.webkitAudioContext;let d;function I(){d||(d=new S),d.state==="suspended"&&d.resume()}function G(e){try{I();const i=d.createOscillator(),t=d.createGain();i.connect(t),t.connect(d.destination),e==="click"||e==="pop"&&(i.type="sine",i.frequency.setValueAtTime(400,d.currentTime),i.frequency.exponentialRampToValueAtTime(800,d.currentTime+.1),t.gain.setValueAtTime(.1,d.currentTime),t.gain.exponentialRampToValueAtTime(.001,d.currentTime+.1),i.start(),i.stop(d.currentTime+.1))}catch{}}const u=document.getElementById("hamBtn"),m=document.getElementById("mobMenu");u&&m&&(u.addEventListener("click",()=>{const e=u.classList.toggle("open");m.classList.toggle("open"),u.setAttribute("aria-expanded",e)}),document.addEventListener("click",e=>{!u.contains(e.target)&&!m.contains(e.target)&&(u.classList.remove("open"),m.classList.remove("open"),u.setAttribute("aria-expanded","false"))}));const w=new IntersectionObserver(e=>{e.forEach(i=>{i.isIntersecting&&(i.target.classList.add("active"),w.unobserve(i.target))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});function p(){document.querySelectorAll(".reveal").forEach(e=>w.observe(e))}p();const g=document.getElementById("scrollTop");g&&(window.addEventListener("scroll",()=>{g.classList.toggle("visible",window.scrollY>400)},{passive:!0}),g.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"})));function l(e){return e==null?"":String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function M(){var n;const e=(((n=document.getElementById("searchInput"))==null?void 0:n.value)||"").toLowerCase();let i=POSTS;e&&(i=i.filter(o=>o.title.toLowerCase().includes(e)||o.excerpt.toLowerCase().includes(e)));const t=document.getElementById("postCount");t&&(t.textContent=`${i.length} ENTRIES`),T(i)}function T(e){const i=document.getElementById("bentoGrid");if(!i)return;if(!e.length){i.innerHTML='<div style="grid-column: span 12; text-align: center; padding: 4rem; color: var(--text2); font-family: Courier Prime, monospace;">NO RECORDS FOUND</div>';return}let t="";e.forEach((n,o)=>{let a="bento-card reveal";o===0?a+=" b-featured":o===1||o===2||o===3?a+=" b-third":o===4||o===5?a+=" b-half":a+=" b-third";const s=n.category.toLowerCase(),c=n.title.includes("Coming Soon"),r=c?"javascript:void(0)":n.url?n.url:`post.html?slug=${n.slug}`;t+=`
      <a href="${r}" class="${a}" ${c?`data-tooltip="Coming Soon!" onclick="showToast('This guide is coming soon!')"`:""} style="transition-delay: ${Math.min(o*.05,.4)}s">
        <div class="b-visual">
          <div class="b-visual-bg"></div>
          ${n.icon&&n.icon.includes("<img")?n.icon:`<span>${n.icon||n.category.charAt(0)}</span>`}
        </div>
        <div class="b-body">
          <span class="b-badge badge-${s}">${l(n.category)}</span>
          <h3 class="b-title">${l(n.title)}</h3>
          <p class="b-excerpt">${l(n.excerpt)}</p>
        </div>
        <div class="b-foot">
          <span>${l(n.date)}</span>
          <span class="b-arrow">→</span>
        </div>
      </a>
    `}),i.innerHTML=t,p()}function C(){document.getElementById("releaseHub")&&(document.getElementById("relTitle").textContent=RELEASE.version,document.getElementById("relBadge").textContent=RELEASE.badge,document.getElementById("relChangelog").innerHTML=RELEASE.changelog.map(i=>`<li>${l(i)}</li>`).join(""),document.getElementById("relPrice").textContent=RELEASE.vip.price,document.getElementById("relValidity").textContent="VALID "+RELEASE.vip.validity.toUpperCase(),document.getElementById("relTerms").innerHTML=RELEASE.vip.terms.map(i=>`<span class="vip-pill">${l(i)}</span>`).join(""),document.getElementById("relFeatures").innerHTML=RELEASE.vip.features.map(i=>`<li>${l(i)}</li>`).join(""),document.getElementById("relContact").innerHTML="Inquiries: "+RELEASE.vip.contact.map(i=>`<a href="${l(i.url)}" target="_blank">${l(i.name)}</a>`).join(" / "),document.getElementById("relDlBtn").href=RELEASE.downloadUrl)}function x(){var o;const e=document.getElementById("journalList");if(!e)return;const i=new URLSearchParams(location.search).get("tag")||"all",t=(((o=document.getElementById("faqSearch"))==null?void 0:o.value)||"").toLowerCase(),n=FAQ.filter(a=>!(i!=="all"&&a.category!==i||t&&!a.q.toLowerCase().includes(t)&&!a.a.toLowerCase().includes(t)));if(!n.length){e.innerHTML='<div style="text-align: center; padding: 4rem; color: var(--text2); font-family: Courier Prime, monospace;">NO RECORDS FOUND</div>';return}e.innerHTML=n.map(a=>`
    <div class="journal-item reveal">
      <button class="journal-q" onclick="toggleJournal(this)">
        <span><span class="j-cat jc-${a.category}">${l(a.category)}</span>${l(a.q)}</span>
        <span class="j-arrow">+</span>
      </button>
      <div class="j-answer">
        <div class="j-answer-inner">
          <p>${a.a}</p>
          ${a.links.length?a.links.map(s=>`<p style="margin-top:.8rem"><a href="${l(s.url)}" target="_blank">${l(s.text)} →</a></p>`).join(""):""}
        </div>
      </div>
    </div>
  `).join(""),p()}function k(){const e=document.getElementById("catalogContainer");if(!e)return;const i=[{id:"Essentials",title:"Essentials"},{id:"Game Files",title:"Game Files"},{id:"MuMu Tools",title:"MuMu Tools"},{id:"Gameloop Tools",title:"Gameloop Tools"},{id:"Utilities",title:"Utilities & Guides"}];let t="";i.forEach(n=>{const o=TOOLS.filter(a=>n.id==="Utilities"?a.category==="Utilities"||a.category==="Guides":a.category===n.id);o.length!==0&&(t+=`
      <div class="ios-section reveal">
        <h2 class="ios-header">${l(n.title)}</h2>
        <div class="ios-list-group">
    `,o.forEach(a=>{t+=`
        <a href="${l(a.url)}" class="ios-list-item" target="_blank">
          <div class="ios-icon-wrap">
            ${a.icon}
          </div>
          <div class="ios-info">
            <div class="ios-title">${l(a.title)}</div>
            <div class="ios-subtitle">${l(a.size)} • ${l(a.desc)}</div>
          </div>
          <div class="ios-actions" style="display:flex; align-items:center; gap:8px;">
            ${a.url.startsWith("http")?`
            <button class="ios-copy-btn" onclick="copyToClipboard(event, '${l(a.url)}')" title="Copy Link" style="background:transparent; border:1px solid var(--border); border-radius:50%; width:32px; height:32px; display:flex; align-items:center; justify-content:center; cursor:pointer;">
              <img src="https://img.icons8.com/?id=86216&format=png&size=96" alt="Copy" style="width:14px; filter:invert(0.6) sepia(1) saturate(3) hue-rotate(5deg);">
            </button>
            `:""}
            <div class="ios-get-btn">${a.url.toLowerCase().endsWith(".pdf")?"VIEW":"GET"}</div>
          </div>
        </a>
      `}),t+=`
        </div>
      </div>
    `)}),e.innerHTML=t||'<div style="text-align:center; padding:4rem; color:var(--text2); font-family:-apple-system,sans-serif">NO RECORDS FOUND</div>',p()}function L(){const e=document.createElement("canvas");e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100%",e.style.pointerEvents="none",e.style.zIndex="-1",e.style.opacity="0.5",document.body.prepend(e);const i=e.getContext("2d");let t=e.width=window.innerWidth,n=e.height=window.innerHeight;const o=[],a=35;for(let c=0;c<a;c++)o.push({x:Math.random()*t,y:Math.random()*n,size:Math.random()*4+2,speedY:Math.random()*.8+.3,speedX:Math.random()*.6-.3,opacity:Math.random()*.4+.1,angle:Math.random()*360,spin:(Math.random()*2-1)*2});window.addEventListener("resize",()=>{t=e.width=window.innerWidth,n=e.height=window.innerHeight});function s(){i.clearRect(0,0,t,n);const c="200, 169, 126";o.forEach(r=>{r.y+=r.speedY,r.x+=Math.sin(r.y/50)*.5+r.speedX,r.angle+=r.spin,r.y>n+20&&(r.y=-20,r.x=Math.random()*t),i.save(),i.translate(r.x,r.y),i.rotate(r.angle*Math.PI/180),i.fillStyle=`rgba(${c}, ${r.opacity})`,i.beginPath(),i.ellipse(0,0,r.size,r.size*1.8,0,0,Math.PI*2),i.fill(),i.restore()}),requestAnimationFrame(s)}s()}function B(e){if(!e)return"";let i=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^### (.+)$/gm,"<h3>$1</h3>").replace(/^## (.+)$/gm,"<h2>$1</h2>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`(.+?)`/g,"<code>$1</code>").replace(/\[(.+?)\]\((https?:\/\/[^\)]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>').replace(/^&gt; (.+)$/gm,"<blockquote>$1</blockquote>").replace(/^\- (.+)$/gm,"<li>$1</li>").replace(/^• (.+)$/gm,"<li>$1</li>").replace(/^\d+\. (.+)$/gm,"<li>$1</li>");return i=i.replace(/(<li>[\s\S]*?<\/li>)+/g,t=>`<ul>${t}</ul>`),i=i.split(`
`).map(t=>(t=t.trim(),t?/^<(h[23]|ul|ol|li|blockquote|pre|code)/.test(t)?t:`<p>${t}</p>`:"")).join(""),i}function P(){const i=new URLSearchParams(window.location.search).get("slug");if(!i){document.getElementById("postLoading").innerHTML="ERROR: DOSSIER IDENTIFIER MISSING";return}const t=POSTS.find(s=>s.slug===i);if(!t){document.getElementById("postLoading").innerHTML="ERROR: DOSSIER CLASSIFIED OR DESTROYED";return}const n=t.title.split(" — ");n.length>1?document.getElementById("postTitle").innerHTML=`${n[0]}<br><em>${n[1]}</em>`:document.getElementById("postTitle").innerHTML=t.title,document.getElementById("postCategoryBreadcrumb").textContent=t.category,document.getElementById("postDate").textContent=t.date,document.getElementById("postTime").textContent=t.readTime;const o=document.getElementById("postMediaContainer");if(t.youtube_url){let s=null;const c=t.youtube_url.match(/[?&]v=([^&#]+)/),r=t.youtube_url.match(/youtu\.be\/([^?&#]+)/);c?s=c[1]:r&&(s=r[1]),s&&(o.innerHTML=`<div class="video-wrap"><iframe src="https://www.youtube.com/embed/${s}" frameborder="0" allowfullscreen></iframe></div>`,o.style.display="block")}else t.cover_image?(o.innerHTML=`<div class="cover-wrap"><img src="${t.cover_image}" alt="Cover"></div>`,o.style.display="block"):o.style.display="none";const a=t.content?B(t.content):`<p>${t.excerpt}</p>`;document.getElementById("postContent").innerHTML=a,document.getElementById("postLoading").style.display="none",document.getElementById("postArticle").style.display="block"}function F(){document.querySelectorAll(".bento-card, .tool-card").forEach(t=>{t.addEventListener("mousemove",n=>{const o=t.getBoundingClientRect(),a=n.clientX-o.left,s=n.clientY-o.top,c=o.width/2,r=o.height/2,h=(s-r)/r*-5,v=(a-c)/c*5;t.style.setProperty("--rx",`${h}deg`),t.style.setProperty("--ry",`${v}deg`)}),t.addEventListener("mouseleave",()=>{t.style.setProperty("--rx","0deg"),t.style.setProperty("--ry","0deg")})}),document.querySelectorAll(".btn").forEach(t=>{t.addEventListener("mousemove",n=>{const o=t.getBoundingClientRect(),a=n.clientX-o.left-o.width/2,s=n.clientY-o.top-o.height/2;t.style.setProperty("--mx",`${a*.3}px`),t.style.setProperty("--my",`${s*.3}px`)}),t.addEventListener("mouseleave",()=>{t.style.setProperty("--mx","0px"),t.style.setProperty("--my","0px")})})}const f=["Someone from India just downloaded Fusion EXE.","A user is reading the Gameloop Keymap Setup.","Someone from the US just downloaded BGMI 32-Bit XAPK.","A user just joined the Telegram channel.","Someone from Brazil just booked the PC + Game Setup Bundle.","A user just downloaded MuMu Essentials.","Someone from Nepal is reading FPS Optimization.","A user just grabbed the Chinese GameLoop Setup.","Someone from Bangladesh just downloaded SnailYT.exe.","A user just read the Network Bridge Error fix."];function y(){let e=document.getElementById("activityNotif");e||(e=document.createElement("div"),e.id="activityNotif",e.className="activity-notification",document.body.appendChild(e));const i=f[Math.floor(Math.random()*f.length)];e.innerHTML=`
    <div class="act-icon"><img src="https://img.icons8.com/?id=CXkWHHhC2F7K&format=png&size=96" alt="icon"></div>
    <div class="act-text">
      <span class="act-title">Recent Activity</span>
      <span class="act-desc">${i}</span>
      <span class="act-time">Just now</span>
    </div>
  `,e.classList.remove("show"),e.offsetWidth,e.classList.add("show"),G("pop"),window.notifTimeout&&clearTimeout(window.notifTimeout),window.notifTimeout=setTimeout(()=>{e.classList.remove("show")},5e3)}function O(){function e(){const i=Math.floor(Math.random()*3e4)+3e4;setTimeout(()=>{y(),e()},i)}setTimeout(()=>{y(),e()},15e3)}document.addEventListener("DOMContentLoaded",()=>{E(),L(),document.getElementById("bentoGrid")&&(M(),C()),document.getElementById("journalList")&&x(),document.getElementById("catalogContainer")&&k(),document.getElementById("postArticle")&&P(),F(),O(),setTimeout(()=>{const n=document.getElementById("loader");n&&n.classList.add("loaded")},1300);const e=document.createElement("div");e.id="cursor-tooltip",document.body.appendChild(e),document.addEventListener("mousemove",n=>{const o=n.target.closest("[data-tooltip]");o?(e.textContent=o.getAttribute("data-tooltip"),e.style.left=n.clientX+"px",e.style.top=n.clientY+"px",e.classList.add("visible")):e.classList.remove("visible")});const i=document.createElement("div");i.id="page-transition-overlay",document.body.appendChild(i);const t=document.createElement("div");t.id="scroll-progress",document.body.appendChild(t),window.addEventListener("scroll",()=>{const n=document.documentElement.scrollHeight-document.documentElement.clientHeight;if(n>0){const o=window.scrollY/n*100;t.style.width=o+"%"}else t.style.width="0%"}),document.addEventListener("click",n=>{const o=n.target.closest("a");o&&!o.hasAttribute("target")&&o.href&&o.href.startsWith(window.location.origin)&&(n.preventDefault(),i.classList.add("active"),setTimeout(()=>{window.location=o.href},300))}),window.addEventListener("pageshow",n=>{i.classList.remove("active")})});
