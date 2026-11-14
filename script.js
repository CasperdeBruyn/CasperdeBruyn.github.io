const projects = [
    { title: "Generation plastic soup", year: "2025", img: "assets/home_1.jpg" },
    { title: "Street Fresh", year: "2024", img: "assets/home_3.jpg" },
    { title: "Samen spelen", year: "2024", img: "assets/home_4.jpg" },
    { title: "Grijpmachine", year: "2024", img: "assets/home_6.jpg" },
    { title: "Kodak", year: "2024", img: "assets/home_7.jpg" },
    { title: "Bomby Bird", year: "2024", img: "assets/home_8.jpg" },
    { title: "Picknicken met Sophie", year: "2023", img: "assets/home_9.jpg" },
    { title: "OSRS Kerst", year: "2023", img: "assets/home_10.jpg" },
    { title: "De Grinch sloopt de kerstboom", year: "2023", img: "assets/home_12.jpg" },
    { title: "Vechtclub XL", year: "2023", img: "assets/home_13.jpg" },
    { title: "Hu Begeleidt", year: "2022", img: "assets/home_15.jpg" },
    { title: "Dan maar hier!", year: "2022", img: "assets/home_16.jpg" }
];

function renderProjects() {
    const container = document.getElementById('project-container');
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card fade-in';
        card.innerHTML = `
            <img src="${project.img}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.year}</p>
            </div>
        `;
        container.appendChild(card);
    });
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
    if(localStorage.getItem('cookiesAccepted') === 'true') {
        document.getElementById('cookie-banner').style.display = 'none';
    }
});
