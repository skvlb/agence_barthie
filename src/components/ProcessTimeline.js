/* ============================================================
   PROCESS TIMELINE COMPONENT
   5-step horizontal timeline
   ============================================================ */

import { processSteps } from '../data/process.js';
import { tObj } from '../utils/i18n.js';

export function initProcessTimeline(containerId = 'process-timeline') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="process-timeline__line"></div>
    <div class="process-timeline__steps">
      ${processSteps.map((step, index) => `
        <div class="process-step reveal" style="transition-delay: ${index * 100}ms">
          <div class="process-step__bullet"></div>
          <div class="process-step__content">
            <h3 class="process-step__title">${tObj(step.title)}</h3>
            <p class="process-step__text">${tObj(step.description)}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}
