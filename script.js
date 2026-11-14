document.addEventListener('DOMContentLoaded', () => {
    // Cookie banner logic
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');

    if (!localStorage.getItem('cookiesAccepted')) {
        banner.style.display = 'flex';
    } else {
        banner.style.display = 'none';
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        banner.style.display = 'none';
    });

    // Fade-in effect on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
