const fs = require('fs');
let data = fs.readFileSync('js/data.js', 'utf8');

const startStr = '<h3 style="text-align:center; color: var(--text2);">🛠️ INDIVIDUAL SERVICES</h3>';
const endStr = '━━━━━━━━━━━━━━━';

let startIdx = data.indexOf(startStr);
let endIdx = data.indexOf(endStr, startIdx);

if (startIdx !== -1 && endIdx !== -1) {
  // Move startIdx back slightly to cover the <br> before it if needed
  const beforeStart = data.lastIndexOf('<br>', startIdx);
  if (beforeStart !== -1 && startIdx - beforeStart < 10) {
     startIdx = beforeStart;
  }
  
  // Move endIdx back to the start of the line or <br> before it
  const beforeEnd = data.lastIndexOf('<br>', endIdx);
  if (beforeEnd !== -1 && endIdx - beforeEnd < 10) {
     endIdx = beforeEnd;
  }

  const newPricing = `<div class="apple-pricing-section">
  
  <div class="apple-bundle-card">
    <div class="apple-bundle-badge">Best Value</div>
    <div class="apple-bundle-title">ALL-IN-ONE STREAMER BUNDLE</div>
    <div class="apple-bundle-price">₹1999<span></span></div>
    <div class="apple-bundle-desc">The ultimate setup for serious competitive players who also want to stream seamlessly without dropping frames.</div>
    <div class="apple-bundle-features">
      <span>Complete PC Optimization</span>
      <span>Fusion & Game Setup</span>
      <span>OBS Stream Setup</span>
      <span style="color:var(--primary)">115–150 Minutes</span>
    </div>
  </div>

  <div class="apple-bundle-secondary">
    <div class="apple-bundle-secondary-info">
      <div class="apple-bundle-secondary-title">PC + GAME BUNDLE</div>
      <div class="apple-bundle-secondary-desc">Perfect for those who just want maximum frames and lowest latency without streaming. Includes Complete PC Optimization and Fusion Setup. <br><br>⏱ 105–140 Minutes</div>
    </div>
    <div class="apple-bundle-secondary-price">₹1799</div>
  </div>

  <div class="apple-pricing-header">
    <h3>Individual Services</h3>
    <p>Select specific optimizations tailored to your needs.</p>
  </div>

  <div class="apple-pricing-grid">
    <div class="apple-card">
      <div class="apple-card-title">OBS Stream Setup</div>
      <div class="apple-card-price">₹299<span></span></div>
      <div class="apple-card-desc">Clean and efficient stream configuration optimized for your hardware.</div>
      <ul class="apple-features">
        <li>Encoder configuration</li>
        <li>Bitrate optimization</li>
        <li>Recording profile setup</li>
        <li>Vertical layout setup</li>
        <li class="time">~10 Minutes</li>
      </ul>
    </div>

    <div class="apple-card">
      <div class="apple-card-title">Fusion & Game Setup</div>
      <div class="apple-card-price">₹599<span></span></div>
      <div class="apple-card-desc">Competitive-ready emulator configuration with proper engine, keymapping, and performance tuning.</div>
      <ul class="apple-features">
        <li>Emulator engine configuration</li>
        <li>Gameloop keymapping fixes</li>
        <li>Vibrancy color configuration</li>
        <li class="time">15–20 Minutes</li>
      </ul>
    </div>

    <div class="apple-card">
      <div class="apple-card-title">PC Optimization</div>
      <div class="apple-card-price">₹1499<span></span></div>
      <div class="apple-card-desc">Complete Windows optimization tailored specifically for your hardware.</div>
      <ul class="apple-features">
        <li>Windows cleanup & debloating</li>
        <li>Custom power configuration</li>
        <li>Network & latency optimization</li>
        <li>Registry tuning</li>
        <li>Background process optimization</li>
        <li class="time">90–120 Minutes</li>
      </ul>
    </div>
  </div>

</div>

<br>
`;

  const newData = data.substring(0, startIdx) + newPricing + data.substring(endIdx);
  fs.writeFileSync('js/data.js', newData);
  console.log('Successfully replaced pricing block!');
} else {
  console.log('Could not find start or end index:', startIdx, endIdx);
}
