document.addEventListener('DOMContentLoaded', () => {
    // 1. Language Persistence Logic
    const langBtns = document.querySelectorAll('.lang-btn');
    const savedLang = localStorage.getItem('lang') || 'en';

    function setLanguage(lang) {
        localStorage.setItem('lang', lang);
        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        // Hier kan logica voor dynamische content swap worden toegevoegd
        console.log(`Language set to: ${lang}`);
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    setLanguage(savedLang);

    // 2. Staggered Intersection Observer
    const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('is-visible');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card, .about-grid').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // 3. Filter Functionaliteit (Geoptimaliseerd)
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            document.querySelectorAll('.project-card').forEach(card => {
                const isMatch = filterValue === 'all' || card.dataset.category === filterValue;
                card.style.opacity = isMatch ? '1' : '0';
                setTimeout(() => {
                    card.style.display = isMatch ? 'block' : 'none';
                }, 300);
            });
        });
    });
});
