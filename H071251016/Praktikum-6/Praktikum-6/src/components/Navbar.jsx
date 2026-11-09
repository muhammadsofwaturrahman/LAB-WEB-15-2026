function Navbar() {
  // Daftar menu disimpan sebagai array of object
  const menu = [
    { id: 1, nama: "Home", tujuan: "#home" },
    { id: 2, nama: "About", tujuan: "#about" },
    { id: 3, nama: "Skills", tujuan: "#skills" },
    { id: 4, nama: "Gallery", tujuan: "#gallery" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-accent/40 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <a href="#home" className="text-xl font-extrabold text-primary">
          MyPortfolio
        </a>

        <ul className="flex flex-wrap gap-1">
          {menu.map((item) => (
            <li key={item.id}>
              <a
                href={item.tujuan}
                onClick={() => console.log(`Menu ${item.nama} diklik`)}
                className="inline-block rounded-full px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-soft hover:text-primary focus-visible:outline-2 focus-visible:outline-secondary"
              >
                {item.nama}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
