document.addEventListener('DOMContentLoaded', () => {
    const PROJECTS = [
        { id: "bomby-bird", title: "Bomby Bird", story: "Arcade engine built from scratch.", gallery: ["b1.jpg", "b2.jpg"] },
        // ... (De rest van de 12 projecten laden via objecten)
    ];

    const drawer = document.getElementById('projectDrawer');
    const drawerContent = document.getElementById('drawerContent');

    // Dynamische Drawer Loader met error-handling
    const openDrawer = (projectSlug) => {
        const p = PROJECTS.find(x => x.id === projectSlug);
        if (!p) return;

        let galleryHTML = p.gallery.map(img => `
            <img src="assets/images/${img}" class="gallery-img" 
                 onerror="this.style.display='none'; console.error('Asset missing: ${img}')">
        `).join('');

        drawerContent.innerHTML = `
            <h2>${p.title}</h2>
            <p>${p.story}</p>
            <div class="gallery-container">${galleryHTML}</div>
        `;
        drawer.classList.add('active');
    };

    // Card Event Listeners
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => openDrawer(card.dataset.project));
    });

    // Sluit functionaliteit
    const closeDrawer = () => drawer.classList.remove('active');
    document.querySelector('.drawer-close').onclick = closeDrawer;
    window.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeDrawer(); });

    // Contact Form (Formspree)
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', async (e) => {
        const feedback = document.getElementById('formFeedback');
        try {
            const response = await fetch(form.action, {
                method: 'POST', body: new FormData(form), headers: {'Accept': 'application/json'}
            });
            if (response.ok) {
                form.reset();
                form.style.display = 'none';
                feedback.classList.remove('hidden');
            }
        } catch (err) { alert("Transmission failed. Please use email directly."); }
    });

    // Logo Scroll Switch
    window.addEventListener('scroll', () => {
        const logo = document.querySelector('.logo-small');
        if (window.scrollY > 100) logo.style.transform = 'scale(0.8)';
        else logo.style.transform = 'scale(1)';
    });
});
