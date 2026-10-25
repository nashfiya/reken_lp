const fs = require('fs');

let content = fs.readFileSync('mitra.html', 'utf8');

const replacements = [
  {
    from: 'Tim technical specialist REKEN akan mendampingi proses setup awal, memindahkan data unit, serta melatih admin dan supir Anda hingga mahir.',
    to: 'Tim REKEN akan mendampingi proses awal, memindahkan data unit, serta melatih admin dan tim Anda hingga mahir.'
  },
  {
    from: '<div class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-blue-600"></i> Setup WhatsApp AI Copilot &amp; Google Calendar</div>',
    to: '<div class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-blue-600"></i> Integrasi WhatsApp &amp; Kalender Tim</div>'
  },
  {
    from: '<div class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-blue-600"></i> Garansi onboarding tuntas dalam 24 jam</div>',
    to: '<div class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-blue-600"></i> Garansi siap pakai dalam 24 jam</div>'
  },
  {
    from: '<span class="font-bold text-slate-900 block text-sm mb-1">0% Jadwal Double-Booking</span>',
    to: '<span class="font-bold text-slate-900 block text-sm mb-1">Bebas Bentrok Jadwal</span>'
  },
  {
    from: 'pelaporan utilisasi bulanan yang transparan.',
    to: 'pelaporan kinerja armada bulanan yang transparan.'
  },
  {
    from: '<div class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-purple-600"></i> Terintegrasi proteksi GPS IoT &amp; histori perjalanan rute</div>',
    to: '<div class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-purple-600"></i> Dilengkapi pelacak GPS &amp; riwayat perjalanan unit</div>'
  },
  {
    from: 'Investor dapat diberikan laporan PDF transparan mengenai tanggal pemakaian, biaya perawatan, dan persentase komisi tanpa membongkar data rahasia sewa lainnya.',
    to: 'Investor dapat diberikan laporan resmi yang transparan mengenai tanggal pemakaian, biaya perawatan, dan bagi hasil komisi tanpa membuka data pribadi lainnya.'
  },
  {
    from: 'Ekspor Laporan Investor 1-Klik',
    to: 'Laporan Investor'
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
    console.warn('Could not find match in mitra.html:', r.from.substring(0, 40));
  }
});

fs.writeFileSync('mitra.html', content, 'utf8');
console.log(`Applied ${applied} replacements in mitra.html`);
