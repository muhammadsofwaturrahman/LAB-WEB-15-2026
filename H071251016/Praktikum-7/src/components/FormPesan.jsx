import { useState } from "react";

function FormPesan({ jumlahItem, onKirim }) {
  const [nama, setNama] = useState("");
  const [meja, setMeja] = useState("");
  const [sudahCoba, setSudahCoba] = useState(false);
  const [terkirim, setTerkirim] = useState(false);

  // Pesan error dihitung dari state saat ini, jadi otomatis hilang saat data sudah benar
  const nomorMeja = Number(meja);
  let errorNama = "";
  if (nama.trim() === "") {
    errorNama = "Nama wajib diisi.";
  }
  let errorMeja = "";
  if (meja === "") {
    errorMeja = "Nomor meja wajib diisi.";
  } else if (!Number.isInteger(nomorMeja) || nomorMeja < 1) {
    errorMeja = "Nomor meja harus berupa angka bulat mulai dari 1.";
  }
  let errorPesanan = "";
  if (jumlahItem === 0) {
    errorPesanan = "Pesanan masih kosong. Pilih menu dan tekan Tambah dulu.";
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (errorNama || errorMeja || errorPesanan) {
      setSudahCoba(true);
      setTerkirim(false);
      return;
    }

    onKirim();
    setNama("");
    setMeja("");
    setSudahCoba(false);
    setTerkirim(true);
  }

  return (
    <section className="rounded-2xl border border-kopi-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-extrabold">Kirim Pesanan</h2>

      <form onSubmit={handleSubmit} noValidate className="mt-4 flex flex-col gap-4">
        <div>
          <label htmlFor="nama" className="mb-1 block text-sm font-medium">
            Nama
          </label>
          <input
            id="nama"
            type="text"
            placeholder="Nama pemesan"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full rounded-lg border border-kopi-200 bg-kopi-50 px-4 py-2 text-sm focus:border-kopi-600 focus:outline-none focus:ring-2 focus:ring-kopi-400/40"
          />
          {sudahCoba && errorNama && (
            <p className="mt-1 text-xs text-red-700" role="alert">{errorNama}</p>
          )}
        </div>

        <div>
          <label htmlFor="meja" className="mb-1 block text-sm font-medium">
            Nomor meja
          </label>
          <input
            id="meja"
            type="number"
            min="1"
            placeholder="Contoh: 5"
            value={meja}
            onChange={(e) => setMeja(e.target.value)}
            className="w-full rounded-lg border border-kopi-200 bg-kopi-50 px-4 py-2 text-sm focus:border-kopi-600 focus:outline-none focus:ring-2 focus:ring-kopi-400/40"
          />
          {sudahCoba && errorMeja && (
            <p className="mt-1 text-xs text-red-700" role="alert">{errorMeja}</p>
          )}
        </div>

        {sudahCoba && errorPesanan && (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
            {errorPesanan}
          </p>
        )}

        <button
          type="submit"
          className="rounded-full bg-senja px-5 py-2.5 font-semibold text-kopi-900 transition-colors hover:bg-amber-500"
        >
          Kirim Pesanan
        </button>

        {terkirim && jumlahItem === 0 && (
          <p className="rounded-lg bg-green-50 px-3 py-2 text-sm text-green-800" role="status">
            Terima kasih! Pesananmu sudah terkirim dan akan segera diantar ke mejamu.
          </p>
        )}
      </form>
    </section>
  );
}

export default FormPesan;
