const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

const replacements = [
  // Title & Meta
  {
    from: '<title>REKEN – Sistem Informasi &amp; Dashboard Operating System Bisnis Rental Kendaraan</title>',
    to: '<title>REKEN – Aplikasi &amp; Dashboard Operasional Bisnis Rental Kendaraan</title>'
  },
  {
    from: '<meta name="description" content="Software all-in-one manajemen operasional rental kendaraan: monitoring armada real-time, WhatsApp AI CS Copilot 24/7, kalender booking bebas bentrok (Google Calendar Sync), invoice kas dinamis, dan GPS telematika.">',
    to: '<meta name="description" content="Aplikasi lengkap manajemen rental kendaraan: pantau status armada, asisten WhatsApp otomatis 24 jam, kalender bebas bentrok, invoice kas rapi, dan pelacakan GPS armada.">'
  },
  {
    from: '<meta name="keywords" content="software rental mobil, aplikasi manajemen rental, software rental motor, sistem informasi rental, dashboard rental mobil, whatsapp ai copilot rental, g-cal sync rental, reken saas, software armada">',
    to: '<meta name="keywords" content="aplikasi rental mobil, aplikasi rental motor, dashboard rental kendaraan, asisten whatsapp rental, kalender jadwal rental, aplikasi sewa mobil, reken">'
  },
  {
    from: '<meta property="og:title" content="REKEN – Rental Operating System &amp; Dashboard SaaS">',
    to: '<meta property="og:title" content="REKEN – Aplikasi &amp; Dashboard Operasional Rental">'
  },
  {
    from: '<meta property="og:description" content="Satu dashboard terpadu untuk monitoring armada multi-kategori, otomatisasi WhatsApp AI CS 24 jam, kalender booking anti-bentrok, dan pencatatan keuangan kas.">',
    to: '<meta property="og:description" content="Satu dashboard terpadu untuk pantau ketersediaan armada, asisten WhatsApp otomatis 24 jam, kalender jadwal anti-bentrok, dan pembukuan kas rapi.">'
  },
  // Hero description
  {
    from: 'Pantau armada real-time, cegah jadwal bentrok, dan kelola booking otomatis 24 jam untuk tingkatkan profit rental Anda.',
    to: 'Pantau armada langsung, cegah jadwal bentrok, dan kelola pesanan otomatis 24 jam untuk tingkatkan keuntungan rental Anda.'
  },
  // Metrics bar
  {
    from: '<div class="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">Server Uptime</div>',
    to: '<div class="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">Akses Lancar</div>'
  },
  // Phone mockup badge
  {
    from: '<span class="px-2 py-1 rounded-full bg-slate-100 text-slate-600 text-[7px] font-semibold">Motor &amp; Skuter</span>',
    to: '<span class="px-2 py-1 rounded-full bg-slate-100 text-slate-600 text-[7px] font-semibold">Motor</span>'
  },
  // fa-cloud icon
  {
    from: '<i class="fa-solid fa-cloud text-sm"></i>',
    to: '<i class="fa-solid fa-globe text-sm"></i>'
  },
  // Bento intro & cards
  {
    from: 'Poin-poin kendali operasional harian yang dirancang spesifik untuk kecepatan kerja tim: dari monitoring armada, timeline kalender bebas bentrok, kasir &amp; deposit, hingga WhatsApp AI CS.',
    to: 'Poin-poin kendali operasional harian yang dirancang untuk kecepatan kerja tim: dari pantau armada, kalender jadwal bebas bentrok, kasir &amp; deposit, hingga asisten WhatsApp otomatis.'
  },
  {
    from: 'Inventaris &amp; Status Armada Real-Time',
    to: 'Inventaris &amp; Status Armada'
  },
  {
    from: 'Timeline Kalender Gantt Bebas Bentrok',
    to: 'Kalender Jadwal Bebas Bentrok'
  },
  {
    from: 'Pemisahan kantong kas omzet harian vs uang jaminan (deposit) agar tidak terjadi tekor kas saat tamu check-out. Formula tagihan terkunci sistem, cetak invoice PDF, dan manajemen SPJ supir.',
    to: 'Pemisahan kantong kas sewa vs uang jaminan agar tidak tekor saat mobil kembali. Hitungan sewa terkunci otomatis, cetak invoice resmi, dan kelola biaya supir.'
  },
  {
    from: 'WhatsApp AI CS Copilot 24/7',
    to: 'Asisten WhatsApp Otomatis 24 Jam'
  },
  {
    from: 'Respon otomatis pesan calon penyewa dalam 0.8 detik, cek ketersediaan unit real-time, dan susun draf penawaran resmi. Dilengkapi guardrail Kontrol Admin dan filter deteksi dini blacklist.',
    to: 'Balas cepat pesan calon penyewa dalam 1 detik, cek unit yang masih kosong, dan siapkan draf penawaran resmi. Dilengkapi persetujuan admin dan cek daftar blacklist.'
  },
  // Testimonials
  {
    from: '&ldquo;WhatsApp AI Copilot membalas chat sewa 24 jam nonstop, cek ketersediaan armada, dan hitung tarif instan. Konversi booking sewa melonjak drastis.&rdquo;',
    to: '&ldquo;Asisten WhatsApp membalas pesan calon penyewa 24 jam nonstop, cek ketersediaan armada, dan hitung tarif instan. Pesanan masuk jauh lebih cepat.&rdquo;'
  },
  {
    from: '&ldquo;Telematika GPS dan geofencing sangat akurat. Begitu armada keluar batas rute tanpa izin, notifikasi peringatan langsung aktif di dashboard.&rdquo;',
    to: '&ldquo;Pelacak GPS dan batas wilayah sangat akurat. Begitu kendaraan keluar rute tanpa izin, notifikasi peringatan langsung aktif di layar.&rdquo;'
  },
  // FAQ
  {
    from: 'Semua hal yang perlu Anda ketahui sebelum mengadopsi REKEN SaaS untuk bisnis rental Anda.',
    to: 'Semua hal yang perlu Anda ketahui sebelum menggunakan REKEN untuk bisnis rental Anda.'
  },
  {
    from: '<span>Apakah saya perlu instalasi server atau aplikasi berat di komputer?</span>',
    to: '<span>Apakah perlu instalasi atau perangkat khusus?</span>'
  },
  {
    from: '<span>Bagaimana cara kerja WhatsApp AI CS Copilot?</span>',
    to: '<span>Bagaimana cara kerja asisten WhatsApp otomatis?</span>'
  },
  {
    from: 'WhatsApp AI Copilot terhubung langsung ke nomor WhatsApp rental Anda. Saat ada calon penyewa menanyakan ketersediaan armada atau tarif, sistem langsung mengecek jadwal dan menyiapkan balasan yang rapi dalam hitungan detik. Bisa balas otomatis penuh atau dengan persetujuan admin.',
    to: 'Asisten WhatsApp terhubung langsung ke nomor WhatsApp rental Anda. Saat ada calon penyewa menanyakan ketersediaan armada atau tarif, sistem langsung mengecek jadwal dan menyiapkan balasan yang rapi dalam hitungan detik. Bisa balas otomatis penuh atau dengan persetujuan admin.'
  },
  // Footer
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

let appliedCount = 0;
replacements.forEach(rep => {
  // Replace all occurrences (e.g. for testimonials that appear twice)
  let count = 0;
  while (content.includes(rep.from)) {
    content = content.replace(rep.from, rep.to);
    count++;
  }
  if (count > 0) {
    appliedCount += count;
  } else {
    console.warn('Could not find match for:', rep.from.substring(0, 40));
  }
});

fs.writeFileSync('index.html', content, 'utf8');
console.log(`Applied ${appliedCount} replacements in index.html`);
