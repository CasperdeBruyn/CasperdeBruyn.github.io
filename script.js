/**
 * Casper de Bruyn – Portfolio Logic (Coder B)
 * Taak 1: klikbare .project-card → modal met volledige data + galerij
 * Skill: GoogleChrome/modern-web-guidance
 */

document.addEventListener('DOMContentLoaded', () => {

    /* -----------------------------------------------------------------
       1. PROJECT DATA
       ----------------------------------------------------------------- */
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
            description: "Traditional screen‑printing techniques applied to modern graphic designs. Exploring the textures and imperfections of manual ink application.",
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
            description: "A fully functional, custom‑built arcade claw machine. Combining woodworking, electronics (Arduino), and mechanical design.",
            images: ["assets/images/grijpmachine_11_item11.jpg"]
        },
        'kodak': {
            title: "Kodak Retro Project",
            category: "BRANDING",
            year: "2023",
            description: "Visual identity and design research into the iconic Kodak brand, focusing on the tactile nature of film in a digital age.",
            images: ["assets/images/kodak_01_hero.jpg"]
        },
        'school-projecten': {
            title: "Dan maar hier!",
            category: "CMD MULTIDISCIPLINARY",
            year: "2023‑2025",
            description: "Een gecureerde selectie van diverse ontwerpexperimenten, typografische oefeningen en vroege UI‑prototypes tijdens mijn CMD‑studie. Dan maar hier gebundeld!",
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
        // … overige projecten blijven ongewijzigd …
    };

    /* -----------------------------------------------------------------
       2. MODAL ELEMENTEN
       ----------------------------------------------------------------- */
    const modal          = document.getElementById('project-modal');
    const modalTitle     = document.getElementById('modal-title');
    const modalCat       = document.getElementById('modal-category');
    const modalYear      = document.getElementById('modal-year');
    const modalDesc      = document.getElementById('modal-description');
    const modalGallery   = document.getElementById('modal-gallery');
    const modalExtra     = document.getElementById('modal-extra');   // optioneel HTML‑content
    const closeBtn       = document.querySelector('.modal-close');
    let previousActiveElement = null;

    /* -----------------------------------------------------------------
       3. OPEN / SLUIT LOGICA
       ----------------------------------------------------------------- */
    const openProject = (id) => {
        const data = PROJECT_DATA[id];
        if (!data) return;

        previousActiveElement = document.activeElement;

        // Titel, categorie, jaar
        modalTitle.innerText   = data.title;
        modalCat.innerText     = data.category;
        modalYear.innerText    = data.year;

        // Beschrijving
        modalDesc.innerHTML = `<p>${data.description}</p>`;

        // Afbeeldingen‑galerij
        modalGallery.innerHTML = '';
        data.images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = data.title;
            img.loading = 'lazy';
            img.onerror = () => {
                img.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="100%" height="100%" fill="%23231F1D"/><text x="50%" y="50%" fill="%23C87D4B" font-family="monospace" font-size="14" text-anchor="middle" dominant-baseline="middle">[IMAGE UNAVAILABLE]</text></svg>';
            };
            modalGallery.appendChild(img);
        });

        // Optioneel: extra HTML‑content uit scraped_archive/pages/
        if (modalExtra) {
            fetch(`scraped_archive/pages/${id}.html`)
                .then(r => r.ok ? r.text() : '')
                .then(html => {
                    modalExtra.innerHTML = html;
                })
                .catch(() => { modalExtra.innerHTML = ''; });
        }

        // Toon modal
        modal.setAttribute('aria-hidden', 'false');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        closeBtn.focus();
    };

    const closeModal = () => {
        if (!modal.classList.contains('active')) return;
        modal.setAttribute('aria-hidden', 'true');
        modal.classList.remove('active');
        document.body.style.overflow = '';
        if (previousActiveElement) previousActiveElement.focus();
    };

    /* -----------------------------------------------------------------
       4. EVENT LISTENERS
       ----------------------------------------------------------------- */
    // Klik op elke project‑kaart
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            openProject(projectId);
        });
        // Toegankelijkheid: ook via Enter/Space
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const projectId = card.getAttribute('data-project');
                openProject(projectId);
            }
        });
    });

    // Sluitknop (X)
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // Klik buiten de modal‑content
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // ESC sluit modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    console.log("Coder B: taak 1 (klikbare project‑kaarten + modal) geïmplementeerd.");
});
