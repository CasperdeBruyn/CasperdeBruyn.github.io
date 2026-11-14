const projects = [
    { title: "Generation plastic soup", year: "2025", img: "home_3.jpg", desc: "A deep dive into plastic pollution and creative solutions." },
    { title: "Street Fresh", year: "2024", img: "home_4.jpg", desc: "Redefining urban spaces with fresh design interventions." },
    { title: "Samen spelen", year: "2024", img: "home_6.jpg", desc: "An interactive project focusing on social connection through play." },
    { title: "Grijpmachine", year: "2024", img: "home_7.jpg", desc: "Building a mechanical claw machine installation." },
    { title: "Kodak", year: "2024", img: "home_9.jpg", desc: "Photography series and creative branding." },
    { title: "Bomby Bird", year: "2024", img: "home_10.jpg", desc: "Digital game development project." },
    { title: "Picknicken met Sophie", year: "2023", img: "home_12.jpg", desc: "Experimental social design project." },
    { title: "OSRS Kerst", year: "2023", img: "home_13.jpg", desc: "Old School RuneScape themed holiday design." },
    { title: "De Grinch sloopt de kerstboom", year: "2023", img: "home_14.jpg", desc: "Creative installation art for the holidays." },
    { title: "Vechtclub XL", year: "2023", img: "home_15.jpg", desc: "Visual branding and event identity." },
    { title: "Hu Begeleidt", year: "2022", img: "home_16.jpg", desc: "Educational design initiative at HU." },
    { title: "Dan maar hier!", year: "2022", img: "home_18.jpg", desc: "Local community driven design project." }
];

function renderProjects() {
    const container = document.getElementById('project-container');
    projects.forEach((proj, index) => {
        const div = document.createElement('div');
        div.className = 'project-card';
        div.onclick = () => openModal(proj);
        div.innerHTML = `
            <img src="${proj.img}" alt="${proj.title}" onerror="this.src='https://via.placeholder.com/300'">
            <h3>${proj.title}</h3>
            <p style="padding: 0 1rem 1rem;">${proj.year}</p>
        `;
        container.appendChild(div);
    });
}

function openModal(proj) {
    document.getElementById('modal-title').innerText = proj.title;
    document.getElementById('modal-year').innerText = proj.year;
    document.getElementById('modal-image').src = proj.img;
    document.getElementById('modal-description').innerText = proj.desc;
    document.getElementById('project-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('project-modal').style.display = 'none';
}

function acceptCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
    console.log("Cookies accepted.");
}

function hideCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target == modal) closeModal();
}

document.addEventListener('DOMContentLoaded', renderProjects);
