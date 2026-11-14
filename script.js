document.addEventListener('DOMContentLoaded', () => {
    // Geoptimaliseerde Fade-in observer voor betere performance
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop met observeren zodra zichtbaar
            }
        });
    }, observerOptions);

    // Initialiseer animaties
    document.querySelectorAll('.project-card, .section-title, .workbench-section').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Filter Functionaliteit
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                card.style.display = (filterValue === 'all' || category === filterValue) ? 'block' : 'none';
            });
        });
    });
});
