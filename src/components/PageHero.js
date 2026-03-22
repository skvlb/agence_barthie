/* ============================================================
   PAGEH HERO COMPONENT
   Initialize hero parallax effect on sub-pages
   ============================================================ */

export function initPageHero() {
  const hero = document.querySelector('.hero--page');
  if (!hero) return;

  // Mark as loaded for CSS animations
  setTimeout(() => hero.classList.add('is-loaded'), 100);

  // Parallax scroll effect on hero background
  const heroImage = hero.querySelector('.hero__image');
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
}
