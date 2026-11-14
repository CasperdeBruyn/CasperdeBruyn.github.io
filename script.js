// Cookie Logic
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

// Language Switcher Logic
function switchLang(lang) {
    const contents = document.querySelectorAll('.lang-content');
    const btns = document.querySelectorAll('.tab-btn');
    
    contents.forEach(c => c.classList.remove('active'));
    btns.forEach(b => b.classList.remove('active'));
    
    document.getElementById(`content-${lang}`).classList.add('active');
    event.target.classList.add('active');
}

// Mobile Menu Toggle (Simple)
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});
