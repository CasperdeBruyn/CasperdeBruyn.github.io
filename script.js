const projects = [
    { title: "Generation plastic soup", year: "2025", img: "home_3.jpg" },
    { title: "Street Fresh", year: "2024", img: "home_4.jpg" },
    { title: "Samen spelen", year: "2024", img: "home_6.jpg" },
    { title: "Grijpmachine", year: "2024", img: "home_7.jpg" },
    { title: "Kodak", year: "2024", img: "home_8.jpg" },
    { title: "Bomby Bird", year: "2024", img: "home_9.jpg" },
    { title: "Picknicken met Sophie", year: "2023", img: "home_10.jpg" },
    { title: "OSRS Kerst", year: "2023", img: "home_11.jpg" },
    { title: "De Grinch sloopt de kerstboom", year: "2023", img: "home_12.jpg" },
    { title: "Vechtclub XL", year: "2023", img: "home_13.jpg" },
    { title: "Hu Begeleidt", year: "2022", img: "home_14.jpg" },
    { title: "Dan maar hier!", year: "2022", img: "home_15.jpg" }
];

function initProjects() {
    const container = document.getElementById('project-container');
    container.innerHTML = projects.map(p => `
        <div class="project-card fade-in">
            <img src="${p.img}" alt="${p.title}" onerror="this.src='https://via.placeholder.com/300'">
            <h3>${p.title}</h3>
            <p>${p.year}</p>
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

document.addEventListener('DOMContentLoaded', () => {
    initProjects();
});
