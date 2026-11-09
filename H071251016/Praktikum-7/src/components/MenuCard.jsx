import { useState } from "react";

function MenuCard({ nama, kategori, harga, tersedia, deskripsi, onTambah }) {
  // State detail dimiliki tiap kartu, jadi membuka satu menu tidak memengaruhi menu lain
  const [detailTerbuka, setDetailTerbuka] = useState(false);

  return (
    <article
      className={
        tersedia
          ? "flex flex-col rounded-2xl border border-kopi-200 bg-white p-5 shadow-sm"
          : "flex flex-col rounded-2xl border border-kopi-200 bg-kopi-100 p-5 opacity-80"
      }
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold">{nama}</h3>
          <p className="text-sm text-kopi-600">{kategori}</p>
        </div>
        <p className="shrink-0 font-bold text-kopi-700">
          Rp {harga.toLocaleString("id-ID")}
        </p>
      </div>

      {!tersedia && (
        <p className="mt-2 text-sm font-semibold text-red-700">Sedang habis</p>
      )}

      {detailTerbuka && (
        <p className="mt-3 text-sm leading-6 text-kopi-700">{deskripsi}</p>
      )}

      <div className="mt-auto flex gap-2 pt-4">
        <button
          type="button"
          onClick={() => setDetailTerbuka(!detailTerbuka)}
          className="rounded-full border border-kopi-400 px-4 py-2 text-sm font-medium text-kopi-700 transition-colors hover:bg-kopi-100"
        >
          {detailTerbuka ? "Tutup detail" : "Lihat detail"}
        </button>
        <button
          type="button"
          onClick={onTambah}
          disabled={!tersedia}
          className="flex-1 rounded-full bg-kopi-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-kopi-900 disabled:cursor-not-allowed disabled:bg-kopi-200 disabled:text-kopi-600"
        >
          {tersedia ? "Tambah" : "Habis"}
        </button>
      </div>
    </article>
  );
}

export default MenuCard;
