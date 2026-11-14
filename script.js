document.addEventListener('DOMContentLoaded', () => {
    // 1. Content Mapping voor storytelling
    const content = {
        en: {
            h2: "The Workshop: Crafting from Wood to Bits.",
            about: "Born in '97 and based in Delft, I bridge the gap between physical craft and digital architecture. Currently studying CMD at the Hogeschool Utrecht, my journey is defined by a 'maker-mindset' that moves seamlessly between the workshop and the IDE. Whether I'm designing custom furniture—like my current Poul Cadovius-inspired shelving in birch plywood—or engineering smart home integrations and maintaining my local Linux AI Homelab, my goal is the same: creating functional, tactile, and meaningful solutions."
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
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card, .about-section, section').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // 4. Project Filter Functionaliteit
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
