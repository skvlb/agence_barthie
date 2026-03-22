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
      <div class="footer__top">
        <div class="footer__brand">
          <img src="/images/logos/logo-ab-full-white.png" alt="Agence Barthié" class="footer__logo-img" />
        </div>
        <nav class="footer__nav">
          <a href="/" class="footer__link">Accueil</a>
          <a href="/agence.html" class="footer__link">L'Agence</a>
          <a href="/univers.html" class="footer__link">Nos Univers</a>
          <a href="/portfolio.html" class="footer__link">Notre Portfolio</a>
          <a href="/contact.html" class="footer__link">Contact</a>
        </nav>
        <div class="footer__contact">
          <a href="mailto:contact@agence-barthie.fr" class="footer__link">contact@agence-barthie.fr</a>
          <a href="https://wa.me/33636208128" target="_blank" rel="noopener" class="footer__link">+33 6 36 20 81 28</a>
          <a href="https://instagram.com/agence_barthie_" target="_blank" rel="noopener" class="footer__link">@agence_barthie_</a>
        </div>
      </div>
      <div class="footer__bottom">
        <p class="footer__page-name">${pageName}</p>
        <p class="footer__copyright">&copy; ${new Date().getFullYear()} Agence Barthié. Tous droits réservés.</p>
        <a href="#" target="_blank" rel="noopener" class="footer__credit">Site par K&V Studio</a>
      </div>
    </div>
  `;
}
