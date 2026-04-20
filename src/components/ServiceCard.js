/* ============================================================
   SERVICE CARD COMPONENT
   Reusable card for services grid and carousel
   ============================================================ */

import { tObj } from '../utils/i18n.js';

export function createServiceCard(service, index) {
  return `
    <div class="service-card reveal" data-service="${service.id}" style="--card-index: ${index}">
      <div class="service-card__image-wrapper">
        <img src="${service.image}" alt="${tObj(service.title)}" class="service-card__image" />
        <div class="service-card__overlay">
          <span class="service-card__cta" data-i18n="nav.decouvrir">Découvrir</span>
        </div>
      </div>
      <div class="service-card__content">
        <h3 class="service-card__title">${tObj(service.title)}</h3>
        <p class="service-card__subtitle">${tObj(service.subtitle)}</p>
      </div>
    </div>
  `;
}
