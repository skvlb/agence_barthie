/* ============================================================
   MAIN ENTRY POINT
   Initializes all global components on every page
   ============================================================ */

// Styles
import './styles/variables.css';
import './styles/reset.css';
import './styles/typography.css';
import './styles/animations.css';
import './styles/global.css';

// Component styles
import './components/Navbar.css';
import './components/Footer.css';
import './components/CustomCursor.css';
import './components/ScrollProgress.css';
import './components/ClientMarquee.css';
import './components/ProcessTimeline.css';
import './components/ServiceCard.css';
import './components/PageHero.css';

// Components
import { initNavbar } from './components/Navbar.js';
import { initFooter } from './components/Footer.js';
import { initCustomCursor } from './components/CustomCursor.js';
import { initScrollProgress } from './components/ScrollProgress.js';
import { initScrollReveal } from './components/ScrollReveal.js';

// Initialize global components
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initFooter();
  initCustomCursor();
  initScrollProgress();
  initScrollReveal();
});
