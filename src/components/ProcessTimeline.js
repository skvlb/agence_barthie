/* ============================================================
   PROCESS TIMELINE COMPONENT
   5-step horizontal timeline
   ============================================================ */

import { processSteps } from '../data/process.js';
import { tObj } from '../utils/i18n.js';

export function initProcessTimeline(containerId = 'process-timeline') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = processSteps.map((step, index) => `
    <div class="process-step reveal" data-step="${index + 1}">
      <div class="process-step__number">
        <span>0${index + 1}</span>
        <div class="process-step__line"></div>
      </div>
      <div class="process-step__content">
        <h3 class="process-step__title">${tObj(step.title)}</h3>
        <p class="process-step__text">${tObj(step.description)}</p>
        ${step.note ? `<span class="process-step__note">${tObj(step.note)}</span>` : ''}
      </div>
    </div>
  `).join('');
}
