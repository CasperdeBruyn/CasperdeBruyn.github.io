/**
 * Casper de Bruyn Portfolio - Logic Builder & Interaction Layer
 * Handles animations, dynamic project filtering, terminal form transmission, project modals, and cookies.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Intersection Observer for Smooth Fade-In Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card, .about-card, .about-content, .homelab-content, .hobbies-box, .terminal-form').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // 2. Accessibility & Custom Focus Outlines
    document.querySelectorAll('a, button, input, textarea').forEach(element => {
        element.addEventListener('focus', () => {
            element.style.outline = '2px solid var(--accent-maker)';
            element.style.outlineOffset = '3px';
        });
        element.addEventListener('blur', () => {
            element.style.outline = 'none';
        });
    });

    // 3. Dynamic Status Check Simulation for the Linux AI Homelab & Navbar
    const statusIndicator = document.querySelector('.status-indicator');
    if (statusIndicator) {
        setInterval(() => {
            statusIndicator.style.opacity = statusIndicator.style.opacity === '0.6' ? '1' : '0.6';
        }, 2000);
    }

    // 4. Workbench Filtering Logic
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                    setTimeout(() => card.style.opacity = '1', 50);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });
        });
    });

    // 5. Project Modal Open Handlers
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectKey = card.getAttribute('data-project');
            openProjectModal(projectKey);
        });
    });
});

/**
 * Open Project Modal with details and images based on project key
 */
function openProjectModal(projectKey) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body-content');

    let title = "Project Archive";
    let description = "Detailed breakdown and inspection gallery.";
    let images = [];

    if (projectKey === 'grijpmachine') {
        title = "Grijpmachine (\"Lucky Grapple\")";
        description = "A fully functional physical arcade claw machine built in 2023–2024. Combining precision woodworking with custom pneumatic syringe controls and robust arcade hardware.";
        images = ['assets/images/grijpmachine_1.jpg', 'assets/images/about-me_1.jpg', 'assets/images/about-me_2.jpg'];
    } else if (projectKey === 'de-grinch-sloopt-de-kerstboom') {
        title = "De Grinch sloopt de kerstboom";
        description = "A rapid 2023 tabletop prototype featuring DIY popsicle-stick catapults, a tiered 3D Christmas tree, and playful interactive storytelling elements.";
        images = ['assets/images/de-grinch-sloopt-de-kerstboom_1.jpg', 'assets/images/about-me_3.jpg'];
    } else if (projectKey === 'bomby-bird') {
        title = "Bomby Bird";
        description = "A custom retro-styled Flappy Bird spin written completely from scratch, featuring bespoke 2D/3D digital art assets and custom physics.";
        images = ['assets/images/bomby-bird_1.jpg', 'assets/images/about-me_38.jpg'];
    } else if (projectKey === 'generation-plastic-soup') {
        title = "Generation Plastic Soup";
        description = "A 2025 Game Jam collaborative project designed to raise awareness about EU values, environmental sustainability, and rising sea levels.";
        images = ['assets/images/generation-plastic-soup_1.jpg', 'assets/images/about-me_2.jpg'];
    } else {
        title = "Project Archive";
        description = "Comprehensive documentation from Casper de Bruyn's maker archives.";
        images = ['assets/images/about-me_1.jpg'];
    }

    let galleryHtml = '<div class="modal-gallery">';
    images.forEach(img => {
        galleryHtml += `<img src="${img}" alt="Project archive photo" loading="lazy">`;
    });
    galleryHtml += '</div>';

    modalBody.innerHTML = `
        <h2 style="font-family: 'Playfair Display', serif; font-size: 2rem; margin-bottom: 1rem; color: var(--text-primary);">${title}</h2>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.6;">${description}</p>
        <h4 style="font-family: 'JetBrains Mono', monospace; color: var(--accent-maker); margin-bottom: 0.75rem;">// ARCHIVE PHOTO SET</h4>
        ${galleryHtml}
    `;

    modal.classList.add('active');
}

/**
 * Close Project Modal
 */
function closeProjectModal() {
    const modal = document.getElementById('project-modal');
