// Casper de Bruyn Portfolio - Core Logic
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio system initialized with 'Dark Workshop' theme.");
    
    // Cookie banner management
    const cookieBanner = document.getElementById('cookie-banner');
    if (cookieBanner) {
        document.getElementById('accept-cookies').addEventListener('click', () => {
            cookieBanner.style.display = 'none';
            localStorage.setItem('cookiesAccepted', 'true');
        });
        document.getElementById('refuse-cookies').addEventListener('click', () => {
            cookieBanner.style.display = 'none';
        });
    }

    // Future-proofing: Intersection Observer for scroll animations
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card').forEach(card => observer.observe(card));
});
