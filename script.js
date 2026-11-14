document.addEventListener('DOMContentLoaded', () => {
    // Cookie Logic
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    const refuseBtn = document.getElementById('refuse-cookies');

    if (localStorage.getItem('cookiesAccepted')) {
        cookieBanner.classList.add('hidden');
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.classList.add('hidden');
    });

    refuseBtn.addEventListener('click', () => {
        cookieBanner.classList.add('hidden');
    });

    // Language Tabs
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.lang-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(`content-${tab.dataset.lang}`).classList.add('active');
        });
    });

    // Simple Fade In Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('fade-in-visible');
        });
    });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
