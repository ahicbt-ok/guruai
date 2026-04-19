# 📚 GuruAI — Generator Administrasi Guru Berbasis AI

Platform generator administrasi guru cerdas berbasis Gemini AI, siap deploy ke Netlify. Mendukung semua jenjang pendidikan Indonesia (PAUD hingga SMA/SMK).

---

## ✨ Fitur

| Modul | Deskripsi |
|-------|-----------|
| 📄 **RPP / Modul Ajar** | Modul ajar standar Kurikulum Merdeka dengan Profil Pelajar Pancasila |
| 📅 **PROTA** | Program Tahunan alokasi waktu otomatis |
| 🗂️ **PROMES** | Program Semester distribusi materi per minggu |
| 📝 **LKPD** | Lembar Kerja Peserta Didik interaktif (Eksperimen/Diskusi/Proyek/Latihan) |
| ✏️ **Bank Soal & Kisi-kisi** | Soal LOTS/MOTS/HOTS standar AKM/TKA + kisi-kisi otomatis |

**Fitur Tambahan:**
- 🌙 Light / Dark Mode toggle
- ⚙️ Profil guru tersimpan otomatis (nama, NIP, sekolah, kepala sekolah)
- 🔑 Mode Gratis (server) + Mode Kustom (API key sendiri)
- 📄 Export **DOCX** (download .txt, buka di Word/Google Docs)
- 📕 Export **PDF** (via browser print dialog → Save as PDF)
- 🖨️ **Cetak** langsung dari browser
- 📋 Salin teks hasil ke clipboard
- ↩️ Tombol Susun Ulang untuk generate ulang
- TTD otomatis Kepala Sekolah & Guru di setiap dokumen
- Auto-fill dari profil ke semua form

---

## 🏗️ Struktur File

```
guru-ai/
├── index.html                  # Aplikasi utama (single file)
├── netlify.toml                # Konfigurasi deploy Netlify
├── netlify/
│   └── functions/
│       └── gemini.js           # Server function untuk Mode Gratis
└── README.md
```

---

## 🚀 Cara Deploy ke Netlify

### 1. Persiapan API Key Gemini (GRATIS)

1. Buka **https://aistudio.google.com**
2. Login dengan akun Google
3. Klik **"Get API Key"** → **"Create API Key"**
4. Salin key yang dihasilkan (format: `AIza...`)

### 2. Upload ke GitHub

1. Buat repository baru di **https://github.com/new**
2. Upload 3 file/folder: `index.html`, `netlify.toml`, folder `netlify/`
3. Commit dan push

### 3. Deploy di Netlify

1. Buka **https://app.netlify.com**
2. Klik **"Add new site"** → **"Import an existing project"**
3. Pilih **GitHub** → pilih repository yang baru dibuat
4. Biarkan semua pengaturan default → klik **"Deploy site"**

### 4. Tambahkan Environment Variable

Setelah deploy selesai:
1. Di dashboard Netlify → **Site configuration** → **Environment variables**
2. Klik **"Add a variable"**
3. Isi:
   - **Key:** `GEMINI_API_KEY`
   - **Value:** `AIza...` (API key Gemini kamu)
4. Klik **"Save**" → **Deploys** → **"Trigger deploy"**

### 5. Selesai! 🎉

Situs kamu sudah live di URL seperti: `https://nama-acak.netlify.app`

---

## ⚙️ Konfigurasi API Mode

### Mode Gratis (Default)
- Menggunakan API key yang disimpan di server Netlify
- Terbatas oleh kuota harian Gemini API
- Semua pengguna berbagi kuota yang sama
- Cocok untuk penggunaan terbatas / demo

### Mode Kustom (Unlimited)
- Pengguna memasukkan API key Gemini sendiri
- Key disimpan di **localStorage browser** (tidak dikirim ke server)
- Tidak ada batasan dari server GuruAI
- Cocok untuk penggunaan intensif
- API key Gemini Flash gratis hingga batas tertentu

---

## 📋 Kurikulum yang Didukung

- Kurikulum Merdeka (Fase Fondasi — PAUD/TK)
- Kurikulum Merdeka (Fase A-C — SD Kelas 1-6)
- Kurikulum Merdeka (Fase D — SMP Kelas 7-9)
- Kurikulum Merdeka (Fase E-F — SMA/SMK Kelas 10-12)
- Kurikulum 2013 Revisi (K13)

---

## 🔧 Kustomisasi

### Ganti Nama Aplikasi
Di `index.html`, cari dan ganti semua kemunculan `GuruAI` dengan nama brandmu.

### Ganti Model AI
Di `netlify/functions/gemini.js`, ganti:
```
gemini-2.0-flash
```
Menjadi model lain, misalnya:
- `gemini-1.5-flash` (lebih hemat)
- `gemini-1.5-pro` (lebih canggih, lebih mahal)

### Tambahkan Logo
Ganti emoji 📚 di bagian `.topbar-logo .icon` dengan tag `<img>`.

---

## ⚠️ Disclaimer

- Konten yang dihasilkan AI bersifat generatif dan **belum tentu 100% akurat** sesuai konteks lokal sekolah.
- Guru tetap bertanggung jawab penuh atas materi yang digunakan.
- Selalu review, validasi, dan sesuaikan hasil sebelum dicetak/diterapkan.
- Aplikasi ini menggunakan Gemini API yang memiliki batasan kuota per menit/hari.
- Jika kuota habis, tunggu beberapa menit atau gunakan API key sendiri.

---

## 📞 Pengembangan Lanjutan

Fitur yang bisa ditambahkan di versi berikutnya:
- [ ] Simpan riwayat dokumen yang pernah dibuat
- [ ] Share via WhatsApp / link
- [ ] Export ke Google Docs langsung
- [ ] Template khusus per jenjang
- [ ] Multi-bahasa (Indonesia / English)
- [ ] Login/register untuk profil cloud

---

## 📄 Lisensi

Dikembangkan untuk kemajuan pendidikan Indonesia.
Bebas digunakan dan dimodifikasi untuk keperluan pendidikan.

---

*GuruAI v1.0.0 — © 2026*
