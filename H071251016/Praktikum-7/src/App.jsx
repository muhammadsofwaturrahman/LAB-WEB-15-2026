import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import MenuList from "./components/MenuList.jsx";
import RingkasanPesanan from "./components/RingkasanPesanan.jsx";
import FormPesan from "./components/FormPesan.jsx";
import Footer from "./components/Footer.jsx";

// Data menu ditulis satu kali di sini. Komponen anak hanya menerimanya lewat props.
const menu = [
  { id: 1, nama: "Kopi Susu", kategori: "Kopi", harga: 18000, tersedia: true, deskripsi: "Espresso dengan susu segar dan gula aren." },
  { id: 2, nama: "Americano", kategori: "Kopi", harga: 15000, tersedia: true, deskripsi: "Espresso dengan air panas, rasa kuat dan bersih." },
  { id: 3, nama: "Cappuccino", kategori: "Kopi", harga: 22000, tersedia: true, deskripsi: "Espresso, susu panas, dan busa susu tebal." },
  { id: 4, nama: "Matcha Latte", kategori: "Non-Kopi", harga: 24000, tersedia: true, deskripsi: "Teh hijau matcha dengan susu." },
  { id: 5, nama: "Teh Tarik", kategori: "Non-Kopi", harga: 14000, tersedia: false, deskripsi: "Teh susu yang ditarik hingga berbusa." },
  { id: 6, nama: "Cokelat Panas", kategori: "Non-Kopi", harga: 20000, tersedia: true, deskripsi: "Cokelat pekat dengan susu hangat." },
  { id: 7, nama: "Roti Bakar", kategori: "Makanan", harga: 16000, tersedia: true, deskripsi: "Roti tebal dengan selai cokelat dan keju." },
  { id: 8, nama: "Pisang Goreng", kategori: "Makanan", harga: 12000, tersedia: false, deskripsi: "Pisang goreng renyah dengan taburan keju." },
  { id: 9, nama: "Nasi Goreng", kategori: "Makanan", harga: 25000, tersedia: true, deskripsi: "Nasi goreng kampung dengan telur mata sapi." },
];

function App() {
  // State utama: hanya dua. Data lain (daftar tampil, total) dihitung dari keduanya.
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [pesanan, setPesanan] = useState([]); // berisi { id, jumlah }

  const menuTampil =
    kategoriAktif === "Semua"
      ? menu
      : menu.filter((item) => item.kategori === kategoriAktif);

  // Gabungkan pesanan dengan data menu supaya nama dan harga tidak disimpan dua kali
  const itemPesanan = pesanan.map((p) => {
    const dataMenu = menu.find((item) => item.id === p.id);
    return { ...dataMenu, jumlah: p.jumlah };
  });
  const totalJumlah = itemPesanan.reduce((hasil, item) => hasil + item.jumlah, 0);
  const totalHarga = itemPesanan.reduce((hasil, item) => hasil + item.harga * item.jumlah, 0);

  function handleTambah(id) {
    const sudahAda = pesanan.find((p) => p.id === id);
    if (sudahAda) {
      setPesanan(
        pesanan.map((p) => (p.id === id ? { ...p, jumlah: p.jumlah + 1 } : p))
      );
    } else {
      setPesanan([...pesanan, { id: id, jumlah: 1 }]);
    }
  }

  function handleKirim() {
    setPesanan([]);
  }

  return (
    <div className="flex min-h-screen flex-col bg-kopi-50 text-kopi-900">
      <Navbar
        kategoriAktif={kategoriAktif}
        onKategoriClick={setKategoriAktif}
        totalJumlah={totalJumlah}
        totalHarga={totalHarga}
      />

      <main className="mx-auto grid w-full max-w-6xl flex-1 gap-8 px-4 py-8 lg:grid-cols-[1fr_22rem]">
        <MenuList daftarMenu={menuTampil} onTambah={handleTambah} />

        <aside className="flex flex-col gap-6">
          <RingkasanPesanan
            itemPesanan={itemPesanan}
            totalJumlah={totalJumlah}
            totalHarga={totalHarga}
          />
          <FormPesan jumlahItem={totalJumlah} onKirim={handleKirim} />
        </aside>
      </main>

      <Footer />
    </div>
  );
}

export default App;
