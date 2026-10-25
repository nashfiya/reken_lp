# 📋 Piagam Perlindungan Bisnis & Garansi Sistem REKEN
### *Panduan Standar Operasional, Skema Bisnis & Keamanan untuk Pemilik Rental, Investor, dan Manajemen*

---

## 🎯 Mengapa Dokumen Ini Penting?
Sebelum aplikasi **REKEN** diluncurkan ke pasar, kami telah mengunci **10 Aturan Baku (Hukum Sistem)** yang ditanam langsung ke dalam arsitektur software dan database.

Aturan-aturan ini memastikan aplikasi:
1. **Tidak bisa "berhalusinasi"**: Data dan status armada selalu riil dan tervalidasi.
2. **Tidak bisa salah hitung uang**: Seluruh formula tagihan, deposit jaminan, potongan bensin, dan kasbon supir terkunci secara sistemik.
3. **Tidak bisa membocorkan data bisnis**: Arsitektur multi-tenant dengan isolasi data mutlak antar-organisasi rental.

Dokumen ini menjadi rujukan utama skema bisnis, logika operasional, dan materi copywriting landing page untuk membangun kepercayaan pemilik rental kendaraan di Indonesia.

---

## 🛡️ 7 Garansi Perlindungan Nyata untuk Rental Anda

### 1. Garansi 100% Anti-Bentrok Jadwal (Zero Double-Booking)
* **Masalah Lapangan**: Dua pelanggan memesan mobil Innova Zenix yang sama di tanggal yang sama karena admin lupa mencatat atau salah lihat jadwal di kertas/spreadsheet Excel.
* **Perlindungan REKEN**:
  - Sistem menolak secara otomatis pemesanan mobil jika unit tersebut sudah terisi pada tanggal/jam yang diminta.
  - Timeline visual (Gantt) mengunci ketersediaan unit secara real-time.
  - Tidak ada lagi drama tamu mendarat di bandara tapi mobil belum tersedia di pool.

---

### 2. Brankas Rahasia Antar-Rental (Isolasi Data Mutlak / Multi-Tenant Security)
* **Masalah Lapangan**: Khawatir data pelanggan VIP, nomor telepon penyewa, atau rincian omzet rental diintip oleh pemilik rental lain yang menggunakan aplikasi yang sama.
* **Perlindungan REKEN**:
  - Setiap organisasi rental memiliki "kamar brankas digital" tersendiri (Multi-tenant Data Isolation).
  - Meskipun berada di satu infrastruktur cloud, Rental A **mustahil** melihat data pelanggan, daftar harga khusus, riwayat NIK, maupun daftar armada milik Rental B.

---

### 3. Disiplin Hak Akses Karyawan (Role-Based Access Control / RBAC)
* **Masalah Lapangan**: Staf magang atau supir tidak sengaja menghapus data armada, atau Customer Service (CS) mengubah tarif sewa dan melihat laporan laba bersih pemilik.
* **Perlindungan REKEN**:
  - **Pemilik (Owner)**: Kuasa penuh atas laporan keuangan, pembukuan laba-rugi, konfigurasi tarif sewa resmi, penambahan karyawan, dan pengaturan bisnis global.
  - **Admin Operasional**: Hanya berwenang mengelola garasi, jadwal servis berkala mobil, dan menerbitkan Surat Perintah Jalan (SPJ).
  - **Customer Service (CS)**: Hanya bisa melayani chat WhatsApp calon penyewa dan membuat draf pesanan. Tidak bisa melihat gaji supir atau menghapus unit mobil.
  - **Supir (Driver)**: Hanya melihat rute penugasan tamu mereka dan mencatat kilometer bensin. Dilarang keras melihat data keuangan kantor.

---

### 4. Perlindungan Uang Jaminan (Deposit) & Kejujuran Tagihan
* **Masalah Lapangan**: Uang jaminan sewa (deposit misal Rp 500.000) sering kali tercampur dengan kas omzet harian kantor, sehingga ketika tamu mengembalikan mobil dengan mulus, kasir kebingungan atau kekurangan uang tunai untuk mengembalikan deposit.
* **Perlindungan REKEN**:
  - Uang sewa murni dan uang jaminan dipisahkan ke kantong pos kas yang berbeda.
  - Rumus tagihan otomatis terkunci:
    $$\text{Total Bayar} = \text{Harga Sewa Unit} + \text{Jasa Supir} - \text{Diskon Resmi} + \text{Pajak}$$
  - Kasir tidak bisa memanipulasi angka atau lalai mengembalikan uang jaminan tamu.

---

### 5. Bukti Kejujuran Kondisi Kendaraan (Inspeksi Foto Digital)
* **Masalah Lapangan**: Tamu mengembalikan mobil dalam keadaan bumper lecet/penyok atau bensin berkurang 3 bar, namun tamu mengelak dan menuduh baret tersebut sudah ada sejak serah terima.
* **Perlindungan REKEN**:
  - **Saat Mobil Keluar (Check-in)**: Petugas menandai baret lama pada diagram visual mobil interaktif dan memotret level indikator bensin (misal: Full 8 bar). Tamu menandatangani bukti berita acara ini secara digital di layar smartphone.
  - **Saat Mobil Kembali (Check-out)**: Jika ditemukan baret baru atau bensin berkurang (misal kurang 3 bar), sistem otomatis menghitung denda secara adil (misal: Rp 75.000 per bar bensin) dan memotongnya langsung dari saldo uang jaminan deposit.

---

### 6. Transparansi Uang Jalan Supir (SPJ & Kasbon Digital)
* **Masalah Lapangan**: Supir diberi kasbon bensin dan tol Rp 800.000, tetapi saat pulang nota tidak jelas, kwitansi hilang, dan sisa uang kasbon tidak dikembalikan.
* **Perlindungan REKEN**:
  - Setiap penugasan perjalanan wajib memiliki **Surat Perintah Jalan (SPJ) Digital**.
  - Rincian kasbon terstruktur transparan: `Uang Bensin` + `Tol & Parkir` + `Uang Makan Driver` + `Dana Cadangan Darurat`.
  - Begitu tugas selesai, supir mengunggah foto nota asli melalui aplikasi; sisa saldo kasbon dihitung otomatis oleh sistem dan wajib disetorkan kembali ke kasir sebelum SPJ ditutup.

---

### 7. Keamanan Pinjam Unit Antar-Rental Rekanan (Bursa Kemitraan B2B / Subleasing)
* **Masalah Lapangan**: Permintaan sewa sedang membludak saat musim liburan tapi armada garasi Anda sudah habis terpesan. Ingin meminjam ke rental rekanan tetapi takut rugi margin atau rumit menghitung komisi bagi hasil.
* **Perlindungan REKEN**:
  - Rental Anda bisa meminjam unit rekanan secara aman dengan **Tarif Grosir Kemitraan**.
  - Keuntungan bersih dihitung seketika oleh sistem:
    $$\text{Margin Keuntungan Bersih} = \text{Harga yang Dibayar Tamu} - \text{Harga Modal Rental Rekanan}$$
  - Status posisi unit mobil (apakah masih di pool rekanan, sedang diserahkan ke tamu, atau sudah kembali ke rekanan) terpantau transparan secara real-time oleh kedua belah pihak tanpa salah paham.

---

## 🤖 Batasan Tegas untuk Asisten WhatsApp AI (AI Guardrails)

REKEN dilengkapi asisten kecerdasan buatan (AI CS Copilot) untuk membantu Customer Service merespons chat WhatsApp calon tamu 24/7 dengan aturan ketat:

1. **Human-in-the-Loop (AI Tidak Mengirim Pesan Diam-Diam)**:
   AI bertugas menyiapkan **draf saran penawaran harga dan ketersediaan unit**. Pesan hanya akan terkirim ke WhatsApp pelanggan setelah diperiksa dan disetujui (1-klik approval) oleh staf CS manusia.
2. **AI Wajib Taat Tarif Resmi**:
   AI dilarang keras mengarang harga sendiri, mengubah tarif dasar, atau memberikan diskon tanpa izin resmi pemilik rental di sistem.
3. **Penyaring Tamu Berisiko Tinggi (Early Risk Detection)**:
   Jika calon penyewa terindikasi mencurigakan (pernah masuk daftar hitam/blacklist penggelapan rental antar-jejaring atau identitas KTP/SIM tidak lengkap), AI langsung memberi flag peringatan kuning/merah kepada tim operasional garasi.

---

## 📊 Matriks Ringkas: Kebutuhan Stakeholder vs Jaminan Sistem

| Pertanyaan Stakeholder | Jawaban & Jaminan Sistem REKEN |
|---|---|
| *"Apakah data omzet dan pelanggan saya bisa bocor ke rental sebelah?"* | **Mustahil.** Sistem menerapkan dinding pemisah data permanen (multi-tenant isolation) antar-organisasi. |
| *"Bagaimana jika dua tamu memesan unit yang sama pada jam yang sama?"* | **Ditolak otomatis.** Sistem mengunci tanggal & slot jam mobil begitu ada pesanan aktif. |
| *"Bagaimana mengontrol kasbon dan uang bensin supir agar tidak tekor?"* | **Tercatat via SPJ Digital.** Nota wajib diunggah, sisa kasbon wajib klop saat mobil kembali ke pool. |
| *"Bagaimana jika penyewa merusak mobil atau bensin berkurang?"* | **Ada bukti komparasi digital.** Inspeksi check-in & check-out visual; denda dipotong otomatis dari deposit jaminan. |
| *"Apakah staf magang atau supir bisa menghapus data mobil sembarangan?"* | **Tidak bisa.** Hak akses (RBAC) dibatasi kaku; kuasa pembukuan dan hapus aset hanya dipegang Pemilik (Owner). |
| *"Apakah AI WhatsApp bisa salah kasih harga murah ke tamu?"* | **Dilarang keras.** AI terkunci pada tarif resmi sistem dan pesan memerlukan persetujuan CS (human-in-the-loop). |

---

## 🔬 Validasi & Keandalan Sistem
Seluruh aturan bisnis di atas telah diuji menggunakan **30 skenario uji otomatis (automated test suites)** dan berhasil lulus 100%. Fondasi bisnis rental Anda dilindungi oleh aturan sistem yang baku, transparan, dan tidak bergantung pada memori manual manusia.

---

## 💡 Panduan Pemanfaatan Konten untuk Landing Page REKEN
Gunakan pilar-pilar di atas sebagai materi konten edukasi & persuasi pada halaman:
1. **`index.html` (Hero & Keunggulan)**: Tekankan garansi zero double-booking, perlindungan deposit, dan AI Copilot yang aman.
2. **`fitur.html` (Spesifikasi Modul)**:
   - Modul Rental: Visual timeline + zero double-booking guarantee.
   - Modul Keuangan: Pemisahan kantong deposit jaminan vs kas omzet.
   - Modul Armada: Inspeksi foto digital check-in/check-out & BBM bar tracking.
   - Modul Driver & SPJ: Transparansi kasbon & pertanggungjawaban uang jalan.
   - Modul WhatsApp AI: Human-in-the-loop safety & proteksi blacklist.
3. **`mitra.html` (Jaringan B2B Subleasing)**: Tampilkan kemudahan pinjam unit rekanan dengan margin instan dan pelacakan status unit transparan.
4. **`tentang.html` (Keamanan & Integritas)**: Sorot isolasi data multi-tenant dan disiplin hak akses karyawan (RBAC).
