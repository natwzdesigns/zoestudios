const SITE = {
  name: 'ZOE',
  tagline: 'Studios',
  logo: 'assets/logo.png', // I will update logo style later
  telegram: 'https://t.me/arnislive',
  discord: 'https://discord.gg/rZnFf2NM6D',
  youtube: '#'
};

const RELEASE = {
  version: 'Fusion 1.8.4',
  badge: 'LATEST EDITION',
  changelog: [
    'Add BGMI 4.4 support for all emulators. You will need 32bit bgmi for that (both vip and free). You can find xapk and installer inside tools > Installer.',
    'Fixed Network Bridge Error Bug.',
    'Add Turbo Graphics option for VIP. If you enable this then your keymap might not work. To fix it, go to graphics, scroll down to "UI for non standard screens" and make it 0 from 30.',
    'To reduce graphics glitches, go to extra > check clear all & logout and in tools check balanced / smooth quality. Try playing on DirectX renderer.',
    'You can now go to FusionTools > Installer to download xapk. No need to ask every time.',
    'Small fixes here and there.'
  ],
  vip: {
    price: '₹240/-',
    validity: 'until v4.5 release',
    terms: ['Non-refundable', 'Fixed Price'],
    features: [
      'Support: Mumu and Gameloop support 32bit only. Mumu 64bit support will come later. Other emulators support both.',
      'All VIP features added later',
      '240 FPS Unlocked (up to Ultra HD in-game)',
      'Resolution Support: 480p to 4K [Except Gameloop(2k)]'
    ],
    contact: [
      { name: '@infinish_10', url: 'https://t.me/infinish_10' },
      { name: '@ssmpmaddy', url: 'https://t.me/ssmpmaddy' }
    ],
    activation: 'Copy key, open fusion, check vip activated (no need to enter or paste key). Use given exe with key for activation.'
  },
  downloadUrl: 'https://www.mediafire.com/file/shtp2fkw6zikhsd/Fusion.exe/file'
};

window.POSTS = [
  {
    id: 10,
    title: 'Twitter (X) login for emulators',
    slug: 'twitter-login',
    url: 'twitter-login.html',
    category: 'TUTORIAL',
    excerpt: 'Having trouble signing into X inside your emulator? Follow this simple workaround and you\'ll be logged in within minutes.',
    date: '2026-06-07',
    readTime: '4 min read',
    icon: '<img src="assets/twitter_login.jpg" alt="thumbnail">',
    cover_image: 'assets/twitter_login.jpg',
    content: `
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
    `
  },
  {
    id: 1,
    title: 'BGMI 4.4 Gameloop Setup Guide',
    slug: 'bgmi-setup',
    url: 'bgmi-setup.html',
    category: 'BGMI',
    excerpt: 'Complete step-by-step guide to set up BGMI 4.4 on Gameloop emulator with bypass. Covers installation, configuration, and troubleshooting.',
    date: '2026-05-28',
    readTime: '8 min read',
    size: '2.3 GB',
    icon: '<img src="assets/glp_setup.jpg" alt="thumbnail">',
    cover_image: 'assets/glp_setup.jpg',
    youtube_url: 'https://youtu.be/dQw4w9WgXcQ',
    content: `
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
    `
  },
  {
    id: 2,
    title: 'MuMu Player 12 — Complete BGMI Setup (Coming Soon)',
    slug: 'mumu-bgmi-setup',
    category: 'BGMI',
    excerpt: 'How to install and configure BGMI on MuMu Player 12 with Fusion bypass. Includes 64-bit and 32-bit instructions.',
    date: '2026-05-25',
    readTime: '6 min read',
    size: '1.8 GB',
    icon: '<img src="https://picsum.photos/seed/emulator/800/450?grayscale" alt="thumbnail">'
  },
  {
    id: 3,
    title: 'Network Bridge Error — Fix Guide (Coming Soon)',
    slug: 'network-bridge-fix',
    category: 'TUTORIAL',
    excerpt: 'Step-by-step fix for the Network Bridge Failed error that occurs when starting the bypass on Gameloop or other emulators.',
    date: '2026-05-20',
    readTime: '3 min read',
    icon: '<img src="https://picsum.photos/seed/network/800/450?grayscale" alt="thumbnail">'
  },
  {
    id: 4,
    title: 'Best Sensitivity Settings for Emulator (Coming Soon)',
    slug: 'sensitivity-guide',
    category: 'GUIDE',
    excerpt: 'Find the perfect sensitivity for your emulator setup. Covers mouse DPI, polling rate, in-game settings, and aim training tips.',
    date: '2026-05-15',
    readTime: '5 min read',
    icon: '<img src="https://picsum.photos/seed/mouse/800/450?grayscale" alt="thumbnail">'
  },
  {
    id: 99,
    title: 'How to Disable Virtualization Based Security (VBS)',
    slug: 'disable-vbs',
    url: 'disable-vbs.html',
    category: 'TUTORIAL',
    excerpt: 'Complete guide to turning off Windows Virtualization Based Security, Core Isolation, and related optional features for maximum emulator performance.',
    date: '2026-06-10',
    readTime: '4 min read',
    icon: '<img src="https://picsum.photos/seed/security/800/450?grayscale" alt="thumbnail">',
    content: `
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
    `
  },
  {
    id: 5,
    title: 'Gameloop Keymap setup full guide',
    slug: 'gl-keymap',
    url: 'gl-keymap.html',
    category: 'GUIDE',
    excerpt: 'Gameloop Keymap tutorial',
    date: '2026-05-31',
    readTime: '5 MIN READ',
    youtube_url: 'https://youtu.be/dQw4w9WgXcQ',
    cover_image: 'assets/glp_keymap.jpg',
    icon: '<img src="assets/glp_keymap.jpg" alt="thumbnail">',
    content: `
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
    `
  },
  {
    id: 6,
    title: 'iPad Resolution for Emulators (Coming Soon)',
    slug: 'ipad-resolution',
    category: 'GUIDE',
    excerpt: 'How to set iPad view resolution on your emulator for wider FOV and better gameplay. 4K, 2K, and 1080p options covered.',
    date: '2026-05-05',
    readTime: '4 min read',
    icon: '<img src="https://picsum.photos/seed/ipad/800/450?grayscale" alt="thumbnail">'
  },
  {
    id: 7,
    title: 'FPS Optimization',
    slug: 'fps-optimization',
    category: 'GUIDE',
    excerpt: 'PROFESSIONAL PC OPTIMIZATION & STREAM SETUP. Maximize your FPS, eliminate input lag, and stream smoothly.',
    date: '2026-06-08',
    readTime: '3 min read',
    icon: '<img src="assets/fps_optimise.jpg" alt="thumbnail">',
    cover_image: 'assets/fps_optimise.jpg',
    content: `
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
    `
  }
];

window.TOOLS = [
  { title: 'Fusion EXE', icon: '<img src="https://img.icons8.com/?id=CXkWHHhC2F7K&format=png&size=96" class="vintage-icon" alt="icon">', size: '15 MB', category: 'Essentials', desc: 'Main Fusion bypass executable.', url: 'https://www.mediafire.com/file/shtp2fkw6zikhsd/Fusion.exe/file' },
  { title: 'Visual C++ Redistributable', icon: '<img src="https://img.icons8.com/?id=mErfGEjknd1i&format=png&size=96" class="vintage-icon" alt="icon">', size: '14 MB', category: 'Essentials', desc: 'Required runtime for Fusion. Fixes "Failed to perform critical functions" error.', url: 'https://aka.ms/vs/16/release/vc_redist.x64.exe' },
  
  { title: 'BGMI 32-Bit XAPK', icon: '<img src="https://img.icons8.com/?id=I1G7ggfEYFSz&format=png&size=96" class="vintage-icon" alt="icon">', size: '1.16 GB', category: 'Game Files', desc: 'Compatible with MuMu, MSI, LD, and Tencent.', url: 'https://d.apkpure.net/b/XAPK/com.pubg.imobile?versionCode=21120' },


  { title: 'MuMu Chinese 4.1.33 Offline Installer', icon: '<img src="https://img.icons8.com/?id=I1G7ggfEYFSz&format=png&size=96" class="vintage-icon" alt="icon">', size: 'Unknown', category: 'MuMu Tools', desc: 'Offline installer for MuMu Chinese 4.1.33.', url: 'https://www.mediafire.com/file/hu4xoe22lienesq/MuMuNG-setup-V4.1.33.3741-0717235142.zip/file' },
  { title: 'Convert MuMu Chinese to English', icon: '<img src="https://img.icons8.com/?id=mErfGEjknd1i&format=png&size=96" class="vintage-icon" alt="icon">', size: '4 MB', category: 'MuMu Tools', desc: 'Paste in C:\\Program Files\\MuMu Player 12\\shell\\rcc and select replace all.', url: 'https://www.mediafire.com/file/8g7wzh963ts05oy/rcc_en.7z/file' },
  { title: 'MuMu Essentials', icon: '<img src="https://img.icons8.com/?id=I1G7ggfEYFSz&format=png&size=96" class="vintage-icon" alt="icon">', size: '16 MB', category: 'MuMu Tools', desc: 'All essential files and configs needed for MuMu Player setup.', url: 'https://www.mediafire.com/file/nmt69v07q72sz0o/Mumu_essentials.zip/file' },
  { title: 'MuMu Keymaps', icon: '<img src="https://img.icons8.com/?id=mErfGEjknd1i&format=png&size=96" class="vintage-icon" alt="icon">', size: '16 KB', category: 'MuMu Tools', desc: 'Keymap configuration for MuMu player.', url: 'https://www.mediafire.com/file/yzf1jq108nndziw/MUMU.KEYMAPS.zip/file' },

  { title: 'GameLoop 32-Bit Installer', icon: '<img src="https://img.icons8.com/?id=U0SjjYU6UnxL&format=png&size=96" class="vintage-icon" alt="icon">', size: 'Unknown', category: 'Gameloop Tools', desc: 'GameLoop 32-bit official installer.', url: 'https://down.gameloop.com/k_pack_up/16412/c25220736/GLP_installer_1000218456_market.exe' },
  { title: 'GameLoop 64-Bit Installer', icon: '<img src="https://img.icons8.com/?id=U0SjjYU6UnxL&format=png&size=96" class="vintage-icon" alt="icon">', size: 'Unknown', category: 'Gameloop Tools', desc: 'GameLoop 64-bit official installer.', url: 'https://down.gameloop.com/channel/3/26460/GLP_installer_900223150_market.exe' },
  { title: 'GameLoop BGMI Installer (32-Bit)', icon: '<img src="https://img.icons8.com/?id=I1G7ggfEYFSz&format=png&size=96" class="vintage-icon" alt="icon">', size: '1.16 GB', category: 'Gameloop Tools', desc: 'Only compatible with GameLoop.', url: 'https://www.mediafire.com/file/8ogfsbzqwczoh5o/bgmi_installer_gameloop_arm32.zip/file' },
  { title: 'Chinese GameLoop Setup', icon: '<img src="https://img.icons8.com/?id=U0SjjYU6UnxL&format=png&size=96" class="vintage-icon" alt="icon">', size: '225 MB', category: 'Gameloop Tools', desc: 'Use 1.1.1.1 VPN, otherwise it won\'t work.', url: 'https://www.mediafire.com/file/fhj7xy99a4n5ucv/TGB.zip/file' },
  { title: 'Chinese GameLoop Files', icon: '<img src="https://img.icons8.com/?id=I1G7ggfEYFSz&format=png&size=96" class="vintage-icon" alt="icon">', size: '45 MB', category: 'Gameloop Tools', desc: 'Password: 123', url: 'https://www.mediafire.com/file/9yvyia2w1j382fo/Chinese+Gameloop+Files.zip/file' },

  { title: 'Device Registration APK', icon: '<img src="https://img.icons8.com/?id=r0zyQDa3KzSs&format=png&size=96" class="vintage-icon" alt="icon">', size: '800 KB', category: 'Utilities', desc: 'APK for device registration on uncertified Android devices.', url: 'https://www.mediafire.com/file/f7etcxdyf7mir3h/com.evozi.deviceid.apk/file' },
  { title: 'SnailYT.exe', icon: '<img src="https://img.icons8.com/?id=mErfGEjknd1i&format=png&size=96" class="vintage-icon" alt="icon">', size: '4 MB', category: 'Utilities', desc: 'SnailYT GLP utility tool.', url: 'https://www.mediafire.com/file/wgy3x9n4is67z4l/snailyt.exe/file' },
  { title: 'Gameloop Guide PDF', icon: '<img src="https://img.icons8.com/?id=GJvXdaU9uHhq&format=png&size=96" class="vintage-icon" alt="icon">', size: '3 MB', category: 'Guides', desc: 'Comprehensive PDF guide for Gameloop setup and configuration.', url: 'assets/BGMI_Setup_Guide.pdf' }
];

window.FAQ = [
  {
    id: 1,
    q: 'Failed to perform critical functions error',
    a: 'If you are getting "Failed to perform critical functions" error, install the Visual C++ Redistributable package from the link below. This installs the required runtime dependencies.',
    category: 'errors',
    links: [{ text: 'Download VC++ Redistributable (x64)', url: 'https://aka.ms/vs/16/release/vc_redist.x64.exe' }]
  },
  {
    id: 2,
    q: 'Best advice to improve bullet connection',
    a: 'For bullet connectivity, you need: good Sensitivity + a mouse with high polling rate (around 1000Hz) + stable FPS. You need to find a sensitivity that suits you best — that is the only real way to improve bullet connection.<br><br>There are no magic tricks. If you have bad bullet connection, it means you cannot aim-trace the enemy player. Changing resolution does NOT improve bullet connection — what actually happens is your sensitivity changes with the resolution. On iPad resolution, the X-axis sensitivity increases while Y stays the same, giving you better reflex and aim shift. That\'s all.',
    category: 'settings',
    links: []
  },
  {
    id: 3,
    q: 'Convert MuMu Chinese into English',
    a: 'Download the language patch ZIP file and paste it in: <code>C:\\Program Files\\MuMu Player 12\\shell\\rcc</code> — then select "Replace All" when prompted.',
    category: 'emulators',
    links: [{ text: 'Download Language Patch', url: 'https://www.mediafire.com/file/8g7wzh963ts05oy/rcc_en.7z/file' }]
  },
  {
    id: 4,
    q: 'Gameloop keymapping tutorial',
    a: 'Watch this video tutorial for complete Gameloop keymapping setup:',
    category: 'settings',
    links: [{ text: 'Watch Keymapping Tutorial', url: 'https://t.me/arnislive07/40' }]
  },
  {
    id: 5,
    q: 'Gameloop Chinese to English language change',
    a: 'Open Gameloop and press F9. Go to Settings. Scroll to the bottom and find the globe icon 🌐. Click on it, select the first option, scroll down to English, select United States, then drag English US to the first position using the four-line handle on the right. The language will change.',
    category: 'emulators',
    links: []
  },
  {
    id: 6,
    q: 'Device registration link for uncertified devices',
    a: 'If your emulator shows as uncertified, register your device using Google\'s official Android device registration page:',
    category: 'settings',
    links: [{ text: 'Google Device Registration', url: 'https://www.google.com/android/uncertified/' }]
  },
  {
    id: 7,
    q: 'Where is the Gameloop keymap location?',
    a: 'Gameloop keymaps are stored at: <code>C Drive > Users > [YOUR PC NAME] > AppData > Roaming > AndroidTBox</code>',
    category: 'settings',
    links: []
  },
  {
    id: 8,
    q: 'Device registration APK',
    a: 'Use this APK to register your device if the web method does not work:',
    category: 'downloads',
    links: [{ text: 'Download Registration APK', url: 'https://www.mediafire.com/file/f7etcxdyf7mir3h/com.evozi.deviceid.apk/file' }]
  },
  {
    id: 9,
    q: 'How to clean Gameloop registry',
    a: 'Open Registry Editor (regedit) and delete both of these paths:<br><br><code>Computer\\HKEY_CURRENT_USER\\SOFTWARE\\Tencent</code><br><code>Computer\\HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Tencent</code><br><br>Delete both entries to completely clean Gameloop registry.',
    category: 'emulators',
    links: []
  },
  {
    id: 10,
    q: 'MuMu Chinese to English (Video Guide)',
    a: 'Watch this YouTube video for a visual guide on converting MuMu Player from Chinese to English:',
    category: 'emulators',
    links: [{ text: 'Watch YouTube Guide', url: 'https://youtu.be/sasJE7sHNVQ?si=O9AgdCFC1EyqcC9m' }]
  },
  {
    id: 11,
    q: 'Chinese Gameloop files / setup download',
    a: 'Download the complete Chinese Gameloop package with all required files:',
    category: 'downloads',
    links: [{ text: 'Chinese GL Setup', url: 'https://www.mediafire.com/file/fhj7xy99a4n5ucv/TGB.zip/file' }, { text: 'Chinese GL Files', url: 'https://www.mediafire.com/file/9yvyia2w1j382fo/Chinese+Gameloop+Files.zip/file' }]
  },
  {
    id: 12,
    q: 'iPad resolution settings for emulators',
    a: 'Set these resolutions in your emulator settings for iPad view:<br><br><strong>iPad view 4K:</strong> 2880×2160<br><strong>iPad view 2K:</strong> 1920×1440<br><strong>iPad view 1080p:</strong> 1440×1080<br><strong>Optional better 1080p:</strong> 1280×1080',
    category: 'settings',
    links: []
  },
  {
    id: 13,
    q: 'MuMu essentials pack',
    a: 'Download all essential files needed for MuMu Player configuration:',
    category: 'downloads',
    links: [{ text: 'Download MuMu Essentials', url: 'https://www.mediafire.com/file/nmt69v07q72sz0o/Mumu_essentials.zip/file' }]
  },
  {
    id: 14,
    q: 'MuMu keymapping setup',
    a: 'Check this Telegram post for MuMu Player keymapping configuration:',
    category: 'settings',
    links: [{ text: 'MuMu Keymapping Guide', url: 'https://t.me/snailytchat/810729' }]
  },
  {
    id: 15,
    q: 'BGMI stuck on "Starting Battlegrounds Mobile India"',
    a: 'To fix being stuck on the starting screen:<br><br>1. Use Warp VPN and start the game<br>2. Start the game manually and check if it launches<br>3. If not, clear BGMI cache and restart emulator + PC. Try this 3-4 times.<br>4. If it still doesn\'t work, reinstall the emulator<br>5. If you have the XAPK of BGMI, install it directly — no need to uninstall the game first',
    category: 'errors',
    links: []
  },
  {
    id: 16,
    q: 'Fix read/write popup issue in BGMI',
    a: 'To fix this issue:<br><br>1. Open Android settings in emulator (press F9 or Fn+F9 on home screen in Gameloop)<br>2. Go to Settings → Apps → Battlegrounds Mobile India<br>3. Go to Storage and click "Clear Data"<br>4. After this, open BGMI manually — DO NOT launch from Fusion<br>5. Download all resources. Now you can use Fusion to launch the game.',
    category: 'errors',
    links: []
  },
  {
    id: 17,
    q: 'SnailxGLP tool download',
    a: 'Download the SnailYT GLP utility:',
    category: 'downloads',
    links: [{ text: 'Download SnailxGLP', url: 'https://www.mediafire.com/file/wgy3x9n4is67z4l/snailyt.exe/file' }]
  },
  {
    id: 18,
    q: 'Fusion Telegram channel',
    a: 'Join the official Fusion community on Telegram for updates, support, and announcements:',
    category: 'general',
    links: [{ text: 'Join Telegram Channel', url: 'https://t.me/prosnailyt' }]
  },
  {
    id: 19,
    q: 'Do you provide hacks / ESP?',
    a: 'We do NOT support hacks or cheats of any kind. Play fair and keep the game environment clean for everyone. Using hacks can result in permanent bans.',
    category: 'general',
    links: []
  },
  {
    id: 20,
    q: 'EXE flagged as virus by Windows Defender',
    a: 'We don\'t have a Microsoft code signing certificate yet — it\'s paid and we\'re students. Thousands of people have used our software safely. You can verify through VirusTotal if you want to be sure. The software is completely virus-free.',
    category: 'general',
    links: [{ text: 'Check on VirusTotal', url: 'https://www.virustotal.com/' }]
  },
  {
    id: 21,
    q: 'Gameloop complete guide PDF',
    a: 'Download the comprehensive Gameloop setup and configuration guide:',
    category: 'downloads',
    links: [{ text: 'Download Gameloop Guide PDF', url: 'assets/BGMI_Setup_Guide.pdf' }]
  }
];
