document.addEventListener('DOMContentLoaded', () => {
    const PROJECTS = [
        { id: "bomby-bird", title: "Bomby Bird", story: "Custom arcade game development.", images: ["b1.jpg", "b2.jpg"] },
        { id: "grijpmachine", title: "Grijpmachine", story: "Mechanical engineering & fabrication.", images: ["g1.jpg"] },
        { id: "vechtclub", title: "Vechtclub XL", story: "Community event design.", images: ["v1.jpg"] },
        { id: "smart-home", title: "Home Lab", story: "Linux infrastructure & IoT.", images: ["l1.jpg"] },
        { id: "cadovius-desk", title: "Cadovius Style Desk", story: "Fine woodworking project.", images: ["w1.jpg"] },
        { id: "french-cleat-bench", title: "Floating Bench", story: "Structural woodwork.", images: ["f1.jpg"] },
        { id: "screen-printing", title: "Zeefdruk", story: "Graphic art exploration.", images: ["s1.jpg"] },
        { id: "design-poster", title: "Concept Posters", story: "Branding and layouts.", images: ["p1.jpg"] },
        { id: "meta-agent", title: "AI Agent", story: "Portfolio automator.", images: ["a1.jpg"] },
        { id: "ring-craft", title: "Goldsmithing", story: "Jewelry design.", images: ["j1.jpg"] },
        { id: "party-decor", title: "Event Scenography", story: "Atmospheric installations.", images: ["d1.jpg"] },
        { id: "ux-research", title: "CMD Thesis", story: "UX/UI design research.", images: ["u1.jpg"] }
    ];

    const drawer = document.getElementById('projectDrawer');
    const drawerContent = document.getElementById('drawerContent');

    const openDrawer = (id) => {
        const project = PROJECTS.find(p => p.id === id);
        if (!project) return;
        drawerContent.innerHTML = `
            <h2 class="section-title" style="color: var(--accent-copper)">${project.title}</h2>
            <p style="line-height: 1.8">${project.story}</p>
            <div style="display:grid; gap: 15px;">${project.images.map(img => `<img src="assets/images/${img}" class="gallery-img">`).join('')}</div>
        `;
        drawer.classList.add('active');
    };

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => openDrawer(card.dataset.project));
    });

    document.querySelector('.drawer-close').addEventListener('click', () => drawer.classList.remove('active'));

    // Form submission
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('formFeedback').classList.remove('hidden');
        form.style.display = 'none';
    });
});
