const projects = [
    { title: "Generation plastic soup", year: "2025", img: "home_1.jpg", desc: "A deep dive into ecological awareness through creative installations." },
    { title: "Street Fresh", year: "2024", img: "home_2.jpg", desc: "Urban aesthetics meeting modern design." },
    { title: "Samen spelen", year: "2024", img: "home_3.jpg", desc: "Social interaction design project." },
    { title: "Grijpmachine", year: "2024", img: "home_4.jpg", desc: "Interactive installation." },
    { title: "Kodak", year: "2024", img: "home_5.jpg", desc: "Photography and film exploration." },
    { title: "Bomby Bird", year: "2024", img: "home_6.jpg", desc: "Game development and visual assets." },
    { title: "Picknicken met Sophie", year: "2023", img: "home_7.jpg", desc: "Personal project focused on immersive environments." },
    { title: "OSRS Kerst", year: "2023", img: "home_8.jpg", desc: "Community event management and visuals." },
    { title: "De Grinch sloopt de kerstboom", year: "2023", img: "home_9.jpg", desc: "Visual storytelling project." },
    { title: "Vechtclub XL", year: "2023", img: "home_10.jpg", desc: "Identity design for local sports club." },
    { title: "Hu Begeleidt", year: "2022", img: "home_11.jpg", desc: "UX/UI design for educational support." },
    { title: "Dan maar hier!", year: "2022", img: "home_12.jpg", desc: "Conceptual spatial design." }
];

function renderProjects() {
    const container = document.getElementById('project-container');
    projects.forEach((proj, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${proj.title}</h3>
            <p>${proj.year}</p>
        `;
        card.onclick = () => openModal(proj);
        container.appendChild(card);
    });
}

function openModal(proj) {
    document.getElementById('modal-title').innerText = proj.title;
    document.getElementById('modal-year').innerText = proj.year;
    document.getElementById('modal-description').innerText = proj.desc;
    document.getElementById('modal-image').src = `assets/${proj.img}`;
    document.getElementById('project-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('project-modal').style.display = 'none';
}

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    hideCookies();
}

function hideCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    if(localStorage.getItem('cookiesAccepted') === 'true') {
        hideCookies();
    }
});
