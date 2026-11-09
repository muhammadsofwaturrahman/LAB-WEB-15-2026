function About() {
  // Data diri disimpan sebagai array of object
  const dataDiri = [
    { id: 1, label: "Nama", isi: "Muhammad Sofwaturrohman" },
    { id: 2, label: "Program Studi", isi: "Sistem Informasi" },
    { id: 3, label: "Universitas", isi: "Universitas Hasanuddin" },
    { id: 4, label: "Minat", isi: "Pengembangan Web" },
  ];

  return (
    <section id="about" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <h2 className="text-2xl font-extrabold text-primary sm:text-3xl">Tentang Saya</h2>

        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <p className="max-w-prose leading-8 text-muted">
            Saya mahasiswa Sistem Informasi yang senang mempelajari cara kerja sebuah
            website, mulai dari struktur HTML, tampilan dengan CSS, sampai interaksi
            dengan JavaScript. Saat ini saya sedang belajar React untuk membangun
            antarmuka yang tersusun dari komponen-komponen kecil.
          </p>

          <dl className="divide-y divide-accent/40 rounded-2xl border border-accent/40 bg-soft">
            {dataDiri.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:gap-6"
              >
                <dt className="font-semibold text-primary sm:w-40 sm:shrink-0">
                  {item.label}
                </dt>
                <dd className="text-ink">{item.isi}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default About;
