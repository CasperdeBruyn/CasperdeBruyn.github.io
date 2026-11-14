document.addEventListener('DOMContentLoaded', () => {
    // Cookie Banner Logic
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    const refuseBtn = document.getElementById('refuse-cookies');

    if (!localStorage.getItem('cookieChoice')) {
        setTimeout(() => {
            cookieBanner.classList.remove('hidden');
        }, 1000);
    }

    acceptBtn?.addEventListener('click', () => {
        localStorage.setItem('cookieChoice', 'accepted');
        cookieBanner.classList.add('hidden');
    });

    refuseBtn?.addEventListener('click', () => {
        localStorage.setItem('cookieChoice', 'refused');
        cookieBanner.classList.add('hidden');
    });

    // Language Tabs Logic
    const tabBtns = document.querySelectorAll('.tab-btn');
    const langContents = document.querySelectorAll('.lang-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');

            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            langContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `content-${lang}`) {
                    content.classList.add('active');
                }
            });
        });
    });

    // Back to Top Logic
    const backToTopBtn = document.getElementById('back-to-top');
    backToTopBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Project Modal Logic
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close-modal');
    const projectCards = document.querySelectorAll('.project-card');

    const projectDetails = {
        'generation-plastic-soup': {
            title: 'Generation plastic soup',
            year: '2025',
            img: 'assets/home_3.jpg',
            desc: 'An immersive and thought-provoking project highlighting the impact of plastic waste on future generations through tangible storytelling and digital media.'
        },
        'street-fresh': {
            title: 'Street Fresh',
            year: '2024',
            img: 'assets/home_4.jpg',
            desc: 'Exploring urban environments and contemporary culture through branding, visual design, and interactive experiences.'
        },
        'samen-spelen': {
            title: 'Samen spelen',
            year: '2024',
            img: 'assets/home_6.jpg',
            desc: 'A collaborative design project centered around playfulness, connection, and bringing people together in physical and digital spaces.'
        },
        'grijpmachine': {
            title: 'Grijpmachine',
            year: '2024',
            img: 'assets/home_7.jpg',
            desc: 'A physical-digital hybrid installation capturing the classic arcade experience with a modern twist and custom maker electronics.'
        },
        'kodak': {
            title: 'Kodak',
            year: '2024',
            img: 'assets/home_10.jpg',
            desc: 'Celebrating analog aesthetics and photography traditions fused with contemporary digital interaction design.'
        },
        'bomby-bird': {
            title: 'Bomby Bird',
            year: '2024',
            img: 'assets/home_12.jpg',
            desc: 'An entertaining arcade-style game concept developed with passion for quirky characters and engaging mechanics.'
        },
        'picknicken-met-sophie': {
            title: 'Picknicken met Sophie',
            year: '2023',
            img: 'assets/home_18.jpg',
            desc: 'An atmospheric storytelling experience combining spatial design, graphics, and emotional engagement.'
        },
        'osrs-kerst': {
            title: 'OSRS Kerst',
            year: '2023',
            img: 'assets/home_21.jpg',
            desc: 'A festive community-driven project inspired by Old School RuneScape holiday events, complete with custom pixel art and festive cheer.'
        },
        'de-grinch-sloopt-de-kerstboom': {
            title: 'De Grinch sloopt de kerstboom',
            year: '2023',
            img: 'assets/home_24.jpg',
            desc: 'A humorous interactive holiday installation where mischief meets seasonal design.'
        },
        'vechtclub-xl': {
            title: 'Vechtclub XL',
            year: '2023',
            img: 'assets/home_27.jpg',
            desc: 'High-energy branding, event visuals, and promotional design for an exciting combat sports community.'
        },
        'hu-begeleidt': {
            title: 'Hu Begeleidt',
            year: '2022',
            img: 'assets/home_33.jpg',
            desc: 'Educational guidance platform concept and UX design for students at Hogeschool Utrecht.'
        },
        'dan-maar-hier': {
            title: 'Dan maar hier!',
            year: '2022',
            img: 'assets/home_34.jpg',
            desc: 'An exploratory multimedia design project addressing spatial choices and local community hubs.'
        }
    };

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            const data = projectDetails[projectId];
            if (data) {
                modalBody.innerHTML = `
                    <span class="modal-year">${data.year}</span>
                    <h3>${data.title}</h3>
                    <img src="${data.img}" alt="${data.title}">
                    <p>${data.desc}</p>
                `;
                modal.style.display = 'flex';
            }
        });
    });

    closeModal?.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
