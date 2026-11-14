document.addEventListener('DOMContentLoaded', () => {
    // Cookie Handling
    const cookieBanner = document.getElementById('cookie-banner');
    document.getElementById('accept-cookies').addEventListener('click', () => {
        cookieBanner.style.display = 'none';
        localStorage.setItem('cookiesAccepted', 'true');
    });
    document.getElementById('refuse-cookies').addEventListener('click', () => {
        cookieBanner.style.display = 'none';
    });

    if (localStorage.getItem('cookiesAccepted') === 'true') {
        cookieBanner.style.display = 'none';
    }

    // Language Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const langContents = document.querySelectorAll('.lang-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const lang = btn.getAttribute('data-lang');
            langContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `content-${lang}`) content.classList.add('active');
            });
        });
    });

    // Back to top
    document.getElementById('back-to-top').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
