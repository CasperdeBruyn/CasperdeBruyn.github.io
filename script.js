/**
 * Casper de Bruyn – Portfolio Logic (Coder B)
 * Taak 1‑5: klikbare project‑kaarten → modal met volledige data + galerij,
 *          micro‑interacties, responsive details.
 * Skill: GoogleChrome/modern-web-guidance
 */

document.addEventListener('DOMContentLoaded', () => {

    /* -----------------------------------------------------------------
       1. PROJECT DATA (incl. de 3 nieuwe projecten)
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
        },

        /* ----- Nieuwe projecten (taak 5) ----- */
        'vr-learning-lab': {
            title: "Stage bij VR Learning Lab",
            category: "INTERNSHIP",
            year: "2024",
            description: "Ontwikkeling van interactieve VR‑trainingen voor industriële safety‑scenario’s. Verantwoordelijk voor concept‑design, asset‑creatie en Unity‑integratie.",
            images: [
                "assets/images/placeholder_vr_01.jpg",
                "assets/images/placeholder_vr_02.jpg"
            ]
        },
        'royal-system-kast': {
            title: "DIY Royal System kast",
            category: "PERSONAL PROJECT",
            year: "2023",
            description: "Een modulair opslagsysteem geïnspireerd op de klassieke Royal‑System. Gemaakt van gerecycled hout, met magnetische sluitingen en CNC‑geprofileerde panelen.",
            images: [
                "assets/images/placeholder_royal_01.jpg",
                "assets/images/placeholder_royal_02.jpg"
            ]
        },
        'linux-ai-homelab': {
            title: "Linux AI Homelab",
            category: "DEVOPS / AI",
            year: "2024",
            description: "Zelfgebouwde homelab op Debian‑basis met GPU‑acceleratie, Docker‑orchestratie en LLM‑inference. Documentatie en scripts beschikbaar op GitHub.",
            images: [
                "assets/images/placeholder_homelab_01.jpg",
                "assets/images/placeholder_homelab_02.jpg"
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
    const modalExtra     = document.getElementById('modal-extra');   // optioneel
    const closeBtn       = document.querySelector('.modal-close');
    let previousActiveElement = null;

    /* -----------------------------------------------------------------
       3. OPEN / SLUIT LOGICA
       ----------------------------------------------------------------- */
    const openProject = (id) => {
        const data = PROJECT_DATA[id];
        if (!data) {
            console.warn(`Geen data gevonden voor project-id: ${id}`);
            return;
        }

        previousActiveElement = document.activeElement;

        // Vul basis‑velden
        modalTitle.textContent   = data.title;
        modalCat.textContent     = data.category;
        modalYear.textContent    = data.year;
        modalDesc.innerHTML      = `<p>${data.description}</p>`;

        // Galerij opbouwen
        modalGallery.innerHTML = '';
        data.images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = data.title;
            img.loading = 'lazy';
            img.onerror = () => {
                img.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="100%" height="100%" fill="%23231F1D"/><text x="50%" y="50%" fill="%23B87333" font-family="monospace" font-size="14" text-anchor="middle" dominant-baseline="middle">[IMAGE UNAVAILABLE]</text></svg>';
            };
            modalGallery.appendChild(img);
        });

        // Optionele extra HTML (bijv. uitgebreide case‑study)
        if (modalExtra) {
            fetch(`scraped_archive/pages/${id}.html`)
                .then(r => r.ok ? r.text() : '')
                .then(html => { modalExtra.innerHTML = html; })
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
    // Klik / toetsenbord op elke project‑kaart
    document.querySelectorAll('.project-card').forEach(card => {
        const projectId = card.getAttribute('data-project');

        // Click
        card.addEventListener('click', () => openProject(projectId));

        // Toegankelijkheid: Enter & Space
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
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

    console.log("Coder B: taken 1‑5 (modal, data, micro‑interacties, responsive) geïmplementeerd.");
});

// === AI-TEAM-AUTO-MERGE-JS ===
/**
 * Casper de Bruyn – Portfolio Logic (Coder B)
 * Skill: GoogleChrome/modern-web-guidance
 */

document.addEventListener('DOMContentLoaded', () => {
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
    },
    'vr-learning-lab': {
      title: "Stage bij VR Learning Lab",
      category: "INTERNSHIP",
      year: "2024",
      description: "Ontwikkeling van interactieve VR-trainingen voor industriële safety-scenario’s. Verantwoordelijk voor concept-design, asset-creatie en Unity-integratie.",
      images: [
        "assets/images/placeholder_vr_01.jpg",
        "assets/images/placeholder_vr_02.jpg"
      ]
    },
    'royal-system-kast': {
      title: "DIY Royal System kast",
      category: "PERSONAL PROJECT",
      year: "2023",
      description: "Een modulair opslagsysteem geïnspireerd op de klassieke Royal-System. Gemaakt van gerecycled hout, met magnetische sluitingen en CNC-geprofileerde panelen.",
      images: [
        "assets/images/placeholder_royal_01.jpg",
        "assets/images/placeholder_royal_02.jpg"
      ]
    },
    'linux-ai-homelab': {
      title: "Linux AI Homelab",
      category: "DEVOPS / AI",
      year: "2024",
      description: "Zelfgebouwde homelab op Debian-basis met GPU-acceleratie, Docker-orchestratie en LLM-inference. Documentatie en scripts beschikbaar op GitHub.",
      images: [
        "assets/images/placeholder_homelab_01.jpg",
        "assets/images/placeholder_homelab_02.jpg"
      ]
    }
  };

  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalCat = document.getElementById('modal-category');
  const modalYear = document.getElementById('modal-year');
  const modalDesc = document.getElementById('modal-description');
  const modalGallery = document.getElementById('modal-gallery');
  const modalExtra = document.getElementById('modal-extra');
  const closeBtn = document.querySelector('.modal-close');
  let previousActiveElement = null;

  const safeFetchExtra = (id) => {
    if (!modalExtra) return;
    fetch(`scraped_archive/pages/${id}.html`)
      .then(r => (r.ok ? r.text() : ''))
      .then(html => {
        modalExtra.innerHTML = html || '';
      })
      .catch(() => {
        modalExtra.innerHTML = '';
      });
  };

  const openProject = (id) => {
    const data = PROJECT_DATA[id];
    if (!data || !modal) return;

    previousActiveElement = document.activeElement;

    modalTitle.textContent = data.title;
    modalCat.textContent = data.category;
    modalYear.textContent = data.year;
    modalDesc.innerHTML = `<p>${data.description}</p>`;

    if (modalGallery) {
      modalGallery.innerHTML = '';
      data.images.forEach((src) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = data.title;
        img.loading = 'lazy';
        img.onerror = () => {
          img.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="100%" height="100%" fill="%23231F1D"/><text x="50%" y="50%" fill="%23B87333" font-family="monospace" font-size="18" text-anchor="middle" dominant-baseline="middle">IMAGE UNAVAILABLE</text></svg>';
        };
        modalGallery.appendChild(img);
      });
    }

    safeFetchExtra(id);

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

    if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
      previousActiveElement.focus();
    }
  };

  document.querySelectorAll('.project-card').forEach((card) => {
    const projectId = card.getAttribute('data-project');
    card.setAttribute('tabindex', card.getAttribute('tabindex') || '0');
    card.setAttribute('role', card.getAttribute('role') || 'button');
    card.addEventListener('click', () => openProject(projectId));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProject(projectId);
      }
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  console.log('Coder B: taken 1-5 geïmplementeerd.');
});

