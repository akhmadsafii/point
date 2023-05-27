# Program Point - Sistem Poin Sekolah Dasar

Program Point adalah proyek perusahaan yang dikembangkan sebagai sistem poin untuk sekolah dasar. Sistem ini bertujuan untuk membantu sekolah dalam mengelola dan melacak poin yang diberikan kepada siswa sebagai penghargaan atau sanksi atas perilaku mereka.

## Instalasi

1. Clone repositori ini ke direktori lokal Anda.
2. Jalankan perintah `composer install` untuk menginstal dependensi PHP.
3. Salin file `.env.example` menjadi `.env` dan sesuaikan konfigurasi yang diperlukan (misalnya, konfigurasi database).
4. Jalankan perintah `php artisan key:generate` untuk menghasilkan kunci aplikasi.
5. Jalankan perintah `npm install` untuk menginstal dependensi JavaScript.
6. Jalankan perintah `npm run dev` untuk mengompilasi aset.
7. Jalankan perintah `php artisan serve` untuk menjalankan server pengembangan.

## Deskripsi

Program Point dirancang untuk memberikan kemudahan bagi sekolah dasar dalam mengelola sistem poin untuk siswa. Fitur utama yang disediakan antara lain:

- Pemberian poin positif kepada siswa sebagai penghargaan atas prestasi atau sikap baik.
- Pemberian poin negatif kepada siswa sebagai sanksi atas pelanggaran atau perilaku tidak pantas.
- Melacak dan mencatat poin yang diberikan kepada setiap siswa.
- Menampilkan laporan poin siswa secara rinci atau ringkasan.
- Pengaturan kriteria pemberian poin dan penghitungan total poin siswa.
- Aksesibilitas dan keamanan yang dijamin melalui sistem otentikasi.

Program Point dirancang dengan menggunakan teknologi berikut:

- Front-end: React JS, Inertia.js
- Back-end: Laravel 8
- Database: MySQL

## Teknologi

- Front-end: React JS, Inertia.js
- Back-end: Laravel 8
- Database: MySQL
- Lainnya (jika ada): Redis, Elasticsearch, dll.

## Struktur Direktori


<pre>
<code>
|-- app                   // Direktori untuk kode aplikasi Laravel
|-- bootstrap             // Direktori untuk file bootstrap Laravel
|-- config                // Direktori untuk file konfigurasi Laravel
|-- database              // Direktori untuk migrasi dan pengaturan basis data
|-- public                // Direktori publik, termasuk file JavaScript dan CSS
|-- resources             // Direktori untuk sumber daya seperti template, file aset, dan file bahasa
|-- routes                // Direktori untuk definisi rute aplikasi
|-- storage               // Direktori untuk file yang dihasilkan oleh aplikasi (misalnya, file log, file upload)
|-- tests                 // Direktori untuk file tes
|-- vendor                // Direktori untuk dependensi pihak ketiga
|-- .env                  // File konfigurasi lingkungan
|-- .gitignore            // File untuk mengabaikan file/folder yang tidak perlu di-commit ke Git
|-- artisan               // File utama untuk menjalankan perintah artisan Laravel
|-- composer.json         // File konfigurasi untuk dependensi PHP
|-- package.json          // File konfigurasi untuk dependensi JavaScript
|-- README.md             // Dokumentasi proyek
|-- server.php            // File utama untuk menjalankan aplikasi Laravel
|-- webpack.mix.js        // File konfigurasi untuk kompilasi aset menggunakan Laravel Mix
</code>
</pre>



## Kontribusi

Kami sangat terbuka terhadap kontribusi dari komunitas. Jika Anda ingin berkontribusi pada pengembangan program Point, silakan ikuti langkah-langkah berikut:

1. Fork repositori ini.
2. Buat branch baru untuk fitur atau perbaikan yang akan Anda tambahkan (git checkout -b fitur-baru).
3. Lakukan perubahan yang diperlukan.
4. Commit perubahan Anda (git commit -m 'Menambahkan fitur baru').
5. Push ke branch di repositori Anda (git push origin fitur-baru).
6. Ajukan pull request ke repositori utama.

## Lisensi

Tulis lisensi proyek Anda di sini.


