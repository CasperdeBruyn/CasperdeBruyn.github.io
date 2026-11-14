// Project Data parsed from scrape
const projects = [
    { title: "Generation plastic soup", year: "2025", img: "home_1.jpg" },
    { title: "Street Fresh", year: "2024", img: "home_2.jpg" },
    { title: "Samen spelen", year: "2024", img: "home_3.jpg" },
    { title: "Grijpmachine", year: "2024", img: "home_4.jpg" },
    { title: "Kodak", year: "2024", img: "home_5.jpg" },
    { title: "Bomby Bird", year: "2024", img: "home_6.jpg" },
    { title: "Picknicken met Sophie", year: "2023", img: "home_7.jpg" },
    { title: "OSRS Kerst", year: "2023", img: "home_8.jpg" },
    { title: "De Grinch sloopt de kerstboom", year: "2023", img: "home_9.jpg" },
    { title: "Vechtclub XL", year: "2023", img: "home_10.jpg" },
    { title: "Hu Begeleidt", year: "2022", img: "home_11.jpg" },
    { title: "Dan maar hier!", year: "2022", img: "home_12.jpg" }
];

// Initialize UI
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});

function renderProjects() {
    const container = document.getElementById('project-container');
    container.innerHTML = projects.map(project => `
        <div class="project-card fade-in">
            <img src="${project.img}" alt="${project.title}">
            <div class="project-card-content">
                <h3>${project.title}</h3>
                <p>${project.year}</p>
            </div>
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
    console.log("Cookies refused");
}

// Scroll animation trigger
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});
