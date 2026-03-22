/* ============================================================
   AGENCE PAGE – Page-specific logic
   ============================================================ */

import './agence.css';

document.addEventListener('DOMContentLoaded', () => {
  // Hero parallax effect
  const hero = document.querySelector('.hero--page');
  if (hero) {
    setTimeout(() => hero.classList.add('is-loaded'), 100);
  }

  // Simple parallax for hero image on scroll
  const heroImage = document.querySelector('.hero__image');
  if (heroImage) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const heroHeight = hero.offsetHeight;
      if (scrollY < heroHeight) {
        const parallaxOffset = scrollY * 0.3;
        heroImage.style.transform = `scale(1.05) translateY(${parallaxOffset}px)`;
      }
    });
  }
});
