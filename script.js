const projects = [
    { title: "Generation plastic soup", year: "2025", img: "assets/home_3.jpg" },
    { title: "Street Fresh", year: "2024", img: "assets/home_6.jpg" },
    { title: "Samen spelen", year: "2024", img: "assets/home_9.jpg" },
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

function initPortfolio() {
    const container = document.getElementById('project-container');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <img src="${project.img}" alt="${project.title}" loading="lazy">
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
    console.log("Cookies accepted");
}

function hideCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
    console.log("Cookies refused");
}

document.addEventListener('DOMContentLoaded', initPortfolio);
