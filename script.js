// Language Switcher
function switchLang(lang) {
    const nl = document.getElementById('content-nl');
    const en = document.getElementById('content-en');
    const btns = document.querySelectorAll('.tab-btn');

    if (lang === 'nl') {
        nl.classList.add('active');
        en.classList.remove('active');
        btns[0].classList.add('active');
        btns[1].classList.remove('active');
    } else {
        en.classList.add('active');
        nl.classList.remove('active');
        btns[1].classList.add('active');
        btns[0].classList.remove('active');
    }
}

// Cookie Banner Logic
const banner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('accept-cookies');
const refuseBtn = document.getElementById('refuse-cookies');

if (localStorage.getItem('cookiesAccepted')) {
    banner.style.display = 'none';
}

acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    banner.style.display = 'none';
});

refuseBtn.addEventListener('click', () => {
    banner.style.display = 'none';
});

// Smooth Scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
