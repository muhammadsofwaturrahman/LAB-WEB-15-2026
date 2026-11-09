function Hero() {
  // Data perkenalan disimpan dengan const
  const sapaan = "Halo, saya Muhammad Sofwaturrohman";
  const deskripsi =
    "Mahasiswa Sistem Informasi Universitas Hasanuddin yang sedang belajar membangun website modern dengan React dan Tailwind CSS.";

  const handleClick = () => {
    console.log("Tombol Lihat Galeri diklik");
  };

  return (
    <section id="home" className="bg-linear-to-br from-soft via-white to-accent/30">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.2fr_1fr] md:py-24">
        <div className="order-2 text-center md:order-1 md:text-left">
          <h1 className="text-3xl font-extrabold leading-tight text-primary sm:text-4xl lg:text-5xl">
            {sapaan}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted md:mx-0">
            {deskripsi}
          </p>
          <a
            href="#gallery"
            onClick={handleClick}
            className="mt-8 inline-block rounded-full bg-secondary px-7 py-3 font-medium text-white shadow-md transition-colors hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Lihat Galeri
          </a>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          {/* Foto profil diambil dari folder public/ (tanpa import) */}
          <img
            src="/images/foto-profil.jpeg"
            alt="Foto profil"
            className="aspect-square w-56 rounded-full border-2 border-white object-cover shadow-xl sm:w-72 md:w-80"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
