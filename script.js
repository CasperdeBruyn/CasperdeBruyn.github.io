// === CASPER DE BRUYN — COMPLETE INTERACTIVE PORTFOLIO ENGINE (TAAK 1..7) ===
const PROJECT_DOSSIERS = {
  "diy-royal-system": {
    "title": "DIY Royal System Wall Unit",
    "tag": "// IN PROGRESS \u2014 FURNITURE DESIGN",
    "desc": "Inspired by Poul Cadovius' iconic 1948 Royal System, I am designing and fabricating a custom modular mid-century modern wall unit and floating bench.\n\nBuilt from 18mm birch and falcata multiplex with precision 53-degree angled cuts, internal structural framing, and concealed French cleat wall mounts, this project bridges parametric digital planning with hands-on woodworking.",
    "images": [
      "assets/images/site_header_logo-01.jpg"
    ]
  },
  "linux-ai-homelab": {
    "title": "Linux AI Homelab & Autonomous Agent Team",
    "tag": "// ACTIVE SYSTEM \u2014 AI HOMELAB",
    "desc": "My self-hosted Ubuntu Linux server in Delft acts as the neural backbone for both my smart home and development workflow.\n\nIt runs OmniRoute on port :20128 to balance requests across multiple LLMs with automatic latency probing, Home Assistant for climate and Shelly ventilation automation, AdGuard DNS sinkholing, and the autonomous 6-agent Discord coding pipeline that co-built this portfolio.",
    "images": [
      "assets/images/site_header_logo-01.jpg"
    ]
  },
  "vr-learning-lab": {
    "title": "Internship: VR Learning Lab",
    "tag": "// XR & SPATIAL DESIGN",
    "desc": "During my internship at VR Learning Lab, I designed, prototyped, and user-tested immersive Virtual Reality learning experiences.\n\nFocusing on intuitive spatial interaction, physical comfort in VR, and visual storytelling, I translated educational challenges into engaging 3D environments that pull learners out of passive screens into active exploration.",
    "images": [
      "assets/images/site_header_logo-01.jpg"
    ]
  },
  "generation-plastic-soup": {
    "title": "Generation Plastic Soup",
    "tag": "// GAME DESIGN & EU GAME JAM",
    "desc": "Created during an intensive Game Jam organized by EPIC-WE, Sound & Vision (Beeld & Geluid), HvA, and Dropstuff.nl, Generation Plastic Soup explores European values through the lens of rising sea levels.\n\nIt pits the older generation\u2014focused on short-term industrial profit\u2014against a new generation fighting to clean up the oceans. I designed all physical game pieces and playing cards while co-developing the core game mechanics and interface.",
    "images": [
      "assets/images/generation-plastic-soup_01_hero.jpg",
      "assets/images/generation-plastic-soup_02_item02.jpg",
      "assets/images/generation-plastic-soup_03_item03.jpg",
      "assets/images/generation-plastic-soup_04_item04.jpg",
      "assets/images/generation-plastic-soup_05_item05.jpg",
      "assets/images/generation-plastic-soup_06_item06.jpg",
      "assets/images/generation-plastic-soup_07_item07.jpg",
      "assets/images/generation-plastic-soup_08_item08.jpg"
    ]
  },
  "zeefdrukken": {
    "title": "Screen Printing Studio (Zeefdrukken)",
    "tag": "// GRAPHIC & TEXTILE CRAFT",
    "desc": "A hands-on exploration of traditional screen printing\u2014from exposing custom stencil meshes with UV light to pulling layered graphic prints by hand on heavy cotton textiles and poster stock.\n\nCombining digital vector illustration with the raw texture of physical ink, every print carries its own tactile character.",
    "images": [
      "assets/images/zeefdrukken_01_hero.jpg",
      "assets/images/zeefdrukken_02_item02.jpg",
      "assets/images/zeefdrukken_03_item03.jpg",
      "assets/images/zeefdrukken_04_item04.jpg",
      "assets/images/zeefdrukken_05_item05.jpg",
      "assets/images/zeefdrukken_06_item06.jpg",
      "assets/images/zeefdrukken_07_item07.jpg",
      "assets/images/zeefdrukken_08_item08.jpg",
      "assets/images/zeefdrukken_09_item09.jpg",
      "assets/images/zeefdrukken_10_item10.jpg",
      "assets/images/zeefdrukken_11_item11.jpg",
      "assets/images/zeefdrukken_12_item12.jpg"
    ]
  },
  "samen-spelen": {
    "title": "Playing Together (Samen Spelen)",
    "tag": "// INTERACTIVE INSTALLATION",
    "desc": "An interactive public space installation designed to break social barriers and get strangers collaborating through play.\n\nBy combining tactile physical triggers with visual and spatial feedback, the installation turns passersby into active co-players.",
    "images": [
      "assets/images/samen-spelen_01_hero.jpg",
      "assets/images/samen-spelen_02_item02.jpg",
      "assets/images/samen-spelen_03_item03.jpg",
      "assets/images/samen-spelen_04_item04.jpg"
    ]
  },
  "grijpmachine": {
    "title": "The Claw Machine (Grijpmachine)",
    "tag": "// ARDUINO & MECHATRONICS",
    "desc": "Built from the ground up: a fully functional arcade claw machine combining custom cabinetry, 3D-printed mechanical claw parts, stepper motors, and Arduino control logic.\n\nFrom wiring the limit switches and joystick gantry to programming the grab sequence, this project merges electrical engineering, code, and arcade nostalgia.",
    "images": [
      "assets/images/grijpmachine_01_hero.jpg",
      "assets/images/grijpmachine_02_item02.jpg",
      "assets/images/grijpmachine_03_item03.jpg",
      "assets/images/grijpmachine_04_item04.jpg",
      "assets/images/grijpmachine_05_item05.jpg",
      "assets/images/grijpmachine_06_item06.jpg",
      "assets/images/grijpmachine_07_item07.jpg",
      "assets/images/grijpmachine_08_item08.jpg",
      "assets/images/grijpmachine_09_item09.jpg",
      "assets/images/grijpmachine_10_item10.jpg",
      "assets/images/grijpmachine_11_item11.jpg",
      "assets/images/grijpmachine_12_item12.jpg",
      "assets/images/grijpmachine_13_item13.jpg",
      "assets/images/grijpmachine_14_item14.jpg",
      "assets/images/grijpmachine_15_item15.jpg",
      "assets/images/grijpmachine_16_item16.jpg",
      "assets/images/grijpmachine_17_item17.jpg",
      "assets/images/grijpmachine_18_item18.jpg"
    ]
  },
  "kodak": {
    "title": "Kodak Retro Campaign",
    "tag": "// BRANDING & VISUAL IDENTITY",
    "desc": "A bold visual branding and poster design series celebrating Kodak's iconic analog photography heritage.\n\nUsing warm chromatic yellows, halftone grain textures, and Swiss-inspired typographic grids, the campaign captures the tangible magic of 35mm film in a digital era.",
    "images": [
      "assets/images/kodak_01_hero.jpg",
      "assets/images/kodak_02_item02.jpg",
      "assets/images/kodak_03_item03.jpg",
      "assets/images/kodak_04_item04.jpg",
      "assets/images/kodak_05_item05.jpg",
      "assets/images/kodak_06_item06.jpg",
      "assets/images/kodak_07_item07.jpg",
      "assets/images/kodak_08_item08.jpg"
    ]
  },
  "bomby-bird": {
    "title": "Bomby Bird",
    "tag": "// CUSTOM ARCADE HARDWARE",
    "desc": "An explosive twist on classic arcade flyers: Bomby Bird pairs custom-built physical controller hardware with fast-paced 2D pixel gameplay.\n\nDesigned to test reflexes and bring friends together around a physical arcade setup.",
    "images": [
      "assets/images/bomby-bird_01_hero.jpg",
      "assets/images/bomby-bird_02_item02.jpg",
      "assets/images/bomby-bird_03_item03.jpg",
      "assets/images/bomby-bird_04_item04.jpg",
      "assets/images/bomby-bird_05_item05.jpg",
      "assets/images/bomby-bird_06_item06.jpg",
      "assets/images/bomby-bird_07_item07.jpg"
    ]
  },
  "picknicken-met-sophie": {
    "title": "Picnic with Sophie",
    "tag": "// VISUAL STORYTELLING",
    "desc": "An atmospheric visual storytelling and experience design project centered around a narrative picnic setting.\n\nEvery prop, illustration, and visual cue was crafted to immerse participants in Sophie's story.",
    "images": [
      "assets/images/picknicken-met-sophie_01_hero.jpg",
      "assets/images/picknicken-met-sophie_02_item02.jpg",
      "assets/images/picknicken-met-sophie_03_item03.jpg"
    ]
  },
  "osrs-kerstposter": {
    "title": "OSRS Christmas Poster",
    "tag": "// COMMUNITY & ILLUSTRATION",
    "desc": "Custom illustrated holiday poster designed for an international Old School RuneScape (OSRS) gaming community of 150+ active members.\n\nPacked with inside jokes, iconic boss raids, and festive character art to celebrate the clan's year-end events.",
    "images": [
      "assets/images/osrs-kerstposter_01_hero.jpg",
      "assets/images/osrs-kerstposter_02_item02.jpg",
      "assets/images/osrs-kerstposter_03_item03.jpg",
      "assets/images/osrs-kerstposter_04_item04.jpg"
    ]
  },
  "de-grinch-sloopt-de-kerstboom": {
    "title": "The Grinch Wrecks the Tree",
    "tag": "// IMMERSIVE SCENOGRAPHY",
    "desc": "A tongue-in-cheek spatial installation where the Grinch literally crashes through the Christmas tree.\n\nBuilt to surprise visitors and transform a familiar room into an immersive, humorous crime scene.",
    "images": [
      "assets/images/de-grinch-sloopt-de-kerstboom_01_hero.jpg",
      "assets/images/de-grinch-sloopt-de-kerstboom_02_item02.jpg",
      "assets/images/de-grinch-sloopt-de-kerstboom_03_item03.jpg",
      "assets/images/de-grinch-sloopt-de-kerstboom_04_item04.jpg",
      "assets/images/de-grinch-sloopt-de-kerstboom_05_item05.jpg",
      "assets/images/de-grinch-sloopt-de-kerstboom_06_item06.jpg",
      "assets/images/de-grinch-sloopt-de-kerstboom_07_item07.jpg"
    ]
  },
  "vechtclub-xl": {
    "title": "Vechtclub XL",
    "tag": "// CREATIVE COMMUNITY EVENT",
    "desc": "Visual identity, event posters, and spatial wayfinding designed for Vechtclub XL\u2014Utrecht's thriving creative hub for makers, designers, and artisans.",
    "images": [
      "assets/images/vechtclub-xl_01_hero.jpg",
      "assets/images/vechtclub-xl_02_item02.jpg",
      "assets/images/vechtclub-xl_03_item03.jpg",
      "assets/images/vechtclub-xl_04_item04.jpg",
      "assets/images/vechtclub-xl_05_item05.jpg",
      "assets/images/vechtclub-xl_06_item06.jpg",
      "assets/images/vechtclub-xl_07_item07.jpg",
      "assets/images/vechtclub-xl_08_item08.jpg",
      "assets/images/vechtclub-xl_09_item09.jpg",
      "assets/images/vechtclub-xl_10_item10.jpg"
    ]
  },
  "hu-begeleidt": {
    "title": "HU Student Guidance (HU Begeleidt)",
    "tag": "// UX & SERVICE DESIGN",
    "desc": "A human-centered service design and visual communication project for Hogeschool Utrecht.\n\nThrough student interviews, journey mapping, and iterative prototyping, we made student support services clearer and more accessible.",
    "images": [
      "assets/images/hu-begeleidt_01_hero.jpg",
      "assets/images/hu-begeleidt_02_item02.jpg",
      "assets/images/hu-begeleidt_03_item03.jpg",
      "assets/images/hu-begeleidt_04_item04.jpg",
      "assets/images/hu-begeleidt_05_item05.jpg",
      "assets/images/hu-begeleidt_06_item06.jpg",
      "assets/images/hu-begeleidt_07_item07.jpg",
      "assets/images/hu-begeleidt_08_item08.jpg",
      "assets/images/hu-begeleidt_09_item09.jpg",
      "assets/images/hu-begeleidt_10_item10.jpg",
      "assets/images/hu-begeleidt_11_item11.jpg",
      "assets/images/hu-begeleidt_12_item12.jpg",
      "assets/images/hu-begeleidt_13_item13.jpg",
      "assets/images/hu-begeleidt_14_item14.jpg",
      "assets/images/hu-begeleidt_15_item15.jpg",
      "assets/images/hu-begeleidt_16_item16.jpg",
      "assets/images/hu-begeleidt_17_item17.jpg"
    ]
  },
  "school-projecten": {
    "title": "Then Right Here! (Dan maar hier!)",
    "tag": "// CMD DESIGN ARCHIVE",
    "desc": "A curated archive of Communication & Multimedia Design (CMD) sprints, interactive prototypes, QR-linked installations, and visual experiments developed during my studies at Hogeschool Utrecht.",
    "images": [
      "assets/images/school-projecten_01_hero.jpg",
      "assets/images/school-projecten_02_item02.jpg",
      "assets/images/school-projecten_03_item03.jpg",
      "assets/images/school-projecten_04_item04.jpg",
      "assets/images/school-projecten_05_item05.jpg",
      "assets/images/school-projecten_06_item06.jpg",
      "assets/images/school-projecten_07_item07.jpg"
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
    // TAAK 6: Actief jaartal via new Date().getFullYear()
    const currentYear = new Date().getFullYear();
    document.querySelectorAll('.live-archive-year, #live-archive-year').forEach(el => {
        el.textContent = currentYear;
    });
    document.querySelectorAll('.hero-tag, .system-status, .status-badge, p, span').forEach(el => {
        if (el.children.length === 0 && /C(?:MD|DB)_ARCHIVE_\d{4}/i.test(el.textContent)) {
            el.textContent = el.textContent.replace(/C(?:MD|DB)_ARCHIVE_\d{4}/gi, 'CDB_ARCHIVE_' + currentYear);
        }
    });

    // TAAK 3: Pop-up Modal met [X] & ESC, Tekst links, Foto-Carousel rechts
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalTag = document.getElementById('modal-tag');
    const modalDesc = document.getElementById('modal-desc');
    const mainImg = document.getElementById('carousel-main-img');
    const counterEl = document.getElementById('carousel-counter');
    const thumbsEl = document.getElementById('carousel-thumbs');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const closeBtn = document.getElementById('modal-close');

    let currentImages = [];
    let currentIndex = 0;

    function renderSlide() {
        if (!currentImages.length || !mainImg) return;
        mainImg.src = currentImages[currentIndex];
        if (counterEl) counterEl.textContent = `${currentIndex + 1} / ${currentImages.length}`;
        if (thumbsEl) {
            thumbsEl.innerHTML = currentImages.map((src, idx) =>
                `<img src="${src}" class="carousel-thumb ${idx === currentIndex ? 'active' : ''}" data-idx="${idx}" alt="Slide ${idx + 1}">`
            ).join('');
            thumbsEl.querySelectorAll('.carousel-thumb').forEach(th => {
                th.addEventListener('click', (e) => {
                    e.stopPropagation();
                    currentIndex = parseInt(th.dataset.idx, 10) || 0;
                    renderSlide();
                });
            });
        }
    }

    function openProjectModal(slug) {
        const data = PROJECT_DOSSIERS[slug];
        if (!data || !modal) return;
        if (modalTitle) modalTitle.textContent = data.title;
        if (modalTag) modalTag.textContent = data.tag;
        if (modalDesc) {
            modalDesc.innerHTML = data.desc.split('\n\n').map(p => `<p>${p}</p>`).join('');
        }
        currentImages = Array.isArray(data.images) && data.images.length ? data.images : ['assets/images/site_header_logo-01.jpg'];
        currentIndex = 0;
        renderSlide();
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeProjectModal() {
        if (!modal) return;
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const slug = card.getAttribute('data-project');
            if (slug) openProjectModal(slug);
        });
    });

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!currentImages.length) return;
            currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
            renderSlide();
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!currentImages.length) return;
            currentIndex = (currentIndex + 1) % currentImages.length;
            renderSlide();
        });
    }
    if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeProjectModal();
        });
    }
    document.addEventListener('keydown', (e) => {
        if (!modal || !modal.classList.contains('active')) return;
        if (e.key === 'Escape') closeProjectModal();
        if (e.key === 'ArrowLeft' && prevBtn) prevBtn.click();
        if (e.key === 'ArrowRight' && nextBtn) nextBtn.click();
    });

    // TAAK 1: Interactieve Homelab Widgets (Router Ping, Jarvis/Bond Scenes & Live Terminal)
    const routerModels = [
        ['groq/gpt-oss-120b', '138 ms'],
        ['gemini/flash-lite-latest', '112 ms'],
        ['gemini/gemini-3.1-flash-lite', '129 ms'],
        ['deepseek/deepseek-v3.2', '194 ms'],
        ['gemini/gemma-4-31b-it', '161 ms']
    ];
    let rIdx = 0;
    const btnPing = document.getElementById('btn-ping-router');
    if (btnPing) {
        btnPing.addEventListener('click', () => {
            rIdx = (rIdx + 1) % routerModels.length;
            document.getElementById('hl-active-model').textContent = routerModels[rIdx][0];
            document.getElementById('hl-latency-val').textContent = routerModels[rIdx][1] + ' (200 OK)';
        });
    }

    document.querySelectorAll('.hl-chip-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.hl-chip-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const sc = document.getElementById('hl-scene-val');
            if (sc) sc.textContent = btn.getAttribute('data-scene');
        });
    });

    const termReplies = {
        status: '> [OK] Acer-Aspire Ubuntu Node | Load: 0.42 | AdGuard DNS: Blocking 28.4% ads | Portainer: 6 containers healthy.',
        agents: '> [6/6 AGENTS READY] Scout -> Architect -> Designer -> Copywriter -> Coder A -> Coder B (Node V8 Gate: 96%).',
        stack: '> [STACK] Python 3.14, Flask (:8090), Home Assistant (:8123), OmniRoute (:20128), Shelly Gen3 IoT, GitHub Pages.',
        coffee: '> [418 I\'M A TEAPOT] Stoofvlees timer: simmering nicely. Espresso machine ready for late-night CMD sprints.'
    };
    const termOut = document.getElementById('hl-term-out');
    document.querySelectorAll('.hl-cmd-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const cmd = btn.getAttribute('data-cmd');
            if (!termOut || !cmd) return;
            termOut.innerHTML = `
                <div class="term-line"><span class="term-prompt">casper@delft-lab:~$</span> ${cmd}</div>
                <div class="term-line term-resp">${termReplies[cmd] || '> Command executed.'}</div>
            `;
        });
    });

    // TAAK 4: Interactief Goud/Brons Moederbord-Patroon op Canvas (onzichtbaar in rust, licht op onder de cursor!)
    const canvas = document.getElementById('pcb-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let mouseX = -1000, mouseY = -1000;
        let targetX = -1000, targetY = -1000;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        window.addEventListener('mousemove', (e) => {
            targetX = e.clientX;
            targetY = e.clientY;
        });

        function drawPcbPattern() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            mouseX += (targetX - mouseX) * 0.22;
            mouseY += (targetY - mouseY) * 0.22;

            if (mouseX > -500 && mouseY > -500) {
                const radius = 250;
                const gridSize = 110;
                const startCol = Math.max(0, Math.floor((mouseX - radius) / gridSize));
                const endCol = Math.ceil((mouseX + radius) / gridSize);
                const startRow = Math.max(0, Math.floor((mouseY - radius) / gridSize));
                const endRow = Math.ceil((mouseY + radius) / gridSize);

                ctx.save();
                for (let r = startRow; r <= endRow; r++) {
                    for (let c = startCol; c <= endCol; c++) {
                        const x = c * gridSize;
                        const y = r * gridSize;
                        const dist = Math.hypot((x + gridSize / 2) - mouseX, (y + gridSize / 2) - mouseY);
                        if (dist > radius) continue;

                        const alpha = Math.pow(1 - dist / radius, 1.6) * 0.62;
                        ctx.strokeStyle = `rgba(200, 125, 75, ${alpha})`;
                        ctx.fillStyle = `rgba(229, 169, 60, ${alpha * 1.15})`;
                        ctx.lineWidth = 1.4;

                        // Teken 45-graden printplaat/moederbord sporen en soldeer-nodes
                        ctx.beginPath();
                        ctx.moveTo(x + 12, y + 20);
                        ctx.lineTo(x + 45, y + 20);
                        ctx.lineTo(x + 65, y + 40);
                        ctx.lineTo(x + 65, y + 85);

                        ctx.moveTo(x + 25, y + 95);
                        ctx.lineTo(x + 50, y + 70);
                        ctx.lineTo(x + 95, y + 70);

                        ctx.moveTo(x + 75, y + 15);
                        ctx.lineTo(x + 90, y + 30);
                        ctx.lineTo(x + 90, y + 55);
                        ctx.stroke();

                        // Goud/bronzen soldeer-pads (vias)
                        for (const [px, py] of [[12, 20], [65, 85], [25, 95], [95, 70], [75, 15], [90, 55]]) {
                            ctx.beginPath();
                            ctx.arc(x + px, y + py, 2.6, 0, Math.PI * 2);
                            ctx.fill();
                        }

                        // Klein microchip-icoontje op geselecteerde tegels
                        if ((r + c) % 2 === 0) {
                            ctx.strokeRect(x + 32, y + 36, 18, 18);
                        }
                    }
                }
                ctx.restore();
            }
            requestAnimationFrame(drawPcbPattern);
        }
        requestAnimationFrame(drawPcbPattern);
    }
});
/* === AI-TEAM-AUTO-MERGE-JS === */
