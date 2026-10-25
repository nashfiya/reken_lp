const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');
const lines = content.split('\n');

const techTerms = [
  'saas', 'operating system', 'real-time', 'realtime', 'gantt', 
  'cloud', 'server', 'database', 'api', 'webhook', 'uptime', 
  'sla', 'pwa', 'copilot', 'dispatch', 'sync', 'csv', 'pdf', 
  'aes', 'multi-tenant', 'suite', 'telematika', 'iot', 'instance',
  'engine', 'algorithm', 'frontend', 'backend', 'monitoring'
];

lines.forEach((line, idx) => {
  techTerms.forEach(term => {
    const regex = new RegExp('\\b' + term + '\\b', 'i');
    if (regex.test(line)) {
      console.log(`L${idx + 1} [${term}]: ${line.trim()}`);
    }
  });
});
