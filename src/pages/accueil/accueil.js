/* ============================================================
   ACCUEIL PAGE – Page-specific logic
   ============================================================ */

import './accueil.css';
import { services } from '../../data/services.js';
import { createServiceCard } from '../../components/ServiceCard.js';
import { initProcessTimeline } from '../../components/ProcessTimeline.js';
import { initClientMarquee } from '../../components/ClientMarquee.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize services carousel (show first 4 on homepage)
  const carousel = document.getElementById('services-carousel');
  if (carousel) {
    carousel.innerHTML = services
      .slice(0, 4)
      .map((service, index) => createServiceCard(service, index))
      .join('');
  }

  // Initialize process timeline
  initProcessTimeline();

  // Initialize client marquee
  initClientMarquee();

  // Hero page loaded class for animations
  const hero = document.getElementById('hero');
  if (hero) {
    setTimeout(() => hero.classList.add('is-loaded'), 100);
  }
});
