const fs = require('fs');

const files = [
  'index.html',
  'fitur.html',
  'mitra.html',
  'tentang.html',
  'kontak.html',
  'ketentuan.html',
  'privasi.html'
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
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  console.log(`\n=== SNIPPETS IN ${file} ===`);
  lines.forEach((line, idx) => {
    techTerms.forEach(term => {
      const regex = new RegExp('\\b' + term.replace('-', '\\-') + '\\b', 'i');
      if (regex.test(line)) {
        console.log(`L${idx + 1} [${term}]: ${line.trim()}`);
      }
    });
  });
});
