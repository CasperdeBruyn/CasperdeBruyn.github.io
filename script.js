const projects = [
    { title: "Generation plastic soup", year: "2025", desc: "Project over duurzaamheid en plastic afval." },
    { title: "Street Fresh", year: "2024", desc: "Urban design project." },
    { title: "Samen spelen", year: "2024", desc: "Interactieve installatie." },
    { title: "Grijpmachine", year: "2024", desc: "Fysieke makers-installatie." },
    { title: "Kodak", year: "2024", desc: "Fotografie gerelateerd design." },
    { title: "Bomby Bird", year: "2024", desc: "Game/Animation project." },
    { title: "Picknicken met Sophie", year: "2023", desc: "Social design concept." },
    { title: "OSRS Kerst", year: "2023", desc: "Old School RuneScape thematiek." },
    { title: "De Grinch sloopt de kerstboom", year: "2023", desc: "Installatie kunst." },
    { title: "Vechtclub XL", year: "2023", desc: "Branding en visuals." },
    { title: "Hu Begeleidt", year: "2022", desc: "Educatief project." },
    { title: "Dan maar hier!", year: "2022", desc: "Persoonlijk creatief project." }
];

function renderProjects() {
    const container = document.getElementById('project-container');
    projects.forEach((proj, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="info">
                <h3>${proj.title}</h3>
                <p>${proj.year}</p>
            </div>
        `;
        card.onclick = () => openModal(proj);
        container.appendChild(card);
    });
}

function openModal(proj) {
    document.getElementById('modal-title').innerText = proj.title;
    document.getElementById('modal-year').innerText = proj.year;
    document.getElementById('modal-description').innerText = proj.desc;
    document.getElementById('project-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('project-modal').style.display = 'none';
}

function acceptCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
    localStorage.setItem('cookies', 'accepted');
}

function refuseCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    if(localStorage.getItem('cookies') === 'accepted') {
        document.getElementById('cookie-banner').style.display = 'none';
    }
});
