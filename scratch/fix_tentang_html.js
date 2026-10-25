const fs = require('fs');

let content = fs.readFileSync('tentang.html', 'utf8');

const replacements = [
  {
    from: '<meta name="description" content="Cerita pendirian REKEN: dari melihat inefisiensi pencatatan manual rental hingga menghadirkan operating system cloud modern dan WhatsApp AI Copilot untuk pemilik rental se-Indonesia.">',
    to: '<meta name="description" content="Cerita pendirian REKEN: dari melihat kendala pencatatan manual rental hingga menghadirkan sistem manajemen modern dan asisten WhatsApp untuk pemilik rental se-Indonesia.">'
  },
  {
    from: '<meta name="keywords" content="tentang reken, profil reken saas, software house rental mobil, teknologi rental kendaraan">',
    to: '<meta name="keywords" content="tentang reken, profil reken, aplikasi rental mobil, sistem rental kendaraan">'
  },
  {
    from: 'Akibatnya sangat fatal: <strong>insiden mobil tabrakan sewa (double-booking)</strong>, admin kelelahan, dan waktu yang seharusnya bisa dipakai untuk mengembangkan armada justru habis tersita untuk urusan koordinasi manual.',
    to: 'Akibatnya fatal: <strong>jadwal sewa mobil bertabrakan</strong>, admin kelelahan, dan waktu yang seharusnya bisa dipakai untuk mengembangkan armada justru habis untuk urusan koordinasi manual.'
  },
  {
    from: 'Kami mendirikan <strong>REKEN</strong> dengan satu misi sederhana namun berdampak besar: <em>membangun sistem operasi berbasis cloud all-in-one yang menghubungkan inventaris armada, kalender jadwal booking bebas bentrok, integrasi WhatsApp AI Copilot 24 jam, dan kalkulasi invoice kas secara instan.</em>',
    to: 'Kami mendirikan <strong>REKEN</strong> dengan satu misi sederhana namun berdampak besar: <em>membangun satu sistem terpadu yang menghubungkan inventaris armada, kalender jadwal bebas bentrok, asisten WhatsApp otomatis 24 jam, dan hitungan invoice kas secara instan.</em>'
  },
  {
    from: '<div class="text-xs text-slate-600 mt-1 font-medium">Double-Booking</div>',
    to: '<div class="text-xs text-slate-600 mt-1 font-medium">Jadwal Bentrok</div>'
  },
  {
    from: '<i class="fa-solid fa-server"></i>',
    to: '<i class="fa-solid fa-shield-halved"></i>'
  },
  {
    from: '<h3 class="text-base font-bold text-slate-900 font-alt mb-2">Keandalan 99.9% Uptime</h3>',
    to: '<h3 class="text-base font-bold text-slate-900 font-alt mb-2">Sistem Selalu Aktif</h3>'
  },
  {
    from: 'Arsitektur cloud berkinerja tinggi memastikan dashboard dan webhook WhatsApp Anda selalu aktif tanpa kendala server down.',
    to: 'Sistem yang stabil dan handal memastikan dashboard serta pesan WhatsApp rental Anda selalu siap melayani pelanggan setiap saat.'
  },
  {
    from: '<h3 class="text-base font-bold text-slate-900 font-alt mb-2">Privasi Data Terisolasi</h3>',
    to: '<h3 class="text-base font-bold text-slate-900 font-alt mb-2">Privasi Terjamin Aman</h3>'
  },
  {
    from: 'Data pelanggan KTP/SIM, nomor kontak, dan pembukuan kas Anda terenkripsi aman dan 100% milik Anda secara privat.',
    to: 'Data pelanggan KTP/SIM, nomor kontak, dan pembukuan kas Anda terlindungi aman dan sepenuhnya menjadi rahasia bisnis Anda.'
  },
  {
    from: '<h3 class="text-base font-bold text-slate-900 font-alt mb-2">Inovasi AI Berkelanjutan</h3>',
    to: '<h3 class="text-base font-bold text-slate-900 font-alt mb-2">Inovasi Terus Berjalan</h3>'
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
    console.warn('Could not find match in tentang.html:', r.from.substring(0, 40));
  }
});

fs.writeFileSync('tentang.html', content, 'utf8');
console.log(`Applied ${applied} replacements in tentang.html`);
