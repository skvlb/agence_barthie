/* ============================================================
   SCROLL REVEAL COMPONENT
   Adds .is-visible class to .reveal elements when in viewport
   Uses IntersectionObserver for performance
   ============================================================ */

export function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Stagger effect for siblings
          const parent = entry.target.parentElement;
          const siblings = parent ? parent.querySelectorAll('.reveal') : [];
          const index = Array.from(siblings).indexOf(entry.target);
          const delay = index * 0.1; // 100ms stagger

          entry.target.style.transitionDelay = `${delay}s`;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}
