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

Berikut adalah struktur direktori utama proyek:
|-- app
|-- bootstrap
|-- config
|-- database
|-- public
|-- resources
|-- routes
|-- storage
|-- tests
|-- vendor
|-- .env
|-- .gitignore
|-- artisan
|-- composer.json
|-- package.json
|-- README.md
|-- server.php
|-- webpack.mix.js


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


