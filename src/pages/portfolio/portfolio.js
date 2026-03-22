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

  // Setup portfolio grid (placeholder items)
  const grid = document.getElementById('portfolio-grid');
  if (grid) {
    // Generate placeholder portfolio items
    const placeholderItems = Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      image: `/assets/images/portfolio/portfolio-${i + 1}.jpg`,
      category: services[i % services.length].id,
      title: `Réalisation ${i + 1}`,
    }));

    grid.innerHTML = placeholderItems.map(item => `
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
