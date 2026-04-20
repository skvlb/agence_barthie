/* ============================================================
   NAVBAR COMPONENT
   ============================================================ */

import { getLang, setLang } from '../utils/i18n.js';

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
        <li><a href="/" class="navbar__link ${getActiveClass('/')}" data-i18n="nav.accueil">Accueil</a></li>
        <li><a href="/agence.html" class="navbar__link ${getActiveClass('agence')}" data-i18n="nav.agence">L'Agence</a></li>
        <li><a href="/univers.html" class="navbar__link ${getActiveClass('univers')}" data-i18n="nav.univers">Nos Univers</a></li>
        <li><a href="/portfolio.html" class="navbar__link ${getActiveClass('portfolio')}" data-i18n="nav.portfolio">Notre Portfolio</a></li>
        <li><a href="/contact.html" class="navbar__link ${getActiveClass('contact')}" data-i18n="nav.contact">Contact</a></li>
      </ul>

      <div class="navbar__right">
        <div class="navbar__lang">
          <button class="navbar__lang-btn ${getLang() === 'fr' ? 'is-active' : ''}" data-lang="fr">FR</button>
          <span class="navbar__lang-sep">|</span>
          <button class="navbar__lang-btn ${getLang() === 'en' ? 'is-active' : ''}" data-lang="en">EN</button>
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

  // Language switcher
  const langBtns = navbar.querySelectorAll('.navbar__lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = e.target.dataset.lang;
      if (lang !== getLang()) {
        setLang(lang);
        langBtns.forEach(b => b.classList.remove('is-active'));
        e.target.classList.add('is-active');
        
        // Force re-render of components that use JS variables for titles (like process timeline and services)
        // Since it's a static site, the simplest robust way to update JS-rendered components is reloading the page
        // But to keep it smooth for static text, we've implemented translatePage.
        // For JS data (services, portfolio filters), we trigger a reload to ensure a perfect state.
        window.location.reload();
      }
    });
  });
}
