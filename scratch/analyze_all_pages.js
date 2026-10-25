const fs = require('fs');

const files = [
  'index.html',
  'fitur.html',
  'mitra.html',
  'tentang.html',
  'kontak.html',
  'ketentuan.html',
  'privasi.html',
  'src/script.js'
];

const techTerms = [
  'saas', 'operating system', 'real-time', 'realtime', 'gantt', 
  'cloud', 'server', 'database', 'api', 'webhook', 'uptime', 
  'sla', 'pwa', 'copilot', 'dispatch', 'sync', 'csv', 'pdf', 
  'aes-256', 'aes', 'multi-tenant', 'suite', 'telematika', 'iot', 'instance',
  'engine', 'algorithm', 'frontend', 'backend', 'full-stack', 'early warning',
  'security deposit', 'monitoring', 'utilitas', 'okupansi', 'double-booking',
  '2-way', 'two-way'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  console.log(`\n========================================`);
  console.log(`FILE: ${file} (${(content.length / 1024).toFixed(1)} KB)`);
  console.log(`========================================`);

  const termCounts = {};
  techTerms.forEach(term => {
    const regex = new RegExp('\\b' + term.replace('-', '\\-') + '\\b', 'gi');
    const matches = content.match(regex);
    if (matches) {
      termCounts[term] = matches.length;
    }
  });

  const foundTerms = Object.keys(termCounts);
  if (foundTerms.length === 0) {
    console.log('No tech terms found.');
  } else {
    foundTerms.forEach(term => {
      console.log(`- "${term}": ${termCounts[term]} times`);
    });
  }

  // Check badges with > 2 words (only for html files)
  if (file.endsWith('.html')) {
    const spanRegex = /<span\b[^>]*class=["']([^"']*(?:rounded-full|badge|pill)[^"']*)["'][^>]*>([\s\S]*?)<\/span>/gi;
    let match;
    let overTwoWords = [];
    while ((match = spanRegex.exec(content)) !== null) {
      const innerText = match[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
      if (!innerText) continue;
      const words = innerText.split(' ').filter(w => w.length > 0 && !w.startsWith('fa-') && w !== '&middot;');
      if (words.length > 2) {
        overTwoWords.push(innerText);
      }
    }
    if (overTwoWords.length > 0) {
      console.log(`\nBadges with > 2 words (${overTwoWords.length}):`);
      overTwoWords.slice(0, 10).forEach(t => console.log('  * ' + t));
    }
  }
});
