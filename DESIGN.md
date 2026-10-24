# DESIGN.md - REKEN Design System (Light Modern SaaS)

## Visual World & Identity
- **Design Mode**: Persuade (B2B SaaS Product Landing Page & Informational Hub).
- **Core Aesthetic**: Light Modern Enterprise SaaS (inspired by Linear, Stripe, and modern cloud dashboard UX). Clean crisp canvases with high visual rhythm, deep-slate card structures, micro-animations, and luminous teal/cyan & cobalt accents derived from the live REKEN web dashboard.

## Color Tokens
- **Backgrounds**:
  - `canvas-light`: `#ffffff` (Base background)
  - `canvas-muted`: `#f8fafc` (Slate 50, subtle secondary sections)
  - `canvas-card`: `#ffffff` with crisp `border-slate-200/80` (`#e2e8f0`)
  - `canvas-dark-contrast`: `#090e1a` (Obsidian navy for high-contrast hero mockup frame and final CTA banner)
- **Brand Accents**:
  - `primary-cyan`: `#0ea5e9` / `#06b6d4` (Vibrant cyan/teal matching dashboard status pills & tags)
  - `primary-blue`: `#2563eb` / `#1d4ed8` (Royal blue CTA buttons & interactive highlights)
  - `emerald-active`: `#10b981` (Live active indicator, fleet available tag)
  - `amber-warning`: `#f59e0b` (Hold/Tentative bookings, STNK due reminder)
- **Typography Colors**:
  - `text-primary`: `#0f172a` (Slate 900 - maximum readability)
  - `text-secondary`: `#475569` (Slate 600 - crisp descriptive copy)
  - `text-muted`: `#94a3b8` (Slate 400 - captions & labels)

## Typography
- **Primary Sans**: `Inter`, sans-serif (Weights: 400, 500, 600, 700, 800) — QuotaRing-style grotesk sitewide per user decision, replacing Plus Jakarta Sans.
- **Display Accents**: `Inter Tight`, sans-serif (headings & stat numbers; replaces Outfit)

## Key Interactive Components
1. **Light Frosted Island Navbar**:
   - Fixed top capsule with backdrop-blur, subtle border, logo with cyan pulse dot, smooth nav links, and dual-accent "Coba Demo Gratis" button.
2. **Dashboard Interactive Showcase**:
   - Real dashboard screenshots presented as an interactive browser window inside a dark laptop shell (screen bezel + base bar with hinge notch); the shell scales in from 82% to 100% when scrolled into view (mobility-aware, disabled for reduced motion). Tab switchers (Kalender, Armada, Invoice, AI Copilot) sit above the laptop.
3. **Light / Dark Theme (prep)**: `html.dark` class via Tailwind `darkMode: 'class'`; tokens flipped in `src/style.css` (`:root` / `html.dark`), toggle button (`.theme-toggle-btn`, moon/sun) in the navbar island persisted to `localStorage` (`reken-theme`). Currently styled: global surfaces, nav island, hero.
4. **9-Card Feature Bento Grid**:
   - Balanced cards with clean iconography, status badges, and concrete SaaS workflow benefits.
4. **Interactive 3-Step Qualification Wizard (Kontak)**:
   - Step 1: Jumlah Armada (1-10 unit, 11-30 unit, 31-50 unit, 50+ unit).
   - Step 2: Kendala Terbesar Saat Ini (Jadwal bentrok, chat WA menumpuk, pencatatan kas manual, unit sulit dipantau).
   - Step 3: Pilihan Jadwal Demo & Nomor Kontak WhatsApp.
   - Smooth 1-click WhatsApp instant handoff.
