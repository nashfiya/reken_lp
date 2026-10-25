const fs = require('fs');
const path = require('path');

// 1. Process index.html
const indexPath = path.join(__dirname, '..', 'index.html');
let content = fs.readFileSync(indexPath, 'utf-8');

const replacements = [
  // 4 Kotak Fitur
  [
    'Monitoring status ketersediaan unit real-time: siap sewa, sedang jalan, servis bengkel, atau mitra B2B. Utilitas dan riwayat unit terpantau transparan.',
    'Pantau ketersediaan kendaraan setiap saat: siap jalan, disewa, masuk bengkel, atau kerjasama mitra. Riwayat unit selalu tercatat rapi.'
  ],
  [
    'Sinkronisasi jadwal sewa dua arah otomatis ke Google Calendar tim. Peringatan bentrok jadwal instan dan pengingat serah-terima unit tepat waktu.',
    'Jadwal sewa otomatis terhubung ke kalender HP tim. Peringatan bentrok jadwal langsung aktif dan serah-terima unit selalu tepat waktu.'
  ],
  [
    'Kalkulasi tarif sewa lepas kunci dan all-in supir otomatis. Lacak uang muka (DP), deposit jaminan, dan rekap arus kas harian tanpa selisih.',
    'Hitung tarif sewa lepas kunci dan supir otomatis. Catat uang muka (DP), titipan jaminan, dan laporan kas harian tanpa selisih.'
  ],
  [
    '<h3 class="text-xl font-bold text-slate-900 mb-2.5 font-alt">Alert Jatuh Tempo</h3>',
    '<h3 class="text-xl font-bold text-slate-900 mb-2.5 font-alt">Pengingat Servis</h3>'
  ],
  [
    'Pengingat otomatis jatuh tempo masa berlaku STNK, uji KIR, polis asuransi, dan jadwal servis berkala. Jaga performa aset armada selalu prima.',
    'Pengingat otomatis masa berlaku STNK, uji KIR, asuransi, dan jadwal ganti oli. Kendaraan selalu siap jalan dan terawat.'
  ],

  // Masalah vs Solusi
  [
    '<span>CARA MANUAL / EXCEL LAMA</span>',
    '<span>Cara Manual</span>'
  ],
  [
    '<span>SOLUSI TERPADU REKEN SAAS</span>',
    '<span>Sistem REKEN</span>'
  ],
  [
    '<strong>Google Calendar Sync Dua Arah:</strong> Jadwal booking tersinkron otomatis ke kalender seluruh tim operasional dan supir. 0 bentrok.',
    '<strong>Kalender Tim Otomatis:</strong> Jadwal sewa langsung masuk ke kalender HP pengemudi dan admin garasi. Bebas bentrok.'
  ],
  [
    '<strong>WhatsApp AI CS Copilot 24 Jam:</strong> Membalas ketersediaan unit sewa detik itu juga, membaca database armada real-time.',
    '<strong>Balas Chat 24 Jam:</strong> Asisten pintar membalas chat sewa instan, mengecek ketersediaan mobil, dan menghitung tarif.'
  ],
  [
    '<strong>Kalkulasi Invoice &amp; Deposit Rapi:</strong> Semua rincian sewa, DP, pelunasan kas, dan security deposit tercatat dalam invoice digital.',
    '<strong>Invoice &amp; Uang Jaminan:</strong> Rincian tarif sewa, uang muka (DP), pelunasan, dan titipan jaminan tercatat otomatis dalam nota digital.'
  ],
  [
    '<strong>Early Warning STNK &amp; Status Bengkel:</strong> Pengingat otomatis H-14 masa berlaku STNK dan jadwal servis oli teratur.',
    '<strong>Pengingat STNK &amp; Servis:</strong> Notifikasi otomatis sebelum masa berlaku STNK habis dan jadwal ganti oli rutin.'
  ],
  [
    '<span>Efisiensi Operasional 70% &amp; Omset Maksimal</span>',
    '<span>Operasional Rapi, Laba Naik</span>'
  ],

  // Trio Phone Mockup 4 Kolom
  [
    '<h3 class="text-lg font-bold text-slate-900 font-alt">Semua modul di HP</h3>',
    '<h3 class="text-lg font-bold text-slate-900 font-alt">Kendali di HP</h3>'
  ],
  [
    '<p class="mt-1.5 text-slate-600 text-xs sm:text-sm leading-relaxed">Dasbor yang sama dengan versi laptop: booking, armada, kas, dan legalitas terbuka penuh lewat browser.</p>',
    '<p class="mt-1.5 text-slate-600 text-xs sm:text-sm leading-relaxed">Pantau booking, armada, kas, dan jadwal supir langsung lewat layar ponsel Anda.</p>'
  ],
  [
    '<h3 class="text-lg font-bold text-slate-900 font-alt">Alert real-time</h3>',
    '<h3 class="text-lg font-bold text-slate-900 font-alt">Notifikasi Otomatis</h3>'
  ],
  [
    '<p class="mt-1.5 text-slate-600 text-xs sm:text-sm leading-relaxed">Booking baru, unit kembali, dan kas masuk muncul detik itu juga dengan peringatan anti-bentrok.</p>',
    '<p class="mt-1.5 text-slate-600 text-xs sm:text-sm leading-relaxed">Booking baru, mobil kembali, dan uang masuk langsung ada notifikasi dengan peringatan anti-bentrok.</p>'
  ],
  [
    '<h3 class="text-lg font-bold text-slate-900 font-alt">Bebas instalasi</h3>',
    '<h3 class="text-lg font-bold text-slate-900 font-alt">Akses Praktis</h3>'
  ],
  [
    '<p class="mt-1.5 text-slate-600 text-xs sm:text-sm leading-relaxed">Tidak perlu app store atau server. Tambahkan ke layar utama HP sebagai PWA dan langsung pakai.</p>',
    '<p class="mt-1.5 text-slate-600 text-xs sm:text-sm leading-relaxed">Buka langsung dari browser HP Anda kapan saja tanpa repot, praktis untuk owner dan tim garasi.</p>'
  ],
  [
    '<h3 class="text-lg font-bold text-slate-900 font-alt">Laporan dalam genggaman</h3>',
    '<h3 class="text-lg font-bold text-slate-900 font-alt">Laporan Praktis</h3>'
  ],
  [
    '<p class="mt-1.5 text-slate-600 text-xs sm:text-sm leading-relaxed">Rekap mingguan dan bulanan bisa dibuka dari HP, lalu diekspor PDF/CSV untuk pembukuan.</p>',
    '<p class="mt-1.5 text-slate-600 text-xs sm:text-sm leading-relaxed">Rekap keuangan mingguan dan bulanan tersaji rapi, siap diekspor ke Excel satu klik.</p>'
  ],

  // Pusat Kendali Bento 4 Panel Chips
  [
    '10 Status Unit',
    'Status Armada'
  ],
  [
    'STNK H-14 Alert',
    'Pengingat STNK'
  ],
  [
    'Buku Servis Odometer',
    'Histori Servis'
  ],
  [
    'Zero Double-Booking',
    'Bebas Bentrok'
  ],
  [
    'Drag &amp; Drop Unit',
    'Geser Jadwal'
  ],
  [
    'Google Calendar 2-Way',
    'Kalender Otomatis'
  ],
  [
    'Kas Omzet vs Deposit',
    'Kas Terpisah'
  ],
  [
    'SPJ Driver &amp; Kasbon',
    'Biaya Supir'
  ],
  [
    'Invoice PDF / WA',
    'Invoice Otomatis'
  ],
  [
    'Respon 0.8 Detik',
    'Respon Cepat'
  ],
  [
    'Human-in-the-Loop',
    'Kontrol Admin'
  ],
  [
    'Blacklist Shield',
    'Deteksi Blacklist'
  ],
  [
    'Lihat bedah teknis lengkap, komparasi fitur, dan arsitektur operasional di halaman fitur.',
    'Lihat rincian lengkap 9 modul dan kemudahan operasional di halaman fitur.'
  ],

  // 4 Langkah Onboarding
  [
    'Tanpa instalasi server yang rumit. Dashboard berbasis cloud siap digunakan oleh seluruh staf admin, mekanik garasi, dan supir dalam hitungan menit.',
    'Mudah dan langsung pakai. Sistem siap digunakan oleh seluruh admin, tim garasi, dan supir dalam hitungan menit.'
  ],
  [
    '<span>Setup Kilat &lt; 5 Menit</span>',
    '<span>Setup Cepat</span>'
  ],

  // Live Simulator Card
  [
    '<span>Live Dispatch Simulator</span>',
    '<span>Simulasi Otomatis</span>'
  ],
  [
    '<span class="text-[10px] text-sky-400 font-mono bg-sky-950 px-2 py-0.5 rounded">AI CS Engine</span>',
    '<span class="text-[10px] text-sky-400 font-mono bg-sky-950 px-2 py-0.5 rounded">Asisten WhatsApp</span>'
  ],
  [
    '<span id="sim-unit-status" class="text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full">\n                Ready\n              </span>',
    '<span id="sim-unit-status" class="text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full">\n                Tersedia\n              </span>'
  ],
  [
    '<span class="font-semibold text-emerald-400"><i class="fa-brands fa-whatsapp mr-1"></i>Calon Penyewa (Jakarta)</span>',
    '<span class="font-semibold text-emerald-400"><i class="fa-brands fa-whatsapp mr-1"></i>Calon Penyewa</span>'
  ],
  [
    '<span class="text-[11px] text-blue-300 font-mono">AI CS menganalisis ketersediaan...</span>',
    '<span class="text-[11px] text-blue-300 font-mono">Cek ketersediaan mobil...</span>'
  ],
  [
    '<i class="fa-solid fa-wand-magic-sparkles"></i> Draf AI CS Copilot',
    '<i class="fa-solid fa-wand-magic-sparkles"></i> Balasan Otomatis'
  ],
  [
    '<span>G-Cal Auto Lock</span>',
    '<span>Kunci Jadwal</span>'
  ],
  [
    '<span>Invoice PDF Ready</span>',
    '<span>Invoice Siap</span>'
  ],

  // FAQ
  [
    'Tidak sama sekali. REKEN 100% berbasis cloud (Web SaaS). Anda cukup membukanya lewat browser laptop, tablet, atau smartphone Anda kapan saja dan di mana saja tanpa repot mengelola server sendiri.',
    'Tidak perlu. REKEN langsung dibuka lewat browser di laptop, tablet, atau smartphone Anda kapan saja. Sangat praktis tanpa perlu unduh aplikasi berat.'
  ],
  [
    'WhatsApp AI Copilot terhubung langsung dengan nomor resmi bisnis rental Anda. Ketika calon penyewa menanyakan ketersediaan mobil atau tarif, AI secara instan memeriksa database armada Anda dan menyiapkan draf balasan terformat rapi. Anda dapat mengaktifkan mode otomatis penuh atau mode persetujuan draf 1-klik oleh admin.',
    'WhatsApp AI Copilot terhubung langsung ke nomor WhatsApp rental Anda. Saat ada calon penyewa menanyakan ketersediaan armada atau tarif, sistem langsung mengecek jadwal dan menyiapkan balasan yang rapi dalam hitungan detik. Bisa balas otomatis penuh atau dengan persetujuan admin.'
  ],
  [
    'Sangat aman. Setiap akun rental diisolasi dengan enkripsi tingkat enterprise (AES-256). Data pelanggan, KTP, nomor telepon, dan pembukuan kas Anda sepenuhnya milik Anda dan tidak pernah dibagikan kepada pihak ketiga.',
    'Sangat aman dengan proteksi data ganda. Seluruh data pelanggan, foto KTP, nomor kontak, dan pembukuan kas sepenuhnya milik Anda dan terjamin kerahasiaannya.'
  ],
  [
    'Tim technical onboarding REKEN siap membantu proses migrasi data armada, daftar harga, dan data pelanggan lama Anda dari format Excel atau CSV ke dalam sistem REKEN tanpa biaya tambahan.',
    'Tim REKEN siap membantu memindahkan seluruh data mobil, daftar harga, dan data pelanggan lama Anda dari Excel ke dalam sistem secara gratis.'
  ],
  [
    'Ya! Kami menyediakan sesi live demo interaktif 1-on-1 selama 15 menit bersama product specialist REKEN. Anda dapat menjadwalkannya langsung di halaman Kontak atau WhatsApp kami.',
    'Ya, ada demo gratis bersama tim REKEN untuk melihat langsung cara kerja sistem di rental Anda. Jadwalkan langsung lewat WhatsApp atau halaman Kontak.'
  ],

  // Footer CTA
  [
    'Tanpa instalasi rumit, 100% berbasis cloud. Eliminasi jadwal bentrok, percepat respon WhatsApp AI 24/7, dan otomatisasi pembukuan kas serta invoice armada.',
    'Semua operasional rental jadi rapi. Bebas bentrok jadwal, balas chat WhatsApp otomatis 24 jam, dan laporan kas tercatat presisi.'
  ]
];

for (const [target, replacement] of replacements) {
  if (content.includes(target)) {
    content = content.replace(target, replacement);
  } else {
    // try normalized LF
    const normTarget = target.replace(/\r\n/g, '\n');
    const normContent = content.replace(/\r\n/g, '\n');
    if (normContent.includes(normTarget)) {
      content = normContent.replace(normTarget, replacement);
    } else {
      console.warn('Warning: target not found:', target.substring(0, 40));
    }
  }
}

fs.writeFileSync(indexPath, content, 'utf-8');
console.log('Successfully cleaned technical terms in index.html');

// 2. Process script.js
const scriptPath = path.join(__dirname, '..', 'src', 'script.js');
let scriptContent = fs.readFileSync(scriptPath, 'utf-8');

scriptContent = scriptContent.replace(
  "route: 'Sinkronisasi WhatsApp Instances & Auto-Draft AI',",
  "route: 'Otomatisasi Balas Chat WhatsApp',"
);

scriptContent = scriptContent.replace(
  "route: 'Integrasi Google Calendar 2-Way Sync',",
  "route: 'Kalender Tim Terhubung Otomatis',"
);

scriptContent = scriptContent.replace(
  "route: 'Manajemen Keuangan Kas & Analitik Utilisasi',",
  "route: 'Laporan Kas & Pemakaian Unit',"
);

fs.writeFileSync(scriptPath, scriptContent, 'utf-8');
console.log('Successfully cleaned technical terms in script.js');
