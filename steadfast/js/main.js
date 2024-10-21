// Smooth scroll to sections when clicking navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = this.getAttribute('href');  // Get the section ID from href
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth'  // Scroll smoothly to the section
        });
    });
});

// Modal Functionality
const modal = document.getElementById('myModal');  // Modal element
const closeModalBtn = document.getElementsByClassName('close')[0];  // Button to close the modal

// Open the modal
document.getElementById('openModal').addEventListener('click', () => {
    modal.style.display = 'block';  // Show the modal when the button is clicked
});

// Close the modal when the user clicks the 'x' button
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';  // Hide the modal when the close button is clicked
});

// Close the modal when the user clicks outside of the modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';  // Hide the modal if the user clicks outside of it
    }
});

// Mobile Navigation Toggle
const mobileNavToggle = document.getElementById('mobile-nav-toggle');  // Mobile nav toggle button (hamburger icon)
const navLinks = document.querySelector('.nav-links');  // Navigation links

mobileNavToggle.addEventListener('click', () => {
    const expanded = mobileNavToggle.getAttribute('aria-expanded') === 'true' || false; // Get the current state
    mobileNavToggle.setAttribute('aria-expanded', !expanded);  // Toggle the expanded state
    navLinks.classList.toggle('active');  // Toggle the 'active' class to show/hide the navigation links
});
