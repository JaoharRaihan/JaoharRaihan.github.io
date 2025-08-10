// Typing animation for hero subtitle
function initTypingAnimation() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    const texts = JSON.parse(typingElement.getAttribute('data-text'));
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeWriter() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }
        
        setTimeout(typeWriter, typeSpeed);
    }
    
    typeWriter();
}

// Enhanced scroll animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all sections and cards
    document.querySelectorAll('.section, .project-card, .research-card, .skill-category, .timeline-item, .education-card, .cert-item').forEach((el) => {
        observer.observe(el);
    });
}

// Magic cursor trail effect
// ...cursor trail effect removed...

// Enhanced scroll progress with color change
window.addEventListener('scroll', function() {
    const scrollProgress = document.getElementById('scroll-progress');
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    if (scrollProgress) {
        scrollProgress.style.width = scrollPercent + '%';
        
        // Change color based on scroll position
        if (scrollPercent < 33) {
            scrollProgress.style.background = 'linear-gradient(90deg, #3b82f6, #60a5fa)';
        } else if (scrollPercent < 66) {
            scrollProgress.style.background = 'linear-gradient(90deg, #10b981, #34d399)';
        } else {
            scrollProgress.style.background = 'linear-gradient(90deg, #dc2626, #ef4444)';
        }
    }
});

// Scroll to top button
window.addEventListener('scroll', function() {
    const scrollToTop = document.getElementById('scroll-to-top');
    if (window.pageYOffset > 300) {
        scrollToTop.classList.add('visible');
    } else {
        scrollToTop.classList.remove('visible');
    }
});

document.getElementById('scroll-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Enhanced mobile navigation
document.getElementById('nav-toggle').addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    
    // Animate menu items
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
        if (navMenu.classList.contains('active')) {
            setTimeout(() => {
                link.style.opacity = '1';
                link.style.transform = 'translateX(0)';
            }, index * 100);
        } else {
            link.style.opacity = '0';
            link.style.transform = 'translateX(-20px)';
        }
    });
});

// Enhanced navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Skill progress animation
function animateSkillProgress() {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('animate-in');
        }, index * 100);
    });
}

// Enhanced contact form with validation and real submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Validate form fields before submission
        const name = contactForm.querySelector('input[name="name"]').value.trim();
        const email = contactForm.querySelector('input[name="email"]').value.trim();
        const subject = contactForm.querySelector('input[name="subject"]').value.trim();
        const message = contactForm.querySelector('textarea[name="message"]').value.trim();
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            e.preventDefault();
            showNotification('Please fill in all fields! 📝', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            e.preventDefault();
            showNotification('Please enter a valid email address! 📧', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Show success message (form will submit naturally to FormSubmit)
        showNotification('Sending your message... 🚀', 'info');
        
        // Don't prevent default - let the form submit to FormSubmit
        // The form will redirect to thank-you.html after successful submission
    });
}

// Enhanced notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification with proper colors for different types
    let backgroundColor;
    switch(type) {
        case 'success':
            backgroundColor = '#10b981';
            break;
        case 'error':
            backgroundColor = '#ef4444';
            break;
        case 'warning':
            backgroundColor = '#f59e0b';
            break;
        default:
            backgroundColor = '#3b82f6';
    }
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${backgroundColor};
        color: white;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 10000;
        transform: translateX(100%);
        transition: all 0.3s ease;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Contact form handling with better UX
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('.btn-primary');
    const originalText = submitBtn.textContent;
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Basic validation
    if (!name || !email || !subject || !message) {
        showNotification('Please fill in all fields! 📝', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address! 📧', 'error');
        return;
    }
    
    // Show loading state
    submitBtn.textContent = 'Sending... 🚀';
    submitBtn.disabled = true;
    
    // Simulate sending (replace with actual API call)
    setTimeout(() => {
        showNotification(`Thanks ${name}! Your message has been sent successfully! I'll get back to you soon. 😊`, 'success');
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Custom notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'rgba(34, 197, 94, 0.9)' : type === 'error' ? 'rgba(239, 68, 68, 0.9)' : 'rgba(59, 130, 246, 0.9)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        backdrop-filter: blur(10px);
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        hideNotification(notification);
    });
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        hideNotification(notification);
    }, 5000);
}

function hideNotification(notification) {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.innerHTML;
    
    // Small delay before starting the typing effect
    setTimeout(() => {
        typeWriter(heroTitle, originalText, 50);
    }, 500);
});

// Skills animation on scroll
const skillCategories = document.querySelectorAll('.skill-category');
const skillObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
        }
    });
}, { threshold: 0.2 });

skillCategories.forEach(category => {
    category.style.opacity = '0';
    category.style.transform = 'translateY(30px) scale(0.9)';
    category.style.transition = 'all 0.6s ease';
    skillObserver.observe(category);
});

// Project cards animation
const projectCards = document.querySelectorAll('.project-card');
const projectObserver = new IntersectionObserver(function(entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 200); // Stagger the animations
        }
    });
}, { threshold: 0.1 });

projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = 'all 0.6s ease';
    projectObserver.observe(card);
});

// Stats counter animation
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16); // 60fps
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + (target >= 10 ? '+' : '');
    }, 16);
}

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.about-stats');
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat h3');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target); // Only animate once
        }
    });
}, { threshold: 0.5 });

if (statsSection) {
    statsObserver.observe(statsSection);
}

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && scrolled < hero.offsetHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add loading animation
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
    });
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        activateEasterEgg();
        konamiCode = [];
    }
});

function activateEasterEgg() {
    // Create rainbow effect
    document.body.style.animation = 'rainbow 2s ease-in-out';
    showNotification('🎉 Easter Egg Activated! You found the secret! 🎉', 'success');
    
    // Add rainbow keyframes if not exists
    if (!document.getElementById('rainbow-styles')) {
        const style = document.createElement('style');
        style.id = 'rainbow-styles';
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                25% { filter: hue-rotate(90deg); }
                50% { filter: hue-rotate(180deg); }
                75% { filter: hue-rotate(270deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        document.body.style.animation = '';
    }, 2000);
}

// Magical particle system for special elements
function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'magic-particle';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
    
    document.body.appendChild(particle);
    
    // Animate particle
    const angle = Math.random() * Math.PI * 2;
    const velocity = 2 + Math.random() * 3;
    const life = 1000 + Math.random() * 1000;
    
    let currentX = x;
    let currentY = y;
    let opacity = 1;
    
    const animate = () => {
        currentX += Math.cos(angle) * velocity;
        currentY += Math.sin(angle) * velocity - 1; // Gravity
        opacity -= 0.02;
        
        particle.style.left = currentX + 'px';
        particle.style.top = currentY + 'px';
        particle.style.opacity = opacity;
        
        if (opacity > 0) {
            requestAnimationFrame(animate);
        } else {
            particle.remove();
        }
    };
    
    requestAnimationFrame(animate);
}

// Add magic particles on special clicks
document.addEventListener('click', function(e) {
    const target = e.target;
    if (target.classList.contains('btn') || target.classList.contains('project-card') || target.classList.contains('skill-item')) {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                createParticle(
                    e.clientX + (Math.random() - 0.5) * 20,
                    e.clientY + (Math.random() - 0.5) * 20
                );
            }, i * 50);
        }
    }
});

// Enhanced smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mouse Follower Effect
// ...mouse follower effect removed...

// Enhanced Notification System
function showNotification(message, type = 'success') {
    const container = document.getElementById('notification-container');
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    container.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Remove notification
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            container.removeChild(notification);
        }, 400);
    }, 3000);
}

// Enhanced Counter Animation with More Realistic Effect
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const duration = 2000;
    const stepTime = duration / 100;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        const displayValue = Math.floor(current);
        element.textContent = displayValue + (target >= 10 ? '+' : '');
        
        // Add pulsing effect during animation
        element.style.transform = `scale(${1 + Math.sin(current * 0.1) * 0.05})`;
    }, stepTime);
}

// Enhanced Skill Progress Animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach((bar, index) => {
        const targetWidth = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = targetWidth + '%';
            
            // Add completion notification for high skills
            if (parseInt(targetWidth) >= 90) {
                setTimeout(() => {
                    showNotification(`🎉 Expert level in ${bar.closest('.skill-item').querySelector('.skill-name').textContent}!`, 'success');
                }, 1000);
            }
        }, index * 200); // Stagger animations
    });
}

// Enhanced Intersection Observer
const enhancedObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            
            // Stats animation
            if (target.classList.contains('about-stats')) {
                const statNumbers = target.querySelectorAll('.stat h3[data-count]');
                statNumbers.forEach(stat => {
                    const targetValue = parseInt(stat.getAttribute('data-count'));
                    animateCounter(stat, targetValue);
                });
                enhancedObserver.unobserve(target);
            }
            
            // Skills animation
            if (target.classList.contains('skills')) {
                animateSkillBars();
                enhancedObserver.unobserve(target);
            }
            
            // Add entrance animations to other sections
            if (target.classList.contains('section')) {
                target.style.opacity = '1';
                target.style.transform = 'translateY(0)';
            }
        }
    });
}, { threshold: 0.2 });

// Observe all relevant sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.about-stats, .skills, .projects, .research, .contact');
    sections.forEach(section => {
        enhancedObserver.observe(section);
    });
});

// Special effects for profile image
document.addEventListener('DOMContentLoaded', function() {
    const profileImg = document.querySelector('.hero-profile-img');
    const profileContainer = document.querySelector('.hero-img-container');
    
    if (profileImg && profileContainer) {
        // Add sparkle effect on profile image hover
        profileContainer.addEventListener('mouseenter', function() {
            createProfileSparkles(this);
        });
        
        // Add click effect for profile image
        profileContainer.addEventListener('click', function(e) {
            createProfileExplosion(e.clientX, e.clientY);
            showNotification('✨ Looking good! Ready to build amazing apps! ✨', 'success');
        });
        
        // Preload image for better performance
        const img = new Image();
        img.src = 'assets/rr.jpeg';
    }
});

function createProfileSparkles(container) {
    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const angle = (i / 8) * Math.PI * 2;
            const distance = 100 + Math.random() * 50;
            const x = centerX + Math.cos(angle) * distance;
            const y = centerY + Math.sin(angle) * distance;
            
            createSparkle(x, y);
        }, i * 100);
    }
}

function createProfileExplosion(x, y) {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createParticle(
                x + (Math.random() - 0.5) * 100,
                y + (Math.random() - 0.5) * 100
            );
        }, i * 30);
    }
}

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'profile-sparkle';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.background = `hsl(${Math.random() * 60 + 320}, 70%, 60%)`; // Red to purple range
    
    document.body.appendChild(sparkle);
    
    // Animate sparkle
    setTimeout(() => {
        sparkle.style.opacity = '0';
        sparkle.style.transform = 'scale(2) rotate(180deg)';
    }, 100);
    
    setTimeout(() => {
        sparkle.remove();
    }, 800);
}

// Add CSS for profile sparkles
const profileSparkleStyles = document.createElement('style');
profileSparkleStyles.textContent = `
    .profile-sparkle {
        position: fixed;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        opacity: 1;
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        box-shadow: 0 0 10px currentColor;
    }
`;
document.head.appendChild(profileSparkleStyles);

// Enhanced Cursor Trail
function initializeCursorTrail() {
    const cursorTrail = document.getElementById('cursor-trail');
    if (!cursorTrail) return;
    
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateTrail() {
        trailX += (mouseX - trailX) * 0.1;
        trailY += (mouseY - trailY) * 0.1;
        
        cursorTrail.style.left = trailX + 'px';
        cursorTrail.style.top = trailY + 'px';
        
        requestAnimationFrame(animateTrail);
    }
    
    animateTrail();
}

// Enhanced Page Loader
function initializePageLoader() {
    // This function is now disabled as we're using the simplified loader
    // The new loader is handled by simplified-loader-exit.js
    return;
    
    /*
    const loader = document.getElementById('page-loader');
    if (!loader) return;
    
    // Simulate loading progress
    const loaderBar = loader.querySelector('.loader-bar');
    let progress = 0;
    
    const progressInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
            
            setTimeout(() => {
                loader.classList.add('hidden');
                showNotification('🎉 Portfolio loaded successfully!', 'success');
            }, 300);
        }
        
        if (loaderBar) {
            loaderBar.style.width = progress + '%';
        }
    }, 200);
    */

// Enhanced Counter Animation for Hero Stats
function initializeEnhancedCounters() {
    const heroStats = document.querySelectorAll('.hero-stat .stat-number');
    
    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-count'));
        const increment = target / 50;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
                
                // Add completion effect
                element.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    element.style.transform = 'scale(1)';
                }, 200);
            }
            element.textContent = Math.ceil(current);
        }, 30);
    };
    
    // Trigger animation when hero section is visible
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heroStats.forEach((stat, index) => {
                    setTimeout(() => animateCounter(stat), index * 200);
                });
                heroObserver.disconnect();
            }
        });
    });
    
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroObserver.observe(heroSection);
    }
}

// Enhanced Interactive Elements
// ...hover particle effect removed...

// See More Projects functionality
function initSeeMoreProjects() {
    const seeMoreBtn = document.getElementById('see-more-btn');
    const hiddenProjects = document.querySelectorAll('.hidden-project');
    const projectsCount = document.querySelector('.projects-count');
    let showingAll = false;
    
    if (seeMoreBtn) {
        seeMoreBtn.addEventListener('click', function() {
            const btnText = this.querySelector('.btn-text');
            const btnIcon = this.querySelector('.btn-icon i');
            
            if (!showingAll) {
                // Show hidden projects
                hiddenProjects.forEach((project, index) => {
                    setTimeout(() => {
                        project.style.display = 'block';
                        project.style.opacity = '0';
                        project.style.transform = 'translateY(20px)';
                        
                        setTimeout(() => {
                            project.style.opacity = '1';
                            project.style.transform = 'translateY(0)';
                        }, 50);
                    }, index * 200);
                });
                
                btnText.textContent = 'Show Less';
                btnIcon.className = 'fas fa-chevron-up';
                projectsCount.textContent = 'Showing 6 of 36+ projects';
                showingAll = true;
                
                // Add particles effect
                createButtonParticles(this);
                showNotification('🎉 More projects revealed! Check out my diverse portfolio!', 'success');
                
            } else {
                // Hide projects
                hiddenProjects.forEach((project, index) => {
                    setTimeout(() => {
                        project.style.opacity = '0';
                        project.style.transform = 'translateY(20px)';
                        
                        setTimeout(() => {
                            project.style.display = 'none';
                        }, 300);
                    }, index * 100);
                });
                
                btnText.textContent = 'See More Projects';
                btnIcon.className = 'fas fa-chevron-down';
                projectsCount.textContent = 'Showing 4 of 36+ projects';
                showingAll = false;
                
                // Scroll back to projects section
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

function createButtonParticles(button) {
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createParticle(
                centerX + (Math.random() - 0.5) * 100,
                centerY + (Math.random() - 0.5) * 50
            );
        }, i * 50);
    }
}

// ============ ADVANCED FEATURES ============

// Advanced Features Initialization
function initAdvancedFeatures() {
    // initializePreloader(); // Removed - using new simplified loader instead
    initializeTextToSpeech();
    initializeAdvancedAnimations();
    initializeImageLazyLoading();
    initializePerformanceOptimization();
    initializeAdvancedInteractions();
    initializeCodeHighlighting();
    initializeProgressiveWebApp();
}

// Theme Toggle with System Preference Detection
function initializeThemeToggle() {
    // Create theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.setAttribute('aria-label', 'Toggle theme');
    document.body.appendChild(themeToggle);
    
    // Detect system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let currentTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
    
    // Apply theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
        updateThemeIcon(currentTheme);
        
        // Theme change animation
        document.body.style.transition = 'all 0.3s ease';
        showNotification(`🎨 Switched to ${currentTheme} theme!`, 'success');
        createThemeParticles();
    });
}

function updateThemeIcon(theme) {
    const toggle = document.querySelector('.theme-toggle i');
    toggle.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

function createThemeParticles() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createParticle(
                Math.random() * window.innerWidth,
                Math.random() * window.innerHeight
            );
        }, i * 50);
    }
}

// Audio Feedback System
function initializeAudioFeedback() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    function playSound(frequency, duration, type = 'sine') {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = frequency;
        oscillator.type = type;
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
    }
    
    // Add sound effects to interactions
    document.addEventListener('click', (e) => {
        if (e.target.matches('.btn, .project-card, .nav-link')) {
            playSound(800, 0.1);
        }
    });
    
    // Hover sounds
    document.addEventListener('mouseover', (e) => {
        if (e.target.matches('.btn, .project-card')) {
            playSound(400, 0.05);
        }
    });
}

// Keyboard Navigation Enhancement
function initializeKeyboardNavigation() {
    const focusableElements = 'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])';
    
    document.addEventListener('keydown', (e) => {
        // Alt + H: Go to home
        if (e.altKey && e.key === 'h') {
            e.preventDefault();
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
            showNotification('🏠 Navigated to Home', 'info');
        }
        
        // Alt + P: Go to projects
        if (e.altKey && e.key === 'p') {
            e.preventDefault();
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            showNotification('🚀 Navigated to Projects', 'info');
        }
        
        // Alt + C: Go to contact
        if (e.altKey && e.key === 'c') {
            e.preventDefault();
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            showNotification('📧 Navigated to Contact', 'info');
        }
        
        // Escape: Close modals or menus
        if (e.key === 'Escape') {
            const activeMenu = document.querySelector('.nav-menu.active');
            if (activeMenu) {
                activeMenu.classList.remove('active');
                document.getElementById('nav-toggle').classList.remove('active');
            }
        }
    });
    
    // Improve focus visibility
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-nav');
    });
}

// Advanced Preloader with Progress Tracking
function initializePreloader() {
    // Disabled - using simplified loader instead
    return;
    
    /*
    const preloader = document.createElement('div');
    preloader.className = 'advanced-preloader smart-loader';
    preloader.innerHTML = `
        <div class="preloader-center">
            <div class="preloader-ring big-dev-ring"></div>
            <div class="nature-anim-leaves"></div>
            <div class="preloader-progress smart-progress">
                <div class="progress-bar smart-bar"></div>
                <div class="progress-text smart-text">0%</div>
            </div>
        </div>
    `;
    document.body.appendChild(preloader);
    */
}

    // Add smart loader styles dynamically (if not already present)
    if (!document.getElementById('smart-loader-styles')) {
        const style = document.createElement('style');
        style.id = 'smart-loader-styles';
        style.textContent = `
        .smart-loader {
            position: fixed;
            inset: 0;
            z-index: 99999;
            background: #000;
            display: grid;
            place-items: center;
            transition: opacity 0.5s cubic-bezier(.4,2,.6,1);
        }
        .preloader-center {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 3.5rem;
        }
        .preloader-ring, .big-dev-ring {
            width: 220px;
            height: 220px;
            border-radius: 50%;
            border: 16px solid transparent;
            /* 60% red, 40% green for loader ring */
            background: conic-gradient(
                #d00000 0% 60%, /* Red */
                #006424 60% 100% /* Green */
            );
            box-shadow: 0 0 60px 18px #d00000cc, 0 0 80px 24px #00642499;
            animation: big-dev-spin 0.7s cubic-bezier(.6,.2,.4,1) infinite, big-dev-glow 1.2s ease-in-out infinite alternate, big-dev-pulse 1s cubic-bezier(.4,2,.6,1) infinite;
            position: relative;
        }
        .nature-anim-leaves {
            position: absolute;
            left: 0; right: 0; top: 0; bottom: 0;
            width: 220px; height: 220px;
            pointer-events: none;
            z-index: 2;
        }
        .nature-leaf {
            position: absolute;
            width: 32px; height: 32px;
            background: linear-gradient(135deg, #4f704e 60%, #006424 100%);
            border-radius: 50% 50% 50% 0;
            transform: rotate(var(--angle,0deg)) scale(1);
            opacity: 0.85;
            box-shadow: 0 2px 8px #01161e33;
            animation: leaf-float 2.5s linear infinite;
        }
        @keyframes leaf-float {
            0% { transform: translateY(0) rotate(var(--angle,0deg)) scale(1); opacity: 0.85; }
            60% { opacity: 1; }
            100% { transform: translateY(40px) rotate(calc(var(--angle,0deg) + 40deg)) scale(1.1); opacity: 0.2; }
        }
        @keyframes big-dev-spin {
            0% { transform: rotate(0deg) scale(1); }
            80% { transform: rotate(288deg) scale(1.08); }
            100% { transform: rotate(360deg) scale(1); }
        }
        @keyframes big-dev-glow {
            0% { box-shadow: 0 0 40px 12px #00642499, 0 0 60px 18px #d0000099; }
            100% { box-shadow: 0 0 60px 18px #d00000cc, 0 0 40px 12px #006424cc; }
        }
        @keyframes big-dev-pulse {
            0%, 100% { filter: brightness(1) drop-shadow(0 0 0 #d00000); }
            50% { filter: brightness(1.18) drop-shadow(0 0 24px #006424cc); }
        }
        @keyframes big-dev-spin {
            0% { transform: rotate(0deg) scale(1); }
            100% { transform: rotate(360deg) scale(1.04); }
        }
        @keyframes big-dev-glow {
            0% { box-shadow: 0 0 32px 8px #d0000088, 0 0 48px 12px #00642444; }
            100% { box-shadow: 0 0 48px 16px #006424cc, 0 0 32px 8px #d00000cc; }
        }
        @keyframes big-dev-pulse {
            0%, 100% { filter: brightness(1) drop-shadow(0 0 0 #d00000); }
            50% { filter: brightness(1.15) drop-shadow(0 0 16px #006424cc); }
        }
        .smart-progress {
            width: 260px;
            height: 14px;
            background: rgba(44,66,63,0.16);
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 12px 0 #01161e33;
            position: relative;
        }
        .smart-bar {
            height: 100%;
            width: 0%;
            background: linear-gradient(90deg, #d00000, #006424 80%);
            border-radius: 8px;
            box-shadow: 0 0 12px 2px #d0000044;
            transition: width 0.4s cubic-bezier(.4,2,.6,1), box-shadow 0.2s;
        }
        .smart-text {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            color: #e0e0e0;
            font-size: 1.15rem;
            font-family: 'Inter',sans-serif;
            font-weight: 600;
            letter-spacing: 0.04em;
            text-shadow: 0 1px 6px #000, 0 0 2px #2c423f;
            pointer-events: none;
        }
        `;
        document.head.appendChild(style);
    }

    // Smart animated progress logic
    let progress = 0;
    const progressBar = preloader.querySelector('.smart-bar');
    const progressText = preloader.querySelector('.smart-text');
    let loaderStart = Date.now();
    // Add animated leaves (funny/nature effect)
    const leavesContainer = preloader.querySelector('.nature-anim-leaves');
    const leafCount = 7;
    for (let i = 0; i < leafCount; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'nature-leaf';
        // Place leaves at random angles around the ring
        const angle = Math.random() * 360;
        const radius = 90 + Math.random() * 10;
        leaf.style.left = 110 + Math.cos(angle * Math.PI / 180) * radius + 'px';
        leaf.style.top = 110 + Math.sin(angle * Math.PI / 180) * radius + 'px';
        leaf.style.setProperty('--angle', angle + 'deg');
        leaf.style.animationDelay = (Math.random() * 1.5) + 's';
        leavesContainer.appendChild(leaf);
    }
    const loadingInterval = setInterval(() => {
        // Animate progress with a steady, professional curve
        progress += Math.random() * (progress < 70 ? 4.5 : progress < 95 ? 2.2 : 0.8);
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            // Ensure loader is visible for at least 1.2s
            const elapsed = Date.now() - loaderStart;
            const minDuration = 1200;
            const hideDelay = Math.max(0, minDuration - elapsed);
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => preloader.remove(), 400);
            }, hideDelay);
        }
        // Animate bar width
        if (progressBar) {
            progressBar.style.width = progress + '%';
        }
        if (progressText) {
            progressText.textContent = Math.floor(progress) + '%';
        }
    }, 80);
}

// Text-to-Speech for Accessibility
function initializeTextToSpeech() {
    if (!('speechSynthesis' in window)) return;
    // Only add speaker icon to settings, not hero section
    const settingsPanel = document.querySelector('.settings-panel');
    if (!settingsPanel) return;
    const speakButton = document.createElement('button');
    speakButton.className = 'speak-button';
    speakButton.innerHTML = '<i class="fas fa-volume-up"></i>';
    speakButton.setAttribute('aria-label', 'Read page content aloud');
    // Improved positioning and menu bar layout for settings icon
    settingsPanel.style.display = 'flex';
    settingsPanel.style.flexDirection = 'row';
    settingsPanel.style.alignItems = 'center';
    settingsPanel.style.justifyContent = 'flex-end';
    settingsPanel.style.gap = '16px';
    settingsPanel.style.padding = '8px 24px 8px 8px';
    settingsPanel.style.background = 'rgba(30,30,30,0.85)';
    settingsPanel.style.borderRadius = '16px';
    settingsPanel.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
    settingsPanel.style.position = 'absolute';
    settingsPanel.style.top = '0px';
    settingsPanel.style.right = '0px';
    settingsPanel.style.zIndex = '200';
    speakButton.style.position = 'static';
    speakButton.style.background = 'none';
    speakButton.style.border = 'none';
    speakButton.style.fontSize = '1.5rem';
    speakButton.style.color = '#fff';
    speakButton.style.cursor = 'pointer';
    speakButton.style.transition = 'color 0.2s';
    speakButton.onmouseenter = () => speakButton.style.color = '#dc2626';
    speakButton.onmouseleave = () => speakButton.style.color = '#fff';
    settingsPanel.appendChild(speakButton);
    let speaking = false;
    speakButton.addEventListener('click', () => {
        if (speaking) {
            speechSynthesis.cancel();
            speaking = false;
            speakButton.innerHTML = '<i class="fas fa-volume-up"></i>';
            showNotification('🔇 Speech stopped', 'info');
        } else {
            const text = document.querySelector('.hero-description').textContent;
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 0.8;
            utterance.pitch = 1;
            utterance.onstart = () => {
                speaking = true;
                speakButton.innerHTML = '<i class="fas fa-stop"></i>';
                showNotification('🔊 Reading content aloud', 'info');
            };
            utterance.onend = () => {
                speaking = false;
                speakButton.innerHTML = '<i class="fas fa-volume-up"></i>';
            };
            speechSynthesis.speak(utterance);
        }
    });
}

// Advanced Animations with Intersection Observer
function initializeAdvancedAnimations() {
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Staggered children animation
                if (element.classList.contains('stagger-children')) {
                    const children = element.children;
                    Array.from(children).forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('animate-in');
                        }, index * 100);
                    });
                }
                
                // Typewriter effect for specific elements
                if (element.classList.contains('typewriter')) {
                    typewriterEffect(element);
                }
                
                // Number counter animation
                if (element.classList.contains('counter')) {
                    animateNumber(element);
                }
                
                animationObserver.unobserve(element);
            }
        });
    }, { threshold: 0.3 });
    
    // Apply to specific elements
    document.querySelectorAll('.stagger-children, .typewriter, .counter').forEach(el => {
        animationObserver.observe(el);
    });
}

function typewriterEffect(element) {
    const text = element.textContent;
    element.textContent = '';
    let i = 0;
    
    const type = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    };
    type();
}

function animateNumber(element) {
    const target = parseInt(element.textContent);
    let current = 0;
    const increment = target / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 30);
}

// Image Lazy Loading with Blur Effect
function initializeImageLazyLoading() {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.dataset.src;
                
                if (src) {
                    img.style.filter = 'blur(5px)';
                    img.src = src;
                    img.onload = () => {
                        img.style.filter = 'none';
                        img.style.transition = 'filter 0.3s ease';
                    };
                    img.removeAttribute('data-src');
                }
                
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Performance Optimization
function initializePerformanceOptimization() {
    // Debounce scroll events
    let scrollTimeout;
    const originalScrollHandler = window.onscroll;
    
    window.onscroll = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (originalScrollHandler) originalScrollHandler();
        }, 10);
    };
    
    // Preload critical resources
    const criticalResources = [
        'assets/rr.jpeg',
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.includes('.css') ? 'style' : 'image';
        document.head.appendChild(link);
    });
    
    // Monitor performance
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
                
                if (loadTime > 3000) {
                    showNotification('⚡ Portfolio loaded! Performance could be improved.', 'info');
                } else {
                    showNotification('🚀 Portfolio loaded with excellent performance!', 'success');
                }
            }, 100);
        });
    }
}

// Advanced Interactions
function initializeAdvancedInteractions() {
    // Double-click effects
    let clickCount = 0;
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('project-card')) {
            clickCount++;
            setTimeout(() => {
                if (clickCount === 2) {
                    // Double click effect
                    createProjectExplosion(e.clientX, e.clientY);
                    showNotification('🎉 Project double-clicked! Extra sparkles!', 'success');
                }
                clickCount = 0;
            }, 300);
        }
    });
    
    // Long press effects (mobile)
    let pressTimer;
    document.addEventListener('touchstart', (e) => {
        pressTimer = setTimeout(() => {
            if (e.target.classList.contains('project-card')) {
                navigator.vibrate && navigator.vibrate(100);
                createProjectExplosion(e.touches[0].clientX, e.touches[0].clientY);
                showNotification('📱 Long press detected!', 'info');
            }
        }, 800);
    });
    
    document.addEventListener('touchend', () => {
        clearTimeout(pressTimer);
    });
    
    // Gesture detection
    let touchStartX, touchStartY;
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        
        // Swipe detection
        if (Math.abs(deltaX) > 100 && Math.abs(deltaY) < 100) {
            if (deltaX > 0) {
                // Swipe right
                showNotification('👉 Swipe right detected!', 'info');
            } else {
                // Swipe left
                showNotification('👈 Swipe left detected!', 'info');
            }
        }
    });
}

function createProjectExplosion(x, y) {
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            createParticle(
                x + (Math.random() - 0.5) * 200,
                y + (Math.random() - 0.5) * 200
            );
        }, i * 20);
    }
}

// Code Highlighting for Tech Stacks
function initializeCodeHighlighting() {
    const techItems = document.querySelectorAll('.project-tech span, .skill-chip');
    
    techItems.forEach(item => {
        item.addEventListener('click', () => {
            const tech = item.textContent.trim();
            showTechInfo(tech);
        });
    });
}

function showTechInfo(tech) {
    const techInfo = {
        'React Native': 'Cross-platform mobile app framework by Facebook',
        'JavaScript': 'Dynamic programming language for web and mobile development',
        'Node.js': 'JavaScript runtime built on Chrome\'s V8 JavaScript engine',
        'Firebase': 'Google\'s Backend-as-a-Service platform',
        'Python': 'High-level programming language for AI and data science',
        'HTML5': 'Latest version of HyperText Markup Language',
        'CSS3': 'Latest version of Cascading Style Sheets'
    };
    
    const info = techInfo[tech] || `${tech} - A technology I work with`;
    showNotification(`💡 ${tech}: ${info}`, 'info');
}

// Progressive Web App Features
function initializeProgressiveWebApp() {
    // Register service worker (if available)
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(() => {
            // Service worker not available, that's okay
        });
    }
    
    // Add to home screen prompt
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        
        const installButton = document.createElement('button');
        installButton.className = 'install-button';
        installButton.innerHTML = '<i class="fas fa-download"></i> Install App';
        installButton.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            background: #3b82f6;
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 25px;
            cursor: pointer;
            z-index: 1000;
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(installButton);
        
        installButton.addEventListener('click', () => {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((result) => {
                if (result.outcome === 'accepted') {
                    showNotification('📱 Portfolio installed successfully!', 'success');
                }
                installButton.remove();
                deferredPrompt = null;
            });
        });
        
        setTimeout(() => {
            if (installButton.parentNode) {
                installButton.remove();
            }
        }, 10000);
    });
    
    // Network status indicator
    const updateNetworkStatus = () => {
        const status = navigator.onLine ? 'online' : 'offline';
        if (!navigator.onLine) {
            showNotification('📶 You\'re offline. Some features may be limited.', 'info');
        }
    };
    
    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);
}
    // Network status indicator
    const updateNetworkStatus = () => {
        const status = navigator.onLine ? 'online' : 'offline';
        if (!navigator.onLine) {
            showNotification('📶 You\'re offline. Some features may be limited.', 'info');
        }
    };
    
    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);
}

// ========== MOBILE RESPONSIVE ENHANCEMENTS ==========

// Mobile touch and interaction improvements
function initMobileEnhancements() {
    // Detect mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        document.body.classList.add('mobile-device');
        
        // Mobile-specific navigation handling
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (navToggle && navMenu) {
            // Close menu when clicking outside
            document.addEventListener('click', function(event) {
                if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            });
            
            // Close menu when clicking on a link
            const navLinks = navMenu.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                });
            });
        }
        
        // Touch-friendly form interactions
        const formInputs = document.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
                // Scroll to input on focus (helpful on mobile)
                setTimeout(() => {
                    this.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 300);
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.classList.remove('focused');
            });
        });
        
        // Viewport height fix for mobile browsers
        function setVH() {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
        
        setVH();
        window.addEventListener('resize', setVH);
        window.addEventListener('orientationchange', setVH);
    }
}

// Initialize mobile enhancements when DOM is loaded
document.addEventListener('DOMContentLoaded', initMobileEnhancements);
