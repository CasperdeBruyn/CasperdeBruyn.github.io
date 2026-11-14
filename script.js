const projects = [
    { title: "Generation plastic soup", year: "2025", img: "assets/home_3.jpg", desc: "Onderzoek naar plastic vervuiling en visuele representatie." },
    { title: "Street Fresh", year: "2024", img: "assets/home_4.jpg", desc: "Urban design project gericht op versheid en lokale gemeenschappen." },
    { title: "Samen spelen", year: "2024", img: "assets/home_6.jpg", desc: "Installatie gericht op interactie tussen kinderen." },
    { title: "Grijpmachine", year: "2024", img: "assets/home_7.jpg", desc: "Een interactieve grijpmachine installatie." },
    { title: "Kodak", year: "2024", img: "assets/home_9.jpg", desc: "Analoge fotografie experimenten." },
    { title: "Bomby Bird", year: "2024", img: "assets/home_10.jpg", desc: "Game dev project: Bomby Bird." },
    { title: "Picknicken met Sophie", year: "2023", img: "assets/home_12.jpg", desc: "Sociaal ontwerp project." },
    { title: "OSRS Kerst", year: "2023", img: "assets/home_15.jpg", desc: "Community event visuals voor Old School RuneScape." },
    { title: "De Grinch sloopt de kerstboom", year: "2023", img: "assets/home_18.jpg", desc: "Visuele storytelling installatie." },
    { title: "Vechtclub XL", year: "2023", img: "assets/home_21.jpg", desc: "Branding en event organisatie voor Vechtclub XL." },
    { title: "Hu Begeleidt", year: "2022", img: "assets/home_24.jpg", desc: "Design en begeleidingsconcept voor Hogeschool Utrecht." },
    { title: "Dan maar hier!", year: "2022", img: "assets/home_27.jpg", desc: "Ruimtelijk ontwerp onderzoek." }
];

const container = document.getElementById('project-container');

function renderProjects() {
    projects.forEach((proj, index) => {
        const card = document.createElement('div');
        card.className = 'project-card fade-in';
        card.innerHTML = `
            <img src="${proj.img}" alt="${proj.title}" onerror="this.src='https://via.placeholder.com/300'">
            <h3>${proj.title}</h3>
            <p>${proj.year}</p>
        `;
        card.onclick = () => openModal(proj);
        container.appendChild(card);
    });
}

function openModal(proj) {
    document.getElementById('modal-title').innerText = proj.title;
    document.getElementById('modal-year').innerText = proj.year;
    document.getElementById('modal-image').src = proj.img;
    document.getElementById('modal-description').innerText = proj.desc;
    document.getElementById('project-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('project-modal').style.display = 'none';
}

function acceptCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'true');
}

function refuseCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
}

// Initialisatie
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    if(localStorage.getItem('cookiesAccepted') === 'true') {
        document.getElementById('cookie-banner').style.display = 'none';
    }
});
