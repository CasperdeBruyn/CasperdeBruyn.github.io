// Language Switching
function switchLang(lang) {
    document.querySelectorAll('.lang-content').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    
    document.getElementById(`content-${lang}`).classList.add('active');
    event.target.classList.add('active');
}

// Cookie Banner Logic
const banner = document.getElementById('cookie-banner');
const accept = document.getElementById('accept-cookies');
const refuse = document.getElementById('refuse-cookies');

if (localStorage.getItem('cookiesAccepted')) {
    banner.style.display = 'none';
}

accept.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    banner.style.display = 'none';
});

refuse.addEventListener('click', () => {
    banner.style.display = 'none';
});
