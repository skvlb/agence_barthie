/* ============================================================
   PORTFOLIO PAGE – Page-specific logic
   Catégories = noms des dossiers du contenu de Corentin
   Toutes les photos de chaque dossier sont incluses
   ============================================================ */

import './portfolio.css';
import { t, tObj } from '../../utils/i18n.js';

/* ----------------------------------------------------------
   Catégories — noms des dossiers source
   ---------------------------------------------------------- */
const portfolioCategories = [
  { id: 'all',                  label: 'Tous' },
  { id: 'privatisation',        label: 'Privatisation de Lieux' },
  { id: 'catering',             label: 'Catering' },
  { id: 'chauffeurs',           label: 'Chauffeurs Privé' },
  { id: 'dog-sitting',          label: 'Dog Sitting' },
  { id: 'livraison',            label: 'Livraison' },
  { id: 'picnic',               label: 'Picnic' },
  { id: 'bagages',              label: 'Transfert de Bagages' },
  { id: 'decoration',           label: 'Décoration' },
  { id: 'accompagnement',       label: 'Accompagnement Client' },
];

/* ----------------------------------------------------------
   Toutes les photos — classées par dossier source
   ---------------------------------------------------------- */
const portfolioItems = [
  // ── Privatisation de Lieux (19 photos) ────────────────────
  // Louvre (12 — hors IMG_COR/COR1 = hero + portrait)
  { id: 1,  image: '/assets/images/portfolio/portfolio-01.jpg', category: 'privatisation', title: 'Soirée privée au Louvre' },
  { id: 2,  image: '/assets/images/portfolio/portfolio-02.jpg', category: 'privatisation', title: 'Réception sous la Pyramide' },
  { id: 11, image: '/assets/images/portfolio/portfolio-11.jpg', category: 'privatisation', title: 'Événement au Louvre' },
  { id: 15, image: '/assets/images/portfolio/portfolio-15.jpg', category: 'privatisation', title: 'Louvre — Ambiance nocturne' },
  { id: 24, image: '/assets/images/portfolio/portfolio-24.jpg', category: 'privatisation', title: 'Le Louvre — Réception' },
  { id: 43, image: '/assets/images/portfolio/portfolio-43.jpg', category: 'privatisation', title: 'Louvre — Salle de réception' },
  { id: 44, image: '/assets/images/portfolio/portfolio-44.jpg', category: 'privatisation', title: 'Louvre — Mise en lumière' },
  { id: 45, image: '/assets/images/portfolio/portfolio-45.jpg', category: 'privatisation', title: 'Louvre — Vue intérieure' },
  { id: 84, image: '/assets/images/portfolio/portfolio-84.jpg', category: 'privatisation', title: 'Louvre — Galerie' },
  { id: 85, image: '/assets/images/portfolio/portfolio-85.jpg', category: 'privatisation', title: 'Louvre — Perspective' },
  { id: 86, image: '/assets/images/portfolio/portfolio-86.jpg', category: 'privatisation', title: 'Louvre — Grande salle' },
  { id: 87, image: '/assets/images/portfolio/portfolio-87.jpg', category: 'privatisation', title: 'Louvre — Éclairage' },
  // Arc de Triomphe (4)
  { id: 3,  image: '/assets/images/portfolio/portfolio-03.jpg', category: 'privatisation', title: 'Arc de Triomphe — Vue privilégiée' },
  { id: 10, image: '/assets/images/portfolio/portfolio-10.jpg', category: 'privatisation', title: 'Arc de Triomphe — Sunset' },
  { id: 19, image: '/assets/images/portfolio/portfolio-19.jpg', category: 'privatisation', title: 'Arc de Triomphe — Nuit' },
  { id: 46, image: '/assets/images/portfolio/portfolio-46.jpg', category: 'privatisation', title: 'Arc de Triomphe — Panorama' },
  // Péniche (3)
  { id: 5,  image: '/assets/images/portfolio/portfolio-05.jpg', category: 'privatisation', title: 'Péniche — Croisière privée' },
  { id: 16, image: '/assets/images/portfolio/portfolio-16.jpg', category: 'privatisation', title: 'Péniche — Quai de Seine' },
  { id: 47, image: '/assets/images/portfolio/portfolio-47.jpg', category: 'privatisation', title: 'Péniche — Soirée sur l\'eau' },
  // Théâtre (4)
  { id: 25, image: '/assets/images/portfolio/portfolio-25.jpg', category: 'privatisation', title: 'Théâtre — Privatisation' },
  { id: 26, image: '/assets/images/portfolio/portfolio-26.jpg', category: 'privatisation', title: 'Théâtre — Salle privée' },
  { id: 27, image: '/assets/images/portfolio/portfolio-27.jpg', category: 'privatisation', title: 'Théâtre — Ambiance' },
  { id: 28, image: '/assets/images/portfolio/portfolio-28.jpg', category: 'privatisation', title: 'Théâtre — Événement' },

  // ── Catering (30 photos — toutes) ────────────────────────
  { id: 4,  image: '/assets/images/portfolio/portfolio-04.jpg', category: 'catering', title: 'Catering haut de gamme' },
  { id: 6,  image: '/assets/images/portfolio/portfolio-06.jpg', category: 'catering', title: 'Service traiteur raffiné' },
  { id: 12, image: '/assets/images/portfolio/portfolio-12.jpg', category: 'catering', title: 'Gastronomie événementielle' },
  { id: 14, image: '/assets/images/portfolio/portfolio-14.jpg', category: 'catering', title: 'Cocktails sur mesure' },
  { id: 17, image: '/assets/images/portfolio/portfolio-17.jpg', category: 'catering', title: 'Cocktail signature' },
  { id: 20, image: '/assets/images/portfolio/portfolio-20.jpg', category: 'catering', title: 'Réception cocktail' },
  { id: 40, image: '/assets/images/portfolio/portfolio-40.jpg', category: 'catering', title: 'Catering — Détails culinaires' },
  { id: 41, image: '/assets/images/portfolio/portfolio-41.jpg', category: 'catering', title: 'Catering — Service bar' },
  { id: 42, image: '/assets/images/portfolio/portfolio-42.jpg', category: 'catering', title: 'Catering — Présentation' },
  { id: 51, image: '/assets/images/portfolio/portfolio-51.jpg', category: 'catering', title: 'Catering — Buffet' },
  { id: 53, image: '/assets/images/portfolio/portfolio-53.jpg', category: 'catering', title: 'Catering — Sélection' },
  { id: 54, image: '/assets/images/portfolio/portfolio-54.jpg', category: 'catering', title: 'Catering — Ambiance' },
  { id: 55, image: '/assets/images/portfolio/portfolio-55.jpg', category: 'catering', title: 'Catering — Plats' },
  { id: 56, image: '/assets/images/portfolio/portfolio-56.jpg', category: 'catering', title: 'Catering — Dressage' },
  { id: 57, image: '/assets/images/portfolio/portfolio-57.jpg', category: 'catering', title: 'Catering — Service' },
  { id: 58, image: '/assets/images/portfolio/portfolio-58.jpg', category: 'catering', title: 'Catering — Décor de table' },
  { id: 59, image: '/assets/images/portfolio/portfolio-59.jpg', category: 'catering', title: 'Catering — Réception' },
  { id: 60, image: '/assets/images/portfolio/portfolio-60.jpg', category: 'catering', title: 'Catering — Assiettes' },
  { id: 61, image: '/assets/images/portfolio/portfolio-61.jpg', category: 'catering', title: 'Catering — Apéritif' },
  { id: 62, image: '/assets/images/portfolio/portfolio-62.jpg', category: 'catering', title: 'Catering — Cocktail' },
  { id: 63, image: '/assets/images/portfolio/portfolio-63.jpg', category: 'catering', title: 'Catering — Menu' },
  { id: 64, image: '/assets/images/portfolio/portfolio-64.jpg', category: 'catering', title: 'Catering — Convivialité' },
  { id: 65, image: '/assets/images/portfolio/portfolio-65.jpg', category: 'catering', title: 'Catering — Raffinement' },
  { id: 66, image: '/assets/images/portfolio/portfolio-66.jpg', category: 'catering', title: 'Catering — Art de la table' },
  { id: 67, image: '/assets/images/portfolio/portfolio-67.jpg', category: 'catering', title: 'Catering — Élégance' },
  { id: 68, image: '/assets/images/portfolio/portfolio-68.jpg', category: 'catering', title: 'Catering — Moment' },
  { id: 69, image: '/assets/images/portfolio/portfolio-69.jpg', category: 'catering', title: 'Catering — Finesse' },
  { id: 70, image: '/assets/images/portfolio/portfolio-70.jpg', category: 'catering', title: 'Catering — Saveurs' },
  { id: 71, image: '/assets/images/portfolio/portfolio-71.jpg', category: 'catering', title: 'Catering — Harmonie' },

  // ── Chauffeurs Privé (5 photos — toutes) ──────────────────
  { id: 7,  image: '/assets/images/portfolio/portfolio-07.jpg', category: 'chauffeurs', title: 'Chauffeur privé — Paris by night' },
  { id: 23, image: '/assets/images/portfolio/portfolio-23.jpg', category: 'chauffeurs', title: 'Service chauffeur VIP' },
  { id: 34, image: '/assets/images/portfolio/portfolio-34.jpg', category: 'chauffeurs', title: 'Chauffeur — Transport privé' },
  { id: 35, image: '/assets/images/portfolio/portfolio-35.jpg', category: 'chauffeurs', title: 'Chauffeur — Véhicule premium' },
  { id: 83, image: '/assets/images/portfolio/portfolio-83.jpg', category: 'chauffeurs', title: 'Chauffeur — Service' },

  // ── Dog Sitting (7 photos — toutes) ───────────────────────
  { id: 13, image: '/assets/images/portfolio/portfolio-13.jpg', category: 'dog-sitting', title: 'Dog sitting — Paris' },
  { id: 36, image: '/assets/images/portfolio/portfolio-36.jpg', category: 'dog-sitting', title: 'Dog sitting — Promenade' },
  { id: 37, image: '/assets/images/portfolio/portfolio-37.jpg', category: 'dog-sitting', title: 'Dog sitting — Balade' },
  { id: 72, image: '/assets/images/portfolio/portfolio-72.jpg', category: 'dog-sitting', title: 'Dog sitting — Compagnon' },
  { id: 73, image: '/assets/images/portfolio/portfolio-73.jpg', category: 'dog-sitting', title: 'Dog sitting — Moment' },
  { id: 74, image: '/assets/images/portfolio/portfolio-74.jpg', category: 'dog-sitting', title: 'Dog sitting — Tendresse' },
  { id: 75, image: '/assets/images/portfolio/portfolio-75.jpg', category: 'dog-sitting', title: 'Dog sitting — Sortie' },

  // ── Livraison (7 photos — toutes) ─────────────────────────
  { id: 8,  image: '/assets/images/portfolio/portfolio-08.jpg', category: 'livraison', title: 'Livraison florale premium' },
  { id: 18, image: '/assets/images/portfolio/portfolio-18.jpg', category: 'livraison', title: 'Livraison premium' },
  { id: 38, image: '/assets/images/portfolio/portfolio-38.jpg', category: 'livraison', title: 'Livraison — Service express' },
  { id: 39, image: '/assets/images/portfolio/portfolio-39.jpg', category: 'livraison', title: 'Livraison — Sur mesure' },
  { id: 76, image: '/assets/images/portfolio/portfolio-76.jpg', category: 'livraison', title: 'Livraison — Bouquet' },
  { id: 77, image: '/assets/images/portfolio/portfolio-77.jpg', category: 'livraison', title: 'Livraison — Fleurs' },
  { id: 78, image: '/assets/images/portfolio/portfolio-78.jpg', category: 'livraison', title: 'Livraison — Attention' },

  // ── Picnic (6 photos — toutes) ────────────────────────────
  { id: 9,  image: '/assets/images/portfolio/portfolio-09.jpg', category: 'picnic', title: 'Picnic chic — Tour Eiffel' },
  { id: 21, image: '/assets/images/portfolio/portfolio-21.jpg', category: 'picnic', title: 'Picnic luxe — Champ de Mars' },
  { id: 48, image: '/assets/images/portfolio/portfolio-48.jpg', category: 'picnic', title: 'Picnic — Élégance en plein air' },
  { id: 49, image: '/assets/images/portfolio/portfolio-49.jpg', category: 'picnic', title: 'Picnic — Vue sur Paris' },
  { id: 50, image: '/assets/images/portfolio/portfolio-50.jpg', category: 'picnic', title: 'Picnic — Moment d\'exception' },
  { id: 88, image: '/assets/images/portfolio/portfolio-88.jpg', category: 'picnic', title: 'Picnic — Champêtre' },

  // ── Transfert de Bagages (7 photos — toutes) ──────────────
  { id: 22, image: '/assets/images/portfolio/portfolio-22.jpg', category: 'bagages', title: 'Transfert de bagages' },
  { id: 33, image: '/assets/images/portfolio/portfolio-33.jpg', category: 'bagages', title: 'Bagages — Prise en charge' },
  { id: 79, image: '/assets/images/portfolio/portfolio-79.jpg', category: 'bagages', title: 'Bagages — Manutention' },
  { id: 80, image: '/assets/images/portfolio/portfolio-80.jpg', category: 'bagages', title: 'Bagages — Sécurité' },
  { id: 81, image: '/assets/images/portfolio/portfolio-81.jpg', category: 'bagages', title: 'Bagages — Logistique' },
  { id: 82, image: '/assets/images/portfolio/portfolio-82.jpg', category: 'bagages', title: 'Bagages — Transport' },

  // ── Décoration (2 photos — toutes) ────────────────────────
  { id: 29, image: '/assets/images/portfolio/portfolio-29.jpg', category: 'decoration', title: 'Décoration — Mise en scène' },
  { id: 30, image: '/assets/images/portfolio/portfolio-30.jpg', category: 'decoration', title: 'Décoration — Ambiance florale' },

  // ── Accompagnement Client (2 photos — toutes) ─────────────
  { id: 31, image: '/assets/images/portfolio/portfolio-31.jpg', category: 'accompagnement', title: 'Accompagnement client' },
  { id: 32, image: '/assets/images/portfolio/portfolio-32.jpg', category: 'accompagnement', title: 'Accompagnement — Service personnalisé' },
];

document.addEventListener('DOMContentLoaded', () => {
  // Hero animation
  const hero = document.querySelector('.hero--page');
  if (hero) {
    setTimeout(() => hero.classList.add('is-loaded'), 100);
  }

  // Build filter buttons
  const filterContainer = document.getElementById('filter-buttons');
  if (filterContainer) {
    filterContainer.innerHTML = portfolioCategories.map(cat => `
      <button class="filter-btn ${cat.id === 'all' ? 'is-active' : ''}" data-filter="${cat.id}">
        ${t('portfolio.filters.' + cat.id.replace('-', '_')) || cat.label}
      </button>
    `).join('');

    // Filter click handlers
    filterContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;

      filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const filter = btn.dataset.filter;
      const items = document.querySelectorAll('.portfolio-item');
      items.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = '';
          item.style.animation = 'scaleIn 0.5s var(--ease-smooth) forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  // Setup portfolio grid
  const grid = document.getElementById('portfolio-grid');
  if (grid) {
    grid.innerHTML = portfolioItems.map(item => `
      <a href="${item.image}" class="portfolio-item glightbox reveal" data-gallery="portfolio" data-category="${item.category}">
        <img src="${item.image}" alt="${tObj(item.title)}" class="portfolio-item__image" loading="lazy" />
        <div class="portfolio-item__overlay">
          <img src="/images/logos/logo-ab-full-white.png" alt="" class="portfolio-item__watermark-logo" />
        </div>
      </a>
    `).join('');

    // Initialize GLightbox
    if (typeof GLightbox !== 'undefined') {
      GLightbox({ selector: '.glightbox' });
    } else {
      import('glightbox').then(module => {
        const lightbox = module.default({ selector: '.glightbox' });
      }).catch(() => {
        console.log('GLightbox not loaded — lightbox disabled');
      });
    }
  }

  // URL param filter
  const params = new URLSearchParams(window.location.search);
  const filter = params.get('category') || params.get('service');
  if (filter && filterContainer) {
    const btn = filterContainer.querySelector(`[data-filter="${filter}"]`);
    if (btn) btn.click();
  }
});
