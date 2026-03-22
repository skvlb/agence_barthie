/* ============================================================
   FOOTER COMPONENT
   ============================================================ */

export function initFooter() {
  const footer = document.getElementById('footer');
  if (!footer) return;

  // Get current page name for the header
  const currentPath = window.location.pathname;
  let pageName = 'Accueil';
  if (currentPath.includes('agence')) pageName = "L'Agence";
  else if (currentPath.includes('univers')) pageName = 'Nos Univers';
  else if (currentPath.includes('portfolio')) pageName = 'Notre Portfolio';
  else if (currentPath.includes('contact')) pageName = 'Contact';

  footer.innerHTML = `
    <div class="footer__inner">
      <div class="footer__brand">
        <h2 class="footer__brand-title">AGENCE BARTHIÉ</h2>
        <p class="footer__brand-subtitle">EVENT & CONCIERGERIE</p>
      </div>
      
      <nav class="footer__nav">
        <a href="/" class="footer__link">Accueil</a>
        <a href="/agence.html" class="footer__link">L'Agence</a>
        <a href="/univers.html" class="footer__link">Nos Univers</a>
        <a href="/portfolio.html" class="footer__link">Notre Portfolio</a>
        <a href="/contact.html" class="footer__link">Contact</a>
        <a href="https://instagram.com/agence_barthie_" target="_blank" rel="noopener" class="footer__link">Instagram</a>
      </nav>

      <div class="footer__bottom">
        <p class="footer__copyright">&copy; ${new Date().getFullYear()} AGENCE BARTHIÉ &mdash; TOUS DROITS RÉSERVÉS</p>
        <span class="footer__sep">|</span>
        <a href="#" target="_blank" rel="noopener" class="footer__credit">Site par K&V Studio</a>
      </div>
    </div>
  `;
}
