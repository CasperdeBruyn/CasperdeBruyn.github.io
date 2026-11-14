// --- Project Database ---
const projects = [
    {
        id: "generation-plastic-soup",
        title: "Generation plastic soup",
        year: "2025",
        image: "assets/home_3.jpg",
        description: "Een indringend project over de impact van plastic soep op onze oceanen en toekomstige generaties. Gekoppeld aan een interactieve installatie om bewustwording te vergroten."
    },
    {
        id: "street-fresh",
        title: "Street Fresh",
        year: "2024",
        image: "assets/home_4.jpg",
        description: "Street Fresh brengt stedelijke cultuur en frisse ontwerpen samen. Van branding tot fysieke presentatie, ontworpen om de urban experience te versterken."
    },
    {
        id: "samen-spelen",
        title: "Samen spelen",
        year: "2024",
        image: "assets/home_6.jpg",
        description: "Een inclusief concept dat mensen samenbrengt door middel van speelse interactie en tastbare objecten. Ontworpen met een focus op verbinding."
    },
    {
        id: "grijpmachine",
        title: "Grijpmachine",
        year: "2024",
        image: "assets/home_12.jpg",
        description: "Een volledig herbouwde en gehackte grijpmachine waarbij techniek, houtbewerking en interactief design samenkomen voor een unieke ervaring."
    },
    {
        id: "kodak",
        title: "Kodak",
        year: "2024",
        image: "assets/home_21.jpg",
        description: "Eerbetoon aan analoge fotografie en nostalgie. Een visuele verkenning van licht, film en moderne digitale compositie."
    },
    {
        id: "bomby-bird",
        title: "Bomby Bird",
        year: "2024",
        image: "assets/home_24.jpg",
        description: "Een speelse game-ervaring gecombineerd met snelle mechanics en eigen illustraties. Vol humor en uitdaging."
    },
    {
        id: "picknicken-met-sophie",
        title: "Picknicken met Sophie",
        year: "2023",
        image: "assets/home_27.jpg",
        description: "Een sfeervolle installatie en visueel verhaal over samenzijn, gedetailleerde props en scenografie."
    },
    {
        id: "osrs-kerst",
        title: "OSRS Kerst",
        year: "2023",
        image: "assets/home_33.jpg",
        description: "Old School RuneScape geïnspireerde kerstspecial. Vol nostalgische easter eggs en feestelijke graphics voor de community."
    },
    {
        id: "de-grinch-sloopt-de-kerstboom",
        title: "De Grinch sloopt de kerstboom",
        year: "2023",
        image: "assets/home_34.jpg",
        description: "Een humoristische en dynamische kerstinstallatie waarin de Grinch de hoofdrol speelt. Handgemaakte decoratie ontmoet digitale timing."
    },
    {
        id: "vechtclub-xl",
        title: "Vechtclub XL",
        year: "2023",
        image: "assets/home_36.jpg",
        description: "Branding, event visuals en sfeercreatie voor Vechtclub XL. Vol energie en krachtige visuele identiteit."
    },
    {
        id: "hu-begeleidt",
        title: "Hu Begeleidt",
        year: "2022",
        image: "assets/home_37.jpg",
        description: "Informatief en ondersteunend platformontwerp voor studentenbegeleiding aan de Hogeschool Utrecht."
    },
    {
        id: "dan-maar-hier",
        title: "Dan maar hier!",
        year: "2022",
        image: "assets/home_10.jpg",
        description: "Een creatief concept en ruimtelijke installatie over alternatieve plekken opzoeken wanneer de wereld op slot zit."
    }
];

// --- Render Projects ---
function renderProjects() {
    const container = document.getElementById('project-container');
    if (!container) return;

    container.innerHTML = projects.map(project => `
        <article class="project-card" onclick="openModal('${project.id}')">
            <div class="project-img-wrapper">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
            </div>
            <div class="project-info">
                <span class="project-year">${project.year}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
            </div>
        </article>
    `).join('');
}

// --- Modal Functionality ---
function openModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    document.getElementById('modal-year').textContent = project.year;
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-image').src = project.image;
    document.getElementById('modal-image').alt = project.title;
    document.getElementById('modal-description').textContent = project.description;

    const modal = document.getElementById('project-modal');
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
}

// Sluit modal met Escape-toets
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// --- Cookie Banner ---
function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    document.getElementById('cookie-banner').classList.add('hidden');
}

function refuseCookies() {
    localStorage.setItem('cookieConsent', 'refused');
    document.getElementById('cookie-banner').classList.add('hidden');
}

window.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    
    if (localStorage.getItem('cookieConsent')) {
        document.getElementById('cookie-banner').classList.add('hidden');
    }
});
