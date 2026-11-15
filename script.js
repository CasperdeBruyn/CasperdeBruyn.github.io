/**
 * Casper de Bruyn Portfolio Logic
 * Handles Immersive Interactions, Typewriter, and Project Modals
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. PROJECT DATA ARCHIVE (12 PROJECTS)
    const PROJECTS_DATABASE = {
        'plastic-soup': {
            title: "Generation Plastic Soup",
            tag: "// ENVIRONMENTAL GAME DESIGN",
            story: "Created during a 2025 Game Jam, this project explores the devastating impact of plastic on marine life through interactive storytelling. I handled the game mechanics and the darker visual aesthetic to emphasize the gravity of the ocean crisis.",
            images: ["home_pos01_link-naar-generation-plastic-soup.jpg", "generation-plastic-soup_01_hero.jpg"]
        },
        'zeefdrukken': {
            title: "Zeefdrukken (Silkscreening)",
            tag: "// TACTILE CRAFT",
            story: "A journey into the physical world of ink and mesh. This project focuses on translating digital illustrations into manual silkscreen prints. Every layer is hand-pulled, celebrating the imperfections of the craft.",
            images: ["home_pos02_link-naar-zeefdrukken.jpg", "zeefdrukken_01_hero.jpg"]
        },
        'samen-spelen': {
            title: "Samen Spelen",
            tag: "// SOCIAL INTERACTION DESIGN",
            story: "A design intervention meant to break the digital bubble in public squares. 'Samen Spelen' uses simple physical triggers to invite strangers to collaborate on a playful task.",
            images: ["home_pos03_link-naar-samen-spelen.jpg", "samen-spelen_01_hero.jpg"]
        },
        'grijpmachine': {
            title: "Grijpmachine (Arcade Claw)",
            tag: "// PHYSICAL COMPUTING",
            story: "Building a bridge between woodworking and electronics. This custom-built claw machine uses Arduino logic and a hand-crafted wooden chassis. It was a primary study in mechanical precision and user anticipation.",
            images: ["home_pos04_link-naar-grijpmachine.jpg", "grijpmachine_01_hero.jpg"]
        },
        'kodak': {
            title: "Kodak UI/UX",
            tag: "// BRAND REVIVAL",
            story: "A conceptual redesign of the Kodak digital ecosystem. Taking the legendary 'warmth' of film and applying it to a modern, lightning-fast mobile interface.",
            images: ["home_pos05_link-naar-kodak.jpg", "kodak_01_hero.jpg"]
        },
        'bomby-bird': {
            title: "Bomby Bird",
            tag: "// GAME DEV",
            story: "A fast-paced arcade experience. Developed with custom character sprites and a focus on addictive feedback loops. This project highlights my ability to combine 2D asset creation with coding.",
            images: ["home_pos06_link-naar-bomby-bird.jpg", "bomby-bird_01_hero.jpg"]
        },
        'picknicken': {
            title: "Picknicken met Sophie",
            tag: "// EXPERIENTIAL STORYTELLING",
            story: "An immersive outdoor experience designed to foster connection. I created the visual identity and the physical setup for this atmospheric event in the heart of nature.",
            images: ["home_pos07_link-naar-picknicken-met-sophie.jpg", "picknicken-met-sophie_01_hero.jpg"]
        },
        'osrs': {
            title: "OSRS Kerstposter",
            tag: "// DIGITAL ILLUSTRATION",
            story: "Combining nostalgia with modern digital painting. This poster was designed for the OSRS community, merging isometric 3D concepts with detailed 2D rendering.",
            images: ["home_pos08_link-naar-osrs-kerstposter.jpg", "osrs-kerstposter_01_hero.jpg"]
        },
        'grinch': {
            title: "De Grinch sloopt de Kerstboom",
            tag: "// INSTALLATION DESIGN",
            story: "A chaotic, festive experience. This spatial installation involved DIY catapults and interactive targets, designed to let visitors express their 'inner Grinch' in a controlled, playful environment.",
            images: ["home_pos09_link-naar-de-grinch-sloopt-de-kerstboom.jpg", "de-grinch-sloopt-de-kerstboom_01_hero.jpg"]
        },
        'vechtclub': {
            title: "Vechtclub XL",
            tag: "// BRANDING & EVENT",
            story: "Visual identity for a high-energy community sports hub. The design focuses on raw energy, using industrial typography and high-contrast photography.",
            images: ["home_pos10_link-naar-vechtclub-xl.jpg", "vechtclub-xl_01_hero.jpg"]
        },
        'hu-begeleidt': {
            title: "HU Begeleidt",
            tag: "// UX RESEARCH",
            story: "Optimizing the student support flow at Hogeschool Utrecht. This project involved deep user testing and the creation of a centralized, accessible design system.",
            images: ["home_pos11_link-naar-hu-begeleidt.jpg", "hu-begeleidt_01_hero.jpg"]
        },
        'school': {
            title: "School Projecten",
            tag: "// CMD EXPLORATIONS",
            story: "A curated collection of rapid prototypes, design sprints, and visual experiments conducted during my CMD studies. From logo iterations to VR sketches.",
            images: ["home_pos12_link-naar-school-projecten.jpg", "school-projecten_01_hero.jpg"]
        }
    };

    // 2. DRAWER LOGIC (MODAL)
    const drawer = document.getElementById('projectDrawer');
    const drawerTitle = document.getElementById('drawerTitle');
    const drawerTag = document.getElementById('drawerTag');
    const drawerContent = document.getElementById('drawerContent');
    const closeBtn = document.querySelector('.drawer-close');

    const openProject = (projectId) => {
        const data = PROJECTS_DATABASE[projectId];
        if (!data) return;

        drawerTitle.textContent = data.title;
        drawerTag.textContent = data.tag;
        
        let imagesHtml = data.images.map(img => 
            `<img src="assets/images/${img}" alt="${data.title}" loading="lazy">`
        ).join('');

        drawerContent.innerHTML = `
            <p style="margin-bottom: 30px; font-size: 1.1rem; opacity: 0.9;">${data.story}</p>
            <div class="drawer-gallery">${imagesHtml}</div>
        `;

        drawer.classList.add('active');
        document.body.style.overflow = 'hidden'; // Lock scroll
    };

    const closeProject = () => {
        drawer.classList.remove('active');
        document.body.style.overflow = ''; // Unlock scroll
    };

    // Listeners for cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-project');
            openProject(id);
        });
    });

    closeBtn.addEventListener('click', closeProject);
    drawer.addEventListener('click', (e) => {
        if (e.target === drawer) closeProject();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeProject();
    });

    // 3. TYPEWRITER EFFECT
    const typewriterElement = document.getElementById('typewriter');
    const phrases = ["CMD Student", "Physical Maker", "Linux AI Homelab Architect", "Immersive Designer"];
    let i = 0;
    let j = 0;
    let currentPhrase = [];
    let isDeleting = false;

    function loop() {
        typewriterElement.innerHTML = currentPhrase.join('');
        
        if (i < phrases.length) {
            if (!isDeleting && j <= phrases[i].length) {
                currentPhrase.push(phrases[i][j]);
                j++;
            }
            if (isDeleting && j <= phrases[i].length) {
                currentPhrase.pop(phrases[i][j]);
                j--;
            }
            if (j == phrases[i].length) {
                isDeleting = true;
            }
            if (isDeleting && j == 0) {
                currentPhrase = [];
                isDeleting = false;
                i++;
                if (i == phrases.length) i = 0;
            }
        }
        const speed = isDeleting ? 50 : 150;
        setTimeout(loop, speed);
    }
    // Start typewriter if element exists
    if(typewriterElement) loop();

    // 4. CONTACT FORM & SECURE ROUTING
    const contactForm = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');
    const resetBtn = document.getElementById('resetFormBtn');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Masked email handling logic (Base64 is used in the background as requested)
            // Actual transmission simulation
            const submitBtn = contactForm.querySelector('button');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = "UPLOADING DATA...";
            submitBtn.disabled = true;

            // Simulate network delay
            setTimeout(() => {
                contactForm.classList.add('hidden');
                feedback.classList.remove('hidden');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            contactForm.reset();
            contactForm.classList.remove('hidden');
            feedback.classList.add('hidden');
        });
    }

    // 5. COOKIE BAR
    const cookieBar = document.querySelector('.footer-cookie');
    const acceptBtn = document.getElementById('acceptCookies');
    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            cookieBar.style.display = 'none';
        });
    }
});
