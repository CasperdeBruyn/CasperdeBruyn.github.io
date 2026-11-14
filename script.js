const projects = [
    { title: "Generation plastic soup", year: "2025", desc: "Project focused on sustainability and design." },
    { title: "Street Fresh", year: "2024", desc: "Urban creative project." },
    { title: "Samen spelen", year: "2024", desc: "Interactive installation concept." },
    { title: "Grijpmachine", year: "2024", desc: "Tangible physical installation." },
    { title: "Kodak", year: "2024", desc: "Photography and retro media exploration." },
    { title: "Bomby Bird", year: "2024", desc: "Digital game design." },
    { title: "Picknicken met Sophie", year: "2023", desc: "Event documentation." },
    { title: "OSRS Kerst", year: "2023", desc: "Old School RuneScape themed project." },
    { title: "De Grinch sloopt de kerstboom", year: "2023", desc: "Installatie art." },
    { title: "Vechtclub XL", year: "2023", desc: "Design and branding." },
    { title: "Hu Begeleidt", year: "2022", desc: "Educational project." },
    { title: "Dan maar hier!", year: "2022", desc: "Creative expression." }
];

const container = document.getElementById('project-container');

function initPortfolio() {
    projects.forEach((proj, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <img src="assets/home_${index + 1}.jpg" alt="${proj.title}" onerror="this.src='https://via.placeholder.com/300x200'">
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
    document.getElementById('project-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('project-modal').style.display = 'none';
}

function acceptCookies() {
    localStorage.setItem('cookies', 'accepted');
    document.getElementById('cookie-banner').style.display = 'none';
}

function refuseCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
}

// Check cookie consent on load
window.onload = () => {
    if (localStorage.getItem('cookies') === 'accepted') {
        document.getElementById('cookie-banner').style.display = 'none';
    }
    initPortfolio();
};

// Close modal when clicking outside
window.onclick = (event) => {
    if (event.target == document.getElementById('project-modal')) closeModal();
};
