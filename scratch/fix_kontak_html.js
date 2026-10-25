const fs = require('fs');

let content = fs.readFileSync('kontak.html', 'utf8');

const replacements = [
  {
    from: '<title>Jadwalkan Demo &amp; Kontak REKEN – Rental SaaS &amp; Operating System</title>',
    to: '<title>Jadwalkan Demo &amp; Kontak REKEN – Aplikasi Rental Kendaraan</title>'
  },
  {
    from: '<meta name="description" content="Jadwalkan live demo dashboard REKEN Rental SaaS 1-on-1 gratis. Konsultasi automasi WhatsApp AI Copilot, integrasi Google Calendar, dan migrasi data rental Anda.">',
    to: '<meta name="description" content="Jadwalkan demo dashboard REKEN gratis. Konsultasi asisten WhatsApp otomatis, kalender booking, dan kemudahan migrasi data rental Anda.">'
  },
  {
    from: '<meta name="keywords" content="demo software rental mobil, kontak reken, demo aplikasi rental, konsultasi rental saas">',
    to: '<meta name="keywords" content="demo aplikasi rental, kontak reken, konsultasi rental kendaraan, jadwal demo sistem rental">'
  },
  {
    from: '<p class="text-xs text-slate-600 mb-4">Pertanyaan seputar kemitraan B2B, integrasi API GPS, dan penawaran enterprise.</p>',
    to: '<p class="text-xs text-slate-600 mb-4">Pertanyaan seputar kemitraan bisnis, pelacakan GPS, dan kebutuhan khusus rental Anda.</p>'
  },
  {
    from: '<i class="fa-solid fa-cloud-bolt"></i>',
    to: '<i class="fa-solid fa-circle-check"></i>'
  },
  {
    from: '<h3 class="text-base font-bold text-slate-900 font-alt mb-1">Status Sistem Cloud</h3>',
    to: '<h3 class="text-base font-bold text-slate-900 font-alt mb-1">Status Sistem</h3>'
  },
  {
    from: '<p class="text-xs text-slate-600 mb-4">Platform beroperasi dengan standar keandalan 99.9% uptime SLA 24/7.</p>',
    to: '<p class="text-xs text-slate-600 mb-4">Seluruh layanan aplikasi beroperasi normal dan lancar 24 jam nonstop.</p>'
  },
  {
    from: '<span>Semua Sistem Normal</span>',
    to: '<span>Sistem Normal</span>'
  },
  // Footer
  {
    from: 'Tanpa instalasi rumit, 100% berbasis cloud. Eliminasi jadwal bentrok, percepat respon WhatsApp AI 24/7, dan otomatisasi pembukuan kas serta invoice armada.',
    to: 'Tanpa instalasi rumit, REKEN siap digunakan untuk mencegah jadwal bentrok, melayani chat WhatsApp 24 jam, dan merapikan pembukuan serta invoice armada.'
  },
  {
    from: 'Sistem Informasi &amp; Operating System Rental Kendaraan',
    to: 'Aplikasi &amp; Dashboard Operasional Rental Kendaraan'
  },
  {
    from: 'Solusi cloud B2B SaaS terpadu untuk pengusaha rental mobil, motor, dan bus di seluruh Indonesia.',
    to: 'Solusi terpadu untuk pengusaha rental mobil, motor, dan bus di seluruh Indonesia.'
  },
  {
    from: '<span>All Systems Operational &middot; Uptime 99.98%</span>',
    to: '<span>Sistem Berjalan Normal &middot; Layanan Aktif</span>'
  },
  {
    from: '<li><a href="fitur.html#modul-rental" class="footer-nav-link">Kalender Booking Gantt</a></li>',
    to: '<li><a href="fitur.html#modul-rental" class="footer-nav-link">Kalender Jadwal Booking</a></li>'
  },
  {
    from: '<li><a href="fitur.html#modul-wa" class="footer-nav-link">WhatsApp AI CS Copilot</a></li>',
    to: '<li><a href="fitur.html#modul-wa" class="footer-nav-link">Asisten WhatsApp Otomatis</a></li>'
  },
  {
    from: '<li><a href="fitur.html#modul-telematika" class="footer-nav-link">GPS Telematika IoT</a></li>',
    to: '<li><a href="fitur.html#modul-telematika" class="footer-nav-link">Pelacakan GPS Armada</a></li>'
  },
  {
    from: '<li><a href="fitur.html" class="footer-nav-link">Google Calendar 2-Way Sync</a></li>',
    to: '<li><a href="fitur.html" class="footer-nav-link">Kalender Google Otomatis</a></li>'
  },
  {
    from: '<li><a href="fitur.html" class="footer-nav-link">Ekspor CSV / Excel</a></li>',
    to: '<li><a href="fitur.html" class="footer-nav-link">Unduh Rekap Laporan</a></li>'
  },
  {
    from: '<li><a href="kontak.html" class="footer-nav-link">Dokumentasi API &amp; Webhook</a></li>',
    to: '<li><a href="kontak.html" class="footer-nav-link">Panduan Penggunaan</a></li>'
  },
  {
    from: '<li><a href="kontak.html" class="footer-nav-link">Status Server Cloud</a></li>',
    to: '<li><a href="kontak.html" class="footer-nav-link">Status Layanan</a></li>'
  }
];

let applied = 0;
replacements.forEach(r => {
  let count = 0;
  while (content.includes(r.from)) {
    content = content.replace(r.from, r.to);
    count++;
  }
  if (count > 0) {
    applied += count;
  } else {
    console.warn('Could not find match in kontak.html:', r.from.substring(0, 40));
  }
});

fs.writeFileSync('kontak.html', content, 'utf8');
console.log(`Applied ${applied} replacements in kontak.html`);
