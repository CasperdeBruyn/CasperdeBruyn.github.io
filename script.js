// Project Data - Schaalbaar beheer
const projects = [
    { title: "Generation plastic soup", year: "2025" },
    { title: "Street Fresh", year: "2024" },
    { title: "Samen spelen", year: "2024" },
    { title: "Grijpmachine", year: "2024" },
    { title: "Kodak", year: "2024" },
    { title: "Bomby Bird", year: "2024" },
    { title: "Picknicken met Sophie", year: "2023" },
    { title: "OSRS Kerst", year: "2023" },
    { title: "De Grinch sloopt de kerstboom", year: "2023" },
    { title: "Vechtclub XL", year: "2023" },
    { title: "Hu Begeleidt", year: "2022" },
    { title: "Dan maar hier!", year: "2022" }
];

// Functie om projecten te renderen
function renderProjects() {
    const container = document.getElementById('project-container');
    container.innerHTML = projects.map(project => `
        <div class="project-card">
            <h3>${project.title}</h3>
            <p>${project.year}</p>
        </div>
    `).join('');
}

// Cookie functies
function acceptCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
    console.log("Cookies accepted");
}

function hideCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
    console.log("Cookies refused");
}

// Initialisatie
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});
