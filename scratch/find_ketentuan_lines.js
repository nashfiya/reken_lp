const fs = require('fs');

const content = fs.readFileSync('ketentuan.html', 'utf8');
const lines = content.split('\n');

const techTerms = [
  'saas', 'operating system', 'real-time', 'realtime', 'gantt', 
  'cloud', 'server', 'database', 'api', 'webhook', 'uptime', 
  'sla', 'pwa', 'copilot', 'dispatch', 'sync', 'csv', 'pdf', 
  'aes-256', 'aes', 'multi-tenant', 'suite', 'telematika', 'iot', 'instance',
  'engine', 'algorithm', 'frontend', 'backend', 'full-stack', 'early warning',
  'security deposit', 'monitoring', 'utilitas', 'okupansi', 'double-booking',
  '2-way', 'two-way'
];

lines.forEach((line, idx) => {
  techTerms.forEach(term => {
    const regex = new RegExp('\\b' + term.replace('-', '\\-') + '\\b', 'i');
    if (regex.test(line)) {
      console.log(`L${idx + 1} [${term}]: ${line.trim()}`);
    }
  });
});
