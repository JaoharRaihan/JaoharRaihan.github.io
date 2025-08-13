// Simple and Reliable Mobile Loader Script
document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('page-loader');
    const progressFill = document.querySelector('.bd-progress-fill');
    const progressPercentage = document.querySelector('.loader-percentage');
    
    if (!loader || !progressFill || !progressPercentage) return;
    
    // Simple, fast loading progress
    let progress = 0;
    const loadingSpeed = 50; // Fixed speed for consistency
    
    const interval = setInterval(() => {
        // Random increment for realistic feel
        const increment = Math.random() * 4 + 1;
        progress = Math.min(progress + increment, 100);
        
        // Update UI
        progressFill.style.width = progress + '%';
        progressPercentage.textContent = Math.floor(progress) + '%';
        
        // Complete loading
        if (progress >= 100) {
            clearInterval(interval);
            
            // Add completion glow effect
            progressFill.style.boxShadow = '0 0 20px rgba(244, 42, 65, 0.8)';
            
            // Hide loader after brief delay
            setTimeout(() => {
                loader.classList.add('hide');
                
                // Remove from DOM after animation
                setTimeout(() => {
                    if (loader.parentNode) {
                        loader.remove();
                    }
                }, 500);
            }, 300);
        }
    }, loadingSpeed);
    
    // Ensure loader doesn't hang (safety timeout)
    setTimeout(() => {
        if (progress < 100) {
            progress = 100;
            progressFill.style.width = '100%';
            progressPercentage.textContent = '100%';
            clearInterval(interval);
        }
    }, 3000); // Max 3 seconds
});
