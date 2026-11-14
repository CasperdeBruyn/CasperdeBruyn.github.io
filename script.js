// Project Data
const projects = [
    { title: "Generation plastic soup", year: "2025", img: "assets/home_27.jpg" },
    { title: "Street Fresh", year: "2024", img: "assets/home_21.jpg" },
    { title: "Samen spelen", year: "2024", img: "assets/home_3.jpg" },
    { title: "Grijpmachine", year: "2024", img: "assets/home_4.jpg" },
    { title: "Kodak", year: "2024", img: "assets/home_6.jpg" },
    { title: "Bomby Bird", year: "2024", img: "assets/home_7.jpg" },
    { title: "Picknicken met Sophie", year: "2023", img: "assets/home_33.jpg" },
    { title: "OSRS Kerst", year: "2023", img: "assets/home_34.jpg" },
    { title: "De Grinch sloopt de kerstboom", year: "2023", img: "assets/home_36.jpg" },
    { title: "Vechtclub XL", year: "2023", img: "assets/home_24.jpg" },
    { title: "Hu Begeleidt", year: "2022", img: "assets/home_12.jpg" },
    { title: "Dan maar hier!", year: "2022", img: "assets/home_18.jpg" }
];

// Dynamisch renderen van projecten
function renderProjects() {
    const container = document.getElementById('project-container');
    if (!container) return;

    container.innerHTML = projects.map(project => `
        <div class="project-card fade-in">
            <img src="${project.img}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.year}</p>
            </div>
        </div>
    `).join('');
}

// Cookie functies
function acceptCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
    console.log("Cookies accepted.");
}

function hideCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
    console.log("Cookies refused.");
}

// Initialisatie
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});
