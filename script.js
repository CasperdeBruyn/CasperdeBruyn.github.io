document.addEventListener('DOMContentLoaded', () => {
    // 1. Content Mapping voor storytelling
    const content = {
        en: {
            h2: "The Workshop: Where Physical Craft Meets Digital Architecture.",
            about: "Born in 1997 and based in Delft, I bridge the gap between tangible craftsmanship and digital complexity. Studying Communication & Multimedia Design at Hogeschool Utrecht, I operate with a 'maker-mindset' that moves fluidly between the workshop and the IDE. My work is a blend of precision and creativity: whether I'm crafting furniture like my Poul Cadovius-inspired shelving system in birch multiplex, installing custom smart home lighting, or maintaining my local Linux AI Homelab that powers my digital life and this very portfolio. I don't just design; I build."
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

    // 3. Staggered Intersection Observer voor animaties
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

    document.querySelectorAll('.project-card, .about-section, section').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});
