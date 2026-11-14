// Project data based on scrape
const projects = [
    { title: "Generation plastic soup", year: "2025", img: "home_1.jpg" },
    { title: "Street Fresh", year: "2024", img: "home_2.jpg" },
    { title: "Samen spelen", year: "2024", img: "home_3.jpg" },
    { title: "Grijpmachine", year: "2024", img: "home_4.jpg" },
    { title: "Kodak", year: "2024", img: "home_5.jpg" },
    { title: "Bomby Bird", year: "2024", img: "home_6.jpg" },
    { title: "Picknicken met Sophie", year: "2023", img: "home_7.jpg" },
    { title: "OSRS Kerst", year: "2023", img: "home_8.jpg" },
    { title: "De Grinch sloopt de kerstboom", year: "2023", img: "home_9.jpg" },
    { title: "Vechtclub XL", year: "2023", img: "home_10.jpg" },
    { title: "Hu Begeleidt", year: "2022", img: "home_11.jpg" },
    { title: "Dan maar hier!", year: "2022", img: "home_12.jpg" }
];

// Load projects
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('project-container');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card fade-in';
        card.innerHTML = `
            <img src="assets/${project.img}" alt="${project.title}" class="project-img" onerror="this.src='https://via.placeholder.com/300x200?text=Casper+Project'">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.year}</p>
            </div>
        `;
        container.appendChild(card);
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});

// Cookie logic
function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookie-banner').style.display = 'none';
}

function hideCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
}

// Check cookies on load
if (localStorage.getItem('cookiesAccepted') === 'true') {
    document.getElementById('cookie-banner').style.display = 'none';
}
