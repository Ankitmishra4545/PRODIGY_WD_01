// Selecting the header
const header = document.querySelector('header');

// Function to change background color on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#222';  // Darker background when scrolled
    } else {
        header.style.backgroundColor = '#333';  // Default background
    }
});
