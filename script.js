document.addEventListener('DOMContentLoaded', () => {
    // 1. Data Mapping (12 projecten met detail-assets)
    const PROJECTS = [
        { id: "bomby-bird", title: "Bomby Bird", story: "Arcade mechanics...", gallery: ["b1.jpg", "b2.jpg"] },
        // ... (rest van de 12 projecten)
    ];

    // 2. Drawer & Gallery Logic
    const drawer = document.getElementById('projectDrawer');
    const drawerContent = document.getElementById('drawerContent');

    window.openDrawer = (projectSlug) => {
        const p = PROJECTS.find(x => x.id === projectSlug);
        drawerContent.innerHTML = `
            <div><h2>${p.title}</h2><p>${p.story}</p></div>
            <div class="gallery">${p.gallery.map(img => `<img src="assets/images/${img}">`).join('')}</div>
        `;
        drawer.classList.add('active');
    };

    // 3. Email Obfuscation
    const emailObf = btoa("casper.debruyn@hotmail.com");
    const container = document.getElementById('obf-link-container');
    container.innerHTML = `<a href="mailto:${atob(emailObf)}" class="email-secure-btn">CONTACT</a>`;

    // 4. Form Submission Handling
    const form = document.querySelector('.transmission-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        // Simuleer verzending
        form.classList.add('hidden');
        document.getElementById('formFeedback').classList.remove('hidden');
    });

    // 5. Drawer Global Events
    document.querySelector('.drawer-close').onclick = () => drawer.classList.remove('active');
    window.addEventListener('keydown', (e) => { if(e.key === 'Escape') drawer.classList.remove('active'); });
    
    // 6. Init Cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => openDrawer(card.dataset.project));
    });
});
