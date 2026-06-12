const fs = require('fs');

let styleCss = fs.readFileSync('css/style.css', 'utf8');

// Replace .apple-bundle-card block
const cardRegex = /\.apple-bundle-card\s*\{[\s\S]*?\}/;
const newCardCss = `@keyframes spinBorder {
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.apple-bundle-card {
  position: relative;
  border-radius: 28px;
  padding: 3rem 2rem;
  text-align: center;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(200, 169, 126, 0.15);
  margin-bottom: 2rem;
  border: none;
  background: transparent;
  z-index: 1;
}

.apple-bundle-card::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150%;
  height: 400%;
  background: conic-gradient(from 0deg, transparent 0deg, transparent 90deg, var(--gold) 180deg, transparent 270deg, transparent 360deg);
  transform: translate(-50%, -50%) rotate(0deg);
  animation: spinBorder 4s linear infinite;
  z-index: -2;
}

.apple-bundle-card::after {
  content: "";
  position: absolute;
  inset: 2px;
  background: linear-gradient(145deg, #181511 0%, #050403 100%);
  border-radius: 26px;
  z-index: -1;
}

.apple-bundle-card > * {
  position: relative;
  z-index: 1;
}`;

styleCss = styleCss.replace(cardRegex, newCardCss);

const badgeRegex = /\.apple-bundle-badge\s*\{[\s\S]*?\}/;
const newBadgeCss = `.apple-bundle-badge {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(90deg, #ff4e50, #f9d423);
  color: #fff;
  padding: 0.5rem 2rem;
  font-size: 0.95rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  box-shadow: 0 4px 15px rgba(255, 78, 80, 0.4);
  text-shadow: 0 1px 2px rgba(0,0,0,0.5);
}`;

styleCss = styleCss.replace(badgeRegex, newBadgeCss);

const titleRegex = /\.apple-bundle-title\s*\{[\s\S]*?\}/;
const newTitleCss = `.apple-bundle-title {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--gold);
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
  text-shadow: 0 0 20px rgba(200, 169, 126, 0.2);
}`;

styleCss = styleCss.replace(titleRegex, newTitleCss);

const priceRegex = /\.apple-bundle-price\s*\{[\s\S]*?\}/;
const newPriceCss = `.apple-bundle-price {
  font-size: 4rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #fff;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: baseline;
  justify-content: center;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
}`;
styleCss = styleCss.replace(priceRegex, newPriceCss);

fs.writeFileSync('css/style.css', styleCss);

// 2. Update data.js
let dataJs = fs.readFileSync('js/data.js', 'utf8');
dataJs = dataJs.replace('<div class="apple-bundle-badge">Best Value</div>', '<div class="apple-bundle-badge">🔥 HOT</div>');
fs.writeFileSync('js/data.js', dataJs);

console.log('Bundle card upgraded to animated gold.');
