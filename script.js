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
            description: "Casper de Bruyn - Generation plastic soup

The Project During a Game Jam organized by EPIC-WE, Beeld & Geluid, HvA, and Dropstuff.nl, we created a game to raise awareness about EU values, centered around the theme of rising sea levels.

My Role During this Game Jam, I was responsible for designing the game pieces and the playing cards. The core concept and the user interface were a collaborative group effort.

The Game Idea It's a battle between the old and the new generation: profit versus a cleaner ocean. The older generation is focused on financial gain, which leads to further pollution of the waters. Meanwhile, the new generation is fighting to clean up the ocean for a better future.

Who will win this battle? And can we still change the future?

Check out the game for yourself! I've added the link to our itch.io page down below. ⬇️",
            images: ["assets/images/generation-plastic-soup_01_hero.jpg", "assets/images/generation-plastic-soup_02_item02.jpg", "assets/images/generation-plastic-soup_03_item03.jpg", "assets/images/generation-plastic-soup_04_item04.jpg", "assets/images/generation-plastic-soup_05_item05.jpg", "assets/images/generation-plastic-soup_06_item06.jpg", "assets/images/generation-plastic-soup_07_item07.jpg", "assets/images/generation-plastic-soup_08_item08.jpg"]
        },
        'zeefdrukken': {
            title: "Zeefdrukken",
            category: "PHYSICAL CRAFT",
            year: "2024",
            description: "Casper de Bruyn - Street Fresh

The Project During a project week, our team was tasked with building a concept for a new startup business from the ground up.

My Role For this project, my role was a mix of physical crafting and strategic design. I was responsible for screen-printing the physical T-shirts, creating the graphic design for one of the shirts, and helping to shape the overall business model.

The Concept We developed a subscription service for uniquely designed T-shirts. Every month, a brand-new, exclusive design is created and presented to our subscribers before any printing takes place.

The customer always has the freedom to opt in for that month's drop or simply skip it. By using this on-demand, user-choice approach, we actively combat unnecessary overproduction and completely eliminate dead stock.

My portfolio likes cookies :]",
            images: ["assets/images/zeefdrukken_01_hero.jpg", "assets/images/zeefdrukken_02_item02.jpg", "assets/images/zeefdrukken_03_item03.jpg", "assets/images/zeefdrukken_04_item04.jpg", "assets/images/zeefdrukken_05_item05.jpg", "assets/images/zeefdrukken_06_item06.jpg", "assets/images/zeefdrukken_07_item07.jpg", "assets/images/zeefdrukken_08_item08.jpg", "assets/images/zeefdrukken_09_item09.jpg", "assets/images/zeefdrukken_10_item10.jpg", "assets/images/zeefdrukken_11_item11.jpg", "assets/images/zeefdrukken_12_item12.jpg"]
        },
        'samen-spelen': {
            title: "Samen Spelen",
            category: "INTERACTIVE",
            year: "2024",
            description: "Casper de Bruyn - Samen spelen

The Project For the organization \"Samen Spelen\" (Playing Together), our team designed a braille-based concept game for use in public playgrounds.

My Role For this project, I was responsible for designing the physical game pieces and the game board, researching braille typography, and shaping the overall user interaction.

The Concept The main challenge given to us was to spark conversations between parents at the playground, specifically to raise awareness that the playground is fully accessible for children with disabilities.

Our solution was an interactive braille game. Through this game, children can learn a new skill in a fun, informative way while actively involving their parents. This natural parent-child engagement acts as an icebreaker, making it much easier for parents to connect and start talking with one another.

My portfolio likes cookies :]",
            images: ["assets/images/samen-spelen_01_hero.jpg", "assets/images/samen-spelen_02_item02.jpg", "assets/images/samen-spelen_03_item03.jpg", "assets/images/samen-spelen_04_item04.jpg"]
        },
        'grijpmachine': {
            title: "Grijpmachine",
            category: "ENGINEERING",
            year: "2023",
            description: "Casper de Bruyn - Grijpmachine

For a DIY school project, I designed and built a fully functional physical claw machine, the \"Lucky Grapple\"—to distribute bags of chips during a school exhibition.

My Role I was responsible for the complete physical construction of this installation. This involved woodworking to build the arcade cabinet, designing and cutting the mechanical parts for the claw, and engineering a custom control system using syringes to operate the machine's movements.

The Concept The goal was to transform a simple task, handing out snacks at an expo, into a playful and engaging experience. Instead of simply handing out bags of chips to visitors, they had to actively operate the custom syringe-controls to play the game and grab their own snack.

This installation is a perfect reflection of my passion for Immersive Design: combining hands-on physical craftsmanship with fun, interactive user experiences.

My portfolio likes cookies :]",
            images: ["assets/images/grijpmachine_01_hero.jpg", "assets/images/grijpmachine_02_item02.jpg", "assets/images/grijpmachine_03_item03.jpg", "assets/images/grijpmachine_04_item04.jpg", "assets/images/grijpmachine_05_item05.jpg", "assets/images/grijpmachine_06_item06.jpg", "assets/images/grijpmachine_07_item07.jpg", "assets/images/grijpmachine_08_item08.jpg", "assets/images/grijpmachine_09_item09.jpg", "assets/images/grijpmachine_10_item10.jpg", "assets/images/grijpmachine_11_item11.jpg", "assets/images/grijpmachine_12_item12.jpg", "assets/images/grijpmachine_13_item13.jpg", "assets/images/grijpmachine_14_item14.jpg", "assets/images/grijpmachine_15_item15.jpg", "assets/images/grijpmachine_16_item16.jpg", "assets/images/grijpmachine_17_item17.jpg", "assets/images/grijpmachine_18_item18.jpg"]
        },
        'kodak': {
            title: "Kodak Retro Project",
            category: "BRANDING",
            year: "2023",
            description: "The Project For a school assignment, I was tasked with creating a conceptual rebranding campaign for an iconic brand. I chose to focus on Kodak.

My Role I was responsible for the complete visual and conceptual design of this campaign, including designing the posters, developing the retro-inspired visual identity, and writing the core slogans.

The Concept The core message of this rebranding campaign is clear: we need to shoot more analog and rely less on our digital smartphones. In a world where people constantly experience life through a screen, this concept encourages everyone to put their digital devices away.

Through bold, retro-style typography and contrasting illustrations (the classic analog camera versus the smartphone), the posters promote a \"Screenfree\" lifestyle. It’s a call to embrace the authentic, tangible experience of analog photography and to truly live in the moment, rather than just looking at it through a phone screen.

My portfolio likes cookies :]",
            images: ["assets/images/kodak_01_hero.jpg", "assets/images/kodak_02_item02.jpg", "assets/images/kodak_03_item03.jpg", "assets/images/kodak_04_item04.jpg", "assets/images/kodak_05_item05.jpg", "assets/images/kodak_06_item06.jpg", "assets/images/kodak_07_item07.jpg", "assets/images/kodak_08_item08.jpg"]
        },
        'school-projecten': {
            title: "Dan maar hier!",
            category: "CMD MULTIDISCIPLINARY",
            year: "2023‑2025",
            description: "Casper de Bruyn - Dan maar hier!

The Project Inspired by a recent article from the investigative journalism platform Follow the Money regarding the shifting housing market, our team developed a conceptual guerrilla campaign to raise awareness about the absurdly high housing prices.

My Role For this campaign, I was responsible for conceptualizing the core message, illustrating the satirical line-art, and executing the physical guerrilla marketing in the city.

The Concept We created a satirical campaign titled \"#DANMAARHIER\" (If I can't afford a house, I'll just live here!). We designed classic real estate \"For Sale\" posters featuring humorous line-art and physically placed them in absurd public locations, such as a tree, a bus shelter, and a public trash bin.

By advertising these unlivable spots as potential real estate, like labeling a trash can as a \"Room with a jacuzzi\", we used physical guerrilla marketing in the real world to make a bold statement. The physical signs, combined with a QR code, were designed to make people stop, laugh, and ultimately reflect on the harsh reality of the ongoing housing crisis.

My portfolio likes cookies :]",
            images: ["assets/images/school-projecten_06_item06.jpg", "assets/images/school-projecten_01_hero.jpg", "assets/images/school-projecten_02_item02.jpg", "assets/images/school-projecten_03_item03.jpg", "assets/images/school-projecten_04_item04.jpg", "assets/images/school-projecten_05_item05.jpg", "assets/images/school-projecten_07_item07.jpg"]
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
  /* -----------------------------------------------------------------
     1. PROJECT DATA (incl. de 3 nieuwe projecten)
     ----------------------------------------------------------------- */
  const PROJECT_DATA = {
    'generation-plastic-soup': {
      title: "Generation Plastic Soup",
      category: "GAME DESIGN",
      year: "2025",
      description: `Casper de Bruyn - Generation plastic soup

The Project During a Game Jam organized by EPIC-WE, Beeld & Geluid, HvA, and Dropstuff.nl, we created a game to raise awareness about EU values, centered around the theme of rising sea levels.

My Role During this Game Jam, I was responsible for designing the game pieces and the playing cards. The core concept and the user interface were a collaborative group effort.

The Game Idea It's a battle between the old and the new generation: profit versus a cleaner ocean. The older generation is focused on financial gain, which leads to further pollution of the waters. Meanwhile, the new generation is fighting to clean up the ocean for a better future.

Who will win this battle? And can we still change the future?

Check out the game for yourself! I've added the link to our itch.io page down below. ⬇️`,
      images: ["assets/images/generation-plastic-soup_01_hero.jpg", "assets/images/generation-plastic-soup_02_item02.jpg", "assets/images/generation-plastic-soup_03_item03.jpg", "assets/images/generation-plastic-soup_04_item04.jpg", "assets/images/generation-plastic-soup_05_item05.jpg", "assets/images/generation-plastic-soup_06_item06.jpg", "assets/images/generation-plastic-soup_07_item07.jpg", "assets/images/generation-plastic-soup_08_item08.jpg"]
    },
    'zeefdrukken': {
      title: "Zeefdrukken",
      category: "PHYSICAL CRAFT",
      year: "2024",
      description: `Casper de Bruyn - Street Fresh

The Project During a project week, our team was tasked with building a concept for a new startup business from the ground up.

My Role For this project, my role was a mix of physical crafting and strategic design. I was responsible for screen‑printing the physical T‑shirts, creating the graphic design for one of the shirts, and helping to shape the overall business model.

The Concept We developed a subscription service for uniquely designed T‑shirts. Every month, a brand‑new, exclusive design is created and presented to our subscribers before any printing takes place.

The customer always has the freedom to opt in for that month’s drop or simply skip it. By using this on‑demand, user‑choice approach, we actively combat unnecessary overproduction and completely eliminate dead stock.

My portfolio likes cookies :]`,
      images: ["assets/images/zeefdrukken_01_hero.jpg", "assets/images/zeefdrukken_02_item02.jpg", "assets/images/zeefdrukken_03_item03.jpg", "assets/images/zeefdrukken_04_item04.jpg", "assets/images/zeefdrukken_05_item05.jpg", "assets/images/zeefdrukken_06_item06.jpg", "assets/images/zeefdrukken_07_item07.jpg", "assets/images/zeefdrukken_08_item08.jpg", "assets/images/zeefdrukken_09_item09.jpg", "assets/images/zeefdrukken_10_item10.jpg", "assets/images/zeefdrukken_11_item11.jpg", "assets/images/zeefdrukken_12_item12.jpg"]
    },
    'samen-spelen': {
      title: "Samen Spelen",
      category: "INTERACTIVE",
      year: "2024",
      description: `Casper de Bruyn - Samen spelen

The Project For the organization “Samen Spelen” (Playing Together), our team designed a braille‑based concept game for use in public playgrounds.

My Role For this project, I was responsible for designing the physical game pieces and the game board, researching braille typography, and shaping the overall user interaction.

The Concept The main challenge given to us was to spark conversations between parents at the playground, specifically to raise awareness that the playground is fully accessible for children with disabilities.

Our solution was an interactive braille game. Through this game, children can learn a new skill in a fun, informative way while actively involving their parents. This natural parent‑child engagement acts as an icebreaker, making it much easier for parents to connect and start talking with one another.

My portfolio likes cookies :]`,
      images: ["assets/images/samen-spelen_01_hero.jpg", "assets/images/samen-spelen_02_item02.jpg", "assets/images/samen-spelen_03_item03.jpg", "assets/images/samen-spelen_04_item04.jpg"]
    },
    'grijpmachine': {
      title: "Grijpmachine",
      category: "ENGINEERING",
      year: "2023",
      description: `Casper de Bruyn - Grijpmachine

For a DIY school project, I designed and built a fully functional physical claw machine, the “Lucky Grapple”—to distribute bags of chips during a school exhibition.

My Role I was responsible for the complete physical construction of this installation. This involved woodworking to build the arcade cabinet, designing and cutting the mechanical parts for the claw, and engineering a custom control system using syringes to operate the machine’s movements.

The Concept The goal was to transform a simple task, handing out snacks at an expo, into a playful and engaging experience. Instead of simply handing out bags of chips to visitors, they had to actively operate the custom syringe‑controls to play the game and grab their own snack.

This installation is a perfect reflection of my passion for Immersive Design: combining hands‑on physical craftsmanship with fun, interactive user experiences.

My portfolio likes cookies :]`,
      images: ["assets/images/grijpmachine_01_hero.jpg", "assets/images/grijpmachine_02_item02.jpg", "assets/images/grijpmachine_03_item03.jpg", "assets/images/grijpmachine_04_item04.jpg", "assets/images/grijpmachine_05_item05.jpg", "assets/images/grijpmachine_06_item06.jpg", "assets/images/grijpmachine_07_item07.jpg", "assets/images/grijpmachine_08_item08.jpg", "assets/images/grijpmachine_09_item09.jpg", "assets/images/grijpmachine_10_item10.jpg", "assets/images/grijpmachine_11_item11.jpg", "assets/images/grijpmachine_12_item12.jpg", "assets/images/grijpmachine_13_item13.jpg", "assets/images/grijpmachine_14_item14.jpg", "assets/images/grijpmachine_15_item15.jpg", "assets/images/grijpmachine_16_item16.jpg", "assets/images/grijpmachine_17_item17.jpg", "assets/images/grijpmachine_18_item18.jpg"]
    },
    'kodak': {
      title: "Kodak Retro Project",
      category: "BRANDING",
      year: "2023",
      description: `The Project For a school assignment, I was tasked with creating a conceptual rebranding campaign for an iconic brand. I chose to focus on Kodak.

My Role I was responsible for the complete visual and conceptual design of this campaign, including designing the posters, developing the retro‑inspired visual identity, and writing the core slogans.

The Concept The core message of this rebranding campaign is clear: we need to shoot more analog and rely less on our digital smartphones. In a world where people constantly experience life through a screen, this concept encourages everyone to put their digital devices away.

Through bold, retro‑style typography and contrasting illustrations (the classic analog camera versus the smartphone), the posters promote a “Screenfree” lifestyle. It’s a call to embrace the authentic, tangible experience of analog photography and to truly live in the moment, rather than just looking at it through a phone screen.

My portfolio likes cookies :]`,
      images: ["assets/images/kodak_01_hero.jpg", "assets/images/kodak_02_item02.jpg", "assets/images/kodak_03_item03.jpg", "assets/images/kodak_04_item04.jpg", "assets/images/kodak_05_item05.jpg", "assets/images/kodak_06_item06.jpg", "assets/images/kodak_07_item07.jpg", "assets/images/kodak_08_item08.jpg"]
    },
    'school-projecten': {
      title: "Dan maar hier!",
      category: "CMD MULTIDISCIPLINARY",
      year: "2023‑2025",
      description: `Casper de Bruyn - Dan maar hier!

The Project Inspired by a recent article from the investigative journalism platform Follow the Money regarding the shifting housing market, our team developed a conceptual guerrilla campaign to raise awareness about the absurdly high housing prices.

My Role For this campaign, I was responsible for conceptualizing the core message, illustrating the satirical line‑art, and executing the physical guerrilla marketing in the city.

The Concept We created a satirical campaign titled “#DANMAARHIER” (If I can't afford a house, I'll just live here!). We designed classic real‑estate “For Sale” posters featuring humorous line‑art and physically placed them in absurd public locations, such as a tree, a bus shelter, and a public trash bin.

By advertising these unlivable spots as potential real‑estate, like labeling a trash can as a “Room with a jacuzzi”, we used physical guerrilla marketing in the real world to make a bold statement. The physical signs, combined with a QR code, were designed to make people stop, laugh, and ultimately reflect on the harsh reality of the ongoing housing crisis.

My portfolio likes cookies :]`,
      images: ["assets/images/school-projecten_06_item06.jpg", "assets/images/school-projecten_01_hero.jpg", "assets/images/school-projecten_02_item02.jpg", "assets/images/school-projecten_03_item03.jpg", "assets/images/school-projecten_04_item04.jpg", "assets/images/school-projecten_05_item05.jpg", "assets/images/school-projecten_07_item07.jpg"]
    }
  };

  /* -----------------------------------------------------------------
     2. Modal elements (created once, reused)
     ----------------------------------------------------------------- */
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  document.body.appendChild(overlay);

  const modal = document.createElement('div');
  modal.className = 'modal';
  overlay.appendChild(modal);

  const closeBtn = document.createElement('button');
  closeBtn.className = 'modal-close';
  closeBtn.innerHTML = '&times;';
  modal.appendChild(closeBtn);

  const textArea = document.createElement('div');
  textArea.className = 'modal-text';
  modal.appendChild(textArea);

  const carousel = document.createElement('div');
  carousel.className = 'carousel';
  modal.appendChild(carousel);

  /* -----------------------------------------------------------------
     3. Helper functions
     ----------------------------------------------------------------- */
  let currentProject = null;
  let currentIndex = 0;

  function renderText(project) {
    textArea.innerHTML = `
      <h2>${project.title}</h2>
      <h4>${project.category} • ${project.year}</h4>
      <p>${project.description}</p>
    `;
  }

  function renderCarousel(images) {
    carousel.innerHTML = ''; // reset

    const img = document.createElement('img');
    img.src = images[0];
    carousel.appendChild(img);

    // Prev button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'nav prev';
    prevBtn.innerHTML = '&#10094;';
    carousel.appendChild(prevBtn);

    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'nav next';
    nextBtn.innerHTML = '&#10095;';
    carousel.appendChild(nextBtn);

    // Event listeners
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      img.src = images[currentIndex];
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      img.src = images[currentIndex];
    });
  }

  function openModal(projectId) {
    const project = PROJECT_DATA[projectId];
    if (!project) return;

    currentProject = project;
    currentIndex = 0;

    renderText(project);
    renderCarousel(project.images);

    overlay.classList.add('active');
  }

  function closeModal() {
    overlay.classList.remove('active');
    // Optional: clear content to free memory
    textArea.innerHTML = '';
    carousel.innerHTML = '';
    currentProject = null;
  }

  /* -----------------------------------------------------------------
     4. Event listeners
     ----------------------------------------------------------------- */
  // Click on project cards
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.project;
      openModal(id);
    });
  });

  // Close button
  closeBtn.addEventListener('click', closeModal);

  // Click outside modal content
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  // ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeModal();
    }
  });
});

