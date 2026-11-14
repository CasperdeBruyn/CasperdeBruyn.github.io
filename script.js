// Language Switcher
function switchLang(lang) {
    document.querySelectorAll('.lang-content').forEach(div => div.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(`content-${lang}`).classList.add('active');
    event.target.classList.add('active');
}

// Cookie Banner Logic
const banner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('accept-cookies');
const refuseBtn = document.getElementById('refuse-cookies');

if (localStorage.getItem('cookiesAccepted')) {
    banner.classList.add('hidden');
}

acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    banner.classList.add('hidden');
});

refuseBtn.addEventListener('click', () => {
    banner.classList.add('hidden');
});
