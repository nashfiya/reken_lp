const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

const targetSectionOld = `        <!-- Right: Dispatch Simulator Card -->
        <div class="lg:col-span-5 reveal-on-scroll">
          <div id="live-dispatch-simulator" class="rounded-3xl p-6 bg-slate-900 text-white shadow-xl border border-slate-800">
            <div class="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <div class="flex items-center gap-2 text-xs font-bold text-white font-alt uppercase tracking-wider">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <span>Simulasi Otomatis</span>
              </div>
              <span class="text-[10px] text-sky-400 font-mono bg-sky-950 px-2 py-0.5 rounded">Asisten WhatsApp</span>
            </div>

            <!-- Unit Card Selected -->
            <div class="p-3.5 rounded-2xl bg-slate-800 mb-4 flex items-center justify-between text-slate-100">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-lg">
                  <i class="fa-solid fa-car"></i>
                </div>
                <div>
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-bold text-white">Toyota Innova Zenix</span>
                    <span class="text-[9px] font-mono bg-blue-500/30 text-blue-300 px-1.5 py-0.5 rounded">DK 1888 XY</span>
                  </div>
                  <span class="text-[11px] text-slate-200">Garasi Utama &middot; Matic Hybrid &middot; 7 Kursi</span>
                </div>
              </div>
              <span id="sim-unit-status" class="text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full">
                Tersedia
              </span>
            </div>

            <!-- Incoming WhatsApp Message Simulation -->
            <div class="space-y-3 mb-4 text-xs min-h-[140px] flex flex-col justify-end">
              <div id="sim-bubble-user" class="sim-bubble p-3 rounded-2xl rounded-tl-sm bg-slate-800 text-slate-200 max-w-[90%]">
                <div class="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                  <span class="font-semibold text-emerald-400"><i class="fa-brands fa-whatsapp mr-1"></i>Calon Penyewa</span>
                  <span>23:14</span>
                </div>
                <p class="text-[11px] leading-relaxed">
                  "Halo kak, mau sewa Zenix lepas kunci tanggal 24-26 Oktober ready nggak ya? Total berapa?"
                </p>
              </div>

              <!-- AI Copilot Typing State Indicator -->
              <div id="sim-bubble-typing" class="hidden sim-bubble p-2.5 rounded-2xl rounded-tr-sm bg-blue-950/90 ml-auto max-w-[85%] text-slate-300 flex items-center gap-2">
                <i class="fa-solid fa-circle-notch fa-spin text-blue-400 text-xs"></i>
                <span class="text-[11px] text-blue-300 font-mono">Cek ketersediaan mobil...</span>
              </div>

              <!-- AI Copilot Instant Auto-Draft -->
              <div id="sim-bubble-ai" class="sim-bubble p-3 rounded-2xl rounded-tr-sm bg-blue-900/60 ml-auto max-w-[95%] text-slate-100">
                <div class="flex items-center justify-between text-[10px] text-blue-400 mb-1">
                  <span class="font-bold flex items-center gap-1">
                    <i class="fa-solid fa-wand-magic-sparkles"></i> Balasan Otomatis
                  </span>
                  <span class="text-[9px] bg-blue-500/20 text-blue-300 px-1.5 py-0.2 rounded font-mono">0.8 detik</span>
                </div>
                <p class="text-[11px] leading-relaxed text-slate-200">
                  "Ready kak! Innova Zenix Hybrid tgl 24-26 Okt tersedia. Tarif sewa 3 hari total Rp 2.550.000 lepas kunci. Mau kami kunci jadwalnya sekarang?"
                </p>
              </div>
            </div>

            <!-- Sync Feature Badges -->
            <div class="grid grid-cols-2 gap-2 mb-4 pt-3 border-t border-slate-800 text-[10px] text-slate-200">
              <div id="sim-badge-gcal" class="p-2 rounded-xl bg-slate-800/80 flex items-center gap-2 sim-badge-live text-slate-400">
                <i class="fa-solid fa-calendar-check text-blue-400"></i>
                <span>Kunci Jadwal</span>
              </div>
              <div id="sim-badge-invoice" class="p-2 rounded-xl bg-slate-800/80 flex items-center gap-2 sim-badge-live text-slate-400">
                <i class="fa-solid fa-receipt text-emerald-400"></i>
                <span>Invoice Siap</span>
              </div>
            </div>

            <!-- Action Demo Button -->
            <a href="kontak.html" class="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider text-center block shadow-md shadow-black/30 transition-all">
              <i class="fa-solid fa-play mr-1.5"></i> Coba Demo
            </a>

          </div>
        </div>`;

const targetSectionNew = `        <!-- Right: Mobile Phone Preview (WhatsApp Simulator) -->
        <div class="lg:col-span-5 flex justify-center items-center reveal-on-scroll">
          
          <!-- Smartphone Outer Chassis -->
          <div class="relative w-full max-w-[340px] sm:max-w-[350px]">
            
            <!-- Side Hardware Button Details (Realistic Phone Chassis) -->
            <div class="absolute -left-[7px] top-24 w-[5px] h-9 bg-slate-700/80 rounded-l-sm" aria-hidden="true"></div>
            <div class="absolute -left-[7px] top-36 w-[5px] h-9 bg-slate-700/80 rounded-l-sm" aria-hidden="true"></div>
            <div class="absolute -right-[7px] top-28 w-[5px] h-14 bg-slate-700/80 rounded-r-sm" aria-hidden="true"></div>

            <!-- Phone Frame -->
            <div class="relative rounded-[3rem] p-3 sm:p-3.5 bg-slate-950 border-[6px] sm:border-[7px] border-slate-800 shadow-2xl shadow-blue-950/50 ring-1 ring-white/10">
              
              <!-- Phone Inner Screen Container -->
              <div id="live-dispatch-simulator" class="rounded-[2.4rem] overflow-hidden bg-slate-900 text-white border border-slate-800 flex flex-col justify-between">
                
                <!-- Phone Top Bar: Status Bar + Dynamic Island -->
                <div class="pt-2 px-5 pb-2 bg-slate-950/80 border-b border-slate-800/60">
                  <div class="flex items-center justify-between text-[11px] font-semibold text-slate-300">
                    <span class="font-mono">09:41</span>
                    <!-- Dynamic Island Cutout -->
                    <div class="w-20 h-4 bg-black rounded-full flex items-center justify-center gap-1.5 px-2">
                      <span class="w-2 h-2 rounded-full bg-slate-900 border border-slate-800"></span>
                      <span class="w-1.5 h-1.5 rounded-full bg-blue-500/40"></span>
                    </div>
                    <div class="flex items-center gap-1 text-[10px] text-slate-400">
                      <i class="fa-solid fa-signal text-[9px]"></i>
                      <i class="fa-solid fa-wifi text-[9px]"></i>
                      <i class="fa-solid fa-battery-full text-[10px] text-white"></i>
                    </div>
                  </div>

                  <!-- WhatsApp Chat App Topbar -->
                  <div class="flex items-center justify-between mt-3 pt-2 border-t border-slate-800/40">
                    <div class="flex items-center gap-2">
                      <div class="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-xs">
                        <i class="fa-brands fa-whatsapp text-sm"></i>
                      </div>
                      <div>
                        <div class="text-xs font-bold text-white flex items-center gap-1">
                          <span>Asisten REKEN</span>
                          <i class="fa-solid fa-circle-check text-sky-400 text-[10px]"></i>
                        </div>
                        <span class="text-[9px] text-emerald-400 flex items-center gap-1">
                          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Online 24 Jam
                        </span>
                      </div>
                    </div>
                    <span class="text-[10px] text-slate-400 font-mono bg-slate-800 px-2 py-0.5 rounded-full">Otomatis</span>
                  </div>
                </div>

                <!-- Phone Screen Body -->
                <div class="p-4 sm:p-4.5 space-y-3">
                  
                  <!-- Unit Status Card Inside Phone -->
                  <div class="p-3 rounded-2xl bg-slate-800/90 border border-slate-700/60 flex items-center justify-between text-slate-100">
                    <div class="flex items-center gap-2.5">
                      <div class="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm shrink-0">
                        <i class="fa-solid fa-car"></i>
                      </div>
                      <div class="min-w-0">
                        <div class="text-xs font-bold text-white truncate">Toyota Innova Zenix</div>
                        <div class="text-[10px] text-slate-300">Matic Hybrid &middot; 7 Kursi</div>
                      </div>
                    </div>
                    <span id="sim-unit-status" class="shrink-0 text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full">
                      Tersedia
                    </span>
                  </div>

                  <!-- Incoming & Outgoing WhatsApp Bubbles -->
                  <div class="space-y-2.5 min-h-[145px] flex flex-col justify-end text-xs">
                    <!-- User Message Bubble -->
                    <div id="sim-bubble-user" class="sim-bubble p-2.5 sm:p-3 rounded-2xl rounded-tl-sm bg-slate-800 text-slate-200 max-w-[92%] border border-slate-700/50">
                      <div class="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                        <span class="font-semibold text-emerald-400"><i class="fa-brands fa-whatsapp mr-1"></i>Calon Penyewa</span>
                        <span>23:14</span>
                      </div>
                      <p class="text-[11px] leading-relaxed">
                        "Halo kak, mau sewa Zenix lepas kunci tanggal 24–26 Oktober ready nggak ya? Total berapa?"
                      </p>
                    </div>

                    <!-- Typing Indicator -->
                    <div id="sim-bubble-typing" class="hidden sim-bubble p-2 rounded-2xl rounded-tr-sm bg-blue-950/90 ml-auto max-w-[85%] text-slate-300 flex items-center gap-2 border border-blue-800/40">
                      <i class="fa-solid fa-circle-notch fa-spin text-blue-400 text-xs"></i>
                      <span class="text-[10px] text-blue-300 font-mono">Cek ketersediaan mobil...</span>
                    </div>

                    <!-- Auto Response Bubble -->
                    <div id="sim-bubble-ai" class="sim-bubble p-2.5 sm:p-3 rounded-2xl rounded-tr-sm bg-blue-900/60 ml-auto max-w-[95%] text-slate-100 border border-blue-500/30">
                      <div class="flex items-center justify-between text-[10px] text-blue-300 mb-1">
                        <span class="font-bold flex items-center gap-1">
                          <i class="fa-solid fa-wand-magic-sparkles text-xs"></i> Balasan Otomatis
                        </span>
                        <span class="text-[9px] bg-blue-500/20 text-blue-200 px-1.5 py-0.5 rounded font-mono">0.8 detik</span>
                      </div>
                      <p class="text-[11px] leading-relaxed text-slate-200">
                        "Ready kak! Innova Zenix Hybrid tgl 24–26 Okt tersedia. Tarif sewa 3 hari total Rp 2.550.000 lepas kunci. Mau kami kunci jadwalnya sekarang?"
                      </p>
                    </div>
                  </div>

                  <!-- Automation Badges -->
                  <div class="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80 text-[10px]">
                    <div id="sim-badge-gcal" class="p-2 rounded-xl bg-slate-800/80 flex items-center gap-1.5 sim-badge-live text-slate-400">
                      <i class="fa-solid fa-calendar-check text-blue-400"></i>
                      <span class="truncate">Kunci Jadwal</span>
                    </div>
                    <div id="sim-badge-invoice" class="p-2 rounded-xl bg-slate-800/80 flex items-center gap-1.5 sim-badge-live text-slate-400">
                      <i class="fa-solid fa-receipt text-emerald-400"></i>
                      <span class="truncate">Invoice Siap</span>
                    </div>
                  </div>

                  <!-- CTA Button -->
                  <a href="kontak.html" class="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider text-center block shadow-lg shadow-blue-600/30 transition-all">
                    <i class="fa-solid fa-play mr-1.5 text-[10px]"></i> Coba Demo
                  </a>

                </div>

                <!-- Phone Bottom Bar: Home Indicator -->
                <div class="pb-2 pt-1 flex justify-center bg-slate-950/60">
                  <div class="w-28 h-1 bg-slate-500/50 rounded-full" aria-hidden="true"></div>
                </div>

              </div>
            </div>

          </div>

        </div>`;

// Normalize CRLF to LF for safe match
const normalizedContent = content.replace(/\r\n/g, '\n');
const normalizedOld = targetSectionOld.replace(/\r\n/g, '\n');

if (normalizedContent.includes(normalizedOld)) {
  const updatedContent = normalizedContent.replace(normalizedOld, targetSectionNew);
  fs.writeFileSync('index.html', updatedContent, 'utf8');
  console.log('Successfully replaced dispatch simulator with realistic mobile phone mockup!');
} else {
  console.error('Could not find targetSectionOld in index.html!');
  // Let's debug by finding line numbers
  const idx = normalizedContent.indexOf('id="live-dispatch-simulator"');
  console.log('Index of simulator:', idx);
  if (idx !== -1) {
    console.log('Surrounding code:', normalizedContent.substring(idx - 100, idx + 200));
  }
}
