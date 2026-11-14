/**
 * Casper de Bruyn Portfolio - Logic Builder
 * Handle dynamische project rendering, animaties en interactieve componenten.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Intersection Observer voor fade-in animaties
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

    document.querySelectorAll('.project-card, .about-card, .about-content, .homelab-content, .hobbies-box').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // 2. Toegankelijkheid & Focus Management
    document.querySelectorAll('a, button').forEach(element => {
        element.addEventListener('focus', () => {
            element.style.outline = '2px solid var(--accent-maker)';
            element.style.outlineOffset = '3px';
        });
        element.addEventListener('blur', () => {
            element.style.outline = 'none';
        });
    });

    // 3. Dynamische Status Check simulatie voor de Linux AI Homelab
    const statusIndicator = document.querySelector('.status-indicator');
    if (statusIndicator) {
        setInterval(() => {
            // Subtiele animatie of pulse op de online status om "live" aan te duiden
            statusIndicator.style.opacity = statusIndicator.style.opacity === '0.6' ? '1' : '0.6';
        }, 2000);
    }
});
