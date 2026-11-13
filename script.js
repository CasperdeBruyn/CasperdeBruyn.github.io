const projects = [
    { title: "Generation plastic soup", year: "2025", img: "assets/home_1.jpg" },
    { title: "Street Fresh", year: "2024", img: "assets/home_4.jpg" },
    { title: "Samen spelen", year: "2024", img: "assets/home_6.jpg" },
    { title: "Grijpmachine", year: "2024", img: "assets/home_12.jpg" },
    { title: "Kodak", year: "2024", img: "assets/home_15.jpg" },
    { title: "Bomby Bird", year: "2024", img: "assets/home_18.jpg" },
    { title: "Picknicken met Sophie", year: "2023", img: "assets/home_21.jpg" },
    { title: "OSRS Kerst", year: "2023", img: "assets/home_24.jpg" },
    { title: "De Grinch sloopt de kerstboom", year: "2023", img: "assets/home_27.jpg" },
    { title: "Vechtclub XL", year: "2023", img: "assets/home_30.jpg" },
    { title: "Hu Begeleidt", year: "2022", img: "assets/home_33.jpg" },
    { title: "Dan maar hier!", year: "2022", img: "assets/home_36.jpg" }
];

const container = document.getElementById('project-container');

function renderProjects() {
    container.innerHTML = projects.map(p => `
        <div class="project-card">
            <img src="${p.img}" alt="${p.title}" onerror="this.src='https://via.placeholder.com/300'">
            <h3>${p.title}</h3>
            <p>${p.year}</p>
        </div>
    `).join('');
}

function acceptCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'true');
}

function hideCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    if(localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookie-banner').style.display = 'none';
    }
});
