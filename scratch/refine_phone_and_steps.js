const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

// Replace the whole section 943-1080 with perfectly proportioned and dark-mode ready layout
const oldSectionRegex = /<!-- =+[\s\S]*?WORKFLOW ONBOARDING CEPAT: 4 LANGKAH ADOPSI SISTEM[\s\S]*?<!-- =+[\s\S]*?DEEP OBSIDIAN BOTTOM SECTION/i;

const newSection = `<!-- ========================================================================
         WORKFLOW ONBOARDING CEPAT: 4 LANGKAH ADOPSI SISTEM
         ======================================================================== -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 section-reveal">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center reveal-stagger-parent">

        <!-- Left: Steps Description -->
        <div class="lg:col-span-7 reveal-on-scroll">
          <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-alt mb-4">
            Modernisasi Bisnis Rental Anda dalam 4 Langkah
          </h2>
          <p class="text-slate-600 dark:text-slate-400 text-sm sm:text-base mb-8">
            Mudah dan langsung pakai. Sistem siap digunakan oleh seluruh admin, tim garasi, dan supir dalam hitungan menit.
          </p>

          <!-- Dynamic Step Card -->
          <div class="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm mb-6 min-h-[190px] flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span id="step-number" class="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest font-mono">STEP 01</span>
                <span class="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Setup Cepat</span>
                </span>
              </div>
              <h3 id="step-title" class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 font-alt">
                Daftarkan Inventaris Armada &amp; Tarif Sewa
              </h3>
              <p id="step-desc" class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Input data mobil, motor, minivan tour, dan kendaraan listrik. Atur nomor plat, kategori transmisi, garasi pool, serta tarif lepas kunci maupun dengan supir.
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span id="step-preview-route">Setup Multi-Armada &amp; Manajemen Garasi Pool</span>
              <span id="step-preview-fleet" class="text-blue-600 dark:text-blue-400 font-semibold">10 Unit Siap Jalan (Mobil, Motor, HiAce, EV)</span>
            </div>
          </div>

          <!-- Step Switcher Buttons -->
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2" aria-label="Step indicator">
              <span class="step-dot active" aria-hidden="true"></span>
              <span class="step-dot" aria-hidden="true"></span>
              <span class="step-dot" aria-hidden="true"></span>
              <span class="step-dot" aria-hidden="true"></span>
            </div>
            <div class="flex items-center gap-3">
              <button type="button" id="step-prev-btn" class="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center transition-colors shadow-sm" aria-label="Step Sebelumnya">
                <i class="fa-solid fa-arrow-left text-xs"></i>
              </button>
              <button type="button" id="step-next-btn" class="w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center transition-colors shadow-md shadow-blue-500/20" aria-label="Step Selanjutnya">
                <i class="fa-solid fa-arrow-right text-xs"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Right: Mobile Phone Preview (WhatsApp Simulator) -->
        <div class="lg:col-span-5 flex justify-center items-center reveal-on-scroll">
          
          <!-- Smartphone Outer Chassis -->
          <div class="relative w-full max-w-[325px] sm:max-w-[340px]">
            
            <!-- Side Hardware Buttons -->
            <div class="absolute -left-[6px] top-20 w-[4px] h-8 bg-slate-700/70 rounded-l-sm" aria-hidden="true"></div>
            <div class="absolute -left-[6px] top-30 w-[4px] h-8 bg-slate-700/70 rounded-l-sm" aria-hidden="true"></div>
            <div class="absolute -right-[6px] top-24 w-[4px] h-12 bg-slate-700/70 rounded-r-sm" aria-hidden="true"></div>

            <!-- Phone Frame -->
            <div class="relative rounded-[2.75rem] p-2.5 sm:p-3 bg-slate-950 border-[5px] sm:border-[6px] border-slate-800 shadow-2xl shadow-blue-950/40 ring-1 ring-white/10">
              
              <!-- Phone Inner Screen Container -->
              <div id="live-dispatch-simulator" class="rounded-[2.15rem] overflow-hidden bg-slate-900 text-white border border-slate-800 flex flex-col justify-between">
                
                <!-- Phone Top Bar: Status Bar + Dynamic Island -->
                <div class="pt-2 px-4 pb-2 bg-slate-950/90 border-b border-slate-800/60">
                  <div class="flex items-center justify-between text-[10px] font-semibold text-slate-300">
                    <span class="font-mono">09:41</span>
                    <!-- Dynamic Island Cutout -->
                    <div class="w-18 h-3.5 bg-black rounded-full flex items-center justify-center gap-1.5 px-2">
                      <span class="w-1.5 h-1.5 rounded-full bg-slate-900 border border-slate-800"></span>
                      <span class="w-1 h-1 rounded-full bg-blue-500/50"></span>
                    </div>
                    <div class="flex items-center gap-1 text-[9px] text-slate-400">
                      <i class="fa-solid fa-signal"></i>
                      <i class="fa-solid fa-wifi"></i>
                      <i class="fa-solid fa-battery-full text-slate-200"></i>
                    </div>
                  </div>

                  <!-- WhatsApp Chat App Topbar -->
                  <div class="flex items-center justify-between mt-2 pt-1.5 border-t border-slate-800/40">
                    <div class="flex items-center gap-2">
                      <div class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-xs">
                        <i class="fa-brands fa-whatsapp text-xs"></i>
                      </div>
                      <div>
                        <div class="text-[11px] font-bold text-white flex items-center gap-1">
                          <span>Asisten REKEN</span>
                          <i class="fa-solid fa-circle-check text-sky-400 text-[9px]"></i>
                        </div>
                        <span class="text-[8px] text-emerald-400 flex items-center gap-1">
                          <span class="w-1 h-1 rounded-full bg-emerald-400 animate-pulse"></span> Online 24 Jam
                        </span>
                      </div>
                    </div>
                    <span class="text-[9px] text-slate-400 font-mono bg-slate-800 px-2 py-0.5 rounded-full">Otomatis</span>
                  </div>
                </div>

                <!-- Phone Screen Body -->
                <div class="p-3.5 space-y-2.5">
                  
                  <!-- Unit Status Card Inside Phone -->
                  <div class="p-2.5 rounded-xl bg-slate-800/90 border border-slate-700/60 flex items-center justify-between text-slate-100">
                    <div class="flex items-center gap-2">
                      <div class="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs shrink-0">
                        <i class="fa-solid fa-car"></i>
                      </div>
                      <div class="min-w-0">
                        <div class="text-[11px] font-bold text-white truncate">Toyota Innova Zenix</div>
                        <div class="text-[9px] text-slate-300">Matic Hybrid &middot; 7 Kursi</div>
                      </div>
                    </div>
                    <span id="sim-unit-status" class="shrink-0 text-[9px] font-semibold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full">
                      Tersedia
                    </span>
                  </div>

                  <!-- Incoming & Outgoing WhatsApp Bubbles -->
                  <div class="space-y-2 min-h-[125px] flex flex-col justify-end text-xs">
                    <!-- User Message Bubble -->
                    <div id="sim-bubble-user" class="sim-bubble p-2 sm:p-2.5 rounded-2xl rounded-tl-sm bg-slate-800 text-slate-200 max-w-[92%] border border-slate-700/50">
                      <div class="flex items-center justify-between text-[9px] text-slate-400 mb-0.5">
                        <span class="font-semibold text-emerald-400"><i class="fa-brands fa-whatsapp mr-1"></i>Calon Penyewa</span>
                        <span>23:14</span>
                      </div>
                      <p class="text-[10px] leading-relaxed">
                        "Halo kak, mau sewa Zenix lepas kunci tanggal 24–26 Oktober ready nggak ya? Total berapa?"
                      </p>
                    </div>

                    <!-- Typing Indicator -->
                    <div id="sim-bubble-typing" class="hidden sim-bubble p-1.5 rounded-2xl rounded-tr-sm bg-blue-950/90 ml-auto max-w-[85%] text-slate-300 flex items-center gap-1.5 border border-blue-800/40">
                      <i class="fa-solid fa-circle-notch fa-spin text-blue-400 text-[10px]"></i>
                      <span class="text-[9px] text-blue-300 font-mono">Cek ketersediaan mobil...</span>
                    </div>

                    <!-- Auto Response Bubble -->
                    <div id="sim-bubble-ai" class="sim-bubble p-2 sm:p-2.5 rounded-2xl rounded-tr-sm bg-blue-900/60 ml-auto max-w-[95%] text-slate-100 border border-blue-500/30">
                      <div class="flex items-center justify-between text-[9px] text-blue-300 mb-0.5">
                        <span class="font-bold flex items-center gap-1">
                          <i class="fa-solid fa-wand-magic-sparkles text-[9px]"></i> Balasan Otomatis
                        </span>
                        <span class="text-[8px] bg-blue-500/20 text-blue-200 px-1 py-0.2 rounded font-mono">0.8 detik</span>
                      </div>
                      <p class="text-[10px] leading-relaxed text-slate-200">
                        "Ready kak! Innova Zenix Hybrid tgl 24–26 Okt tersedia. Tarif sewa 3 hari total Rp 2.550.000 lepas kunci. Mau kami kunci jadwalnya sekarang?"
                      </p>
                    </div>
                  </div>

                  <!-- Automation Badges -->
                  <div class="grid grid-cols-2 gap-1.5 pt-2 border-t border-slate-800/80 text-[9px]">
                    <div id="sim-badge-gcal" class="p-1.5 rounded-lg bg-slate-800/80 flex items-center gap-1.5 sim-badge-live text-slate-400">
                      <i class="fa-solid fa-calendar-check text-blue-400 text-[10px]"></i>
                      <span class="truncate">Kunci Jadwal</span>
                    </div>
                    <div id="sim-badge-invoice" class="p-1.5 rounded-lg bg-slate-800/80 flex items-center gap-1.5 sim-badge-live text-slate-400">
                      <i class="fa-solid fa-receipt text-emerald-400 text-[10px]"></i>
                      <span class="truncate">Invoice Siap</span>
                    </div>
                  </div>

                  <!-- CTA Button -->
                  <a href="kontak.html" class="w-full py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-[11px] uppercase tracking-wider text-center block shadow-md shadow-blue-600/30 transition-all">
                    <i class="fa-solid fa-play mr-1 text-[9px]"></i> Coba Demo
                  </a>

                </div>

                <!-- Phone Bottom Bar: Home Indicator -->
                <div class="pb-2 pt-0.5 flex justify-center bg-slate-950/60">
                  <div class="w-24 h-1 bg-slate-600/50 rounded-full" aria-hidden="true"></div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>


    <!-- ========================================================================
         DEEP OBSIDIAN BOTTOM SECTION`;

if (oldSectionRegex.test(content)) {
  content = content.replace(oldSectionRegex, newSection);
  fs.writeFileSync('index.html', content, 'utf8');
  console.log('Successfully updated workflow section with neat mobile phone preview and dark mode support!');
} else {
  console.error('Could not match oldSectionRegex in index.html');
}
