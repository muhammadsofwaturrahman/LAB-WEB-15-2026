function RingkasanPesanan({ itemPesanan, totalJumlah, totalHarga }) {
  return (
    <section className="rounded-2xl border border-kopi-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-extrabold">Ringkasan Pesanan</h2>

      {itemPesanan.length === 0 ? (
        <p className="mt-3 text-sm text-kopi-600">
          Belum ada pesanan. Pilih menu lalu tekan Tambah.
        </p>
      ) : (
        <ul className="mt-3 divide-y divide-kopi-100">
          {itemPesanan.map((item) => (
            <li key={item.id} className="flex justify-between gap-3 py-2 text-sm">
              <span>
                {item.nama}{" "}
                <span className="text-kopi-600">x {item.jumlah}</span>
              </span>
              <span className="shrink-0 font-medium">
                Rp {(item.harga * item.jumlah).toLocaleString("id-ID")}
              </span>
            </li>
          ))}
        </ul>
      )}

      <dl className="mt-4 space-y-1 border-t border-kopi-200 pt-3 text-sm">
        <div className="flex justify-between">
          <dt className="text-kopi-600">Jumlah pesanan</dt>
          <dd className="font-semibold">{totalJumlah} item</dd>
        </div>
        <div className="flex justify-between text-base">
          <dt className="font-semibold">Total harga</dt>
          <dd className="font-extrabold text-kopi-700">
            Rp {totalHarga.toLocaleString("id-ID")}
          </dd>
        </div>
      </dl>
    </section>
  );
}

export default RingkasanPesanan;
