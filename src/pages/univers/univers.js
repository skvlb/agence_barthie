/* ============================================================
   UNIVERS PAGE – Page-specific logic
   ============================================================ */

import './univers.css';
import { services } from '../../data/services.js';
import { createServiceCard } from '../../components/ServiceCard.js';

document.addEventListener('DOMContentLoaded', () => {
  // Hero animation
  const hero = document.querySelector('.hero--page');
  if (hero) {
    setTimeout(() => hero.classList.add('is-loaded'), 100);
  }

  // Populate services grid (all 9)
  const grid = document.getElementById('services-grid');
  if (grid) {
    grid.innerHTML = services
      .map((service, index) => createServiceCard(service, index))
      .join('');

    // Click on service card → could navigate to portfolio with filter
    grid.addEventListener('click', (e) => {
      const card = e.target.closest('.service-card');
      if (card) {
        const serviceId = card.dataset.service;
        window.location.href = `/portfolio.html?service=${serviceId}`;
      }
    });
  }
});
