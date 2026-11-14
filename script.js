const projects = [
    { title: "Generation plastic soup", year: "2025", img: "home_27.jpg", desc: "Een project gericht op duurzaamheid en impact." },
    { title: "Street Fresh", year: "2024", img: "home_24.jpg", desc: "Focus op urban design en visuele identiteit." },
    { title: "Samen spelen", year: "2024", img: "home_21.jpg", desc: "Interactieve installatie voor sociale verbinding." },
    { title: "Grijpmachine", year: "2024", img: "home_18.jpg", desc: "Een tastbare ervaring met interactieve elementen." },
    { title: "Kodak", year: "2024", img: "home_12.jpg", desc: "Fotografisch experiment met analoge esthetiek." },
    { title: "Bomby Bird", year: "2024", img: "home_33.jpg", desc: "Game design en character development." },
    { title: "Picknicken met Sophie", year: "2023", img: "home_34.jpg", desc: "Social design en storytelling." },
    { title: "OSRS Kerst", year: "2023", img: "home_36.jpg", desc: "Virtuele event organisatie en asset creatie." },
    { title: "De Grinch sloopt de kerstboom", year: "2023", img: "home_4.jpg", desc: "Video-installatie en humoristisch narratief." },
    { title: "Vechtclub XL", year: "2023", img: "home_6.jpg", desc: "Branding en community visual design." },
    { title: "Hu Begeleidt", year: "2022", img: "home_7.jpg", desc: "Educatief ontwerp en ondersteuning." },
    { title: "Dan maar hier!", year: "2022", img: "home_9.jpg", desc: "Onderzoek naar ruimtelijke ervaringen." }
];

const container = document.getElementById('project-container');
const modal = document.getElementById('project-modal');

// Render projects
projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <img src="${project.img}" alt="${project.title}">
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.year}</p>
        </div>
    `;
    card.onclick = () => openModal(project);
    container.appendChild(card);
});

function openModal(project) {
    document.getElementById('modal-title').innerText = project.title;
    document.getElementById('modal-year').innerText = project.year;
    document.getElementById('modal-image').src = project.img;
    document.getElementById('modal-description').innerText = project.desc;
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

function acceptCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
    console.log("Cookies accepted");
}

function refuseCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
    console.log("Cookies refused");
}

// Close modal on outside click
window.onclick = (event) => {
    if (event.target == modal) closeModal();
};
