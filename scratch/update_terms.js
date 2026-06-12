const fs = require('fs');

// 1. Update css/style.css
const cssToAdd = `
/* --- PREMIUM TERMS & CONDITIONS --- */
.apple-terms-container {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 2.5rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.2);
}

.apple-terms-header {
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text1);
  margin-bottom: 1.5rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.apple-terms-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.apple-terms-list li {
  display: flex;
  align-items: flex-start;
  font-size: 1.05rem;
  color: var(--text2);
  line-height: 1.5;
}

.apple-terms-list li svg {
  color: var(--gold);
  margin-right: 14px;
  margin-top: 3px;
  flex-shrink: 0;
}

.apple-terms-list li strong {
  color: var(--text1);
  font-weight: 600;
}

.apple-terms-note {
  margin-top: 2.5rem;
  padding: 1.25rem 1.5rem;
  background: rgba(200, 169, 126, 0.05);
  border-left: 3px solid var(--gold);
  border-radius: 0 12px 12px 0;
  font-size: 1rem;
  color: var(--text2);
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
  margin-top: 2rem;
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

let styleData = fs.readFileSync('css/style.css', 'utf8');
if (!styleData.includes('.apple-terms-container')) {
  fs.appendFileSync('css/style.css', '\n' + cssToAdd);
  console.log('Added CSS styles.');
}

// 2. Update js/data.js
let dataJs = fs.readFileSync('js/data.js', 'utf8');

const targetOldText = `<br>
<br>
━━━━━━━━━━━━━━━

### 📌 TERMS AND CONDITIONS

* **Advance payment required.**
* **Non-refundable** once work begins.
* **No generic scripts** or one-click optimizers.
* **Every setup is performed manually.**
* **Final FPS, latency and performance** depend on your hardware specifications.

> **Note:** Every optimization plan (except stand-alone Fusion and OBS setup) includes **FREE** access to a Fusion VIP Season Key at no additional cost.

━━━━━━━━━━━━━━━

📩 **DM directly to book your slot!**
👉 **[@ARNISLIVE](https://t.me/arnislive28)** and **[@drinkyourperiod](https://t.me/drinkyourperiod)** on Telegram`;

const newText = `</div> <!-- End apple-pricing-grid -->

<div class="apple-terms-container">
  <div class="apple-terms-header">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--gold); margin-right: 12px;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
    Terms and Conditions
  </div>
  <ul class="apple-terms-list">
    <li>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span><strong>Advance payment required.</strong></span>
    </li>
    <li>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span><strong>Non-refundable</strong> once work begins.</span>
    </li>
    <li>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span><strong>No generic scripts</strong> or one-click optimizers.</span>
    </li>
    <li>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span><strong>Every setup is performed manually.</strong></span>
    </li>
    <li>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span><strong>Final FPS, latency and performance</strong> depend on your hardware specifications.</span>
    </li>
  </ul>
  <div class="apple-terms-note">
    <strong>Note:</strong> Every optimization plan (except stand-alone OBS setup) includes <strong>FREE</strong> access to a Fusion VIP Season Key at no additional cost.
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

// We also need to remove the closing </div> that was at the end of the pricing grid, because we added it manually to the newText so the grid is closed before the terms.
// Wait, the original had:
// </div>
// <br>
// <br>
// ━━━━━━━━━━━━━━━

// Let's find the closing div of apple-pricing-grid.
let matchPos = dataJs.indexOf('### 📌 TERMS AND CONDITIONS');
if (matchPos !== -1) {
  // Let's replace by slicing carefully.
  // We'll find '</div>' right before the terms.
  const beforeTerms = dataJs.substring(0, matchPos);
  const lastDivIdx = beforeTerms.lastIndexOf('</div>');
  
  if (lastDivIdx !== -1) {
    const veryStart = dataJs.substring(0, lastDivIdx);
    // Find where the old text ends
    const telegramIdx = dataJs.indexOf('[@drinkyourperiod](https://t.me/drinkyourperiod)** on Telegram', matchPos);
    if (telegramIdx !== -1) {
      const veryEnd = dataJs.substring(telegramIdx + '[@drinkyourperiod](https://t.me/drinkyourperiod)** on Telegram'.length);
      dataJs = veryStart + newText + veryEnd;
      fs.writeFileSync('js/data.js', dataJs);
      console.log('Replaced terms and conditions block.');
    } else {
      console.log('Could not find end of old text block');
    }
  } else {
     console.log('Could not find closing div for pricing grid');
  }
} else {
  console.log('Could not find terms block in data.js');
}
