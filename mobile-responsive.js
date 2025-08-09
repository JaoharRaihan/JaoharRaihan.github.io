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
