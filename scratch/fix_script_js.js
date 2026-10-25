const fs = require('fs');

let content = fs.readFileSync('src/script.js', 'utf8');

const replacements = [
  {
    from: 'Halo Tim REKEN, saya ingin jadwalkan Live Demo Dashboard Rental SaaS:',
    to: 'Halo Tim REKEN, saya ingin jadwalkan Demo Sistem Rental:'
  },
  {
    from: 'Hubungkan Nomor WhatsApp ke AI CS Copilot',
    to: 'Hubungkan Nomor WhatsApp Rental'
  },
  {
    from: 'Cukup scan QR Code WhatsApp resmi rental Anda. AI Copilot aktif 24/7 membalas ketersediaan unit sewa detik itu juga dan menyiapkan draf booking tanpa membuat admin begadang.',
    to: 'Cukup hubungkan nomor WhatsApp resmi rental Anda. Asisten otomatis aktif 24 jam membalas ketersediaan unit sewa detik itu juga dan menyiapkan pesanan tanpa membuat admin begadang.'
  },
  {
    from: 'Sinkronkan Kalender ke Google Calendar Tim',
    to: 'Hubungkan Kalender Jadwal Tim'
  },
  {
    from: 'Setiap reservasi baru otomatis mengunci jadwal di Google Calendar driver dan staf operasional. Hindari insiden fatal mobil dobel sewa (0 double-booking).',
    to: 'Setiap pesanan baru otomatis mengunci jadwal tim dan supir. Bebas risiko mobil dobel sewa dan jadwal bentrok.'
  },
  {
    from: 'Terbitkan Invoice & Pantau Utilitas Armada',
    to: 'Terbitkan Invoice & Rekap Laporan'
  },
  {
    from: 'Kalkulasi otomatis biaya sewa, DP, uang jaminan (deposit), hingga overtime. Pantau tingkat okupansi bisnis real-time dan ekspor laporan keuangan dalam 1 klik CSV.',
    to: 'Hitung otomatis biaya sewa, DP, jaminan, hingga overtime. Pantau performa rental dan unduh laporan rapi dalam 1 klik.'
  },
  {
    from: "unitStatus.textContent = 'Ready';",
    to: "unitStatus.textContent = 'Tersedia';"
  },
  {
    from: "unitStatus.textContent = 'Locked in G-Cal';",
    to: "unitStatus.textContent = 'Jadwal Terkunci';"
  },
  {
    from: "const originalText = submitBtn ? submitBtn.innerHTML : 'Subscribe';",
    to: "const originalText = submitBtn ? submitBtn.innerHTML : 'Daftar';"
  }
];

let applied = 0;
replacements.forEach(r => {
  if (content.includes(r.from)) {
    content = content.replace(r.from, r.to);
    applied++;
  } else {
    console.warn('Could not find in script.js:', r.from.substring(0, 40));
  }
});

fs.writeFileSync('src/script.js', content, 'utf8');
console.log(`Applied ${applied} replacements in src/script.js`);
