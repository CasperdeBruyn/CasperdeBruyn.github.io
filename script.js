document.addEventListener('DOMContentLoaded', () => {
    // Language Switcher
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

    // Fade-in effect on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in, .project-card').forEach(el => observer.observe(el));
});
