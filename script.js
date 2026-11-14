// Cookie Banner Logic
const cookieBanner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('accept-cookies');
const refuseBtn = document.getElementById('refuse-cookies');

if (localStorage.getItem('cookiesAccepted')) {
    cookieBanner.style.display = 'none';
}

acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBanner.style.display = 'none';
});

refuseBtn.addEventListener('click', () => {
    cookieBanner.style.display = 'none';
});

// Tab Switcher Logic
const tabBtns = document.querySelectorAll('.tab-btn');
const langContents = document.querySelectorAll('.lang-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        langContents.forEach(c => c.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(`content-${btn.dataset.lang}`).classList.add('active');
    });
});

// Projects Data
const projects = [
    { title: "Generation plastic soup", year: "2025" },
    { title: "Street Fresh", year: "2024" },
    { title: "Samen spelen", year: "2024" },
    { title: "Grijpmachine", year: "2024" },
    { title: "Kodak", year: "2024" },
    { title: "Bomby Bird", year: "2024" },
    { title: "Picknicken met Sophie", year: "2023" },
    { title: "OSRS Kerst", year: "2023" },
    { title: "De Grinch sloopt de kerstboom", year: "2023" },
    { title: "Vechtclub XL", year: "2023" },
    { title: "Hu Begeleidt", year: "2022" },
    { title: "Dan maar hier!", year: "2022" }
];

const grid = document.getElementById('projects-grid');

projects.forEach((proj, index) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <img src="assets/home_${index + 1}.jpg" alt="${proj.title}">
        <div class="project-info">
            <h3>${proj.title}</h3>
            <p>${proj.year}</p>
        </div>
    `;
    grid.appendChild(card);
});
