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
      // Get all currently intersecting entries and sort them by vertical position
      const intersectingEntries = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      intersectingEntries.forEach((entry, idx) => {
        // Apply a small stagger (50ms) to items appearing at the same time
        // Cap the maximum delay to avoid long waits for large lists
        const delay = Math.min(idx * 0.05, 0.4); 
        entry.target.style.transitionDelay = `${delay}s`;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Only animate once
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}
