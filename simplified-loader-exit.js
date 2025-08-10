// Enhanced Mobile-Responsive Loader Script
document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('page-loader');
    const progressFill = document.querySelector('.bd-progress-fill');
    const progressPercentage = document.querySelector('.loader-percentage');
    
    if (!loader || !progressFill || !progressPercentage) return;
    
    // Detect mobile device for optimized loading
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isSlowConnection = navigator.connection && (navigator.connection.effectiveType === 'slow-2g' || navigator.connection.effectiveType === '2g');
    
    // Adjust loading speed based on device and connection
    let loadingSpeed = 60; // Default speed
    if (isMobile || isSlowConnection) {
        loadingSpeed = 40; // Faster on mobile/slow connections
    }
    
    // Enhanced loading progress with realistic timing
    let progress = 0;
    let loadingStage = 0;
    const stages = [
        { end: 20, speed: 80, message: 'Loading...' },
        { end: 50, speed: 60, message: 'Setting up...' },
        { end: 80, speed: 45, message: 'Almost ready...' },
        { end: 100, speed: 30, message: 'Complete!' }
    ];
    
    // Add Bengali loading messages for mobile
    const bengaliMessages = [
        'লোড হচ্ছে...', // Loading...
        'প্রস্তুত হচ্ছে...', // Setting up...
        'প্রায় তৈরি...', // Almost ready...
        'সম্পূর্ণ!' // Complete!
    ];
    
    function updateProgress() {
        const currentStage = stages[loadingStage];
        const usesBengali = isMobile && Math.random() > 0.5; // 50% chance to show Bengali on mobile
        
        // Increment progress with some randomness for realism
        const increment = Math.random() * 3 + 1;
        progress = Math.min(progress + increment, currentStage.end);
        
        // Update UI
        progressFill.style.width = progress + '%';
        progressPercentage.textContent = Math.floor(progress) + '%';
        
        // Add loading message on mobile
        if (isMobile) {
            const existingMessage = loader.querySelector('.loading-message');
            if (!existingMessage && progress > 10) {
                const messageEl = document.createElement('div');
                messageEl.className = 'loading-message';
                messageEl.style.cssText = `
                    position: absolute;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 0.9rem;
                    text-align: center;
                    animation: fadeInOut 2s infinite ease-in-out;
                `;
                loader.appendChild(messageEl);
                
                // Add fade animation
                const style = document.createElement('style');
                style.textContent = `
                    @keyframes fadeInOut {
                        0%, 100% { opacity: 0.6; }
                        50% { opacity: 1; }
                    }
                `;
                document.head.appendChild(style);
            }
            
            if (existingMessage) {
                const message = usesBengali ? bengaliMessages[loadingStage] : stages[loadingStage].message;
                existingMessage.textContent = message;
            }
        }
        
        // Check if current stage is complete
        if (progress >= currentStage.end) {
            if (loadingStage < stages.length - 1) {
                loadingStage++;
                loadingSpeed = stages[loadingStage].speed;
            } else {
                // Loading complete
                clearInterval(interval);
                
                // Add completion effects
                progressFill.style.boxShadow = '0 0 20px rgba(244, 42, 65, 0.8), 0 0 30px rgba(0, 106, 78, 0.6)';
                
                // Hide loader with enhanced mobile animation
                setTimeout(() => {
                    loader.classList.add('hide');
                    
                    // Remove loader from DOM after animation
                    setTimeout(() => {
                        if (loader.parentNode) {
                            loader.remove();
                        }
                    }, isMobile ? 800 : 600);
                }, isMobile ? 300 : 500);
                
                return;
            }
        }
    }
    
    // Start the loading animation
    const interval = setInterval(updateProgress, loadingSpeed);
    
    // Ensure loader doesn't stay too long
    const maxLoadTime = isMobile ? 4000 : 6000; // Shorter on mobile
    setTimeout(() => {
        if (progress < 100) {
            progress = 100;
            updateProgress();
        }
    }, maxLoadTime);
    
    // Add touch interaction for mobile users
    if (isMobile) {
        let touchCount = 0;
        loader.addEventListener('touchstart', function(e) {
            e.preventDefault();
            touchCount++;
            
            // Easter egg: triple tap to speed up loading
            if (touchCount >= 3) {
                clearInterval(interval);
                progress = 95;
                updateProgress();
                
                // Show fun message
                const easterEgg = document.createElement('div');
                easterEgg.textContent = '🚀 ত্বরিত লোডিং! (Speed Loading!)';
                easterEgg.style.cssText = `
                    position: absolute;
                    top: 30%;
                    left: 50%;
                    transform: translateX(-50%);
                    color: #f42a41;
                    font-size: 1rem;
                    font-weight: bold;
                    animation: bounceIn 0.5s ease-out;
                `;
                loader.appendChild(easterEgg);
                
                setTimeout(() => {
                    easterEgg.remove();
                }, 1500);
            }
            
            // Reset touch count after 2 seconds
            setTimeout(() => {
                touchCount = 0;
            }, 2000);
        });
    }
    
    // Optimize performance on low-end devices
    if (isMobile) {
        // Reduce animation complexity
        const symbols = loader.querySelectorAll('.bengali-symbol');
        symbols.forEach((symbol, index) => {
            if (index > 5) { // Keep only first 6 symbols on mobile
                symbol.style.display = 'none';
            }
        });
        
        // Disable floating elements on very small screens
        if (window.innerWidth < 380) {
            const floatingElements = loader.querySelector('.floating-elements');
            if (floatingElements) {
                floatingElements.style.display = 'none';
            }
        }
    }
    
    // Handle page visibility change (when user switches tabs)
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            // Speed up loading when page is hidden
            loadingSpeed = 20;
        } else {
            // Restore normal speed when page is visible
            loadingSpeed = isMobile ? 40 : 60;
        }
    });
});
