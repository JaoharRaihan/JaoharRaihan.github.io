// Mobile Responsive Enhancement for Jaohar Raihan's Portfolio
// This script improves mobile experience and responsiveness

document.addEventListener('DOMContentLoaded', function() {
    // Enhanced mobile navigation
    improveNavigation();
    
    // Fix for iOS viewport height issues
    fixIOSViewportHeight();
    
    // Optimize mobile animations
    optimizeMobileAnimations();
    
    // Add swipe functionality for mobile
    addSwipeSupport();
    
    // Improve scroll performance on mobile
    improveScrollPerformance();
    
    // Enhance form interaction on mobile
    enhanceFormInteraction();
    
    // Smooth scroll adjustment for mobile
    adjustSmoothScroll();
    
    // Enhance tech icons scrolling
    enhanceTechIconsScroll();
});

// Improved mobile navigation
function improveNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!navToggle || !navMenu) return;
    
    // Toggle menu visibility with animation
    navToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        
        // Body scroll lock when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(event.target) && 
            !navToggle.contains(event.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Fix for iOS Safari viewport height issues
function fixIOSViewportHeight() {
    // First we get the viewport height and multiply it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    // We update the custom property on window resize
    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
}

// Optimize animations on mobile devices for better performance
function optimizeMobileAnimations() {
    // Detect if device is mobile
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    
    if (isMobile) {
        // Remove particle effects and heavy animations on mobile
        const particles = document.querySelectorAll('.btn-particles, .floating-icon, .floating-element, .bengali-symbol');
        particles.forEach(particle => {
            if (particle) particle.style.display = 'none';
        });
        
        // Simplify animations on section entry
        const animatedElements = document.querySelectorAll('.animate-in, .fade-in');
        animatedElements.forEach(el => {
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
    }
}

// Add swipe support for mobile devices
function addSwipeSupport() {
    let touchStartX = 0;
    let touchEndX = 0;
    
    // Set up touch event listeners
    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    // Handle swipe direction
    function handleSwipe() {
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        
        if (!navMenu || !navToggle) return;
        
        // Swipe right to open menu
        if (touchEndX - touchStartX > 100) {
            navMenu.classList.add('active');
            navToggle.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        // Swipe left to close menu
        if (touchStartX - touchEndX > 100) {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    }
}

// Improve scroll performance on mobile
function improveScrollPerformance() {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    
    if (isMobile) {
        // Use passive event listeners for better scroll performance
        document.addEventListener('touchstart', function() {}, {passive: true});
        document.addEventListener('touchmove', function() {}, {passive: true});
        
        // Throttle scroll-intensive operations
        let scrollTimeout;
        window.addEventListener('scroll', function() {
            if (scrollTimeout) {
                window.cancelAnimationFrame(scrollTimeout);
            }
            
            scrollTimeout = window.requestAnimationFrame(function() {
                // Any scroll-dependent animations or calculations go here
                // This ensures they only run once per frame, improving performance
            });
        }, {passive: true});
    }
}

// Enhance form interaction on mobile
function enhanceFormInteraction() {
    // Check if it's a mobile device
    if (!window.matchMedia('(max-width: 768px)').matches) return;
    
    // Get all form elements
    const formInputs = document.querySelectorAll('input, textarea');
    
    formInputs.forEach(input => {
        // Add active class when focused
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('input-focused');
            // Scroll to the input with offset to avoid keyboard covering it
            setTimeout(() => {
                const rect = this.getBoundingClientRect();
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const targetY = rect.top + scrollTop - 120;
                window.scrollTo({top: targetY, behavior: 'smooth'});
            }, 300);
        });
        
        // Remove active class when blurred
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('input-focused');
            }
        });
        
        // Keep label in position if field has value
        if (input.value) {
            input.parentElement.classList.add('input-focused');
        }
        
        // Add tap highlight for better user feedback
        input.style.webkitTapHighlightColor = 'rgba(0,0,0,0)';
        input.parentElement.style.webkitTapHighlightColor = 'rgba(0,0,0,0)';
    });
    
    // Enhance submit button interaction
    const submitBtn = document.querySelector('.contact-form button[type="submit"]');
    if (submitBtn) {
        submitBtn.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        submitBtn.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    }
}

// Adjust smooth scroll for better mobile experience
function adjustSmoothScroll() {
    if (!window.matchMedia('(max-width: 768px)').matches) return;
    
    // Get all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            // Close mobile menu if it's open
            const navMenu = document.getElementById('nav-menu');
            const navToggle = document.getElementById('nav-toggle');
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (navToggle) navToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
            
            // Calculate scroll position with offset for fixed header
            const headerHeight = 60; // Adjust based on your header height
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            // Smooth scroll to target
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
    
    // Add better touch feedback for buttons and links
    const interactiveElements = document.querySelectorAll('a, button, .card, .project-card, .skill-chip');
    interactiveElements.forEach(el => {
        el.addEventListener('touchstart', function() {
            this.classList.add('touch-active');
        }, {passive: true});
        
        el.addEventListener('touchend', function() {
            this.classList.remove('touch-active');
        }, {passive: true});
        
        el.addEventListener('touchcancel', function() {
            this.classList.remove('touch-active');
        }, {passive: true});
    });
}

// Enhance tech icons horizontal scrolling
function enhanceTechIconsScroll() {
    if (!window.matchMedia('(max-width: 768px)').matches) return;
    
    const techStack = document.querySelector('.tech-stack');
    if (!techStack) return;
    
    // Add visual indicator for horizontal scrolling
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    scrollIndicator.innerHTML = '<span>←</span><span>swipe</span><span>→</span>';
    scrollIndicator.style.cssText = `
        text-align: center;
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.6);
        margin-top: 5px;
        display: flex;
        justify-content: center;
        gap: 5px;
        align-items: center;
        opacity: 1;
        transition: opacity 0.3s ease;
    `;
    
    techStack.appendChild(scrollIndicator);
    
    // Hide indicator after first scroll
    const techIcons = document.querySelector('.tech-icons');
    if (techIcons) {
        // Add momentum scrolling for better mobile experience
        techIcons.style.cssText += `
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
        `;
        
        // Add scroll snap to each icon
        const icons = techIcons.querySelectorAll('.tech-icon');
        icons.forEach(icon => {
            icon.style.scrollSnapAlign = 'center';
        });
        
        techIcons.addEventListener('scroll', function() {
            scrollIndicator.style.opacity = '0';
            setTimeout(() => {
                scrollIndicator.style.display = 'none';
            }, 500);
        }, { once: true });
        
        // Add touch feedback to tech icons
        icons.forEach(icon => {
            icon.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.95)';
            }, {passive: true});
            
            icon.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            }, {passive: true});
        });
    }
    
    // Add pulsing animation to scroll indicator to draw attention
    const keyframes = `
    @keyframes pulse {
        0% { opacity: 0.6; }
        50% { opacity: 1; }
        100% { opacity: 0.6; }
    }`;
    
    const style = document.createElement('style');
    style.textContent = keyframes;
    document.head.appendChild(style);
    
    scrollIndicator.style.animation = 'pulse 1.5s infinite';
}

// === FINAL TOUCH: ADVANCED MOBILE ENHANCEMENTS ===

// Advanced Mobile Experience Manager
class MobileExperienceManager {
    constructor() {
        this.initAdvancedFeatures();
        this.setupTouchRipples();
        this.initSmartLoading();
        this.setupAdvancedGestures();
        this.initMobileNotifications();
        this.setupScrollToTop();
        this.enhanceFormInteractions();
        this.initPerformanceOptimizations();
    }

    // Initialize all advanced mobile features
    initAdvancedFeatures() {
        this.addMobileClasses();
        this.setupViewportHeight();
        this.initLazyLoading();
        this.setupAccessibilityFeatures();
    }

    // Add mobile-specific classes to elements
    addMobileClasses() {
        if (window.innerWidth <= 768) {
            document.body.classList.add('mobile-device');
            
            // Add mobile classes to interactive elements
            document.querySelectorAll('.btn').forEach(btn => {
                btn.classList.add('btn-mobile-enhanced');
            });
            
            document.querySelectorAll('.project-card, .tech-card, .edu-item').forEach(card => {
                card.classList.add('mobile-card-enhanced');
            });
        }
    }

    // Setup touch ripple effects
    setupTouchRipples() {
        document.addEventListener('touchstart', (e) => {
            const target = e.target.closest('.btn, .social-link, .nav-link, .tech-card');
            if (!target) return;

            const ripple = document.createElement('span');
            const rect = target.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.touches[0].clientX - rect.left - size / 2;
            const y = e.touches[0].clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('touch-ripple');

            target.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        }, {passive: true});
    }

    // Smart loading with skeleton screens
    initSmartLoading() {
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            img.classList.add('image-lazy-mobile');
            
            const placeholder = document.createElement('div');
            placeholder.className = 'mobile-skeleton-loader';
            placeholder.style.width = img.style.width || '100%';
            placeholder.style.height = img.style.height || '200px';
            placeholder.style.borderRadius = '8px';
            
            img.parentNode.insertBefore(placeholder, img);
            
            img.addEventListener('load', () => {
                img.classList.add('loaded');
                placeholder.remove();
            });
            
            // Fallback for images that might already be loaded
            if (img.complete) {
                img.classList.add('loaded');
                placeholder.remove();
            }
        });
    }

    // Advanced gesture support
    setupAdvancedGestures() {
        let startY = 0;
        let startX = 0;
        
        document.addEventListener('touchstart', (e) => {
            startY = e.touches[0].clientY;
            startX = e.touches[0].clientX;
        }, {passive: true});
        
        document.addEventListener('touchend', (e) => {
            const endY = e.changedTouches[0].clientY;
            const endX = e.changedTouches[0].clientX;
            const diffY = startY - endY;
            const diffX = startX - endX;
            
            // Swipe up gesture
            if (diffY > 50 && Math.abs(diffX) < 100) {
                this.showSwipeIndicator('Swipe up detected!');
                this.handleSwipeUp();
            }
            
            // Swipe down gesture  
            if (diffY < -50 && Math.abs(diffX) < 100) {
                this.showSwipeIndicator('Swipe down detected!');
                this.handleSwipeDown();
            }
        }, {passive: true});
    }

    // Handle swipe gestures
    handleSwipeUp() {
        const currentSection = this.getCurrentSection();
        const nextSection = currentSection?.nextElementSibling;
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    handleSwipeDown() {
        const currentSection = this.getCurrentSection();
        const prevSection = currentSection?.previousElementSibling;
        if (prevSection) {
            prevSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Get current visible section
    getCurrentSection() {
        const sections = document.querySelectorAll('section');
        let current = null;
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                current = section;
            }
        });
        
        return current;
    }

    // Show swipe indicator
    showSwipeIndicator(message) {
        const indicator = document.createElement('div');
        indicator.className = 'mobile-swipe-indicator';
        indicator.textContent = message;
        indicator.style.display = 'block';
        
        document.body.appendChild(indicator);
        
        setTimeout(() => {
            indicator.remove();
        }, 3000);
    }

    // Mobile notification system
    initMobileNotifications() {
        this.notificationQueue = [];
        this.isShowingNotification = false;
    }

    showNotification(message, type = 'info', duration = 3000) {
        this.notificationQueue.push({message, type, duration});
        if (!this.isShowingNotification) {
            this.processNotificationQueue();
        }
    }

    processNotificationQueue() {
        if (this.notificationQueue.length === 0) {
            this.isShowingNotification = false;
            return;
        }

        this.isShowingNotification = true;
        const {message, type, duration} = this.notificationQueue.shift();

        const notification = document.createElement('div');
        notification.className = 'mobile-notification';
        notification.textContent = message;
        
        if (type === 'error') {
            notification.style.background = 'var(--vibrant-red)';
        } else if (type === 'success') {
            notification.style.background = 'var(--neon-green)';
        }

        document.body.appendChild(notification);

        // Trigger show animation
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        // Hide and remove
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
                this.processNotificationQueue();
            }, 400);
        }, duration);
    }

    // Scroll to top button
    setupScrollToTop() {
        const scrollTop = document.createElement('button');
        scrollTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollTop.className = 'mobile-scroll-top';
        scrollTop.setAttribute('aria-label', 'Scroll to top');
        
        document.body.appendChild(scrollTop);

        // Show/hide based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTop.classList.add('visible');
            } else {
                scrollTop.classList.remove('visible');
            }
        }, {passive: true});

        // Scroll to top functionality
        scrollTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Enhanced form interactions
    enhanceFormInteractions() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            const inputs = form.querySelectorAll('input, textarea');
            
            inputs.forEach(input => {
                // Prevent zoom on iOS
                input.style.fontSize = '16px';
                
                // Enhanced focus states
                input.addEventListener('focus', () => {
                    input.parentElement.classList.add('input-focused');
                });
                
                input.addEventListener('blur', () => {
                    if (!input.value) {
                        input.parentElement.classList.remove('input-focused');
                    }
                });
                
                // Real-time validation
                input.addEventListener('input', () => {
                    this.validateField(input);
                });
            });
        });
    }

    // Field validation
    validateField(field) {
        const value = field.value.trim();
        const type = field.type;
        let isValid = true;
        let message = '';

        if (field.required && !value) {
            isValid = false;
            message = 'This field is required';
        } else if (type === 'email' && value && !this.isValidEmail(value)) {
            isValid = false;
            message = 'Please enter a valid email';
        }

        this.showFieldValidation(field, isValid, message);
    }

    // Email validation
    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Show field validation
    showFieldValidation(field, isValid, message) {
        const container = field.parentElement;
        let errorMsg = container.querySelector('.mobile-error-message');

        container.classList.toggle('error', !isValid);

        if (!isValid && message) {
            if (!errorMsg) {
                errorMsg = document.createElement('div');
                errorMsg.className = 'mobile-error-message';
                container.appendChild(errorMsg);
            }
            errorMsg.textContent = message;
            errorMsg.classList.add('show');
        } else if (errorMsg) {
            errorMsg.classList.remove('show');
        }
    }

    // Performance optimizations
    initPerformanceOptimizations() {
        // Passive event listeners
        document.addEventListener('scroll', this.throttle(this.handleScroll.bind(this), 16), {passive: true});
        document.addEventListener('resize', this.debounce(this.handleResize.bind(this), 250), {passive: true});
        
        // Preload next section images
        this.preloadNextSectionImages();
        
        // Setup intersection observer for animations
        this.setupIntersectionObserver();
    }

    // Throttle function
    throttle(func, delay) {
        let timeoutId;
        let lastExecTime = 0;
        return function (...args) {
            const currentTime = Date.now();
            if (currentTime - lastExecTime > delay) {
                func.apply(this, args);
                lastExecTime = currentTime;
            } else {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    func.apply(this, args);
                    lastExecTime = Date.now();
                }, delay - (currentTime - lastExecTime));
            }
        };
    }

    // Debounce function
    debounce(func, delay) {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    }

    // Handle scroll events
    handleScroll() {
        const scrolled = window.scrollY;
        const rate = scrolled * -0.5;
        
        // Parallax effect for hero section
        const hero = document.querySelector('.hero');
        if (hero && scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    }

    // Handle resize events
    handleResize() {
        this.setupViewportHeight();
        this.addMobileClasses();
    }

    // Setup viewport height for mobile browsers
    setupViewportHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    // Preload images in next section
    preloadNextSectionImages() {
        const sections = document.querySelectorAll('section');
        sections.forEach((section, index) => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && sections[index + 1]) {
                        const nextImages = sections[index + 1].querySelectorAll('img');
                        nextImages.forEach(img => {
                            if (!img.dataset.preloaded) {
                                const imageLoader = new Image();
                                imageLoader.src = img.src;
                                img.dataset.preloaded = 'true';
                            }
                        });
                    }
                });
            }, {threshold: 0.5});
            
            observer.observe(section);
        });
    }

    // Setup intersection observer for animations
    setupIntersectionObserver() {
        const animatedElements = document.querySelectorAll('.tech-card, .project-card, .edu-item, .cert-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('mobile-fade-in-up', 'visible');
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(el => {
            el.classList.add('mobile-fade-in-up');
            observer.observe(el);
        });
    }
}

// Initialize Mobile Experience Manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 768) {
        new MobileExperienceManager();
        
        // Show welcome notification
        setTimeout(() => {
            const manager = new MobileExperienceManager();
            manager.showNotification('Welcome! Swipe up/down to navigate sections', 'info', 4000);
        }, 2000);
    }
});

// Export for external use
window.MobileExperienceManager = MobileExperienceManager;
