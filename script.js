const projects = [
    { title: "Generation plastic soup", year: "2025", desc: "Focus on sustainability and circular design." },
    { title: "Street Fresh", year: "2024", desc: "Urban aesthetics and design research." },
    { title: "Samen spelen", year: "2024", desc: "Interactive social project." },
    { title: "Grijpmachine", year: "2024", desc: "Physical installation work." },
    { title: "Kodak", year: "2024", desc: "Photography and media study." },
    { title: "Bomby Bird", year: "2024", desc: "Gaming/Interaction project." },
    { title: "Picknicken met Sophie", year: "2023", desc: "Documentary and social design." },
    { title: "OSRS Kerst", year: "2023", desc: "Community event organization." },
    { title: "De Grinch sloopt de kerstboom", year: "2023", desc: "Creative storytelling." },
    { title: "Vechtclub XL", year: "2023", desc: "Event identity design." },
    { title: "Hu Begeleidt", year: "2022", desc: "Educational support project." },
    { title: "Dan maar hier!", year: "2022", desc: "Spatial design exploration." }
];

function renderProjects() {
    const container = document.getElementById('project-container');
    container.innerHTML = projects.map(project => `
        <div class="project-card">
            <h3>${project.title}</h3>
            <p>${project.year} • ${project.desc}</p>
        </div>
    `).join('');
}

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

// Smooth scroll voor nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
