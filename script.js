const projects = [
    { title: "Generation plastic soup", year: "2025", desc: "A creative initiative tackling environmental issues through design.", img: "assets/home_1.jpg" },
    { title: "Street Fresh", year: "2024", desc: "Digital and physical branding project.", img: "assets/home_6.jpg" },
    { title: "Samen spelen", year: "2024", desc: "Social design concept.", img: "assets/home_12.jpg" },
    { title: "Grijpmachine", year: "2024", desc: "Interactive installation.", img: "assets/home_21.jpg" },
    { title: "Kodak", year: "2024", desc: "Photography and media study.", img: "assets/home_24.jpg" },
    { title: "Bomby Bird", year: "2024", desc: "Game design project.", img: "assets/home_27.jpg" },
    { title: "Picknicken met Sophie", year: "2023", desc: "Experience design.", img: "assets/home_33.jpg" },
    { title: "OSRS Kerst", year: "2023", desc: "Themed digital event creation.", img: "assets/home_34.jpg" },
    { title: "De Grinch sloopt de kerstboom", year: "2023", desc: "Visual storytelling.", img: "assets/home_36.jpg" },
    { title: "Vechtclub XL", year: "2023", desc: "Community visual identity.", img: "assets/home_37.jpg" },
    { title: "Hu Begeleidt", year: "2022", desc: "Academic support project.", img: "assets/home_30.jpg" },
    { title: "Dan maar hier!", year: "2022", desc: "Exhibition design.", img: "assets/home_28.jpg" }
];

const container = document.getElementById('project-container');
const modal = document.getElementById('project-modal');

function renderProjects() {
    container.innerHTML = projects.map((p, index) => `
        <div class="project-card" onclick="openModal(${index})">
            <img src="${p.img}" alt="${p.title}" onerror="this.src='https://via.placeholder.com/300'">
            <h3>${p.title}</h3>
            <p>${p.year}</p>
        </div>
    `).join('');
}

function openModal(index) {
    const p = projects[index];
    document.getElementById('modal-title').innerText = p.title;
    document.getElementById('modal-year').innerText = p.year;
    document.getElementById('modal-image').src = p.img;
    document.getElementById('modal-description').innerText = p.desc;
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function acceptCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
    console.log("Cookies accepted");
}

function refuseCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
    console.log("Cookies refused");
}

// Init
window.onclick = (event) => { if (event.target == modal) closeModal(); };
renderProjects();
