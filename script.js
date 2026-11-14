// Data for the portfolio projects
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

// Function to render projects
function renderProjects() {
    const container = document.getElementById('project-container');
    if (!container) return;

    container.innerHTML = projects.map(p => `
        <div class="project-card">
            <h3>${typeof p.title === 'string' ? p.title.trim() : p.title}</h3>
            <p>${p.year}</p>
        </div>
    `).join('');
}

// Cookie Logic
function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookie-banner').style.display = 'none';
}

function hideCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    
    // Check if cookies were already accepted
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        document.getElementById('cookie-banner').style.display = 'none';
    }
});
