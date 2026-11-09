import foto1 from "../assets/gallery/foto1.jpg";
import foto2 from "../assets/gallery/foto2.jpg";
import foto3 from "../assets/gallery/foto3.jpg";
import foto4 from "../assets/gallery/foto4.jpg";

function Gallery() {
  // Data foto disimpan sebagai array of object
  const galeriFoto = [
    { id: 1, src: foto1, judul: "Momen 1" },
    { id: 2, src: foto2, judul: "Momen 2" },
    { id: 3, src: foto3, judul: "Momen 3" },
    { id: 4, src: foto4, judul: "Momen 4" },
  ];

  return (
    <section id="gallery" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <h2 className="text-2xl font-extrabold text-primary sm:text-3xl">Galeri Foto</h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galeriFoto.map((foto) => (
            <figure
              key={foto.id}
              className="overflow-hidden rounded-2xl border border-accent/40 bg-white shadow-sm"
            >
              <img
                src={foto.src}
                alt={foto.judul}
                className="aspect-square w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-sm font-semibold text-primary">
                {foto.judul}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
