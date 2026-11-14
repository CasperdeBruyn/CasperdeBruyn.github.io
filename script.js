const projects = [
    { title: "Generation plastic soup", year: "2025", img: "assets/home_37.jpg" },
    { title: "Street Fresh", year: "2024", img: "assets/home_36.jpg" },
    { title: "Samen spelen", year: "2024", img: "assets/home_35.jpg" },
    { title: "Grijpmachine", year: "2024", img: "assets/home_34.jpg" },
    { title: "Kodak", year: "2024", img: "assets/home_33.jpg" },
    { title: "Bomby Bird", year: "2024", img: "assets/home_32.jpg" },
    { title: "Picknicken met Sophie", year: "2023", img: "assets/home_31.jpg" },
    { title: "OSRS Kerst", year: "2023", img: "assets/home_30.jpg" },
    { title: "De Grinch sloopt de kerstboom", year: "2023", img: "assets/home_28.jpg" },
    { title: "Vechtclub XL", year: "2023", img: "assets/home_27.jpg" },
    { title: "Hu Begeleidt", year: "2022", img: "assets/home_26.jpg" },
    { title: "Dan maar hier!", year: "2022", img: "assets/home_25.jpg" }
];

function initProjects() {
    const container = document.getElementById('project-container');
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <img src="${project.img}" alt="${project.title}" class="project-image" onerror="this.src='https://via.placeholder.com/400x200'">
            <h3>${project.title}</h3>
            <p>${project.year}</p>
        `;
        container.appendChild(card);
    });
}

function acceptCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
    console.log("Cookies accepted");
}

function hideCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    initProjects();
});
