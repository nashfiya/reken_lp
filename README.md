# REKEN – Operating System & Dashboard SaaS Bisnis Rental Kendaraan

Official repository for **REKEN.ID** Marketing Landing Page & Informational Web Portal.

REKEN adalah platform Software-as-a-Service (SaaS) all-in-one yang dirancang untuk mendigitalkan seluruh siklus operasional bisnis rental mobil, motor, minivan tour, dan bus pariwisata.

---

## 🚀 9 Modul Unggulan REKEN
1. **Manajemen Rental**: Visual Gantt booking timeline interaktif bebas bentrok jadwal.
2. **Manajemen Customer (CRM)**: Database pelanggan terpusat, histori sewa, dan verifikasi KTP/SIM.
3. **Manajemen Fleet (Armada)**: Inventaris unit mobil & motor, status unit real-time, pengingat STNK & servis.
4. **Manajemen Keuangan**: Kalkulator invoice otomatis, pencatatan kas masuk/keluar, dan uang jaminan (deposit).
5. **Chat WhatsApp AI CS Copilot**: Asisten AI 24/7 otomatis melayani tanya-jawab stok unit & draft booking.
6. **Dashboard AI & Analytics**: Metrik performa bisnis, tingkat utilitas/okupansi armada, dan insight pertumbuhan.
7. **Google Calendar Sync**: Integrasi sinkronisasi jadwal booking otomatis 2-arah ke kalender tim.
8. **GPS Tracking & IoT Fleet**: Pemantauan lokasi armada real-time dan proteksi rute anti-penggelapan.
9. **Laporan Otomatis**: Generate rekap laba-rugi & performa armada ke CSV/Excel dengan 1 klik.

---

## 🎨 Desain Sistem: Light Modern SaaS
- **Gaya Visual**: Light Modern Enterprise SaaS (Clean White `#ffffff`, Slate `#f8fafc`, Aksen Cyan `#06b6d4` & Royal Blue `#2563eb`).
- **Bukti Visual**: Tangkapan layar antarmuka asli dashboard web REKEN (`src/images/`).
- **Navigasi**: Header Island terpadu 5 halaman (Beranda, Fitur, Mitra, Tentang, Kontak) + Tombol CTA "Coba Demo Gratis".
- **Formulir Interaktif**: Wizard 3-tahap sekali klik pada halaman Kontak untuk permintaan demo instan via WhatsApp.

---

## 📂 Struktur Berkas
```text
reken_lp/
├── index.html       # Beranda utama (Hero SaaS, Metrics, 9 Modul, Live Workflow, FAQ)
├── fitur.html       # Bedah mendalam 9 modul sistem & komparasi vs Excel
├── mitra.html       # Hub kemitraan B2B & adopsi sistem untuk pengusaha rental
├── tentang.html     # Cerita pendirian, visi, misi, dan pilar keandalan REKEN
├── kontak.html      # Form kualifikasi demo 3-tahap & kontak WhatsApp resmi
│
├── src/
│   ├── style.css    # Custom CSS: Light Modern SaaS tokens, animations, responsive utilities
│   ├── script.js    # Interaktivitas: Navbar scroll spy, wizard demo 3-step, FAQ accordion, screenshot switcher
│   └── images/      # Aset asli dashboard REKEN (fleet, calendar, booking modal, vehicle detail)
├── SKEMA_BISNIS.md  # Piagam Perlindungan Bisnis & 7 Garansi Sistem (Aturan Baku & Keamanan)
├── PRD.md           # Product Requirements Document
├── PRODUCT.md       # Product Definition & Audience
├── DESIGN.md        # Impeccable Design System Tokens
├── AGENTS.md        # Workspace Positioning Rules
├── TODO.md          # Checklist status pengembangan
├── robots.txt       # Konfigurasi SEO bot
└── sitemap.xml      # Peta situs resmi
```

---

## 💻 Cara Menjalankan
Buka file `index.html` langsung di peramban, atau jalankan server lokal:
```bash
python -m http.server 8090
```
Buka di peramban: `http://localhost:8090`
