/**
 * REKEN - B2B Rental Operating System & Dashboard SaaS
 * Client-Side Interactive Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initNavbar();
  initLaptopCarousel();
  initDemoWizard();
  initFaqAccordion();
  initWorkflowStepSwitcher();
  initPageProgress();
  initMobileMenu();
  initPerformanceStatsCountUp();
  initScrollReveal();
  initLaptopZoomLoop();
  initLiveSimulator();
  initNewsletterForm();
  initBentoCardsGlow();
  initBentoShowcase();
  initPilarKeunggulanAnimation();
  initVaultGuaranteesTabs();
});

/* ==========================================================================
   0. Light / Dark Theme Toggle (class-based, persisted)
   ========================================================================== */
function initThemeToggle() {
  // Apply stored preference before first paint decisions elsewhere depend on it
  if (localStorage.getItem('reken-theme') === 'dark') {
    document.documentElement.classList.add('dark');
  }
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('reken-theme', isDark ? 'dark' : 'light');
  });
}

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
   4. Hero Laptop Screen Auto-Carousel (Image 4 QuotaRing Style)
   ========================================================================== */
function initLaptopCarousel() {
  const container = document.getElementById('laptop-carousel');
  if (!container) return;

  const slides = container.querySelectorAll('.laptop-slide');
  const dots = document.querySelectorAll('#laptop-carousel-dots .laptop-dot');
  const urlDisplay = document.getElementById('laptop-carousel-url');
  const captionTitle = document.getElementById('laptop-caption-title');
  const captionDesc = document.getElementById('laptop-caption-desc');
  const prevBtn = document.getElementById('laptop-prev-btn');
  const nextBtn = document.getElementById('laptop-next-btn');

  if (!slides.length) return;

  let currentIndex = 0;
  let timer = null;
  const interval = 4500;

  function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIndex = index;

    slides.forEach((slide, i) => {
      if (i === currentIndex) {
        slide.classList.add('active');
        slide.classList.remove('opacity-0', 'pointer-events-none');
        slide.classList.add('opacity-100');
        if (urlDisplay && slide.dataset.url) {
          urlDisplay.textContent = slide.dataset.url;
        }
        if (captionTitle && slide.dataset.title) {
          captionTitle.innerHTML = slide.dataset.title;
        }
        if (captionDesc && slide.dataset.desc) {
          captionDesc.innerHTML = slide.dataset.desc;
        }
      } else {
        slide.classList.remove('active', 'opacity-100');
        slide.classList.add('opacity-0', 'pointer-events-none');
      }
    });

    dots.forEach((dot, i) => {
      if (i === currentIndex) {
        dot.classList.add('active');
        dot.classList.remove('bg-slate-700', 'w-2');
        dot.classList.add('bg-sky-400', 'w-5');
      } else {
        dot.classList.remove('active');
        dot.classList.remove('bg-sky-400', 'w-5');
        dot.classList.add('bg-slate-700', 'w-2');
      }
    });
  }

  function startTimer() {
    stopTimer();
    // Do not auto-cycle if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timer = setInterval(() => {
      showSlide(currentIndex + 1);
    }, interval);
  }

  function stopTimer() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetIndex = parseInt(dot.getAttribute('data-slide'), 10);
      if (!isNaN(targetIndex)) {
        showSlide(targetIndex);
        startTimer();
      }
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showSlide(currentIndex - 1);
      startTimer();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showSlide(currentIndex + 1);
      startTimer();
    });
  }

  container.addEventListener('mouseenter', stopTimer);
  container.addEventListener('mouseleave', startTimer);

  showSlide(0);
  startTimer();
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
`Halo Tim REKEN, saya ingin jadwalkan Demo Sistem Rental:
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
   6. FAQ Accordion (QuotaRing Style: Plus/Minus Toggle, Smooth Grid & Filtering)
   ========================================================================== */
function initFaqAccordion() {
  const faqCards = document.querySelectorAll('.faq-card, .faq-item');
  if (!faqCards.length) return;

  faqCards.forEach((card) => {
    const trigger = card.querySelector('.faq-trigger');
    const contentGrid = card.querySelector('.faq-content-grid') || card.querySelector('.faq-content');
    const iconPlus = card.querySelector('.faq-icon-plus');
    const iconMinus = card.querySelector('.faq-icon-minus');
    const chevron = card.querySelector('.faq-chevron') || card.querySelector('.faq-icon');

    if (!trigger || !contentGrid) return;

    trigger.addEventListener('click', () => {
      const isGrid = contentGrid.classList.contains('faq-content-grid');
      const isOpen = isGrid 
        ? contentGrid.classList.contains('open') 
        : !contentGrid.classList.contains('hidden');

      // Close all other items
      faqCards.forEach((other) => {
        const otherGrid = other.querySelector('.faq-content-grid') || other.querySelector('.faq-content');
        const otherChevron = other.querySelector('.faq-chevron') || other.querySelector('.faq-icon');
        const otherPlus = other.querySelector('.faq-icon-plus');
        const otherMinus = other.querySelector('.faq-icon-minus');
        const otherTrigger = other.querySelector('.faq-trigger');

        if (otherGrid && otherGrid !== contentGrid) {
          if (otherGrid.classList.contains('faq-content-grid')) {
            otherGrid.classList.remove('open');
          } else {
            otherGrid.classList.add('hidden');
          }
          other.classList.remove('faq-card-active');
        }
        if (otherChevron) otherChevron.classList.remove('rotate-180');
        if (otherPlus) otherPlus.classList.remove('hidden');
        if (otherMinus) otherMinus.classList.add('hidden');
        if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
      });

      // Toggle current
      if (!isOpen) {
        if (isGrid) {
          contentGrid.classList.add('open');
        } else {
          contentGrid.classList.remove('hidden');
        }
        card.classList.add('faq-card-active');
        if (chevron) chevron.classList.add('rotate-180');
        if (iconPlus) iconPlus.classList.add('hidden');
        if (iconMinus) iconMinus.classList.remove('hidden');
        trigger.setAttribute('aria-expanded', 'true');
      } else {
        if (isGrid) {
          contentGrid.classList.remove('open');
        } else {
          contentGrid.classList.add('hidden');
        }
        card.classList.remove('faq-card-active');
        if (chevron) chevron.classList.remove('rotate-180');
        if (iconPlus) iconPlus.classList.remove('hidden');
        if (iconMinus) iconMinus.classList.add('hidden');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Category filter tabs
  const filterBtns = document.querySelectorAll('.faq-filter-btn');
  if (filterBtns.length) {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach((b) => {
          b.classList.remove('active', 'bg-slate-900', 'text-white', 'dark:bg-white', 'dark:text-slate-900', 'shadow-sm');
          b.classList.add('bg-slate-100', 'text-slate-600', 'dark:bg-slate-800', 'dark:text-slate-300');
        });
        btn.classList.add('active', 'bg-slate-900', 'text-white', 'dark:bg-white', 'dark:text-slate-900', 'shadow-sm');
        btn.classList.remove('bg-slate-100', 'text-slate-600', 'dark:bg-slate-800', 'dark:text-slate-300');

        const filter = btn.getAttribute('data-filter');
        faqCards.forEach((card) => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = '';
            card.classList.remove('hidden');
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
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
      title: 'Daftarkan Inventaris Armada & Tarif',
      desc: 'Masukkan data kendaraan, nomor plat, garasi pool, serta skema tarif sewa lepas kunci maupun dengan supir.',
      route: 'Setup Armada',
      fleet: 'Multi Armada'
    },
    {
      num: 'STEP 02',
      title: 'Hubungkan Nomor WhatsApp Rental',
      desc: 'Hubungkan nomor WhatsApp resmi bisnis. Asisten AI aktif 24/7 membalas ketersediaan armada detik itu juga.',
      route: 'WhatsApp AI',
      fleet: 'Respon Cepat'
    },
    {
      num: 'STEP 03',
      title: 'Sinkronkan Kalender Tim & Supir',
      desc: 'Pemesanan baru otomatis masuk ke Google Calendar tim dan pengemudi untuk mencegah jadwal tabrakan.',
      route: 'Kalender Tim',
      fleet: 'Bebas Bentrok'
    },
    {
      num: 'STEP 04',
      title: 'Terbitkan Invoice & Rekap Laporan',
      desc: 'Kalkulasi tarif sewa, uang muka DP, deposit jaminan, dan unduh laporan kas siap cetak dalam satu klik.',
      route: 'Laporan Kas',
      fleet: 'Ekspor Data'
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
   9. Staggered Scroll-Reveal Engine & Section Opacity Animation
   ========================================================================== */
function initScrollReveal() {
  const sectionElements = document.querySelectorAll('.section-reveal');
  // .laptop-reveal and outward expand elements are driven by dedicated re-entry observers
  const revealElements = document.querySelectorAll('.reveal-on-scroll:not(.laptop-reveal):not(.desc-outward-expand):not(.headline-outward-expand)');

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    sectionElements.forEach((el) => el.classList.add('is-visible'));
    revealElements.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  // Helper: check if element is already inside viewport at page load
  const isAlreadyInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  };

  // 1. Full Page Section Reveal (Smooth Opacity & Subtle Translate)
  if (sectionElements.length) {
    const sectionObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        obs.unobserve(el);
        requestAnimationFrame(() => {
          el.classList.add('is-visible');
        });
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

    sectionElements.forEach((el) => {
      if (isAlreadyInViewport(el)) {
        el.classList.add('is-visible');
      } else {
        sectionObserver.observe(el);
      }
    });
  }

  // 2. Component-level Staggered Reveal
  if (revealElements.length) {
    const elementObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        obs.unobserve(el);

        // Stagger delay based on sibling index if inside a container
        const parent = el.closest('.reveal-stagger-parent');
        if (parent) {
          const siblings = Array.from(parent.querySelectorAll('.reveal-on-scroll'));
          const index = siblings.indexOf(el);
          const delay = Math.min(index * 70, 420);
          el.style.transitionDelay = `${delay}ms`;
        }

        requestAnimationFrame(() => {
          el.classList.add('is-revealed');
        });
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

    revealElements.forEach((el) => {
      if (isAlreadyInViewport(el)) {
        el.classList.add('is-revealed');
      } else {
        elementObserver.observe(el);
      }
    });
  }

  // 3. Rhoe UI Blur-Slide Text Reveal
  const blurRevealElements = document.querySelectorAll('.rhoe-blur-reveal');
  if (blurRevealElements.length) {
    if (prefersReducedMotion) {
      blurRevealElements.forEach((el) => el.classList.add('revealed'));
    } else {
      const blurObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          obs.unobserve(el);
          requestAnimationFrame(() => {
            el.classList.add('revealed');
          });
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

      blurRevealElements.forEach((el) => {
        if (isAlreadyInViewport(el)) {
          el.classList.add('revealed');
        } else {
          blurObserver.observe(el);
        }
      });
    }
  }

  // 4. QuotaRing Scroll Opacity on FAQ Cards
  initFaqScrollOpacity();
}

/* ==========================================================================
   9b. Laptop Zoom-Out Loop — replays on every scroll re-entry
   ========================================================================== */
function initLaptopZoomLoop() {
  const laptop = document.querySelector('#beranda .laptop-reveal');
  if (!laptop) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    laptop.classList.add('is-revealed');
    return;
  }

  // Immediately reveal if any part is visible in initial hero viewport
  laptop.classList.add('is-revealed');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) laptop.classList.add('is-revealed');
    });
  }, { threshold: 0.05, rootMargin: '50px 0px 50px 0px' });

  observer.observe(laptop);
}

/* ==========================================================================
   9c. Pilar Keunggulan Outward Kinetic Reveal Loop ("Dari Dalam ke Luar")
   ========================================================================== */
function initPilarKeunggulanAnimation() {
  const section = document.getElementById('pilar-keunggulan');
  if (!section) return;

  const targets = section.querySelectorAll('.headline-outward-expand, .desc-outward-expand');
  if (!targets.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    targets.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        targets.forEach((el, idx) => {
          el.style.transitionDelay = `${idx * 110}ms`;
          requestAnimationFrame(() => {
            el.classList.add('is-revealed');
          });
        });
      } else {
        // Re-arm when scrolled well away from section so it replays upon scrolling back
        const rect = entry.boundingClientRect;
        if (rect.top > window.innerHeight * 0.95 || rect.bottom < 0) {
          targets.forEach((el) => {
            el.classList.remove('is-revealed');
          });
        }
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  observer.observe(section);
}

/**
 * Subtle QuotaRing Scroll Opacity:
 * Cards towards the lower edge of the viewport fade softly until scrolled closer.
 */
function initFaqScrollOpacity() {
  const faqItems = document.querySelectorAll('.faq-scroll-item');
  if (!faqItems.length) return;

  const updateCardOpacities = () => {
    const windowHeight = window.innerHeight;
    faqItems.forEach((card) => {
      const rect = card.getBoundingClientRect();
      // If card is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate closeness to the bottom of the screen
        const distanceFromBottom = windowHeight - rect.top;
        if (distanceFromBottom < 180) {
          const opacity = Math.max(0.35, Math.min(1, distanceFromBottom / 180));
          card.style.opacity = opacity.toFixed(2);
        } else {
          card.style.opacity = '1';
        }
      }
    });
  };

  window.addEventListener('scroll', updateCardOpacities, { passive: true });
  updateCardOpacities();
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
      unitStatus.textContent = 'Tersedia';
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
        unitStatus.textContent = 'Jadwal Terkunci';
        unitStatus.className = 'text-[10px] font-semibold bg-blue-500/30 text-blue-200 px-2 py-0.5 rounded-full';
      }
    }, 4400);

    // T = 8.0s: Restart next cycle
    timerId = setTimeout(runSimulationLoop, 8000);
  }

  // Start initial sequence
  setTimeout(runSimulationLoop, 600);
}

/* ==========================================================================
   11. Newsletter Subscription Handler
   ========================================================================== */
function initNewsletterForm() {
  const form = document.getElementById('newsletter-form');
  const statusEl = document.getElementById('newsletter-status');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('newsletter-email');
    if (!emailInput || !emailInput.value) return;

    const email = emailInput.value.trim();
    if (!email.includes('@') || !email.includes('.')) {
      if (statusEl) {
        statusEl.textContent = 'Silakan masukkan alamat email bisnis yang valid.';
        statusEl.className = 'text-[11px] text-amber-400 mt-2 block';
      }
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.innerHTML : 'Daftar';

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i>';
    }

    setTimeout(() => {
      emailInput.value = '';
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fa-solid fa-check mr-1"></i> Terdaftar';
        submitBtn.classList.add('bg-emerald-600');
        submitBtn.classList.remove('bg-blue-600', 'hover:bg-blue-500');
      }
      if (statusEl) {
        statusEl.textContent = 'Terima kasih! Anda telah terdaftar dalam buletin wawasan bisnis rental REKEN.';
        statusEl.className = 'text-[11px] text-emerald-400 mt-2 block font-medium';
      }
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.innerHTML = originalText;
          submitBtn.classList.remove('bg-emerald-600');
          submitBtn.classList.add('bg-blue-600', 'hover:bg-blue-500');
        }
      }, 4000);
    }, 600);
  });
}

/* ==========================================================================
   14. Bento Cards Interactive Glow & Mouse Spotlight
   ========================================================================== */
function initBentoCardsGlow() {
  const cards = document.querySelectorAll('.bento-testimonial-card, .feature-glass-box, .review-marquee-card');
  if (!cards.length) return;

  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* ==========================================================================
   15. Enterprise Security Master Vault (7 Garansi) Tab Switcher
   ========================================================================== */
function initVaultGuaranteesTabs() {
  const tabBtns = document.querySelectorAll('.vault-tab-btn');
  const panels = document.querySelectorAll('.vault-panel');
  if (!tabBtns.length || !panels.length) return;

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetKey = btn.getAttribute('data-vault-tab');
      if (!targetKey) return;

      tabBtns.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      panels.forEach((p) => {
        p.classList.remove('active');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const targetPanel = document.getElementById(`panel-vault-${targetKey}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   16. Bento Showcase Dynamic Controls (Tabs, Dispatch Trigger, AI Simulation)
   ========================================================================== */
function initBentoShowcase() {
  // 1. Dispatch lock button trigger
  const dispatchBtn = document.getElementById('bento-dispatch-trigger');
  const dispatchLabel = document.getElementById('bento-dispatch-label');
  if (dispatchBtn && dispatchLabel) {
    let resetTimer = null;
    dispatchBtn.addEventListener('click', () => {
      if (resetTimer) clearTimeout(resetTimer);
      dispatchBtn.classList.remove('bg-white', 'text-slate-950');
      dispatchBtn.classList.add('bg-emerald-500', 'text-white');
      dispatchLabel.textContent = 'Terkunci ✓';

      resetTimer = setTimeout(() => {
        dispatchBtn.classList.remove('bg-emerald-500', 'text-white');
        dispatchBtn.classList.add('bg-white', 'text-slate-950');
        dispatchLabel.textContent = 'Kunci Reservasi';
      }, 2500);
    });
  }

  // 2. Bento status tabs filter
  const bentoTabs = document.querySelectorAll('.bento-tab');
  if (bentoTabs.length) {
    bentoTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        bentoTabs.forEach((t) => {
          t.classList.remove('active', 'text-emerald-400', 'font-bold', 'border-b-2', 'border-emerald-400');
          t.classList.add('text-slate-400');
        });
        tab.classList.add('active', 'text-emerald-400', 'font-bold', 'border-b-2', 'border-emerald-400');
        tab.classList.remove('text-slate-400');
      });
    });
  }

  // 3. WhatsApp AI simulator typewriter
  const simulateBtn = document.getElementById('bento-simulate-btn');
  const aiText = document.getElementById('bento-ai-text');
  if (simulateBtn && aiText) {
    const simulationPrompts = [
      'Ready kak! Innova Zenix Hybrid tgl 24-26 Okt tersedia. Tarif Rp 2.550.000 lepas kunci. Jadwal kami kunci sekarang?',
      'Unit Alphard Transformer siap di Bandara Ngurah Rai tgl 28 Okt. Include supir & BBM. Invoice DP siap diterbitkan.',
      'HiAce Premio Luxury ready untuk tour 27-29 Okt. Kapasitas 10 seat executive. Mau dikirimkan rincian invoice?'
    ];
    let promptIndex = 0;
    let isTyping = false;

    simulateBtn.addEventListener('click', () => {
      if (isTyping) return;
      isTyping = true;
      promptIndex = (promptIndex + 1) % simulationPrompts.length;
      const targetText = simulationPrompts[promptIndex];
      aiText.innerHTML = '';
      let charIdx = 0;

      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {
        aiText.textContent = targetText;
        isTyping = false;
        return;
      }

      const typeInterval = setInterval(() => {
        if (charIdx < targetText.length) {
          const ch = targetText.charAt(charIdx);
          const span = document.createElement('span');
          span.className = 'rhoe-char-reveal';
          span.textContent = ch;
          aiText.appendChild(span);
          charIdx++;
        } else {
          clearInterval(typeInterval);
          isTyping = false;
        }
      }, 18);
    });
  }

  // 4. Bento fleet stepper & dynamic revenue counter
  const stepperVal = document.getElementById('bento-stepper-val');
  const currencyVal = document.getElementById('bento-currency-val');
  const btnDec = document.getElementById('bento-stepper-dec');
  const btnInc = document.getElementById('bento-stepper-inc');
  if (stepperVal && btnDec && btnInc) {
    let units = 18;
    const baseUnitRate = 8250000; // Rp 8.25jt per active rented unit

    function updateStepperUI() {
      stepperVal.textContent = units.toString();
      if (currencyVal) {
        const total = units * baseUnitRate;
        currencyVal.textContent = total.toLocaleString('id-ID');
      }
    }

    btnDec.addEventListener('click', () => {
      if (units > 1) {
        units--;
        updateStepperUI();
      }
    });

    btnInc.addEventListener('click', () => {
      if (units < 50) {
        units++;
        updateStepperUI();
      }
    });
  }

  // 5. Bento calendar day pills selection
  const dayPills = document.querySelectorAll('.bento-day-pill');
  if (dayPills.length) {
    dayPills.forEach((pill) => {
      pill.addEventListener('click', () => {
        dayPills.forEach((p) => {
          p.classList.remove('active', 'bg-white', 'text-slate-950', 'shadow');
          p.classList.add('text-slate-400');
        });
        pill.classList.add('active', 'bg-white', 'text-slate-950', 'shadow');
        pill.classList.remove('text-slate-400');
      });
    });
  }
}

