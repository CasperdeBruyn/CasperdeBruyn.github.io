// Project data uit de scrape
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

function initPortfolio() {
    const container = document.getElementById('project-container');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        // Dynamische content genereren
        card.innerHTML = `
            <img src="assets/placeholder.jpg" alt="${project.title}">
            <div>
                <h3>${project.title}</h3>
                <span>${project.year}</span>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Uitvoeren bij laden
document.addEventListener('DOMContentLoaded', initPortfolio);
