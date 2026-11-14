// Project Data
const projects = [
    { title: "Generation plastic soup", year: "2025", img: "home_3.jpg" },
    { title: "Street Fresh", year: "2024", img: "home_4.jpg" },
    { title: "Samen spelen", year: "2024", img: "home_6.jpg" },
    { title: "Grijpmachine", year: "2024", img: "home_12.jpg" },
    { title: "Kodak", year: "2024", img: "home_18.jpg" },
    { title: "Bomby Bird", year: "2024", img: "home_21.jpg" },
    { title: "Picknicken met Sophie", year: "2023", img: "home_24.jpg" },
    { title: "OSRS Kerst", year: "2023", img: "home_27.jpg" },
    { title: "De Grinch sloopt de kerstboom", year: "2023", img: "home_33.jpg" },
    { title: "Vechtclub XL", year: "2023", img: "home_34.jpg" },
    { title: "Hu Begeleidt", year: "2022", img: "home_36.jpg" },
    { title: "Dan maar hier!", year: "2022", img: "home_37.jpg" }
];

// Initialize Portfolio
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('project-container');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card fade-in';
        card.innerHTML = `
            <h3>${project.title}</h3>
            <span>${project.year}</span>
        `;
        container.appendChild(card);
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});

// Cookie Logic
function acceptCookies() {
    console.log("Cookies accepted");
    document.getElementById('cookie-banner').style.display = 'none';
}

function hideCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
}
