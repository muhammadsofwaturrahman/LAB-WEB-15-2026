import MenuCard from "./MenuCard.jsx";

function MenuList({ daftarMenu, onTambah }) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-extrabold text-kopi-900">Daftar Menu</h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {daftarMenu.map((item) => (
          <MenuCard
            key={item.id}
            nama={item.nama}
            kategori={item.kategori}
            harga={item.harga}
            tersedia={item.tersedia}
            deskripsi={item.deskripsi}
            onTambah={() => onTambah(item.id)}
          />
        ))}
      </div>
    </section>
  );
}

export default MenuList;
