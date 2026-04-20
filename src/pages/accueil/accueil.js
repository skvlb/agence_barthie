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

  // Initialize portfolio preview (best 6 shots)
  const portfolioPreview = document.getElementById('portfolio-grid-preview');
  if (portfolioPreview) {
    const previewItems = [
      { image: '/assets/images/portfolio/portfolio-01.jpg', title: 'Soirée privée au Louvre' },
      { image: '/assets/images/portfolio/portfolio-03.jpg', title: 'Arc de Triomphe — Vue privilégiée' },
      { image: '/assets/images/portfolio/portfolio-04.jpg', title: 'Catering haut de gamme' },
      { image: '/assets/images/portfolio/portfolio-05.jpg', title: 'Péniche — Croisière privée' },
      { image: '/assets/images/portfolio/portfolio-09.jpg', title: 'Picnic chic — Tour Eiffel' },
      { image: '/assets/images/portfolio/portfolio-07.jpg', title: 'Chauffeur privé — Paris by night' },
    ];
    portfolioPreview.innerHTML = previewItems.map(item => `
      <a href="/portfolio.html" class="portfolio-item reveal">
        <img src="${item.image}" alt="${item.title}" class="portfolio-item__image" loading="lazy" />
        <div class="portfolio-item__overlay">
          <img src="/images/logos/logo-ab-full-white.png" alt="" class="portfolio-item__watermark-logo" />
        </div>
      </a>
    `).join('');
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
