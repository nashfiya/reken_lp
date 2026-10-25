# REKEN SaaS Product Positioning & Engineering Rules

## 1. Core Identity & Ground Truth
- **REKEN** is strictly a **B2B SaaS / Web Dashboard Operating System** designed for rental businesses (car rental, motorbike rental, tour & travel fleet operators).
- **CRITICAL RESTRICTION**: Under NO circumstances should any page, section, text, or metadata promote direct consumer rental services (e.g., "Sewa mobil murah di Jogja", "Sewa Avanza Lepas Kunci", "Paket Wisata Candi Borobudur", "Antar Jemput Bandara YIA"). REKEN does NOT rent cars to consumers; REKEN sells software to rental business owners.

## 2. 9 Core SaaS Feature Modules
Every marketing page and documentation must consistently showcase and refer to these 9 core capabilities:
1. **Manajemen Rental**: Siklus order reservasi, kalender sewa visual, multi-kategori (mobil, motor, minibus), sistem anti-bentrok.
2. **Manajemen Customer (CRM)**: Database pelanggan terpusat, verifikasi identitas (KTP/SIM), riwayat sewa, tagging pelanggan loyal & blacklist.
3. **Manajemen Fleet (Armada)**: Inventaris unit lengkap (plat nomor, odometer, bahan bakar, STNK reminder, asuransi, status unit: Siap / Disewa / Bengkel / Mitra B2B).
4. **Manajemen Keuangan**: Kalkulator invoice dinamis, manajemen uang jaminan (deposit), skema DP & pelunasan, pencatatan kas masuk/keluar, biaya tambahan kustom (overtime, denda BBM, driver).
5. **Chat WhatsApp Terintegrasi AI**: WhatsApp AI CS Copilot 24/7 yang otomatis membalas tanya-jawab calon penyewa, cek ketersediaan unit, dan draft invoice instan.
6. **Dashboard AI & Analytics**: Ringkasan performa bisnis real-time, grafik utilisasi/okupansi armada (%), peramalan tren sewa, dan notifikasi pintar.
7. **Google Calendar Sync**: Integrasi sinkronisasi 2-arah jadwal booking langsung ke kalender operasional tim dan pengemudi.
8. **GPS Tracking & IoT Fleet**: Pelacakan posisi kendaraan real-time, geofencing, histori rute, dan proteksi anti-penggelapan armada.
9. **Laporan Otomatis**: Generate laporan laba-rugi, pembukuan kas harian/bulanan, ekspor CSV/Excel sekali klik.

## 3. Visual & Aesthetic Architecture (Light Modern SaaS)
- **Theme**: Light Modern SaaS (Clean white `#ffffff`, slate-50/100 backgrounds, high-contrast typography, crisp borders `#e2e8f0`, glowing cyan/teal `#06b6d4` and royal blue `#2563eb` highlights).
- **Contrast Breaks**: Dark glassmorphic panels and dark obsidian sections for hero dashboard mockups and high-impact CTA sections.
- **Visual Assets**: Real dashboard screenshots from `src/images/` (`dashboard-fleet.jpg`, `dashboard-calendar.jpg`, `dashboard-booking-modal.jpg`, `dashboard-vehicle-detail.jpg`). No generic rental car stock photos.

## 4. Multi-Page Site Structure
1. `index.html`: Hero SaaS + Live Dashboard Showcase, Metrics Bar, 9-Feature Grid, Interactive Workflow, FAQ, CTA Coba Demo.
2. `fitur.html`: Deep dive 9 modul software REKEN + perbandingan sebelum & sesudah memakai REKEN (Excel vs REKEN).
3. `mitra.html`: Program Kemitraan B2B & Modernisasi Ekosistem Rental (Adopsi Sistem untuk Pengusaha Rental, Agen Travel, & Pemilik Mobil Titipan).
4. `tentang.html`: Cerita & Visi REKEN (Software house pionir digitalisasi operasional rental kendaraan di Indonesia).
5. `kontak.html`: Request Demo Gratis dengan 3-Step Interactive Wizard Form, hotline WhatsApp resmi, dan konsultasi operasional.

## 5. Piagam Perlindungan Bisnis & 7 Garansi Sistem
Setiap materi copywriting, konten landing page, dan penjelasan teknis wajib selaras dengan piagam bisnis ([SKEMA_BISNIS.md](file:///c:/KAIRAV/reken_lp/SKEMA_BISNIS.md)):
1. **Garansi 100% Anti-Bentrok Jadwal (Zero Double-Booking)**: Sistem otomatis menolak booking pada unit & slot jadwal yang sama.
2. **Brankas Rahasia Antar-Rental (Isolasi Data Mutlak)**: Multi-tenant data isolation; data omzet & NIK pelanggan aman mutlak dari rental lain.
3. **Disiplin Hak Akses Karyawan (RBAC)**: Owner (kuasa penuh), Admin Operasional (garasi & SPJ), CS (chat & draf booking), Supir (rute & bensin).
4. **Perlindungan Uang Jaminan (Deposit) & Kejujuran Tagihan**: Pemisahan pos kas omzet vs deposit; rumus tagihan terkunci tanpa manipulasi.
5. **Inspeksi Foto Digital Kendaraan**: Bukti digital baret bodi & bar BBM saat check-in/out dengan tanda tangan digital penyewa.
6. **Transparansi SPJ & Kasbon Driver**: Pertanggungjawaban kasbon (bensin, tol, makan, cadangan) dengan upload nota asli; sisa kasbon wajib klop.
7. **Bursa Kemitraan Subleasing B2B**: Pinjam unit rekanan dengan tarif grosir, margin keuntungan otomatis terhitung transparan.
- **WhatsApp AI Guardrails**: Human-in-the-loop (CS menyetujui draf sebelum terkirim), kepatuhan mutlak pada tarif resmi, serta early-warning peringatan blacklist penyewa bermasalah.

