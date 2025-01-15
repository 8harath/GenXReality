document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Fade-in animation for sections
    const fadeInElements = document.querySelectorAll('.fade-in');
    const observerOptions = {
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeInElements.forEach(element => {
        observer.observe(element);
    });

    // Slide-in animation for sections
    const slideInElements = document.querySelectorAll('.slide-in');
    slideInElements.forEach(element => {
        observer.observe(element);
    });

    // Parallax effect for hero section
    const heroSection = document.getElementById('hero');
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });

    // Add fade-in class to header
    const header = document.querySelector('header');
    header.classList.add('fade-in');

    // Add slide-in class to sections
    const aboutSection = document.getElementById('about');
    const servicesSection = document.getElementById('services');
    const vrLabSection = document.getElementById('vr-lab');
    const marketOpportunitySection = document.getElementById('market-opportunity');
    aboutSection.classList.add('slide-in');
    servicesSection.classList.add('slide-in');
    vrLabSection.classList.add('slide-in');
    marketOpportunitySection.classList.add('slide-in');

    // Add fade-in class to contact section
    const contactSection = document.getElementById('contact');
    contactSection.classList.add('fade-in');

    // Bounce animation for buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.add('bounce');
    });

    // Rotate animation for icons
    const icons = document.querySelectorAll('nav ul li a, footer ul li a');
    icons.forEach(icon => {
        icon.classList.add('rotate');
    });
});
