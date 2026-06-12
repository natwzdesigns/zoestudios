const fs = require('fs');

// 1. Update css/style.css
const cssToAdd = `
/* --- APPLE ARCHIVE CARDS --- */
.apple-eyebrow {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: -0.2rem;
}
.color-bgmi { color: #f43f5e; }
.color-tutorial { color: var(--gold); }
.color-guide { color: #10b981; }
.color-tools { color: #f59e0b; }
.apple-eyebrow:not(.color-bgmi):not(.color-tutorial):not(.color-guide):not(.color-tools) { color: var(--text2); }

.apple-card-title.b-title {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 1.4rem;
  font-weight: 800;
  color: #fff;
  line-height: 1.25;
  letter-spacing: -0.01em;
  margin-top: 0.2rem;
}

.apple-card-excerpt.b-excerpt {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
  margin-top: 0.2rem;
}
`;

let styleCss = fs.readFileSync('css/style.css', 'utf8');
if (!styleCss.includes('.apple-eyebrow')) {
  fs.appendFileSync('css/style.css', '\n' + cssToAdd);
  
  // Update .b-foot to look cleaner
  styleCss = fs.readFileSync('css/style.css', 'utf8');
  styleCss = styleCss.replace(
    /\.b-foot\s*\{[\s\S]*?\}/,
    `.b-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.6rem 1.6rem 1.6rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  border-top: none;
}`
  );
  fs.writeFileSync('css/style.css', styleCss);
}

// 2. Update js/app.js
let appJs = fs.readFileSync('js/app.js', 'utf8');

appJs = appJs.replace(
  /<div class="b-body">[\s\S]*?<span class="b-badge badge-\${catClass}">\${esc\(p\.category\)}<\/span>[\s\S]*?<h3 class="b-title">\${esc\(p\.title\)}<\/h3>[\s\S]*?<p class="b-excerpt">\${esc\(p\.excerpt\)}<\/p>[\s\S]*?<\/div>/,
  `<div class="b-body">
          <span class="apple-eyebrow color-\${catClass}">\${esc(p.category)}</span>
          <h3 class="apple-card-title b-title">\${esc(p.title)}</h3>
          <p class="apple-card-excerpt b-excerpt">\${esc(p.excerpt)}</p>
        </div>`
);

fs.writeFileSync('js/app.js', appJs);
console.log('Archive cards updated to Apple style.');
