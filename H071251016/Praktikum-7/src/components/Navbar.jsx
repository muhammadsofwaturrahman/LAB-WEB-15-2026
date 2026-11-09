function Navbar({ kategoriAktif, onKategoriClick, totalJumlah, totalHarga }) {
  const daftarKategori = [
    { id: 1, nama: "Semua" },
    { id: 2, nama: "Kopi" },
    { id: 3, nama: "Non-Kopi" },
    { id: 4, nama: "Makanan" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-kopi-900 text-kopi-50 shadow-md">
      <nav className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <h1 className="text-lg font-extrabold sm:text-xl">Kedai Kopi Senja</h1>
          <p
            className="rounded-full bg-senja px-4 py-1.5 text-xs font-semibold text-kopi-900 sm:text-sm"
            aria-live="polite"
          >
            {totalJumlah} item &middot; Rp {totalHarga.toLocaleString("id-ID")}
          </p>
        </div>

        <ul className="mt-3 flex flex-wrap gap-2">
          {daftarKategori.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onKategoriClick(item.nama)}
                aria-pressed={item.nama === kategoriAktif}
                className={
                  item.nama === kategoriAktif
                    ? "rounded-full bg-kopi-50 px-4 py-1.5 text-sm font-semibold text-kopi-900"
                    : "rounded-full border border-kopi-400/60 px-4 py-1.5 text-sm font-medium text-kopi-100 transition-colors hover:bg-kopi-700"
                }
              >
                {item.nama}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
