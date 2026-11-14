// Cookie Banner Logic
const cookieBanner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('accept-cookies');
const refuseBtn = document.getElementById('refuse-cookies');

if (localStorage.getItem('cookiesAccepted')) {
    cookieBanner.classList.add('hidden');
}

acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBanner.classList.add('hidden');
});

refuseBtn.addEventListener('click', () => {
    cookieBanner.classList.add('hidden');
});

// Language Switcher for About Me
function switchLang(lang) {
    const nlContent = document.getElementById('content-nl');
    const enContent = document.getElementById('content-en');
    const buttons = document.querySelectorAll('.about-tabs .tab-btn');

    buttons.forEach(btn => btn.classList.remove('active'));

    if (lang === 'nl') {
        nlContent.classList.add('active');
        enContent.classList.remove('active');
        buttons[0].classList.add('active');
    } else {
        enContent.classList.add('active');
        nlContent.classList.remove('active');
        buttons[1].classList.add('active');
    }
}

// Project Modal Interactivity
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalYear = document.getElementById('modal-year');
const modalDesc = document.getElementById('modal-description');
const closeModal = document.querySelector('.close-modal');
const projectCards = document.querySelectorAll('.project-card');

const projectData = {
    "generation-plastic-soup": { title: "Generation plastic soup", year: "2025", desc: "A forward-thinking project addressing ecological challenges through creative design and immersive storytelling." },
    "street-fresh": { title: "Street Fresh", year: "2024", desc: "An urban-inspired brand and visual identity project combining street culture with fresh aesthetics." },
    "samen-spelen": { title: "Samen spelen", year: "2024", desc: "An interactive installation designed to bring people together through play and shared physical experiences." },
    "grijpmachine": { title: "Grijpmachine", year: "2024", desc: "A physical/digital hybrid claw machine experience built with custom mechanics and playful interactions." },
    "kodak": { title: "Kodak", year: "2024", desc: "A nostalgic photographic exploration celebrating analog aesthetics in a modern digital world." },
    "bomby-bird": { title: "Bomby Bird", year: "2024", desc: "A fun and chaotic arcade game project developed with engaging mechanics and quirky character designs." },
    "picknicken-met-sophie": { title: "Picknicken met Sophie", year: "2023", desc: "A narrative-driven spatial design and illustration project capturing intimate moments." },
    "osrs-kerst": { title: "OSRS Kerst", year: "2023", desc: "A festive Old School RuneScape themed holiday project filled with community cheer and custom artwork." },
    "de-grinch-sloopt-de-kerstboom": { title: "De Grinch sloopt de kerstboom", year: "2023", desc: "A humorous interactive seasonal installation portraying festive chaos." },
    "vechtclub-xl": { title: "Vechtclub XL", year: "2023", desc: "Branding and visual collateral for an energetic community event." },
    "hu-begeleidt": { title: "Hu Begeleidt", year: "2022", desc: "Educational support platform design focusing on user-centric guidance at Hogeschool Utrecht." },
    "dan-maar-hier": { title: "Dan maar hier!", year: "2022", desc: "An experimental spatial and conceptual design exploring alternative environments." }
};

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const key = card.getAttribute('data-project');
        const data = projectData[key];
        if (data) {
            modalTitle.textContent = data.title;
            modalYear.textContent = data.year;
            modalDesc.textContent = data.desc;
            modal.classList.add('active');
        }
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});
