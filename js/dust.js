class DustParticle {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.reset();
  }

  reset() {
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = Math.random() * 0.4 - 0.2;
    this.speedY = Math.random() * 0.4 - 0.2;
    this.life = Math.random() * 0.5 + 0.1;
    this.maxLife = this.life;
    this.alpha = 0;
    this.fadeSpeed = 0.005 + Math.random() * 0.005;
    this.fadingIn = true;
  }

  update() {
    this.x += this.speedX;
    this.y -= this.speedY; // move upwards mostly

    if (this.fadingIn) {
      this.alpha += this.fadeSpeed;
      if (this.alpha >= this.life) {
        this.fadingIn = false;
      }
    } else {
      this.alpha -= this.fadeSpeed;
      if (this.alpha <= 0) {
        this.reset();
      }
    }

    // Wrap around
    if (this.x < 0 || this.x > this.canvas.width || this.y < 0 || this.y > this.canvas.height) {
      this.reset();
    }
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    // Use the gold vintage color with dynamic alpha
    this.ctx.fillStyle = `rgba(200, 169, 126, ${this.alpha * 0.5})`;
    this.ctx.fill();
    
    // Slight glow effect for depth
    this.ctx.shadowBlur = this.size * 2;
    this.ctx.shadowColor = `rgba(200, 169, 126, ${this.alpha * 0.3})`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('dustCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function init() {
    resize();
    window.addEventListener('resize', resize);
    
    // Create particles based on screen size
    const numParticles = Math.floor((canvas.width * canvas.height) / 15000);
    for (let i = 0; i < numParticles; i++) {
      particles.push(new DustParticle(canvas));
    }
    
    animate();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    
    requestAnimationFrame(animate);
  }

  init();
});
