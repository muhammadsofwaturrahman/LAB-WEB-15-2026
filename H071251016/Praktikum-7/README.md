# Kedai Kopi Senja

Halaman pemesanan mandiri untuk Kedai Kopi Senja. Dibuat dengan React (Vite), JavaScript (JSX), dan Tailwind CSS.

## Menjalankan

```
npm install
npm run dev
```

## Struktur

- `src/App.jsx`: data menu (satu-satunya sumber) dan state utama (`kategoriAktif`, `pesanan`).
- `src/components/Navbar.jsx`: nama kedai, pilihan kategori, jumlah pesanan dan total harga di bagian atas.
- `src/components/MenuList.jsx`: daftar menu sesuai kategori aktif.
- `src/components/MenuCard.jsx`: satu menu, dengan state detail sendiri dan tombol Tambah.
- `src/components/RingkasanPesanan.jsx`: ringkasan pesanan dan total harga.
- `src/components/FormPesan.jsx`: form nama dan nomor meja, dengan validasi.
- `src/components/Footer.jsx`: footer.
