const fs = require('fs');

const files = ['fitur.html', 'mitra.html', 'tentang.html', 'kontak.html', 'ketentuan.html', 'privasi.html'];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  console.log(`\n=== BADGES IN ${file} ===`);
  const spanRegex = /<span\b[^>]*class=["']([^"']*(?:rounded-full|badge|pill|tag)[^"']*)["'][^>]*>([\s\S]*?)<\/span>/gi;
  let match;
  let count = 0;
  while ((match = spanRegex.exec(content)) !== null) {
    const innerText = match[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
    if (!innerText) continue;
    const words = innerText.split(' ').filter(w => w.length > 0 && !w.startsWith('fa-') && w !== '&middot;' && w !== '·');
    if (words.length > 2) {
      console.log(`[>2 words] (${words.length}): "${innerText}"`);
      count++;
    }
  }
  if (count === 0) console.log('All badges have <= 2 words!');
});
