let activeTag = 'ALL';

function initSite() {
  const brandName = document.getElementById('siteName');
  if (brandName) brandName.textContent = SITE.name;
  
  const brandSub = document.getElementById('siteTagline');
  if (brandSub) brandSub.textContent = SITE.tagline;
  
  const footerBrand = document.getElementById('footerBrand');
  if (footerBrand) footerBrand.textContent = SITE.name + ' ' + SITE.tagline;

  const htg = document.getElementById('headerTG');
  const mtg = document.getElementById('mobileTG');
  const ftg = document.getElementById('footerTG');
  if (htg) htg.href = SITE.telegram;
  if (mtg) mtg.href = SITE.telegram;
  if (ftg) ftg.href = SITE.telegram;
}

// --- SOUND EFFECTS ---
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new AudioContext();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playSound(type) {
  try {
    initAudio();
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    if (type === 'click') {
      osc.type = 'square';
      osc.frequency.setValueAtTime(800, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.05);
      gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.05);
    } else if (type === 'pop') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.1);
      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.1);
    }
  } catch(e) {}
}

function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  playSound('pop');
  
  // Force reflow to ensure the 'in' animation triggers
  toast.classList.remove('show');
  void toast.offsetWidth;
  toast.classList.add('show');
  
  if (window.toastTimeout) clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 1000);
}


function copyToClipboard(e, text) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  playSound('click');
  
  // Handle relative URLs like 'assets/bgmi_setup_guide.pdf'
  const fullUrl = text.startsWith('http') ? text : new URL(text, window.location.href).href;
  
  navigator.clipboard.writeText(fullUrl).then(() => {
    showToast("Link copied to clipboard!");
  }).catch(err => {
    console.error('Failed to copy: ', err);
    showToast("Failed to copy link");
  });
}

// hamburger
const ham = document.getElementById('hamBtn');
const mobileNav = document.getElementById('mobMenu');
if (ham && mobileNav) {
  ham.addEventListener('click', () => {
    const open = ham.classList.toggle('open');
    mobileNav.classList.toggle('open');
    ham.setAttribute('aria-expanded', open);
  });
  document.addEventListener('click', e => {
    if (!ham.contains(e.target) && !mobileNav.contains(e.target)) {
      ham.classList.remove('open');
      mobileNav.classList.remove('open');
      ham.setAttribute('aria-expanded', 'false');
    }
  });
}

// scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('active');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

function observeAll() {
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
observeAll();

// scroll to top
const scrollBtn = document.getElementById('scrollTop');
if (scrollBtn) {
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function esc(s) {
  if (s == null) return '';
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function onSearch(input) {
  applyFilters();
}

function setTag(tag, btn) {
  activeTag = tag;
  document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  applyFilters();
}

function applyFilters() {
  const q = (document.getElementById('searchInput')?.value || '').toLowerCase();
  let posts = POSTS;
  if (activeTag !== 'ALL') posts = posts.filter(p => p.category === activeTag);
  if (q) posts = posts.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.excerpt.toLowerCase().includes(q)
  );
  
  const countEl = document.getElementById('postCount');
  if (countEl) countEl.textContent = `${posts.length} ENTRIES`;
  
  renderBentoGrid(posts);
}

function renderBentoGrid(posts) {
  const grid = document.getElementById('bentoGrid');
  if (!grid) return;
  
  if (!posts.length) {
    grid.innerHTML = '<div style="grid-column: span 12; text-align: center; padding: 4rem; color: var(--text2); font-family: Courier Prime, monospace;">NO RECORDS FOUND</div>';
    return;
  }
  
  let html = '';
  posts.forEach((p, i) => {
    let classes = 'bento-card reveal';
    if (i === 0) classes += ' b-featured';
    else if (i === 1 || i === 2 || i === 3) classes += ' b-third';
    else if (i === 4 || i === 5) classes += ' b-half';
    else classes += ' b-third';
    
    const catClass = p.category.toLowerCase();
    
    const isComingSoon = p.title.includes('Coming Soon');
    const postUrl = isComingSoon ? 'javascript:void(0)' : (p.url ? p.url : `post.html?slug=${p.slug}`);
    const onClick = isComingSoon ? `data-tooltip="Coming Soon!" onclick="showToast('This guide is coming soon!')"` : '';

    html += `
      <a href="${postUrl}" class="${classes}" ${onClick} style="transition-delay: ${Math.min(i*0.05, 0.4)}s">
        <div class="b-visual">
          <div class="b-visual-bg"></div>
          ${p.icon && p.icon.includes('<img') ? p.icon : `<span>${p.icon || p.category.charAt(0)}</span>`}
        </div>
        <div class="b-body">
          <span class="b-badge badge-${catClass}">${esc(p.category)}</span>
          <h3 class="b-title">${esc(p.title)}</h3>
          <p class="b-excerpt">${esc(p.excerpt)}</p>
        </div>
        <div class="b-foot">
          <span>${esc(p.date)}</span>
          <span class="b-arrow">→</span>
        </div>
      </a>
    `;
  });
  
  grid.innerHTML = html;
  observeAll();
}

function renderRelease() {
  const hub = document.getElementById('releaseHub');
  if (!hub) return;
  
  document.getElementById('relTitle').textContent = RELEASE.version;
  document.getElementById('relBadge').textContent = RELEASE.badge;
  
  document.getElementById('relChangelog').innerHTML = RELEASE.changelog.map(c => `<li>${esc(c)}</li>`).join('');
  
  document.getElementById('relPrice').textContent = RELEASE.vip.price;
  document.getElementById('relValidity').textContent = 'VALID ' + RELEASE.vip.validity.toUpperCase();
  
  document.getElementById('relTerms').innerHTML = RELEASE.vip.terms.map(t => `<span class="vip-pill">${esc(t)}</span>`).join('');
  document.getElementById('relFeatures').innerHTML = RELEASE.vip.features.map(f => `<li>${esc(f)}</li>`).join('');
  
  document.getElementById('relContact').innerHTML = 'Inquiries: ' + RELEASE.vip.contact.map(c => `<a href="${esc(c.url)}" target="_blank">${esc(c.name)}</a>`).join(' / ');
  
  document.getElementById('relDlBtn').href = RELEASE.downloadUrl;
}

function filterFAQ(input) {
  renderFAQ();
}

function setFaqTag(tag, btn) {
  document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  const url = new URL(window.location);
  url.searchParams.set('tag', tag);
  history.replaceState(null, '', url);
  renderFAQ();
}

function toggleJournal(btn) {
  playSound('click');
  const item = btn.closest('.journal-item');
  item.classList.toggle('open');
}

function renderFAQ() {
  const container = document.getElementById('journalList');
  if (!container) return;

  const tagParam = new URLSearchParams(location.search).get('tag') || 'all';
  const q = (document.getElementById('faqSearch')?.value || '').toLowerCase();

  const filtered = FAQ.filter(item => {
    if (tagParam !== 'all' && item.category !== tagParam) return false;
    if (q && !item.q.toLowerCase().includes(q) && !item.a.toLowerCase().includes(q)) return false;
    return true;
  });
  
  if (!filtered.length) {
    container.innerHTML = '<div style="text-align: center; padding: 4rem; color: var(--text2); font-family: Courier Prime, monospace;">NO RECORDS FOUND</div>';
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="journal-item reveal">
      <button class="journal-q" onclick="toggleJournal(this)">
        <span><span class="j-cat jc-${item.category}">${esc(item.category)}</span>${esc(item.q)}</span>
        <span class="j-arrow">+</span>
      </button>
      <div class="j-answer">
        <div class="j-answer-inner">
          <p>${item.a}</p>
          ${item.links.length ? item.links.map(l => `<p style="margin-top:.8rem"><a href="${esc(l.url)}" target="_blank">${esc(l.text)} →</a></p>`).join('') : ''}
        </div>
      </div>
    </div>
  `).join('');
  
  observeAll();
}

function renderTools() {
  const container = document.getElementById('catalogContainer');
  if (!container) return;

  const categories = [
    { id: 'Essentials', title: 'Essentials' },
    { id: 'Game Files', title: 'Game Files' },
    { id: 'MuMu Tools', title: 'MuMu Tools' },
    { id: 'Gameloop Tools', title: 'Gameloop Tools' },
    { id: 'Utilities', title: 'Utilities & Guides' }
  ];

  let html = '';
  
  categories.forEach(cat => {
    const catTools = TOOLS.filter(t => {
      if (cat.id === 'Utilities') return t.category === 'Utilities' || t.category === 'Guides';
      return t.category === cat.id;
    });

    if (catTools.length === 0) return;

    html += `
      <div class="ios-section reveal">
        <h2 class="ios-header">${esc(cat.title)}</h2>
        <div class="ios-list-group">
    `;

    catTools.forEach(tool => {
      html += `
        <a href="${esc(tool.url)}" class="ios-list-item" target="_blank">
          <div class="ios-icon-wrap">
            ${tool.icon}
          </div>
          <div class="ios-info">
            <div class="ios-title">${esc(tool.title)}</div>
            <div class="ios-subtitle">${esc(tool.size)} • ${esc(tool.desc)}</div>
          </div>
          <div class="ios-actions" style="display:flex; align-items:center; gap:8px;">
            ${tool.url.startsWith('http') ? `
            <button class="ios-copy-btn" onclick="copyToClipboard(event, '${esc(tool.url)}')" title="Copy Link" style="background:transparent; border:1px solid var(--border); border-radius:50%; width:32px; height:32px; display:flex; align-items:center; justify-content:center; cursor:pointer;">
              <img src="https://img.icons8.com/?id=86216&format=png&size=96" alt="Copy" style="width:14px; filter:invert(0.6) sepia(1) saturate(3) hue-rotate(5deg);">
            </button>
            ` : ''}
            <div class="ios-get-btn">${tool.url.toLowerCase().endsWith('.pdf') ? 'VIEW' : 'GET'}</div>
          </div>
        </a>
      `;
    });
    
    html += `
        </div>
      </div>
    `;
  });

  container.innerHTML = html || '<div style="text-align:center; padding:4rem; color:var(--text2); font-family:-apple-system,sans-serif">NO RECORDS FOUND</div>';
  observeAll();
}

function initDust() {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '-1';
  canvas.style.opacity = '0.5';
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  const particles = [];
  const particleCount = 35;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 4 + 2,
      speedY: Math.random() * 0.8 + 0.3,
      speedX: Math.random() * 0.6 - 0.3,
      opacity: Math.random() * 0.4 + 0.1,
      angle: Math.random() * 360,
      spin: (Math.random() * 2 - 1) * 2
    });
  }

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  function draw() {
    ctx.clearRect(0, 0, width, height);
    const baseColor = '200, 169, 126'; // Gold

    particles.forEach(p => {
      p.y += p.speedY;
      p.x += Math.sin(p.y / 50) * 0.5 + p.speedX; 
      p.angle += p.spin;

      if (p.y > height + 20) {
        p.y = -20;
        p.x = Math.random() * width;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle * Math.PI / 180);
      ctx.fillStyle = `rgba(${baseColor}, ${p.opacity})`;
      ctx.beginPath();
      ctx.ellipse(0, 0, p.size, p.size * 1.8, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
    requestAnimationFrame(draw);
  }
  draw();
}

// Markdown parser
function renderMarkdown(md) {
  if(!md) return '';
  let h = md
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/^### (.+)$/gm,'<h3>$1</h3>')
    .replace(/^## (.+)$/gm,'<h2>$1</h2>')
    .replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')
    .replace(/\*(.+?)\*/g,'<em>$1</em>')
    .replace(/`(.+?)`/g,'<code>$1</code>')
    .replace(/\[(.+?)\]\((https?:\/\/[^\)]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>')
    .replace(/^&gt; (.+)$/gm,'<blockquote>$1</blockquote>')
    .replace(/^\- (.+)$/gm,'<li>$1</li>')
    .replace(/^• (.+)$/gm,'<li>$1</li>')
    .replace(/^\d+\. (.+)$/gm,'<li>$1</li>');
  h = h.replace(/(<li>[\s\S]*?<\/li>)+/g, m => `<ul>${m}</ul>`);
  h = h.split('\n').map(line => {
    line = line.trim();
    if(!line) return '';
    if(/^<(h[23]|ul|ol|li|blockquote|pre|code)/.test(line)) return line;
    return `<p>${line}</p>`;
  }).join('');
  return h;
}

// Single Post Rendering
function renderPostPage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  if (!slug) {
    document.getElementById('postLoading').innerHTML = "ERROR: DOSSIER IDENTIFIER MISSING";
    return;
  }
  
  const post = POSTS.find(p => p.slug === slug);
  if (!post) {
    document.getElementById('postLoading').innerHTML = "ERROR: DOSSIER CLASSIFIED OR DESTROYED";
    return;
  }

  // Populate metadata
  const titleHtml = post.title.split(' — ');
  if (titleHtml.length > 1) {
    document.getElementById('postTitle').innerHTML = `${titleHtml[0]}<br><em>${titleHtml[1]}</em>`;
  } else {
    document.getElementById('postTitle').innerHTML = post.title;
  }
  
  document.getElementById('postCategoryBreadcrumb').textContent = post.category;
  document.getElementById('postDate').textContent = post.date;
  document.getElementById('postTime').textContent = post.readTime;
  
  // Populate Media
  const mediaContainer = document.getElementById('postMediaContainer');
  if (post.youtube_url) {
    let id = null;
    const m1 = post.youtube_url.match(/[?&]v=([^&#]+)/);
    const m2 = post.youtube_url.match(/youtu\.be\/([^?&#]+)/);
    if(m1) id=m1[1]; else if(m2) id=m2[1];
    
    if(id) {
       mediaContainer.innerHTML = `<div class="video-wrap"><iframe src="https://www.youtube.com/embed/${id}" frameborder="0" allowfullscreen></iframe></div>`;
       mediaContainer.style.display = 'block';
    }
  } else if (post.cover_image) {
    mediaContainer.innerHTML = `<div class="cover-wrap"><img src="${post.cover_image}" alt="Cover"></div>`;
    mediaContainer.style.display = 'block';
  } else {
    mediaContainer.style.display = 'none';
  }
  
  // Populate Content
  const contentHtml = post.content ? renderMarkdown(post.content) : `<p>${post.excerpt}</p>`;
  document.getElementById('postContent').innerHTML = contentHtml;
  
  // Display the article
  document.getElementById('postLoading').style.display = 'none';
  document.getElementById('postArticle').style.display = 'block';
}

function initAnimations() {
  // 1. 3D Tilt Effect on Cards
  const cards = document.querySelectorAll('.bento-card, .tool-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element.
      const y = e.clientY - rect.top;  // y position within the element.
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -5; // max 5deg rotation
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.setProperty('--rx', `${rotateX}deg`);
      card.style.setProperty('--ry', `${rotateY}deg`);
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
  });

  // 2. Magnetic Buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      btn.style.setProperty('--mx', `${x * 0.3}px`);
      btn.style.setProperty('--my', `${y * 0.3}px`);
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.style.setProperty('--mx', '0px');
      btn.style.setProperty('--my', '0px');
    });
  });
}

// --- Random Activity Notifications ---
const activityMessages = [
  "Someone from India just downloaded Fusion EXE.",
  "A user is reading the Gameloop Keymap Setup.",
  "Someone from the US just downloaded BGMI 32-Bit XAPK.",
  "A user just joined the Telegram channel.",
  "Someone from Brazil just booked the PC + Game Setup Bundle.",
  "A user just downloaded MuMu Essentials.",
  "Someone from Nepal is reading FPS Optimization.",
  "A user just grabbed the Chinese GameLoop Setup.",
  "Someone from Bangladesh just downloaded SnailYT.exe.",
  "A user just read the Network Bridge Error fix."
];

function triggerRandomNotification() {
  let notif = document.getElementById('activityNotif');
  if (!notif) {
    notif = document.createElement('div');
    notif.id = 'activityNotif';
    notif.className = 'activity-notification';
    document.body.appendChild(notif);
  }

  const randomMsg = activityMessages[Math.floor(Math.random() * activityMessages.length)];
  
  notif.innerHTML = `
    <div class="act-icon"><img src="https://img.icons8.com/?id=CXkWHHhC2F7K&format=png&size=96" alt="icon"></div>
    <div class="act-text">
      <span class="act-title">Recent Activity</span>
      <span class="act-desc">${randomMsg}</span>
      <span class="act-time">Just now</span>
    </div>
  `;
  
  // Force reflow to ensure the 'in' animation triggers
  notif.classList.remove('show');
  void notif.offsetWidth;
  notif.classList.add('show');
  playSound('pop');
  
  if (window.notifTimeout) clearTimeout(window.notifTimeout);
  window.notifTimeout = setTimeout(() => {
    notif.classList.remove('show');
  }, 5000);
}

function startRandomNotifications() {
  function scheduleNext() {
    const delay = Math.floor(Math.random() * 30000) + 30000; // 30s to 60s
    setTimeout(() => {
      triggerRandomNotification();
      scheduleNext();
    }, delay);
  }
  
  setTimeout(() => {
    triggerRandomNotification();
    scheduleNext();
  }, 15000); // 15s before first one
}

document.addEventListener('DOMContentLoaded', () => {
  initSite();
  initDust();
  if (document.getElementById('bentoGrid')) {
    applyFilters();
    renderRelease();
  }
  if (document.getElementById('journalList')) {
    renderFAQ();
  }
  if (document.getElementById('catalogContainer')) {
    renderTools();
  }
  if (document.getElementById('postArticle')) {
    renderPostPage();
  }
  initAnimations();
  startRandomNotifications();

  // Dismiss loader safely
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.classList.add('loaded');
    }
  }, 1300);

  // --- TOOLTIP SETUP ---
  const tooltip = document.createElement('div');
  tooltip.id = 'cursor-tooltip';
  document.body.appendChild(tooltip);

  document.addEventListener('mousemove', (e) => {
    const target = e.target.closest('[data-tooltip]');
    if (target) {
      tooltip.textContent = target.getAttribute('data-tooltip');
      tooltip.style.left = (e.clientX) + 'px';
      tooltip.style.top = (e.clientY) + 'px';
      tooltip.classList.add('visible');
    } else {
      tooltip.classList.remove('visible');
    }
  });

  // --- PAGE TRANSITIONS ---
  // Create transition overlay
  const transitionOverlay = document.createElement('div');
  transitionOverlay.id = 'page-transition-overlay';
  document.body.appendChild(transitionOverlay);

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    // If it's an internal link and not opening in a new tab
    if (link && !link.hasAttribute('target') && link.href && link.href.startsWith(window.location.origin)) {
      e.preventDefault();
      transitionOverlay.classList.add('active');
      setTimeout(() => {
        window.location = link.href;
      }, 300);
    }
  });

  // Handle Safari/Mobile Back Button (bfcache)
  window.addEventListener('pageshow', (event) => {
    transitionOverlay.classList.remove('active');
  });
});
