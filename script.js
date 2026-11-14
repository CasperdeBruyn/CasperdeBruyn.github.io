document.addEventListener('DOMContentLoaded', () => {
    // Language Tab Switching
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

    // Cookie Banner
    const banner = document.getElementById('cookie-banner');
    document.getElementById('accept-cookies').addEventListener('click', () => banner.style.display = 'none');
    document.getElementById('refuse-cookies').addEventListener('click', () => banner.style.display = 'none');

    // Simple Intersection Observer for Fade-in effects
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
