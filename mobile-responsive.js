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
