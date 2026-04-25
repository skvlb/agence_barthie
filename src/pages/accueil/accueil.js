/* ============================================================
   ACCUEIL PAGE – Page-specific logic
   ============================================================ */

import './accueil.css';
import { services } from '../../data/services.js';
import { createServiceCard } from '../../components/ServiceCard.js';
import { initProcessTimeline } from '../../components/ProcessTimeline.js';
import { initClientMarquee } from '../../components/ClientMarquee.js';
import { initScrollReveal } from '../../components/ScrollReveal.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize services carousel (show ALL 9 on homepage as requested)
  const carousel = document.getElementById('services-carousel');
  if (carousel) {
    carousel.innerHTML = services
      .map((service, index) => createServiceCard(service, index))
      .join('');

    // Handle clicks for 3D flip and portfolio redirection
    carousel.addEventListener('click', (e) => {
      if (e.target.closest('.service-card__link')) {
        return;
      }
      const card = e.target.closest('.service-card');
      if (card) {
        card.classList.toggle('is-flipped');
      }
    });

    // Auto-scroll logic
    let scrollInterval;
    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        // If reached the end, loop back to start
        if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10) {
          carousel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll by one card width + gap
          const card = carousel.querySelector('.service-card');
          if (card) {
            const cardWidth = card.offsetWidth;
            const gap = parseInt(window.getComputedStyle(carousel).gap) || 32;
            carousel.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
          }
        }
      }, 3500);
    };

    startAutoScroll();
    
    // Pause on hover or touch to allow the user to read or flip the cards
    carousel.addEventListener('mouseenter', () => clearInterval(scrollInterval));
    carousel.addEventListener('mouseleave', startAutoScroll);
    carousel.addEventListener('touchstart', () => clearInterval(scrollInterval), {passive: true});
  }

  // Initialize portfolio preview
  const portfolioPreview = document.getElementById('portfolio-grid-preview');
  if (portfolioPreview) {
    const previewItems = [
      { image: '/assets/images/portfolio/portfolio-01.jpg', category: 'privatisation' },
      { image: '/assets/images/portfolio/portfolio-03.jpg', category: 'privatisation' },
      { image: '/assets/images/portfolio/portfolio-04.jpg', category: 'catering' },
      { image: '/assets/images/portfolio/portfolio-05.jpg', category: 'privatisation' },
      { image: '/assets/images/portfolio/portfolio-09.jpg', category: 'picnic' },
      { image: '/assets/images/portfolio/portfolio-07.jpg', category: 'chauffeurs' },
    ];
    portfolioPreview.innerHTML = previewItems.map(item => `
      <a href="/portfolio.html?category=${item.category}" class="portfolio-item reveal">
        <img src="${item.image}" alt="Portfolio preview" class="portfolio-item__image" loading="lazy" />
        <div class="portfolio-item__overlay">
          <img src="/images/logos/logo-ab-full-white.png" alt="" class="portfolio-item__watermark-logo" />
        </div>
      </a>
    `).join('');
  }

  // Initialize process timeline
  initProcessTimeline();
  
  // Re-run scroll reveal to catch the dynamically injected timeline steps
  setTimeout(() => initScrollReveal(), 100);

  // Initialize client marquee
  initClientMarquee();

  // Hero page loaded class for animations
  const hero = document.getElementById('hero');
  if (hero) {
    setTimeout(() => hero.classList.add('is-loaded'), 100);
  }
});
