// Project Data (gebaseerd op scrape)
const projects = [
    { title: "Generation plastic soup", year: "2025", img: "assets/home_27.jpg", desc: "Onderzoek naar materiaalgebruik en duurzaamheid." },
    { title: "Street Fresh", year: "2024", img: "assets/home_24.jpg", desc: "Urban design project." },
    { title: "Samen spelen", year: "2024", img: "assets/home_21.jpg", desc: "Interactieve installatie." },
    { title: "Grijpmachine", year: "2024", img: "assets/home_18.jpg", desc: "Mechanische installatiebouw." },
    { title: "Kodak", year: "2024", img: "assets/home_15.jpg", desc: "Analog design experiment." },
    { title: "Bomby Bird", year: "2024", img: "assets/home_12.jpg", desc: "Digital game development." },
    { title: "Picknicken met Sophie", year: "2023", img: "assets/home_9.jpg", desc: "Conceptuele fotografie & storytelling." },
    { title: "OSRS Kerst", year: "2023", img: "assets/home_6.jpg", desc: "Community event design." },
    { title: "Vechtclub XL", year: "2023", img: "assets/home_4.jpg", desc: "Event visualisatie." }
];

// Render Projects
function renderProjects() {
    const container = document.getElementById('project-container');
    container.innerHTML = projects.map(p => `
        <div class="project-card">
            <img src="${p.img}" alt="${p.title}" onerror="this.src='assets/placeholder.jpg'">
            <h3>${p.title} (${p.year})</h3>
            <p>${p.desc}</p>
        </div>
    `).join('');
}

// Cookie Functions
function acceptCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
    console.log("Cookies accepted");
}

function hideCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});
