/* ============================================================
   CONTACT PAGE – Page-specific logic
   ============================================================ */

import './contact.css';

document.addEventListener('DOMContentLoaded', () => {
  // Hero animation
  const hero = document.querySelector('.hero--page');
  if (hero) {
    setTimeout(() => hero.classList.add('is-loaded'), 100);
  }

  // Form handling
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      
      // TODO: Connect to backend / email service (Formspree, EmailJS, etc.)
      console.log('Form submitted:', data);

      // Show success feedback
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Message envoyé ✓';
      btn.style.background = 'var(--color-primary-light)';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
      }, 3000);
    });
  }
});
