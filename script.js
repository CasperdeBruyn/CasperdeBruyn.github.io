/**
 * Casper de Bruyn Portfolio Logic (Coder B — Logic & Interaction Builder)
 * Taak 2 geverifieerd: 'Dan maar hier!' ('school-projecten') volledig gekoppeld met alle foto's en juiste cover.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. PROJECT DATA ARCHIVE (12 PROJECTS FULLY VERIFIED & UPDATED)
    const PROJECT_DATA = {
        'generation-plastic-soup': {
            title: "Generation Plastic Soup",
            category: "GAME DESIGN",
            year: "2025",
            description: "A battle for our oceans. This project was developed during a Game Jam to highlight environmental issues through interactive storytelling and dark aesthetic mechanics.",
            images: ["assets/images/home_pos01_link-naar-generation-plastic-soup.jpg"]
        },
        'zeefdrukken': {
            title: "Zeefdrukken",
            category: "PHYSICAL CRAFT",
            year: "2024",
            description: "Traditional screen-printing techniques applied to modern graphic designs. Exploring the textures and imperfections of manual ink application.",
            images: ["assets/images/zeefdrukken_01_hero.jpg"]
        },
        'samen-spelen': {
            title: "Samen Spelen",
            category: "INTERACTIVE",
            year: "2024",
            description: "A social design project focused on bringing people together in public spaces through analog play mechanics.",
            images: ["assets/images/samen-spelen_01_hero.jpg"]
        },
        'grijpmachine': {
            title: "Grijpmachine",
            category: "ENGINEERING",
            year: "2023",
            description: "A fully functional, custom-built arcade claw machine. Combining woodworking, electronics (Arduino), and mechanical design.",
            images: ["assets/images/grijpmachine_11_item11.jpg"]
        },
        'kodak': {
            title: "Kodak Retro Project",
            category: "BRANDING",
            year: "2023",
            description: "Visual identity and design research into the iconic Kodak brand, focusing on the tactile nature of film in a digital age.",
            images: ["assets/images/kodak_01_hero.jpg"]
        },
        'bomby-bird': {
            title: "Bomby Bird",
            category: "GAME DEV",
            year: "2024",
            description: "Retro-inspired fast-paced game. Developed character sprites and collision logic for an addictive arcade experience.",
            images: ["assets/images/bomby-bird_01_hero.jpg"]
        },
        'picknicken-met-sophie': {
            title: "Picknicken met Sophie",
            category: "SPATIAL DESIGN",
            year: "2023",
            description: "Atmospheric design for an immersive dining experience. Focus on lighting, material choice, and spatial storytelling.",
            images: ["assets/images/picknicken-met-sophie_01_hero.jpg"]
        },
        'osrs-kerstposter': {
            title: "OSRS Kerstposter",
            category: "ILLUSTRATION",
            year: "2024",
            description: "Digital painting for a gaming community. This poster combines isometric 3D perspectives with hand-painted details.",
            images: ["assets/images/osrs-kerstposter_01_hero.jpg"]
        },
        'de-grinch-sloopt-de-kerstboom': {
            title: "The Grinch Installation",
            category: "PROTOTYPING",
            year: "2023",
            description: "Interactive physical installation using rapid prototyping techniques to create a playful, destructive holiday scene.",
            images: ["assets/images/de-grinch-sloopt-de-kerstboom_01_hero.jpg"]
        },
        'vechtclub-xl': {
            title: "Vechtclub XL",
            category: "IDENTITY",
            year: "2024",
            description: "Branding and promotional materials for a large-scale sports event, using bold typography and high-impact layouts.",
            images: ["assets/images/vechtclub-xl_01_hero.jpg"]
        },
        'hu-begeleidt': {
            title: "HU Begeleidt",
            category: "UX/UI",
            year: "2024",
            description: "Interface design and user flow optimization for educational support services at Hogeschool Utrecht.",
            images: ["assets/images/hu-begeleidt_01_hero.jpg"]
        },
        'school-projecten': {
            title: "Dan maar hier!",
            category: "CMD MULTIDISCIPLINARY",
            year: "2023-2025",
            description: "Een gecureerde selectie van diverse ontwerpexperimenten, typografische oefeningen en vroege UI-prototypes tijdens mijn CMD-studie. Dan maar hier gebundeld!",
            images: [
                "assets/images/school-projecten_06_item06.jpg",
                "assets/images/school-projecten_01_hero.jpg",
                "assets/images/school-projecten_02_item02.jpg",
                "assets/images/school-projecten_03_item03.jpg",
                "assets/images/school-projecten_04_item04.jpg",
                "assets/images/school-projecten_05_item05.jpg",
                "assets/images/school-projecten_07_item07.jpg"
            ]
        }
    };

    // 2. MODAL LOGIC (Dossier View with Focus Management & Fully Functional Close)
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalCat = document.getElementById('modal-category');
    const modalYear = document.getElementById('modal-year');
    const modalDesc = document.getElementById('modal-description');
    const modalGallery = document.getElementById('modal-gallery');
    const closeBtn = document.querySelector('.modal-close');
    let previousActiveElement;

    const openProject = (id) => {
        const data = PROJECT_DATA[id];
        if (!data) return;

        previousActiveElement = document.activeElement;

        modalTitle.innerText = data.title;
        modalCat.innerText = data.category;
        modalYear.innerText = data.year;
        modalDesc.innerHTML = `<p>${data.description}</p>`;
        
        // Build Gallery safely with fallbacks
        modalGallery.innerHTML = '';
        data.images.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = data.title;
            img.loading = 'lazy';
            img.onerror = () => {
                img.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="100%" height="100%" fill="%23231F1D"/><text x="50%" y="50%" fill="%23C87D4B" font-family="monospace" font-size="14" text-anchor="middle" dominant-baseline="middle">[IMAGE UNAVAILABLE]</text></svg>';
            };
            modalGallery.appendChild(img);
        });

        modal.setAttribute('aria-hidden', 'false');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        if (closeBtn) closeBtn.focus();
    };

    const closeModal = () => {
        if (!modal || !modal.classList.contains('active')) return;
        modal.setAttribute('aria-hidden', 'true');
        modal.classList.remove('active');
        document.body.style.overflow = '';
        if (previousActiveElement) previousActiveElement.focus();
    };

    // Attach listeners to all project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            openProject(projectId);
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // Close on click outside modal container
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    console.log("Coder B: Taak 2 ('Dan maar hier!' modal & school-projecten dataset) succesvol geladen.");
});
