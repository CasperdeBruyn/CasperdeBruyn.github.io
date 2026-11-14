const projects = [
    { title: "Generation plastic soup", year: "2025", desc: "A creative exploration of waste and materials.", img: "assets/home_3.jpg" },
    { title: "Street Fresh", year: "2024", desc: "Digital/physical hybrid project.", img: "assets/home_4.jpg" },
    { title: "Samen spelen", year: "2024", desc: "Interactive installation for public spaces.", img: "assets/home_6.jpg" },
    { title: "Grijpmachine", year: "2024", desc: "An arcade-inspired maker project.", img: "assets/home_7.jpg" },
    { title: "Kodak", year: "2024", desc: "Photography and media study.", img: "assets/home_8.jpg" },
    { title: "Bomby Bird", year: "2024", desc: "Game design experiment.", img: "assets/home_9.jpg" },
    { title: "Picknicken met Sophie", year: "2023", desc: "Documentary and leisure.", img: "assets/home_10.jpg" },
    { title: "OSRS Kerst", year: "2023", desc: "Festive digital art.", img: "assets/home_12.jpg" },
    { title: "De Grinch sloopt de kerstboom", year: "2023", desc: "Stop-motion or installation.", img: "assets/home_13.jpg" },
    { title: "Vechtclub XL", year: "2023", desc: "Community event visuals.", img: "assets/home_14.jpg" },
    { title: "Hu Begeleidt", year: "2022", desc: "UX/UI student project.", img: "assets/home_15.jpg" },
    { title: "Dan maar hier!", year: "2022", desc: "Immersive space exploration.", img: "assets/home_16.jpg" }
];

const container = document.getElementById('project-container');

function initPortfolio() {
    projects.forEach((p, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <img src="${p.img}" alt="${p.title}">
            <h3>${p.title}</h3>
            <p>${p.year}</p>
        `;
        card.onclick = () => openModal(p);
        container.appendChild(card);
    });
}

function openModal(project) {
    document.getElementById('modal-title').innerText = project.title;
    document.getElementById('modal-year').innerText = project.year;
    document.getElementById('modal-image').src = project.img;
    document.getElementById('modal-description').innerText = project.desc;
    document.getElementById('project-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('project-modal').style.display = 'none';
}

function acceptCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'true');
}

window.onload = () => {
    initPortfolio();
    if(localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookie-banner').style.display = 'none';
    }
};
