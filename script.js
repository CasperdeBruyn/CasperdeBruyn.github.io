document.addEventListener('DOMContentLoaded', () => {
  const projectCards = document.querySelectorAll('[data-project]');
  const modal = document.querySelector('.project-modal, .modal-overlay');
  const modalWindow = modal?.querySelector('.modal-content, .modal-window') || modal;
  const closeBtn = modal?.querySelector('[data-modal-close], .modal-close');
  const titleEl = modal?.querySelector('[data-modal-title]');
  const textEl = modal?.querySelector('[data-modal-text]');
  const galleryEl = modal?.querySelector('[data-modal-gallery]');
  const cursor = document.querySelector('.cursor-trail');

  const projectData = {
    'school-projecten': {
      title: 'Dan maar hier!',
      text: 'Extra toelichting van dit project komt hier te staan, samen met de overige beelden uit assets/images/.',
      images: [
        'assets/images/school-projecten_01_hero.jpg',
        'assets/images/school-projecten_06_item06.jpg'
      ]
    },
    'generation-plastic-soup': {
      title: 'Generation Plastic Soup',
      text: 'Projecttekst voor Generation Plastic Soup.',
      images: [
        'assets/images/home_pos01_link-naar-generation-plastic-soup.jpg'
      ]
    },
    'grijpmachine': {
      title: 'Grijpmachine',
      text: 'Projecttekst voor Grijpmachine.',
      images: [
        'assets/images/grijpmachine_11_item11.jpg'
      ]
    },
    'kodak': {
      title: 'Kodak',
      text: 'Projecttekst voor Kodak.',
      images: []
    }
  };

  let lastFocusedCard = null;

  function openModal(projectKey) {
    const data = projectData[projectKey];
    if (!modal || !data) return;

    lastFocusedCard = document.activeElement;

    if (titleEl) titleEl.textContent = data.title;
    if (textEl) textEl.textContent = data.text;

    if (galleryEl) {
      galleryEl.innerHTML = '';
      data.images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = data.title;
        galleryEl.appendChild(img);
      });
    }

    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    if (lastFocusedCard) lastFocusedCard.focus();
  }

  projectCards.forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.project));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card.dataset.project);
      }
    });
  });

  closeBtn?.addEventListener('click', closeModal);

  modal?.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal?.classList.contains('is-open')) {
      closeModal();
    }
  });

  if (cursor) {
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x, ty = y;

    const animate = () => {
      tx += (x - tx) * 0.16;
      ty += (y - ty) * 0.16;
      cursor.style.left = `${tx}px`;
      cursor.style.top = `${ty}px`;
      requestAnimationFrame(animate);
    };

    document.addEventListener('pointermove', (e) => {
      x = e.clientX;
      y = e.clientY;
    });

    animate();
  }
});
