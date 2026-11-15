document.addEventListener('DOMContentLoaded', () => {
    // --- 1. FULL DATASET (12 Core + 4 Archive) ---
    const PROJECTS = [
        { id: "P-01", title: "Poul Cadovius System", slug: "poul-cadovius", tags: ["Wood"], story: "Modular wall unit." },
        { id: "P-02", title: "French Cleat Bench", slug: "french-cleat", tags: ["Craft"], story: "Floating bench study." },
        { id: "P-03", title: "Claw Machine", slug: "claw-machine", tags: ["Tech"], story: "Mechanical interaction." },
        { id: "P-04", title: "Vechtclub XL", slug: "vechtclub", tags: ["Brand"], story: "Industrial identity." },
        { id: "P-05", title: "Grinch Prototyping", slug: "grinch", tags: ["Rapid"], story: "Tabletop chaos." },
        { id: "P-06", title: "Screen-printing", slug: "screen-printing", tags: ["Art"], story: "Analogue production." },
        { id: "P-07", title: "Bomby Bird", slug: "bomby-bird", tags: ["Game"], story: "Arcade mechanics." },
        { id: "P-08", title: "Plastic Soup", slug: "plastic-soup", tags: ["Social"], story: "Impact card game." },
        { id: "P-09", title: "OSRS Poster", slug: "osrs-poster", tags: ["Design"], story: "Vector nostalgia." },
        { id: "P-10", title: "Picnicking w/ Sophie", slug: "sophie", tags: ["UX"], story: "Service mapping." },
        { id: "P-11", title: "HU Begeleidt", slug: "hu-begeleidt", tags: ["Research"], story: "Student platform." },
        { id: "P-12", title: "Kodak Retro", slug: "kodak", tags: ["Branding"], story: "Heritage vision." },
        { id: "P-13", title: "Archive 01", slug: "arch-01", tags: ["Archive"], story: "Early work." },
        { id: "P-14", title: "Archive 02", slug: "arch-02", tags: ["Archive"], story: "Early work." },
        { id: "P-15", title: "Archive 03", slug: "arch-03", tags: ["Archive"], story: "Early work." },
        { id: "P-16", title: "Archive 04", slug: "arch-04", tags: ["Archive"], story: "Early work." }
    ];

    const grid = document.getElementById('project-grid');
    PROJECTS.forEach(p => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `<img src="assets/images/${p.slug}_1.jpg" alt="${p.title}"><h3>${p.title}</h3>`;
        card.onclick = () => openDrawer(p);
        grid.appendChild(card);
    });

    // --- 2. DRAWER & ACCESSIBILITY ---
    const drawer = document.getElementById('projectDrawer');
    function openDrawer(p) {
        document.getElementById('drawerContent').innerHTML = `<h2>${p.title}</h2><p>${p.story}</p>`;
        drawer.classList.add('active');
        drawer.focus();
    }

    const close = () => { drawer.classList.remove('active'); };
    document.querySelector('.drawer-close').onclick = close;
    document.addEventListener('keydown', (e) => { if(e.key === 'Escape') close(); });

    // --- 3. CONTACT FLOW ---
    document.querySelector('.transmission-form').onsubmit = (e) => {
        e.preventDefault();
        alert("Transmission received. I will reach out soon.");
    };

    // --- 4. TYPEWRITER ---
    const phrases = ["CMD Student", "Maker & Woodworker", "Homelab Architect"];
    let idx = 0;
    setInterval(() => {
        document.querySelector('.typewriter').textContent = phrases[idx++ % phrases.length];
    }, 2500);
});
