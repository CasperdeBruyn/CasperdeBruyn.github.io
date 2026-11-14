// Casper de Bruyn Portfolio - Core Logic (Iteratie 150)
document.addEventListener('DOMContentLoaded', () => {
    console.log("System initialized: 'The Dark Workshop' theme active.");

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
    document.querySelectorAll('.project-card, .section-content, .hero, .section-title').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Project Filter functionaliteit
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Verwijder active class van alle knoppen
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.classList.contains(filterValue)) {
                    card.style.display = 'flex';
                    setTimeout(() => card.classList.add('is-visible'), 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Cookie banner management
    const cookieBanner = document.getElementById('cookie-banner');
    if (cookieBanner && localStorage.getItem('cookiesAccepted') === 'true') {
        cookieBanner.style.display = 'none';
    }
    
    document.getElementById('accept-cookies')?.addEventListener('click', () => {
        if (cookieBanner) {
            cookieBanner.style.display = 'none';
        }
        localStorage.setItem('cookiesAccepted', 'true');
    });
});
