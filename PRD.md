# Product Requirements Document (PRD): REKEN B2B SaaS Platform Landing Page

## 1. Executive Summary & Visi Produk
**REKEN** adalah sistem informasi manajemen dan platform Software-as-a-Service (SaaS) berbasis cloud yang didesain khusus sebagai **Operating System untuk Bisnis Rental Kendaraan** (rental mobil, motor, minivan tour, dan bus pariwisata).

REKEN memecahkan inefisiensi kronis di industri rental — seperti jadwal booking bentrok, pencatatan kas manual, chat customer di WhatsApp yang lambat terlayani, dan inventaris armada yang tidak terpantau secara real-time.

Proyek ini bertujuan menghadirkan **Website Pemasaran & Company Profile Publik Multi-Halaman** yang berdaya konversi tinggi, elegan, berbasis estetika **Light Modern SaaS**, dan berfokus 100% pada demonstrasi keunggulan fitur dashboard REKEN kepada pemilik bisnis rental di seluruh Indonesia.

---

## 2. Target Pengguna (Audience)
1. **Pengusaha Rental UMKM (1–10 Unit)**: Butuh transisi cepat dari pembukuan buku manual/Excel ke sistem digital rapi bebas bentrok.
2. **Operator Rental Berkembang (10–50 Unit)**: Butuh otomatisasi WhatsApp CS, sinkronisasi Google Calendar, dan tracking kas/deposit.
3. **Enterprise & Multi-Branch Fleet (50+ Unit)**: Butuh analitik utilisasi armada, integrasi IoT GPS telematika, dan hak akses staf terstruktur.

---

## 3. Arsitektur 9 Modul Utama Dashboard REKEN
1. **Manajemen Rental (Booking Lifecycle & Timeline)**:
   - Visual timeline interaktif (Gantt schedule) dengan fitur geser horizontal tanggal dan tukar mobil vertikal.
   - Deteksi otomatis anti-bentrok jadwal antar unit armada.
2. **Manajemen Customer (CRM Terpusat)**:
   - Profil pelanggan lengkap dengan histori sewa, verifikasi KTP/SIM, dan fitur blacklist/whitelist pelanggan bermasalah.
3. **Manajemen Fleet (Armada Kendaraan)**:
   - Katalog unit mobil, motor, dan bus lengkap dengan status real-time (Siap Disewa, Sedang Disewa, Di Bengkel, Mitra B2B).
   - Pengingat masa berlaku STNK, polis asuransi all-risk, dan riwayat buku servis berkala.
4. **Manajemen Keuangan & Invoicing**:
   - Kalkulasi otomatis biaya sewa, jasa driver, antar-jemput bandara, overtime, dan denda BBM.
   - Pencatatan uang jaminan (security deposit), skema DP + pelunasan, serta cetak invoice digital.
5. **Chat WhatsApp Terintegrasi AI (AI CS Copilot 24/7)**:
   - Asisten AI cerdas yang merespons pertanyaan pelanggan di WhatsApp selama 24 jam penuh, memeriksa stok unit real-time, dan menyiapkan draf reservasi instan.
6. **Dashboard AI & Predictive Analytics**:
   - Metrik kesehatan operasional: tingkat utilisasi armada (%), peramalan pendapatan, dan deteksi unit idle.
7. **Google Calendar Sync**:
   - Sinkronisasi otomatis dua arah setiap reservasi baru langsung ke kalender Google tim operasional dan driver.
8. **GPS Tracking & IoT Fleet Telematics**:
   - Integrasi pelacakan posisi kendaraan real-time, histori pergerakan, dan geofencing untuk keamanan armada.
9. **Laporan Otomatis & Ekspor Data**:
   - Pembuatan laporan laba-rugi operasional, pembukuan kas, serta ekspor file CSV/Excel sekali klik.
   - Manajemen Surat Perintah Jalan (SPJ) digital driver dan pertanggungjawaban kasbon bensin/tol.

---

## 4. Skema Bisnis & 7 Garansi Perlindungan Operasional
*(Rujukan lengkap: [SKEMA_BISNIS.md](file:///c:/KAIRAV/reken_lp/SKEMA_BISNIS.md))*

1. **Garansi 100% Anti-Bentrok Jadwal (Zero Double-Booking)**: Sistem otomatis menolak pemesanan ganda di tanggal/jam yang sama.
2. **Brankas Rahasia Antar-Rental (Isolasi Data Mutlak)**: Arsitektur multi-tenant dengan proteksi dinding data permanen antar-organisasi rental.
3. **Disiplin Hak Akses Karyawan (RBAC)**: Pemisahan tegas wewenang Owner (kuasa penuh), Admin Operasional (garasi & SPJ), CS (chat & draf booking), dan Supir (rute & odometer bensin).
4. **Perlindungan Uang Jaminan (Deposit) & Kejujuran Tagihan**: Pemisahan kantong kas sewa vs deposit; rumus invoice dinamis otomatis tanpa celah manipulasi.
5. **Inspeksi Foto Digital Kendaraan**: Dokumentasi visual baret bodi dan bar BBM saat check-in & check-out dengan tanda tangan digital penyewa.
6. **Transparansi SPJ & Kasbon Driver**: Pencatatan uang jalan (bensin, tol, makan, cadangan), supir upload nota asli, dan sisa kasbon wajib klop.
7. **Bursa Kemitraan Subleasing B2B**: Pinjam unit rekanan aman bertarif grosir kemitraan dengan perhitungan margin keuntungan bersih seketika.

### Batasan Asisten WhatsApp AI (AI Guardrails)
- **Human-in-the-Loop**: AI hanya membuat draf penawaran; pesan terkirim wajib disetujui staf CS.
- **Kepatuhan Tarif Resmi**: AI dilarang keras mengarang tarif atau memberi diskon sepihak.
- **Deteksi Dini Blacklist**: Alert otomatis jika calon penyewa terindikasi bermasalah atau masuk daftar hitam penggelapan rental.

---

## 5. Struktur Arsitektur Multi-Page
- **`index.html` (Beranda)**:
  - Header Island dengan logo REKEN, navigasi menu, dan CTA Demo.
  - Hero Section dengan headline punchy, metrik sosial ("100+ Rental Terhubung"), tombol dual CTA, dan visual showcase dashboard interaktif.
  - Section 9 Modul Fitur (Bento Grid Modern) & 7 Garansi Sistem.
  - Section Interactive Workflow (Alur Otomatisasi Booking).
  - Section FAQ & CTA Demo Penutup.
- **`fitur.html` (Deep Dive Modul)**:
  - Penjelasan mendalam 9 fitur inti dashboard dengan screenshot asli.
  - Tabel perbandingan: *Mengelola Rental Tradisional (Excel & Manual)* vs *Menggunakan REKEN SaaS*.
  - Uraian alur inspeksi digital, SPJ driver, dan pemisahan deposit kas.
- **`mitra.html` (Kemitraan & Adopsi Ekosistem)**:
  - Panduan bagi pengusaha rental lokal untuk mengadopsi software REKEN.
  - Program kemitraan unit titip mobil dan kolaborasi bursa subleasing B2B antar-vendor.
- **`tentang.html` (Tentang REKEN)**:
  - Cerita latar belakang pendirian REKEN sebagai software house karya anak bangsa yang fokus memodernisasi industri rental kendaraan.
  - Visi misi, pilar keandalan sistem, standar isolasi data, dan hasil 30 skenario uji otomatis lulus 100%.
- **`kontak.html` (Jadwalkan Demo & Hubungi Kami)**:
  - Formulir kualifikasi demo interaktif 3 tahap (3-Step Click Wizard: Jumlah Armada -> Kendala Utama -> Kontak WhatsApp).
  - Hotline WhatsApp 24 jam dan info konsultasi sistem.

---

## 6. Standar Desain Visual (Light Modern SaaS)
- **Aesthetic**: Light, clean, airy modern SaaS (latar putih `#ffffff` & abu-abu slate `#f8fafc`).
- **Accent**: Royal blue (`#2563eb`) & cyan/teal (`#06b6d4`) diambil langsung dari aksen UI dashboard REKEN.
- **Contrast**: Elemen kontras gelap premium pada browser mockup shell dan banner CTA bawah.
- **Aset Gambar**: Menggunakan tangkapan layar asli dashboard REKEN (`src/images/dashboard-*.jpg`). Bebas foto stok mobil rental konsumen.
