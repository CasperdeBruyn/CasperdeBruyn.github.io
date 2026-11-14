// Project Data
const projects = [
    { title: "Generation plastic soup", year: "2025", img: "assets/home_3.jpg" },
    { title: "Street Fresh", year: "2024", img: "assets/home_27.jpg" },
    { title: "Samen spelen", year: "2024", img: "assets/home_21.jpg" },
    { title: "Grijpmachine", year: "2024", img: "assets/home_24.jpg" },
    { title: "Kodak", year: "2024", img: "assets/home_18.jpg" },
    { title: "Bomby Bird", year: "2024", img: "assets/home_4.jpg" },
    { title: "Picknicken met Sophie", year: "2023", img: "assets/home_6.jpg" },
    { title: "OSRS Kerst", year: "2023", img: "assets/home_33.jpg" },
    { title: "De Grinch sloopt de kerstboom", year: "2023", img: "assets/home_34.jpg" },
    { title: "Vechtclub XL", year: "2023", img: "assets/home_36.jpg" },
    { title: "Hu Begeleidt", year: "2022", img: "assets/home_12.jpg" },
    { title: "Dan maar hier!", year: "2022", img: "assets/home_3.jpg" }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('project-container');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card fade-in';
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.year}</p>
        `;
        container.appendChild(card);
    });

    // Observer for fade-in
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Cookie Check
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookie-banner').style.display = 'block';
    }
});

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookie-banner').style.display = 'none';
}

function hideCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
}
