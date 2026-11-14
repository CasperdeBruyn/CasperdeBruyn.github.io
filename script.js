// Casper de Bruyn Portfolio - Core Logic
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio system initialized with 'Dark Workshop' theme.");
    
    // Cookie banner management
    const cookieBanner = document.getElementById('cookie-banner');
    if (cookieBanner) {
        document.getElementById('accept-cookies')?.addEventListener('click', () => {
            cookieBanner.style.display = 'none';
            localStorage.setItem('cookiesAccepted', 'true');
        });
    }

    // Intersection Observer for scroll animations
    const observerOptions = { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Fade-in initialization for project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)";
        observer.observe(card);
    });
});
