const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');

console.log('=== CHECKING TECH TERMS IN index.html ===');
const techTerms = [
  'saas', 'operating system', 'real-time', 'realtime', 'gantt', 
  'cloud', 'server', 'database', 'api', 'webhook', 'uptime', 
  'sla', 'pwa', 'copilot', 'dispatch', 'sync', 'csv', 'pdf', 
  'aes', 'multi-tenant', 'suite', 'telematika', 'iot', 'instance',
  'engine', 'algorithm', 'frontend', 'backend', 'full-stack', 'early warning',
  'security deposit', 'monitoring', 'utilitas', 'okupansi'
];

techTerms.forEach(term => {
  const regex = new RegExp('\\b' + term + '\\b', 'gi');
  const matches = content.match(regex);
  if (matches) {
    console.log(`Found "${term}": ${matches.length} times`);
  }
});

// Let's also find all text inside <span class="...rounded-full..."> or similar badges
console.log('\n=== CHECKING BADGE WORD COUNTS (max 2 words) ===');
const spanRegex = /<span\b[^>]*class=["']([^"']*(?:rounded-full|badge|pill)[^"']*)["'][^>]*>([\s\S]*?)<\/span>/gi;
let match;
let overTwoWords = [];
while ((match = spanRegex.exec(content)) !== null) {
  const innerText = match[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  if (!innerText) continue;
  // Ignore pure icons or numbers or SVG
  const words = innerText.split(' ').filter(w => w.length > 0 && !w.startsWith('fa-'));
  if (words.length > 2) {
    overTwoWords.push(innerText);
  }
}
console.log(`Badges with > 2 words: ${overTwoWords.length}`);
overTwoWords.slice(0, 15).forEach(t => console.log(' - ' + t));

// Let's find button labels
console.log('\n=== CHECKING BUTTON LABELS (max 2 words) ===');
const btnRegex = /<(?:button|a)\b[^>]*class=["']([^"']*(?:btn|button|cta)[^"']*)["'][^>]*>([\s\S]*?)<\/(?:button|a)>/gi;
let btnMatch;
let btnOverTwo = [];
while ((btnMatch = btnRegex.exec(content)) !== null) {
  const innerText = btnMatch[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  if (!innerText) continue;
  const words = innerText.split(' ').filter(w => w.length > 0);
  if (words.length > 2) {
    btnOverTwo.push(innerText);
  }
}
console.log(`Buttons with > 2 words: ${btnOverTwo.length}`);
btnOverTwo.slice(0, 15).forEach(t => console.log(' - ' + t));
