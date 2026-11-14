const projects = [
    { title: "Generation plastic soup", year: "2025", img: "home_3.jpg" },
    { title: "Street Fresh", year: "2024", img: "home_4.jpg" },
    { title: "Samen spelen", year: "2024", img: "home_6.jpg" },
    { title: "Grijpmachine", year: "2024", img: "home_7.jpg" },
    { title: "Kodak", year: "2024", img: "home_8.jpg" },
    { title: "Bomby Bird", year: "2024", img: "home_9.jpg" },
    { title: "Picknicken met Sophie", year: "2023", img: "home_10.jpg" },
    { title: "OSRS Kerst", year: "2023", img: "home_12.jpg" },
    { title: "De Grinch sloopt de kerstboom", year: "2023", img: "home_13.jpg" },
    { title: "Vechtclub XL", year: "2023", img: "home_15.jpg" },
    { title: "Hu Begeleidt", year: "2022", img: "home_16.jpg" },
    { title: "Dan maar hier!", year: "2022", img: "home_17.jpg" }
];

document.addEventListener('DOMContentLoaded', () => {
    // Render Projects
    const grid = document.getElementById('projects-grid');
    projects.forEach(p => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <img src="${p.img}" alt="${p.title}" onerror="this.src='https://via.placeholder.com/300x200'">
            <div class="project-info">
                <h3>${p.title}</h3>
                <span>${p.year}</span>
            </div>
        `;
        grid.appendChild(card);
    });

    // Language Switcher
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.lang-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const lang = tab.dataset.lang;
            contents.forEach(c => c.classList.remove('active'));
            document.getElementById(`content-${lang}`).classList.add('active');
        });
    });

    // Cookie Banner
    const banner = document.getElementById('cookie-banner');
    if (!localStorage.getItem('cookiesAccepted')) {
        banner.classList.remove('hidden');
    }

    document.getElementById('accept-cookies').addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        banner.classList.add('hidden');
    });

    document.getElementById('refuse-cookies').addEventListener('click', () => {
        banner.classList.add('hidden');
    });

    // Scroll to Top
    document.getElementById('back-to-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});
