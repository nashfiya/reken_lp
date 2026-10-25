const fs = require('fs');

let content = fs.readFileSync('fitur.html', 'utf8');

const replacements = [
  // Title & Meta
  {
    from: '<title>Fitur Lengkap Dashboard REKEN – Software Manajemen Rental Kendaraan &amp; AI Copilot</title>',
    to: '<title>Fitur Lengkap Dashboard REKEN – Aplikasi Manajemen Rental Kendaraan</title>'
  },
  {
    from: '<meta name="description" content="Kenali Manajemen Rental, CRM Pelanggan, Fleet Armada, Keuangan, WhatsApp AI Copilot, Dashboard Analytics, Google Calendar Sync, GPS Telematika, dan Laporan Otomatis REKEN.">',
    to: '<meta name="description" content="Kenali Manajemen Rental, Data Pelanggan, Armada, Keuangan, Asisten WhatsApp, Dashboard Bisnis, Kalender Otomatis, Pelacakan GPS, dan Rekap Laporan REKEN.">'
  },
  {
    from: '<meta name="keywords" content="fitur software rental mobil, modul aplikasi rental motor, dashboard armada gps, whatsapp ai copilot rental, g-cal sync rental">',
    to: '<meta name="keywords" content="fitur aplikasi rental mobil, manajemen rental motor, dashboard rental, asisten whatsapp rental, kalender jadwal rental">'
  },
  // Intro
  {
    from: 'REKEN menyatukan Manajemen Rental, Manajemen Customer (CRM), Manajemen Fleet (Armada), Manajemen Keuangan, WhatsApp AI CS Copilot, Dashboard AI &amp; Analytics, Google Calendar Sync, GPS Tracking &amp; IoT Fleet, serta Laporan Otomatis dalam satu dashboard.',
    to: 'REKEN menyatukan Manajemen Booking, Data Pelanggan, Inventaris Armada, Keuangan Kas, Asisten WhatsApp 24 Jam, Ringkasan Bisnis, Kalender Otomatis, Pelacakan GPS, dan Rekap Laporan dalam satu dashboard.'
  },
  // Module 1
  {
    from: 'Visual Booking Timeline Gantt Bebas Bentrok',
    to: 'Visual Jadwal Booking Bebas Bentrok'
  },
  {
    from: 'Timeline Gantt menyatukan jadwal booking dan ketersediaan unit agar tim mudah mengatur operasional. Geser jadwal atau tukar unit saat rencana berubah, dengan perlindungan untuk mencegah pemesanan yang bertabrakan.',
    to: 'Kalender visual menyatukan jadwal booking dan ketersediaan unit agar tim mudah mengatur operasional. Geser jadwal atau tukar unit saat rencana berubah, dengan sistem otomatis yang mencegah jadwal bertabrakan.'
  },
  // Module 2
  {
    from: 'Kelola inventaris mobil dan motor beserta status unit secara real-time. Pengingat STNK dan servis membantu tim merawat armada dan menjaga unit tetap siap digunakan.',
    to: 'Kelola inventaris mobil dan motor beserta status unit secara langsung. Pengingat STNK dan servis berkala membantu tim merawat armada agar selalu siap jalan.'
  },
  {
    from: '<li class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-sky-600"></i> Pantau status kesiapan armada secara real-time</li>',
    to: '<li class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-sky-600"></i> Pantau status kesiapan armada langsung</li>'
  },
  // Module 3
  {
    from: 'Pahami performa bisnis melalui metrik operasional dan tingkat utilitas atau okupansi armada. Insight yang tersaji membantu Anda melihat peluang dan merencanakan pertumbuhan usaha.',
    to: 'Pahami performa bisnis melalui angka operasional dan tingkat pemakaian armada. Ringkasan yang tersaji membantu Anda melihat peluang dan meningkatkan keuntungan sewa.'
  },
  {
    from: '<li class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-amber-600"></i> Pantau tingkat utilitas dan okupansi armada</li>',
    to: '<li class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-amber-600"></i> Pantau tingkat pemakaian unit armada</li>'
  },
  // Module 4 (WhatsApp)
  {
    from: 'Chat WhatsApp AI CS Copilot',
    to: 'Asisten WhatsApp Otomatis 24 Jam'
  },
  // Module 5 (CRM)
  {
    from: 'Database pelanggan terpusat menyimpan histori sewa dan informasi verifikasi KTP/SIM, sehingga tim lebih mudah mengenali pelanggan dan melayani booking dengan percaya diri.',
    to: 'Data pelanggan terpusat menyimpan riwayat sewa dan verifikasi KTP/SIM, sehingga tim lebih mudah mengenali penyewa dan melayani pesanan dengan aman.'
  },
  // Module 6 (Calendar)
  {
    from: '<h3 class="text-base font-bold text-slate-900 font-alt mb-2">Google Calendar Sync</h3>',
    to: '<h3 class="text-base font-bold text-slate-900 font-alt mb-2">Kalender Google Otomatis</h3>'
  },
  // Module 7 (GPS)
  {
    from: '<h3 class="text-base font-bold text-slate-900 font-alt mb-2">GPS Tracking &amp; IoT Fleet</h3>',
    to: '<h3 class="text-base font-bold text-slate-900 font-alt mb-2">Pelacakan GPS Armada</h3>'
  },
  {
    from: 'Pantau lokasi armada secara real-time dan ikuti riwayat rutenya. Pemantauan GPS dan peringatan area membantu melindungi kendaraan dari risiko penggelapan.',
    to: 'Pantau posisi armada langsung dan lihat riwayat perjalanannya. Peringatan batas area membantu menjaga kendaraan dari risiko penyalahgunaan.'
  },
  // Module 8 (Laporan)
  {
    from: 'Buat rekap laba-rugi dan performa armada, lalu ekspor ke CSV atau Excel sekali klik untuk memudahkan evaluasi bisnis.',
    to: 'Buat rekap keuntungan dan performa armada, lalu unduh laporan rapi sekali klik untuk memudahkan evaluasi bisnis.'
  },
  // 7 Garansi Enterprise Vault
  {
    from: 'Sebelum diluncurkan, 10 Aturan Baku Sistem ditanam langsung ke dalam arsitektur software dan database. Bebas halusinasi data, anti salah hitung kas, dan isolasi data mutlak antar-organisasi rental.',
    to: 'Setiap transaksi dan jadwal sewa terlindungi oleh sistem yang ketat. Bebas data ganda, anti salah hitung uang kas, dan data bisnis Anda terpisah aman dari rental lain.'
  },
  {
    from: '<h4 class="text-xs sm:text-sm font-bold text-white font-alt">Zero Double-Booking Guard</h4>',
    to: '<h4 class="text-xs sm:text-sm font-bold text-white font-alt">Bebas Jadwal Bentrok</h4>'
  },
  {
    from: 'Jadwal visual timeline Gantt mengunci unit secara real-time. Tidak ada lagi drama tamu mendarat di bandara namun mobil belum tersedia.',
    to: 'Jadwal visual langsung mengunci unit yang dipesan. Tidak ada lagi drama tamu sudah datang namun kendaraan belum siap.'
  },
  {
    from: '<h4 class="text-xs sm:text-sm font-bold text-white font-alt">Google Calendar Sync 2-Arah</h4>',
    to: '<h4 class="text-xs sm:text-sm font-bold text-white font-alt">Kalender Tim Terhubung</h4>'
  },
  {
    from: '<span>Intervensi Hukum Sistem REKEN: Zero Double-Booking</span>',
    to: '<span>Sistem Otomatis: Bebas Bentrok</span>'
  },
  {
    from: '<h4 class="text-xs sm:text-sm font-bold text-white font-alt">Isolasi Data Multi-Tenant Mutlak</h4>',
    to: '<h4 class="text-xs sm:text-sm font-bold text-white font-alt">Data Terpisah Aman</h4>'
  },
  // Footer
  {
    from: 'Tanpa instalasi rumit, REKEN berbasis cloud untuk membantu mencegah jadwal bentrok, melayani chat WhatsApp sepanjang hari, dan merapikan pembukuan serta invoice armada.',
    to: 'Tanpa instalasi rumit, REKEN siap digunakan untuk mencegah jadwal bentrok, melayani chat WhatsApp 24 jam, dan merapikan pembukuan serta invoice armada.'
  },
  {
    from: 'Sistem Informasi &amp; Operating System Rental Kendaraan',
    to: 'Aplikasi &amp; Dashboard Operasional Rental Kendaraan'
  },
  {
    from: 'Solusi cloud terpadu untuk pengusaha rental mobil, motor, dan bus di seluruh Indonesia.',
    to: 'Solusi terpadu untuk pengusaha rental mobil, motor, dan bus di seluruh Indonesia.'
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
    from: '<li><a href="fitur.html#modul-calendar" class="footer-nav-link">Google Calendar Sync</a></li>',
    to: '<li><a href="fitur.html#modul-calendar" class="footer-nav-link">Kalender Google Otomatis</a></li>'
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
    console.warn('Could not find match in fitur.html:', r.from.substring(0, 40));
  }
});

fs.writeFileSync('fitur.html', content, 'utf8');
console.log(`Applied ${applied} replacements in fitur.html`);
