// Casper de Bruyn Portfolio - Core Logic
document.addEventListener('DOMContentLoaded', () => {
    console.log("System initialized: Dark Workshop theme active.");

    // Geoptimaliseerde Scroll Animatie Observer
    const observerOptions = { 
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    // Initialiseer elementen voor fade-in
    document.querySelectorAll('.project-card, .section-content, .hero').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Cookie banner management
    const cookieBanner = document.getElementById('cookie-banner');
    if (cookieBanner) {
        document.getElementById('accept-cookies')?.addEventListener('click', () => {
            cookieBanner.style.display = 'none';
            localStorage.setItem('cookiesAccepted', 'true');
        });
    }
});
