const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
let content = fs.readFileSync(indexPath, 'utf-8');

// 1. Target Hero Section to update
// From Headline to End of Hero Section
const heroStartMarker = '<!-- Punchy Bold Headline with Inward Motion Animation ("Dari Luar ke Dalam") -->';
const heroEndMarker = '<!-- ========================================================================\r\n         CORE FEATURE HIGHLIGHTS: 4 PILAR KEUNGGULAN REKEN';
const heroEndMarkerLF = '<!-- ========================================================================\n         CORE FEATURE HIGHLIGHTS: 4 PILAR KEUNGGULAN REKEN';

const newHeroContent = `<!-- Punchy Bold Headline with Inward Motion Animation ("Dari Luar ke Dalam") -->
        <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12] max-w-4xl mx-auto font-alt overflow-hidden">
          <span class="hero-animate-top">Kelola Rental Lebih Cepat.</span>
          <span class="hero-animate-bottom mt-1 sm:mt-2 bg-gradient-to-r from-blue-600 via-blue-700 to-sky-600 dark:from-blue-400 dark:via-sky-300 dark:to-indigo-300 bg-clip-text text-transparent">Satu Dashboard Kendali Penuh.</span>
        </h1>

        <!-- Subheadline Description with Inward Slide (Simple, Padat, Jelas) -->
        <p class="hero-animate-desc mt-5 sm:mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Pantau armada real-time, cegah jadwal bentrok, dan kelola booking otomatis 24 jam untuk tingkatkan profit rental Anda.
        </p>

        <!-- Dual CTA Buttons (Clean QuotaRing Style: Max 2 Words) -->
        <div class="hero-animate-cta mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3.5">
          <a href="kontak.html" class="btn-primary-hero" id="hero-cta-demo">
            Coba Demo
          </a>
          <a href="#fitur-utama" class="btn-secondary-hero" id="hero-cta-features">
            Lihat Fitur
          </a>
        </div>

        <!-- Micro Trust Row (Max 2 Words per Badge) -->
        <div class="hero-animate-trust mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
          <span class="inline-flex items-center gap-1.5">
            <i class="fa-solid fa-check text-[11px] text-blue-600"></i>
            <span>Demo Gratis</span>
          </span>
          <span class="inline-flex items-center gap-1.5">
            <i class="fa-solid fa-check text-[11px] text-blue-600"></i>
            <span>Siap Pakai</span>
          </span>
          <span class="inline-flex items-center gap-1.5">
            <i class="fa-solid fa-check text-[11px] text-blue-600"></i>
            <span>Akses Instan</span>
          </span>
        </div>

        <!-- ====================================================================
             LAPTOP SHOWCASE WITH AUTO CAROUSEL (Image 4 QuotaRing Style)
             ==================================================================== -->
        <div class="relative mt-12 sm:mt-16 max-w-5xl lg:max-w-6xl mx-auto text-left">

          <h2 class="sr-only">Preview Dashboard Operasional REKEN</h2>

          <!-- Laptop Shell: dashboard grows from 82% to 100% as it scrolls into view -->
          <div class="reveal-on-scroll laptop-reveal">
            <!-- Screen bezel -->
            <div class="laptop-screen">
              <!-- Browser Shell Frame Container -->
              <div class="dark-contrast-frame text-white bg-slate-950 p-2.5 sm:p-4 rounded-xl relative overflow-hidden">

                <!-- Window Topbar with dynamic URL & minimalist dot controls (No Badges) -->
                <div class="w-full bg-[#0b1329] px-4 py-2.5 rounded-t-lg border-b border-slate-800 flex items-center justify-between text-xs mb-1">
                  <div class="flex items-center gap-1.5">
                    <span class="w-3 h-3 rounded-full bg-rose-500"></span>
                    <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                    <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                  </div>
                  <div class="flex items-center gap-2 px-4 py-1 rounded-lg bg-slate-900 text-[11px] text-slate-300 font-mono">
                    <i class="fa-solid fa-lock text-[10px] text-emerald-400"></i>
                    <span id="laptop-carousel-url">reken.id/armada</span>
                  </div>
                  <!-- Minimalist slide indicator / controls -->
                  <div class="flex items-center gap-1.5" id="laptop-carousel-dots">
                    <button type="button" class="laptop-dot w-2 h-2 rounded-full bg-sky-400 active transition-all duration-300" data-slide="0" aria-label="Slide 1"></button>
                    <button type="button" class="laptop-dot w-2 h-2 rounded-full bg-slate-600 hover:bg-slate-500 transition-all duration-300" data-slide="1" aria-label="Slide 2"></button>
                    <button type="button" class="laptop-dot w-2 h-2 rounded-full bg-slate-600 hover:bg-slate-500 transition-all duration-300" data-slide="2" aria-label="Slide 3"></button>
                    <button type="button" class="laptop-dot w-2 h-2 rounded-full bg-slate-600 hover:bg-slate-500 transition-all duration-300" data-slide="3" aria-label="Slide 4"></button>
                  </div>
                </div>

                <!-- Dynamic Screenshot Carousel Container -->
                <div class="relative rounded-b-2xl overflow-hidden bg-slate-950 aspect-[16/10] sm:aspect-[16/9.5] select-none group" id="laptop-carousel">
                  <!-- Slide 1: Fleet -->
                  <div class="laptop-slide active absolute inset-0 transition-all duration-700 ease-out opacity-100 z-10" data-url="reken.id/armada">
                    <img src="src/images/dashboard-fleet.jpg" alt="Dashboard Armada REKEN" class="w-full h-full object-cover object-top" loading="eager">
                  </div>
                  <!-- Slide 2: Calendar -->
                  <div class="laptop-slide absolute inset-0 transition-all duration-700 ease-out opacity-0 z-0 pointer-events-none" data-url="reken.id/kalender">
                    <img src="src/images/dashboard-calendar.jpg" alt="Kalender Jadwal REKEN" class="w-full h-full object-cover object-top" loading="lazy">
                  </div>
                  <!-- Slide 3: Booking & Invoice -->
                  <div class="laptop-slide absolute inset-0 transition-all duration-700 ease-out opacity-0 z-0 pointer-events-none" data-url="reken.id/invoice">
                    <img src="src/images/dashboard-booking-modal.jpg" alt="Invoice & Kas REKEN" class="w-full h-full object-cover object-top" loading="lazy">
                  </div>
                  <!-- Slide 4: Vehicle Detail & Service -->
                  <div class="laptop-slide absolute inset-0 transition-all duration-700 ease-out opacity-0 z-0 pointer-events-none" data-url="reken.id/servis">
                    <img src="src/images/dashboard-vehicle-detail.jpg" alt="Detail Unit & Servis REKEN" class="w-full h-full object-cover object-top" loading="lazy">
                  </div>

                  <!-- Navigation Arrow Overlay (subtle on hover) -->
                  <button type="button" id="laptop-prev-btn" class="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-slate-700/60" aria-label="Previous">
                    <i class="fa-solid fa-chevron-left text-xs"></i>
                  </button>
                  <button type="button" id="laptop-next-btn" class="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-slate-700/60" aria-label="Next">
                    <i class="fa-solid fa-chevron-right text-xs"></i>
                  </button>
                </div>

              </div>
            </div>

            <!-- Laptop Base -->
            <div class="laptop-base" aria-hidden="true"></div>
          </div>

        </div>

        <!-- Social Proof Metrics Bar with Count-Up Animation (Under Laptop) -->
        <div class="mt-14 sm:mt-18 pt-8 border-t border-slate-200/80 dark:border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center tabular-nums">
          <div class="p-3">
            <div class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-alt" data-stat-target="100" data-stat-suffix="+">100+</div>
            <div class="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">Rental Terhubung</div>
          </div>
          <div class="p-3">
            <div class="text-2xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400 font-alt" data-stat-target="12000" data-stat-suffix="+" data-stat-thousand="true">12.000+</div>
            <div class="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">Transaksi Diproses</div>
          </div>
          <div class="p-3">
            <div class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-alt" data-stat-target="99.9" data-stat-suffix="%" data-stat-decimals="1">99.9%</div>
            <div class="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">Server Uptime</div>
          </div>
          <div class="p-3">
            <div class="text-2xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 font-alt" data-stat-target="0" data-stat-suffix="%">0%</div>
            <div class="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">Bentrok Jadwal</div>
          </div>
        </div>

      </div>

    </section>

`;

const startIdx = content.indexOf(heroStartMarker);
if (startIdx === -1) {
  console.error('heroStartMarker not found');
  process.exit(1);
}

let endIdx = content.indexOf('<!-- ========================================================================\r\n         CORE FEATURE HIGHLIGHTS');
if (endIdx === -1) {
  endIdx = content.indexOf('<!-- ========================================================================\n         CORE FEATURE HIGHLIGHTS');
}
if (endIdx === -1) {
  console.error('heroEndMarker not found');
  process.exit(1);
}

content = content.substring(0, startIdx) + newHeroContent + '\n    ' + content.substring(endIdx);
console.log('Hero section updated successfully');

// 2. Target Testimonial Track
const singleCardTemplate = (author, roleCompany, quote, initials) => `
            <!-- Card: ${author} (${roleCompany}) -->
            <div class="review-marquee-card w-[320px] sm:w-[380px] shrink-0 p-6 sm:p-7 flex flex-col justify-between rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-sky-500/50 hover:bg-slate-900 transition-all select-none">
              <div>
                <p class="text-slate-200 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  &ldquo;${quote}&rdquo;
                </p>
              </div>

              <!-- Author Info (Clean, No badges, No regions/unit clutter) -->
              <div class="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                <div class="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 text-sky-400 font-bold text-xs flex items-center justify-center shrink-0">
                  ${initials}
                </div>
                <div>
                  <div class="text-xs sm:text-sm font-bold text-white">${author}</div>
                  <div class="text-[11px] text-slate-400">${roleCompany}</div>
                </div>
              </div>
            </div>`;

const cardsData = [
  {
    author: 'Hendra Kusuma',
    roleCompany: 'Dewata Transport',
    quote: 'Sebelum pakai REKEN, jadwal booking rawan bentrok saat peak season. Sekarang seluruh jadwal terpantau live dan tersinkron ke Google Calendar driver. Nol bentrok jadwal!',
    initials: 'HK'
  },
  {
    author: 'Dian Permatasari',
    roleCompany: 'Jogja Auto Fleet',
    quote: 'WhatsApp AI Copilot membalas chat sewa 24 jam nonstop, cek ketersediaan armada, dan hitung tarif instan. Konversi booking sewa melonjak drastis.',
    initials: 'DP'
  },
  {
    author: 'Budi Santoso',
    roleCompany: 'Surabaya Armada Raya',
    quote: 'Pencatatan deposit, DP, dan overtime sewa terhitung otomatis dengan kwitansi ber-QR code. Arus kas garasi selalu rapi dan transparan.',
    initials: 'BS'
  },
  {
    author: 'Rahmat Siregar',
    roleCompany: 'Raja Rental',
    quote: 'Telematika GPS dan geofencing sangat akurat. Begitu armada keluar batas rute tanpa izin, notifikasi peringatan langsung aktif di dashboard.',
    initials: 'RS'
  },
  {
    author: 'Yudi Pratama',
    roleCompany: 'Bandung Tour & Travel',
    quote: 'Surat tugas dan jadwal sewa otomatis masuk ke kalender smartphone supir. Penjemputan tamu rombongan selalu tepat waktu tanpa salah jadwal.',
    initials: 'YP'
  },
  {
    author: 'Maria Fernandez',
    roleCompany: 'Komodo Island Wheels',
    quote: 'Checklist digital serah-terima unit lengkap dengan foto kondisi kendaraan beres dalam 2 menit. Bukti visual tersimpan aman bebas sengketa deposit.',
    initials: 'MF'
  },
  {
    author: 'Kevin Tanuwidjaja',
    roleCompany: 'Batavia Executive Fleet',
    quote: 'Laporan utilisasi armada, riwayat servis, dan laba bersih per kendaraan tersaji otomatis. Rekap bulanan untuk owner tinggal ekspor ke Excel satu klik.',
    initials: 'KT'
  }
];

const set1Cards = cardsData.map(c => singleCardTemplate(c.author, c.roleCompany, c.quote, c.initials)).join('\n');
const set2Cards = cardsData.map(c => singleCardTemplate(c.author, c.roleCompany, c.quote, c.initials)).join('\n');

const newMarqueeTrack = `<div class="testimonials-marquee-track flex gap-5 w-max">
          <!-- Set 1 (Cards 1 to 7) -->
${set1Cards}

          <!-- Set 2 (Duplicate for Seamless Infinite Loop) -->
${set2Cards}
        </div>`;

const marqueeStartMarker = '<div class="testimonials-marquee-track flex gap-5 w-max">';
const marqueeEndMarker = '<!-- ========================================================================\r\n         FAQ SECTION: PERTANYAAN UMUM';
const marqueeEndMarkerLF = '<!-- ========================================================================\n         FAQ SECTION: PERTANYAAN UMUM';

const mStartIdx = content.indexOf(marqueeStartMarker);
if (mStartIdx === -1) {
  console.error('marqueeStartMarker not found');
  process.exit(1);
}

let mEndIdx = content.indexOf(marqueeEndMarker);
if (mEndIdx === -1) {
  mEndIdx = content.indexOf(marqueeEndMarkerLF);
}
if (mEndIdx === -1) {
  console.error('marqueeEndMarker not found');
  process.exit(1);
}

// Check where the section closes before FAQ
const sectionClose = content.lastIndexOf('</section>', mEndIdx);
if (sectionClose === -1 || sectionClose < mStartIdx) {
  console.error('sectionClose before FAQ not found');
  process.exit(1);
}

// Find wrapper closing tag before sectionClose
const wrapperClose = content.lastIndexOf('</div>', sectionClose);
const innerContentBeforeWrapperClose = content.substring(mStartIdx, wrapperClose);

content = content.substring(0, mStartIdx) + newMarqueeTrack + '\n      </div>\n\n    </section>\n\n    ' + content.substring(mEndIdx);
console.log('Testimonials section updated successfully');

fs.writeFileSync(indexPath, content, 'utf-8');
console.log('Successfully updated index.html');
