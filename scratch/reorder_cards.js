const fs = require('fs');
let data = fs.readFileSync('js/data.js', 'utf8');

const oldGrid = `<div class="apple-pricing-grid">
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
  </div>`;

const newGrid = `<div class="apple-pricing-grid">
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
  </div>`;

if (data.includes(oldGrid)) {
  fs.writeFileSync('js/data.js', data.replace(oldGrid, newGrid));
  console.log('Successfully reordered cards.');
} else {
  console.log('Could not find the exact oldGrid text to replace.');
}
