// Casper de Bruyn Portfolio - Core Logic
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio system initialized with Sophisticated Craft theme.");
    
    // Cookie banner management
    const cookieBanner = document.getElementById('cookie-banner');
    if (cookieBanner) {
        document.getElementById('accept-cookies').addEventListener('click', () => {
            cookieBanner.style.display = 'none';
            localStorage.setItem('cookiesAccepted', 'true');
        });
        document.getElementById('refuse-cookies').addEventListener('click', () => {
            cookieBanner.style.display = 'none';
        });
    }

    // Scroll reveal/fade effect could be added here in future iterations
});
