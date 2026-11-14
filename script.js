// Language Switcher
function switchLang(lang) {
    const contents = document.querySelectorAll('.lang-content');
    const buttons = document.querySelectorAll('.tab-btn');
    
    contents.forEach(c => c.classList.remove('active'));
    buttons.forEach(b => b.classList.remove('active'));
    
    document.getElementById('content-' + lang).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Cookie Banner Logic
const cookieBanner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('accept-cookies');
const refuseBtn = document.getElementById('refuse-cookies');

acceptBtn.addEventListener('click', () => {
    cookieBanner.classList.add('hidden');
    localStorage.setItem('cookies', 'accepted');
});

refuseBtn.addEventListener('click', () => {
    cookieBanner.classList.add('hidden');
});

if (localStorage.getItem('cookies') === 'accepted') {
    cookieBanner.classList.add('hidden');
}

// Scroll Reveal Animations
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .about-section').forEach(section => {
    observer.observe(section);
});
