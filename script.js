/**
 * Casper de Bruyn — Creative Technologist
 * Interaction Layer: GSAP Animations, Dossier Modal System & AI Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 0. PROJECT DATABASE (12 Project Mapping) ---
    const PROJECT_DATA = {
        "poul-cadovius": {
            id: "P-01",
            title: "Poul Cadovius System",
            tags: ["Craft", "Woodworking", "Birch Multiplex"],
            story: "A meticulously crafted modular wall unit study. Inspired by the Danish mid-century classic, this project explores the precision of birch and falcata multiplex combined with French Cleat mounting systems for a completely modular, floating aesthetic.",
            images: ["assets/images/about-me_1.jpg", "assets/images/about-me_38.jpg"]
        },
        "french-cleat": {
            id: "P-02",
            title: "French Cleat Bench",
            tags: ["Spatial", "Furniture", "Interior"],
            story: "Designing for utility and visual lightness. This floating bench uses invisible joinery to maintain a clean silhouette while offering heavy-duty structural integrity through integrated cleats.",
            images: ["assets/images/about-me_3.jpg", "assets/images/about-me_2.jpg"]
        },
        "claw-machine": {
            id: "P-03",
            title: "The Claw Machine",
            tags: ["Physical Logic", "Electronics", "Interaction"],
            story: "A full-scale functional installation. Combining mechanical engineering with digital logic, this machine was built from the ground up to showcase the tangible side of user experience design.",
            images: ["assets/images/grijpmachine_1.jpg", "assets/images/about-me_1.jpg"]
        },
        "vechtclub": {
            id: "P-04",
            title: "Vechtclub XL Identity",
            tags: ["Branding", "Immersive", "Atmosphere"],
            story: "Developing the visual and atmospheric identity for a major creative hub. The focus was on translating the raw, industrial energy of the space into a cohesive brand experience.",
            images: ["assets/images/contact_1.jpg", "assets/images/vechtclub_1.jpg"]
        },
        "grinch": {
            id: "P-05",
            title: "The Grinch Prototyping",
            tags: ["Rapid Iteration", "Storytelling", "Play"],
            story: "A high-speed development sprint resulting in a chaotic tabletop experience. Built within a week to test mechanics of physical interaction and competitive storytelling.",
            images: ["assets/images/de-grinch-sloopt-de-kerstboom_1.jpg", "assets/images/grinch_1.jpg"]
        },
        "screen-printing": {
            id: "P-06",
            title: "Custom Screen-printing",
            tags: ["Analogue", "Graphic Design", "Production"],
            story: "Returning to the basics of ink and mesh. This collection of hand-pulled prints explores how digital vector art can be transformed through the imperfections of physical production.",
            images: ["assets/images/about-me_40.jpg", "assets/images/zeefdruk_1.jpg"]
        },
        "bomby-bird": {
            id: "P-07",
            title: "Bomby Bird",
            tags: ["C# Development", "UI/UX", "Game Design"],
            story: "A retro-futuristic arcade game. Every sprite and mechanic was custom coded to create a high-stakes, explosive take on classic bird-flight physics. Corrected assets focus on scifi-UI and sprites.",
            images: ["assets/images/bomby-bird_1.jpg", "assets/images/bomby-bird_2.jpg"]
        },
        "plastic-soup": {
            id: "P-08",
            title: "Generation Plastic Soup",
            tags: ["Social Impact", "Game Jam", "Strategy"],
            story: "An educational card game designed during an EPIC-WE Jam. It challenges players to navigate the complexities of ocean pollution and sea-level rise through strategic play.",
            images: ["assets/images/generation-plastic-soup_1.jpg", "assets/images/plastic-soup_1.jpg"]
        },
        "osrs-poster": {
            id: "P-09",
            title: "OSRS Christmas Poster",
            tags: ["Vector Art", "Nostalgia", "Illustration"],
            story: "A detailed vector study reimagining the world of Old School Runescape through a modern design lens, focusing on clean lines and festive color palettes.",
            images: ["assets/images/about-me_39.jpg", "assets/images/osrs-poster_1.jpg"]
        },
        "sophie": {
            id: "P-10",
            title: "Picnicking with Sophie",
            tags: ["UX Design", "Service Flow", "Empathy"],
            story: "Mapping the emotional and functional journey of sharing a meal. This service design project uses UX methodologies to create a more intimate and seamless picnic experience.",
            images: ["assets/images/about-me_2.jpg", "assets/images/sophie_1.jpg"]
        },
        "hu-begeleidt": {
            id: "P-11",
            title: "HU Begeleidt",
            tags: ["UX Research", "Educational", "Platform"],
            story: "A comprehensive digital guidance platform for students. Based on deep user research at HU Utrecht, focusing on accessibility and student well-being.",
            images: ["assets/images/about-me_38.jpg", "assets/images/hu-begeleidt_1.jpg"]
        },
        "kodak-retro": {
            id: "P-12",
            title: "Kodak Retro",
            tags: ["Branding", "Typography", "Heritage"],
            story: "A futuristic re-interpretation of the Kodak brand heritage. Combining mid-century color theory with avant-garde typography to bridge the analogue-digital gap.",
            images: ["assets/images/contact_2.jpg", "assets/images/kodak_1.jpg"]
        }
    };

    // --- 1. CUSTOM CURSOR ---
    const cursor = document.getElementById('cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        const interactiveElements = document.querySelectorAll('a, button, .project-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('active'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
        });
    }

    // --- 2. GSAP ENTRANCE ANIMATIONS ---
    gsap.registerPlugin(ScrollTrigger);

    // Hero Timeline
    const heroTl = gsap.timeline();
    heroTl.from(".navbar", { y: -100, opacity: 0, duration: 1 })
          .from(".terminal-badge", { x: -20, opacity: 0, duration: 0.5 }, "-=0.5")
          .from(".hero-title", { y: 50, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.3")
          .from(".hero-lead", { y: 20, opacity: 0, duration: 0.8 }, "-=0.7")
          .from(".hero-btns", { y: 20, opacity: 0, duration: 0.8 }, "-=0.7");

    // Section Titles ScrollReveal
    gsap.utils.toArray(".section-header").forEach(header => {
        gsap.from(header, {
            scrollTrigger: { trigger: header, start: "top 85%" },
            y: 40, opacity: 0, duration: 1, ease: "power3.out"
        });
    });

    // Project Grid Stagger
    gsap.from(".project-card", {
        scrollTrigger: { trigger: ".project-grid", start: "top 80%" },
        y: 60, opacity: 0, duration: 1, stagger: 0.1, ease: "power2.out"
    });

    // --- 3. MODAL LOGIC (The Dossier) ---
    const modal = document.getElementById('modal-dossier');
    const modalClose = modal.querySelector('.modal-close');
    const modalGallery = document.getElementById('modal-project-gallery');
    
    function openDossier(slug) {
        const data = PROJECT_DATA[slug];
        if (!data) return;

        document.getElementById('modal-project-id').innerText = data.id;
        document.getElementById('modal-project-title').innerText = data.title;
        document.getElementById('modal-project-desc').innerText = data.story;
        
        // Inject Tags
        const tagContainer = document.getElementById('modal-project-tags');
        tagContainer.innerHTML = data.tags.map(t => `<span class="tag">${t}</span>`).join('');

        // Inject Gallery
        modalGallery.innerHTML = data.images.map(img => `<img src="${img}" alt="${data.title}">`).join('');

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeDossier() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    document.querySelectorAll('.project-card').forEach(card => {
