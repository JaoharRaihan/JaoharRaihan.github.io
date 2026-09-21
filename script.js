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
// 16. HERO COSMOS CANVAS (TWINKLING STARS & OCCASIONAL SHOOTING STARS)
// ==========================================================================
function initHeroCosmosCanvas() {
  const canvas = document.getElementById('hero-cosmos-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let animId = null;

  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
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
    ctx.lineTo(0, -r * 0.75);
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
  const starsCount = Math.min(150, Math.max(80, Math.floor(window.innerWidth / 9)));
  const stars = [];
  
  for (let i = 0; i < starsCount; i++) {
    const tier = Math.random();
    let r, baseAlpha, twinkleSpeed, isDiamond, has8Points, baseSpike, rotSpeed, vy, vx;

    if (tier < 0.65) {
      // Tier 1: Micro dust pinpricks (65% - faint, gentle celestial drift)
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
      // Tier 2: Shimmering dot stars (20% - crisp silver/cyan pulses)
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
      // Tier 3: DIAMOND SPARKLE STARS (15% STANDARD - elegant, refined crystal flares)
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
        angle: (Math.PI / 180) * (Math.random() * 15 + 25), // ~30 deg downward
        alpha: 1.0,
        fadeSpeed: Math.random() * 0.015 + 0.012
      });
    }
  }

  // Periodic meteor spawn timer
  setInterval(spawnMeteor, 3800);

  // Mouse repulsion coordinates
  let mouseX = -1000;
  let mouseY = -1000;
  const heroStage = document.getElementById('hero');
  if (heroStage) {
    heroStage.addEventListener('mousemove', (e) => {
      const rect = heroStage.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    });
    heroStage.addEventListener('mouseleave', () => {
      mouseX = -1000;
      mouseY = -1000;
    });
  }

  let tick = 0;
  function loop() {
    tick++;
    ctx.clearRect(0, 0, width, height);

    // Draw and drift stars
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];

      // Slow organic celestial drift
      s.y += s.vy;
      s.x += s.vx;
      s.angle += s.rotSpeed;
      if (s.y < -15) {
        s.y = height + 15;
        s.x = Math.random() * width;
      }
      if (s.x < -15) s.x = width + 15;
      if (s.x > width + 15) s.x = -15;

      const alpha = s.baseAlpha + Math.sin(tick * s.twinkleSpeed + s.twinkleOffset) * 0.32;
      
      // Gentle mouse displacement
      let dx = mouseX - s.x;
      let dy = mouseY - s.y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      let offX = 0;
      let offY = 0;
      let extraSparkle = 0;
      if (dist < 160) {
        const force = (160 - dist) / 160;
        offX = -dx * force * 0.07;
        offY = -dy * force * 0.07;
        extraSparkle = force * 0.15; // 15% standard cursor-activated diamond burst
      }

      const clampedAlpha = Math.max(0.08, Math.min(1.0, alpha + extraSparkle));

      if (s.isDiamond) {
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
  initHeroCosmosCanvas();
  initHeroParallax();
  initOrbitInteractivity();
  initScrollProgressBar();
  initMagneticButtons();
});


