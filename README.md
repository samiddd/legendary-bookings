# Legendary Bookings

PRD — Web Barbershop El Legendary Malang
cukup buatkan tampilannya aja dulu ya, ga usah sampe ke backend dan database. karena limit terbatas. yg admin ga perlu lengkap dulu cukup dashboard nya dulu aja 1 halaman cukup.  diluar itu gausah dikerjakan dulu ya. berikut PRD lengkapnya. kita prioritaskan tampilan dulu aja di lovable ini.  ga usah kerjakan semua halaman karena kredit terbatas.

1. Tujuan Produk

Website Barbershop El Legendary Malang digunakan untuk:

Menampilkan informasi barbershop.

Menampilkan layanan dan barber.

Memudahkan customer melakukan booking.

Menjual produk grooming.

Membantu admin mengelola booking dan pesanan.

2. Struktur Halaman

A. Home

Isi

Hero

CTA Booking

Keunggulan The Legend

Layanan unggulan

Barber + Rating

Produk grooming

Lokasi

CTA Booking

Footer

Requirement

Customer dapat menuju booking dari CTA utama.

Customer dapat melihat layanan, barber, produk, dan lokasi tanpa harus mencari ke halaman lain.

B. Services

Isi

Daftar seluruh layanan

Nama layanan

Deskripsi

Harga

Estimasi durasi

CTA Booking

Requirement

Layanan dikelompokkan dengan jelas.

Customer dapat memilih layanan dan langsung menuju booking.

C. Barbers

Isi

Foto barber

Nama

Spesialisasi

Rating

Deskripsi singkat

Requirement

Customer dapat melihat profil masing-masing barber.

Barber yang tidak tersedia dapat dinonaktifkan oleh admin.

D. Booking

Booking dibuat sesederhana mungkin.

Flow

1. Pilih layanan

Customer memilih layanan yang tersedia.

2. Pilih barber

Customer memilih barber.

3. Pilih jadwal

Customer memilih:

Tanggal

Jam

Sistem hanya menampilkan slot yang masih tersedia.

4. Data customer

Customer mengisi:

Nama

Nomor WhatsApp

5. Konfirmasi

Tampilkan:

Layanan

Barber

Tanggal

Jam

Harga

Customer melakukan konfirmasi booking.

Requirement

Booking menghasilkan kode booking.

Satu slot tidak boleh digunakan oleh dua customer pada waktu yang sama.

Slot mengikuti jadwal barber.

Customer dapat mengecek booking menggunakan kode booking.

Konfirmasi dapat diarahkan ke WhatsApp barbershop.

Status Booking

Pending

Confirmed

Completed

Cancelled

E. Cek Booking / Pesanan

Isi

Form:

Kode booking/order

Nomor WhatsApp

Hasil

Untuk booking:

Kode booking

Nama

Layanan

Barber

Tanggal

Jam

Status

Untuk order produk:

Nomor order

Produk

Total

Status

F. Products

Isi

Foto produk

Nama produk

Deskripsi

Harga

Stok

Tombol beli

Requirement

Customer dapat memilih quantity.

Produk dapat dimasukkan ke keranjang.

Sistem harus mencegah pembelian melebihi stok.

G. Checkout Produk

Isi

Daftar produk

Quantity

Subtotal

Total

Nama customer

Nomor WhatsApp

Metode pembayaran

Informasi pickup

Requirement

Setelah checkout dibuat nomor order.

Produk hanya dapat diambil di barbershop.

Stok diperbarui setelah transaksi berhasil.

3. Admin

Admin dibuat sederhana dan fokus pada operasional utama.

A. Dashboard

Menampilkan:

Booking hari ini

Booking mendatang

Booking pending

Order produk

Produk stok rendah

Tidak perlu dashboard dengan terlalu banyak statistik.

B. Booking

Admin dapat:

Melihat daftar booking.

Filter berdasarkan tanggal.

Melihat detail booking.

Confirm booking.

Cancel booking.

Mark as Completed.

Data booking

Kode booking

Nama customer

WhatsApp

Layanan

Barber

Tanggal

Jam

Harga

Status

C. Barber

Admin dapat:

Tambah barber

Edit barber

Aktif/nonaktifkan barber

Mengatur spesialisasi

Mengatur jadwal kerja

D. Services

Admin dapat:

Tambah layanan

Edit layanan

Aktif/nonaktifkan layanan

Mengatur harga

Mengatur durasi

Mengatur deskripsi

E. Products

Admin dapat:

Tambah produk

Edit produk

Aktif/nonaktifkan produk

Mengatur harga

Mengatur stok

Upload gambar

F. Orders

Admin dapat:

Melihat daftar order.

Melihat detail order.

Melihat status pembayaran.

Mengubah status order.

Menandai order siap diambil.

Menandai order selesai.

Membatalkan order.

Status Order

Pending

Paid

Ready for Pickup

Completed

Cancelled

4. Business Rules

Customer hanya dapat memilih slot yang tersedia.

Satu barber tidak dapat memiliki booking yang bertabrakan.

Booking harus mengikuti jadwal kerja barber.

Customer tidak dapat membeli produk melebihi stok.

Produk hanya menggunakan metode pickup di barbershop.

Admin dapat mengubah status booking dan order.

5. MVP

Wajib

Home

Services

Barbers

Booking

Cek Booking/Order

Products

Cart

Checkout

Admin Dashboard

Booking Management

Barber Management

Service Management

Product Management

Order Management

Tidak termasuk MVP

Customer account/login

Membership

Loyalty point

Voucher

Advanced analytics

Automated notification

Multi-branch

Settings management

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8b1ce0d2-0c51-438b-b256-1ab02ae7efcf).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
