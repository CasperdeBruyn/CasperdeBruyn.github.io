/**
 * Casper de Bruyn Portfolio - Logic Builder & Interaction Layer
 * Handles animations, dynamic project filtering, terminal form transmission, and cookies.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Intersection Observer for Smooth Fade-In Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card, .about-card, .about-content, .homelab-content, .hobbies-box, .terminal-form').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // 2. Accessibility & Custom Focus Outlines
    document.querySelectorAll('a, button, input, textarea').forEach(element => {
        element.addEventListener('focus', () => {
            element.style.outline = '2px solid var(--accent-maker)';
            element.style.outlineOffset = '3px';
        });
        element.addEventListener('blur', () => {
            element.style.outline = 'none';
        });
    });

    // 3. Dynamic Status Check Simulation for the Linux AI Homelab & Navbar
    const statusIndicator = document.querySelector('.status-indicator');
    if (statusIndicator) {
        setInterval(() => {
            statusIndicator.style.opacity = statusIndicator.style.opacity === '0.6' ? '1' : '0.6';
        }, 2000);
    }

    // 4. Workbench Filtering Logic
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                    setTimeout(() => card.style.opacity = '1', 50);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });
        });
    });
});

/**
 * 5. Handle Terminal Form Transmission (Contact Form)
 */
function handleTransmission(event) {
    event.preventDefault();
    const nameInput = document.getElementById('name').value;
    const responseBox = document.getElementById('form-response');
    
    responseBox.className = 'form-response-terminal success';
    responseBox.innerHTML = `> [SYSTEM 200 OK]: Transmission received from <strong>${escapeHtml(nameInput)}</strong>.<br>> AI Agent routing message to Casper's inbox. Expect reply shortly!`;

    document.getElementById('contact-form').reset();
}

/**
 * 6. Cookie Banner Handlers
 */
function acceptCookies() {
    const banner = document.getElementById('cookie-banner');
    banner.style.transform = 'translateY(100%)';
    banner.style.transition = 'transform 0.4s ease-in-out';
    setTimeout(() => banner.remove(), 400);
}

function refuseCookies() {
    const banner = document.getElementById('cookie-banner');
    banner.style.transform = 'translateY(100%)';
    banner.style.transition = 'transform 0.4s ease-in-out';
    setTimeout(() => banner.remove(), 400);
}

/**
 * Helper to sanitize user input for terminal printouts
 */
function escapeHtml(string) {
    return String(string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
