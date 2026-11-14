// Language Switcher
function switchLang(lang) {
    const contents = document.querySelectorAll('.lang-content');
    const buttons = document.querySelectorAll('.tab-btn');
    
    contents.forEach(content => content.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(`content-${lang}`).classList.add('active');
    event.target.classList.add('active');
}

// Cookie Banner Logic
const cookieBanner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('accept-cookies');
const refuseBtn = document.getElementById('refuse-cookies');

if (localStorage.getItem('cookiesAccepted')) {
    cookieBanner.classList.add('hidden');
}

acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBanner.classList.add('hidden');
});

refuseBtn.addEventListener('click', () => {
    cookieBanner.classList.add('hidden');
});
