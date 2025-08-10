// Simplified Loader Exit Script
document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('page-loader');
    const progressFill = document.querySelector('.bd-progress-fill');
    const progressPercentage = document.querySelector('.loader-percentage');
    
    if (!loader || !progressFill || !progressPercentage) return;
    
    // Simulate loading progress with simple timing
    let progress = 0;
    
    const interval = setInterval(() => {
        progress += 2;
        
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            // Hide loader after completion
            setTimeout(() => {
                loader.classList.add('hide');
            }, 500);
        }
        
        // Update progress UI
        progressFill.style.width = progress + '%';
        progressPercentage.textContent = progress + '%';
    }, 50);
});
