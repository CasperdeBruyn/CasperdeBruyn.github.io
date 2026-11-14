document.addEventListener('DOMContentLoaded', () => {
    // Tab switching for About Me
    const tabBtns = document.querySelectorAll('.tab-btn');
    const langContents = document.querySelectorAll('.lang-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            langContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(`content-${btn.dataset.lang}`).classList.add('active');
        });
    });

    // Fade-in animation on scroll
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .project-card').forEach(el => observer.observe(el));
});
