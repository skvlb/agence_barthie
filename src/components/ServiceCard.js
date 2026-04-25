/* ============================================================
   SERVICE CARD COMPONENT
   Reusable card for services grid and carousel
   ============================================================ */

import { tObj } from '../utils/i18n.js';

export function createServiceCard(service, index) {
  return `
    <div class="service-card reveal" data-service="${service.id}" style="--card-index: ${index}">
      <div class="service-card__inner">
        <!-- Face Avant -->
        <div class="service-card__front">
          <div class="service-card__image-wrapper">
            <img src="${service.image}" alt="${tObj(service.title)}" class="service-card__image" loading="lazy" />
            <div class="service-card__overlay">
              <span class="service-card__cta" data-i18n="nav.decouvrir">Découvrir</span>
            </div>
          </div>
          <div class="service-card__content">
            <h3 class="service-card__title">${tObj(service.title)}</h3>
            <p class="service-card__subtitle">${tObj(service.subtitle)}</p>
          </div>
        </div>

        <!-- Face Arrière -->
        <div class="service-card__back">
          <div class="service-card__back-content">
            <h3 class="service-card__title service-card__title--back">${tObj(service.title)}</h3>
            <p class="service-card__description">${tObj(service.description)}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}
