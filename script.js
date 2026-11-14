document.addEventListener('DOMContentLoaded', () => {
    // Language Switcher
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.lang-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            tab.classList.add('active');
            document.getElementById(`content-${tab.getAttribute('data-lang')}`).classList.add('active');
        });
    });

    // Cookie Banner
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    const refuseBtn = document.getElementById('refuse-cookies');

    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.style.display = 'block';
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.style.display = 'none';
    });

    refuseBtn.addEventListener('click', () => {
        cookieBanner.style.display = 'none';
    });

    // Scroll Observer for Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('fade-in');
        });
    });

    document.querySelectorAll('.project-card').forEach(card => observer.observe(card));
});
