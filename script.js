// Language Switcher
function switchLang(lang) {
    const nl = document.getElementById('content-nl');
    const en = document.getElementById('content-en');
    const btns = document.querySelectorAll('.tab-btn');
    
    if (lang === 'nl') {
        nl.classList.add('active');
        en.classList.remove('active');
    } else {
        en.classList.add('active');
        nl.classList.remove('active');
    }
    
    btns.forEach(btn => btn.classList.toggle('active'));
}

// Cookie Banner Logic
const banner = document.getElementById('cookie-banner');
document.getElementById('accept-cookies').addEventListener('click', () => {
    banner.style.display = 'none';
    localStorage.setItem('cookies', 'accepted');
});

document.getElementById('refuse-cookies').addEventListener('click', () => {
    banner.style.display = 'none';
});

// Initial check for cookies
if (localStorage.getItem('cookies') === 'accepted') {
    banner.style.display = 'none';
}

// Intersection Observer for Animations
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card').forEach(card => observer.observe(card));
