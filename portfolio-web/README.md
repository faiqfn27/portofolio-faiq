# 🌐 Portofolio Digital - Faiq Fanani

Website portofolio modern, responsif, dan interaktif yang dirancang khusus untuk **Faiq Fanani**, mahasiswa program studi **Sistem Informasi, Universitas Sunan Gresik**.

Terinspirasi dari desain portofolio minimalis modern (seperti referensi video *RyHar Portfolio*), dilengkapi fitur canggih seperti **Floating Pill Navbar**, **Dark & Light Mode Switcher**, **Vertical Experience Timeline**, **Interactive Project Modals**, dan **Smart AI Assistant Chatbot** yang dapat menjawab pertanyaan pengunjung secara otomatis.

---

## ✨ Fitur-Fitur Utama

1. **Minimalist Loading Screen**: Animasi loader halus dengan inisial logo dan loading bar yang elegan sebelum masuk ke halaman utama.
2. **Floating Island Pill Navbar**:
   - Desain pill melayang dengan efek frosted glass (*backdrop-filter blur*).
   - Indikator aktif otomatis (*scrollspy*) saat halaman digulir.
   - Tombol toggle mode Gelap (*Dark*) & Terang (*Light*) yang tersimpan otomatis di *LocalStorage*.
   - Menu drawer responsif untuk tampilan *smartphone*.
3. **Hero Section Dinamis**:
   - Efek mengetik otomatis (*typewriter effect*) dengan berbagai peran & fokus keahlian.
   - Ringkasan profil mahasiswa Sistem Informasi Universitas Sunan Gresik.
   - Tombol aksi utama (*Explore Work* & *Download CV*).
   - Avatar siluet modern dengan efek aura *glow* serta kartu badge mengambang (*Universitas Sunan Gresik*, *Sistem Informasi*, *Web & System Dev*).
4. **Infinite Marquee Ticker**: Baris teks berjalan halus secara terus-menerus menampilkan keahlian dan identitas.
5. **About Me & Personal Details**:
   - Kartu profil identitas visual.
   - Penjelasan *Who Am I* dan *My Approach* (Clean code, arsitektur data, desain intuitif).
   - Tabel *Personal Details* lengkap (Nama, Kampus, Program Studi, Status Mahasiswa, Domisili Gresik).
6. **Career Path & Academic Timeline**:
   - Garis waktu vertikal dengan titik *glowing* di tengah (desain identik dengan referensi video).
   - Pengalaman studi di Universitas Sunan Gresik, riset web kampus, dan proyek mandiri.
   - Label badge teknologi pada setiap pencapaian.
7. **Categorized Tech Stack**:
   - Kartu-kartu skill modern dengan ikon dan efek *hover lift*.
   - Terbagi rapi ke dalam: *Frontend Languages & Frameworks*, *Backend & Database Core*, serta *System Analysis, Tools & Design* (Figma, Git, UML/BPMN).
8. **Selected Works / Projects Showcase**:
   - Mockup browser realistis untuk setiap proyek (SIAKAD Sunan Gresik, GresikMart UMKM, Smart Portfolio).
   - Tombol filter kategori (*Web App*, *Sistem Informasi*, *AI & Otomasi*).
   - Tombol **VIEW DETAILS** yang membuka popup modal interaktif berisi deskripsi lengkap, daftar fitur, teknologi, dan tautan repositori.
9. **Interactive Contact Form & Direct Info**:
   - Formulir pesan interaktif dengan efek fokus modern dan notifikasi toast saat berhasil dikirim.
   - Info kontak cepat (Email, WhatsApp, Lokasi di Gresik).
10. **🤖 Faiq AI Assistant (Virtual Chatbot)**:
    - Widget asisten pintar di pojok kanan bawah (seperti fitur utama pada referensi video).
    - Status *Online* dengan lampu indikator hijau.
    - Dilengkapi *quick question chips* ("kamu siapa?", "kuliah di mana?", "keahlian apa saja?", "proyek apa saja?").
    - Mesin pemrosesan teks cerdas berbahasa Indonesia dengan animasi *typing indicator* tiga titik.
11. **Curriculum Vitae (CV) Modal & Cetak**:
    - Tombol "Download CV" membuka lembar ringkasan CV lengkap.
    - Terintegrasi tombol "Cetak / Simpan PDF" (*window.print()*).

---

## 🚀 Cara Menjalankan Portofolio

Website ini dirancang **Zero-Dependency** (tidak memerlukan instalasi dependensi berat), sehingga Anda memiliki beberapa cara mudah untuk menjalankannya:

### Cara 1: Buka Langsung di Browser (Paling Cepat)
Cukup klik ganda (double-click) file **`index.html`** di Windows Explorer. Website akan langsung terbuka di Google Chrome, Microsoft Edge, atau browser pilihan Anda.

### Cara 2: Menggunakan File `start.bat` (Windows)
Cukup klik ganda file **`start.bat`**. Browser Anda akan otomatis terbuka ke `http://localhost:3000` dan server lokal akan aktif.

### Cara 3: Menggunakan Terminal / Node.js
Buka Command Prompt atau PowerShell di folder ini, lalu jalankan:
```bash
node server.js
```
atau
```bash
npm start
```
Buka browser dan kunjungi: **`http://localhost:3000`**

---

## 📁 Struktur Berkas

```
faiq-portfolio/
├── index.html        # Struktur semantik HTML5, meta tag, modal, & AI widget
├── style.css         # Styling modern, variabel CSS (Dark/Light), layout & animasi
├── script.js         # Logika interaktif: loader, scrollspy, chatbot AI, modal
├── server.js         # Server HTTP Node.js bawaan (ringan & cepat)
├── package.json      # Konfigurasi npm scripts
├── start.bat         # Shortcut 1-klik untuk menjalankan di Windows
└── README.md         # Dokumentasi lengkap proyek
```

---

## 🎨 Panduan Menambahkan / Mengganti Foto Profil

Ada 2 cara yang sangat mudah untuk memasang foto Anda:

- **Cara 1 (Langsung dari Browser)**: Buka website, pada kartu foto di samping kanan ada tombol **📷 Ubah Foto**. Klik tombol tersebut dan pilih foto dari laptop/komputer Anda. Foto akan langsung tampil dan tersimpan otomatis!
- **Cara 2 (Menaruh File Foto Permanen)**: Cukup salin file foto Anda (format JPG/PNG) ke dalam folder:
  `C:\Users\Acer\.gemini\antigravity\scratch\faiq-portfolio\assets\`
  lalu beri nama file tersebut: **`profile.jpg`**. Foto akan otomatis tampil di Hero Section dan halaman About Me!
2. **Mengubah Kontak & Tautan Sosial Media**:
   Buka `index.html` dan cari bagian `class="hero-connect"` atau `id="contact"`. Ganti tautan Instagram, LinkedIn, GitHub, dan alamat email sesuai dengan akun asli Anda.
3. **Menambahkan Proyek Baru**:
   Buka `script.js` pada objek `projectsData` untuk menambahkan rincian proyek baru, serta duplikasi elemen `<article class="project-card">` di `index.html`.

---

## 🌐 Cara Deploy ke Internet (Gratis)

- **GitHub Pages**: Buat repositori baru di GitHub dengan nama `faiq-portfolio`, upload semua file di folder ini, lalu aktifkan *GitHub Pages* di menu *Settings > Pages*.
- **Vercel / Netlify**: Tarik folder ini langsung (drag & drop) ke dasbor [Vercel](https://vercel.com) atau [Netlify](https://netlify.com) untuk mendapatkan domain web gratis dalam hitungan detik.

---
*Dibuat untuk Faiq Fanani • Mahasiswa Sistem Informasi Universitas Sunan Gresik*
