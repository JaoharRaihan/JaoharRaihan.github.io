// Mobile Final Touch - Performance & Polish Enhancements
// Advanced mobile optimization script for the ultimate mobile experience
// Author: GitHub Copilot

class MobileFinalTouch {
    constructor() {
        this.init();
    }

    init() {
        if (!this.isMobile()) return;
        
        this.setupScrollProgress();
        this.addMobileFeedback();
        this.initAdvancedAnimations();
        this.setupMobilePolish();
        this.addEasterEggs();
        this.optimizePerformance();
        this.setupAccessibilityEnhancements();
    }

    isMobile() {
        return window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    // Add scroll progress indicator
    setupScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'mobile-scroll-progress';
        progressBar.innerHTML = '<div class="mobile-scroll-progress-bar"></div>';
        document.body.appendChild(progressBar);

        const progressFill = progressBar.querySelector('.mobile-scroll-progress-bar');

        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            progressFill.style.width = `${Math.min(scrolled, 100)}%`;
        }, { passive: true });
    }

    // Add haptic feedback for supported devices
    addMobileFeedback() {
        if ('vibrate' in navigator) {
            document.addEventListener('touchstart', (e) => {
                const target = e.target.closest('.btn, .nav-link, .social-link');
                if (target) {
                    navigator.vibrate(10); // Subtle vibration
                }
            }, { passive: true });
        }

        // Add success feedback for form submissions
        document.addEventListener('submit', (e) => {
            const form = e.target;
            if (form.checkValidity()) {
                this.showSuccessFeedback(form);
                if ('vibrate' in navigator) {
                    navigator.vibrate([50, 100, 50]); // Success pattern
                }
            }
        });
    }

    // Initialize advanced mobile animations
    initAdvancedAnimations() {
        // Add cascade animation to sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const children = section.children;
            if (children.length > 1) {
                section.classList.add('mobile-cascade-animation');
            }
        });

        // Add floating animation to hero elements
        const heroElements = document.querySelectorAll('.hero .social-link, .hero .tech-icons i');
        heroElements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.2}s`;
            el.classList.add('mobile-float');
        });

        // Add breath animation to profile image
        const profileImg = document.querySelector('.hero-img-container');
        if (profileImg) {
            profileImg.classList.add('mobile-breath');
        }

        // Add glow effect to titles
        const titles = document.querySelectorAll('.section-title, .hero-title');
        titles.forEach(title => {
            title.classList.add('mobile-text-glow');
        });
    }

    // Setup mobile polish features
    setupMobilePolish() {
        // Add glass effect to cards
        const cards = document.querySelectorAll('.tech-card, .project-card, .edu-item, .cert-item');
        cards.forEach(card => {
            card.classList.add('mobile-glass-effect', 'mobile-micro-interaction');
        });

        // Add neon border to important buttons
        const primaryBtns = document.querySelectorAll('.btn-primary');
        primaryBtns.forEach(btn => {
            btn.classList.add('mobile-neon-border', 'mobile-magnetic-btn');
        });

        // Add sparkle effect to achievements
        const achievements = document.querySelectorAll('.cert-item, .edu-item');
        achievements.forEach(item => {
            item.classList.add('mobile-sparkle-effect');
        });

        // Enhance navigation items
        const navItems = document.querySelectorAll('.nav-link');
        navItems.forEach((item, index) => {
            item.classList.add('mobile-menu-item');
            item.style.animationDelay = `${index * 0.1}s`;
        });
    }

    // Add Easter eggs for engagement
    addEasterEggs() {
        let tapCount = 0;
        const profileImg = document.querySelector('.hero-img-container img');
        
        if (profileImg) {
            profileImg.addEventListener('click', () => {
                tapCount++;
                profileImg.classList.add('mobile-easter-egg');
                
                setTimeout(() => {
                    profileImg.classList.remove('mobile-easter-egg');
                }, 600);

                if (tapCount === 5) {
                    this.triggerEasterEgg();
                    tapCount = 0;
                }
            });
        }

        // Secret swipe pattern
        this.setupSecretGesture();
    }

    // Trigger special easter egg
    triggerEasterEgg() {
        const colors = ['var(--cyberpunk-blue)', 'var(--neon-purple)', 'var(--neon-green)', 'var(--digital-yellow)'];
        let colorIndex = 0;

        const interval = setInterval(() => {
            document.documentElement.style.setProperty('--cyberpunk-blue', colors[colorIndex]);
            colorIndex = (colorIndex + 1) % colors.length;
        }, 200);

        setTimeout(() => {
            clearInterval(interval);
            document.documentElement.style.setProperty('--cyberpunk-blue', '#05b4ffff');
            this.showNotification('🎉 Easter egg activated! Colors restored.', 'success');
        }, 3000);

        this.showNotification('🌈 Color party mode activated!', 'info');
    }

    // Setup secret gesture (triple swipe down)
    setupSecretGesture() {
        let swipeCount = 0;
        let lastSwipeTime = 0;

        document.addEventListener('touchstart', (e) => {
            this.startY = e.touches[0].clientY;
        }, { passive: true });

        document.addEventListener('touchend', (e) => {
            const endY = e.changedTouches[0].clientY;
            const diff = this.startY - endY;
            const now = Date.now();

            if (diff < -100 && now - lastSwipeTime < 1000) { // Swipe down
                swipeCount++;
                lastSwipeTime = now;

                if (swipeCount >= 3) {
                    this.activateDevMode();
                    swipeCount = 0;
                }
            } else if (now - lastSwipeTime > 1000) {
                swipeCount = 0;
            }
        }, { passive: true });
    }

    // Activate developer mode features
    activateDevMode() {
        document.body.classList.add('mobile-high-contrast');
        this.showNotification('🔧 Developer mode activated!', 'info');
        
        // Add performance monitor
        this.addPerformanceMonitor();
        
        // Show FPS counter
        this.showFPSCounter();
    }

    // Performance optimizations
    optimizePerformance() {
        // Lazy load images more aggressively
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.loading) {
                img.loading = 'lazy';
            }
        });

        // Optimize animations for low-end devices
        if (this.isLowEndDevice()) {
            document.body.classList.add('mobile-reduce-motion');
        }

        // Preload critical resources
        this.preloadCriticalResources();

        // Setup memory management
        this.setupMemoryManagement();
    }

    // Check if device is low-end
    isLowEndDevice() {
        return navigator.hardwareConcurrency <= 2 || navigator.deviceMemory <= 2;
    }

    // Preload critical resources
    preloadCriticalResources() {
        const criticalImages = [
            'assets/raihan.png',
            'assets/rr.jpeg'
        ];

        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }

    // Setup memory management
    setupMemoryManagement() {
        // Clean up inactive observers
        window.addEventListener('beforeunload', () => {
            if (this.observers) {
                this.observers.forEach(observer => observer.disconnect());
            }
        });

        // Monitor memory usage if available
        if ('memory' in performance) {
            setInterval(() => {
                const memInfo = performance.memory;
                if (memInfo.usedJSHeapSize / memInfo.totalJSHeapSize > 0.9) {
                    this.performGarbageCollection();
                }
            }, 30000);
        }
    }

    // Perform garbage collection optimizations
    performGarbageCollection() {
        // Remove unused event listeners
        const unusedElements = document.querySelectorAll('[data-mobile-cleanup]');
        unusedElements.forEach(el => {
            el.remove();
        });

        // Force garbage collection if available
        if (window.gc) {
            window.gc();
        }
    }

    // Add performance monitor
    addPerformanceMonitor() {
        const monitor = document.createElement('div');
        monitor.style.cssText = `
            position: fixed;
            top: 70px;
            right: 10px;
            background: rgba(0, 0, 0, 0.8);
            color: var(--cyberpunk-blue);
            padding: 8px;
            border-radius: 6px;
            font-size: 0.7rem;
            z-index: 10000;
            font-family: monospace;
        `;
        document.body.appendChild(monitor);

        setInterval(() => {
            const nav = performance.getEntriesByType('navigation')[0];
            const paint = performance.getEntriesByType('paint');
            
            monitor.innerHTML = `
                Load: ${Math.round(nav.loadEventEnd - nav.loadEventStart)}ms<br>
                FCP: ${paint.find(p => p.name === 'first-contentful-paint')?.startTime.toFixed(0) || 'N/A'}ms<br>
                Memory: ${this.getMemoryUsage()}
            `;
        }, 1000);
    }

    // Get memory usage
    getMemoryUsage() {
        if ('memory' in performance) {
            const used = (performance.memory.usedJSHeapSize / 1048576).toFixed(1);
            const total = (performance.memory.totalJSHeapSize / 1048576).toFixed(1);
            return `${used}/${total}MB`;
        }
        return 'N/A';
    }

    // Show FPS counter
    showFPSCounter() {
        let fps = 0;
        let lastTime = performance.now();
        let frameCount = 0;

        const fpsCounter = document.createElement('div');
        fpsCounter.style.cssText = `
            position: fixed;
            top: 130px;
            right: 10px;
            background: rgba(0, 0, 0, 0.8);
            color: var(--neon-green);
            padding: 8px;
            border-radius: 6px;
            font-size: 0.7rem;
            z-index: 10000;
            font-family: monospace;
        `;
        document.body.appendChild(fpsCounter);

        function calculateFPS() {
            const now = performance.now();
            frameCount++;

            if (now - lastTime >= 1000) {
                fps = Math.round((frameCount * 1000) / (now - lastTime));
                frameCount = 0;
                lastTime = now;
                fpsCounter.textContent = `FPS: ${fps}`;
            }

            requestAnimationFrame(calculateFPS);
        }

        calculateFPS();
    }

    // Accessibility enhancements
    setupAccessibilityEnhancements() {
        // Add focus rings to interactive elements
        const interactiveElements = document.querySelectorAll('button, a, input, textarea, [tabindex]');
        interactiveElements.forEach(el => {
            el.classList.add('mobile-focus-ring');
        });

        // Add screen reader text for complex interactions
        const complexElements = document.querySelectorAll('.tech-card, .project-card');
        complexElements.forEach(el => {
            const srText = document.createElement('span');
            srText.className = 'mobile-screen-reader-text';
            srText.textContent = 'Tap to explore';
            el.appendChild(srText);
        });

        // Enhanced keyboard navigation
        this.setupKeyboardNavigation();
    }

    // Setup keyboard navigation
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    }

    // Show success feedback
    showSuccessFeedback(element) {
        element.classList.add('mobile-success-pulse');
        setTimeout(() => {
            element.classList.remove('mobile-success-pulse');
        }, 600);
    }

    // Show notification utility
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = 'mobile-notification';
        notification.textContent = message;
        
        if (type === 'error') {
            notification.style.background = 'var(--vibrant-red)';
        } else if (type === 'success') {
            notification.style.background = 'var(--neon-green)';
        }

        document.body.appendChild(notification);

        setTimeout(() => notification.classList.add('show'), 100);
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 400);
        }, 3000);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new MobileFinalTouch();
});

// Add page transition effect
document.body.classList.add('mobile-page-transition');

// Export for external use
window.MobileFinalTouch = MobileFinalTouch;
