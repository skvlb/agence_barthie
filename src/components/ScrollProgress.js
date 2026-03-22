/* ============================================================
   SCROLL PROGRESS COMPONENT
   Circle indicator bottom-right + back to top
   ============================================================ */

export function initScrollProgress() {
  const container = document.getElementById('scroll-progress');
  if (!container) return;

  container.innerHTML = `
    <svg class="scroll-progress__svg" viewBox="0 0 48 48">
      <circle class="scroll-progress__track" cx="24" cy="24" r="20" />
      <circle class="scroll-progress__bar" cx="24" cy="24" r="20" />
    </svg>
    <span class="scroll-progress__arrow">↑</span>
  `;

  const bar = container.querySelector('.scroll-progress__bar');
  const circumference = 2 * Math.PI * 20;
  bar.style.strokeDasharray = circumference;

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;
    const offset = circumference * (1 - progress);
    bar.style.strokeDashoffset = offset;

    // Show/hide
    if (scrollTop > 200) {
      container.classList.add('is-visible');
    } else {
      container.classList.remove('is-visible');
    }
  }

  window.addEventListener('scroll', updateProgress);
  updateProgress();

  // Back to top on click
  container.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
