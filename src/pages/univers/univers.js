/* ============================================================
   UNIVERS PAGE – Page-specific logic
   ============================================================ */

import './univers.css';
import { services } from '../../data/services.js';
import { createServiceCard } from '../../components/ServiceCard.js';
import { initScrollReveal } from '../../components/ScrollReveal.js';

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

    // Handle clicks for 3D flip and portfolio redirection
    grid.addEventListener('click', (e) => {
      // Check if clicked on the "Voir les photos" button
      if (e.target.closest('.service-card__link')) {
        return; // Let the default anchor click happen
      }

      // Otherwise, toggle the flip state of the card
      const card = e.target.closest('.service-card');
      if (card) {
        card.classList.toggle('is-flipped');
      }
    });

    // Initialize scroll reveal for newly injected elements
    initScrollReveal();
  }
});
