// Project Data
const projects = [
    { title: "Generation plastic soup", year: 2025 },
    { title: "Street Fresh", year: 2024 },
    { title: "Samen spelen", year: 2024 },
    { title: "Grijpmachine", year: 2024 },
    { title: "Kodak", year: 2024 },
    { title: "Bomby Bird", year: 2024 },
    { title: "Picknicken met Sophie", year: 2023 },
    { title: "OSRS Kerst", year: 2023 },
    { title: "De Grinch sloopt de kerstboom", year: 2023 },
    { title: "Vechtclub XL", year: 2023 },
    { title: "Hu Begeleidt", year: 2022 },
    { title: "Dan maar hier!", year: 2022 }
];

// Initialize Website
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});

function renderProjects() {
    const container = document.getElementById('project-container');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <span>${project.year}</span>
            <h3>${project.title}</h3>
        `;
        container.appendChild(card);
    });
}

// Cookie Functions
function acceptCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
    console.log("Cookies accepted");
}

function hideCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
    console.log("Cookies refused");
}
