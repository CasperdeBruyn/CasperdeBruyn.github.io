const projects = [
    { title: "Generation plastic soup", year: "2025", img: "assets/home_3.jpg" },
    { title: "Street Fresh", year: "2024", img: "assets/home_4.jpg" },
    { title: "Samen spelen", year: "2024", img: "assets/home_6.jpg" },
    { title: "Grijpmachine", year: "2024", img: "assets/home_7.jpg" },
    { title: "Kodak", year: "2024", img: "assets/home_8.jpg" },
    { title: "Bomby Bird", year: "2024", img: "assets/home_9.jpg" },
    { title: "Picknicken met Sophie", year: "2023", img: "assets/home_10.jpg" },
    { title: "OSRS Kerst", year: "2023", img: "assets/home_12.jpg" },
    { title: "De Grinch sloopt de kerstboom", year: "2023", img: "assets/home_13.jpg" },
    { title: "Vechtclub XL", year: "2023", img: "assets/home_14.jpg" },
    { title: "Hu Begeleidt", year: "2022", img: "assets/home_15.jpg" },
    { title: "Dan maar hier!", year: "2022", img: "assets/home_16.jpg" }
];

function initProjects() {
    const container = document.getElementById('project-container');
    projects.forEach((proj, index) => {
        const card = document.createElement('div');
        card.className = 'project-card fade-in';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <img src="${proj.img}" alt="${proj.title}" onerror="this.src='https://via.placeholder.com/400'">
            <div class="project-info">
                <h3>${proj.title}</h3>
                <p>${proj.year}</p>
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

// Check cookies on load
document.addEventListener('DOMContentLoaded', () => {
    initProjects();
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        document.getElementById('cookie-banner').style.display = 'none';
    }
    
    // Intersection Observer voor fade-in effecten
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
