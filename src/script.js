/**
 * REKEN - B2B Rental Operating System & Dashboard SaaS
 * Client-Side Interactive Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initDashboardShowcaseTabs();
  initDemoWizard();
  initFaqAccordion();
  initWorkflowStepSwitcher();
  initPageProgress();
  initMobileMenu();
  initPerformanceStatsCountUp();
  initScrollReveal();
  initLiveSimulator();
});

/* ==========================================================================
   1. Page Progress Bar
   ========================================================================== */
function initPageProgress() {
  const progressBar = document.getElementById('page-progress-bar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (docHeight > 0) {
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = scrollPercent + '%';
      progressBar.style.opacity = scrollTop > 20 ? '1' : '0';
    }
  }, { passive: true });
}

/* ==========================================================================
   2. Floating Island Navbar Scroll Observer
   ========================================================================== */
function initNavbar() {
  const headerIsland = document.getElementById('header-island-container');
  if (!headerIsland) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      headerIsland.classList.add('scrolled');
    } else {
      headerIsland.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================================================
   3. Mobile Menu Drawer
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('mobile-menu-close');
  const drawer = document.getElementById('mobile-menu-drawer');

  if (!toggleBtn || !drawer) return;

  function openDrawer() {
    drawer.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  function closeDrawer() {
    drawer.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) closeDrawer();
  });
}

/* ==========================================================================
   4. Dashboard Interactive Showcase Tabs (Crossfade & Micro-Scale Motion)
   ========================================================================== */
function initDashboardShowcaseTabs() {
  const tabBtns = document.querySelectorAll('.dashboard-tab-btn');
  const displayImg = document.getElementById('showcase-dashboard-img');
  const displayTitle = document.getElementById('showcase-caption-title');
  const displayDesc = document.getElementById('showcase-caption-desc');
  const displayUrl = document.getElementById('showcase-mockup-url');

  if (!tabBtns.length || !displayImg) return;

  displayImg.classList.add('dashboard-showcase-img');

  const tabData = {
    fleet: {
      img: 'src/images/dashboard-fleet.jpg',
      url: 'app.reken.id/manajemen-armada',
      title: 'Manajemen Armada & Inventaris Multi-Kategori',
      desc: '10 Unit Aktif: 6 Siap Sewa, 1 Sedang Berjalan, 1 Dalam Servis Bengkel, 1 Kerjasama Mitra B2B. Utilitas armada terpantau 30% (+12% vs bln lalu).'
    },
    calendar: {
      img: 'src/images/dashboard-calendar.jpg',
      url: 'app.reken.id/jadwal-kalender',
      title: 'Jadwal & Kalender Gantt Bebas Bentrok',
      desc: 'Infinite visual timeline harian & jam. Dukungan auto-stacking atas-bawah, tukar mobil drag-and-drop, dan sinkronisasi instan Google Calendar tim.'
    },
    invoice: {
      img: 'src/images/dashboard-booking-modal.jpg',
      url: 'app.reken.id/reservasi/kalkulasi-kas',
      title: 'Kalkulator Invoice Kas & Uang Jaminan (Deposit)',
      desc: 'Kustomisasi dinamis tanpa batas: item sewa, jasa supir, overtime, potongan diskon, skema DP/lunas, dan cetak invoice PDF/WhatsApp otomatis.'
    },
    vehicle: {
      img: 'src/images/dashboard-vehicle-detail.jpg',
      url: 'app.reken.id/armada/toyota-zenix-hybrid',
      title: 'Detail Legalitas, STNK & Buku Servis Unit',
      desc: 'Kartu spesifikasi lengkap, odometer, riwayat servis berkala, pengingat STNK H-14, dan status proteksi asuransi All-Risk setiap kendaraan.'
    }
  };

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const tabKey = btn.getAttribute('data-tab');
      const data = tabData[tabKey];
      if (!data) return;

      // Update active state
      tabBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      // Motion Crossfade Out
      displayImg.classList.add('switching');

      setTimeout(() => {
        displayImg.src = data.img;
        if (displayTitle) displayTitle.textContent = data.title;
        if (displayDesc) displayDesc.textContent = data.desc;
        if (displayUrl) displayUrl.textContent = data.url;

        // Image loaded or fast fallback
        const removeSwitching = () => {
          displayImg.classList.remove('switching');
          displayImg.removeEventListener('load', removeSwitching);
        };

        if (displayImg.complete) {
          requestAnimationFrame(removeSwitching);
        } else {
          displayImg.addEventListener('load', removeSwitching);
        }
      }, 120);
    });
  });
}

/* ==========================================================================
   5. Interactive 3-Step Qualification Wizard (Halaman Kontak)
   ========================================================================== */
function initDemoWizard() {
  const wizardContainer = document.getElementById('demo-wizard-container');
  if (!wizardContainer) return;

  let wizardState = {
    fleetSize: '',
    mainChallenge: '',
    name: '',
    whatsapp: '',
    timePreference: 'Pagi (09.00 - 12.00 WIB)'
  };

  // Step Containers
  const step1 = document.getElementById('wizard-step-1');
  const step2 = document.getElementById('wizard-step-2');
  const step3 = document.getElementById('wizard-step-3');

  // Step Indicator Bubbles
  const bubble1 = document.getElementById('wizard-bubble-1');
  const bubble2 = document.getElementById('wizard-bubble-2');
  const bubble3 = document.getElementById('wizard-bubble-3');

  // Step 1: Fleet Size Options (Click to select & auto advance)
  const fleetCards = document.querySelectorAll('.wizard-fleet-option');
  fleetCards.forEach((card) => {
    card.addEventListener('click', () => {
      fleetCards.forEach((c) => c.classList.remove('selected'));
      card.classList.add('selected');
      wizardState.fleetSize = card.getAttribute('data-value') || card.innerText.trim();

      // Update summary tags
      const summaryFleet = document.getElementById('wizard-summary-fleet');
      if (summaryFleet) summaryFleet.textContent = wizardState.fleetSize;

      // Advance to Step 2
      setTimeout(() => {
        step1.classList.add('hidden');
        step2.classList.remove('hidden');
        if (bubble1) { bubble1.classList.remove('active'); bubble1.classList.add('completed'); bubble1.innerHTML = '<i class="fa-solid fa-check text-xs"></i>'; }
        if (bubble2) { bubble2.classList.add('active'); }
      }, 200);
    });
  });

  // Step 2: Challenge Options (Click to select & auto advance)
  const challengeCards = document.querySelectorAll('.wizard-challenge-option');
  challengeCards.forEach((card) => {
    card.addEventListener('click', () => {
      challengeCards.forEach((c) => c.classList.remove('selected'));
      card.classList.add('selected');
      wizardState.mainChallenge = card.getAttribute('data-value') || card.innerText.trim();

      // Update summary tags
      const summaryChallenge = document.getElementById('wizard-summary-challenge');
      if (summaryChallenge) summaryChallenge.textContent = wizardState.mainChallenge;

      // Advance to Step 3
      setTimeout(() => {
        step2.classList.add('hidden');
        step3.classList.remove('hidden');
        if (bubble2) { bubble2.classList.remove('active'); bubble2.classList.add('completed'); bubble2.innerHTML = '<i class="fa-solid fa-check text-xs"></i>'; }
        if (bubble3) { bubble3.classList.add('active'); }
      }, 200);
    });
  });

  // Back to Step 1 from Step 2
  const backToStep1Btn = document.getElementById('wizard-back-to-1');
  if (backToStep1Btn) {
    backToStep1Btn.addEventListener('click', () => {
      step2.classList.add('hidden');
      step1.classList.remove('hidden');
      if (bubble1) { bubble1.classList.remove('completed'); bubble1.classList.add('active'); bubble1.textContent = '1'; }
      if (bubble2) { bubble2.classList.remove('active'); }
    });
  }

  // Back to Step 2 from Step 3
  const backToStep2Btn = document.getElementById('wizard-back-to-2');
  if (backToStep2Btn) {
    backToStep2Btn.addEventListener('click', () => {
      step3.classList.add('hidden');
      step2.classList.remove('hidden');
      if (bubble2) { bubble2.classList.remove('completed'); bubble2.classList.add('active'); bubble2.textContent = '2'; }
      if (bubble3) { bubble3.classList.remove('active'); }
    });
  }

  // Step 3: Final Form Submission
  const finalForm = document.getElementById('wizard-final-form');
  if (finalForm) {
    finalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('wizard-input-name');
      const waInput = document.getElementById('wizard-input-wa');
      const timeInput = document.getElementById('wizard-input-time');

      wizardState.name = nameInput?.value || 'Pengusaha Rental';
      wizardState.whatsapp = waInput?.value || '';
      wizardState.timePreference = timeInput?.value || 'Pagi / Siang';

      const waMessage = 
`Halo Tim REKEN, saya ingin jadwalkan Live Demo Dashboard Rental SaaS:
- Nama / Rental: ${wizardState.name}
- Jumlah Armada: ${wizardState.fleetSize || 'Belum diisi'}
- Kendala Utama: ${wizardState.mainChallenge || 'Belum diisi'}
- Waktu Pilihan Demo: ${wizardState.timePreference}
- WhatsApp: ${wizardState.whatsapp}

Mohon info jadwal ketersediaan sesi demo. Terima kasih!`;

      const waUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(waMessage)}`;
      window.open(waUrl, '_blank');
    });
  }
}

/* ==========================================================================
   6. FAQ Accordion (Smooth CSS Grid Transition & Accessibility)
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    const contentGrid = item.querySelector('.faq-content-grid') || item.querySelector('.faq-content');
    const chevron = item.querySelector('.faq-chevron') || item.querySelector('.faq-icon');

    if (!trigger || !contentGrid) return;

    trigger.addEventListener('click', () => {
      const isGrid = contentGrid.classList.contains('faq-content-grid');
      const isOpen = isGrid 
        ? contentGrid.classList.contains('open') 
        : !contentGrid.classList.contains('hidden');

      // Close all other items
      faqItems.forEach((other) => {
        const otherGrid = other.querySelector('.faq-content-grid') || other.querySelector('.faq-content');
        const otherChevron = other.querySelector('.faq-chevron') || other.querySelector('.faq-icon');
        const otherTrigger = other.querySelector('.faq-trigger');

        if (otherGrid) {
          if (otherGrid.classList.contains('faq-content-grid')) {
            otherGrid.classList.remove('open');
          } else {
            otherGrid.classList.add('hidden');
          }
        }
        if (otherChevron) otherChevron.classList.remove('rotate-180');
        if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
      });

      // Toggle current
      if (!isOpen) {
        if (isGrid) {
          contentGrid.classList.add('open');
        } else {
          contentGrid.classList.remove('hidden');
        }
        if (chevron) chevron.classList.add('rotate-180');
        trigger.setAttribute('aria-expanded', 'true');
      } else {
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

/* ==========================================================================
   7. Workflow Step Switcher (Index)
   ========================================================================== */
function initWorkflowStepSwitcher() {
  const prevBtn = document.getElementById('step-prev-btn');
  const nextBtn = document.getElementById('step-next-btn');
  const stepDots = document.querySelectorAll('.step-dot');
  const titleEl = document.getElementById('step-title');
  const descEl = document.getElementById('step-desc');
  const numEl = document.getElementById('step-number');
  const previewRoute = document.getElementById('step-preview-route');
  const previewFleet = document.getElementById('step-preview-fleet');

  if (!prevBtn || !nextBtn || !titleEl) return;

  const steps = [
    {
      num: 'STEP 01',
      title: 'Daftarkan Inventaris Armada & Tarif Sewa',
      desc: 'Input data mobil, motor, minivan tour, dan kendaraan listrik. Atur nomor plat, kategori transmisi, garasi pool, serta tarif lepas kunci maupun dengan supir.',
      route: 'Setup Multi-Armada & Manajemen Garasi Pool',
      fleet: '10 Unit Siap Jalan (Mobil, Motor, HiAce, EV)'
    },
    {
      num: 'STEP 02',
      title: 'Hubungkan Nomor WhatsApp ke AI CS Copilot',
      desc: 'Cukup scan QR Code WhatsApp resmi rental Anda. AI Copilot aktif 24/7 membalas ketersediaan unit sewa detik itu juga dan menyiapkan draf booking tanpa membuat admin begadang.',
      route: 'Sinkronisasi WhatsApp Instances & Auto-Draft AI',
      fleet: 'Respon Cepat 0.8 Detik 24 Jam Nonstop'
    },
    {
      num: 'STEP 03',
      title: 'Sinkronkan Kalender ke Google Calendar Tim',
      desc: 'Setiap reservasi baru otomatis mengunci jadwal di Google Calendar driver dan staf operasional. Hindari insiden fatal mobil dobel sewa (0 double-booking).',
      route: 'Integrasi Google Calendar 2-Way Sync',
      fleet: '100% Bebas Jadwal Tabrakan'
    },
    {
      num: 'STEP 04',
      title: 'Terbitkan Invoice & Pantau Utilitas Armada',
      desc: 'Kalkulasi otomatis biaya sewa, DP, uang jaminan (deposit), hingga overtime. Pantau tingkat okupansi bisnis real-time dan ekspor laporan keuangan dalam 1 klik CSV.',
      route: 'Manajemen Keuangan Kas & Analitik Utilisasi',
      fleet: 'Efisiensi Operasional Meningkat 70%'
    }
  ];

  let currentStep = 0;

  function renderStep(index) {
    const data = steps[index];
    if (!data) return;

    if (numEl) numEl.textContent = data.num;
    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.textContent = data.desc;
    if (previewRoute) previewRoute.textContent = data.route;
    if (previewFleet) previewFleet.textContent = data.fleet;

    stepDots.forEach((dot, dIndex) => {
      dot.className = dIndex === index ? 'step-dot active' : 'step-dot';
    });
  }

  prevBtn.addEventListener('click', () => {
    currentStep = (currentStep - 1 + steps.length) % steps.length;
    renderStep(currentStep);
  });

  nextBtn.addEventListener('click', () => {
    currentStep = (currentStep + 1) % steps.length;
    renderStep(currentStep);
  });

  renderStep(0);
}

/* ==========================================================================
   8. Performance Stats Dynamic Count-Up (60 FPS requestAnimationFrame)
   ========================================================================== */
function initPerformanceStatsCountUp() {
  const statElements = document.querySelectorAll('[data-stat-target]');
  if (!statElements.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      obs.unobserve(el);

      const rawTarget = el.getAttribute('data-stat-target') || '0';
      const targetVal = parseFloat(rawTarget);
      const prefix = el.getAttribute('data-stat-prefix') || '';
      const suffix = el.getAttribute('data-stat-suffix') || '';
      const decimals = parseInt(el.getAttribute('data-stat-decimals') || '0', 10);
      const useThousandSeparator = el.getAttribute('data-stat-thousand') === 'true';

      if (prefersReducedMotion || isNaN(targetVal)) {
        formatAndSetText(el, targetVal, prefix, suffix, decimals, useThousandSeparator);
        return;
      }

      const duration = 1200; // ms
      const startTime = performance.now();

      function updateCounter(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic: 1 - pow(1 - progress, 3)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = targetVal * easeOut;

        formatAndSetText(el, currentVal, prefix, suffix, decimals, useThousandSeparator);

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          formatAndSetText(el, targetVal, prefix, suffix, decimals, useThousandSeparator);
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }, { threshold: 0.3 });

  statElements.forEach((el) => observer.observe(el));
}

function formatAndSetText(el, value, prefix, suffix, decimals, useThousandSeparator) {
  let formattedNumber;
  if (decimals > 0) {
    formattedNumber = value.toFixed(decimals);
  } else {
    formattedNumber = Math.round(value).toString();
  }

  if (useThousandSeparator) {
    formattedNumber = formattedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  el.textContent = `${prefix}${formattedNumber}${suffix}`;
}

/* ==========================================================================
   9. Staggered Scroll-Reveal Engine
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    revealElements.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      obs.unobserve(el);

      // Stagger delay based on sibling index if inside a container
      const parent = el.parentElement;
      if (parent && parent.classList.contains('reveal-stagger-parent')) {
        const siblings = Array.from(parent.querySelectorAll('.reveal-on-scroll'));
        const index = siblings.indexOf(el);
        const delay = Math.min(index * 60, 360);
        el.style.transitionDelay = `${delay}ms`;
      }

      requestAnimationFrame(() => {
        el.classList.add('is-revealed');
      });
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach((el) => observer.observe(el));
}

/* ==========================================================================
   10. Live AI Dispatch & WhatsApp Simulator Focal Animation
   ========================================================================== */
function initLiveSimulator() {
  const container = document.getElementById('live-dispatch-simulator');
  if (!container) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const bubbleUser = document.getElementById('sim-bubble-user');
  const bubbleTyping = document.getElementById('sim-bubble-typing');
  const bubbleAi = document.getElementById('sim-bubble-ai');
  const badgeGcal = document.getElementById('sim-badge-gcal');
  const badgeInvoice = document.getElementById('sim-badge-invoice');
  const unitStatus = document.getElementById('sim-unit-status');

  if (prefersReducedMotion) {
    if (bubbleUser) bubbleUser.classList.remove('sim-hidden');
    if (bubbleTyping) bubbleTyping.classList.add('hidden');
    if (bubbleAi) bubbleAi.classList.remove('sim-hidden');
    return;
  }

  let isHovered = false;
  let timerId = null;

  container.addEventListener('mouseenter', () => { isHovered = true; });
  container.addEventListener('mouseleave', () => { isHovered = false; });

  function runSimulationLoop() {
    if (isHovered) {
      timerId = setTimeout(runSimulationLoop, 2000);
      return;
    }

    // Step 0: Initial state - reset
    if (bubbleTyping) bubbleTyping.classList.add('hidden');
    if (bubbleAi) bubbleAi.classList.add('sim-hidden');
    if (badgeGcal) badgeGcal.className = 'p-2 rounded-xl bg-slate-800/80 flex items-center gap-2 sim-badge-live text-slate-400';
    if (badgeInvoice) badgeInvoice.className = 'p-2 rounded-xl bg-slate-800/80 flex items-center gap-2 sim-badge-live text-slate-400';
    if (unitStatus) {
      unitStatus.textContent = 'Ready';
      unitStatus.className = 'text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full';
    }

    // T = 1.0s: Incoming user message appears
    setTimeout(() => {
      if (bubbleUser) bubbleUser.classList.remove('sim-hidden');
    }, 200);

    // T = 2.0s: Typing indicator shows up
    setTimeout(() => {
      if (bubbleTyping) bubbleTyping.classList.remove('hidden');
    }, 1800);

    // T = 3.2s: AI Response pops in
    setTimeout(() => {
      if (bubbleTyping) bubbleTyping.classList.add('hidden');
      if (bubbleAi) bubbleAi.classList.remove('sim-hidden');
    }, 3200);

    // T = 4.4s: G-Cal lock & Invoice ready highlights
    setTimeout(() => {
      if (badgeGcal) badgeGcal.className = 'p-2 rounded-xl bg-blue-900/60 text-blue-300 flex items-center gap-2 sim-badge-live border border-blue-500/30';
      if (badgeInvoice) badgeInvoice.className = 'p-2 rounded-xl bg-emerald-900/60 text-emerald-300 flex items-center gap-2 sim-badge-live border border-emerald-500/30';
      if (unitStatus) {
        unitStatus.textContent = 'Locked in G-Cal';
        unitStatus.className = 'text-[10px] font-semibold bg-blue-500/30 text-blue-200 px-2 py-0.5 rounded-full';
      }
    }, 4400);

    // T = 8.0s: Restart next cycle
    timerId = setTimeout(runSimulationLoop, 8000);
  }

  // Start initial sequence
  setTimeout(runSimulationLoop, 600);
}

