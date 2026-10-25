const fs = require('fs');
const path = require('path');

// 1. Update script.js
const scriptPath = path.join(__dirname, '..', 'src', 'script.js');
let scriptContent = fs.readFileSync(scriptPath, 'utf-8');

// Replace function call in DOMContentLoaded
scriptContent = scriptContent.replace('initDashboardShowcaseTabs();', 'initLaptopCarousel();');

// Replace the function definition
const oldFnStart = '/* ==========================================================================\r\n   4. Dashboard Interactive Showcase Tabs';
const oldFnStartLF = '/* ==========================================================================\n   4. Dashboard Interactive Showcase Tabs';
const oldFnEnd = '/* ==========================================================================\r\n   5. Interactive 3-Step Qualification Wizard';
const oldFnEndLF = '/* ==========================================================================\n   5. Interactive 3-Step Qualification Wizard';

let fnStartIdx = scriptContent.indexOf(oldFnStart);
if (fnStartIdx === -1) fnStartIdx = scriptContent.indexOf(oldFnStartLF);

let fnEndIdx = scriptContent.indexOf(oldFnEnd);
if (fnEndIdx === -1) fnEndIdx = scriptContent.indexOf(oldFnEndLF);

if (fnStartIdx === -1 || fnEndIdx === -1) {
  console.error('Could not locate old function in script.js', { fnStartIdx, fnEndIdx });
  process.exit(1);
}

const newCarouselFn = `/* ==========================================================================
   4. Hero Laptop Screen Auto-Carousel (Image 4 QuotaRing Style)
   ========================================================================== */
function initLaptopCarousel() {
  const container = document.getElementById('laptop-carousel');
  if (!container) return;

  const slides = container.querySelectorAll('.laptop-slide');
  const dots = document.querySelectorAll('#laptop-carousel-dots .laptop-dot');
  const urlDisplay = document.getElementById('laptop-carousel-url');
  const prevBtn = document.getElementById('laptop-prev-btn');
  const nextBtn = document.getElementById('laptop-next-btn');

  if (!slides.length) return;

  let currentIndex = 0;
  let timer = null;
  const interval = 4200;

  function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIndex = index;

    slides.forEach((slide, i) => {
      if (i === currentIndex) {
        slide.classList.add('active');
        slide.classList.remove('opacity-0', 'pointer-events-none');
        slide.classList.add('opacity-100');
        if (urlDisplay && slide.dataset.url) {
          urlDisplay.textContent = slide.dataset.url;
        }
      } else {
        slide.classList.remove('active', 'opacity-100');
        slide.classList.add('opacity-0', 'pointer-events-none');
      }
    });

    dots.forEach((dot, i) => {
      if (i === currentIndex) {
        dot.classList.add('active');
        dot.classList.remove('bg-slate-600');
        dot.classList.add('bg-sky-400');
      } else {
        dot.classList.remove('active');
        dot.classList.remove('bg-sky-400');
        dot.classList.add('bg-slate-600');
      }
    });
  }

  function startTimer() {
    stopTimer();
    // Do not auto-cycle if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timer = setInterval(() => {
      showSlide(currentIndex + 1);
    }, interval);
  }

  function stopTimer() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetIndex = parseInt(dot.getAttribute('data-slide'), 10);
      if (!isNaN(targetIndex)) {
        showSlide(targetIndex);
        startTimer();
      }
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showSlide(currentIndex - 1);
      startTimer();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showSlide(currentIndex + 1);
      startTimer();
    });
  }

  container.addEventListener('mouseenter', stopTimer);
  container.addEventListener('mouseleave', startTimer);

  showSlide(0);
  startTimer();
}

`;

scriptContent = scriptContent.substring(0, fnStartIdx) + newCarouselFn + scriptContent.substring(fnEndIdx);
fs.writeFileSync(scriptPath, scriptContent, 'utf-8');
console.log('Successfully updated script.js');

// 2. Update style.css
const stylePath = path.join(__dirname, '..', 'src', 'style.css');
let styleContent = fs.readFileSync(stylePath, 'utf-8');

const carouselStyles = `
/* ==========================================================================
   Hero Laptop Screen Carousel Transitions
   ========================================================================== */
.laptop-slide {
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  transform: scale(0.99);
}
.laptop-slide.active {
  opacity: 1 !important;
  transform: scale(1) !important;
  z-index: 10 !important;
  pointer-events: auto !important;
}
.laptop-dot {
  cursor: pointer;
  outline: none;
}
.laptop-dot.active {
  background-color: #38bdf8 !important; /* sky-400 */
  width: 1.25rem !important; /* expands as pill */
  border-radius: 9999px !important;
}
`;

// Append before end of file or check if already exists
if (!styleContent.includes('Hero Laptop Screen Carousel Transitions')) {
  styleContent += '\n' + carouselStyles;
  fs.writeFileSync(stylePath, styleContent, 'utf-8');
  console.log('Successfully updated style.css');
}
