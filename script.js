// Iteratie 123: Basis interactie
document.addEventListener('DOMContentLoaded', () => {
    console.log("Casper de Bruyn Portfolio - Iteratie 123 Geladen.");

    // Smooth scroll voor interne links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
