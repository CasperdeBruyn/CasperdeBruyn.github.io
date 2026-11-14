// Language Switcher
function switchLang(lang) {
    // Buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Content
    document.querySelectorAll('.lang-content').forEach(content => content.classList.remove('active'));
    document.getElementById(`content-${lang}`).classList.add('active');
}

// Cookie Banner Logic
const cookieBanner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('accept-cookies');
const refuseBtn = document.getElementById('refuse-cookies');

if (localStorage.getItem('cookiesAccepted')) {
    cookieBanner.style.display = 'none';
}

acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBanner.style.display = 'none';
});

refuseBtn.addEventListener('click', () => {
    cookieBanner.style.display = 'none';
});

// Simple Scroll Effect
window.addEventListener('scroll', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.style.opacity = 1;
        }
    });
});
