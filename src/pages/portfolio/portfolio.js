/* ============================================================
   PORTFOLIO PAGE – Page-specific logic
   ============================================================ */

import './portfolio.css';
import { services } from '../../data/services.js';

document.addEventListener('DOMContentLoaded', () => {
  // Hero animation
  const hero = document.querySelector('.hero--page');
  if (hero) {
    setTimeout(() => hero.classList.add('is-loaded'), 100);
  }

  // Setup filter buttons
  const filterContainer = document.getElementById('filter-buttons');
  if (filterContainer) {
    const categories = [
      { id: 'all', label: 'Tous' },
      ...services.map(s => ({ id: s.id, label: s.title })),
    ];
    filterContainer.innerHTML = categories.map(cat => `
      <button class="filter-btn ${cat.id === 'all' ? 'is-active' : ''}" data-filter="${cat.id}">
        ${cat.label}
      </button>
    `).join('');

    // Filter click handlers
    filterContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;

      // Update active state
      filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      // Filter portfolio items
      const filter = btn.dataset.filter;
      const items = document.querySelectorAll('.portfolio-item');
      items.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = '';
          item.style.animation = 'scaleIn 0.5s var(--ease-smooth) forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  // Setup portfolio grid with curated real content
  const grid = document.getElementById('portfolio-grid');
  if (grid) {
    const portfolioItems = [
      { id: 1,  image: '/assets/images/portfolio/portfolio-01.jpg', category: 'privatisation-monuments', title: 'Soirée privée au Louvre' },
      { id: 2,  image: '/assets/images/portfolio/portfolio-02.jpg', category: 'privatisation-monuments', title: 'Réception sous la Pyramide' },
      { id: 3,  image: '/assets/images/portfolio/portfolio-03.jpg', category: 'privatisation-monuments', title: 'Arc de Triomphe — Vue privilégiée' },
      { id: 4,  image: '/assets/images/portfolio/portfolio-04.jpg', category: 'mixologie',               title: 'Catering haut de gamme' },
      { id: 5,  image: '/assets/images/portfolio/portfolio-05.jpg', category: 'privatisation-monuments', title: 'Péniche — Croisière privée' },
      { id: 6,  image: '/assets/images/portfolio/portfolio-06.jpg', category: 'mixologie',               title: 'Service traiteur raffiné' },
      { id: 7,  image: '/assets/images/portfolio/portfolio-07.jpg', category: 'stewarding',              title: 'Chauffeur privé — Paris by night' },
      { id: 8,  image: '/assets/images/portfolio/portfolio-08.jpg', category: 'planification-evenements', title: 'Livraison florale premium' },
      { id: 9,  image: '/assets/images/portfolio/portfolio-09.jpg', category: 'planification-evenements', title: 'Picnic chic — Tour Eiffel' },
      { id: 10, image: '/assets/images/portfolio/portfolio-10.jpg', category: 'privatisation-monuments', title: 'Arc de Triomphe — Sunset' },
      { id: 11, image: '/assets/images/portfolio/portfolio-11.jpg', category: 'privatisation-monuments', title: 'Événement au Louvre' },
      { id: 12, image: '/assets/images/portfolio/portfolio-12.jpg', category: 'animation',              title: 'Animation gastronomique' },
      { id: 13, image: '/assets/images/portfolio/portfolio-13.jpg', category: 'dog-sitting-baby-sitting', title: 'Dog sitting — Paris' },
      { id: 14, image: '/assets/images/portfolio/portfolio-14.jpg', category: 'mixologie',               title: 'Cocktails sur mesure' },
      { id: 15, image: '/assets/images/portfolio/portfolio-15.jpg', category: 'privatisation-monuments', title: 'Louvre — Ambiance nocturne' },
      { id: 16, image: '/assets/images/portfolio/portfolio-16.jpg', category: 'privatisation-monuments', title: 'Péniche — Quai de Seine' },
      { id: 17, image: '/assets/images/portfolio/portfolio-17.jpg', category: 'mixologie',               title: 'Cocktail signature' },
      { id: 18, image: '/assets/images/portfolio/portfolio-18.jpg', category: 'transfert-bagages',       title: 'Livraison premium' },
      { id: 19, image: '/assets/images/portfolio/portfolio-19.jpg', category: 'privatisation-monuments', title: 'Arc de Triomphe — Night' },
      { id: 20, image: '/assets/images/portfolio/portfolio-20.jpg', category: 'mixologie',               title: 'Réception cocktail' },
      { id: 21, image: '/assets/images/portfolio/portfolio-21.jpg', category: 'planification-evenements', title: 'Picnic luxe — Champ de Mars' },
      { id: 22, image: '/assets/images/portfolio/portfolio-22.jpg', category: 'transfert-bagages',       title: 'Transfert de bagages' },
      { id: 23, image: '/assets/images/portfolio/portfolio-23.jpg', category: 'stewarding',              title: 'Service chauffeur VIP' },
      { id: 24, image: '/assets/images/portfolio/portfolio-24.jpg', category: 'privatisation-monuments', title: 'Privatisation — Le Louvre' },
    ];

    grid.innerHTML = portfolioItems.map(item => `
      <a href="${item.image}" class="portfolio-item glightbox reveal" data-gallery="portfolio" data-category="${item.category}">
        <img src="${item.image}" alt="${item.title}" class="portfolio-item__image" loading="lazy" />
        <div class="portfolio-item__overlay">
          <span class="portfolio-item__watermark">AB</span>
        </div>
      </a>
    `).join('');

    // Initialize GLightbox if available
    if (typeof GLightbox !== 'undefined') {
      GLightbox({ selector: '.glightbox' });
    } else {
      // Dynamic import
      import('glightbox').then(module => {
        const lightbox = module.default({ selector: '.glightbox' });
      }).catch(() => {
        console.log('GLightbox not loaded — lightbox disabled');
      });
    }
  }

  // Check URL params for service filter
  const params = new URLSearchParams(window.location.search);
  const serviceFilter = params.get('service');
  if (serviceFilter && filterContainer) {
    const btn = filterContainer.querySelector(`[data-filter="${serviceFilter}"]`);
    if (btn) btn.click();
  }
});
