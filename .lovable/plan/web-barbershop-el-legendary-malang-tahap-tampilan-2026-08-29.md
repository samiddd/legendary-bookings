# Web Barbershop El Legendary Malang — Tahap Tampilan

Fokus tahap ini: tampilan (frontend) saja. Tanpa backend, tanpa database, data masih statis di dalam kode. Arah desain: "Serene Organic Minimal" — nuansa charcoal hangat, aksen emas & bata, tipografi Bebas Neue + Oswald + Work Sans.

## Halaman yang dikerjakan (5)

1. **Home (`/`)** — hero, keunggulan, layanan unggulan, barber + rating (scroll horizontal), produk grooming, ringkasan booking, lokasi, footer. Persis mengikuti komposisi desain terpilih.
2. **Services (`/services`)** — daftar lengkap layanan: nama, deskripsi, harga, estimasi durasi, tombol booking per layanan.
3. **Barbers (`/barbers`)** — kartu barber: foto, nama, spesialisasi, rating, deskripsi singkat, badge status tersedia/nonaktif.
4. **Booking (`/booking`)** — wizard 4 langkah yang berfungsi di sisi tampilan: pilih layanan → pilih barber → pilih tanggal & jam (slot statis, slot terisi tampil disabled) → isi nama & nomor WhatsApp → layar konfirmasi dengan kode booking contoh dan tombol lanjut ke WhatsApp.
5. **Admin Dashboard (`/admin`)** — satu halaman: kartu ringkasan (booking hari ini, booking mendatang, booking pending, order produk, produk stok rendah) + tabel booking hari ini. Tampilan saja, tanpa aksi nyata.

Halaman lain (Cek Booking, Products, Cart, Checkout, dan menu admin lainnya) belum dikerjakan sesuai permintaan.

## Detail teknis

- Design token dari prototipe dipindahkan ke `src/styles.css` (charcoal, coal, sand, sand-dim, leather, gold, brick) dalam format oklch; font dimuat lewat `<link>` di `src/routes/__root.tsx`.
- Header + footer bersama dipasang di `__root.tsx` mengelilingi `<Outlet />`, navigasi memakai `<Link>` TanStack Router. Halaman admin tanpa header publik.
- Data contoh (layanan, barber, produk, slot, booking) di satu file `src/data/mock.ts` agar mudah diganti ke database nanti.
- State wizard booking pakai `useState` lokal; validasi ringan (tidak bisa lanjut sebelum memilih).
- Gambar: hero, 4 foto barber, 4 foto produk, dan peta lokasi dibuat lewat image generation lalu diimpor sebagai aset.
- Setiap route punya `head()` sendiri (title, description, og) dalam Bahasa Indonesia.
- Semua harga ditulis dalam Rupiah.
