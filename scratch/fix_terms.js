const fs = require('fs');

// 1. Rewrite CSS
let styleCss = fs.readFileSync('css/style.css', 'utf8');

// The block I added starts with "/* --- PREMIUM TERMS & CONDITIONS --- */"
const cssStart = styleCss.indexOf('/* --- PREMIUM TERMS & CONDITIONS --- */');
if (cssStart !== -1) {
  // Let's replace the whole block starting from there
  const beforeCss = styleCss.substring(0, cssStart);
  
  const newCss = `/* --- PREMIUM TERMS & CONDITIONS --- */
.apple-terms-container {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
}

.apple-terms-header {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text2);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.apple-terms-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.apple-terms-list li {
  font-size: 0.85rem;
  color: var(--text2);
  line-height: 1.5;
  opacity: 0.8;
  display: flex;
}

.apple-terms-list li::before {
  content: "•";
  margin-right: 8px;
  color: var(--gold);
}

.apple-terms-list li strong {
  color: var(--text1);
  font-weight: 500;
  margin-right: 4px;
}

.apple-terms-note {
  margin-top: 1.5rem;
  font-size: 0.85rem;
  color: var(--text2);
  opacity: 0.9;
  line-height: 1.5;
}

.apple-terms-note strong {
  color: var(--gold);
}

.apple-contact-banner {
  background: linear-gradient(145deg, #111 0%, #050505 100%);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 2rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 3rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.3);
}

.apple-contact-text {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text1);
}

.apple-contact-text svg {
  color: var(--gold);
  margin-right: 12px;
}

.apple-contact-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.apple-contact-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border);
  color: var(--text1);
  padding: 0.75rem 1.5rem;
  border-radius: 99px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.apple-contact-btn:hover {
  background: var(--gold);
  color: #000;
  border-color: var(--gold);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(200, 169, 126, 0.2);
}

@media (max-width: 768px) {
  .apple-contact-banner {
    flex-direction: column;
    align-items: flex-start;
  }
  .apple-contact-links {
    width: 100%;
  }
  .apple-contact-btn {
    flex: 1;
  }
}
`;
  fs.writeFileSync('css/style.css', beforeCss + newCss);
  console.log('CSS rewritten');
}

// 2. Rewrite data.js HTML
let dataJs = fs.readFileSync('js/data.js', 'utf8');

const newHtml = `</div> <!-- End apple-pricing-grid -->

<div class="apple-terms-container">
  <div class="apple-terms-header">Terms and Conditions</div>
  <ul class="apple-terms-list">
    <li><span><strong>Advance payment required.</strong></span></li>
    <li><span><strong>Non-refundable</strong> once work begins.</span></li>
    <li><span><strong>No generic scripts</strong> or one-click optimizers.</span></li>
    <li><span><strong>Every setup is performed manually.</strong></span></li>
    <li><span><strong>Final FPS, latency and performance</strong> depend on your hardware specifications.</span></li>
  </ul>
  <div class="apple-terms-note">
    <strong>Note:</strong> Every optimization plan (except stand-alone OBS setup) includes FREE access to a Fusion VIP Season Key at no additional cost.
  </div>
</div>

<div class="apple-contact-banner">
  <div class="apple-contact-text">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
    <span>DM directly to book your slot!</span>
  </div>
  <div class="apple-contact-links">
    <a href="https://t.me/arnislive28" target="_blank" class="apple-contact-btn">@ARNISLIVE</a>
    <a href="https://t.me/drinkyourperiod" target="_blank" class="apple-contact-btn">@drinkyourperiod</a>
  </div>
</div>`;

// Replace the old terms HTML with the new one
const htmlStart = dataJs.indexOf('</div> <!-- End apple-pricing-grid -->');
const htmlEndStr = '</div>'; // End of apple-contact-banner
// But there are multiple </div>. It ends right before `\n    \`\n  },\n  {\n    id: 5,`
const htmlEnd = dataJs.indexOf('    `\n  },\n  {\n    id: 5,');

if (htmlStart !== -1 && htmlEnd !== -1) {
  const beforeHtml = dataJs.substring(0, htmlStart);
  const afterHtml = dataJs.substring(htmlEnd);
  fs.writeFileSync('js/data.js', beforeHtml + newHtml + '\n' + afterHtml);
  console.log('HTML rewritten');
} else {
  console.log('Could not find HTML boundaries', htmlStart, htmlEnd);
}
