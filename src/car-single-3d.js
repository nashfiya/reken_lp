/**
 * REKEN - Unified 3D Real Automotive Experience
 * 
 * 1. Hero Section: True 3D Photorealistic Car Model (Google <model-viewer>)
 *    - 1 Single 3D Car Object.
 *    - Can be moved / rotated / orbited from ALL DIRECTIONS (360° horizontal, vertical pitch tilt).
 *    - Plain neutral studio background (#0B0C0E), NO blue AI glow.
 *    - Smooth 60 FPS motion with cursor tracking and drag orbit.
 *    - Completely STILL when not interacted with.
 * 
 * 2. Fleet Cards & Showcase: 1-Single Real Car 3D Perspective Stage
 *    - 1 Single Genuine Real Car Photograph per vehicle (Zenix, Alphard, Veloz).
 *    - Perfectly aligned, NO jumping between different photos.
 *    - 100% solid plain studio background matching seamlessly (#0D0E12).
 *    - Smooth 3D gyro tilt and perspective rotation when hovering/dragging.
 *    - Completely STILL when not interacted with.
 */

(function () {
  'use strict';

  // 1. Setup Hero 3D Car Model (<model-viewer>)
  function initHero3DCar() {
    const heroViewer = document.getElementById('hero-3d-car');
    const heroSection = document.getElementById('beranda');
    if (!heroViewer) return;

    let isDragging = false;
    let baseTheta = 45;
    let basePhi = 75;

    // Handle fallback if primary 3D car model encounters network issues
    heroViewer.addEventListener('error', () => {
      if (!heroViewer._triedFallback) {
        heroViewer._triedFallback = true;
        heroViewer.src = 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@master/examples/models/gltf/ferrari.glb';
      }
    });

    // Detect user manual drag on the 3D model
    heroViewer.addEventListener('mousedown', () => { isDragging = true; });
    window.addEventListener('mouseup', () => { isDragging = false; });
    heroViewer.addEventListener('touchstart', () => { isDragging = true; }, { passive: true });
    window.addEventListener('touchend', () => { isDragging = false; }, { passive: true });

    // Smooth cursor movement across Hero canvas rotates the 3D car in real-time
    if (heroSection) {
      heroSection.addEventListener('mousemove', (e) => {
        // If user is actively dragging the 3D model or hovering over buttons, don't override native drag
        if (isDragging || e.target.closest('a, button, input')) return;

        const rect = heroSection.getBoundingClientRect();
        const normX = Math.max(-0.5, Math.min(0.5, (e.clientX - rect.left) / rect.width - 0.5));
        const normY = Math.max(-0.5, Math.min(0.5, (e.clientY - rect.top) / rect.height - 0.5));

        // Smooth rotation in all directions
        const targetTheta = (baseTheta + normX * 80).toFixed(1);
        const targetPhi = (basePhi + normY * 18).toFixed(1);

        heroViewer.cameraOrbit = `${targetTheta}deg ${targetPhi}deg 105%`;
      });

      // When cursor leaves hero, gently settle to neutral pose and STAY STILL
      heroSection.addEventListener('mouseleave', () => {
        if (!isDragging) {
          heroViewer.cameraOrbit = `${baseTheta}deg ${basePhi}deg 105%`;
        }
      });
    }
  }

  // 2. Setup Fleet Cards: 1-Single Real Car 3D Perspective (No photo switching, 100% aligned)
  const FLEET_CARS = {
    zenix: {
      name: 'Toyota Innova Zenix Hybrid',
      src: 'src/images/zenix-real.jpg'
    },
    alphard: {
      name: 'Toyota Alphard VIP Executive',
      src: 'src/images/alphard-real.jpg'
    },
    veloz: {
      name: 'All New Veloz Modern',
      src: 'src/images/veloz-real.jpg'
    }
  };

  function initFleetSingleCar3D() {
    const stages = document.querySelectorAll('.fleet-single-car-stage');
    stages.forEach((stage) => {
      if (stage._fleetInitialized) return;
      stage._fleetInitialized = true;

      const carKey = stage.getAttribute('data-fleet-car') || 'zenix';
      const carData = FLEET_CARS[carKey] || FLEET_CARS.zenix;
      setupSingleCarStage(stage, carData);
    });
  }

  function setupSingleCarStage(container, carData) {
    container.innerHTML = '';

    // Wrapper for 3D perspective
    const wrapper = document.createElement('div');
    wrapper.className = 'fleet-single-car-wrapper';

    // Solid floor contact shadow (Neutral black, no glow)
    const shadow = document.createElement('div');
    shadow.className = 'fleet-car-ground-shadow';
    wrapper.appendChild(shadow);

    // 1 Single Authentic Showroom Car Photograph
    const img = document.createElement('img');
    img.src = carData.src;
    img.alt = carData.name;
    img.className = 'fleet-car-single-img';
    img.loading = 'eager';
    img.decoding = 'async';
    wrapper.appendChild(img);

    // Natural Studio Softbox Sheen (White, no blue light)
    const sheen = document.createElement('div');
    sheen.className = 'fleet-car-studio-sheen';
    wrapper.appendChild(sheen);

    container.appendChild(wrapper);

    // 3D Gyro Motion State
    let targetRotY = 0;
    let targetRotX = 0;
    let currentRotY = 0;
    let currentRotX = 0;
    let targetZ = 0;
    let currentZ = 0;
    let targetSheen = 50;
    let currentSheen = 50;
    let isHovering = false;
    let isDragging = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let dragBaseY = 0;
    let dragBaseX = 0;
    let animId = null;

    function render3D() {
      const ease = 0.12;
      currentRotY += (targetRotY - currentRotY) * ease;
      currentRotX += (targetRotX - currentRotX) * ease;
      currentZ += (targetZ - currentZ) * ease;
      currentSheen += (targetSheen - currentSheen) * ease;

      // Apply 3D perspective rotation to the 1 car
      img.style.transform = `perspective(1000px) rotateY(${currentRotY.toFixed(2)}deg) rotateX(${currentRotX.toFixed(2)}deg) translateZ(${currentZ.toFixed(1)}px)`;

      // Shadow counter-reacts
      const shadowX = (-currentRotY * 1.2).toFixed(1);
      shadow.style.transform = `translateX(${shadowX}px) scale(${(1 - Math.abs(currentRotX) * 0.012).toFixed(3)})`;

      // Softbox studio light moves across paint
      sheen.style.backgroundPosition = `${currentSheen.toFixed(1)}% 50%`;

      const diff = Math.abs(targetRotY - currentRotY) + Math.abs(targetRotX - currentRotX) + Math.abs(targetZ - currentZ);

      if (diff > 0.01 || isHovering || isDragging) {
        animId = requestAnimationFrame(render3D);
      } else {
        // Freeze completely still when idle
        img.style.transform = `perspective(1000px) rotateY(${targetRotY.toFixed(2)}deg) rotateX(${targetRotX.toFixed(2)}deg) translateZ(${targetZ.toFixed(1)}px)`;
        animId = null;
      }
    }

    function scheduleRender() {
      if (!animId) {
        animId = requestAnimationFrame(render3D);
      }
    }

    function onPointerMove(clientX, clientY) {
      const rect = container.getBoundingClientRect();
      const normX = Math.max(-0.5, Math.min(0.5, (clientX - rect.left) / rect.width - 0.5));
      const normY = Math.max(-0.5, Math.min(0.5, (clientY - rect.top) / rect.height - 0.5));

      if (isDragging) {
        const dx = clientX - dragStartX;
        const dy = clientY - dragStartY;
        targetRotY = dragBaseY + (dx / rect.width) * 45;
        targetRotX = Math.max(-14, Math.min(14, dragBaseX - (dy / rect.height) * 25));
      } else {
        // Continuous smooth 3D tilt on cursor hover
        targetRotY = normX * 26; // -13deg to +13deg
        targetRotX = -normY * 14; // -7deg to +7deg
      }

      targetZ = 16;
      targetSheen = (normX + 0.5) * 100;
      scheduleRender();
    }

    container.addEventListener('mouseenter', (e) => {
      isHovering = true;
      onPointerMove(e.clientX, e.clientY);
    });

    container.addEventListener('mousemove', (e) => {
      isHovering = true;
      onPointerMove(e.clientX, e.clientY);
    });

    container.addEventListener('mouseleave', () => {
      isHovering = false;
      isDragging = false;
      // Gently return to level and stay completely still
      targetRotY = 0;
      targetRotX = 0;
      targetZ = 0;
      targetSheen = 50;
      scheduleRender();
    });

    // Drag to rotate
    container.addEventListener('mousedown', (e) => {
      isDragging = true;
      dragStartX = e.clientX;
      dragStartY = e.clientY;
      dragBaseY = currentRotY;
      dragBaseX = currentRotX;
      container.classList.add('is-dragging');
    });

    window.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        container.classList.remove('is-dragging');
        if (!isHovering) {
          targetRotY = 0;
          targetRotX = 0;
          targetZ = 0;
          scheduleRender();
        }
      }
    });

    // Touch Support
    container.addEventListener('touchstart', (e) => {
      if (e.touches.length > 0) {
        isHovering = true;
        isDragging = true;
        dragStartX = e.touches[0].clientX;
        dragStartY = e.touches[0].clientY;
        dragBaseY = currentRotY;
        dragBaseX = currentRotX;
      }
    }, { passive: true });

    container.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    container.addEventListener('touchend', () => {
      isHovering = false;
      isDragging = false;
      targetRotY = 0;
      targetRotX = 0;
      targetZ = 0;
      scheduleRender();
    }, { passive: true });
  }

  // Preload fleet images
  function preloadImages() {
    Object.values(FLEET_CARS).forEach((car) => {
      const img = new Image();
      img.src = car.src;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      preloadImages();
      initHero3DCar();
      initFleetSingleCar3D();
    });
  } else {
    preloadImages();
    initHero3DCar();
    initFleetSingleCar3D();
  }

  window.REKEN_3D = {
    initHero: initHero3DCar,
    initFleet: initFleetSingleCar3D
  };
})();
