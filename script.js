/**
 * JAOHAR RAIHAN — CREATIVE DIRECTOR PORTFOLIO CONTROLLER
 * 100% Faithful Replica of the GetLayers AI "Creative Director" Template
 *
 * Core Engines:
 * 1. 5x7 Bitmask Circular LED Matrix Typography Engine (SVG with Lit/Unlit Phosphor Dots)
 * 2. High-Frequency Scoreboard/Cipher Scramble Reveal Animation
 * 3. Section 2 Living HUD Matrix Cipher Stream
 * 4. Scroll-Triggered LED Decoders (Services & Portfolio)
 * 5. Interactive Magnetic "Start Project" Dial
 * 6. Floating Glass Capsule Nav & Contact Dialogue Modal
 * 7. Case Study Category Filter & Smooth Carousel
 * 8. Real-Time Dhaka (BST / UTC+6) Clock
 */

// ==========================================================================
// 1. 5x7 LED BITMASK FONT SPECIFICATION
// Each character is 5 columns wide x 7 rows high (each byte represents a 5-bit row)
// ==========================================================================
const LED_FONT_5X7 = {
  'A': [0x0E, 0x11, 0x11, 0x1F, 0x11, 0x11, 0x11],
  'B': [0x1E, 0x11, 0x11, 0x1E, 0x11, 0x11, 0x1E],
  'C': [0x0E, 0x11, 0x10, 0x10, 0x10, 0x11, 0x0E],
  'D': [0x1C, 0x12, 0x11, 0x11, 0x11, 0x12, 0x1C],
  'E': [0x1F, 0x10, 0x10, 0x1E, 0x10, 0x10, 0x1F],
  'F': [0x1F, 0x10, 0x10, 0x1E, 0x10, 0x10, 0x10],
  'G': [0x0E, 0x11, 0x10, 0x17, 0x11, 0x11, 0x0F],
  'H': [0x11, 0x11, 0x11, 0x1F, 0x11, 0x11, 0x11],
  'I': [0x0E, 0x04, 0x04, 0x04, 0x04, 0x04, 0x0E],
  'J': [0x07, 0x02, 0x02, 0x02, 0x02, 0x12, 0x0C],
  'K': [0x11, 0x12, 0x14, 0x18, 0x14, 0x12, 0x11],
  'L': [0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0x1F],
  'M': [0x11, 0x1B, 0x15, 0x15, 0x11, 0x11, 0x11],
  'N': [0x11, 0x19, 0x15, 0x13, 0x11, 0x11, 0x11],
  'O': [0x0E, 0x11, 0x11, 0x11, 0x11, 0x11, 0x0E],
  'P': [0x1E, 0x11, 0x11, 0x1E, 0x10, 0x10, 0x10],
  'Q': [0x0E, 0x11, 0x11, 0x11, 0x15, 0x12, 0x0D],
  'R': [0x1E, 0x11, 0x11, 0x1E, 0x14, 0x12, 0x11],
  'S': [0x0F, 0x10, 0x10, 0x0E, 0x01, 0x01, 0x1E],
  'T': [0x1F, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04],
  'U': [0x11, 0x11, 0x11, 0x11, 0x11, 0x11, 0x0E],
  'V': [0x11, 0x11, 0x11, 0x11, 0x11, 0x0A, 0x04],
  'W': [0x11, 0x11, 0x11, 0x15, 0x15, 0x1B, 0x11],
  'X': [0x11, 0x11, 0x0A, 0x04, 0x0A, 0x11, 0x11],
  'Y': [0x11, 0x11, 0x0A, 0x04, 0x04, 0x04, 0x04],
  'Z': [0x1F, 0x01, 0x02, 0x04, 0x08, 0x10, 0x1F],
  '0': [0x0E, 0x11, 0x13, 0x15, 0x19, 0x11, 0x0E],
  '1': [0x04, 0x0C, 0x04, 0x04, 0x04, 0x04, 0x0E],
  '2': [0x0E, 0x11, 0x01, 0x06, 0x08, 0x10, 0x1F],
  '3': [0x1E, 0x01, 0x01, 0x0E, 0x01, 0x01, 0x1E],
  '4': [0x02, 0x06, 0x0A, 0x12, 0x1F, 0x02, 0x02],
  '5': [0x1F, 0x10, 0x1E, 0x01, 0x01, 0x11, 0x0E],
  '6': [0x06, 0x08, 0x10, 0x1E, 0x11, 0x11, 0x0E],
  '7': [0x1F, 0x01, 0x02, 0x04, 0x08, 0x08, 0x08],
  '8': [0x0E, 0x11, 0x11, 0x0E, 0x11, 0x11, 0x0E],
  '9': [0x0E, 0x11, 0x11, 0x0F, 0x01, 0x02, 0x0C],
  '&': [0x08, 0x14, 0x14, 0x08, 0x15, 0x12, 0x0D],
  '/': [0x01, 0x02, 0x02, 0x04, 0x08, 0x08, 0x10],
  '-': [0x00, 0x00, 0x00, 0x1F, 0x00, 0x00, 0x00],
  '+': [0x00, 0x04, 0x04, 0x1F, 0x04, 0x04, 0x00],
  '.': [0x00, 0x00, 0x00, 0x00, 0x00, 0x0C, 0x0C],
  ':': [0x00, 0x0C, 0x0C, 0x00, 0x0C, 0x0C, 0x00],
  ' ': [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]
};

const GLYPH_SET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789&';

// ==========================================================================
// 2. SVG LED MATRIX RENDERER
// Generates circular lit & unlit dots with phosphor bloom
// ==========================================================================
function renderLedSvg(lines, options = {}) {
  const dotRadius = options.dotRadius || 2.2;
  const pitch = options.pitch || 6.8;
  const charSpacing = options.charSpacing !== undefined ? options.charSpacing : 9.5;
  const spaceWidth = options.spaceWidth !== undefined ? options.spaceWidth : 18;
  const lineSpacing = options.lineSpacing !== undefined ? options.lineSpacing : 14;
  const filterId = options.filterId || `led-glow-${Math.random().toString(36).substr(2, 6)}`;
  const litColor = options.litColor || '#ffffff';
  const unlitColor = options.unlitColor || 'rgba(255, 255, 255, 0.08)';

  const charWidth = 4 * pitch + 2 * dotRadius;
  const charHeight = 6 * pitch + 2 * dotRadius;

  // Calculate width for each line
  let maxLineWidth = 0;
  const lineMetrics = lines.map((line) => {
    let w = 0;
    const chars = line.toUpperCase().split('');
    chars.forEach((ch, idx) => {
      if (ch === ' ') {
        w += spaceWidth;
      } else {
        w += charWidth;
      }
      if (idx < chars.length - 1) {
        w += charSpacing;
      }
    });
    if (w > maxLineWidth) maxLineWidth = w;
    return { line, width: w, chars };
  });

  const totalWidth = Math.ceil(maxLineWidth + dotRadius * 2);
  const totalHeight = Math.ceil(lines.length * charHeight + (lines.length - 1) * lineSpacing + dotRadius * 2);

  let circlesHtml = '';

  lineMetrics.forEach((metric, lineIdx) => {
    const lineY = dotRadius + lineIdx * (charHeight + lineSpacing);
    let curX = dotRadius;

    metric.chars.forEach((ch) => {
      if (ch === ' ') {
        curX += spaceWidth + charSpacing;
        return;
      }

      const glyph = LED_FONT_5X7[ch] || LED_FONT_5X7[' '];
      for (let r = 0; r < 7; r++) {
        const rowVal = glyph[r] || 0;
        for (let c = 0; c < 5; c++) {
          const isLit = Boolean(rowVal & (1 << (4 - c)));
          const cx = (curX + c * pitch + dotRadius).toFixed(1);
          const cy = (lineY + r * pitch + dotRadius).toFixed(1);
          const fill = isLit ? litColor : unlitColor;
          const filterAttr = isLit ? `filter="url(#${filterId})"` : '';
          const cls = isLit ? 'led-dot-lit' : 'led-dot-unlit';

          circlesHtml += `<circle cx="${cx}" cy="${cy}" r="${dotRadius}" fill="${fill}" class="${cls}" ${filterAttr}/>`;
        }
      }
      curX += charWidth + charSpacing;
    });
  });

  return `
    <svg viewBox="0 0 ${totalWidth} ${totalHeight}" width="${totalWidth}" height="${totalHeight}" class="led-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${lines.join(' ')}">
      <defs>
        <filter id="${filterId}" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      ${circlesHtml}
    </svg>
  `;
}

// ==========================================================================
// 3. SCOREBOARD / CIPHER SCRAMBLE CONTROLLER
// Decodes target text with cycling random alphanumeric characters
// ==========================================================================
function scrambleLedElement(container, targetLines, options = {}, onComplete = null) {
  if (!container) return;

  const duration = options.duration || 1100; // ms
  const frameInterval = 38; // ms per tick (~26 fps)
  const totalFrames = Math.floor(duration / frameInterval);

  // Flatten characters to manage progressive locking
  const lineLengths = targetLines.map(l => l.length);
  const totalChars = lineLengths.reduce((a, b) => a + b, 0);

  let frame = 0;
  if (container._scrambleTimer) {
    clearInterval(container._scrambleTimer);
  }

  container._scrambleTimer = setInterval(() => {
    frame++;
    const progress = frame / totalFrames;
    const lockedCharCount = Math.floor(progress * (totalChars + 2));

    let charCounter = 0;
    const currentLines = targetLines.map((line) => {
      return line.split('').map((char) => {
        if (char === ' ') return ' ';
        const isLocked = charCounter < lockedCharCount;
        charCounter++;
        if (isLocked) return char;
        // Random scramble glyph
        return GLYPH_SET[Math.floor(Math.random() * GLYPH_SET.length)];
      }).join('');
    });

    container.innerHTML = renderLedSvg(currentLines, options);

    if (frame >= totalFrames) {
      clearInterval(container._scrambleTimer);
      container._scrambleTimer = null;
      container.innerHTML = renderLedSvg(targetLines, options);
      if (onComplete) onComplete();
    }
  }, frameInterval);
}

// ==========================================================================
// 4. HERO STAGE INITIALIZATION
// ==========================================================================
function initHeroLedTitle() {
  const heroContainer = document.getElementById('hero-led-title');
  if (!heroContainer) return;

  const targetLines = ['JAOHAR RAIHAN'];
  const heroOptions = {
    dotRadius: 2.2,
    pitch: 6.8,
    charSpacing: 9.5,
    spaceWidth: 20,
    filterId: 'hero-title-glow'
  };

  // Immediate scramble reveal on page load
  scrambleLedElement(heroContainer, targetLines, heroOptions);

  // Re-scramble gracefully on user hover
  heroContainer.addEventListener('mouseenter', () => {
    if (!heroContainer._scrambleTimer) {
      scrambleLedElement(heroContainer, targetLines, { ...heroOptions, duration: 600 });
    }
  });
}

// ==========================================================================
// 5. SECTION 2 LIVING HUD MATRIX CIPHER
// Dynamic 4-row matrix stream matching the template's C7WL / E0D8 / C7W / P8XM
// ==========================================================================
function initMatrixCipher() {
  const cipherContainer = document.getElementById('matrix-cipher-container');
  if (!cipherContainer) return;

  const cipherOptions = {
    dotRadius: 2.4,
    pitch: 7.2,
    charSpacing: 10,
    lineSpacing: 12,
    filterId: 'cipher-glow'
  };

  const cipherCodes = [
    ['JR26', 'POS6', 'DHAK', '0101'],
    ['C7WL', 'E0D8', 'C7W9', 'P8XM'],
    ['RN26', 'BLDR', 'CUTB', 'UTC6'],
    ['PROD', 'CODE', 'APPS', 'USER']
  ];

  let currentSetIdx = 0;

  function renderCurrentCipher(animate = false) {
    const target = cipherCodes[currentSetIdx];
    if (animate) {
      scrambleLedElement(cipherContainer, target, { ...cipherOptions, duration: 550 });
    } else {
      cipherContainer.innerHTML = renderLedSvg(target, cipherOptions);
    }
  }

  // Initial render
  renderCurrentCipher(true);

  // Periodic living HUD pulse scramble every 4.5 seconds
  setInterval(() => {
    currentSetIdx = (currentSetIdx + 1) % cipherCodes.length;
    renderCurrentCipher(true);
  }, 4800);

  // Interactive scramble on click or hover
  cipherContainer.addEventListener('click', () => {
    currentSetIdx = (currentSetIdx + 1) % cipherCodes.length;
    renderCurrentCipher(true);
  });
}

// ==========================================================================
// 6. SCROLL-TRIGGERED LED SECTION DECODERS
// ==========================================================================
function initScrollLedReveal() {
  const sectionHeaders = [
    {
      id: 'stack-led-title',
      lines: ['THINGS I', 'WORK WITH'],
      options: { dotRadius: 2.2, pitch: 6.8, charSpacing: 9.5, lineSpacing: 12, filterId: 'stack-glow' }
    }
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const item = sectionHeaders.find(h => h.id === entry.target.id);
        if (item && !entry.target._hasAnimated) {
          entry.target._hasAnimated = true;
          scrambleLedElement(entry.target, item.lines, item.options);
        }
      }
    });
  }, { threshold: 0.25 });

  sectionHeaders.forEach((item) => {
    const el = document.getElementById(item.id);
    if (el) {
      el.innerHTML = renderLedSvg(item.lines, item.options);
      observer.observe(el);

      // Re-scramble on hover
      el.addEventListener('mouseenter', () => {
        if (!el._scrambleTimer) {
          scrambleLedElement(el, item.lines, { ...item.options, duration: 650 });
        }
      });
    }
  });
}

// ==========================================================================
// 7. FLOATING NAV MONOGRAM (JR IN MINI LED DOTS)
// ==========================================================================
function initNavJrLed() {
  const navContainer = document.getElementById('nav-jr-led');
  if (!navContainer) return;

  const miniOptions = {
    dotRadius: 1.4,
    pitch: 4.2,
    charSpacing: 5.5,
    filterId: 'nav-jr-glow'
  };

  navContainer.innerHTML = renderLedSvg(['JR'], miniOptions);
}

// ==========================================================================
// 8. FLOATING BOTTOM NAV & CONTACT MODAL
// ==========================================================================
function initContactModal() {
  const modal = document.getElementById('contact-modal');
  const openBtn = document.getElementById('open-contact-btn');
  const heroTrigger = document.getElementById('hero-contact-trigger');
  const closeBtn = document.getElementById('close-modal-btn');
  const copyBtn = document.getElementById('copy-email-btn');
  const copyPill = document.getElementById('copy-status-pill');
  const toast = document.getElementById('toast-bar');

  if (!modal) return;

  const openModal = () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (openBtn) openBtn.addEventListener('click', openModal);
  if (heroTrigger) heroTrigger.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Close on ESC
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Email Copy with Toast
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const email = 'jaoharraihan@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        if (typeof playSuccessChime === 'function') playSuccessChime();
        if (typeof spawnDataParticle === 'function') {
          const rect = copyBtn.getBoundingClientRect();
          spawnDataParticle(rect.left + rect.width / 2, rect.top, 'COPIED! ✓', true);
        }
        if (copyPill) {
          copyPill.textContent = 'COPIED!';
          copyPill.style.backgroundColor = '#38bdf8';
          copyPill.style.color = '#000000';
        }

        if (toast) {
          toast.textContent = `Copied to clipboard: ${email}`;
          toast.classList.add('show');
          setTimeout(() => {
            toast.classList.remove('show');
            if (copyPill) {
              copyPill.textContent = 'COPY';
              copyPill.style.backgroundColor = '#000000';
              copyPill.style.color = '#ffffff';
            }
          }, 2400);
        }
      } catch (err) {
        window.location.href = `mailto:${email}`;
      }
    });
  }
}

// ==========================================================================
// 9. CASE STUDY CATEGORY FILTERS
// ==========================================================================
function initCaseStudyFilters() {
  const filterBtns = document.querySelectorAll('.filter-pill');
  const cards = document.querySelectorAll('.case-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || filter === category) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; }, 10);
        } else {
          card.style.opacity = '0';
          setTimeout(() => { card.style.display = 'none'; }, 200);
        }
      });
    });
  });
}

// ==========================================================================
// 10. CAROUSEL SLIDER CONTROLLER
// ==========================================================================
function initCarouselSlider() {
  const track = document.getElementById('carousel-track');
  const prevBtn = document.getElementById('carousel-prev-btn');
  const nextBtn = document.getElementById('carousel-next-btn');

  if (!track || !prevBtn || !nextBtn) return;

  const scrollStep = 380;

  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -scrollStep, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: scrollStep, behavior: 'smooth' });
  });
}

// ==========================================================================
// 11. REAL-TIME DHAKA CLOCK (BST / UTC+6)
// ==========================================================================
function initLiveClock() {
  const clock = document.getElementById('live-clock');
  if (!clock) return;

  function update() {
    try {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const formatted = new Intl.DateTimeFormat([], options).format(now);
      clock.textContent = `DHAKA // ${formatted} BST · UTC+6`;
    } catch (e) {
      const utc = new Date().getTime() + (new Date().getTimezoneOffset() * 60000);
      const dhaka = new Date(utc + (3600000 * 6));
      const hh = String(dhaka.getHours()).padStart(2, '0');
      const mm = String(dhaka.getMinutes()).padStart(2, '0');
      const ss = String(dhaka.getSeconds()).padStart(2, '0');
      clock.textContent = `DHAKA // ${hh}:${mm}:${ss} BST · UTC+6`;
    }
  }

  update();
  setInterval(update, 1000);
}

// ==========================================================================
// 12. SMOOTH SCROLL FOR NAV LINKS
// ==========================================================================
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ==========================================================================
// 13. KINETIC SCROLL REVEAL OBSERVER
// ==========================================================================
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach((el) => observer.observe(el));
}

// ==========================================================================
// 14. CARD SPOTLIGHT & 3D TILT PHYSICS
// ==========================================================================
function initCardSpotlight() {
  const cards = document.querySelectorAll('.case-card, .flagship-featured-card, .stack-category-card, .phil-card, .current-focus-card');
  
  cards.forEach((card) => {
    if (!card.querySelector('.card-spotlight')) {
      const spotlight = document.createElement('div');
      spotlight.className = 'card-spotlight';
      card.appendChild(spotlight);
    }

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;
      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px) scale(1.012)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ==========================================================================
// 15. MAGNETIC INTERACTIVE DIAL
// ==========================================================================
function initMagneticDial() {
  const dial = document.getElementById('footer-project-dial');
  if (!dial) return;

  dial.addEventListener('mousemove', (e) => {
    const rect = dial.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    dial.style.transform = `translate(${x * 0.25}px, calc(-50% + ${y * 0.25}px)) scale(1.08)`;
  });

  dial.addEventListener('mouseleave', () => {
    dial.style.transform = 'translate(0, -50%)';
  });
}

// ==========================================================================
// 16. GLOBAL WARP COSMOS CANVAS (REACTIVE TO SCROLL VELOCITY)
// ==========================================================================
let globalScrollVelocity = 0;

function initGlobalCosmosCanvas() {
  const canvas = document.getElementById('global-cosmos-canvas') || document.getElementById('hero-cosmos-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let animId = null;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  // Helper to draw brilliant tapered diamond sparkle stars with soft radial bloom
  function drawDiamondSparkle(x, y, r, spikeLen, angle, alpha, color, has8Points) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.globalAlpha = alpha;

    // 1. Soft celestial radial bloom
    const glowRad = spikeLen * 0.65;
    const glowGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, glowRad);
    glowGrad.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
    glowGrad.addColorStop(0.3, color === '#ffffff' ? 'rgba(56, 189, 248, 0.45)' : 'rgba(56, 189, 248, 0.65)');
    glowGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
    ctx.fillStyle = glowGrad;
    ctx.beginPath();
    ctx.arc(0, 0, glowRad, 0, Math.PI * 2);
    ctx.fill();

    // 2. Primary 4-point tapered diamond crystal spikes
    ctx.fillStyle = color === '#ffffff' ? 'rgba(255, 255, 255, 0.95)' : 'rgba(224, 242, 254, 0.95)';
    
    // Vertical diamond spike
    ctx.beginPath();
    ctx.moveTo(0, -spikeLen);
    ctx.lineTo(r * 0.75, 0);
    ctx.lineTo(0, spikeLen);
    ctx.lineTo(-r * 0.75, 0);
    ctx.closePath();
    ctx.fill();

    // Horizontal diamond spike
    ctx.beginPath();
    ctx.moveTo(-spikeLen, 0);
    ctx.lineTo(0, r * 0.75);
    ctx.lineTo(spikeLen, 0);
    ctx.lineTo(-r * 0.75, 0);
    ctx.closePath();
    ctx.fill();

    // 3. Secondary 45-degree diagonal micro-spikes (8-point crystal diamond)
    if (has8Points) {
      const diagLen = spikeLen * 0.46;
      ctx.rotate(Math.PI / 4);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';

      ctx.beginPath();
      ctx.moveTo(0, -diagLen);
      ctx.lineTo(r * 0.45, 0);
      ctx.lineTo(0, diagLen);
      ctx.lineTo(-r * 0.45, 0);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(-diagLen, 0);
      ctx.lineTo(0, r * 0.45);
      ctx.lineTo(diagLen, 0);
      ctx.lineTo(0, -r * 0.45);
      ctx.closePath();
      ctx.fill();
    }

    // 4. Bright pure-white central core
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.85, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  // Generate balanced cosmic stars with 15% Diamond Sparkle Stars
  const starsCount = Math.min(180, Math.max(90, Math.floor(window.innerWidth / 8)));
  const stars = [];
  
  for (let i = 0; i < starsCount; i++) {
    const tier = Math.random();
    let r, baseAlpha, twinkleSpeed, isDiamond, has8Points, baseSpike, rotSpeed, vy, vx;

    if (tier < 0.65) {
      // Tier 1: Micro dust pinpricks
      r = Math.random() * 0.4 + 0.35;
      baseAlpha = Math.random() * 0.35 + 0.15;
      twinkleSpeed = Math.random() * 0.02 + 0.008;
      isDiamond = false;
      has8Points = false;
      baseSpike = 0;
      rotSpeed = 0;
      vy = -(Math.random() * 0.05 + 0.025);
      vx = (Math.random() - 0.5) * 0.015;
    } else if (tier < 0.85) {
      // Tier 2: Shimmering dot stars
      r = Math.random() * 0.4 + 0.75;
      baseAlpha = Math.random() * 0.35 + 0.35;
      twinkleSpeed = Math.random() * 0.028 + 0.014;
      isDiamond = false;
      has8Points = false;
      baseSpike = 0;
      rotSpeed = 0;
      vy = -(Math.random() * 0.04 + 0.02);
      vx = (Math.random() - 0.5) * 0.012;
    } else {
      // Tier 3: DIAMOND SPARKLE STARS
      isDiamond = true;
      has8Points = Math.random() < 0.35;
      r = Math.random() * 0.6 + 1.1;
      baseSpike = has8Points ? (Math.random() * 6 + 12) : (Math.random() * 5 + 8);
      baseAlpha = Math.random() * 0.3 + 0.5;
      twinkleSpeed = Math.random() * 0.022 + 0.012;
      rotSpeed = (Math.random() - 0.5) * 0.005;
      vy = -(Math.random() * 0.03 + 0.01);
      vx = (Math.random() - 0.5) * 0.01;
    }

    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r,
      baseAlpha,
      twinkleSpeed,
      twinkleOffset: Math.random() * Math.PI * 2,
      isDiamond,
      has8Points,
      baseSpike,
      angle: Math.random() * Math.PI,
      rotSpeed,
      vy,
      vx,
      color: Math.random() > 0.35 ? '#ffffff' : (Math.random() > 0.5 ? '#38bdf8' : '#e0f2fe')
    });
  }

  // Shooting stars array
  const meteors = [];

  function spawnMeteor() {
    if (meteors.length < 2 && Math.random() < 0.45) {
      meteors.push({
        x: Math.random() * (width * 0.7),
        y: Math.random() * (height * 0.4),
        len: Math.random() * 65 + 45,
        speed: Math.random() * 5 + 4,
        angle: (Math.PI / 180) * (Math.random() * 15 + 25),
        alpha: 1.0,
        fadeSpeed: Math.random() * 0.015 + 0.012
      });
    }
  }

  setInterval(spawnMeteor, 3800);

  // Mouse repulsion coordinates
  let mouseX = -1000;
  let mouseY = -1000;
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  let tick = 0;
  function loop() {
    tick++;
    ctx.clearRect(0, 0, width, height);

    // Dynamic Warp Streak calculation based on scroll velocity and overclock mode
    const warpFactor = (typeof isOverclocked !== 'undefined' && isOverclocked)
      ? Math.max(14, Math.min(60, 16 + globalScrollVelocity * 0.08))
      : Math.min(28, globalScrollVelocity * 0.035);

    // Draw and drift stars
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];

      // Slow organic celestial drift
      s.y += s.vy;
      s.x += s.vx;
      s.angle += s.rotSpeed;
      if (s.y < -30) {
        s.y = height + 30;
        s.x = Math.random() * width;
      }
      if (s.y > height + 30) {
        s.y = -30;
        s.x = Math.random() * width;
      }
      if (s.x < -30) s.x = width + 30;
      if (s.x > width + 30) s.x = -30;

      const alpha = s.baseAlpha + Math.sin(tick * s.twinkleSpeed + s.twinkleOffset) * 0.32;
      
      // Gentle mouse displacement
      let dx = mouseX - s.x;
      let dy = mouseY - s.y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      let offX = 0;
      let offY = 0;
      let extraSparkle = 0;
      if (dist < 150) {
        const force = (150 - dist) / 150;
        offX = -dx * force * 0.07;
        offY = -dy * force * 0.07;
        extraSparkle = force * 0.2;
      }

      const clampedAlpha = Math.max(0.08, Math.min(1.0, alpha + extraSparkle));

      // If scrolling fast: RENDER KINETIC HYPERSPACE WARP STREAKS
      if (warpFactor > 2.5) {
        ctx.save();
        ctx.strokeStyle = s.color;
        ctx.globalAlpha = clampedAlpha * 0.85;
        ctx.lineWidth = Math.max(1, s.r * 1.3);
        ctx.beginPath();
        ctx.moveTo(s.x + offX, s.y + offY - warpFactor);
        ctx.lineTo(s.x + offX, s.y + offY + warpFactor);
        ctx.stroke();
        ctx.restore();
      } else if (s.isDiamond) {
        // Draw Diamond Sparkle Star
        const pulse = 0.72 + 0.38 * Math.sin(tick * s.twinkleSpeed + s.twinkleOffset);
        const dynamicSpike = s.baseSpike * pulse * (1 + extraSparkle);
        drawDiamondSparkle(s.x + offX, s.y + offY, s.r, dynamicSpike, s.angle, clampedAlpha, s.color, s.has8Points);
      } else {
        // Draw circular star
        ctx.save();
        ctx.globalAlpha = clampedAlpha;
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.x + offX, s.y + offY, s.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Draw meteors
    for (let i = meteors.length - 1; i >= 0; i--) {
      const m = meteors[i];
      m.x += Math.cos(m.angle) * m.speed;
      m.y += Math.sin(m.angle) * m.speed;
      m.alpha -= m.fadeSpeed;

      if (m.alpha <= 0 || m.x > width || m.y > height) {
        meteors.splice(i, 1);
        continue;
      }

      const tailX = m.x - Math.cos(m.angle) * m.len;
      const tailY = m.y - Math.sin(m.angle) * m.len;

      const grad = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
      grad.addColorStop(0, 'rgba(56, 189, 248, 0)');
      grad.addColorStop(0.7, `rgba(56, 189, 248, ${m.alpha * 0.6})`);
      grad.addColorStop(1, `rgba(255, 255, 255, ${m.alpha})`);

      ctx.save();
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(m.x, m.y);
      ctx.stroke();
      ctx.restore();
    }

    animId = requestAnimationFrame(loop);
  }

  animId = requestAnimationFrame(loop);
}

// ==========================================================================
// 16B. SCROLL KINETICS, CYBER TELEMETRY HUD & SVG CIRCUIT TRACER
// ==========================================================================
function initScrollTelemetryAndConduit() {
  const hudSector = document.getElementById('hud-sector-val');
  const hudVelocity = document.getElementById('hud-velocity-val');
  const hudDepth = document.getElementById('hud-depth-val');
  const hudFps = document.getElementById('hud-fps-val');

  const circuitPath = document.getElementById('circuit-wire-path');
  const circuitSpark = document.getElementById('circuit-spark');

  let pathLength = 1000;
  if (circuitPath) {
    try {
      pathLength = circuitPath.getTotalLength();
      circuitPath.style.strokeDasharray = `${pathLength}`;
      circuitPath.style.strokeDashoffset = `${pathLength}`;
    } catch (e) {}
  }

  // Smooth scroll velocity tracking
  let lastScrollTop = window.scrollY || document.documentElement.scrollTop;
  let lastScrollTime = performance.now();
  let smoothVelocity = 0;

  // FPS Counter tracking
  let frameCount = 0;
  let lastFpsTime = performance.now();
  let currentFps = 60;

  function updateTelemetry() {
    const now = performance.now();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollDepthPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    // Calculate instantaneous velocity
    const dt = Math.max(1, now - lastScrollTime);
    const dy = Math.abs(scrollTop - lastScrollTop);
    const instantVelocity = (dy / dt) * 1000; // px/sec

    // Lerp velocity decay
    smoothVelocity += (instantVelocity - smoothVelocity) * 0.25;
    if (smoothVelocity < 1) smoothVelocity = 0;
    globalScrollVelocity = smoothVelocity;

    lastScrollTop = scrollTop;
    lastScrollTime = now;

    // Update Telemetry HUD
    if (hudVelocity) {
      hudVelocity.textContent = `${Math.round(smoothVelocity)} PX/S`;
    }
    if (hudDepth) {
      hudDepth.textContent = `${Math.min(100, Math.max(0, Math.round(scrollDepthPercent)))}%`;
    }

    // Determine Active Sector
    if (hudSector) {
      const sections = [
        { id: 'hero', name: '01_ORBIT' },
        { id: 'intro', name: '02_KERNEL' },
        { id: 'work', name: '03_CUTBOOK_3D' },
        { id: 'projects', name: '04_PROD_LAB' },
        { id: 'stack', name: '05_SYS_STACK' },
        { id: 'about', name: '06_ORIGIN' }
      ];

      let currentSec = '01_ORBIT';
      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= window.innerHeight * 0.45) {
            currentSec = sec.name;
          }
        }
      });
      hudSector.textContent = currentSec;
    }

    // Trace SVG Laser Circuit Conduit
    if (circuitPath && pathLength) {
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      const offset = pathLength * (1 - Math.min(1, Math.max(0, progress)));
      circuitPath.style.strokeDashoffset = `${offset}`;

      if (circuitSpark) {
        try {
          const point = circuitPath.getPointAtLength(pathLength * Math.min(1, Math.max(0, progress)));
          circuitSpark.setAttribute('cx', point.x);
          circuitSpark.setAttribute('cy', point.y);
        } catch (e) {}
      }
    }

    // Measure FPS
    frameCount++;
    if (now - lastFpsTime >= 500) {
      currentFps = Math.round((frameCount * 1000) / (now - lastFpsTime));
      frameCount = 0;
      lastFpsTime = now;
      if (hudFps) {
        hudFps.textContent = `${Math.min(60, currentFps)} FPS`;
      }
    }

    requestAnimationFrame(updateTelemetry);
  }

  requestAnimationFrame(updateTelemetry);
}

// ==========================================================================
// 16C. CUTBOOK 3D EXPLODED MOBILE STAGE CONTROLLER
// ==========================================================================
function initCutBookExplosion() {
  const track = document.getElementById('cutbook-scroll-track');
  const rig = document.getElementById('phone-3d-rig');
  const layerGlass = document.getElementById('layer-glass');
  const layerUi = document.getElementById('layer-ui');
  const layerLogic = document.getElementById('layer-logic');
  const layerDb = document.getElementById('layer-db');
  const stageCounter = document.getElementById('cutbook-stage-counter');
  const instructionText = document.getElementById('scroll-instruction-text');
  const stepCards = document.querySelectorAll('.cutbook-step-card');
  const connectorLines = document.querySelectorAll('.layer-connector-line');
  const layerTags = document.querySelectorAll('.layer-tag-label');

  if (!track || !rig) return;

  function renderExplosion() {
    const trackRect = track.getBoundingClientRect();
    const scrollDistance = track.offsetHeight - window.innerHeight;

    if (scrollDistance <= 0) {
      requestAnimationFrame(renderExplosion);
      return;
    }

    // Normalized progress [0, 1] through the 350vh sticky runway
    const progress = Math.min(1, Math.max(0, -trackRect.top / scrollDistance));

    // Dynamic Rig Base Tilt reacting to progress
    const rigRotateY = -22 + progress * 8; // -22deg to -14deg
    const rigRotateX = 14 - progress * 4;  // 14deg to 10deg
    rig.style.transform = `rotateY(${rigRotateY.toFixed(2)}deg) rotateX(${rigRotateX.toFixed(2)}deg) rotateZ(-2deg)`;

    // Calculate Layer Separations (Explosion peaks in the middle: 0.25 to 0.75)
    // Bell curve factor for the explosion expansion
    let explodeFactor = 0;
    if (progress < 0.2) {
      explodeFactor = progress / 0.2 * 0.15;
    } else if (progress < 0.7) {
      // Full expansion
      explodeFactor = 0.15 + ((progress - 0.2) / 0.5) * 0.85;
    } else {
      // Re-assembly convergence into unified mobile
      explodeFactor = 1 - ((progress - 0.7) / 0.3);
    }

    explodeFactor = Math.max(0, Math.min(1, explodeFactor));

    // Layer 1: Front Gorilla Glass (Forward + Up)
    const glassZ = explodeFactor * 220;
    const glassY = explodeFactor * -18;
    if (layerGlass) {
      layerGlass.style.transform = `translateZ(${glassZ.toFixed(1)}px) translateY(${glassY.toFixed(1)}px)`;
    }

    // Layer 2: React Native UI Screen (Mid-Front)
    const uiZ = explodeFactor * 65;
    if (layerUi) {
      layerUi.style.transform = `translateZ(${uiZ.toFixed(1)}px)`;
    }

    // Layer 3: Business Logic Wireframe (Mid-Back + Down)
    const logicZ = explodeFactor * -85;
    const logicY = explodeFactor * 16;
    if (layerLogic) {
      layerLogic.style.transform = `translateZ(${logicZ.toFixed(1)}px) translateY(${logicY.toFixed(1)}px)`;
    }

    // Layer 4: Offline SQLite & Cloud Sync (Deep Back + Down)
    const dbZ = explodeFactor * -220;
    const dbY = explodeFactor * 36;
    if (layerDb) {
      layerDb.style.transform = `translateZ(${dbZ.toFixed(1)}px) translateY(${dbY.toFixed(1)}px)`;
    }

    // Toggle Connectors & Labels visibility when exploded
    const showExplodedGuides = explodeFactor > 0.35;
    connectorLines.forEach((line) => {
      line.style.opacity = showExplodedGuides ? `${(explodeFactor - 0.35) * 1.5}` : '0';
    });
    layerTags.forEach((tag) => {
      tag.style.opacity = showExplodedGuides ? '1' : '0';
    });

    // Determine Active Stage Step [1 to 4]
    let currentStep = 1;
    if (progress < 0.25) {
      currentStep = 1;
      if (stageCounter) stageCounter.textContent = 'STAGE 01 / 04';
      if (instructionText) instructionText.textContent = 'Scroll to explore CutBook architecture';
    } else if (progress < 0.52) {
      currentStep = 2;
      if (stageCounter) stageCounter.textContent = 'STAGE 02 / 04';
      if (instructionText) instructionText.textContent = 'Stage 02: Commission & Daily Work Entry';
    } else if (progress < 0.78) {
      currentStep = 3;
      if (stageCounter) stageCounter.textContent = 'STAGE 03 / 04';
      if (instructionText) instructionText.textContent = 'Stage 03: Device-Local Storage & Multi-Language UX';
    } else {
      currentStep = 4;
      if (stageCounter) stageCounter.textContent = 'STAGE 04 / 04';
      if (instructionText) instructionText.textContent = 'Stage 04: Testing Workflows with Real Salon Owners';
    }

    stepCards.forEach((card) => {
      const step = parseInt(card.getAttribute('data-step'), 10);
      if (step === currentStep) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });

    // Track step transitions for audio whoosh
    if (typeof lastExplosionStep !== 'undefined' && lastExplosionStep !== currentStep) {
      if (typeof playWhooshSound === 'function') playWhooshSound();
    }
    lastExplosionStep = currentStep;

    requestAnimationFrame(renderExplosion);
  }

  requestAnimationFrame(renderExplosion);
}

// ==========================================================================
// 16D. INTERACTIVE CUTBOOK PHONE SIMULATOR (BENGALI/ENGLISH + TAP SERVICE)
// ==========================================================================
function initCutBookSimulator() {
  const langToggle = document.getElementById('sim-lang-toggle');
  const langBn = document.getElementById('lang-bn');
  const langEn = document.getElementById('lang-en');
  const revLabel = document.getElementById('sim-rev-label');
  const revVal = document.getElementById('sim-revenue-val');
  const staffTitle = document.getElementById('sim-staff-title');
  const quickTitle = document.getElementById('sim-quick-title');

  const btnCut = document.getElementById('sim-btn-cut');
  const btnBeard = document.getElementById('sim-btn-beard');
  const btnSpa = document.getElementById('sim-btn-spa');

  let isBengali = false;
  let revenue = 24850;

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      isBengali = !isBengali;
      if (typeof playCyberClick === 'function') playCyberClick();
      if (isBengali) {
        langBn.classList.add('active');
        langEn.classList.remove('active');
        if (revLabel) revLabel.textContent = 'আজকের মোট আয়';
        if (staffTitle) staffTitle.textContent = 'অন-ডিউটি হেয়ার স্টাইলিস্ট';
        if (quickTitle) quickTitle.textContent = 'দ্রুত সার্ভিস এন্ট্রি';
      } else {
        langEn.classList.add('active');
        langBn.classList.remove('active');
        if (revLabel) revLabel.textContent = "Today's Revenue";
        if (staffTitle) staffTitle.textContent = 'Active Stylists & Commission';
        if (quickTitle) quickTitle.textContent = 'Tap to Register Service';
      }
    });
  }

  function addRevenue(amount, label, e) {
    revenue += amount;
    if (revVal) {
      revVal.textContent = revenue.toLocaleString();
      revVal.style.color = '#38bdf8';
      setTimeout(() => {
        revVal.style.color = '#ffffff';
      }, 350);
    }
    if (e && typeof spawnDataParticle === 'function') {
      spawnDataParticle(e.clientX, e.clientY, `+৳${amount} ${label}`, false);
    }
    if (typeof playCashChime === 'function') {
      playCashChime();
    }
  }

  if (btnCut) btnCut.addEventListener('click', (e) => addRevenue(250, 'CUT', e));
  if (btnBeard) btnBeard.addEventListener('click', (e) => addRevenue(180, 'BEARD', e));
  if (btnSpa) btnSpa.addEventListener('click', (e) => addRevenue(500, 'SPA', e));
}

// ==========================================================================
// 16E. SCROLL-TRIGGERED CIPHER TEXT DECODER
// ==========================================================================
function initScrollCipherDecoders() {
  const cipherElements = document.querySelectorAll('.scramble-heading, .scramble-on-view');
  if (!cipherElements.length) return;

  const glyphs = '01ABCDEFGHJKLMNPQRSTUVWXYZ#$%&';

  function scrambleText(element) {
    if (element._isScrambling) return;
    element._isScrambling = true;

    const original = element.getAttribute('data-original-text') || element.textContent;
    const duration = 550;
    const interval = 30;
    const totalFrames = Math.floor(duration / interval);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const lockedChars = Math.floor(progress * original.length);

      let result = '';
      for (let i = 0; i < original.length; i++) {
        if (original[i] === ' ') {
          result += ' ';
        } else if (i < lockedChars) {
          result += original[i];
        } else {
          result += glyphs[Math.floor(Math.random() * glyphs.length)];
        }
      }

      element.textContent = result;

      if (frame >= totalFrames) {
        clearInterval(timer);
        element.textContent = original;
        element._isScrambling = false;
      }
    }, interval);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        scrambleText(entry.target);
      }
    });
  }, { threshold: 0.2 });

  cipherElements.forEach((el) => {
    observer.observe(el);
    el.addEventListener('mouseenter', () => scrambleText(el));
  });
}

// ==========================================================================
// 17. HERO 3D MOUSE PARALLAX TILT
// ==========================================================================
function initHeroParallax() {
  const heroStage = document.getElementById('hero');
  const visualCenter = document.getElementById('hero-visual-center');
  const orbitalRing = document.getElementById('orbital-ring');
  const portraitImg = document.getElementById('hero-portrait-img');

  if (!heroStage || !visualCenter) return;

  let mouseTargetX = 0;
  let mouseTargetY = 0;
  let currentX = 0;
  let currentY = 0;
  let isHovered = false;

  heroStage.addEventListener('mousemove', (e) => {
    isHovered = true;
    const rect = heroStage.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Normalized [-1, 1]
    mouseTargetX = (e.clientX - centerX) / (rect.width / 2);
    mouseTargetY = (e.clientY - centerY) / (rect.height / 2);
  });

  heroStage.addEventListener('mouseleave', () => {
    isHovered = false;
    mouseTargetX = 0;
    mouseTargetY = 0;
  });

  function renderParallax() {
    // Smooth lerp damping
    currentX += (mouseTargetX - currentX) * 0.08;
    currentY += (mouseTargetY - currentY) * 0.08;

    const rotY = currentX * 5; // deg
    const rotX = -currentY * 5; // deg

    visualCenter.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
    
    if (orbitalRing) {
      orbitalRing.style.transform = `translate3d(${-currentX * 10}px, ${-currentY * 10}px, 20px)`;
    }

    if (portraitImg) {
      portraitImg.style.transform = `scale(1) translate3d(${currentX * 6}px, ${currentY * 6}px, 0)`;
    }

    requestAnimationFrame(renderParallax);
  }

  requestAnimationFrame(renderParallax);
}

// ==========================================================================
// 18. ORBIT INTERACTIVITY & PAUSE ON HOVER
// ==========================================================================
function initOrbitInteractivity() {
  const track = document.getElementById('orbit-nodes-track');
  const nodes = document.querySelectorAll('.orbit-node');

  if (!track || !nodes.length) return;

  nodes.forEach((node) => {
    node.addEventListener('mouseenter', () => {
      track.classList.add('is-paused');
    });

    node.addEventListener('mouseleave', () => {
      track.classList.remove('is-paused');
    });

    node.addEventListener('focus', () => {
      track.classList.add('is-paused');
    });

    node.addEventListener('blur', () => {
      track.classList.remove('is-paused');
    });

    node.addEventListener('click', (e) => {
      track.classList.toggle('is-paused');
      playCyberClick();
    });
  });
}

// ==========================================================================
// 19. SCROLL PROGRESS BAR IN FLOATING CAPSULE NAV
// ==========================================================================
function initScrollProgressBar() {
  const fill = document.getElementById('nav-progress-fill');
  if (!fill) return;

  function updateProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    fill.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

// ==========================================================================
// 20. MAGNETIC BUTTON INTERACTION
// ==========================================================================
function initMagneticButtons() {
  const btns = document.querySelectorAll('.magnetic-btn');

  btns.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
    });
  });
}

// ==========================================================================
// 21. PROCEDURAL WEB AUDIO SYNTHESIZER ENGINE
// ==========================================================================
let audioCtx = null;
let soundEnabled = true; // Enabled by default on user interaction

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playCyberClick() {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(900, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1400, ctx.currentTime + 0.035);
    gain.gain.setValueAtTime(0.06, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.035);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.035);
  } catch (e) {}
}

function playCashChime() {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const now = ctx.currentTime;
    [587.33, 880.00].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + i * 0.06);
      gain.gain.setValueAtTime(0.1, now + i * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.22);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + i * 0.06);
      osc.stop(now + i * 0.06 + 0.22);
    });
  } catch (e) {}
}

function playWhooshSound() {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(130, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(55, ctx.currentTime + 0.22);
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.22);
  } catch (e) {}
}

function playSuccessChime() {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const now = ctx.currentTime;
    [523.25, 659.25, 783.99].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.07);
      gain.gain.setValueAtTime(0.09, now + i * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.07 + 0.26);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + i * 0.07);
      osc.stop(now + i * 0.07 + 0.26);
    });
  } catch (e) {}
}

function toggleAudioEngine() {
  soundEnabled = !soundEnabled;
  const soundStatus = document.getElementById('sound-status-val');
  const soundBtn = document.getElementById('hud-sound-toggle');
  const soundIcon = soundBtn ? soundBtn.querySelector('.sound-icon') : null;
  const heroAudio = document.getElementById('hero-intro-audio');
  const chaloAudio = document.getElementById('scroll-chalo-audio');
  const skillsGutGenugAudio = document.getElementById('skills-gut-genug-audio');
  const depressionAudio = document.getElementById('approach-depression-audio');
  const cutbookHappyAudio = document.getElementById('cutbook-happy-audio');
  const projectsMazaAudio = document.getElementById('projects-maza-audio');
  const stackPiratesAudio = document.getElementById('stack-pirates-audio');
  const aboutPorichoyAudio = document.getElementById('about-porichoy-audio');
  const eduDamageAudio = document.getElementById('edu-damage-audio');
  const footerKhatamAudio = document.getElementById('footer-khatam-audio');
  const footerBosunAudio = document.getElementById('footer-bosun-audio');
  const footerKhelaAudio = document.getElementById('footer-khela-audio');
  const footerMessiAudio = document.getElementById('footer-messi-audio');
  const footerAdeleAudio = document.getElementById('footer-adele-audio');
  const footerModiAudio = document.getElementById('footer-modi-audio');
  const footerWahModiAudio = document.getElementById('footer-wahmodi-audio');
  const footerRonaBandAudio = document.getElementById('footer-ronaband-audio');
  const footerTrumpAudio = document.getElementById('footer-trump-audio');
  const footerBnpAudio = document.getElementById('footer-bnp-audio');
  const footerPutinAudio = document.getElementById('footer-putin-audio');
  const footerChinaAudio = document.getElementById('footer-china-audio');
  const footerDogsCatsAudio = document.getElementById('footer-dogscats-audio');
  const footerBoboAudio = document.getElementById('footer-bobo-audio');
  const footerRagKorlaAudio = document.getElementById('footer-ragkorla-audio');
  const footerMasudAudio = document.getElementById('footer-masud-audio');
  const footerGxPanelAudio = document.getElementById('footer-gxpanel-audio');

  if (soundStatus) {
    soundStatus.textContent = soundEnabled ? 'FX: ON' : 'FX: OFF';
  }
  if (soundIcon) {
    soundIcon.textContent = soundEnabled ? '🔊' : '🔇';
    if (soundEnabled) {
      soundIcon.classList.add('is-active');
      playSuccessChime();
    } else {
      soundIcon.classList.remove('is-active');
      if (heroAudio && !heroAudio.paused) {
        heroAudio.pause();
      }
      if (chaloAudio && !chaloAudio.paused) {
        chaloAudio.pause();
      }
      if (skillsGutGenugAudio && !skillsGutGenugAudio.paused) {
        skillsGutGenugAudio.pause();
      }
      if (depressionAudio && !depressionAudio.paused) {
        depressionAudio.pause();
      }
      if (cutbookHappyAudio && !cutbookHappyAudio.paused) {
        cutbookHappyAudio.pause();
      }
      if (projectsMazaAudio && !projectsMazaAudio.paused) {
        projectsMazaAudio.pause();
      }
      if (stackPiratesAudio && !stackPiratesAudio.paused) {
        stackPiratesAudio.pause();
      }
      if (aboutPorichoyAudio && !aboutPorichoyAudio.paused) {
        aboutPorichoyAudio.pause();
      }
      if (eduDamageAudio && !eduDamageAudio.paused) {
        eduDamageAudio.pause();
      }
      if (footerKhatamAudio && !footerKhatamAudio.paused) {
        footerKhatamAudio.pause();
      }
      if (footerBosunAudio && !footerBosunAudio.paused) {
        footerBosunAudio.pause();
      }
      if (footerKhelaAudio && !footerKhelaAudio.paused) {
        footerKhelaAudio.pause();
      }
      if (footerMessiAudio && !footerMessiAudio.paused) {
        footerMessiAudio.pause();
      }
      if (footerAdeleAudio && !footerAdeleAudio.paused) {
        footerAdeleAudio.pause();
      }
      if (footerModiAudio && !footerModiAudio.paused) {
        footerModiAudio.pause();
      }
      if (footerWahModiAudio && !footerWahModiAudio.paused) {
        footerWahModiAudio.pause();
      }
      if (footerRonaBandAudio && !footerRonaBandAudio.paused) {
        footerRonaBandAudio.pause();
      }
      if (footerTrumpAudio && !footerTrumpAudio.paused) {
        footerTrumpAudio.pause();
      }
      if (footerBnpAudio && !footerBnpAudio.paused) {
        footerBnpAudio.pause();
      }
      if (footerPutinAudio && !footerPutinAudio.paused) {
        footerPutinAudio.pause();
      }
      if (footerChinaAudio && !footerChinaAudio.paused) {
        footerChinaAudio.pause();
      }
      if (footerDogsCatsAudio && !footerDogsCatsAudio.paused) {
        footerDogsCatsAudio.pause();
      }
      if (footerBoboAudio && !footerBoboAudio.paused) {
        footerBoboAudio.pause();
      }
      if (footerRagKorlaAudio && !footerRagKorlaAudio.paused) {
        footerRagKorlaAudio.pause();
      }
      if (footerMasudAudio && !footerMasudAudio.paused) {
        footerMasudAudio.pause();
      }
      if (footerGxPanelAudio && !footerGxPanelAudio.paused) {
        footerGxPanelAudio.pause();
      }
    }
  }
  return soundEnabled;
}

function initWebAudioSynthesizer() {
  const soundBtn = document.getElementById('hud-sound-toggle');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      getAudioContext();
      toggleAudioEngine();
    });
  }

  // Resume audio context on first user interaction
  const resumeEvents = ['click', 'keydown', 'touchstart'];
  const unlockAudio = () => {
    getAudioContext();
    resumeEvents.forEach((ev) => window.removeEventListener(ev, unlockAudio));
  };
  resumeEvents.forEach((ev) => window.addEventListener(ev, unlockAudio, { passive: true }));
}

// ==========================================================================
// 22. FLOATING COIN & DATA PARTICLE FOUNTAIN
// ==========================================================================
function spawnDataParticle(x, y, text, isCyan = false) {
  if (!x || !y) return;
  const badge = document.createElement('div');
  badge.className = `floating-data-badge ${isCyan ? 'cyan' : ''}`;
  badge.textContent = text;
  badge.style.left = `${x}px`;
  badge.style.top = `${y}px`;
  document.body.appendChild(badge);
  setTimeout(() => {
    badge.remove();
  }, 880);
}

// ==========================================================================
// 23. PROJECT CARD MINI-SIMULATORS & VELOCITY MARQUEE CONTROLLER
// ==========================================================================
function initProjectMiniSimulators() {
  // QuickTrack Mini-App Interactivity
  const quickVal = document.getElementById('quicktrack-val');
  const btnCoffee = document.getElementById('tap-coffee');
  const btnLunch = document.getElementById('tap-lunch');
  const btnRide = document.getElementById('tap-ride');

  let currentExpense = 740;

  function addExpense(amt, label, e) {
    currentExpense += amt;
    if (quickVal) {
      quickVal.textContent = currentExpense.toLocaleString();
      quickVal.style.color = '#10b981';
      quickVal.style.transform = 'scale(1.12)';
      setTimeout(() => {
        quickVal.style.color = '#ffffff';
        quickVal.style.transform = 'scale(1)';
      }, 250);
    }
    if (e) {
      spawnDataParticle(e.clientX, e.clientY, `+৳${amt} ${label}`, false);
    }
    playCashChime();
  }

  if (btnCoffee) btnCoffee.addEventListener('click', (e) => addExpense(60, 'TEA', e));
  if (btnLunch) btnLunch.addEventListener('click', (e) => addExpense(220, 'MEAL', e));
  if (btnRide) btnRide.addEventListener('click', (e) => addExpense(150, 'METRO', e));

  // Native UI Kit Spring Switch Interactivity
  const springToggle = document.getElementById('interactive-spring-toggle');
  const springStatus = document.getElementById('spring-status-text');

  if (springToggle) {
    springToggle.addEventListener('click', () => {
      springToggle.classList.toggle('active');
      const isActive = springToggle.classList.contains('active');
      playCyberClick();
      if (springStatus) {
        springStatus.textContent = isActive ? 'STATE: BOUNCED (ACTIVE)' : 'STATE: SPRING (IDLE)';
        springStatus.style.color = isActive ? '#fb7185' : 'var(--text-dim)';
      }
    });
  }

  // Velocity-responsive Marquee Tracks
  const track1 = document.getElementById('marquee-track-1');
  const track2 = document.getElementById('marquee-track-2');

  window.addEventListener('scroll', () => {
    const boost = Math.min(3.5, 1 + globalScrollVelocity * 0.004);
    if (track1) track1.style.animationDuration = `${Math.max(9, 28 / boost)}s`;
    if (track2) track2.style.animationDuration = `${Math.max(9, 28 / boost)}s`;
  }, { passive: true });
}

// ==========================================================================
// 24. LUMINOUS MAGNETIC CURSOR FOLLOWER WITH LERP PHYSICS
// ==========================================================================
function initMagneticCursor() {
  const cursorFollower = document.getElementById('magnetic-cursor');
  if (!cursorFollower) return;

  const dot = cursorFollower.querySelector('.cursor-dot');
  const ring = cursorFollower.querySelector('.cursor-ring');

  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;
  let dotX = -100;
  let dotY = -100;
  let isMoving = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isMoving) {
      ringX = dotX = mouseX;
      ringY = dotY = mouseY;
      isMoving = true;
      cursorFollower.style.opacity = '1';
    }
  });

  window.addEventListener('mouseleave', () => {
    cursorFollower.style.opacity = '0';
  });

  window.addEventListener('mouseenter', () => {
    cursorFollower.style.opacity = '1';
  });

  // Shockwave ring on click
  window.addEventListener('click', (e) => {
    const wave = document.createElement('div');
    wave.className = 'cursor-shockwave';
    wave.style.left = `${e.clientX}px`;
    wave.style.top = `${e.clientY}px`;
    document.body.appendChild(wave);
    setTimeout(() => wave.remove(), 550);
  });

  // Interactive element hover detection
  const interactiveTargets = 'a, button, input, .magnetic-btn, .tech-chip, .case-card, .palette-item, .cutbook-step-card, .interactive-spring-toggle, .sim-service-btn, .tap-item, .bench-stat-box';
  
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveTargets)) {
      cursorFollower.classList.add('is-hovering');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveTargets)) {
      cursorFollower.classList.remove('is-hovering');
    }
  });

  function renderCursor() {
    dotX += (mouseX - dotX) * 0.45;
    dotY += (mouseY - dotY) * 0.45;

    ringX += (mouseX - ringX) * 0.16;
    ringY += (mouseY - ringY) * 0.16;

    if (dot) dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
    if (ring) ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

    requestAnimationFrame(renderCursor);
  }

  requestAnimationFrame(renderCursor);
}

// ==========================================================================
// 25. COMMAND PALETTE MODAL & RECRUITER FAST TERMINAL
// ==========================================================================
function initCommandPalette() {
  const triggerBtn = document.getElementById('floating-cmd-btn');
  const modal = document.getElementById('command-palette-modal');
  const input = document.getElementById('palette-search-input');
  const resultsContainer = document.getElementById('palette-results');
  const items = document.querySelectorAll('.palette-item');

  if (!modal || !triggerBtn) return;

  function openPalette() {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    if (input) {
      input.value = '';
      input.focus();
    }
    filterItems('');
    playCyberClick();
  }

  function closePalette() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
  }

  triggerBtn.addEventListener('click', openPalette);

  // Keyboard shortcut: Cmd+K / Ctrl+K
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (modal.classList.contains('is-open')) {
        closePalette();
      } else {
        openPalette();
      }
    } else if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closePalette();
    }
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closePalette();
  });

  // Filter items in real time
  function filterItems(query) {
    const q = query.toLowerCase().trim();
    items.forEach((item) => {
      const text = item.textContent.toLowerCase();
      if (!q || text.includes(q)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  }

  if (input) {
    input.addEventListener('input', (e) => {
      filterItems(e.target.value);
    });
  }

  // Execute action on click
  items.forEach((item) => {
    item.addEventListener('click', () => {
      const action = item.getAttribute('data-action');
      const target = item.getAttribute('data-target');

      closePalette();

      if (action === 'goto' && target) {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        playCyberClick();
      } else if (action === 'copy-email') {
        const email = 'jaoharraihan@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
          playSuccessChime();
          const toast = document.getElementById('toast');
          if (toast) {
            toast.textContent = `Copied to clipboard: ${email}`;
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 2400);
          }
        });
      } else if (action === 'open-contact') {
        const modalEl = document.getElementById('contact-modal');
        if (modalEl) {
          modalEl.classList.add('is-open');
          modalEl.setAttribute('aria-hidden', 'false');
          playCyberClick();
        }
      } else if (action === 'toggle-audio') {
        toggleAudioEngine();
      } else if (action === 'toggle-overclock') {
        const btn = document.getElementById('hud-overclock-toggle');
        if (btn) btn.click();
      }
    });
  });
}

// ==========================================================================
// 26. INTERACTIVE STACK BENCHMARK TELEMETRY INSPECTOR
// ==========================================================================
function initStackBenchmarkInspector() {
  const activeTech = document.getElementById('bench-active-tech');
  const renderVal = document.getElementById('bench-render-val');
  const renderDesc = document.getElementById('bench-render-desc');
  const storageVal = document.getElementById('bench-storage-val');
  const storageDesc = document.getElementById('bench-storage-desc');
  const bundleVal = document.getElementById('bench-bundle-val');
  const bundleDesc = document.getElementById('bench-bundle-desc');
  const prodVal = document.getElementById('bench-prod-val');
  const prodDesc = document.getElementById('bench-prod-desc');

  const chips = document.querySelectorAll('.stack-category-card .tech-chip');
  if (!chips.length || !activeTech) return;

  const telemetryData = {
    'react native': {
      tech: 'React Native (Cross-Platform Mobile)',
      renderVal: 'Native UI Components',
      renderDesc: 'Direct bridge to native iOS and Android primitives',
      storageVal: 'Device-Local Storage',
      storageDesc: 'AsyncStorage persistence for uninterrupted offline flow',
      bundleVal: 'Hermes Engine',
      bundleDesc: 'Bytecode precompilation for fast mobile startup',
      prodVal: 'Commercial Work',
      prodDesc: 'Applied across Agent GoGo, SalesPype & Akij Dealer Khata'
    },
    'javascript (es6+)': {
      tech: 'Modern JavaScript (ES6+)',
      renderVal: 'Async / Await',
      renderDesc: 'Non-blocking I/O for smooth screen transitions',
      storageVal: 'JSON Serialization',
      storageDesc: 'Clean state modeling for local records and preferences',
      bundleVal: 'Modular Code',
      bundleDesc: 'Clean component structure and separation of concerns',
      prodVal: 'Daily Stack',
      prodDesc: 'Core language across all professional mobile projects'
    },
    'typescript': {
      tech: 'TypeScript (Type-Safe Engineering)',
      renderVal: 'Interface Contracts',
      renderDesc: 'Clear type definitions for API responses and component props',
      storageVal: 'Schema Typing',
      storageDesc: 'Type-safe local state schemas and data objects',
      bundleVal: 'Zero Runtime Overhead',
      bundleDesc: 'Erased during compilation, leaving zero runtime burden',
      prodVal: 'CutBook POS',
      prodDesc: 'Clean interface definitions across salon workflows'
    },
    'rest apis': {
      tech: 'RESTful API Integration',
      renderVal: 'Defensive Handling',
      renderDesc: 'Status checks, timeout handling, and loading state feedback',
      storageVal: 'Token Persistence',
      storageDesc: 'Secure session and token storage for authenticated requests',
      bundleVal: 'Axios & Fetch',
      bundleDesc: 'Modular service layers and reusable API clients',
      prodVal: 'OrangeToolz & iBOS',
      prodDesc: 'Connected mobile clients to production enterprise backends'
    },
    'redux & state': {
      tech: 'Redux & State Architecture',
      renderVal: 'Predictable State',
      renderDesc: 'Centralized state transitions with clear action flows',
      storageVal: 'State Caching',
      storageDesc: 'Hydrating client stores cleanly on app launch',
      bundleVal: 'Clean Slices',
      bundleDesc: 'Modular reducers matching distinct app domains',
      prodVal: 'Team Codebases',
      prodDesc: 'Used in multi-screen business apps with complex state'
    },
    'react navigation': {
      tech: 'React Navigation',
      renderVal: 'Native Stack',
      renderDesc: 'Smooth screen transitions and hardware back button handling',
      storageVal: 'Navigation State',
      storageDesc: 'Deep linking and state restoration for mobile screens',
      bundleVal: 'Modular Routers',
      bundleDesc: 'Tab and stack navigators for clean app hierarchy',
      prodVal: 'All Mobile Projects',
      prodDesc: 'Standard navigation pattern across all mobile applications'
    },
    'expo': {
      tech: 'Expo Tooling & Ecosystem',
      renderVal: 'Fast Iteration',
      renderDesc: 'Rapid mobile testing and developer feedback loops',
      storageVal: 'File System & Storage',
      storageDesc: 'Integrated native modules for device storage and permissions',
      bundleVal: 'Config Plugins',
      bundleDesc: 'Managed native dependencies with clear configuration',
      prodVal: 'Product Prototyping',
      prodDesc: 'Used for rapid prototyping and personal app builds'
    },
    'reanimated 3': {
      tech: 'React Native Reanimated 3',
      renderVal: 'UI Thread Worklets',
      renderDesc: 'Fluid animations running directly on the native thread',
      storageVal: 'Shared Values',
      storageDesc: 'Reactive values driving immediate gestural feedback',
      bundleVal: 'Declarative Syntax',
      bundleDesc: 'Spring physics and timing curves without JS thread bottlenecks',
      prodVal: 'CutBook UI',
      prodDesc: 'Powers smooth drawer transitions and touch interactions'
    },
    'gesture handler': {
      tech: 'React Native Gesture Handler',
      renderVal: 'Native Pan & Tap',
      renderDesc: 'Touch recognition handled at native OS level',
      storageVal: 'Gesture State',
      storageDesc: 'Fine-grained touch velocity and coordinate tracking',
      bundleVal: 'Fluid Response',
      bundleDesc: 'Direct response to salon operator swipes and quick taps',
      prodVal: 'CutBook POS',
      prodDesc: 'Used in interactive service cards and swipe-to-delete flows'
    },
    'bilingual ui (bn/en)': {
      tech: 'Bilingual Localization (Bangla & English)',
      renderVal: 'Dynamic Strings',
      renderDesc: 'Instant language toggle without app restart',
      storageVal: 'Locale Preference',
      storageDesc: 'Persisting user language choice in AsyncStorage',
      bundleVal: 'Clean Dictionaries',
      bundleDesc: 'Structured key-value translation maps',
      prodVal: 'CutBook POS',
      prodDesc: 'Tested with salon operators who prefer Bangla terminology'
    },
    'asyncstorage': {
      tech: 'AsyncStorage (Local Persistence)',
      renderVal: 'Asynchronous I/O',
      renderDesc: 'Simple key-value device storage for unauthenticated offline states',
      storageVal: 'Local First',
      storageDesc: 'Stores staff commissions, services, and receipts on-device',
      bundleVal: 'Lightweight',
      bundleDesc: 'Zero backend required to run basic daily operations',
      prodVal: 'CutBook Pilot',
      prodDesc: 'Ensures zero data loss during unstable mobile network conditions'
    },
    'sqlite (exploration)': {
      tech: 'SQLite (Local Database Exploration)',
      renderVal: 'Structured Queries',
      renderDesc: 'Relational data modeling for services, staff, and transactions',
      storageVal: 'ACID Transactions',
      storageDesc: 'Local table schemas for multi-salon record isolation',
      bundleVal: 'Native C-Engine',
      bundleDesc: 'Embedded SQL engine for high data integrity',
      prodVal: 'CutBook Architecture',
      prodDesc: 'Exploring as an upgrade path for complex offline reporting'
    },
    'git & github': {
      tech: 'Git & GitHub Collaboration',
      renderVal: 'Feature Branches',
      renderDesc: 'Clean pull request workflows and atomic commits',
      storageVal: 'Version History',
      storageDesc: 'Traceable commit trees and release tags',
      bundleVal: 'Git Best Practices',
      bundleDesc: 'Conflict resolution and rebasing within team environments',
      prodVal: 'OrangeToolz & iBOS',
      prodDesc: 'Daily collaboration tool in professional software teams'
    },
    'postman': {
      tech: 'Postman API Debugging',
      renderVal: 'Endpoint Testing',
      renderDesc: 'Validating request headers, status codes, and payloads',
      storageVal: 'Environment Variables',
      storageDesc: 'Managing staging and production API configurations',
      bundleVal: 'Documented Collections',
      bundleDesc: 'Testing authentication tokens before mobile integration',
      prodVal: 'Mobile Engineering',
      prodDesc: 'Used to verify backend contracts before writing frontend code'
    },
    'android studio': {
      tech: 'Android Studio & Logcat',
      renderVal: 'Native Diagnostics',
      renderDesc: 'Debugging Gradle builds, ADB device links, and emulator instances',
      storageVal: 'Device File Explorer',
      storageDesc: 'Inspecting device-local storage and SQLite databases',
      bundleVal: 'Release Bundling',
      bundleDesc: 'Generating unsigned APKs and testing release builds',
      prodVal: 'Mobile Workflows',
      prodDesc: 'Essential tool for running and debugging Android applications'
    },
    'offline sync protocols': {
      tech: 'Offline Sync & Conflict Resolution',
      renderVal: 'Architectural Focus',
      renderDesc: 'Studying mutation queues and state reconciliation techniques',
      storageVal: 'Client Timestamps',
      storageDesc: 'Exploring last-write-wins and operational transforms',
      bundleVal: 'Research Topic',
      bundleDesc: 'Designing resilient models for intermittent connectivity',
      prodVal: 'Active Learning',
      prodDesc: 'Working toward cloud synchronization for CutBook'
    },
    'watermelondb': {
      tech: 'WatermelonDB (Exploration)',
      renderVal: 'Lazy Hydration',
      renderDesc: 'Studying scalable SQLite abstraction for large record sets',
      storageVal: 'Observable DB',
      storageDesc: 'Reactive queries that update UI components on data change',
      bundleVal: 'JSI Bridge',
      bundleDesc: 'Direct C++ synchronous access to native database thread',
      prodVal: 'Engineering Goal',
      prodDesc: 'Evaluating for future versions of CutBook'
    },
    'practical llm apis': {
      tech: 'Practical LLM API Integration',
      renderVal: 'Prompt Structuring',
      renderDesc: 'Calling OpenAI and Gemini endpoints for contextual assistance',
      storageVal: 'Context Caching',
      storageDesc: 'Managing chat history and system instructions cleanly',
      bundleVal: 'Pragmatic Use',
      bundleDesc: 'Focusing on useful features like summarization and drafting',
      prodVal: 'Experiments',
      prodDesc: 'Tested in AI Notes Studio concept and personal prototypes'
    }
  };

  chips.forEach((chip) => {
    function activateChip() {
      const name = chip.textContent.trim().toLowerCase();
      const data = telemetryData[name] || {
        tech: chip.textContent.trim(),
        renderVal: 'Responsive Mobile UI',
        renderDesc: 'Focused on clarity, usability, and touch performance',
        storageVal: 'Device-Local Data',
        storageDesc: 'Practical client storage and state persistence',
        bundleVal: 'Clean Architecture',
        bundleDesc: 'Modular structure with maintainable separation of concerns',
        prodVal: 'Applied Experience',
        prodDesc: 'Used in professional roles or personal product projects'
      };

      activeTech.textContent = data.tech;
      renderVal.textContent = data.renderVal;
      renderDesc.textContent = data.renderDesc;
      storageVal.textContent = data.storageVal;
      storageDesc.textContent = data.storageDesc;
      bundleVal.textContent = data.bundleVal;
      bundleDesc.textContent = data.bundleDesc;
      prodVal.textContent = data.prodVal;
      prodDesc.textContent = data.prodDesc;

      playCyberClick();
    }

    chip.addEventListener('mouseenter', activateChip);
    chip.addEventListener('click', activateChip);
  });
}

// ==========================================================================
// 27. HERO METRIC TELEMETRY COUNTER
// ==========================================================================
function initHeroStatsCounter() {
  const statNumbers = document.querySelectorAll('.hero-stat-number');
  if (!statNumbers.length) return;

  let hasAnimated = false;

  function runCounters() {
    if (hasAnimated) return;
    hasAnimated = true;

    statNumbers.forEach((el) => {
      const target = parseInt(el.getAttribute('data-target'), 10) || 0;
      const duration = 1200; // ms
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(1, elapsed / duration);
        // Easing out cubic
        const ease = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.floor(ease * target);

        el.textContent = currentVal;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = target;
        }
      }

      requestAnimationFrame(update);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        runCounters();
        observer.disconnect();
      }
    });
  }, { threshold: 0.2 });

  const container = document.querySelector('.hero-stats-strip');
  if (container) observer.observe(container);
}

// ==========================================================================
// 28. HERO PORTRAIT HOLOGRAM SCANLINE & AUDIO
// ==========================================================================
function initHeroPortraitScanner() {
  const wrap = document.getElementById('hero-portrait-wrap');
  if (!wrap) return;

  wrap.addEventListener('click', (e) => {
    // If the click was directly on portrait audio chip, let the chip handler process it
    if (e.target.closest('#hero-portrait-audio-badge')) return;

    wrap.classList.add('is-scanning');
    playCyberClick();
    if (typeof playSkillsGutGenugAudio === 'function') {
      playSkillsGutGenugAudio(true);
    }
    setTimeout(() => {
      wrap.classList.remove('is-scanning');
    }, 2400);
  });
}

// ==========================================================================
// 29. CUTBOOK 1-TAP STAGE STEPPER JUMPER
// ==========================================================================
function initCutBookStageStepper() {
  const track = document.getElementById('cutbook-scroll-track');
  const jumpPills = document.querySelectorAll('.stage-jump-pill');
  const stageCounter = document.getElementById('cutbook-stage-counter');
  const instructionText = document.getElementById('scroll-instruction-text');
  const stepCards = document.querySelectorAll('.cutbook-step-card');

  if (!track || !jumpPills.length) return;

  const stageProgressMap = {
    1: 0.05,
    2: 0.35,
    3: 0.65,
    4: 0.95
  };

  const stageTitles = {
    1: 'Scroll to explore CutBook architecture',
    2: 'Stage 02: Commission & Daily Work Entry',
    3: 'Stage 03: Device-Local Storage & Multi-Language UX',
    4: 'Stage 04: Testing Workflows with Real Salon Owners'
  };

  function updateStageUI(step) {
    if (stageCounter) stageCounter.textContent = `STAGE 0${step} / 04`;
    if (instructionText && stageTitles[step]) instructionText.textContent = stageTitles[step];
    stepCards.forEach((c) => {
      const cStep = parseInt(c.getAttribute('data-step'), 10);
      c.classList.toggle('active', cStep === step);
    });
    jumpPills.forEach((p) => {
      const pStep = parseInt(p.getAttribute('data-jump-step'), 10);
      p.classList.toggle('active', pStep === step);
    });
  }

  jumpPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const step = parseInt(pill.getAttribute('data-jump-step'), 10);
      const frac = stageProgressMap[step] || 0;
      updateStageUI(step);

      const trackRect = track.getBoundingClientRect();
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      const trackAbsoluteTop = currentScroll + trackRect.top;
      const scrollDistance = track.offsetHeight - window.innerHeight;

      if (scrollDistance > 50) {
        const targetScroll = trackAbsoluteTop + scrollDistance * frac;
        window.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        });
      }

      playWhooshSound();
    });
  });

  stepCards.forEach((card) => {
    card.addEventListener('click', () => {
      const step = parseInt(card.getAttribute('data-step'), 10);
      updateStageUI(step);
      playCyberClick();
    });
  });
}

// ==========================================================================
// 30. INTERACTIVE PLANT DISEASE AI SCANNER
// ==========================================================================
function initPlantDiseaseScanner() {
  const btn = document.getElementById('plant-rescan-btn');
  const resText = document.getElementById('scan-res-text');
  const laser = document.querySelector('.scanner-laser-bar');

  if (!btn || !resText) return;

  const diagnoses = [
    'CLASSIFICATION: EARLY BLIGHT (SAMPLE MODEL)',
    'CLASSIFICATION: POWDERY MILDEW (SAMPLE MODEL)',
    'CLASSIFICATION: HEALTHY FOLIAGE (SAMPLE MODEL)',
    'CLASSIFICATION: LEAF SPOT DETECTED (SAMPLE MODEL)'
  ];

  let currentIdx = 0;

  btn.addEventListener('click', () => {
    playCyberClick();
    if (laser) {
      laser.style.animation = 'none';
      laser.offsetHeight; // trigger reflow
      laser.style.animation = 'laserScan 0.6s 2 ease-in-out';
    }

    resText.textContent = 'RUNNING SAMPLE INFERENCE ON LEAF IMAGE...';
    resText.style.color = '#38bdf8';

    setTimeout(() => {
      currentIdx = (currentIdx + 1) % diagnoses.length;
      resText.textContent = diagnoses[currentIdx];
      resText.style.color = currentIdx === 2 ? '#10b981' : '#f59e0b';
      playSuccessChime();
    }, 700);
  });
}

// ==========================================================================
// 31. INTERACTIVE AI NOTES PROMPT STREAMER
// ==========================================================================
function initAiNotesGenerator() {
  const promptBtns = document.querySelectorAll('.ai-prompt-btn');
  const typingLine = document.getElementById('notes-typing-line');
  const tagsContainer = document.getElementById('notes-ai-tags');

  if (!promptBtns.length || !typingLine) return;

  let isStreaming = false;

  promptBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (isStreaming) return;
      isStreaming = true;

      const promptText = btn.getAttribute('data-prompt') || '';
      const tags = (btn.getAttribute('data-tags') || '').split(',');

      typingLine.textContent = '“';
      playCyberClick();

      let charIdx = 0;
      const typeTimer = setInterval(() => {
        if (charIdx < promptText.length) {
          typingLine.textContent = `“${promptText.substring(0, charIdx + 1)}”`;
          charIdx++;
        } else {
          clearInterval(typeTimer);
          isStreaming = false;

          // Render new tags
          if (tagsContainer && tags.length) {
            tagsContainer.innerHTML = '';
            tags.forEach((tag) => {
              const span = document.createElement('span');
              span.className = 'ai-tag';
              span.textContent = tag.trim();
              tagsContainer.appendChild(span);
            });
          }
          playSuccessChime();
        }
      }, 25);
    });
  });
}

// ==========================================================================
// 32. INTERACTIVE DHAKA RADAR TARGET LOCK
// ==========================================================================
function initDhakaRadarTargetLock() {
  const blip1 = document.getElementById('radar-blip-1');
  const blip2 = document.getElementById('radar-blip-2');
  const locText = document.getElementById('radar-loc-text');
  const statusText = document.getElementById('radar-status-text');

  if (!blip1 || !blip2) return;

  blip1.addEventListener('click', () => {
    blip1.classList.add('is-locked');
    blip2.classList.remove('is-locked');
    if (locText) locText.textContent = 'TARGET: ULAB CS DEPT // 23.7516° N, 90.3776° E';
    if (statusText) statusText.textContent = 'B.SC. IN COMPUTER SCIENCE & ENG (GRADUATED 2024)';
    playSuccessChime();
  });

  blip2.addEventListener('click', () => {
    blip2.classList.add('is-locked');
    blip1.classList.remove('is-locked');
    if (locText) locText.textContent = 'TARGET: CUTBOOK SALONS // DHAKA, BANGLADESH';
    if (statusText) statusText.textContent = 'TESTING POS WORKFLOWS WITH LOCAL SALON OWNERS';
    playCashChime();
  });
}

// ==========================================================================
// 33. OVERCLOCK 120 FPS GOD MODE CONTROLLER
// ==========================================================================
let isOverclocked = false;

function initOverclockMode() {
  const toggleBtn = document.getElementById('hud-overclock-toggle');
  const statusVal = document.getElementById('overclock-status-val');
  const fpsVal = document.getElementById('hud-fps-val');

  function toggle() {
    isOverclocked = !isOverclocked;
    document.body.classList.toggle('is-overclocked', isOverclocked);

    if (statusVal) {
      statusVal.textContent = isOverclocked ? 'ENGAGED 120FPS' : 'OVERCLOCK';
    }
    if (fpsVal) {
      fpsVal.textContent = isOverclocked ? '120 FPS // TURBO' : '60 FPS';
    }

    if (isOverclocked) {
      playSuccessChime();
      playWhooshSound();
      const toast = document.getElementById('toast');
      if (toast) {
        toast.textContent = '⚡ OVERCLOCK ENGAGED: 120 FPS KINETIC MODE ACTIVE';
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2500);
      }
    } else {
      playCyberClick();
    }
  }

  if (toggleBtn) toggleBtn.addEventListener('click', toggle);

  // Keyboard shortcut: Cmd+Shift+O / Ctrl+Shift+O
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key.toLowerCase() === 'o') {
      e.preventDefault();
      toggle();
    }
  });
}

// ==========================================================================
// 34. HERO SECTION AUDIO GREETING: ASSALAMU ALAIKUM
// ==========================================================================
let hasAttemptedHeroAudioAutoplay = false;

function playHeroAudioIntro(userInitiated = false) {
  const audio = document.getElementById('hero-intro-audio');
  const triggerBtn = document.getElementById('hero-audio-trigger');
  const badge = document.getElementById('hero-audio-badge');
  const portraitBadge = document.getElementById('hero-portrait-audio-badge');
  if (!audio) return;

  if (typeof getAudioContext === 'function') {
    getAudioContext();
  }

  audio.volume = 0.9;
  audio.currentTime = 0;

  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        if (triggerBtn) triggerBtn.classList.add('is-playing');
        if (portraitBadge) portraitBadge.classList.add('is-playing');
        if (badge) badge.textContent = 'PAUSE';

        if (userInitiated) {
          const toast = document.getElementById('toast');
          if (toast) {
            toast.textContent = '🔊 আসসালামু আলাইকুম // JAOHAR RAIHAN';
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 2800);
          }
        }
      })
      .catch(() => {
        // Autoplay may be restricted until user gesture
      });
  }
}

function pauseHeroAudioIntro() {
  const audio = document.getElementById('hero-intro-audio');
  const triggerBtn = document.getElementById('hero-audio-trigger');
  const badge = document.getElementById('hero-audio-badge');
  const portraitBadge = document.getElementById('hero-portrait-audio-badge');
  if (!audio) return;

  audio.pause();
  if (triggerBtn) triggerBtn.classList.remove('is-playing');
  if (portraitBadge) portraitBadge.classList.remove('is-playing');
  if (badge) badge.textContent = 'PLAY';
}

function toggleHeroAudioIntro(userInitiated = true) {
  const audio = document.getElementById('hero-intro-audio');
  if (!audio) return;
  if (!audio.paused && !audio.ended) {
    pauseHeroAudioIntro();
  } else {
    playHeroAudioIntro(userInitiated);
  }
}

function initHeroAudioIntro() {
  const audio = document.getElementById('hero-intro-audio');
  const triggerBtn = document.getElementById('hero-audio-trigger');
  const badge = document.getElementById('hero-audio-badge');
  const portraitBadge = document.getElementById('hero-portrait-audio-badge');
  if (!audio) return;

  // Handle when audio playback ends
  audio.addEventListener('ended', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (portraitBadge) portraitBadge.classList.remove('is-playing');
    if (badge) {
      badge.textContent = 'REPLAY';
      setTimeout(() => {
        if (audio.paused) badge.textContent = 'PLAY';
      }, 3500);
    }
  });

  audio.addEventListener('pause', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (portraitBadge) portraitBadge.classList.remove('is-playing');
    if (badge) badge.textContent = 'PLAY';
  });

  // Click handler on the hero action button
  if (triggerBtn) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleHeroAudioIntro(true);
    });
  }

  // Click handler on the portrait audio chip
  if (portraitBadge) {
    portraitBadge.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleHeroAudioIntro(true);
    });
  }

  // Autoplay as soon as the first section opens
  const attemptOpenAutoplay = () => {
    if (hasAttemptedHeroAudioAutoplay) return;
    hasAttemptedHeroAudioAutoplay = true;

    const promise = audio.play();
    if (promise !== undefined) {
      promise
        .then(() => {
          if (triggerBtn) triggerBtn.classList.add('is-playing');
          if (portraitBadge) portraitBadge.classList.add('is-playing');
          if (badge) badge.textContent = 'PAUSE';
        })
        .catch(() => {
          // Autoplay policy prevented immediate playback without user gesture.
          // Trigger automatically on the very first gesture on the page:
          const unlockAndPlay = () => {
            playHeroAudioIntro(false);
            interactionEvents.forEach((ev) => window.removeEventListener(ev, unlockAndPlay, { capture: true }));
          };
          const interactionEvents = ['click', 'touchstart', 'pointerdown', 'keydown'];
          interactionEvents.forEach((ev) => window.addEventListener(ev, unlockAndPlay, { capture: true, once: true }));
        });
    }
  };

  // Trigger autoplay attempt shortly after initialization
  setTimeout(attemptOpenAutoplay, 300);
}

// ==========================================================================
// 35. SCROLL TRIGGER AUDIO: CHALO
// ==========================================================================
let hasPlayedScrollChalo = false;
let scrollResetTimeout = null;

function playScrollChaloAudio(userInitiated = false) {
  if (typeof soundEnabled !== 'undefined' && !soundEnabled) return;
  const chaloAudio = document.getElementById('scroll-chalo-audio');
  const heroAudio = document.getElementById('hero-intro-audio');
  if (!chaloAudio) return;

  // When scrolling begins, pause the hero intro audio if still playing
  if (heroAudio && !heroAudio.paused) {
    if (typeof pauseHeroAudioIntro === 'function') {
      pauseHeroAudioIntro();
    } else {
      heroAudio.pause();
    }
  }

  if (typeof getAudioContext === 'function') {
    getAudioContext();
  }

  chaloAudio.volume = 0.95;
  chaloAudio.currentTime = 0;

  const promise = chaloAudio.play();
  if (promise !== undefined) {
    promise
      .then(() => {
        const toast = document.getElementById('toast');
        if (toast) {
          toast.textContent = '⚡ Chalo! // Entering Orbit';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 2200);
        }
      })
      .catch(() => {});
  }
}

function initScrollChaloAudio() {
  const chaloAudio = document.getElementById('scroll-chalo-audio');
  if (!chaloAudio) return;

  // Trigger Chalo immediately on the VERY FIRST scroll / wheel / touch swipe
  const onFirstScrollGesture = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (!hasPlayedScrollChalo && scrollY <= 80) {
      hasPlayedScrollChalo = true;
      playScrollChaloAudio(false);
    }
  };

  window.addEventListener('wheel', onFirstScrollGesture, { passive: true, once: true });
  window.addEventListener('touchmove', onFirstScrollGesture, { passive: true, once: true });

  // Listen to scroll events: triggers as soon as user begins first scroll
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    // Trigger immediately when first scroll starts
    if (scrollY > 3 && !hasPlayedScrollChalo) {
      hasPlayedScrollChalo = true;
      playScrollChaloAudio(false);
    }

    // Reset when user returns back to top of the hero section
    if (scrollY <= 10) {
      if (!scrollResetTimeout && hasPlayedScrollChalo) {
        scrollResetTimeout = setTimeout(() => {
          hasPlayedScrollChalo = false;
          scrollResetTimeout = null;
        }, 1200);
      }
    } else {
      if (scrollResetTimeout) {
        clearTimeout(scrollResetTimeout);
        scrollResetTimeout = null;
      }
    }
  }, { passive: true });

  // When Chalo ends, seamlessly advance to Du bist gut genug
  chaloAudio.addEventListener('ended', () => {
    if (typeof playSkillsGutGenugAudio === 'function') {
      playSkillsGutGenugAudio(false);
    }
  });
}

// ==========================================================================
// 35B. IMAGE & SKILLS SHOWCASE AUDIO: DU BIST GUT GENUG
// ==========================================================================
let hasPlayedSkillsGutGenug = false;

function playSkillsGutGenugAudio(userInitiated = false) {
  if (typeof soundEnabled !== 'undefined' && !soundEnabled) return;
  const audio = document.getElementById('skills-gut-genug-audio');
  const portraitBadge = document.getElementById('hero-portrait-audio-badge');
  const heroAudio = document.getElementById('hero-intro-audio');
  const chaloAudio = document.getElementById('scroll-chalo-audio');
  if (!audio) return;

  // Pause preceding tracks so voices never clash
  if (heroAudio && !heroAudio.paused) {
    if (typeof pauseHeroAudioIntro === 'function') {
      pauseHeroAudioIntro();
    } else {
      heroAudio.pause();
    }
  }
  if (chaloAudio && !chaloAudio.paused) {
    chaloAudio.pause();
  }

  if (typeof getAudioContext === 'function') {
    getAudioContext();
  }

  audio.volume = 0.92;
  audio.currentTime = 0;

  const promise = audio.play();
  if (promise !== undefined) {
    promise
      .then(() => {
        hasPlayedSkillsGutGenug = true;
        if (portraitBadge) portraitBadge.classList.add('is-playing');

        const toast = document.getElementById('toast');
        if (toast) {
          toast.textContent = '✨ Du bist gut genug // Image & Skills Soundtrack';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 2800);
        }
      })
      .catch(() => {});
  }
}

function pauseSkillsGutGenugAudio() {
  const audio = document.getElementById('skills-gut-genug-audio');
  const portraitBadge = document.getElementById('hero-portrait-audio-badge');
  if (!audio) return;

  audio.pause();
  if (portraitBadge) portraitBadge.classList.remove('is-playing');
}

function toggleSkillsGutGenugAudio(userInitiated = true) {
  const audio = document.getElementById('skills-gut-genug-audio');
  if (!audio) return;
  if (!audio.paused && !audio.ended) {
    pauseSkillsGutGenugAudio();
  } else {
    playSkillsGutGenugAudio(userInitiated);
  }
}

function initSkillsGutGenugAudio() {
  const audio = document.getElementById('skills-gut-genug-audio');
  const portraitBadge = document.getElementById('hero-portrait-audio-badge');
  const heroPortrait = document.getElementById('hero-portrait-wrap');
  const orbitNodes = document.querySelectorAll('.orbit-node');
  if (!audio) return;

  audio.addEventListener('ended', () => {
    if (portraitBadge) portraitBadge.classList.remove('is-playing');
  });

  audio.addEventListener('pause', () => {
    if (portraitBadge) portraitBadge.classList.remove('is-playing');
  });

  // Clicking the badge on the portrait directly toggles Du bist gut genug
  if (portraitBadge) {
    portraitBadge.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleSkillsGutGenugAudio(true);
    });
  }

  // Interacting with the hero image plays Du bist gut genug
  if (heroPortrait) {
    heroPortrait.addEventListener('click', (e) => {
      if (e.target.closest('#hero-portrait-audio-badge')) return;
      playSkillsGutGenugAudio(true);
    });
  }

  // Interacting with the orbit skills nodes triggers Du bist gut genug
  orbitNodes.forEach((node) => {
    node.addEventListener('click', () => {
      playSkillsGutGenugAudio(true);
    });
  });
}

// ==========================================================================
// 36. [APPROACH // 01] AUDIO: DEPRESSION INDIAN
// ==========================================================================
let hasPlayedApproachDepression = false;

function playApproachDepressionAudio(userInitiated = false) {
  if (typeof soundEnabled !== 'undefined' && !soundEnabled) return;
  const audio = document.getElementById('approach-depression-audio');
  const triggerBtn = document.getElementById('approach-depression-trigger');
  const badge = document.getElementById('approach-depression-badge');
  const skillsAudio = document.getElementById('skills-gut-genug-audio');
  const chaloAudio = document.getElementById('scroll-chalo-audio');
  const heroAudio = document.getElementById('hero-intro-audio');
  if (!audio) return;

  // Pause previous tracks when entering Approach // 01
  if (skillsAudio && !skillsAudio.paused) {
    if (typeof pauseSkillsGutGenugAudio === 'function') {
      pauseSkillsGutGenugAudio();
    } else {
      skillsAudio.pause();
    }
  }
  if (chaloAudio && !chaloAudio.paused) chaloAudio.pause();
  if (heroAudio && !heroAudio.paused) heroAudio.pause();
  const cutbookAudio = document.getElementById('cutbook-happy-audio');
  if (cutbookAudio && !cutbookAudio.paused) cutbookAudio.pause();

  if (typeof getAudioContext === 'function') {
    getAudioContext();
  }

  audio.volume = 0.9;
  audio.currentTime = 0;

  const promise = audio.play();
  if (promise !== undefined) {
    promise
      .then(() => {
        hasPlayedApproachDepression = true;
        if (triggerBtn) triggerBtn.classList.add('is-playing');
        if (badge) badge.textContent = 'PAUSE';

        const toast = document.getElementById('toast');
        if (toast) {
          toast.textContent = '🎻 Depression Indian // APPROACH // 01';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 2800);
        }
      })
      .catch(() => {});
  }
}

function pauseApproachDepressionAudio() {
  const audio = document.getElementById('approach-depression-audio');
  const triggerBtn = document.getElementById('approach-depression-trigger');
  const badge = document.getElementById('approach-depression-badge');
  if (!audio) return;

  audio.pause();
  if (triggerBtn) triggerBtn.classList.remove('is-playing');
  if (badge) badge.textContent = 'PLAY';
}

function toggleApproachDepressionAudio(userInitiated = true) {
  const audio = document.getElementById('approach-depression-audio');
  if (!audio) return;
  if (!audio.paused && !audio.ended) {
    pauseApproachDepressionAudio();
  } else {
    playApproachDepressionAudio(userInitiated);
  }
}

function initApproachDepressionAudio() {
  const audio = document.getElementById('approach-depression-audio');
  const triggerBtn = document.getElementById('approach-depression-trigger');
  const badge = document.getElementById('approach-depression-badge');
  const scrollPrompt = document.getElementById('hero-scroll-prompt');
  const introSection = document.getElementById('intro');
  if (!audio) return;

  audio.addEventListener('ended', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) {
      badge.textContent = 'REPLAY';
      setTimeout(() => {
        if (audio.paused) badge.textContent = 'PLAY';
      }, 3500);
    }
  });

  audio.addEventListener('pause', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) badge.textContent = 'PLAY';
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleApproachDepressionAudio(true);
    });
  }

  // Clicking hero scroll prompt scrolls smoothly to the intro approach section
  if (scrollPrompt) {
    scrollPrompt.addEventListener('click', (e) => {
      e.stopPropagation();
      if (introSection) {
        introSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Trigger automatically when user scrolls into [APPROACH // 01] section
  if ('IntersectionObserver' in window && introSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasPlayedApproachDepression) {
          hasPlayedApproachDepression = true;
          playApproachDepressionAudio(false);
        }
      });
    }, { threshold: 0.3 });
    observer.observe(introSection);
  } else {
    window.addEventListener('scroll', () => {
      if (!introSection) return;
      const rect = introSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.7 && rect.bottom >= 0 && !hasPlayedApproachDepression) {
        hasPlayedApproachDepression = true;
        playApproachDepressionAudio(false);
      }
    }, { passive: true });
  }
}

// ==========================================================================
// 36B. CUTBOOK SECTION AUDIO: HAPPY HAPPY HAPPY CAT
// ==========================================================================
let hasPlayedCutBookHappy = false;

function playCutBookHappyAudio(userInitiated = false) {
  if (typeof soundEnabled !== 'undefined' && !soundEnabled) return;
  const audio = document.getElementById('cutbook-happy-audio');
  const triggerBtn = document.getElementById('cutbook-happy-trigger');
  const badge = document.getElementById('cutbook-happy-badge');
  const heroAudio = document.getElementById('hero-intro-audio');
  const chaloAudio = document.getElementById('scroll-chalo-audio');
  const skillsAudio = document.getElementById('skills-gut-genug-audio');
  const depressionAudio = document.getElementById('approach-depression-audio');
  if (!audio) return;

  // Pause previous tracks when CutBook plays
  if (heroAudio && !heroAudio.paused) heroAudio.pause();
  if (chaloAudio && !chaloAudio.paused) chaloAudio.pause();
  if (skillsAudio && !skillsAudio.paused) skillsAudio.pause();
  if (depressionAudio && !depressionAudio.paused) depressionAudio.pause();
  const projectsAudio = document.getElementById('projects-maza-audio');
  if (projectsAudio && !projectsAudio.paused) projectsAudio.pause();

  if (typeof getAudioContext === 'function') {
    getAudioContext();
  }

  audio.volume = 0.92;
  audio.currentTime = 0;

  const promise = audio.play();
  if (promise !== undefined) {
    promise
      .then(() => {
        hasPlayedCutBookHappy = true;
        if (triggerBtn) triggerBtn.classList.add('is-playing');
        if (badge) badge.textContent = 'PAUSE';

        const toast = document.getElementById('toast');
        if (toast) {
          toast.textContent = '🐱 Happy Happy Happy Cat // CUTBOOK SALON POS';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 2800);
        }
      })
      .catch(() => {});
  }
}

function pauseCutBookHappyAudio() {
  const audio = document.getElementById('cutbook-happy-audio');
  const triggerBtn = document.getElementById('cutbook-happy-trigger');
  const badge = document.getElementById('cutbook-happy-badge');
  if (!audio) return;

  audio.pause();
  if (triggerBtn) triggerBtn.classList.remove('is-playing');
  if (badge) badge.textContent = 'PLAY';
}

function toggleCutBookHappyAudio(userInitiated = true) {
  const audio = document.getElementById('cutbook-happy-audio');
  if (!audio) return;
  if (!audio.paused && !audio.ended) {
    pauseCutBookHappyAudio();
  } else {
    playCutBookHappyAudio(userInitiated);
  }
}

function initCutBookHappyAudio() {
  const audio = document.getElementById('cutbook-happy-audio');
  const triggerBtn = document.getElementById('cutbook-happy-trigger');
  const badge = document.getElementById('cutbook-happy-badge');
  const workSection = document.getElementById('work');
  if (!audio) return;

  audio.addEventListener('ended', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) {
      badge.textContent = 'REPLAY';
      setTimeout(() => {
        if (audio.paused) badge.textContent = 'PLAY';
      }, 3500);
    }
  });

  audio.addEventListener('pause', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) badge.textContent = 'PLAY';
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleCutBookHappyAudio(true);
    });
  }

  // Trigger automatically when user scrolls into the CutBook section
  if ('IntersectionObserver' in window && workSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasPlayedCutBookHappy) {
          hasPlayedCutBookHappy = true;
          playCutBookHappyAudio(false);
        }
      });
    }, { threshold: 0.15 });
    observer.observe(workSection);
  } else {
    window.addEventListener('scroll', () => {
      if (!workSection) return;
      const rect = workSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.7 && rect.bottom >= 0 && !hasPlayedCutBookHappy) {
        hasPlayedCutBookHappy = true;
        playCutBookHappyAudio(false);
      }
    }, { passive: true });
  }
}

// ==========================================================================
// 36C. OTHER PROJECTS AUDIO: ABHI MAZA AAYEGA
// ==========================================================================
let hasPlayedProjectsMaza = false;

function playProjectsMazaAudio(userInitiated = false) {
  if (typeof soundEnabled !== 'undefined' && !soundEnabled) return;
  const audio = document.getElementById('projects-maza-audio');
  const triggerBtn = document.getElementById('projects-maza-trigger');
  const badge = document.getElementById('projects-maza-badge');
  const heroAudio = document.getElementById('hero-intro-audio');
  const chaloAudio = document.getElementById('scroll-chalo-audio');
  const skillsAudio = document.getElementById('skills-gut-genug-audio');
  const depressionAudio = document.getElementById('approach-depression-audio');
  const cutbookAudio = document.getElementById('cutbook-happy-audio');
  if (!audio) return;

  // Pause previous tracks when Other Projects plays
  if (heroAudio && !heroAudio.paused) heroAudio.pause();
  if (chaloAudio && !chaloAudio.paused) chaloAudio.pause();
  if (skillsAudio && !skillsAudio.paused) skillsAudio.pause();
  if (depressionAudio && !depressionAudio.paused) depressionAudio.pause();
  if (cutbookAudio && !cutbookAudio.paused) cutbookAudio.pause();
  const stackAudio = document.getElementById('stack-pirates-audio');
  if (stackAudio && !stackAudio.paused) stackAudio.pause();

  if (typeof getAudioContext === 'function') {
    getAudioContext();
  }

  audio.volume = 0.95;
  audio.currentTime = 0;

  const promise = audio.play();
  if (promise !== undefined) {
    promise
      .then(() => {
        hasPlayedProjectsMaza = true;
        if (triggerBtn) triggerBtn.classList.add('is-playing');
        if (badge) badge.textContent = 'PAUSE';

        const toast = document.getElementById('toast');
        if (toast) {
          toast.textContent = '🎬 Abhi Maza Aayega Na Bhidu // OTHER PROJECTS';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 2800);
        }
      })
      .catch(() => {});
  }
}

function pauseProjectsMazaAudio() {
  const audio = document.getElementById('projects-maza-audio');
  const triggerBtn = document.getElementById('projects-maza-trigger');
  const badge = document.getElementById('projects-maza-badge');
  if (!audio) return;

  audio.pause();
  if (triggerBtn) triggerBtn.classList.remove('is-playing');
  if (badge) badge.textContent = 'PLAY';
}

function toggleProjectsMazaAudio(userInitiated = true) {
  const audio = document.getElementById('projects-maza-audio');
  if (!audio) return;
  if (!audio.paused && !audio.ended) {
    pauseProjectsMazaAudio();
  } else {
    playProjectsMazaAudio(userInitiated);
  }
}

function initProjectsMazaAudio() {
  const audio = document.getElementById('projects-maza-audio');
  const triggerBtn = document.getElementById('projects-maza-trigger');
  const badge = document.getElementById('projects-maza-badge');
  const projectsSection = document.getElementById('projects');
  if (!audio) return;

  audio.addEventListener('ended', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) {
      badge.textContent = 'REPLAY';
      setTimeout(() => {
        if (audio.paused) badge.textContent = 'PLAY';
      }, 3500);
    }
  });

  audio.addEventListener('pause', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) badge.textContent = 'PLAY';
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleProjectsMazaAudio(true);
    });
  }

  // Trigger automatically when user scrolls into the Other Projects section
  if ('IntersectionObserver' in window && projectsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasPlayedProjectsMaza) {
          hasPlayedProjectsMaza = true;
          playProjectsMazaAudio(false);
        }
      });
    }, { threshold: 0.2 });
    observer.observe(projectsSection);
  } else {
    window.addEventListener('scroll', () => {
      if (!projectsSection) return;
      const rect = projectsSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.7 && rect.bottom >= 0 && !hasPlayedProjectsMaza) {
        hasPlayedProjectsMaza = true;
        playProjectsMazaAudio(false);
      }
    }, { passive: true });
  }
}

// ==========================================================================
// 36D. SKILLS & TECHNOLOGIES AUDIO: PIRATES OF THE CARIBBEAN
// ==========================================================================
let hasPlayedStackPirates = false;

function playStackPiratesAudio(userInitiated = false) {
  if (typeof soundEnabled !== 'undefined' && !soundEnabled) return;
  const audio = document.getElementById('stack-pirates-audio');
  const triggerBtn = document.getElementById('stack-pirates-trigger');
  const badge = document.getElementById('stack-pirates-badge');
  const heroAudio = document.getElementById('hero-intro-audio');
  const chaloAudio = document.getElementById('scroll-chalo-audio');
  const skillsAudio = document.getElementById('skills-gut-genug-audio');
  const depressionAudio = document.getElementById('approach-depression-audio');
  const cutbookAudio = document.getElementById('cutbook-happy-audio');
  const projectsAudio = document.getElementById('projects-maza-audio');
  if (!audio) return;

  // Pause previous tracks when Stack / Technologies plays
  if (heroAudio && !heroAudio.paused) heroAudio.pause();
  if (chaloAudio && !chaloAudio.paused) chaloAudio.pause();
  if (skillsAudio && !skillsAudio.paused) skillsAudio.pause();
  if (depressionAudio && !depressionAudio.paused) depressionAudio.pause();
  if (cutbookAudio && !cutbookAudio.paused) cutbookAudio.pause();
  if (projectsAudio && !projectsAudio.paused) projectsAudio.pause();

  if (typeof getAudioContext === 'function') {
    getAudioContext();
  }

  audio.volume = 0.95;
  audio.currentTime = 0;

  const promise = audio.play();
  if (promise !== undefined) {
    promise
      .then(() => {
        hasPlayedStackPirates = true;
        if (triggerBtn) triggerBtn.classList.add('is-playing');
        if (badge) badge.textContent = 'PAUSE';

        const toast = document.getElementById('toast');
        if (toast) {
          toast.textContent = '🏴‍☠️ Pirates Of The Caribbean // TECH STACK';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 2800);
        }
      })
      .catch(() => {});
  }
}

function pauseStackPiratesAudio() {
  const audio = document.getElementById('stack-pirates-audio');
  const triggerBtn = document.getElementById('stack-pirates-trigger');
  const badge = document.getElementById('stack-pirates-badge');
  if (!audio) return;

  audio.pause();
  if (triggerBtn) triggerBtn.classList.remove('is-playing');
  if (badge) badge.textContent = 'PLAY';
}

function toggleStackPiratesAudio(userInitiated = true) {
  const audio = document.getElementById('stack-pirates-audio');
  if (!audio) return;
  if (!audio.paused && !audio.ended) {
    pauseStackPiratesAudio();
  } else {
    playStackPiratesAudio(userInitiated);
  }
}

function initStackPiratesAudio() {
  const audio = document.getElementById('stack-pirates-audio');
  const triggerBtn = document.getElementById('stack-pirates-trigger');
  const badge = document.getElementById('stack-pirates-badge');
  const stackSection = document.getElementById('stack');
  if (!audio) return;

  audio.addEventListener('ended', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) {
      badge.textContent = 'REPLAY';
      setTimeout(() => {
        if (audio.paused) badge.textContent = 'PLAY';
      }, 3500);
    }
  });

  audio.addEventListener('pause', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) badge.textContent = 'PLAY';
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleStackPiratesAudio(true);
    });
  }

  // Trigger automatically when user scrolls into the Skills & Technologies section
  if ('IntersectionObserver' in window && stackSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasPlayedStackPirates) {
          hasPlayedStackPirates = true;
          playStackPiratesAudio(false);
        }
      });
    }, { threshold: 0.2 });
    observer.observe(stackSection);
  } else {
    window.addEventListener('scroll', () => {
      if (!stackSection) return;
      const rect = stackSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.7 && rect.bottom >= 0 && !hasPlayedStackPirates) {
        hasPlayedStackPirates = true;
        playStackPiratesAudio(false);
      }
    }, { passive: true });
  }
}

// ==========================================================================
// 37. ABOUT ME SECTION AUDIO: AMAR ASHOL PORICHOY
// ==========================================================================
let hasPlayedAboutPorichoy = false;

function playAboutPorichoyAudio(userInitiated = false) {
  if (typeof soundEnabled !== 'undefined' && !soundEnabled) return;
  const audio = document.getElementById('about-porichoy-audio');
  const triggerBtn = document.getElementById('about-porichoy-trigger');
  const badge = document.getElementById('about-porichoy-badge');
  const skillsAudio = document.getElementById('skills-gut-genug-audio');
  const depressionAudio = document.getElementById('approach-depression-audio');
  const cutbookAudio = document.getElementById('cutbook-happy-audio');
  const projectsAudio = document.getElementById('projects-maza-audio');
  const stackAudio = document.getElementById('stack-pirates-audio');
  if (!audio) return;

  // Pause preceding tracks
  if (skillsAudio && !skillsAudio.paused) skillsAudio.pause();
  if (depressionAudio && !depressionAudio.paused) depressionAudio.pause();
  if (cutbookAudio && !cutbookAudio.paused) cutbookAudio.pause();
  if (projectsAudio && !projectsAudio.paused) projectsAudio.pause();
  if (stackAudio && !stackAudio.paused) stackAudio.pause();
  const eduDamageAudio = document.getElementById('edu-damage-audio');
  if (eduDamageAudio && !eduDamageAudio.paused) eduDamageAudio.pause();
  const footerAudio = document.getElementById('footer-khatam-audio');
  if (footerAudio && !footerAudio.paused) footerAudio.pause();

  if (typeof getAudioContext === 'function') {
    getAudioContext();
  }

  audio.volume = 0.9;
  audio.currentTime = 0;

  const promise = audio.play();
  if (promise !== undefined) {
    promise
      .then(() => {
        hasPlayedAboutPorichoy = true;
        if (triggerBtn) triggerBtn.classList.add('is-playing');
        if (badge) badge.textContent = 'PAUSE';

        const toast = document.getElementById('toast');
        if (toast) {
          toast.textContent = '🔊 Amar Ashol Porichoy // ABOUT ME';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 2800);
        }
      })
      .catch(() => {});
  }
}

function pauseAboutPorichoyAudio() {
  const audio = document.getElementById('about-porichoy-audio');
  const triggerBtn = document.getElementById('about-porichoy-trigger');
  const badge = document.getElementById('about-porichoy-badge');
  if (!audio) return;

  audio.pause();
  if (triggerBtn) triggerBtn.classList.remove('is-playing');
  if (badge) badge.textContent = 'PLAY';
}

function toggleAboutPorichoyAudio(userInitiated = true) {
  const audio = document.getElementById('about-porichoy-audio');
  if (!audio) return;
  if (!audio.paused && !audio.ended) {
    pauseAboutPorichoyAudio();
  } else {
    playAboutPorichoyAudio(userInitiated);
  }
}

function initAboutPorichoyAudio() {
  const audio = document.getElementById('about-porichoy-audio');
  const triggerBtn = document.getElementById('about-porichoy-trigger');
  const badge = document.getElementById('about-porichoy-badge');
  const aboutSection = document.getElementById('about');
  if (!audio) return;

  audio.addEventListener('ended', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) {
      badge.textContent = 'REPLAY';
      setTimeout(() => {
        if (audio.paused) badge.textContent = 'PLAY';
      }, 3500);
    }
  });

  audio.addEventListener('pause', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) badge.textContent = 'PLAY';
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleAboutPorichoyAudio(true);
    });
  }

  // Trigger automatically when user scrolls into the About Me section
  if ('IntersectionObserver' in window && aboutSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasPlayedAboutPorichoy) {
          hasPlayedAboutPorichoy = true;
          playAboutPorichoyAudio(false);
        }
      });
    }, { threshold: 0.25 });
    observer.observe(aboutSection);
  } else {
    window.addEventListener('scroll', () => {
      if (!aboutSection) return;
      const rect = aboutSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.7 && rect.bottom >= 0 && !hasPlayedAboutPorichoy) {
        hasPlayedAboutPorichoy = true;
        playAboutPorichoyAudio(false);
      }
    }, { passive: true });
  }
}

// ==========================================================================
// 37B. EDUCATION & ACADEMIC JOURNEY AUDIO: EMOTIONAL DAMAGE
// ==========================================================================
let hasPlayedEduDamage = false;

function playEduDamageAudio(userInitiated = false) {
  if (typeof soundEnabled !== 'undefined' && !soundEnabled) return;
  const audio = document.getElementById('edu-damage-audio');
  const triggerBtn = document.getElementById('edu-damage-trigger');
  const badge = document.getElementById('edu-damage-badge');
  const heroAudio = document.getElementById('hero-intro-audio');
  const chaloAudio = document.getElementById('scroll-chalo-audio');
  const skillsAudio = document.getElementById('skills-gut-genug-audio');
  const depressionAudio = document.getElementById('approach-depression-audio');
  const cutbookAudio = document.getElementById('cutbook-happy-audio');
  const projectsAudio = document.getElementById('projects-maza-audio');
  const stackAudio = document.getElementById('stack-pirates-audio');
  const aboutAudio = document.getElementById('about-porichoy-audio');
  const footerAudio = document.getElementById('footer-khatam-audio');
  if (!audio) return;

  // Pause previous tracks when Education plays
  if (heroAudio && !heroAudio.paused) heroAudio.pause();
  if (chaloAudio && !chaloAudio.paused) chaloAudio.pause();
  if (skillsAudio && !skillsAudio.paused) skillsAudio.pause();
  if (depressionAudio && !depressionAudio.paused) depressionAudio.pause();
  if (cutbookAudio && !cutbookAudio.paused) cutbookAudio.pause();
  if (projectsAudio && !projectsAudio.paused) projectsAudio.pause();
  if (stackAudio && !stackAudio.paused) stackAudio.pause();
  if (aboutAudio && !aboutAudio.paused) aboutAudio.pause();
  if (footerAudio && !footerAudio.paused) footerAudio.pause();
  const bosunAudio = document.getElementById('footer-bosun-audio');
  if (bosunAudio && !bosunAudio.paused) bosunAudio.pause();

  if (typeof getAudioContext === 'function') {
    getAudioContext();
  }

  audio.volume = 0.95;
  audio.currentTime = 0;

  const promise = audio.play();
  if (promise !== undefined) {
    promise
      .then(() => {
        hasPlayedEduDamage = true;
        if (triggerBtn) triggerBtn.classList.add('is-playing');
        if (badge) badge.textContent = 'PAUSE';

        const toast = document.getElementById('toast');
        if (toast) {
          toast.textContent = '💥 Emotional Damage! // ACADEMIC TIMELINE';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 2800);
        }
      })
      .catch(() => {});
  }
}

function pauseEduDamageAudio() {
  const audio = document.getElementById('edu-damage-audio');
  const triggerBtn = document.getElementById('edu-damage-trigger');
  const badge = document.getElementById('edu-damage-badge');
  if (!audio) return;

  audio.pause();
  if (triggerBtn) triggerBtn.classList.remove('is-playing');
  if (badge) badge.textContent = 'PLAY';
}

function toggleEduDamageAudio(userInitiated = true) {
  const audio = document.getElementById('edu-damage-audio');
  if (!audio) return;
  if (!audio.paused && !audio.ended) {
    pauseEduDamageAudio();
  } else {
    playEduDamageAudio(userInitiated);
  }
}

function initEduDamageAudio() {
  const audio = document.getElementById('edu-damage-audio');
  const triggerBtn = document.getElementById('edu-damage-trigger');
  const badge = document.getElementById('edu-damage-badge');
  const eduBlock = document.getElementById('education-block');
  if (!audio) return;

  audio.addEventListener('ended', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) {
      badge.textContent = 'REPLAY';
      setTimeout(() => {
        if (audio.paused) badge.textContent = 'PLAY';
      }, 3500);
    }
  });

  audio.addEventListener('pause', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) badge.textContent = 'PLAY';
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleEduDamageAudio(true);
    });
  }

  // Trigger automatically when user scrolls into the Education section
  if ('IntersectionObserver' in window && eduBlock) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasPlayedEduDamage) {
          hasPlayedEduDamage = true;
          playEduDamageAudio(false);
        }
      });
    }, { threshold: 0.25 });
    observer.observe(eduBlock);
  }
}

// ==========================================================================
// 38. FOOTER / LAST SECTION AUDIO: KHATAM TATA BYE BYE
// ==========================================================================
let hasPlayedFooterKhatam = false;

function playFooterKhatamAudio(userInitiated = false) {
  if (typeof soundEnabled !== 'undefined' && !soundEnabled) return;
  const audio = document.getElementById('footer-khatam-audio');
  const triggerBtn = document.getElementById('footer-khatam-trigger');
  const badge = document.getElementById('footer-khatam-badge');
  const heroAudio = document.getElementById('hero-intro-audio');
  const chaloAudio = document.getElementById('scroll-chalo-audio');
  const skillsAudio = document.getElementById('skills-gut-genug-audio');
  const depressionAudio = document.getElementById('approach-depression-audio');
  const cutbookAudio = document.getElementById('cutbook-happy-audio');
  const projectsAudio = document.getElementById('projects-maza-audio');
  const stackAudio = document.getElementById('stack-pirates-audio');
  const aboutAudio = document.getElementById('about-porichoy-audio');
  if (!audio) return;

  // Pause all previous tracks when Khatam Tata Bye Bye plays
  if (heroAudio && !heroAudio.paused) heroAudio.pause();
  if (chaloAudio && !chaloAudio.paused) chaloAudio.pause();
  if (skillsAudio && !skillsAudio.paused) skillsAudio.pause();
  if (depressionAudio && !depressionAudio.paused) depressionAudio.pause();
  if (cutbookAudio && !cutbookAudio.paused) cutbookAudio.pause();
  if (projectsAudio && !projectsAudio.paused) projectsAudio.pause();
  if (stackAudio && !stackAudio.paused) stackAudio.pause();
  if (aboutAudio && !aboutAudio.paused) aboutAudio.pause();
  const eduAudio = document.getElementById('edu-damage-audio');
  if (eduAudio && !eduAudio.paused) eduAudio.pause();
  const bosunAudio = document.getElementById('footer-bosun-audio');
  if (bosunAudio && !bosunAudio.paused) bosunAudio.pause();
  const khelaAudio = document.getElementById('footer-khela-audio');
  if (khelaAudio && !khelaAudio.paused) khelaAudio.pause();

  if (typeof getAudioContext === 'function') {
    getAudioContext();
  }

  audio.volume = 0.95;
  audio.currentTime = 0;

  const promise = audio.play();
  if (promise !== undefined) {
    promise
      .then(() => {
        hasPlayedFooterKhatam = true;
        if (triggerBtn) triggerBtn.classList.add('is-playing');
        if (badge) badge.textContent = 'PAUSE';

        const toast = document.getElementById('toast');
        if (toast) {
          toast.textContent = '👋 Khatam, Tata, Bye Bye, Gaya! // THE END';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 2800);
        }
      })
      .catch(() => {});
  }
}

function pauseFooterKhatamAudio() {
  const audio = document.getElementById('footer-khatam-audio');
  const triggerBtn = document.getElementById('footer-khatam-trigger');
  const badge = document.getElementById('footer-khatam-badge');
  if (!audio) return;

  audio.pause();
  if (triggerBtn) triggerBtn.classList.remove('is-playing');
  if (badge) badge.textContent = 'PLAY';
}

function toggleFooterKhatamAudio(userInitiated = true) {
  const audio = document.getElementById('footer-khatam-audio');
  if (!audio) return;
  if (!audio.paused && !audio.ended) {
    pauseFooterKhatamAudio();
  } else {
    playFooterKhatamAudio(userInitiated);
  }
}

function initFooterKhatamAudio() {
  const audio = document.getElementById('footer-khatam-audio');
  const triggerBtn = document.getElementById('footer-khatam-trigger');
  const badge = document.getElementById('footer-khatam-badge');
  const footerElement = document.querySelector('.minimal-footer');
  if (!audio) return;

  audio.addEventListener('ended', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) {
      badge.textContent = 'REPLAY';
      setTimeout(() => {
        if (audio.paused) badge.textContent = 'PLAY';
      }, 3500);
    }
    // Chain into "Ei Bosun Toh" meme sound
    setTimeout(() => {
      playEiBosunAudio(false);
    }, 280);
  });

  audio.addEventListener('pause', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) badge.textContent = 'PLAY';
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFooterKhatamAudio(true);
    });
  }

  // Trigger automatically when user reaches the very bottom / footer
  if ('IntersectionObserver' in window && footerElement) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasPlayedFooterKhatam) {
          hasPlayedFooterKhatam = true;
          playFooterKhatamAudio(false);
        }
      });
    }, { threshold: 0.1 });
    observer.observe(footerElement);
  } else {
    window.addEventListener('scroll', () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollPos = window.innerHeight + (window.scrollY || document.documentElement.scrollTop);
      if (scrollHeight - scrollPos <= 120 && !hasPlayedFooterKhatam) {
        hasPlayedFooterKhatam = true;
        playFooterKhatamAudio(false);
      }
    }, { passive: true });
  }
}

// ==========================================================================
// 39. FOOTER SEQUEL AUDIO: EI BOSUN TOH
// ==========================================================================
let hasPlayedFooterBosun = false;

function playEiBosunAudio(userInitiated = false) {
  if (typeof soundEnabled !== 'undefined' && !soundEnabled) return;
  const audio = document.getElementById('footer-bosun-audio');
  const triggerBtn = document.getElementById('footer-bosun-trigger');
  const badge = document.getElementById('footer-bosun-badge');
  const heroAudio = document.getElementById('hero-intro-audio');
  const chaloAudio = document.getElementById('scroll-chalo-audio');
  const skillsAudio = document.getElementById('skills-gut-genug-audio');
  const depressionAudio = document.getElementById('approach-depression-audio');
  const cutbookAudio = document.getElementById('cutbook-happy-audio');
  const projectsAudio = document.getElementById('projects-maza-audio');
  const stackAudio = document.getElementById('stack-pirates-audio');
  const aboutAudio = document.getElementById('about-porichoy-audio');
  const eduAudio = document.getElementById('edu-damage-audio');
  const footerAudio = document.getElementById('footer-khatam-audio');
  if (!audio) return;

  // Pause all other tracks when Ei Bosun Toh plays
  if (heroAudio && !heroAudio.paused) heroAudio.pause();
  if (chaloAudio && !chaloAudio.paused) chaloAudio.pause();
  if (skillsAudio && !skillsAudio.paused) skillsAudio.pause();
  if (depressionAudio && !depressionAudio.paused) depressionAudio.pause();
  if (cutbookAudio && !cutbookAudio.paused) cutbookAudio.pause();
  if (projectsAudio && !projectsAudio.paused) projectsAudio.pause();
  if (stackAudio && !stackAudio.paused) stackAudio.pause();
  if (aboutAudio && !aboutAudio.paused) aboutAudio.pause();
  if (eduAudio && !eduAudio.paused) eduAudio.pause();
  if (footerAudio && !footerAudio.paused) footerAudio.pause();
  const khelaAudio = document.getElementById('footer-khela-audio');
  if (khelaAudio && !khelaAudio.paused) khelaAudio.pause();

  if (typeof getAudioContext === 'function') {
    getAudioContext();
  }

  audio.volume = 0.95;
  audio.currentTime = 0;

  const promise = audio.play();
  if (promise !== undefined) {
    promise
      .then(() => {
        hasPlayedFooterBosun = true;
        if (triggerBtn) triggerBtn.classList.add('is-playing');
        if (badge) badge.textContent = 'PAUSE';

        const toast = document.getElementById('toast');
        if (toast) {
          toast.textContent = '🪑 "Ei Bosun Toh!" // WAIT, SIT DOWN!';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 2800);
        }
      })
      .catch(() => {});
  }
}

function pauseEiBosunAudio() {
  const audio = document.getElementById('footer-bosun-audio');
  const triggerBtn = document.getElementById('footer-bosun-trigger');
  const badge = document.getElementById('footer-bosun-badge');
  if (!audio) return;

  audio.pause();
  if (triggerBtn) triggerBtn.classList.remove('is-playing');
  if (badge) badge.textContent = 'PLAY';
}

function toggleEiBosunAudio(userInitiated = true) {
  const audio = document.getElementById('footer-bosun-audio');
  if (!audio) return;
  if (!audio.paused && !audio.ended) {
    pauseEiBosunAudio();
  } else {
    playEiBosunAudio(userInitiated);
  }
}

function initEiBosunAudio() {
  const audio = document.getElementById('footer-bosun-audio');
  const triggerBtn = document.getElementById('footer-bosun-trigger');
  const badge = document.getElementById('footer-bosun-badge');
  if (!audio) return;

  audio.addEventListener('ended', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) {
      badge.textContent = 'REPLAY';
      setTimeout(() => {
        if (audio.paused) badge.textContent = 'PLAY';
      }, 3500);
    }
    // Chain into "Khela Hobe" meme sound
    setTimeout(() => {
      playFooterKhelaAudio(false);
    }, 280);
  });

  audio.addEventListener('pause', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) badge.textContent = 'PLAY';
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleEiBosunAudio(true);
    });
  }
}

// ==========================================================================
// 40. FOOTER FINALE AUDIO: KHELA HOBE
// ==========================================================================
let hasPlayedFooterKhela = false;

function playFooterKhelaAudio(userInitiated = false) {
  if (typeof soundEnabled !== 'undefined' && !soundEnabled) return;
  const audio = document.getElementById('footer-khela-audio');
  const triggerBtn = document.getElementById('footer-khela-trigger');
  const badge = document.getElementById('footer-khela-badge');
  const heroAudio = document.getElementById('hero-intro-audio');
  const chaloAudio = document.getElementById('scroll-chalo-audio');
  const skillsAudio = document.getElementById('skills-gut-genug-audio');
  const depressionAudio = document.getElementById('approach-depression-audio');
  const cutbookAudio = document.getElementById('cutbook-happy-audio');
  const projectsAudio = document.getElementById('projects-maza-audio');
  const stackAudio = document.getElementById('stack-pirates-audio');
  const aboutAudio = document.getElementById('about-porichoy-audio');
  const eduAudio = document.getElementById('edu-damage-audio');
  const footerAudio = document.getElementById('footer-khatam-audio');
  const bosunAudio = document.getElementById('footer-bosun-audio');
  if (!audio) return;

  // Pause all other tracks when Khela Hobe plays
  if (heroAudio && !heroAudio.paused) heroAudio.pause();
  if (chaloAudio && !chaloAudio.paused) chaloAudio.pause();
  if (skillsAudio && !skillsAudio.paused) skillsAudio.pause();
  if (depressionAudio && !depressionAudio.paused) depressionAudio.pause();
  if (cutbookAudio && !cutbookAudio.paused) cutbookAudio.pause();
  if (projectsAudio && !projectsAudio.paused) projectsAudio.pause();
  if (stackAudio && !stackAudio.paused) stackAudio.pause();
  if (aboutAudio && !aboutAudio.paused) aboutAudio.pause();
  if (eduAudio && !eduAudio.paused) eduAudio.pause();
  if (footerAudio && !footerAudio.paused) footerAudio.pause();
  if (bosunAudio && !bosunAudio.paused) bosunAudio.pause();
  const messiAudio = document.getElementById('footer-messi-audio');
  if (messiAudio && !messiAudio.paused) messiAudio.pause();

  if (typeof getAudioContext === 'function') {
    getAudioContext();
  }

  audio.volume = 0.95;
  audio.currentTime = 0;

  const promise = audio.play();
  if (promise !== undefined) {
    promise
      .then(() => {
        hasPlayedFooterKhela = true;
        if (triggerBtn) triggerBtn.classList.add('is-playing');
        if (badge) badge.textContent = 'PAUSE';

        const toast = document.getElementById('toast');
        if (toast) {
          toast.textContent = '⚽ "Khela Hobe!" // LET THE GAME BEGIN!';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 2800);
        }
      })
      .catch(() => {});
  }
}

function pauseFooterKhelaAudio() {
  const audio = document.getElementById('footer-khela-audio');
  const triggerBtn = document.getElementById('footer-khela-trigger');
  const badge = document.getElementById('footer-khela-badge');
  if (!audio) return;

  audio.pause();
  if (triggerBtn) triggerBtn.classList.remove('is-playing');
  if (badge) badge.textContent = 'PLAY';
}

function toggleFooterKhelaAudio(userInitiated = true) {
  const audio = document.getElementById('footer-khela-audio');
  if (!audio) return;
  if (!audio.paused && !audio.ended) {
    pauseFooterKhelaAudio();
  } else {
    playFooterKhelaAudio(userInitiated);
  }
}

function initFooterKhelaAudio() {
  const audio = document.getElementById('footer-khela-audio');
  const triggerBtn = document.getElementById('footer-khela-trigger');
  const badge = document.getElementById('footer-khela-badge');
  if (!audio) return;

  audio.addEventListener('ended', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) {
      badge.textContent = 'REPLAY';
      setTimeout(() => {
        if (audio.paused) badge.textContent = 'PLAY';
      }, 3500);
    }
    // Chain into "Ankara Messi" meme sound
    setTimeout(() => {
      playAnkaraMessiAudio(false);
    }, 280);
  });

  audio.addEventListener('pause', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) badge.textContent = 'PLAY';
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFooterKhelaAudio(true);
    });
  }
}

// ==========================================================================
// 41. FOOTER EXTRA AUDIO: ANKARA MESSI
// ==========================================================================
let hasPlayedAnkaraMessi = false;

function playAnkaraMessiAudio(userInitiated = false) {
  if (typeof soundEnabled !== 'undefined' && !soundEnabled) return;
  const audio = document.getElementById('footer-messi-audio');
  const triggerBtn = document.getElementById('footer-messi-trigger');
  const badge = document.getElementById('footer-messi-badge');
  const heroAudio = document.getElementById('hero-intro-audio');
  const chaloAudio = document.getElementById('scroll-chalo-audio');
  const skillsAudio = document.getElementById('skills-gut-genug-audio');
  const depressionAudio = document.getElementById('approach-depression-audio');
  const cutbookAudio = document.getElementById('cutbook-happy-audio');
  const projectsAudio = document.getElementById('projects-maza-audio');
  const stackAudio = document.getElementById('stack-pirates-audio');
  const aboutAudio = document.getElementById('about-porichoy-audio');
  const eduAudio = document.getElementById('edu-damage-audio');
  const footerAudio = document.getElementById('footer-khatam-audio');
  const bosunAudio = document.getElementById('footer-bosun-audio');
  const khelaAudio = document.getElementById('footer-khela-audio');
  if (!audio) return;

  // Pause all other tracks when Ankara Messi plays
  if (heroAudio && !heroAudio.paused) heroAudio.pause();
  if (chaloAudio && !chaloAudio.paused) chaloAudio.pause();
  if (skillsAudio && !skillsAudio.paused) skillsAudio.pause();
  if (depressionAudio && !depressionAudio.paused) depressionAudio.pause();
  if (cutbookAudio && !cutbookAudio.paused) cutbookAudio.pause();
  if (projectsAudio && !projectsAudio.paused) projectsAudio.pause();
  if (stackAudio && !stackAudio.paused) stackAudio.pause();
  if (aboutAudio && !aboutAudio.paused) aboutAudio.pause();
  if (eduAudio && !eduAudio.paused) eduAudio.pause();
  if (footerAudio && !footerAudio.paused) footerAudio.pause();
  if (bosunAudio && !bosunAudio.paused) bosunAudio.pause();
  if (khelaAudio && !khelaAudio.paused) khelaAudio.pause();
  const adeleAudio = document.getElementById('footer-adele-audio');
  if (adeleAudio && !adeleAudio.paused) adeleAudio.pause();

  if (typeof getAudioContext === 'function') {
    getAudioContext();
  }

  audio.volume = 0.95;
  audio.currentTime = 0;

  const promise = audio.play();
  if (promise !== undefined) {
    promise
      .then(() => {
        hasPlayedAnkaraMessi = true;
        if (triggerBtn) triggerBtn.classList.add('is-playing');
        if (badge) badge.textContent = 'PAUSE';

        const toast = document.getElementById('toast');
        if (toast) {
          toast.textContent = '🐐 "ANKARA MESSI! GOL GOL GOL!" // THE GOAT';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 2800);
        }
      })
      .catch(() => {});
  }
}

function pauseAnkaraMessiAudio() {
  const audio = document.getElementById('footer-messi-audio');
  const triggerBtn = document.getElementById('footer-messi-trigger');
  const badge = document.getElementById('footer-messi-badge');
  if (!audio) return;

  audio.pause();
  if (triggerBtn) triggerBtn.classList.remove('is-playing');
  if (badge) badge.textContent = 'PLAY';
}

function toggleAnkaraMessiAudio(userInitiated = true) {
  const audio = document.getElementById('footer-messi-audio');
  if (!audio) return;
  if (!audio.paused && !audio.ended) {
    pauseAnkaraMessiAudio();
  } else {
    playAnkaraMessiAudio(userInitiated);
  }
}

function initAnkaraMessiAudio() {
  const audio = document.getElementById('footer-messi-audio');
  const triggerBtn = document.getElementById('footer-messi-trigger');
  const badge = document.getElementById('footer-messi-badge');
  if (!audio) return;

  audio.addEventListener('ended', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) {
      badge.textContent = 'REPLAY';
      setTimeout(() => {
        if (audio.paused) badge.textContent = 'PLAY';
      }, 3500);
    }
    // Chain into Adele "This is the end" sound
    setTimeout(() => {
      playAdeleAudio(false);
    }, 280);
  });

  audio.addEventListener('pause', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) badge.textContent = 'PLAY';
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleAnkaraMessiAudio(true);
    });
  }
}

// ==========================================================================
// 42. FOOTER FINALE EXTRA: ADELE - THIS IS THE END
// ==========================================================================
let hasPlayedAdele = false;

function playAdeleAudio(userInitiated = false) {
  if (typeof soundEnabled !== 'undefined' && !soundEnabled) return;
  const audio = document.getElementById('footer-adele-audio');
  const triggerBtn = document.getElementById('footer-adele-trigger');
  const badge = document.getElementById('footer-adele-badge');
  const heroAudio = document.getElementById('hero-intro-audio');
  const chaloAudio = document.getElementById('scroll-chalo-audio');
  const skillsAudio = document.getElementById('skills-gut-genug-audio');
  const depressionAudio = document.getElementById('approach-depression-audio');
  const cutbookAudio = document.getElementById('cutbook-happy-audio');
  const projectsAudio = document.getElementById('projects-maza-audio');
  const stackAudio = document.getElementById('stack-pirates-audio');
  const aboutAudio = document.getElementById('about-porichoy-audio');
  const eduAudio = document.getElementById('edu-damage-audio');
  const footerAudio = document.getElementById('footer-khatam-audio');
  const bosunAudio = document.getElementById('footer-bosun-audio');
  const khelaAudio = document.getElementById('footer-khela-audio');
  const messiAudio = document.getElementById('footer-messi-audio');
  if (!audio) return;

  // Pause all other tracks when Adele plays
  if (heroAudio && !heroAudio.paused) heroAudio.pause();
  if (chaloAudio && !chaloAudio.paused) chaloAudio.pause();
  if (skillsAudio && !skillsAudio.paused) skillsAudio.pause();
  if (depressionAudio && !depressionAudio.paused) depressionAudio.pause();
  if (cutbookAudio && !cutbookAudio.paused) cutbookAudio.pause();
  if (projectsAudio && !projectsAudio.paused) projectsAudio.pause();
  if (stackAudio && !stackAudio.paused) stackAudio.pause();
  if (aboutAudio && !aboutAudio.paused) aboutAudio.pause();
  if (eduAudio && !eduAudio.paused) eduAudio.pause();
  if (footerAudio && !footerAudio.paused) footerAudio.pause();
  if (bosunAudio && !bosunAudio.paused) bosunAudio.pause();
  if (khelaAudio && !khelaAudio.paused) khelaAudio.pause();
  if (messiAudio && !messiAudio.paused) messiAudio.pause();
  const modiAudio = document.getElementById('footer-modi-audio');
  if (modiAudio && !modiAudio.paused) modiAudio.pause();

  if (typeof getAudioContext === 'function') {
    getAudioContext();
  }

  audio.volume = 0.95;
  audio.currentTime = 0;

  const promise = audio.play();
  if (promise !== undefined) {
    promise
      .then(() => {
        hasPlayedAdele = true;
        if (triggerBtn) triggerBtn.classList.add('is-playing');
        if (badge) badge.textContent = 'PAUSE';

        const toast = document.getElementById('toast');
        if (toast) {
          toast.textContent = '🎶 "This is the end... Hold your breath and count to ten" // ADELE';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 3200);
        }
      })
      .catch(() => {});
  }
}

function pauseAdeleAudio() {
  const audio = document.getElementById('footer-adele-audio');
  const triggerBtn = document.getElementById('footer-adele-trigger');
  const badge = document.getElementById('footer-adele-badge');
  if (!audio) return;

  audio.pause();
  if (triggerBtn) triggerBtn.classList.remove('is-playing');
  if (badge) badge.textContent = 'PLAY';
}

function toggleAdeleAudio(userInitiated = true) {
  const audio = document.getElementById('footer-adele-audio');
  if (!audio) return;
  if (!audio.paused && !audio.ended) {
    pauseAdeleAudio();
  } else {
    playAdeleAudio(userInitiated);
  }
}

function initAdeleAudio() {
  const audio = document.getElementById('footer-adele-audio');
  const triggerBtn = document.getElementById('footer-adele-trigger');
  const badge = document.getElementById('footer-adele-badge');
  if (!audio) return;

  audio.addEventListener('ended', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) {
      badge.textContent = 'REPLAY';
      setTimeout(() => {
        if (audio.paused) badge.textContent = 'PLAY';
      }, 3500);
    }
    // Chain into "Iska Karan Narendra Modi" sound
    setTimeout(() => {
      playModiAudio(false);
    }, 280);
  });

  audio.addEventListener('pause', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) badge.textContent = 'PLAY';
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleAdeleAudio(true);
    });
  }
}

// ==========================================================================
// 43. FOOTER FINALE EXTRA: ISKA KARAN NARENDRA MODI
// ==========================================================================
let hasPlayedModi = false;

function playModiAudio(userInitiated = false) {
  if (typeof soundEnabled !== 'undefined' && !soundEnabled) return;
  const audio = document.getElementById('footer-modi-audio');
  const triggerBtn = document.getElementById('footer-modi-trigger');
  const badge = document.getElementById('footer-modi-badge');
  const heroAudio = document.getElementById('hero-intro-audio');
  const chaloAudio = document.getElementById('scroll-chalo-audio');
  const skillsAudio = document.getElementById('skills-gut-genug-audio');
  const depressionAudio = document.getElementById('approach-depression-audio');
  const cutbookAudio = document.getElementById('cutbook-happy-audio');
  const projectsAudio = document.getElementById('projects-maza-audio');
  const stackAudio = document.getElementById('stack-pirates-audio');
  const aboutAudio = document.getElementById('about-porichoy-audio');
  const eduAudio = document.getElementById('edu-damage-audio');
  const footerAudio = document.getElementById('footer-khatam-audio');
  const bosunAudio = document.getElementById('footer-bosun-audio');
  const khelaAudio = document.getElementById('footer-khela-audio');
  const messiAudio = document.getElementById('footer-messi-audio');
  const adeleAudio = document.getElementById('footer-adele-audio');
  if (!audio) return;

  // Pause all other tracks when Modi plays
  if (heroAudio && !heroAudio.paused) heroAudio.pause();
  if (chaloAudio && !chaloAudio.paused) chaloAudio.pause();
  if (skillsAudio && !skillsAudio.paused) skillsAudio.pause();
  if (depressionAudio && !depressionAudio.paused) depressionAudio.pause();
  if (cutbookAudio && !cutbookAudio.paused) cutbookAudio.pause();
  if (projectsAudio && !projectsAudio.paused) projectsAudio.pause();
  if (stackAudio && !stackAudio.paused) stackAudio.pause();
  if (aboutAudio && !aboutAudio.paused) aboutAudio.pause();
  if (eduAudio && !eduAudio.paused) eduAudio.pause();
  if (footerAudio && !footerAudio.paused) footerAudio.pause();
  if (bosunAudio && !bosunAudio.paused) bosunAudio.pause();
  if (khelaAudio && !khelaAudio.paused) khelaAudio.pause();
  if (messiAudio && !messiAudio.paused) messiAudio.pause();
  if (adeleAudio && !adeleAudio.paused) adeleAudio.pause();
  const wahModiAudio = document.getElementById('footer-wahmodi-audio');
  if (wahModiAudio && !wahModiAudio.paused) wahModiAudio.pause();

  if (typeof getAudioContext === 'function') {
    getAudioContext();
  }

  audio.volume = 0.95;
  audio.currentTime = 0;

  const promise = audio.play();
  if (promise !== undefined) {
    promise
      .then(() => {
        hasPlayedModi = true;
        if (triggerBtn) triggerBtn.classList.add('is-playing');
        if (badge) badge.textContent = 'PAUSE';

        const toast = document.getElementById('toast');
        if (toast) {
          toast.textContent = '🇮🇳 "Iska Karan Narendra Modi Hai!" // FINAL REVELATION';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 3000);
        }
      })
      .catch(() => {});
  }
}

function pauseModiAudio() {
  const audio = document.getElementById('footer-modi-audio');
  const triggerBtn = document.getElementById('footer-modi-trigger');
  const badge = document.getElementById('footer-modi-badge');
  if (!audio) return;

  audio.pause();
  if (triggerBtn) triggerBtn.classList.remove('is-playing');
  if (badge) badge.textContent = 'PLAY';
}

function toggleModiAudio(userInitiated = true) {
  const audio = document.getElementById('footer-modi-audio');
  if (!audio) return;
  if (!audio.paused && !audio.ended) {
    pauseModiAudio();
  } else {
    playModiAudio(userInitiated);
  }
}

function initModiAudio() {
  const audio = document.getElementById('footer-modi-audio');
  const triggerBtn = document.getElementById('footer-modi-trigger');
  const badge = document.getElementById('footer-modi-badge');
  if (!audio) return;

  audio.addEventListener('ended', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) {
      badge.textContent = 'REPLAY';
      setTimeout(() => {
        if (audio.paused) badge.textContent = 'PLAY';
      }, 3500);
    }
    // Chain into "Wah Modi Ji Wah" sound
    setTimeout(() => {
      playWahModiAudio(false);
    }, 280);
  });

  audio.addEventListener('pause', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) badge.textContent = 'PLAY';
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleModiAudio(true);
    });
  }
}

// ==========================================================================
// 44. FOOTER FINALE EXTRA: WAH MODI JI WAH
// ==========================================================================
let hasPlayedWahModi = false;

function playWahModiAudio(userInitiated = false) {
  if (typeof soundEnabled !== 'undefined' && !soundEnabled) return;
  const audio = document.getElementById('footer-wahmodi-audio');
  const triggerBtn = document.getElementById('footer-wahmodi-trigger');
  const badge = document.getElementById('footer-wahmodi-badge');
  const heroAudio = document.getElementById('hero-intro-audio');
  const chaloAudio = document.getElementById('scroll-chalo-audio');
  const skillsAudio = document.getElementById('skills-gut-genug-audio');
  const depressionAudio = document.getElementById('approach-depression-audio');
  const cutbookAudio = document.getElementById('cutbook-happy-audio');
  const projectsAudio = document.getElementById('projects-maza-audio');
  const stackAudio = document.getElementById('stack-pirates-audio');
  const aboutAudio = document.getElementById('about-porichoy-audio');
  const eduAudio = document.getElementById('edu-damage-audio');
  const footerAudio = document.getElementById('footer-khatam-audio');
  const bosunAudio = document.getElementById('footer-bosun-audio');
  const khelaAudio = document.getElementById('footer-khela-audio');
  const messiAudio = document.getElementById('footer-messi-audio');
  const adeleAudio = document.getElementById('footer-adele-audio');
  const modiAudio = document.getElementById('footer-modi-audio');
  if (!audio) return;

  // Pause all other tracks when Wah Modi plays
  if (heroAudio && !heroAudio.paused) heroAudio.pause();
  if (chaloAudio && !chaloAudio.paused) chaloAudio.pause();
  if (skillsAudio && !skillsAudio.paused) skillsAudio.pause();
  if (depressionAudio && !depressionAudio.paused) depressionAudio.pause();
  if (cutbookAudio && !cutbookAudio.paused) cutbookAudio.pause();
  if (projectsAudio && !projectsAudio.paused) projectsAudio.pause();
  if (stackAudio && !stackAudio.paused) stackAudio.pause();
  if (aboutAudio && !aboutAudio.paused) aboutAudio.pause();
  if (eduAudio && !eduAudio.paused) eduAudio.pause();
  if (footerAudio && !footerAudio.paused) footerAudio.pause();
  if (bosunAudio && !bosunAudio.paused) bosunAudio.pause();
  if (khelaAudio && !khelaAudio.paused) khelaAudio.pause();
  if (messiAudio && !messiAudio.paused) messiAudio.pause();
  if (adeleAudio && !adeleAudio.paused) adeleAudio.pause();
  if (modiAudio && !modiAudio.paused) modiAudio.pause();
  const ronaBandAudio = document.getElementById('footer-ronaband-audio');
  if (ronaBandAudio && !ronaBandAudio.paused) ronaBandAudio.pause();
  const trumpAudio = document.getElementById('footer-trump-audio');
  if (trumpAudio && !trumpAudio.paused) trumpAudio.pause();

  if (typeof getAudioContext === 'function') {
    getAudioContext();
  }

  audio.volume = 0.95;
  audio.currentTime = 0;

  const promise = audio.play();
  if (promise !== undefined) {
    promise
      .then(() => {
        hasPlayedWahModi = true;
        if (triggerBtn) triggerBtn.classList.add('is-playing');
        if (badge) badge.textContent = 'PAUSE';

        const toast = document.getElementById('toast');
        if (toast) {
          toast.textContent = '👏 "Wah Modi Ji Wah! Wah!" // MASTERSTROKE';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 3000);
        }
      })
      .catch(() => {});
  }
}

function pauseWahModiAudio() {
  const audio = document.getElementById('footer-wahmodi-audio');
  const triggerBtn = document.getElementById('footer-wahmodi-trigger');
  const badge = document.getElementById('footer-wahmodi-badge');
  if (!audio) return;

  audio.pause();
  if (triggerBtn) triggerBtn.classList.remove('is-playing');
  if (badge) badge.textContent = 'PLAY';
}

function toggleWahModiAudio(userInitiated = true) {
  const audio = document.getElementById('footer-wahmodi-audio');
  if (!audio) return;
  if (!audio.paused && !audio.ended) {
    pauseWahModiAudio();
  } else {
    playWahModiAudio(userInitiated);
  }
}

function initWahModiAudio() {
  const audio = document.getElementById('footer-wahmodi-audio');
  const triggerBtn = document.getElementById('footer-wahmodi-trigger');
  const badge = document.getElementById('footer-wahmodi-badge');
  if (!audio) return;

  audio.addEventListener('ended', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) {
      badge.textContent = 'REPLAY';
      setTimeout(() => {
        if (audio.paused) badge.textContent = 'PLAY';
      }, 3500);
    }
    // Chain into "Modi Ji Rona Band Kijiye" sound
    setTimeout(() => {
      playRonaBandAudio(false);
    }, 280);
  });

  audio.addEventListener('pause', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) badge.textContent = 'PLAY';
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleWahModiAudio(true);
    });
  }
}

// ==========================================================================
// 45. FOOTER FINALE EXTRA: MODI JI RONA BAND KIJIYE
// ==========================================================================
let hasPlayedRonaBand = false;

function playRonaBandAudio(userInitiated = false) {
  if (typeof soundEnabled !== 'undefined' && !soundEnabled) return;
  const audio = document.getElementById('footer-ronaband-audio');
  const triggerBtn = document.getElementById('footer-ronaband-trigger');
  const badge = document.getElementById('footer-ronaband-badge');
  const heroAudio = document.getElementById('hero-intro-audio');
  const chaloAudio = document.getElementById('scroll-chalo-audio');
  const skillsAudio = document.getElementById('skills-gut-genug-audio');
  const depressionAudio = document.getElementById('approach-depression-audio');
  const cutbookAudio = document.getElementById('cutbook-happy-audio');
  const projectsAudio = document.getElementById('projects-maza-audio');
  const stackAudio = document.getElementById('stack-pirates-audio');
  const aboutAudio = document.getElementById('about-porichoy-audio');
  const eduAudio = document.getElementById('edu-damage-audio');
  const footerAudio = document.getElementById('footer-khatam-audio');
  const bosunAudio = document.getElementById('footer-bosun-audio');
  const khelaAudio = document.getElementById('footer-khela-audio');
  const messiAudio = document.getElementById('footer-messi-audio');
  const adeleAudio = document.getElementById('footer-adele-audio');
  const modiAudio = document.getElementById('footer-modi-audio');
  const wahModiAudio = document.getElementById('footer-wahmodi-audio');
  if (!audio) return;

  // Pause all other tracks when Rona Band plays
  if (heroAudio && !heroAudio.paused) heroAudio.pause();
  if (chaloAudio && !chaloAudio.paused) chaloAudio.pause();
  if (skillsAudio && !skillsAudio.paused) skillsAudio.pause();
  if (depressionAudio && !depressionAudio.paused) depressionAudio.pause();
  if (cutbookAudio && !cutbookAudio.paused) cutbookAudio.pause();
  if (projectsAudio && !projectsAudio.paused) projectsAudio.pause();
  if (stackAudio && !stackAudio.paused) stackAudio.pause();
  if (aboutAudio && !aboutAudio.paused) aboutAudio.pause();
  if (eduAudio && !eduAudio.paused) eduAudio.pause();
  if (footerAudio && !footerAudio.paused) footerAudio.pause();
  if (bosunAudio && !bosunAudio.paused) bosunAudio.pause();
  if (khelaAudio && !khelaAudio.paused) khelaAudio.pause();
  if (messiAudio && !messiAudio.paused) messiAudio.pause();
  if (adeleAudio && !adeleAudio.paused) adeleAudio.pause();
  if (modiAudio && !modiAudio.paused) modiAudio.pause();
  if (wahModiAudio && !wahModiAudio.paused) wahModiAudio.pause();
  const trumpAudio = document.getElementById('footer-trump-audio');
  if (trumpAudio && !trumpAudio.paused) trumpAudio.pause();

  if (typeof getAudioContext === 'function') {
    getAudioContext();
  }

  audio.volume = 0.95;
  audio.currentTime = 0;

  const promise = audio.play();
  if (promise !== undefined) {
    promise
      .then(() => {
        hasPlayedRonaBand = true;
        if (triggerBtn) triggerBtn.classList.add('is-playing');
        if (badge) badge.textContent = 'PAUSE';

        const toast = document.getElementById('toast');
        if (toast) {
          toast.textContent = '😭 "Modi Ji, Rona Band Kijiye!" // REALITY CHECK';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 3000);
        }
      })
      .catch(() => {});
  }
}

function pauseRonaBandAudio() {
  const audio = document.getElementById('footer-ronaband-audio');
  const triggerBtn = document.getElementById('footer-ronaband-trigger');
  const badge = document.getElementById('footer-ronaband-badge');
  if (!audio) return;

  audio.pause();
  if (triggerBtn) triggerBtn.classList.remove('is-playing');
  if (badge) badge.textContent = 'PLAY';
}

function toggleRonaBandAudio(userInitiated = true) {
  const audio = document.getElementById('footer-ronaband-audio');
  if (!audio) return;
  if (!audio.paused && !audio.ended) {
    pauseRonaBandAudio();
  } else {
    playRonaBandAudio(userInitiated);
  }
}

function initRonaBandAudio() {
  const audio = document.getElementById('footer-ronaband-audio');
  const triggerBtn = document.getElementById('footer-ronaband-trigger');
  const badge = document.getElementById('footer-ronaband-badge');
  if (!audio) return;

  audio.addEventListener('ended', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) {
      badge.textContent = 'REPLAY';
      setTimeout(() => {
        if (audio.paused) badge.textContent = 'PLAY';
      }, 3500);
    }
    // Chain into Donald Trump "We Are A Nation" sound
    setTimeout(() => {
      playTrumpAudio(false);
    }, 280);
  });

  audio.addEventListener('pause', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) badge.textContent = 'PLAY';
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleRonaBandAudio(true);
    });
  }
}

// ==========================================================================
// 46. FOOTER FINALE EXTRA: DONALD TRUMP - WE ARE A NATION
// ==========================================================================
let hasPlayedTrump = false;

function playTrumpAudio(userInitiated = false) {
  if (typeof soundEnabled !== 'undefined' && !soundEnabled) return;
  const audio = document.getElementById('footer-trump-audio');
  const triggerBtn = document.getElementById('footer-trump-trigger');
  const badge = document.getElementById('footer-trump-badge');
  const heroAudio = document.getElementById('hero-intro-audio');
  const chaloAudio = document.getElementById('scroll-chalo-audio');
  const skillsAudio = document.getElementById('skills-gut-genug-audio');
  const depressionAudio = document.getElementById('approach-depression-audio');
  const cutbookAudio = document.getElementById('cutbook-happy-audio');
  const projectsAudio = document.getElementById('projects-maza-audio');
  const stackAudio = document.getElementById('stack-pirates-audio');
  const aboutAudio = document.getElementById('about-porichoy-audio');
  const eduAudio = document.getElementById('edu-damage-audio');
  const footerAudio = document.getElementById('footer-khatam-audio');
  const bosunAudio = document.getElementById('footer-bosun-audio');
  const khelaAudio = document.getElementById('footer-khela-audio');
  const messiAudio = document.getElementById('footer-messi-audio');
  const adeleAudio = document.getElementById('footer-adele-audio');
  const modiAudio = document.getElementById('footer-modi-audio');
  const wahModiAudio = document.getElementById('footer-wahmodi-audio');
  const ronaBandAudio = document.getElementById('footer-ronaband-audio');
  if (!audio) return;

  // Pause all other tracks when Trump plays
  if (heroAudio && !heroAudio.paused) heroAudio.pause();
  if (chaloAudio && !chaloAudio.paused) chaloAudio.pause();
  if (skillsAudio && !skillsAudio.paused) skillsAudio.pause();
  if (depressionAudio && !depressionAudio.paused) depressionAudio.pause();
  if (cutbookAudio && !cutbookAudio.paused) cutbookAudio.pause();
  if (projectsAudio && !projectsAudio.paused) projectsAudio.pause();
  if (stackAudio && !stackAudio.paused) stackAudio.pause();
  if (aboutAudio && !aboutAudio.paused) aboutAudio.pause();
  if (eduAudio && !eduAudio.paused) eduAudio.pause();
  if (footerAudio && !footerAudio.paused) footerAudio.pause();
  if (bosunAudio && !bosunAudio.paused) bosunAudio.pause();
  if (khelaAudio && !khelaAudio.paused) khelaAudio.pause();
  if (messiAudio && !messiAudio.paused) messiAudio.pause();
  if (adeleAudio && !adeleAudio.paused) adeleAudio.pause();
  if (modiAudio && !modiAudio.paused) modiAudio.pause();
  if (wahModiAudio && !wahModiAudio.paused) wahModiAudio.pause();
  if (ronaBandAudio && !ronaBandAudio.paused) ronaBandAudio.pause();
  const bnpAudio = document.getElementById('footer-bnp-audio');
  if (bnpAudio && !bnpAudio.paused) bnpAudio.pause();

  if (typeof getAudioContext === 'function') {
    getAudioContext();
  }

  audio.volume = 0.95;
  audio.currentTime = 0;

  const promise = audio.play();
  if (promise !== undefined) {
    promise
      .then(() => {
        hasPlayedTrump = true;
        if (triggerBtn) triggerBtn.classList.add('is-playing');
        if (badge) badge.textContent = 'PAUSE';

        const toast = document.getElementById('toast');
        if (toast) {
          toast.textContent = '🇺🇸 "We Are A Nation That Has Lost Its Confidence..." // TRUMP';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 3200);
        }
      })
      .catch(() => {});
  }
}

function pauseTrumpAudio() {
  const audio = document.getElementById('footer-trump-audio');
  const triggerBtn = document.getElementById('footer-trump-trigger');
  const badge = document.getElementById('footer-trump-badge');
  if (!audio) return;

  audio.pause();
  if (triggerBtn) triggerBtn.classList.remove('is-playing');
  if (badge) badge.textContent = 'PLAY';
}

function toggleTrumpAudio(userInitiated = true) {
  const audio = document.getElementById('footer-trump-audio');
  if (!audio) return;
  if (!audio.paused && !audio.ended) {
    pauseTrumpAudio();
  } else {
    playTrumpAudio(userInitiated);
  }
}

function initTrumpAudio() {
  const audio = document.getElementById('footer-trump-audio');
  const triggerBtn = document.getElementById('footer-trump-trigger');
  const badge = document.getElementById('footer-trump-badge');
  if (!audio) return;

  audio.addEventListener('ended', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) {
      badge.textContent = 'REPLAY';
      setTimeout(() => {
        if (audio.paused) badge.textContent = 'PLAY';
      }, 3500);
    }
    // Chain into BNP sound
    setTimeout(() => {
      playBnpAudio(false);
    }, 280);
  });

  audio.addEventListener('pause', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) badge.textContent = 'PLAY';
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleTrumpAudio(true);
    });
  }
}

// ==========================================================================
// 47. FOOTER FINALE EXTRA: BNP
// ==========================================================================
let hasPlayedBnp = false;

function playBnpAudio(userInitiated = true) {
  const audio = document.getElementById('footer-bnp-audio');
  const triggerBtn = document.getElementById('footer-bnp-trigger');
  const badge = document.getElementById('footer-bnp-badge');
  const heroAudio = document.getElementById('hero-intro-audio');
  const chaloAudio = document.getElementById('scroll-chalo-audio');
  const skillsAudio = document.getElementById('skills-gutgenug-audio');
  const depressionAudio = document.getElementById('approach-depression-audio');
  const cutbookAudio = document.getElementById('cutbook-happy-audio');
  const projectsAudio = document.getElementById('projects-maza-audio');
  const stackAudio = document.getElementById('stack-pirates-audio');
  const aboutAudio = document.getElementById('about-porichoy-audio');
  const eduAudio = document.getElementById('edu-damage-audio');
  const footerAudio = document.getElementById('footer-khatam-audio');
  const bosunAudio = document.getElementById('footer-bosun-audio');
  const khelaAudio = document.getElementById('footer-khela-audio');
  const messiAudio = document.getElementById('footer-messi-audio');
  const adeleAudio = document.getElementById('footer-adele-audio');
  const modiAudio = document.getElementById('footer-modi-audio');
  const wahModiAudio = document.getElementById('footer-wahmodi-audio');
  const ronaBandAudio = document.getElementById('footer-ronaband-audio');
  const trumpAudio = document.getElementById('footer-trump-audio');
  if (!audio) return;

  // Pause all other tracks when BNP plays
  if (heroAudio && !heroAudio.paused) heroAudio.pause();
  if (chaloAudio && !chaloAudio.paused) chaloAudio.pause();
  if (skillsAudio && !skillsAudio.paused) skillsAudio.pause();
  if (depressionAudio && !depressionAudio.paused) depressionAudio.pause();
  if (cutbookAudio && !cutbookAudio.paused) cutbookAudio.pause();
  if (projectsAudio && !projectsAudio.paused) projectsAudio.pause();
  if (stackAudio && !stackAudio.paused) stackAudio.pause();
  if (aboutAudio && !aboutAudio.paused) aboutAudio.pause();
  if (eduAudio && !eduAudio.paused) eduAudio.pause();
  if (footerAudio && !footerAudio.paused) footerAudio.pause();
  if (bosunAudio && !bosunAudio.paused) bosunAudio.pause();
  if (khelaAudio && !khelaAudio.paused) khelaAudio.pause();
  if (messiAudio && !messiAudio.paused) messiAudio.pause();
  if (adeleAudio && !adeleAudio.paused) adeleAudio.pause();
  if (modiAudio && !modiAudio.paused) modiAudio.pause();
  if (wahModiAudio && !wahModiAudio.paused) wahModiAudio.pause();
  if (ronaBandAudio && !ronaBandAudio.paused) ronaBandAudio.pause();
  if (trumpAudio && !trumpAudio.paused) trumpAudio.pause();
  const putinAudio = document.getElementById('footer-putin-audio');
  if (putinAudio && !putinAudio.paused) putinAudio.pause();

  if (typeof getAudioContext === 'function') {
    getAudioContext();
  }

  audio.volume = 0.95;
  audio.currentTime = 0;

  const promise = audio.play();
  if (promise !== undefined) {
    promise
      .then(() => {
        hasPlayedBnp = true;
        if (triggerBtn) triggerBtn.classList.add('is-playing');
        if (badge) badge.textContent = 'PAUSE';

        const toast = document.getElementById('toast');
        if (toast) {
          toast.textContent = '🇧🇩 "BNP!" // DHAKA SOUNDBOARD';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 3000);
        }
      })
      .catch(() => {});
  }
}

function pauseBnpAudio() {
  const audio = document.getElementById('footer-bnp-audio');
  const triggerBtn = document.getElementById('footer-bnp-trigger');
  const badge = document.getElementById('footer-bnp-badge');
  if (!audio) return;

  audio.pause();
  if (triggerBtn) triggerBtn.classList.remove('is-playing');
  if (badge) badge.textContent = 'PLAY';
}

function toggleBnpAudio(userInitiated = true) {
  const audio = document.getElementById('footer-bnp-audio');
  if (!audio) return;
  if (!audio.paused && !audio.ended) {
    pauseBnpAudio();
  } else {
    playBnpAudio(userInitiated);
  }
}

function initBnpAudio() {
  const audio = document.getElementById('footer-bnp-audio');
  const triggerBtn = document.getElementById('footer-bnp-trigger');
  const badge = document.getElementById('footer-bnp-badge');
  if (!audio) return;

  audio.addEventListener('ended', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) {
      badge.textContent = 'REPLAY';
      setTimeout(() => {
        if (audio.paused) badge.textContent = 'PLAY';
      }, 3500);
    }
    // Chain into Wide Putin sound
    setTimeout(() => {
      playPutinAudio(false);
    }, 280);
  });

  audio.addEventListener('pause', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) badge.textContent = 'PLAY';
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleBnpAudio(true);
    });
  }
}

// ==========================================================================
// 48. FOOTER FINALE EXTRA: WIDE PUTIN BASS BOOSTED
// ==========================================================================
let hasPlayedPutin = false;

function playPutinAudio(userInitiated = true) {
  const audio = document.getElementById('footer-putin-audio');
  const triggerBtn = document.getElementById('footer-putin-trigger');
  const badge = document.getElementById('footer-putin-badge');
  const heroAudio = document.getElementById('hero-intro-audio');
  const chaloAudio = document.getElementById('scroll-chalo-audio');
  const skillsAudio = document.getElementById('skills-gutgenug-audio');
  const depressionAudio = document.getElementById('approach-depression-audio');
  const cutbookAudio = document.getElementById('cutbook-happy-audio');
  const projectsAudio = document.getElementById('projects-maza-audio');
  const stackAudio = document.getElementById('stack-pirates-audio');
  const aboutAudio = document.getElementById('about-porichoy-audio');
  const eduAudio = document.getElementById('edu-damage-audio');
  const footerAudio = document.getElementById('footer-khatam-audio');
  const bosunAudio = document.getElementById('footer-bosun-audio');
  const khelaAudio = document.getElementById('footer-khela-audio');
  const messiAudio = document.getElementById('footer-messi-audio');
  const adeleAudio = document.getElementById('footer-adele-audio');
  const modiAudio = document.getElementById('footer-modi-audio');
  const wahModiAudio = document.getElementById('footer-wahmodi-audio');
  const ronaBandAudio = document.getElementById('footer-ronaband-audio');
  const trumpAudio = document.getElementById('footer-trump-audio');
  const bnpAudio = document.getElementById('footer-bnp-audio');
  if (!audio) return;

  // Pause all other tracks when Wide Putin plays
  if (heroAudio && !heroAudio.paused) heroAudio.pause();
  if (chaloAudio && !chaloAudio.paused) chaloAudio.pause();
  if (skillsAudio && !skillsAudio.paused) skillsAudio.pause();
  if (depressionAudio && !depressionAudio.paused) depressionAudio.pause();
  if (cutbookAudio && !cutbookAudio.paused) cutbookAudio.pause();
  if (projectsAudio && !projectsAudio.paused) projectsAudio.pause();
  if (stackAudio && !stackAudio.paused) stackAudio.pause();
  if (aboutAudio && !aboutAudio.paused) aboutAudio.pause();
  if (eduAudio && !eduAudio.paused) eduAudio.pause();
  if (footerAudio && !footerAudio.paused) footerAudio.pause();
  if (bosunAudio && !bosunAudio.paused) bosunAudio.pause();
  if (khelaAudio && !khelaAudio.paused) khelaAudio.pause();
  if (messiAudio && !messiAudio.paused) messiAudio.pause();
  if (adeleAudio && !adeleAudio.paused) adeleAudio.pause();
  if (modiAudio && !modiAudio.paused) modiAudio.pause();
  if (wahModiAudio && !wahModiAudio.paused) wahModiAudio.pause();
  if (ronaBandAudio && !ronaBandAudio.paused) ronaBandAudio.pause();
  if (trumpAudio && !trumpAudio.paused) trumpAudio.pause();
  if (bnpAudio && !bnpAudio.paused) bnpAudio.pause();
  const chinaAudio = document.getElementById('footer-china-audio');
  if (chinaAudio && !chinaAudio.paused) chinaAudio.pause();

  if (typeof getAudioContext === 'function') {
    getAudioContext();
  }

  audio.volume = 0.95;
  audio.currentTime = 0;

  const promise = audio.play();
  if (promise !== undefined) {
    promise
      .then(() => {
        hasPlayedPutin = true;
        if (triggerBtn) triggerBtn.classList.add('is-playing');
        if (badge) badge.textContent = 'PAUSE';

        const toast = document.getElementById('toast');
        if (toast) {
          toast.textContent = '🇷🇺 "Wide Putin Walking" // MAXIMUM BASS';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 3200);
        }
      })
      .catch(() => {});
  }
}

function pausePutinAudio() {
  const audio = document.getElementById('footer-putin-audio');
  const triggerBtn = document.getElementById('footer-putin-trigger');
  const badge = document.getElementById('footer-putin-badge');
  if (!audio) return;

  audio.pause();
  if (triggerBtn) triggerBtn.classList.remove('is-playing');
  if (badge) badge.textContent = 'PLAY';
}

function togglePutinAudio(userInitiated = true) {
  const audio = document.getElementById('footer-putin-audio');
  if (!audio) return;
  if (!audio.paused && !audio.ended) {
    pausePutinAudio();
  } else {
    playPutinAudio(userInitiated);
  }
}

function initPutinAudio() {
  const audio = document.getElementById('footer-putin-audio');
  const triggerBtn = document.getElementById('footer-putin-trigger');
  const badge = document.getElementById('footer-putin-badge');
  if (!audio) return;

  audio.addEventListener('ended', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) {
      badge.textContent = 'REPLAY';
      setTimeout(() => {
        if (audio.paused) badge.textContent = 'PLAY';
      }, 3500);
    }
    // Chain into Donald Trump "Made In China" sound
    setTimeout(() => {
      playChinaAudio(false);
    }, 280);
  });

  audio.addEventListener('pause', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) badge.textContent = 'PLAY';
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      togglePutinAudio(true);
    });
  }
}

// ==========================================================================
// 49. FOOTER FINALE EXTRA: DONALD TRUMP - MADE IN CHINA
// ==========================================================================
let hasPlayedChina = false;

function playChinaAudio(userInitiated = true) {
  const audio = document.getElementById('footer-china-audio');
  const triggerBtn = document.getElementById('footer-china-trigger');
  const badge = document.getElementById('footer-china-badge');
  const heroAudio = document.getElementById('hero-intro-audio');
  const chaloAudio = document.getElementById('scroll-chalo-audio');
  const skillsAudio = document.getElementById('skills-gutgenug-audio');
  const depressionAudio = document.getElementById('approach-depression-audio');
  const cutbookAudio = document.getElementById('cutbook-happy-audio');
  const projectsAudio = document.getElementById('projects-maza-audio');
  const stackAudio = document.getElementById('stack-pirates-audio');
  const aboutAudio = document.getElementById('about-porichoy-audio');
  const eduAudio = document.getElementById('edu-damage-audio');
  const footerAudio = document.getElementById('footer-khatam-audio');
  const bosunAudio = document.getElementById('footer-bosun-audio');
  const khelaAudio = document.getElementById('footer-khela-audio');
  const messiAudio = document.getElementById('footer-messi-audio');
  const adeleAudio = document.getElementById('footer-adele-audio');
  const modiAudio = document.getElementById('footer-modi-audio');
  const wahModiAudio = document.getElementById('footer-wahmodi-audio');
  const ronaBandAudio = document.getElementById('footer-ronaband-audio');
  const trumpAudio = document.getElementById('footer-trump-audio');
  const bnpAudio = document.getElementById('footer-bnp-audio');
  const putinAudio = document.getElementById('footer-putin-audio');
  if (!audio) return;

  // Pause all other tracks when China plays
  if (heroAudio && !heroAudio.paused) heroAudio.pause();
  if (chaloAudio && !chaloAudio.paused) chaloAudio.pause();
  if (skillsAudio && !skillsAudio.paused) skillsAudio.pause();
  if (depressionAudio && !depressionAudio.paused) depressionAudio.pause();
  if (cutbookAudio && !cutbookAudio.paused) cutbookAudio.pause();
  if (projectsAudio && !projectsAudio.paused) projectsAudio.pause();
  if (stackAudio && !stackAudio.paused) stackAudio.pause();
  if (aboutAudio && !aboutAudio.paused) aboutAudio.pause();
  if (eduAudio && !eduAudio.paused) eduAudio.pause();
  if (footerAudio && !footerAudio.paused) footerAudio.pause();
  if (bosunAudio && !bosunAudio.paused) bosunAudio.pause();
  if (khelaAudio && !khelaAudio.paused) khelaAudio.pause();
  if (messiAudio && !messiAudio.paused) messiAudio.pause();
  if (adeleAudio && !adeleAudio.paused) adeleAudio.pause();
  if (modiAudio && !modiAudio.paused) modiAudio.pause();
  if (wahModiAudio && !wahModiAudio.paused) wahModiAudio.pause();
  if (ronaBandAudio && !ronaBandAudio.paused) ronaBandAudio.pause();
  if (trumpAudio && !trumpAudio.paused) trumpAudio.pause();
  if (bnpAudio && !bnpAudio.paused) bnpAudio.pause();
  if (putinAudio && !putinAudio.paused) putinAudio.pause();
  const dogsCatsAudio = document.getElementById('footer-dogscats-audio');
  if (dogsCatsAudio && !dogsCatsAudio.paused) dogsCatsAudio.pause();

  if (typeof getAudioContext === 'function') {
    getAudioContext();
  }

  audio.volume = 0.95;
  audio.currentTime = 0;

  const promise = audio.play();
  if (promise !== undefined) {
    promise
      .then(() => {
        hasPlayedChina = true;
        if (triggerBtn) triggerBtn.classList.add('is-playing');
        if (badge) badge.textContent = 'PAUSE';

        const toast = document.getElementById('toast');
        if (toast) {
          toast.textContent = '🇨🇳 "China... China, China!" // TRUMP';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 3000);
        }
      })
      .catch(() => {});
  }
}

function pauseChinaAudio() {
  const audio = document.getElementById('footer-china-audio');
  const triggerBtn = document.getElementById('footer-china-trigger');
  const badge = document.getElementById('footer-china-badge');
  if (!audio) return;

  audio.pause();
  if (triggerBtn) triggerBtn.classList.remove('is-playing');
  if (badge) badge.textContent = 'PLAY';
}

function toggleChinaAudio(userInitiated = true) {
  const audio = document.getElementById('footer-china-audio');
  if (!audio) return;
  if (!audio.paused && !audio.ended) {
    pauseChinaAudio();
  } else {
    playChinaAudio(userInitiated);
  }
}

function initChinaAudio() {
  const audio = document.getElementById('footer-china-audio');
  const triggerBtn = document.getElementById('footer-china-trigger');
  const badge = document.getElementById('footer-china-badge');
  if (!audio) return;

  audio.addEventListener('ended', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) {
      badge.textContent = 'REPLAY';
      setTimeout(() => {
        if (audio.paused) badge.textContent = 'PLAY';
      }, 3500);
    }
    // Chain into Donald Trump "Dogs & Cats" sound
    setTimeout(() => {
      playDogsCatsAudio(false);
    }, 280);
  });

  audio.addEventListener('pause', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) badge.textContent = 'PLAY';
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleChinaAudio(true);
    });
  }
}

// ==========================================================================
// 50. FOOTER FINALE EXTRA: DONALD TRUMP - DOGS & CATS
// ==========================================================================
let hasPlayedDogsCats = false;

function playDogsCatsAudio(userInitiated = true) {
  const audio = document.getElementById('footer-dogscats-audio');
  const triggerBtn = document.getElementById('footer-dogscats-trigger');
  const badge = document.getElementById('footer-dogscats-badge');
  const heroAudio = document.getElementById('hero-intro-audio');
  const chaloAudio = document.getElementById('scroll-chalo-audio');
  const skillsAudio = document.getElementById('skills-gutgenug-audio');
  const depressionAudio = document.getElementById('approach-depression-audio');
  const cutbookAudio = document.getElementById('cutbook-happy-audio');
  const projectsAudio = document.getElementById('projects-maza-audio');
  const stackAudio = document.getElementById('stack-pirates-audio');
  const aboutAudio = document.getElementById('about-porichoy-audio');
  const eduAudio = document.getElementById('edu-damage-audio');
  const footerAudio = document.getElementById('footer-khatam-audio');
  const bosunAudio = document.getElementById('footer-bosun-audio');
  const khelaAudio = document.getElementById('footer-khela-audio');
  const messiAudio = document.getElementById('footer-messi-audio');
  const adeleAudio = document.getElementById('footer-adele-audio');
  const modiAudio = document.getElementById('footer-modi-audio');
  const wahModiAudio = document.getElementById('footer-wahmodi-audio');
  const ronaBandAudio = document.getElementById('footer-ronaband-audio');
  const trumpAudio = document.getElementById('footer-trump-audio');
  const bnpAudio = document.getElementById('footer-bnp-audio');
  const putinAudio = document.getElementById('footer-putin-audio');
  const chinaAudio = document.getElementById('footer-china-audio');
  if (!audio) return;

  // Pause all other tracks when Dogs & Cats plays
  if (heroAudio && !heroAudio.paused) heroAudio.pause();
  if (chaloAudio && !chaloAudio.paused) chaloAudio.pause();
  if (skillsAudio && !skillsAudio.paused) skillsAudio.pause();
  if (depressionAudio && !depressionAudio.paused) depressionAudio.pause();
  if (cutbookAudio && !cutbookAudio.paused) cutbookAudio.pause();
  if (projectsAudio && !projectsAudio.paused) projectsAudio.pause();
  if (stackAudio && !stackAudio.paused) stackAudio.pause();
  if (aboutAudio && !aboutAudio.paused) aboutAudio.pause();
  if (eduAudio && !eduAudio.paused) eduAudio.pause();
  if (footerAudio && !footerAudio.paused) footerAudio.pause();
  if (bosunAudio && !bosunAudio.paused) bosunAudio.pause();
  if (khelaAudio && !khelaAudio.paused) khelaAudio.pause();
  if (messiAudio && !messiAudio.paused) messiAudio.pause();
  if (adeleAudio && !adeleAudio.paused) adeleAudio.pause();
  if (modiAudio && !modiAudio.paused) modiAudio.pause();
  if (wahModiAudio && !wahModiAudio.paused) wahModiAudio.pause();
  if (ronaBandAudio && !ronaBandAudio.paused) ronaBandAudio.pause();
  if (trumpAudio && !trumpAudio.paused) trumpAudio.pause();
  if (bnpAudio && !bnpAudio.paused) bnpAudio.pause();
  if (putinAudio && !putinAudio.paused) putinAudio.pause();
  if (chinaAudio && !chinaAudio.paused) chinaAudio.pause();
  const boboAudio = document.getElementById('footer-bobo-audio');
  if (boboAudio && !boboAudio.paused) boboAudio.pause();

  if (typeof getAudioContext === 'function') {
    getAudioContext();
  }

  audio.volume = 0.95;
  audio.currentTime = 0;

  const promise = audio.play();
  if (promise !== undefined) {
    promise
      .then(() => {
        hasPlayedDogsCats = true;
        if (triggerBtn) triggerBtn.classList.add('is-playing');
        if (badge) badge.textContent = 'PAUSE';

        const toast = document.getElementById('toast');
        if (toast) {
          toast.textContent = '🐕🐈 "They\'re Eating the Dogs, They\'re Eating the Cats!" // TRUMP';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 3200);
        }
      })
      .catch(() => {});
  }
}

function pauseDogsCatsAudio() {
  const audio = document.getElementById('footer-dogscats-audio');
  const triggerBtn = document.getElementById('footer-dogscats-trigger');
  const badge = document.getElementById('footer-dogscats-badge');
  if (!audio) return;

  audio.pause();
  if (triggerBtn) triggerBtn.classList.remove('is-playing');
  if (badge) badge.textContent = 'PLAY';
}

function toggleDogsCatsAudio(userInitiated = true) {
  const audio = document.getElementById('footer-dogscats-audio');
  if (!audio) return;
  if (!audio.paused && !audio.ended) {
    pauseDogsCatsAudio();
  } else {
    playDogsCatsAudio(userInitiated);
  }
}

function initDogsCatsAudio() {
  const audio = document.getElementById('footer-dogscats-audio');
  const triggerBtn = document.getElementById('footer-dogscats-trigger');
  const badge = document.getElementById('footer-dogscats-badge');
  if (!audio) return;

  audio.addEventListener('ended', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) {
      badge.textContent = 'REPLAY';
      setTimeout(() => {
        if (audio.paused) badge.textContent = 'PLAY';
      }, 3500);
    }
    // Chain into Lionel Messi "Qué Mirás Bobo" sound
    setTimeout(() => {
      playBoboAudio(false);
    }, 280);
  });

  audio.addEventListener('pause', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) badge.textContent = 'PLAY';
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleDogsCatsAudio(true);
    });
  }
}

// ==========================================================================
// 51. FOOTER FINALE EXTRA: LIONEL MESSI - QUÉ MIRÁS BOBO
// ==========================================================================
let hasPlayedBobo = false;

function playBoboAudio(userInitiated = true) {
  const audio = document.getElementById('footer-bobo-audio');
  const triggerBtn = document.getElementById('footer-bobo-trigger');
  const badge = document.getElementById('footer-bobo-badge');
  const heroAudio = document.getElementById('hero-intro-audio');
  const chaloAudio = document.getElementById('scroll-chalo-audio');
  const skillsAudio = document.getElementById('skills-gutgenug-audio');
  const depressionAudio = document.getElementById('approach-depression-audio');
  const cutbookAudio = document.getElementById('cutbook-happy-audio');
  const projectsAudio = document.getElementById('projects-maza-audio');
  const stackAudio = document.getElementById('stack-pirates-audio');
  const aboutAudio = document.getElementById('about-porichoy-audio');
  const eduAudio = document.getElementById('edu-damage-audio');
  const footerAudio = document.getElementById('footer-khatam-audio');
  const bosunAudio = document.getElementById('footer-bosun-audio');
  const khelaAudio = document.getElementById('footer-khela-audio');
  const messiAudio = document.getElementById('footer-messi-audio');
  const adeleAudio = document.getElementById('footer-adele-audio');
  const modiAudio = document.getElementById('footer-modi-audio');
  const wahModiAudio = document.getElementById('footer-wahmodi-audio');
  const ronaBandAudio = document.getElementById('footer-ronaband-audio');
  const trumpAudio = document.getElementById('footer-trump-audio');
  const bnpAudio = document.getElementById('footer-bnp-audio');
  const putinAudio = document.getElementById('footer-putin-audio');
  const chinaAudio = document.getElementById('footer-china-audio');
  const dogsCatsAudio = document.getElementById('footer-dogscats-audio');
  if (!audio) return;

  // Pause all other tracks when Bobo plays
  if (heroAudio && !heroAudio.paused) heroAudio.pause();
  if (chaloAudio && !chaloAudio.paused) chaloAudio.pause();
  if (skillsAudio && !skillsAudio.paused) skillsAudio.pause();
  if (depressionAudio && !depressionAudio.paused) depressionAudio.pause();
  if (cutbookAudio && !cutbookAudio.paused) cutbookAudio.pause();
  if (projectsAudio && !projectsAudio.paused) projectsAudio.pause();
  if (stackAudio && !stackAudio.paused) stackAudio.pause();
  if (aboutAudio && !aboutAudio.paused) aboutAudio.pause();
  if (eduAudio && !eduAudio.paused) eduAudio.pause();
  if (footerAudio && !footerAudio.paused) footerAudio.pause();
  if (bosunAudio && !bosunAudio.paused) bosunAudio.pause();
  if (khelaAudio && !khelaAudio.paused) khelaAudio.pause();
  if (messiAudio && !messiAudio.paused) messiAudio.pause();
  if (adeleAudio && !adeleAudio.paused) adeleAudio.pause();
  if (modiAudio && !modiAudio.paused) modiAudio.pause();
  if (wahModiAudio && !wahModiAudio.paused) wahModiAudio.pause();
  if (ronaBandAudio && !ronaBandAudio.paused) ronaBandAudio.pause();
  if (trumpAudio && !trumpAudio.paused) trumpAudio.pause();
  if (bnpAudio && !bnpAudio.paused) bnpAudio.pause();
  if (putinAudio && !putinAudio.paused) putinAudio.pause();
  if (chinaAudio && !chinaAudio.paused) chinaAudio.pause();
  if (dogsCatsAudio && !dogsCatsAudio.paused) dogsCatsAudio.pause();
  const ragKorlaAudio = document.getElementById('footer-ragkorla-audio');
  if (ragKorlaAudio && !ragKorlaAudio.paused) ragKorlaAudio.pause();

  if (typeof getAudioContext === 'function') {
    getAudioContext();
  }

  audio.volume = 0.95;
  audio.currentTime = 0;

  const promise = audio.play();
  if (promise !== undefined) {
    promise
      .then(() => {
        hasPlayedBobo = true;
        if (triggerBtn) triggerBtn.classList.add('is-playing');
        if (badge) badge.textContent = 'PAUSE';

        const toast = document.getElementById('toast');
        if (toast) {
          toast.textContent = '🇦🇷 "¿Qué Mirás, Bobo? ¡Andá Pa\' Allá, Bobo!" // MESSI';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 3200);
        }
      })
      .catch(() => {});
  }
}

function pauseBoboAudio() {
  const audio = document.getElementById('footer-bobo-audio');
  const triggerBtn = document.getElementById('footer-bobo-trigger');
  const badge = document.getElementById('footer-bobo-badge');
  if (!audio) return;

  audio.pause();
  if (triggerBtn) triggerBtn.classList.remove('is-playing');
  if (badge) badge.textContent = 'PLAY';
}

function toggleBoboAudio(userInitiated = true) {
  const audio = document.getElementById('footer-bobo-audio');
  if (!audio) return;
  if (!audio.paused && !audio.ended) {
    pauseBoboAudio();
  } else {
    playBoboAudio(userInitiated);
  }
}

function initBoboAudio() {
  const audio = document.getElementById('footer-bobo-audio');
  const triggerBtn = document.getElementById('footer-bobo-trigger');
  const badge = document.getElementById('footer-bobo-badge');
  if (!audio) return;

  audio.addEventListener('ended', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) {
      badge.textContent = 'REPLAY';
      setTimeout(() => {
        if (audio.paused) badge.textContent = 'PLAY';
      }, 3500);
    }
    // Chain into Rag Korla sound
    setTimeout(() => {
      playRagKorlaAudio(false);
    }, 280);
  });

  audio.addEventListener('pause', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) badge.textContent = 'PLAY';
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleBoboAudio(true);
    });
  }
}

// ==========================================================================
// 52. FOOTER FINALE EXTRA: RAG KORLA
// ==========================================================================
let hasPlayedRagKorla = false;

function playRagKorlaAudio(userInitiated = true) {
  const audio = document.getElementById('footer-ragkorla-audio');
  const triggerBtn = document.getElementById('footer-ragkorla-trigger');
  const badge = document.getElementById('footer-ragkorla-badge');
  const heroAudio = document.getElementById('hero-intro-audio');
  const chaloAudio = document.getElementById('scroll-chalo-audio');
  const skillsAudio = document.getElementById('skills-gutgenug-audio');
  const depressionAudio = document.getElementById('approach-depression-audio');
  const cutbookAudio = document.getElementById('cutbook-happy-audio');
  const projectsAudio = document.getElementById('projects-maza-audio');
  const stackAudio = document.getElementById('stack-pirates-audio');
  const aboutAudio = document.getElementById('about-porichoy-audio');
  const eduAudio = document.getElementById('edu-damage-audio');
  const footerAudio = document.getElementById('footer-khatam-audio');
  const bosunAudio = document.getElementById('footer-bosun-audio');
  const khelaAudio = document.getElementById('footer-khela-audio');
  const messiAudio = document.getElementById('footer-messi-audio');
  const adeleAudio = document.getElementById('footer-adele-audio');
  const modiAudio = document.getElementById('footer-modi-audio');
  const wahModiAudio = document.getElementById('footer-wahmodi-audio');
  const ronaBandAudio = document.getElementById('footer-ronaband-audio');
  const trumpAudio = document.getElementById('footer-trump-audio');
  const bnpAudio = document.getElementById('footer-bnp-audio');
  const putinAudio = document.getElementById('footer-putin-audio');
  const chinaAudio = document.getElementById('footer-china-audio');
  const dogsCatsAudio = document.getElementById('footer-dogscats-audio');
  const boboAudio = document.getElementById('footer-bobo-audio');
  if (!audio) return;

  // Pause all other tracks when Rag Korla plays
  if (heroAudio && !heroAudio.paused) heroAudio.pause();
  if (chaloAudio && !chaloAudio.paused) chaloAudio.pause();
  if (skillsAudio && !skillsAudio.paused) skillsAudio.pause();
  if (depressionAudio && !depressionAudio.paused) depressionAudio.pause();
  if (cutbookAudio && !cutbookAudio.paused) cutbookAudio.pause();
  if (projectsAudio && !projectsAudio.paused) projectsAudio.pause();
  if (stackAudio && !stackAudio.paused) stackAudio.pause();
  if (aboutAudio && !aboutAudio.paused) aboutAudio.pause();
  if (eduAudio && !eduAudio.paused) eduAudio.pause();
  if (footerAudio && !footerAudio.paused) footerAudio.pause();
  if (bosunAudio && !bosunAudio.paused) bosunAudio.pause();
  if (khelaAudio && !khelaAudio.paused) khelaAudio.pause();
  if (messiAudio && !messiAudio.paused) messiAudio.pause();
  if (adeleAudio && !adeleAudio.paused) adeleAudio.pause();
  if (modiAudio && !modiAudio.paused) modiAudio.pause();
  if (wahModiAudio && !wahModiAudio.paused) wahModiAudio.pause();
  if (ronaBandAudio && !ronaBandAudio.paused) ronaBandAudio.pause();
  if (trumpAudio && !trumpAudio.paused) trumpAudio.pause();
  if (bnpAudio && !bnpAudio.paused) bnpAudio.pause();
  if (putinAudio && !putinAudio.paused) putinAudio.pause();
  if (chinaAudio && !chinaAudio.paused) chinaAudio.pause();
  if (dogsCatsAudio && !dogsCatsAudio.paused) dogsCatsAudio.pause();
  if (boboAudio && !boboAudio.paused) boboAudio.pause();
  const masudAudio = document.getElementById('footer-masud-audio');
  if (masudAudio && !masudAudio.paused) masudAudio.pause();

  if (typeof getAudioContext === 'function') {
    getAudioContext();
  }

  audio.volume = 0.95;
  audio.currentTime = 0;

  const promise = audio.play();
  if (promise !== undefined) {
    promise
      .then(() => {
        hasPlayedRagKorla = true;
        if (triggerBtn) triggerBtn.classList.add('is-playing');
        if (badge) badge.textContent = 'PAUSE';

        const toast = document.getElementById('toast');
        if (toast) {
          toast.textContent = '😤 "Rag Korla?" // MEME';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 3000);
        }
      })
      .catch(() => {});
  }
}

function pauseRagKorlaAudio() {
  const audio = document.getElementById('footer-ragkorla-audio');
  const triggerBtn = document.getElementById('footer-ragkorla-trigger');
  const badge = document.getElementById('footer-ragkorla-badge');
  if (!audio) return;

  audio.pause();
  if (triggerBtn) triggerBtn.classList.remove('is-playing');
  if (badge) badge.textContent = 'PLAY';
}

function toggleRagKorlaAudio(userInitiated = true) {
  const audio = document.getElementById('footer-ragkorla-audio');
  if (!audio) return;
  if (!audio.paused && !audio.ended) {
    pauseRagKorlaAudio();
  } else {
    playRagKorlaAudio(userInitiated);
  }
}

function initRagKorlaAudio() {
  const audio = document.getElementById('footer-ragkorla-audio');
  const triggerBtn = document.getElementById('footer-ragkorla-trigger');
  const badge = document.getElementById('footer-ragkorla-badge');
  if (!audio) return;

  audio.addEventListener('ended', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) {
      badge.textContent = 'REPLAY';
      setTimeout(() => {
        if (audio.paused) badge.textContent = 'PLAY';
      }, 3500);
    }
    // Chain into Bhalo Hoye Jao Masud sound
    setTimeout(() => {
      playMasudAudio(false);
    }, 280);
  });

  audio.addEventListener('pause', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) badge.textContent = 'PLAY';
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleRagKorlaAudio(true);
    });
  }
}

// ==========================================================================
// 53. FOOTER FINALE EXTRA: BHALO HOYE JAO MASUD
// ==========================================================================
let hasPlayedMasud = false;

function playMasudAudio(userInitiated = true) {
  const audio = document.getElementById('footer-masud-audio');
  const triggerBtn = document.getElementById('footer-masud-trigger');
  const badge = document.getElementById('footer-masud-badge');
  const heroAudio = document.getElementById('hero-intro-audio');
  const chaloAudio = document.getElementById('scroll-chalo-audio');
  const skillsAudio = document.getElementById('skills-gutgenug-audio');
  const depressionAudio = document.getElementById('approach-depression-audio');
  const cutbookAudio = document.getElementById('cutbook-happy-audio');
  const projectsAudio = document.getElementById('projects-maza-audio');
  const stackAudio = document.getElementById('stack-pirates-audio');
  const aboutAudio = document.getElementById('about-porichoy-audio');
  const eduAudio = document.getElementById('edu-damage-audio');
  const footerAudio = document.getElementById('footer-khatam-audio');
  const bosunAudio = document.getElementById('footer-bosun-audio');
  const khelaAudio = document.getElementById('footer-khela-audio');
  const messiAudio = document.getElementById('footer-messi-audio');
  const adeleAudio = document.getElementById('footer-adele-audio');
  const modiAudio = document.getElementById('footer-modi-audio');
  const wahModiAudio = document.getElementById('footer-wahmodi-audio');
  const ronaBandAudio = document.getElementById('footer-ronaband-audio');
  const trumpAudio = document.getElementById('footer-trump-audio');
  const bnpAudio = document.getElementById('footer-bnp-audio');
  const putinAudio = document.getElementById('footer-putin-audio');
  const chinaAudio = document.getElementById('footer-china-audio');
  const dogsCatsAudio = document.getElementById('footer-dogscats-audio');
  const boboAudio = document.getElementById('footer-bobo-audio');
  const ragKorlaAudio = document.getElementById('footer-ragkorla-audio');
  if (!audio) return;

  // Pause all other tracks when Masud plays
  if (heroAudio && !heroAudio.paused) heroAudio.pause();
  if (chaloAudio && !chaloAudio.paused) chaloAudio.pause();
  if (skillsAudio && !skillsAudio.paused) skillsAudio.pause();
  if (depressionAudio && !depressionAudio.paused) depressionAudio.pause();
  if (cutbookAudio && !cutbookAudio.paused) cutbookAudio.pause();
  if (projectsAudio && !projectsAudio.paused) projectsAudio.pause();
  if (stackAudio && !stackAudio.paused) stackAudio.pause();
  if (aboutAudio && !aboutAudio.paused) aboutAudio.pause();
  if (eduAudio && !eduAudio.paused) eduAudio.pause();
  if (footerAudio && !footerAudio.paused) footerAudio.pause();
  if (bosunAudio && !bosunAudio.paused) bosunAudio.pause();
  if (khelaAudio && !khelaAudio.paused) khelaAudio.pause();
  if (messiAudio && !messiAudio.paused) messiAudio.pause();
  if (adeleAudio && !adeleAudio.paused) adeleAudio.pause();
  if (modiAudio && !modiAudio.paused) modiAudio.pause();
  if (wahModiAudio && !wahModiAudio.paused) wahModiAudio.pause();
  if (ronaBandAudio && !ronaBandAudio.paused) ronaBandAudio.pause();
  if (trumpAudio && !trumpAudio.paused) trumpAudio.pause();
  if (bnpAudio && !bnpAudio.paused) bnpAudio.pause();
  if (putinAudio && !putinAudio.paused) putinAudio.pause();
  if (chinaAudio && !chinaAudio.paused) chinaAudio.pause();
  if (dogsCatsAudio && !dogsCatsAudio.paused) dogsCatsAudio.pause();
  if (boboAudio && !boboAudio.paused) boboAudio.pause();
  if (ragKorlaAudio && !ragKorlaAudio.paused) ragKorlaAudio.pause();
  const gxPanelAudio = document.getElementById('footer-gxpanel-audio');
  if (gxPanelAudio && !gxPanelAudio.paused) gxPanelAudio.pause();

  if (typeof getAudioContext === 'function') {
    getAudioContext();
  }

  audio.volume = 0.95;
  audio.currentTime = 0;

  const promise = audio.play();
  if (promise !== undefined) {
    promise
      .then(() => {
        hasPlayedMasud = true;
        if (triggerBtn) triggerBtn.classList.add('is-playing');
        if (badge) badge.textContent = 'PAUSE';

        const toast = document.getElementById('toast');
        if (toast) {
          toast.textContent = '🕶️ "ভালো হয়ে যাও মাসুদ, ভালো হয়ে যাও!" // ICONIC';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 3200);
        }
      })
      .catch(() => {});
  }
}

function pauseMasudAudio() {
  const audio = document.getElementById('footer-masud-audio');
  const triggerBtn = document.getElementById('footer-masud-trigger');
  const badge = document.getElementById('footer-masud-badge');
  if (!audio) return;

  audio.pause();
  if (triggerBtn) triggerBtn.classList.remove('is-playing');
  if (badge) badge.textContent = 'PLAY';
}

function toggleMasudAudio(userInitiated = true) {
  const audio = document.getElementById('footer-masud-audio');
  if (!audio) return;
  if (!audio.paused && !audio.ended) {
    pauseMasudAudio();
  } else {
    playMasudAudio(userInitiated);
  }
}

function initMasudAudio() {
  const audio = document.getElementById('footer-masud-audio');
  const triggerBtn = document.getElementById('footer-masud-trigger');
  const badge = document.getElementById('footer-masud-badge');
  if (!audio) return;

  audio.addEventListener('ended', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) {
      badge.textContent = 'REPLAY';
      setTimeout(() => {
        if (audio.paused) badge.textContent = 'PLAY';
      }, 3500);
    }
    // Chain into GX Panel sound
    setTimeout(() => {
      playGxPanelAudio(false);
    }, 280);
  });

  audio.addEventListener('pause', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) badge.textContent = 'PLAY';
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMasudAudio(true);
    });
  }
}

// ==========================================================================
// 54. FOOTER FINALE EXTRA: GX PANEL BANGLADESH
// ==========================================================================
let hasPlayedGxPanel = false;

function playGxPanelAudio(userInitiated = true) {
  const audio = document.getElementById('footer-gxpanel-audio');
  const triggerBtn = document.getElementById('footer-gxpanel-trigger');
  const badge = document.getElementById('footer-gxpanel-badge');
  const heroAudio = document.getElementById('hero-intro-audio');
  const chaloAudio = document.getElementById('scroll-chalo-audio');
  const skillsAudio = document.getElementById('skills-gutgenug-audio');
  const depressionAudio = document.getElementById('approach-depression-audio');
  const cutbookAudio = document.getElementById('cutbook-happy-audio');
  const projectsAudio = document.getElementById('projects-maza-audio');
  const stackAudio = document.getElementById('stack-pirates-audio');
  const aboutAudio = document.getElementById('about-porichoy-audio');
  const eduAudio = document.getElementById('edu-damage-audio');
  const footerAudio = document.getElementById('footer-khatam-audio');
  const bosunAudio = document.getElementById('footer-bosun-audio');
  const khelaAudio = document.getElementById('footer-khela-audio');
  const messiAudio = document.getElementById('footer-messi-audio');
  const adeleAudio = document.getElementById('footer-adele-audio');
  const modiAudio = document.getElementById('footer-modi-audio');
  const wahModiAudio = document.getElementById('footer-wahmodi-audio');
  const ronaBandAudio = document.getElementById('footer-ronaband-audio');
  const trumpAudio = document.getElementById('footer-trump-audio');
  const bnpAudio = document.getElementById('footer-bnp-audio');
  const putinAudio = document.getElementById('footer-putin-audio');
  const chinaAudio = document.getElementById('footer-china-audio');
  const dogsCatsAudio = document.getElementById('footer-dogscats-audio');
  const boboAudio = document.getElementById('footer-bobo-audio');
  const ragKorlaAudio = document.getElementById('footer-ragkorla-audio');
  const masudAudio = document.getElementById('footer-masud-audio');
  if (!audio) return;

  // Pause all other tracks when GX Panel plays
  if (heroAudio && !heroAudio.paused) heroAudio.pause();
  if (chaloAudio && !chaloAudio.paused) chaloAudio.pause();
  if (skillsAudio && !skillsAudio.paused) skillsAudio.pause();
  if (depressionAudio && !depressionAudio.paused) depressionAudio.pause();
  if (cutbookAudio && !cutbookAudio.paused) cutbookAudio.pause();
  if (projectsAudio && !projectsAudio.paused) projectsAudio.pause();
  if (stackAudio && !stackAudio.paused) stackAudio.pause();
  if (aboutAudio && !aboutAudio.paused) aboutAudio.pause();
  if (eduAudio && !eduAudio.paused) eduAudio.pause();
  if (footerAudio && !footerAudio.paused) footerAudio.pause();
  if (bosunAudio && !bosunAudio.paused) bosunAudio.pause();
  if (khelaAudio && !khelaAudio.paused) khelaAudio.pause();
  if (messiAudio && !messiAudio.paused) messiAudio.pause();
  if (adeleAudio && !adeleAudio.paused) adeleAudio.pause();
  if (modiAudio && !modiAudio.paused) modiAudio.pause();
  if (wahModiAudio && !wahModiAudio.paused) wahModiAudio.pause();
  if (ronaBandAudio && !ronaBandAudio.paused) ronaBandAudio.pause();
  if (trumpAudio && !trumpAudio.paused) trumpAudio.pause();
  if (bnpAudio && !bnpAudio.paused) bnpAudio.pause();
  if (putinAudio && !putinAudio.paused) putinAudio.pause();
  if (chinaAudio && !chinaAudio.paused) chinaAudio.pause();
  if (dogsCatsAudio && !dogsCatsAudio.paused) dogsCatsAudio.pause();
  if (boboAudio && !boboAudio.paused) boboAudio.pause();
  if (ragKorlaAudio && !ragKorlaAudio.paused) ragKorlaAudio.pause();
  if (masudAudio && !masudAudio.paused) masudAudio.pause();

  if (typeof getAudioContext === 'function') {
    getAudioContext();
  }

  audio.volume = 0.95;
  audio.currentTime = 0;

  const promise = audio.play();
  if (promise !== undefined) {
    promise
      .then(() => {
        hasPlayedGxPanel = true;
        if (triggerBtn) triggerBtn.classList.add('is-playing');
        if (badge) badge.textContent = 'PAUSE';

        const toast = document.getElementById('toast');
        if (toast) {
          toast.textContent = '🇧🇩🔥 "GX Panel Bangladesh!" // SYSTEM OVERLOAD';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 3200);
        }
      })
      .catch(() => {});
  }
}

function pauseGxPanelAudio() {
  const audio = document.getElementById('footer-gxpanel-audio');
  const triggerBtn = document.getElementById('footer-gxpanel-trigger');
  const badge = document.getElementById('footer-gxpanel-badge');
  if (!audio) return;

  audio.pause();
  if (triggerBtn) triggerBtn.classList.remove('is-playing');
  if (badge) badge.textContent = 'PLAY';
}

function toggleGxPanelAudio(userInitiated = true) {
  const audio = document.getElementById('footer-gxpanel-audio');
  if (!audio) return;
  if (!audio.paused && !audio.ended) {
    pauseGxPanelAudio();
  } else {
    playGxPanelAudio(userInitiated);
  }
}

function initGxPanelAudio() {
  const audio = document.getElementById('footer-gxpanel-audio');
  const triggerBtn = document.getElementById('footer-gxpanel-trigger');
  const badge = document.getElementById('footer-gxpanel-badge');
  if (!audio) return;

  audio.addEventListener('ended', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) {
      badge.textContent = 'REPLAY';
      setTimeout(() => {
        if (audio.paused) badge.textContent = 'PLAY';
      }, 3500);
    }
  });

  audio.addEventListener('pause', () => {
    if (triggerBtn) triggerBtn.classList.remove('is-playing');
    if (badge) badge.textContent = 'PLAY';
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleGxPanelAudio(true);
    });
  }
}

// ==========================================================================
// ENTRY POINT
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initHeroLedTitle();
  initNavJrLed();
  initMatrixCipher();
  initScrollLedReveal();
  initContactModal();
  initCaseStudyFilters();
  initCarouselSlider();
  initLiveClock();
  initSmoothScroll();
  initScrollReveal();
  initCardSpotlight();
  initMagneticDial();
  initGlobalCosmosCanvas();
  initScrollTelemetryAndConduit();
  initCutBookExplosion();
  initCutBookSimulator();
  initScrollCipherDecoders();
  initProjectMiniSimulators();
  initHeroParallax();
  initOrbitInteractivity();
  initScrollProgressBar();
  initMagneticButtons();
  initWebAudioSynthesizer();
  initHeroAudioIntro();
  initScrollChaloAudio();
  initSkillsGutGenugAudio();
  initApproachDepressionAudio();
  initCutBookHappyAudio();
  initProjectsMazaAudio();
  initStackPiratesAudio();
  initAboutPorichoyAudio();
  initEduDamageAudio();
  initFooterKhatamAudio();
  initEiBosunAudio();
  initFooterKhelaAudio();
  initAnkaraMessiAudio();
  initAdeleAudio();
  initModiAudio();
  initWahModiAudio();
  initRonaBandAudio();
  initTrumpAudio();
  initBnpAudio();
  initPutinAudio();
  initChinaAudio();
  initDogsCatsAudio();
  initBoboAudio();
  initRagKorlaAudio();
  initMasudAudio();
  initGxPanelAudio();
  initMagneticCursor();
  initCommandPalette();
  initStackBenchmarkInspector();
  initHeroStatsCounter();
  initHeroPortraitScanner();
  initCutBookStageStepper();
  initPlantDiseaseScanner();
  initAiNotesGenerator();
  initDhakaRadarTargetLock();
  initOverclockMode();
});




