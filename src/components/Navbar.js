/* ============================================================
   NAVBAR COMPONENT
   ============================================================ */

export function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  // Determine current page for active state
  const currentPath = window.location.pathname;
  const getActiveClass = (path) => {
    if (path === '/' && (currentPath === '/' || currentPath === '/index.html')) return 'is-active';
    if (path !== '/' && currentPath.includes(path)) return 'is-active';
    return '';
  };

  navbar.innerHTML = `
    <div class="navbar__inner">
      <a href="/" class="navbar__logo">
        <img src="/images/logos/logo-ab-outline.png" alt="AB" class="navbar__logo-img" />
        <span class="navbar__logo-text">Agence Barthié</span>
      </a>

      <ul class="navbar__links">
        <li><a href="/" class="navbar__link ${getActiveClass('/')}">Accueil</a></li>
        <li><a href="/agence.html" class="navbar__link ${getActiveClass('agence')}">L'Agence</a></li>
        <li><a href="/univers.html" class="navbar__link ${getActiveClass('univers')}">Nos Univers</a></li>
        <li><a href="/portfolio.html" class="navbar__link ${getActiveClass('portfolio')}">Notre Portfolio</a></li>
        <li><a href="/contact.html" class="navbar__link ${getActiveClass('contact')}">Contact</a></li>
      </ul>

      <div class="navbar__right">
        <div class="navbar__lang">
          <button class="navbar__lang-btn is-active" data-lang="fr">FR</button>
          <span class="navbar__lang-sep">|</span>
          <button class="navbar__lang-btn" data-lang="en">EN</button>
        </div>
        <button class="navbar__burger" id="navbar-burger" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  `;

  // Scroll effect: transparent → solid
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 80) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
    // Hide/show on scroll direction
    if (scrollY > lastScroll && scrollY > 300) {
      navbar.classList.add('is-hidden');
    } else {
      navbar.classList.remove('is-hidden');
    }
    lastScroll = scrollY;
  });

  // Mobile burger menu
  const burger = document.getElementById('navbar-burger');
  const links = navbar.querySelector('.navbar__links');
  if (burger && links) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('is-open');
      links.classList.toggle('is-open');
      document.body.classList.toggle('no-scroll');
    });
  }
}
