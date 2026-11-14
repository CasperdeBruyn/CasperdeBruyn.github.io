// Basis logica voor portfolio interacties
document.addEventListener('DOMContentLoaded', () => {
    console.log("Casper de Bruyn Portfolio Geladen.");
    
    // Cookie banner interactie (eenvoudig)
    const cookieBanner = document.getElementById('cookie-banner');
    if (cookieBanner) {
        document.getElementById('accept-cookies').addEventListener('click', () => {
            cookieBanner.style.display = 'none';
        });
        document.getElementById('refuse-cookies').addEventListener('click', () => {
            cookieBanner.style.display = 'none';
        });
    }
});
