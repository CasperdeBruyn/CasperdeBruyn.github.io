const projects = [
    { title: "Generation plastic soup", year: "2025", image: "assets/home_3.jpg" },
    { title: "Street Fresh", year: "2024", image: "assets/home_4.jpg" },
    { title: "Samen spelen", year: "2024", image: "assets/home_6.jpg" },
    { title: "Grijpmachine", year: "2024", image: "assets/home_7.jpg" },
    { title: "Kodak", year: "2024", image: "assets/home_9.jpg" },
    { title: "Bomby Bird", year: "2024", image: "assets/home_10.jpg" },
    { title: "Picknicken met Sophie", year: "2023", image: "assets/home_12.jpg" },
    { title: "OSRS Kerst", year: "2023", image: "assets/home_13.jpg" },
    { title: "De Grinch sloopt de kerstboom", year: "2023", image: "assets/home_14.jpg" },
    { title: "Vechtclub XL", year: "2023", image: "assets/home_15.jpg" },
    { title: "Hu Begeleidt", year: "2022", image: "assets/home_16.jpg" },
    { title: "Dan maar hier!", year: "2022", image: "assets/home_17.jpg" }
];

function renderProjects() {
    const container = document.getElementById('project-container');
    container.innerHTML = projects.map(p => `
        <div class="project-card">
            <img src="${p.image}" alt="${p.title}" onerror="this.style.display='none'">
            <h3>${p.title}</h3>
            <span>${p.year}</span>
        </div>
    `).join('');
}

function acceptCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
    console.log("Cookies accepted.");
}

function hideCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', renderProjects);
