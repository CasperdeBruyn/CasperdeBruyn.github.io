/**
 * Casper de Bruyn — Creative Technologist
 * Interaction Layer: GSAP Animations, Modals & Terminal Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. GSAP ENTRANCE ANIMATIONS
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Hero Reveal
        const heroTl = gsap.timeline();
        heroTl.from(".hero-title", {
            y: 50,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out"
        }).from(".hero-description", {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        }, "-=0.8").from(".hero-actions", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.6");

        // Section Headers
        gsap.utils.toArray(".section-title, .section-label").forEach(title => {
            gsap.from(title, {
                scrollTrigger: {
                    trigger: title,
                    start: "top 90%",
                },
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
        });

        // Workbench Cards Stagger
        gsap.from(".workbench-card", {
            scrollTrigger: {
                trigger: ".workbench-grid",
                start: "top 80%",
            },
            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power2.out"
        });
    }

    // 2. PROJECT DATA (The "Glue")
    const projectDatabase = {
        "poul-cadovius": {
            title: "Poul Cadovius Wandmeubel",
            cat: "Craft // Woodworking",
            desc: "A bespoke wall-mounted shelving unit inspired by the legendary Royal System. Constructed using high-grade Birch and Falcata plywood, focusing on precision joinery and floating aesthetics.",
            tech: ["Birch Plywood", "French Cleats", "Precision Milling"],
            imgs: ["assets/images/about-me_1.jpg", "assets/images/about-me_2.jpg"]
        },
        "bomby-bird": {
            title: "Bomby Bird",
            cat: "Game Design // Code",
            desc: "A chaotic twist on the classic arcade mechanic. Every asset, from the physics of the flying bombs to the UI, was hand-crafted to reflect a playful but high-stakes atmosphere.",
            tech: ["JavaScript", "Game Loop Logic", "Bespoke Assets"],
            imgs: ["assets/images/bomby-bird_1.jpg", "assets/images/about-me_38.jpg"]
        },
        "grijpmachine": {
            title: "De Grijpmachine",
            cat: "Immersive // Physical Code",
            desc: "A fully functional, life-sized claw machine. Built from scratch with a custom mechanical arm, Arduino-controlled electronics, and a custom cabinet design.",
            tech: ["Arduino", "Mechanical Engineering", "Scenography"],
            imgs: ["assets/images/grijpmachine_1.jpg", "assets/images/about-me_2.jpg"]
        },
        "vechtclub": {
            title: "Vechtclub XL",
            cat: "Immersive // Scenography",
            desc: "Designing an immersive playground. Focused on how lighting and physical structures transform a raw space into a storytelling environment for 150+ members.",
            tech: ["Spatial Design", "Event Experience", "Concept Art"],
            imgs: ["assets/images/contact_1.jpg", "assets/images/about-me_40.jpg"]
        }
        // ... extendable to all 12 projects
    };

    // 3. MODAL LOGIC
    const modalOverlay = document.getElementById('project-modal');
    const modalContentArea = document.getElementById('modal-content');
    const closeBtn = document.getElementById('modal-close');

    function openModal(projectId) {
        const data = projectDatabase[projectId] || {
            title: "Archive Entry",
            cat: "Exploration",
            desc: "Detailed documentation for this project is currently being digitized from the workshop archives.",
            tech: ["Research", "Design"],
            imgs: ["assets/images/about-me_1.jpg"]
        };

        let imgHtml = data.imgs.map(img => `<img src="${img}" style="width:100%; margin-bottom: 1rem; border: 1px solid var(--border-subtle);">`).join('');

        modalContentArea.innerHTML = `
            <div style="font-family: var(--font-mono); color: var(--accent-amber); font-size: 0.8rem; margin-bottom: 1rem;">// ${data.cat}</div>
            <h2 style="font-family: var(--font-heading); font-size: 2.5rem; margin-bottom: 2rem;">${data.title}</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem;">
                <div>
                    <p style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 2rem;">${data.desc}</p>
                    <h4 style="font-family: var(--font-mono); margin-bottom: 1rem;">[ TECHNOLOGIES ]</h4>
                    <ul style="list-style: none; font-family: var(--font-mono); color: var(--text-dim); font-size: 0.9rem;">
                        ${data.tech.map(t => `<li>> ${t}</li>`).join('')}
                    </ul>
                </div>
                <div>
                    ${imgHtml}
                </div>
            </div>
        `;

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    document.querySelectorAll('.workbench-card').forEach(card => {
        card.addEventListener('click', () => {
            const pid = card.getAttribute('data-project');
            openModal(pid);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // 4. CONTACT FORM TERMINAL SIMULATION
    const contactForm = document.getElementById('contact-form');
    const contactSuccess = document.getElementById('contact-success');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = "[ ENCRYPTING... ]";
            btn.disabled = true;

            // Formspree logic or similar would go here
            // Simulated delay for "Immersive" feel
            setTimeout(() => {
                contactForm.style.display = 'none';
                contactSuccess.style.display = 'block';
                
                // Typing effect for success message
                const msg = contactSuccess.innerText;
                contactSuccess.innerText = "";
                let i = 0;
                const typing = setInterval(() => {
                    if (i < msg.length) {
                        contactSuccess.innerText += msg.charAt(i);
                        i++;
                    } else {
                        clearInterval(typing);
                    }
                }, 40);
            }, 1500);
        });
    }

    // 5. TERMINAL LOG SIMULATION (AI LAB)
    const logContainer = document.getElementById('lab-logs');
    const extraLogs = [
        "[OK] Neural weights balanced.",
        "[OK] Plywood stress tests validated.",
        "[INFO] Synced with casper@homelab_v2",
        "[STATUS] Design DNA injected."
    ];

    let logIndex = 0;
    function addLog() {
        if (logIndex < extraLogs.length) {
            const p = document.createElement('p');
            p.className = 'log-line';
            p.innerText = extraLogs[logIndex];
            logContainer.insertBefore(p, logContainer.querySelector('.log-cursor'));
            logIndex++;
            setTimeout(addLog, Math.random() * 3000 + 2000);
        }
    }
    setTimeout(addLog, 4000);
});
