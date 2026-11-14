document.addEventListener('DOMContentLoaded', () => {
    // Cookie Handling
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    const refuseBtn = document.getElementById('refuse-cookies');

    acceptBtn.addEventListener('click', () => {
        cookieBanner.style.display = 'none';
        localStorage.setItem('cookies', 'accepted');
    });

    refuseBtn.addEventListener('click', () => {
        cookieBanner.style.display = 'none';
    });

    if (localStorage.getItem('cookies') === 'accepted') {
        cookieBanner.style.display = 'none';
    }

    // Language Switcher
    window.switchLang = (lang) => {
        const contents = document.querySelectorAll('.lang-content');
        const buttons = document.querySelectorAll('.tab-btn');

        contents.forEach(c => c.classList.remove('active'));
        buttons.forEach(b => b.classList.remove('active'));

        document.getElementById(`content-${lang}`).classList.add('active');
        event.currentTarget.classList.add('active');
    };

    // Intersection Observer for Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in, .project-card').forEach(el => observer.observe(el));
});
