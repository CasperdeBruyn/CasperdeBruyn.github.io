/* -----------------------------------------------------------------
   Existing code (kept untouched) – see the original block you posted.
   ----------------------------------------------------------------- */

/* ---------- 1️⃣  Project Data (kept identical to Coder A’s structure) ---------- */
const PROJECT_DATA = {
  'de-kerstboom': {
    title: 'De Kerstboom',
    category: 'PROTOTYPING',
    year: '2023',
    description: 'Een interactieve kerstboom met een lichtinstallatie.',
    images: ['assets/images/de-kerstboom_01_hero.jpg']
  },
  'de-kerstboom-2': {
    title: 'De Kerstboom 2',
    category: 'PROTOTYPING',
    year: '2023',
    description: 'Een tweede versie van de interactieve kerstboom.',
    images: ['assets/images/de-kerstboom-2_01_hero.jpg']
  },
  'de-kerstboom-3': {
    title: 'De Kerstboom 3',
    category: 'PROTOTYPING',
    year: '2023',
    description: 'Een derde versie van de interactieve kerstboom.',
    images: ['assets/images/de-kerstboom-3_01_hero.jpg']
  },
  'de-kerstboom-4': {
    title: 'De Kerstboom 4',
    category: 'PROTOTYPING',
    year: '2023',
    description: 'Een vierde versie van de interactieve kerstboom.',
    images: ['assets/images/de-kerstboom-4_01_hero.jpg']
  }
  /* Add more projects here as needed */
};

/* ---------- 2️⃣  Helper: Build modal content ---------- */
function createModalContent(project) {
  const modal = document.getElementById('project-modal');
  const content = modal.querySelector('.modal-content');

  // Clear any previous content
  content.innerHTML = '';

  /* Close button */
  const closeBtn = document.createElement('button');
  closeBtn.className = 'modal-close';
  closeBtn.setAttribute('aria-label', 'Close modal');
  closeBtn.innerHTML = '&times;';
  content.appendChild(closeBtn);

  /* Header */
  const header = document.createElement('div');
  header.className = 'modal-header';
  const title = document.createElement('h2');
  title.textContent = project.title;
  const meta = document.createElement('p');
  meta.textContent = `${project.category} • ${project.year}`;
  header.appendChild(title);
  header.appendChild(meta);
  content.appendChild(header);

  /* Description */
  const desc = document.createElement('p');
  desc.textContent = project.description;
  content.appendChild(desc);

  /* Gallery */
  const gallery = document.createElement('div');
  gallery.className = 'modal-gallery';
  project.images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `${project.title} image`;
    gallery.appendChild(img);
  });
  content.appendChild(gallery);

  /* -----------------------------------------------------------------
     2️⃣‑a  Re‑apply CSS filter to newly added images (in case the
           browser doesn’t inherit the global img filter immediately)
     ----------------------------------------------------------------- */
  // Force a re‑flow so the CSS filter is applied instantly
  requestAnimationFrame(() => {
    const newlyAdded = gallery.querySelectorAll('img');
    newlyAdded.forEach(i => i.style.filter = getComputedStyle(i).filter);
  });
}

/* ---------- 3️⃣  Modal open/close logic ---------- */
function openModal(projectId) {
  const project = PROJECT_DATA[projectId];
  if (!project) return;

  createModalContent(project);
  const modal = document.getElementById('project-modal');
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
}

/* ---------- 4️⃣  Event listeners ---------- */
document.addEventListener('DOMContentLoaded', () => {
  /* Attach click/keypress to each project card */
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    const projectId = card.dataset.projectId;
    card.addEventListener('click', () => openModal(projectId));
    card.addEventListener('keypress', e => {
      if (e.key === 'Enter') openModal(projectId);
    });
  });

  /* Close modal when clicking the close button or outside the content */
  const modal = document.getElementById('project-modal');
  modal.addEventListener('click', e => {
    if (e.target.classList.contains('modal-close') ||
        e.target === modal) {
      closeModal();
    }
  });

  /* ESC key closes modal */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
});

/* -----------------------------------------------------------------
   END OF script.js
   ----------------------------------------------------------------- */
