// Tab Switching logic
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.lang-content').forEach(c => c.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(`content-${btn.dataset.lang}`).classList.add('active');
    });
});

// Cookie banner functionality
function acceptCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'true');
}

function refuseCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
}

// Initial state check
window.onload = () => {
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        document.getElementById('cookie-banner').style.display = 'none';
    }
};

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
