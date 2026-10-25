const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
let content = fs.readFileSync(indexPath, 'utf-8');

// 1. Refine Hero Section Spacing
content = content.replace(
  'pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24',
  'pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16'
);

content = content.replace(
  'hero-animate-cta mt-8 sm:mt-10 flex flex-wrap',
  'hero-animate-cta mt-6 sm:mt-7 flex flex-wrap'
);

content = content.replace(
  'hero-animate-trust mt-6 flex flex-wrap',
  'hero-animate-trust mt-3.5 sm:mt-4 flex flex-wrap'
);

content = content.replace(
  'relative mt-12 sm:mt-16 max-w-5xl lg:max-w-6xl mx-auto text-left',
  'relative mt-7 sm:mt-9 max-w-5xl lg:max-w-6xl mx-auto text-left'
);

// 2. Refine Pill Badges to max 2 words
content = content.replace(
  '<span>Keunggulan Fitur REKEN</span>',
  '<span>Fitur Utama</span>'
);

// 3. Make sure each slide has background color for clean crossfade
content = content.replace(
  'bg-slate-950 aspect-[16/10] sm:aspect-[16/9.5] select-none group',
  'bg-slate-950 aspect-[16/10] sm:aspect-[16/9.5] select-none group relative overflow-hidden'
);

fs.writeFileSync(indexPath, content, 'utf-8');
console.log('Successfully refined spacing in index.html');

// 4. Update style.css for pristine slide transition
const stylePath = path.join(__dirname, '..', 'src', 'style.css');
let styleContent = fs.readFileSync(stylePath, 'utf-8');

const updatedSlideStyles = `
/* ==========================================================================
   Hero Laptop Screen Carousel Transitions
   ========================================================================== */
.laptop-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  background-color: #020617;
  pointer-events: none;
  z-index: 1;
}
.laptop-slide.active {
  opacity: 1 !important;
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

const oldSlideMarker = '/* ==========================================================================\r\n   Hero Laptop Screen Carousel Transitions';
const oldSlideMarkerLF = '/* ==========================================================================\n   Hero Laptop Screen Carousel Transitions';

let sIdx = styleContent.indexOf(oldSlideMarker);
if (sIdx === -1) sIdx = styleContent.indexOf(oldSlideMarkerLF);

if (sIdx !== -1) {
  styleContent = styleContent.substring(0, sIdx) + updatedSlideStyles.trim();
  fs.writeFileSync(stylePath, styleContent, 'utf-8');
  console.log('Successfully updated slide styles in style.css');
}
