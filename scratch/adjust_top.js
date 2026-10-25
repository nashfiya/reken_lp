const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
let content = fs.readFileSync(indexPath, 'utf-8');

content = content.replace(
  'pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16',
  'pt-14 sm:pt-16 lg:pt-20 pb-10 sm:pb-14'
);

content = content.replace(
  'hero-animate-cta mt-6 sm:mt-7 flex flex-wrap',
  'hero-animate-cta mt-5 sm:mt-6 flex flex-wrap'
);

content = content.replace(
  'hero-animate-trust mt-3.5 sm:mt-4 flex flex-wrap',
  'hero-animate-trust mt-3 sm:mt-3.5 flex flex-wrap'
);

content = content.replace(
  'relative mt-7 sm:mt-9 max-w-5xl lg:max-w-6xl mx-auto text-left',
  'relative mt-6 sm:mt-8 max-w-5xl lg:max-w-6xl mx-auto text-left'
);

fs.writeFileSync(indexPath, content, 'utf-8');
console.log('Successfully adjusted hero padding');
