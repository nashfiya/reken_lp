const fs = require('fs');

// 1. FIX KETENTUAN.HTML
let ketentuan = fs.readFileSync('ketentuan.html', 'utf8');

const repKetentuan = [
  {
    from: '<title>Syarat &amp; Ketentuan Layanan – REKEN Rental SaaS</title>',
    to: '<title>Syarat &amp; Ketentuan Layanan – REKEN</title>'
  },
  {
    from: '<meta name="description" content="Syarat dan ketentuan lisensi penggunaan platform perangkat lunak Software-as-a-Service (SaaS) REKEN untuk manajemen bisnis rental kendaraan.">',
    to: '<meta name="description" content="Syarat dan ketentuan penggunaan aplikasi REKEN untuk manajemen operasional rental kendaraan.">'
  },
  {
    from: '<span class="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold hidden md:inline">Rental SaaS</span>',
    to: '<span class="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold hidden md:inline">Sistem Rental</span>'
  },
  {
    from: '<span>Perjanjian Lisensi SaaS</span>',
    to: '<span>Ketentuan Layanan</span>'
  },
  {
    from: '<strong>Penegasan Batasan Hukum:</strong> REKEN bertindak semata-mata sebagai pengembang dan penyedia teknologi perangkat lunak cloud (B2B SaaS). REKEN <em>BUKAN</em> perusahaan penyedia jasa persewaan mobil, biro transportasi umum, ataupun pihak yang menyewakan kendaraan secara langsung kepada konsumen. Seluruh perjanjian sewa, tarif rental, penagihan deposit jaminan, dan interaksi fisik unit kendaraan adalah tanggung jawab hukum independen antara Mitra Rental dengan pelanggan akhir mereka.',
    to: '<strong>Penegasan Batasan Hukum:</strong> REKEN bertindak semata-mata sebagai pengembang dan penyedia aplikasi sistem manajemen rental kendaraan. REKEN <em>BUKAN</em> perusahaan penyedia jasa persewaan mobil, biro transportasi umum, ataupun pihak yang menyewakan kendaraan secara langsung kepada konsumen. Seluruh perjanjian sewa, tarif rental, penagihan uang jaminan, dan interaksi fisik unit kendaraan adalah tanggung jawab hukum independen antara Mitra Rental dengan pelanggan akhir mereka.'
  },
  {
    from: '<span>Tingkat Ketersediaan Sistem (SLA Uptime)</span>',
    to: '<span>Tingkat Ketersediaan Layanan</span>'
  },
  {
    from: 'REKEN berkomitmen menjaga ketersediaan infrastruktur cloud server dengan target SLA Uptime bulanan sebesar <strong>99.9%</strong>. Pemeliharaan sistem terjadwal (scheduled maintenance) akan diinformasikan sebelumnya melalui saluran dashboard atau WhatsApp mitra dan diupayakan berlangsung pada jam non-sibuk operasional (tengah malam WIB).',
    to: 'REKEN berkomitmen menjaga kestabilan aplikasi dengan target ketersediaan layanan bulanan sebesar <strong>99.9%</strong>. Pemeliharaan sistem berkala akan diinformasikan sebelumnya melalui dashboard atau WhatsApp mitra pada jam tenang operasional (tengah malam WIB).'
  },
  {
    from: 'REKEN menyediakan integrasi resmi dengan WhatsApp Cloud API dan Google Calendar API. Mitra bertanggung jawab memastikan nomor WhatsApp bisnis yang didaftarkan mematuhi Kebijakan Bisnis WhatsApp (WhatsApp Commerce &amp; Business Policy). REKEN tidak bertanggung jawab atas penangguhan nomor WhatsApp yang diakibatkan oleh pelanggaran kebijakan spam yang dilakukan secara sepihak oleh pengguna di luar sistem REKEN.',
    to: 'REKEN menyediakan integrasi resmi dengan layanan WhatsApp dan Kalender Google. Mitra bertanggung jawab memastikan nomor WhatsApp bisnis yang didaftarkan mematuhi ketentuan resmi WhatsApp. REKEN tidak bertanggung jawab atas penangguhan nomor yang diakibatkan oleh aktivitas pesan di luar ketentuan resmi.'
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

let appliedKetentuan = 0;
repKetentuan.forEach(r => {
  let count = 0;
  while (ketentuan.includes(r.from)) {
    ketentuan = ketentuan.replace(r.from, r.to);
    count++;
  }
  if (count > 0) appliedKetentuan += count;
  else console.warn('Could not find match in ketentuan.html:', r.from.substring(0, 40));
});

fs.writeFileSync('ketentuan.html', ketentuan, 'utf8');
console.log(`Applied ${appliedKetentuan} replacements in ketentuan.html`);


// 2. FIX PRIVASI.HTML
let privasi = fs.readFileSync('privasi.html', 'utf8');

const repPrivasi = [
  {
    from: '<title>Kebijakan Privasi &amp; Perlindungan Data – REKEN Rental SaaS</title>',
    to: '<title>Kebijakan Privasi &amp; Perlindungan Data – REKEN</title>'
  },
  {
    from: '<meta name="description" content="Kebijakan Privasi dan standar perlindungan data pengguna platform Software-as-a-Service (SaaS) REKEN sesuai UU Pelindungan Data Pribadi (UU PDP).">',
    to: '<meta name="description" content="Kebijakan Privasi dan standar perlindungan data pengguna aplikasi REKEN sesuai UU Pelindungan Data Pribadi (UU PDP).">'
  },
  {
    from: '<span class="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold hidden md:inline">Rental SaaS</span>',
    to: '<span class="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold hidden md:inline">Sistem Rental</span>'
  },
  {
    from: '<span>Keamanan &amp; Kepatuhan Regulasi</span>',
    to: '<span>Kebijakan Privasi</span>'
  },
  {
    from: 'PT Reken Solusi Nusantara ("REKEN", "Kami") berkomitmen teguh melindungi kerahasiaan dan keamanan data seluruh mitra pemilik rental kendaraan, armada, dan staf yang menggunakan platform perangkat lunak manajemen operasional rental REKEN (selanjutnya disebut "Layanan SaaS"). Kebijakan ini merinci tata kelola pengumpulan, pemrosesan, dan penyimpanan data sesuai dengan Undang-Undang Republik Indonesia No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP).',
    to: 'PT Reken Solusi Nusantara ("REKEN", "Kami") berkomitmen melindungi kerahasiaan dan keamanan data seluruh mitra pemilik rental kendaraan, armada, dan staf yang menggunakan aplikasi manajemen operasional rental REKEN (selanjutnya disebut "Layanan"). Kebijakan ini merinci tata kelola pengumpulan, pemrosesan, dan penyimpanan data sesuai dengan Undang-Undang Republik Indonesia No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP).'
  },
  {
    from: 'Sebagai penyedia Operating System &amp; Dashboard SaaS, data yang Kami proses meliputi:',
    to: 'Sebagai penyedia sistem manajemen dan dashboard operasional rental, data yang Kami proses meliputi:'
  },
  {
    from: '<li><strong>Data Telematika IoT (Bila Diaktifkan Mitra):</strong> Titik koordinat GPS real-time unit kendaraan guna kepentingan proteksi anti-penggelapan armada milik mitra.</li>',
    to: '<li><strong>Pelacakan GPS (Bila Diaktifkan Mitra):</strong> Titik koordinat lokasi kendaraan guna kepentingan keamanan dan perlindungan armada milik mitra.</li>'
  },
  {
    from: '<strong>Prinsip Kedaulatan Data:</strong> Seluruh database pelanggan sewa, riwayat transaksi, dan catatan keuangan rental adalah 100% milik mutlak dari Mitra Bisnis yang bersangkutan. REKEN beroperasi murni sebagai pemroses data (Data Processor) dan <em>TIDAK AKAN PERNAH</em> menjual, membagikan, atau menyewakan database mitra kepada pihak ketiga manapun untuk tujuan pemasaran periklanan eksternal.',
    to: '<strong>Kedaulatan Data:</strong> Seluruh data pelanggan sewa, riwayat transaksi, dan catatan keuangan rental adalah 100% milik mutlak Mitra Rental yang bersangkutan. REKEN tidak akan pernah menjual, membagikan, atau menyewakan data mitra kepada pihak ketiga manapun.'
  },
  {
    from: 'Infrastruktur cloud REKEN menerapkan standar keamanan tingkat perbankan dan industri enterprise:',
    to: 'Sistem REKEN menerapkan standar perlindungan data yang ketat:'
  },
  {
    from: '<li><strong>Enkripsi Transit &amp; At-Rest:</strong> Seluruh komunikasi data dilindungi dengan protokol TLS 1.3 dan penyimpanan basis data terenkripsi AES-256.</li>',
    to: '<li><strong>Perlindungan Data Ganda:</strong> Seluruh pengiriman dan penyimpanan data terlindungi secara aman dengan standar proteksi teruji.</li>'
  },
  {
    from: '<li><strong>Multi-Tenancy Terisolasi:</strong> Setiap database penyewa rental diisolasi secara ketat sehingga tidak ada risiko kebocoran data antar mitra rental yang berbeda.</li>',
    to: '<li><strong>Pemisahan Data Mandiri:</strong> Data setiap rental dipisahkan secara ketat sehingga tidak ada risiko tertukar atau bocor ke pihak lain.</li>'
  },
  {
    from: 'Modul WhatsApp AI CS Copilot dan sinkronisasi Google Calendar bekerja menggunakan API resmi terverifikasi (Official Cloud API). Data pesan tamu hanya diproses oleh model kecerdasan buatan untuk merespons ketersediaan unit dan menyusun draf reservasi sesuai instruksi parameter yang disetujui oleh mitra.',
    to: 'Asisten WhatsApp dan kalender terhubung secara resmi dengan sistem WhatsApp dan Google. Pesan calon penyewa hanya diproses untuk merespons ketersediaan unit dan menyusun draf pesanan sesuai pengaturan yang disetujui mitra.'
  },
  {
    from: 'Mitra berhak untuk meminta salinan ekspor data utuh (dalam format CSV/JSON) atau mengajukan penghapusan akun beserta seluruh data historisnya sewaktu-waktu. Untuk pertanyaan atau koordinasi terkait privasi data, hubungi Tim Data Protection Officer (DPO) Kami melalui email: <strong>legal@reken.id</strong> atau WhatsApp Resmi: <strong>+62 812-3456-7890</strong>.',
    to: 'Mitra berhak meminta salinan data utuh atau mengajukan penghapusan akun beserta seluruh datanya sewaktu-waktu. Untuk pertanyaan seputar privasi data, hubungi tim kami melalui email: <strong>legal@reken.id</strong> atau WhatsApp Resmi: <strong>+62 812-3456-7890</strong>.'
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

let appliedPrivasi = 0;
repPrivasi.forEach(r => {
  let count = 0;
  while (privasi.includes(r.from)) {
    privasi = privasi.replace(r.from, r.to);
    count++;
  }
  if (count > 0) appliedPrivasi += count;
  else console.warn('Could not find match in privasi.html:', r.from.substring(0, 40));
});

fs.writeFileSync('privasi.html', privasi, 'utf8');
console.log(`Applied ${appliedPrivasi} replacements in privasi.html`);
