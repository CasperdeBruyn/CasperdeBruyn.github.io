document.addEventListener('DOMContentLoaded', () => {
    // 1. Verdiepte Content Mapping
    const content = {
        en: {
            h2: "The Workshop: Where Physical Craft Meets Digital Architecture.",
            about: "Born in 1997 and rooted in Delft, I operate at the intersection of tangible craftsmanship and digital complexity. Studying Communication & Multimedia Design at Hogeschool Utrecht, I carry a 'maker-mindset' that moves fluidly between the woodworking shop and the IDE. My work is a study in precision and creative endurance: whether I am constructing a custom shelving unit inspired by Poul Cadovius’ Royal System in birch plywood, implementing French-cleat furniture systems, or architecting my own Linux AI Homelab. I don't just design interfaces; I build enduring systems that bridge the gap between human intuition and machine efficiency."
        }
    };

    // 2. Language Persistence & Injectie
    const langBtns = document.querySelectorAll('.lang-btn');
    const workshopTitle = document.querySelector('.workshop-title');
    const aboutText = document.querySelector('.about-text');

    function updateContent(lang) {
        if(content[lang]) {
            if(workshopTitle) workshopTitle.innerText = content[lang].h2;
            if(aboutText) aboutText.innerText = content[lang].about;
        }
        localStorage.setItem('lang', lang);
        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => updateContent(btn.dataset.lang));
    });

    updateContent(localStorage.getItem('lang') || 'en');

    // 3. Staggered Intersection Observer
    const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('is-visible');
                }, index * 150);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card, .about-section, section').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});
