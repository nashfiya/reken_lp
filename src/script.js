/**
 * REKEN - Luxury Mobility & Travel Yogyakarta
 * Interactive Logic: Blue-Black Glassmorphism Edition
 */

document.addEventListener('DOMContentLoaded', () => {
  initPageTransitions();
  initNavbar();
  initHeroParallax();
  initGlobalClickRipples();
  initDownloadModal();
  initStepSwitcher();
  initFaqAccordion();
  initBookingMockup();
  initTestimonialSlider();
  initFleetFilter();
});

/* ==========================================================================
   0. Ultra-Smooth Page Transitions & Dynamic Navigation Movement
   ========================================================================== */
function initPageTransitions() {
  // Ensure top progress bar exists
  let progressBar = document.getElementById('page-progress-bar');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.id = 'page-progress-bar';
    progressBar.className = 'page-progress-line';
    progressBar.setAttribute('aria-hidden', 'true');
    document.body.prepend(progressBar);
  }

  // Handle bfcache (Back/Forward Cache) page restoration
  window.addEventListener('pageshow', () => {
    document.body.classList.remove('page-exiting');
    if (progressBar) {
      progressBar.classList.remove('active');
      progressBar.style.opacity = '0';
      progressBar.style.width = '0%';
    }
  });

  // Dynamic Magnetic Movement for Desktop Nav Items
  const navItems = document.querySelectorAll('.nav-link-item');
  navItems.forEach((item) => {
    item.addEventListener('mousemove', (e) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const text = item.querySelector('.nav-link-text');
      if (text) {
        text.style.transform = `translate(${x * 0.16}px, ${y * 0.16 - 1.5}px)`;
      }
    });

    item.addEventListener('mouseleave', () => {
      const text = item.querySelector('.nav-link-text');
      if (text) {
        text.style.transform = '';
      }
    });
  });

  // Initialize Smooth Sliding Indicator Pill on Desktop Nav
  initNavSlidingPill();

  // Intercept internal page navigation for animated transitions
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href) return;

    // Skip hash links, external links, protocols
    if (
      href.startsWith('#') ||
      href.startsWith('http://') ||
      href.startsWith('https://') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('javascript:') ||
      link.target === '_blank'
    ) {
      return;
    }

    // Check if link points to an HTML page
    const isInternalPage = href.endsWith('.html') || href === '/' || href.includes('.html#');
    if (!isInternalPage) return;

    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const targetPath = href.split('#')[0] || 'index.html';

    // If clicking the current page without hash, smooth scroll to top with bounce
    if (targetPath === currentPath && !href.includes('#')) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      link.classList.add('nav-link-clicked');
      setTimeout(() => link.classList.remove('nav-link-clicked'), 350);
      return;
    }

    // When navigating to a DIFFERENT page:
    e.preventDefault();

    // Trigger visual click response on link
    link.classList.add('nav-link-clicked');
    const textEl = link.querySelector('.nav-link-text, .mobile-nav-text');
    if (textEl) {
      textEl.style.transform = 'translateY(-3px) scale(1.08)';
      textEl.style.color = '#38BDF8';
    }

    // Start top glowing progress line
    if (progressBar) {
      progressBar.style.opacity = '1';
      progressBar.classList.add('active');
    }

    // Trigger smooth horizontal slide exit animation on main
    document.body.classList.add('page-exiting');

    // Smooth navigation delay
    setTimeout(() => {
      window.location.href = href;
    }, 240);
  });
}

/* ==========================================================================
   Smooth Sliding Indicator Pill across Navigation Menu (Efek Geser & Timbul)
   ========================================================================== */
function initNavSlidingPill() {
  const navContainer = document.getElementById('desktop-navigation');
  if (!navContainer) return;

  // Create sliding pill element if not present
  let pill = document.getElementById('nav-sliding-pill');
  if (!pill) {
    pill = document.createElement('div');
    pill.id = 'nav-sliding-pill';
    pill.className = 'nav-sliding-pill';
    navContainer.prepend(pill);
  }

  const items = Array.from(navContainer.querySelectorAll('.nav-link-item'));
  const activeItem = navContainer.querySelector('.nav-link-item.active') || items[0];

  function movePillTo(targetEl) {
    if (!targetEl || !pill) return;
    const containerRect = navContainer.getBoundingClientRect();
    const targetRect = targetEl.getBoundingClientRect();

    pill.style.left = `${targetRect.left - containerRect.left}px`;
    pill.style.width = `${targetRect.width}px`;
    pill.style.opacity = '1';
  }

  // Initial positioning on active item after staggered entrance animations settle
  if (activeItem) {
    setTimeout(() => movePillTo(activeItem), 120);
    setTimeout(() => movePillTo(activeItem), 450);
  }

  items.forEach((item, index) => {
    // Hover: smoothly slide pill & cascade wave to neighbor words
    item.addEventListener('mouseenter', () => {
      movePillTo(item);

      // Ripple wave to left neighbor word
      if (items[index - 1]) {
        items[index - 1].classList.add('nav-wave-neighbor');
        setTimeout(() => items[index - 1]?.classList.remove('nav-wave-neighbor'), 280);
      }
      // Ripple wave to right neighbor word
      if (items[index + 1]) {
        items[index + 1].classList.add('nav-wave-neighbor');
        setTimeout(() => items[index + 1]?.classList.remove('nav-wave-neighbor'), 280);
      }
    });

    // Click: spring bounce on pill
    item.addEventListener('click', () => {
      movePillTo(item);
      pill.style.transform = 'scale(1.08)';
      setTimeout(() => {
        if (pill) pill.style.transform = 'scale(1)';
      }, 200);
    });
  });

  // When mouse leaves nav, smoothly glide pill back to active item
  navContainer.addEventListener('mouseleave', () => {
    const currentActive = navContainer.querySelector('.nav-link-item.active') || items[0];
    if (currentActive) {
      movePillTo(currentActive);
    }
  });

  window.addEventListener('resize', () => {
    const currentActive = navContainer.querySelector('.nav-link-item.active') || items[0];
    if (currentActive) movePillTo(currentActive);
  });
}



/* ==========================================================================
   1. Ultra-Modern Navbar, Active Scroll Spy & Mobile Drawer
   ========================================================================== */
function initNavbar() {
  const header = document.getElementById('main-header');
  const headerIsland = document.getElementById('header-island-container');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-menu-drawer');
  const closeMobile = document.getElementById('mobile-menu-close');

  // Sticky header compression & island glass enhancement
  function handleScroll() {
    if (window.scrollY > 20) {
      header?.classList.add('py-2', 'sm:py-2.5');
      header?.classList.remove('py-3', 'sm:py-4');
      headerIsland?.classList.add('scrolled');
    } else {
      header?.classList.remove('py-2', 'sm:py-2.5');
      header?.classList.add('py-3', 'sm:py-4');
      headerIsland?.classList.remove('scrolled');
    }
    updateNavSpy();
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Viewport-Based Scroll Spy
  function updateNavSpy() {
    const sections = ['beranda', 'armada', 'cara-sewa', 'keunggulan', 'wisata', 'testimoni', 'faq', 'kontak'];
    let currentActive = '';

    for (let i = 0; i < sections.length; i++) {
      const sec = document.getElementById(sections[i]);
      if (sec) {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 260 && rect.bottom >= 120) {
          currentActive = sections[i];
          break;
        }
      }
    }

    if (currentActive) {
      document.querySelectorAll('.nav-link-item').forEach((link) => {
        if (link.getAttribute('data-target') === currentActive) {
          link.classList.add('active', 'text-white');
          link.classList.remove('text-slate-400');
        } else if (link.getAttribute('data-target')) {
          link.classList.remove('active', 'text-white');
          link.classList.add('text-slate-400');
        }
      });
    }
  }

  // Smooth scroll with clearance for floating island navbar
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '#!') return;
      const targetId = href.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        const islandHeight = headerIsland ? headerIsland.offsetHeight + 35 : 100;
        const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - islandHeight;
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
        if (history.pushState) {
          history.pushState(null, null, `#${targetId}`);
        }
      }
    });
  });

  // Mobile menu toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
      document.body.classList.toggle('overflow-hidden');
    });
  }

  if (closeMobile && mobileDrawer) {
    closeMobile.addEventListener('click', () => {
      mobileDrawer.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  }

  mobileDrawer?.addEventListener('click', (e) => {
    if (e.target === mobileDrawer) {
      mobileDrawer.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  });

  const mobileLinks = mobileDrawer?.querySelectorAll('a');
  mobileLinks?.forEach((link) => {
    link.addEventListener('click', () => {
      mobileDrawer.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  });
}

/* ==========================================================================
   2. 4-Step Interactive Switcher (Cara Sewa & Alur Reservasi)
   ========================================================================== */
const stepsData = [
  {
    stepNumber: 'Step 01',
    highlightTitle: 'Pilih Armada & Tanggal Perjalanan',
    description:
      'Pilih unit kendaraan yang sesuai dengan kebutuhan Anda (lepas kunci atau all-in supir). Tentukan durasi sewa, tanggal mulai, dan titik penjemputan baik di Bandara YIA, Stasiun Tugu, hotel, maupun kantor.',
    previewRoute: 'Bandara YIA ➔ Hotel Tentrem Yogyakarta',
    previewFleet: 'Innova Zenix Hybrid (Matic / Siap Jalan)',
    indicatorIdx: 0,
  },
  {
    stepNumber: 'Step 02',
    highlightTitle: 'Verifikasi Digital & Booking Instan via WhatsApp',
    description:
      'Konfirmasi ketersediaan unit diproses secara real-time. Verifikasi dokumen (KTP & SIM A) dilakukan secara digital, aman, dan tanpa prosedur yang berbelit-belit.',
    previewRoute: 'Verifikasi Digital Tanpa DP Rumit',
    previewFleet: 'Konfirmasi Terkirim via WhatsApp CS',
    indicatorIdx: 1,
  },
  {
    stepNumber: 'Step 03',
    highlightTitle: 'Serah Terima Unit Bersih & Full BBM',
    description:
      'Tim penyerahan unit Reken mengantarkan armada dalam kondisi steril, wangi, ber-AC dingin, dan BBM terisi penuh. Check list kondisi kendaraan dilakukan transparan bersama Anda.',
    previewRoute: 'Tepat Waktu di Titik Penjemputan Anda',
    previewFleet: 'Unit Bersih, Steril & Siap Menjelajah Jogja',
    indicatorIdx: 2,
  },
  {
    stepNumber: 'Step 04',
    highlightTitle: 'Jelajahi Jogja dengan Nyaman & Dukungan 24/7',
    description:
      'Nikmati liburan atau urusan bisnis di Yogyakarta dengan rasa tenang berkat dukungan 24/7 Roadside Assistance serta proteksi perjalanan menyeluruh.',
    previewRoute: 'Merapi, Borobudur, Malioboro, Gunungkidul',
    previewFleet: 'Perjalanan Berkesan & Layanan Berbintang',
    indicatorIdx: 3,
  },
];

function initStepSwitcher() {
  let currentStep = 0;
  const stepNumberEl = document.getElementById('step-number');
  const stepTitleEl = document.getElementById('step-title');
  const stepDescEl = document.getElementById('step-desc');
  const stepRouteEl = document.getElementById('step-preview-route');
  const stepFleetEl = document.getElementById('step-preview-fleet');
  const prevBtn = document.getElementById('step-prev-btn');
  const nextBtn = document.getElementById('step-next-btn');
  const dotsContainer = document.getElementById('step-dots-indicator');

  if (!stepTitleEl || !prevBtn || !nextBtn) return;

  function updateStepUI() {
    const data = stepsData[currentStep];

    stepTitleEl.style.opacity = '0';
    stepDescEl.style.opacity = '0';

    setTimeout(() => {
      if (stepNumberEl) stepNumberEl.textContent = data.stepNumber;
      stepTitleEl.innerHTML = formatStepTitle(data.highlightTitle);
      if (stepDescEl) stepDescEl.textContent = data.description;
      if (stepRouteEl) stepRouteEl.textContent = data.previewRoute;
      if (stepFleetEl) stepFleetEl.textContent = data.previewFleet;

      stepTitleEl.style.opacity = '1';
      stepDescEl.style.opacity = '1';
    }, 150);

    // Update Dots / Pills in Dark Glass Theme
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.step-dot');
      dots.forEach((dot, index) => {
        if (index === currentStep) {
          dot.className = 'step-dot h-2 w-8 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 shadow-sm shadow-sky-400/50 transition-all duration-300';
        } else {
          dot.className = 'step-dot h-2 w-2 rounded-full bg-slate-700 hover:bg-slate-600 transition-all duration-300';
        }
      });
    }

    prevBtn.classList.toggle('opacity-40', currentStep === 0);
    prevBtn.classList.toggle('cursor-not-allowed', currentStep === 0);
    nextBtn.classList.toggle('opacity-40', currentStep === stepsData.length - 1);
    nextBtn.classList.toggle('cursor-not-allowed', currentStep === stepsData.length - 1);
  }

  function formatStepTitle(rawTitle) {
    const parts = rawTitle.split('&');
    if (parts.length > 1) {
      return `${parts[0]} <span class="text-sky-400 font-bold">& ${parts[1]}</span>`;
    }
    return rawTitle;
  }

  prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      updateStepUI();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentStep < stepsData.length - 1) {
      currentStep++;
      updateStepUI();
    }
  });

  updateStepUI();
}

/* ==========================================================================
   3. Accordion FAQ
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');

    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isOpen = !content.classList.contains('hidden');

      faqItems.forEach((other) => {
        const otherContent = other.querySelector('.faq-content');
        const otherIcon = other.querySelector('.faq-icon');
        otherContent?.classList.add('hidden');
        otherIcon?.classList.remove('rotate-180');
      });

      if (!isOpen) {
        content.classList.remove('hidden');
        icon?.classList.add('rotate-180');
      }
    });
  });
}

/* ==========================================================================
   4. Mockup Pencarian Armada & Booking Cepat
   ========================================================================== */
function initBookingMockup() {
  const searchForm = document.getElementById('hero-booking-form');

  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const origin = document.getElementById('mockup-origin')?.value || 'YIA Kulon Progo';
      const dest = document.getElementById('mockup-dest')?.value || 'Malioboro Jogja';

      showToast(`Mencari armada terbaik dari ${origin} ke ${dest}...`);
      setTimeout(() => {
        showToast(`Tersedia 8 Unit Siap Jalan! Diskon reservasi awal 10%.`);
      }, 1600);
    });
  }
}

function showToast(message) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className =
      'fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#0A142F]/90 backdrop-blur-xl text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-sky-400/30 text-sm font-medium transition-all duration-300 transform translate-y-12 opacity-0 pointer-events-none';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <i class="fa-solid fa-circle-check text-sky-400 text-base"></i>
    <span>${message}</span>
  `;

  toast.classList.remove('translate-y-12', 'opacity-0', 'pointer-events-none');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.add('translate-y-12', 'opacity-0', 'pointer-events-none');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 4000);
}

/* ==========================================================================
   5. Testimonial Slider / Nav
   ========================================================================== */
function initTestimonialSlider() {
  const container = document.getElementById('testimonial-scroll-container');
  const prevBtn = document.getElementById('testi-prev-btn');
  const nextBtn = document.getElementById('testi-next-btn');

  if (!container || !prevBtn || !nextBtn) return;

  prevBtn.addEventListener('click', () => {
    container.scrollBy({ left: -360, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    container.scrollBy({ left: 360, behavior: 'smooth' });
  });
}

/* ==========================================================================
   6. Fleet Filter Tabs
   ========================================================================== */
function initFleetFilter() {
  const filterBtns = document.querySelectorAll('.fleet-filter-btn');
  const fleetCards = document.querySelectorAll('.fleet-item-card');

  if (!filterBtns.length || !fleetCards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');

      filterBtns.forEach((b) => {
        b.classList.remove('active', 'bg-sky-500/20', 'text-sky-300', 'border-sky-400/40');
        b.classList.add('bg-white/5', 'text-slate-400', 'border-white/10');
      });

      btn.classList.add('active', 'bg-sky-500/20', 'text-sky-300', 'border-sky-400/40');
      btn.classList.remove('bg-white/5', 'text-slate-400', 'border-white/10');

      fleetCards.forEach((card) => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.style.display = 'flex';
          card.classList.add('animate-fadeIn');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   7. Interactive Download App Modal (Customer & Partner Apps)
   ========================================================================== */
function initDownloadModal() {
  const modal = document.getElementById('download-modal');
  const openBtns = document.querySelectorAll('.btn-open-download-modal');
  const closeBtn = document.getElementById('download-modal-close');
  const tabCustomer = document.getElementById('tab-download-customer');
  const tabPartner = document.getElementById('tab-download-partner');
  const contentCustomer = document.getElementById('download-customer-content');
  const contentPartner = document.getElementById('download-partner-content');

  if (!modal) return;

  function openModal() {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
  }

  function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  }

  openBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal-backdrop-trigger')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // Switch tabs in download modal
  if (tabCustomer && tabPartner && contentCustomer && contentPartner) {
    tabCustomer.addEventListener('click', () => {
      tabCustomer.className = 'flex-1 py-2.5 rounded-full text-xs font-bold transition-all bg-sky-500/20 text-sky-300 border border-sky-400/30';
      tabPartner.className = 'flex-1 py-2.5 rounded-full text-xs font-bold transition-all text-slate-400 hover:text-white border border-transparent';
      contentCustomer.classList.remove('hidden');
      contentPartner.classList.add('hidden');
    });

    tabPartner.addEventListener('click', () => {
      tabPartner.className = 'flex-1 py-2.5 rounded-full text-xs font-bold transition-all bg-sky-500/20 text-sky-300 border border-sky-400/30';
      tabCustomer.className = 'flex-1 py-2.5 rounded-full text-xs font-bold transition-all text-slate-400 hover:text-white border border-transparent';
      contentPartner.classList.remove('hidden');
      contentCustomer.classList.add('hidden');
    });
  }
}

/* ==========================================================================
   Hero Subtle Modern Motion (Micro-Parallax & Interactive Settling)
   ========================================================================== */
function initHeroParallax() {
  const heroSection = document.getElementById('beranda') || document.getElementById('hero-frame');
  const heroImages = document.querySelectorAll('.hero-bg-photo');
  if (!heroSection || !heroImages.length) return;

  // Respect reduced motion accessibility
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Only run micro-mouse parallax on non-touch devices
  if (window.matchMedia('(hover: none)').matches) return;

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;

  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    // Gentle luxury shift (max 8px X, 5px Y)
    targetX = normX * -8;
    targetY = normY * -5;
  });

  heroSection.addEventListener('mouseleave', () => {
    targetX = 0;
    targetY = 0;
  });

  function update() {
    currentX += (targetX - currentX) * 0.05;
    currentY += (targetY - currentY) * 0.05;
    heroImages.forEach((img) => {
      img.style.transform = `scale(1.02) translate(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px)`;
    });
    requestAnimationFrame(update);
  }

  // Start smooth tracking after initial entrance settling
  setTimeout(() => {
    requestAnimationFrame(update);
  }, 2000);
}



/* ==========================================================================
   Real Tactile Click Ripples (Alive & Magnetic Feel)
   ========================================================================== */
function initGlobalClickRipples() {
  document.addEventListener('click', (e) => {
    const target = e.target.closest('button, a, .glass-card, .hero-car-interactive-deck');
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple = document.createElement('span');
    ripple.className = 'click-ripple-bubble';
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

    const prevPos = window.getComputedStyle(target).position;
    if (prevPos === 'static') {
      target.style.position = 'relative';
    }
    target.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
}

