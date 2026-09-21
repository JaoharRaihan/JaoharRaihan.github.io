/**
 * JAOHAR RAIHAN — 2026 CINEMATIC WEB EXPERIENCE (PRODUCTION READY)
 * Core Script: Fast Splash Sequence, Living Canvas Universe, Micro-Interactions, 3D Tilt, Constellation
 */

document.addEventListener('DOMContentLoaded', () => {
  initSplashScreen();
  initLivingUniverse();
  initAmbientCursor();
  init3DTilt();
  initMagneticButtons();
  initScrollHeader();
  initMobileNav();
  initConstellationInteractions();
});

/* ==========================================================================
   1. CINEMATIC SPLASH SCREEN (FAST PRODUCTION READY)
   ========================================================================== */
function initSplashScreen() {
  const splash = document.getElementById('splash-screen');
  const progressBar = document.querySelector('.splash-loader-progress');
  const skipBtn = document.getElementById('splash-skip-btn');

  if (!splash) return;

  // Always display the cinematic splash screen on page load
  requestAnimationFrame(() => {
    if (progressBar) progressBar.style.width = '100%';
  });

  let dismissed = false;
  const dismissSplash = () => {
    if (dismissed) return;
    dismissed = true;
    splash.classList.add('splash-hidden');
    setTimeout(() => {
      splash.style.display = 'none';
      splash.setAttribute('aria-hidden', 'true');
    }, 600);
  };

  // Gracefully transition to the living universe after 2.1 seconds
  const splashTimer = setTimeout(dismissSplash, 2100);

  // Allow immediate skip if clicked
  if (skipBtn) {
    skipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      clearTimeout(splashTimer);
      dismissSplash();
    });
  }

  // Click anywhere on splash backdrop to enter instantly
  splash.addEventListener('click', () => {
    clearTimeout(splashTimer);
    dismissSplash();
  });
}

/* ==========================================================================
   2. LIVING DIGITAL UNIVERSE (CANVAS PARTICLE SYSTEM)
   "Ideas floating → connecting → becoming products"
   ========================================================================== */
function initLivingUniverse() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth <= 768;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);
  let dpr = Math.min(window.devicePixelRatio || 1, 2);

  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
  }
  resizeCanvas();

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      resizeCanvas();
    }, 100);
  }, { passive: true });

  // Mouse / cursor position
  const mouse = {
    x: width / 2,
    y: height / 2,
    targetX: width / 2,
    targetY: height / 2,
    radius: isMobile ? 70 : 150,
    active: false
  };

  if (!isMobile) {
    window.addEventListener('mousemove', (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      mouse.active = false;
    });
  }

  // Particle count optimized for 60fps
  const particleCount = prefersReducedMotion ? 25 : isMobile ? 45 : 110;
  const particles = [];

  const colorPalette = [
    { r: 56, g: 189, b: 248 },  // Sky/Cyan
    { r: 99, g: 102, b: 241 },  // Indigo
    { r: 168, g: 85, b: 247 },  // Violet
    { r: 244, g: 63, b: 94 },   // Rose / CutBook Ruby
    { r: 255, g: 255, b: 255 }  // Pure Starlight
  ];

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(init = false) {
      this.x = Math.random() * width;
      this.y = init ? Math.random() * height : height + 10;
      this.vx = (Math.random() - 0.5) * (isMobile ? 0.3 : 0.55);
      this.vy = -(Math.random() * 0.35 + 0.12);
      this.size = Math.random() * 2 + 0.6;
      this.baseAlpha = Math.random() * 0.5 + 0.2;
      this.alpha = this.baseAlpha;
      this.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      this.pulseSpeed = Math.random() * 0.02 + 0.005;
      this.pulsePhase = Math.random() * Math.PI * 2;
    }

    update() {
      this.pulsePhase += this.pulseSpeed;
      this.alpha = this.baseAlpha + Math.sin(this.pulsePhase) * 0.15;

      if (mouse.active) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && dist > 0) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * force * 1.1;
          this.y -= Math.sin(angle) * force * 1.1;
        }
      }

      this.x += this.vx;
      this.y += this.vy;

      if (this.x < -20) this.x = width + 20;
      if (this.x > width + 20) this.x = -20;
      if (this.y < -20) this.y = height + 20;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${Math.max(0, this.alpha)})`;
      ctx.fill();

      if (this.size > 1.8) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${Math.max(0, this.alpha * 0.18)})`;
        ctx.fill();
      }
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // Animation Loop with Visibility Optimization
  let isVisible = true;
  const observer = new IntersectionObserver((entries) => {
    isVisible = entries[0].isIntersecting;
  }, { threshold: 0.02 });
  observer.observe(canvas);

  function render() {
    if (isVisible) {
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      const maxDistance = isMobile ? 70 : 110;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(148, 163, 184, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

/* ==========================================================================
   3. AMBIENT CURSOR GLOW
   ========================================================================== */
function initAmbientCursor() {
  const cursor = document.getElementById('cursor-ambient');
  if (!cursor || window.matchMedia('(hover: none)').matches) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let curX = mouseX;
  let curY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  function updateCursor() {
    curX += (mouseX - curX) * 0.12;
    curY += (mouseY - curY) * 0.12;
    cursor.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`;
    requestAnimationFrame(updateCursor);
  }

  updateCursor();
}

/* ==========================================================================
   4. SUBTLE 3D TILT EFFECT ([data-tilt])
   ========================================================================== */
function init3DTilt() {
  if (window.matchMedia('(hover: none)').matches) return;

  const tiltCards = document.querySelectorAll('[data-tilt]');

  tiltCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -4.5;
      const rotateY = ((x - centerX) / centerX) * 4.5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
    }, { passive: true });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}

/* ==========================================================================
   5. MAGNETIC BUTTONS (.magnetic)
   ========================================================================== */
function initMagneticButtons() {
  if (window.matchMedia('(hover: none)').matches) return;

  const magneticBtns = document.querySelectorAll('.magnetic');

  magneticBtns.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    }, { passive: true });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
    });
  });
}

/* ==========================================================================
   6. SCROLL OBSERVER & HEADER STYLING
   ========================================================================== */
function initScrollHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   7. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileNav() {
  const toggle = document.getElementById('mobile-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!toggle || !drawer) return;

  let isOpen = false;

  const setDrawer = (state) => {
    isOpen = state;
    toggle.setAttribute('aria-expanded', String(isOpen));
    drawer.setAttribute('aria-hidden', String(!isOpen));
    if (isOpen) {
      drawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    } else {
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    setDrawer(!isOpen);
  });

  links.forEach((link) => {
    link.addEventListener('click', () => setDrawer(false));
  });

  // Close when tapping outside links on drawer background
  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) setDrawer(false);
  });

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) setDrawer(false);
  });
}

/* ==========================================================================
   8. CONSTELLATION INTERACTIVE NETWORK
   ========================================================================== */
function initConstellationInteractions() {
  const clusters = document.querySelectorAll('.constellation-cluster');
  const techNodes = document.querySelectorAll('.tech-node');

  clusters.forEach((cluster) => {
    cluster.addEventListener('mouseenter', () => {
      const nodesInCluster = cluster.querySelectorAll('.tech-node');
      nodesInCluster.forEach((node) => {
        node.style.borderColor = 'var(--accent-cyan)';
        node.style.color = '#ffffff';
      });
    });

    cluster.addEventListener('mouseleave', () => {
      const nodesInCluster = cluster.querySelectorAll('.tech-node');
      nodesInCluster.forEach((node) => {
        if (!node.classList.contains('active-node')) {
          node.style.borderColor = '';
          node.style.color = '';
        }
      });
    });
  });

  techNodes.forEach((node) => {
    node.addEventListener('mouseenter', () => {
      node.style.boxShadow = '0 0 12px rgba(56, 189, 248, 0.35)';
    });
    node.addEventListener('mouseleave', () => {
      node.style.boxShadow = '';
    });
  });
}
