/**
 * Casper de Bruyn Portfolio - Logic Builder
 * Handle dynamische project rendering en UI interacties.
 */

const projects = [
    { title: "Bomby Bird", desc: "Interactive game architecture and character design.", img: "assets/images/bomby-bird_1.jpg" },
    { title: "The Grinch", desc: "Rapid prototyping of a physical game mechanism.", img: "assets/images/de-grinch-sloopt-de-kerstboom_1.jpg" },
    { title: "Plastic Soup", desc: "Data visualization for environmental awareness.", img: "assets/images/generation-plastic-soup_1.jpg" }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamische Project Loader
    const grid = document.querySelector('.projects-grid');
    if (grid) {
        projects.forEach(p => {
            const card = document.createElement('div');
            card.className = 'project-card fade-in';
            card.innerHTML = `
                <img class="project-image" src="${p.img}" alt="${p.title}" loading="lazy">
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
            `;
            grid.appendChild(card);
        });
    }

    // 2. Intersection Observer voor animaties
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card, .about-content').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // 3. Toegankelijkheid: Skip link en focus management
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('focus', () => link.style.outline = '2px solid var(--accent-maker)');
        link.addEventListener('blur', () => link.style.outline = 'none');
    });
});
