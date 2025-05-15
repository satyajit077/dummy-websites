// JavaScript code can be added to enhance interactivity or functionality of the website

// Add smooth scrolling to navigation links
var navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        var targetSection = document.querySelector(link.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});
