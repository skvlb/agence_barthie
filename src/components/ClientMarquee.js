/* ============================================================
   CLIENT MARQUEE COMPONENT
   Infinite scrolling band of client logos
   ============================================================ */

import { clients } from '../data/clients.js';

export function initClientMarquee(containerId = 'client-marquee') {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Double the items for seamless loop
  const items = [...clients, ...clients];

  container.innerHTML = `
    <div class="client-marquee__track">
      ${items.map(client => `
        <div class="client-marquee__item">
          <img src="${client.logo}" alt="${client.name}" class="client-marquee__logo" />
        </div>
      `).join('')}
    </div>
  `;
}
