const fs = require('fs');
const path = require('path');

// 1. Update style.css
const stylePath = path.join(__dirname, '..', 'src', 'style.css');
let styleContent = fs.readFileSync(stylePath, 'utf-8');

const oldLaptopCss = `.laptop-reveal.reveal-on-scroll {
  opacity: 0.25;
  transform: scale(0.7);
  filter: blur(6px);
  transform-origin: bottom center;
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 1.15s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease-out;
}

.laptop-reveal.reveal-on-scroll.is-revealed {
  opacity: 1;
  transform: scale(1);
  filter: blur(0);
}`;

const newLaptopCss = `.laptop-reveal.reveal-on-scroll {
  opacity: 0.95;
  transform: scale(0.98);
  filter: blur(0);
  transform-origin: top center;
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
}

.laptop-reveal.reveal-on-scroll.is-revealed {
  opacity: 1;
  transform: scale(1);
}`;

styleContent = styleContent.replace(oldLaptopCss, newLaptopCss);
fs.writeFileSync(stylePath, styleContent, 'utf-8');
console.log('Successfully updated laptop CSS in style.css');

// 2. Update script.js
const scriptPath = path.join(__dirname, '..', 'src', 'script.js');
let scriptContent = fs.readFileSync(scriptPath, 'utf-8');

scriptContent = scriptContent.replace(
  `  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) laptop.classList.add('is-revealed');
      else laptop.classList.remove('is-revealed');
    });
  }, { threshold: 0.3 });`,
  `  // Immediately reveal if any part is visible in initial hero viewport
  laptop.classList.add('is-revealed');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) laptop.classList.add('is-revealed');
    });
  }, { threshold: 0.05, rootMargin: '50px 0px 50px 0px' });`
);

fs.writeFileSync(scriptPath, scriptContent, 'utf-8');
console.log('Successfully updated script.js');
