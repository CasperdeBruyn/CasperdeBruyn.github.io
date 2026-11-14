document.addEventListener('DOMContentLoaded', () => {
    // Language Toggle
    const tabButtons = document.querySelectorAll('.tab-btn');
    const langContents = document.querySelectorAll('.lang-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const lang = button.getAttribute('data-lang');
            langContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `content-${lang}`) {
                    content.classList.add('active');
                }
            });
        });
    });

    // Scroll Observer for Fade-in effects
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card').forEach(card => observer.observe(card));
});
