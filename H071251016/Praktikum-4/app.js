var dataPraktikan = [
  { nama: "Budi", nilaiTugas: [80, 85, 90] },
  { nama: "Siti", nilaiTugas: [60, 60, 60] },
  { nama: "Andi", nilaiTugas: [90, 90, 90] },
  { nama: "Dewi", nilaiTugas: [75, 75, 75] },
  { nama: "Eko", nilaiTugas: [45, 45, 45] }
];


function adaAngka(teks) {
  for (var i = 0; i < teks.length; i++) {
    
    if (teks[i] >= '0' && teks[i] <= '9') {
      return true;
    }
  }
  return false;
}

var namaAsisten = prompt("Masukkan nama Anda (Asisten Lab):");


if (namaAsisten && namaAsisten.trim() !== "" && !adaAngka(namaAsisten)) {

  function prosesEvaluasi(listPraktikan) {
    var hasil = [];

    for (var i = 0; i < listPraktikan.length; i++) {
      var total = 0;
      var nilai = listPraktikan[i].nilaiTugas;

      for (var j = 0; j < nilai.length; j++) {
        total = total + nilai[j];
      }

      var rataRata = total / nilai.length;
      var status = "";

      if (rataRata >= 75) {
        status = "Lulus";
      } else {
        status = "Tidak Lulus";
      }

      hasil.push({
        nama: listPraktikan[i].nama,
        nilaiTugas: nilai,
        rataRata: Number(rataRata.toFixed(1)),
        status: status
      });
    }

    return hasil;
  }

  var hasilEvaluasi = prosesEvaluasi(dataPraktikan);

  document.write('<div class="max-w-6xl mx-auto">');
  document.write('<header class="mb-8 border-b border-slate-700 pb-4">');
  document.write('<h1 class="text-3xl font-bold text-indigo-400 mb-2">Dashboard Evaluasi Praktikum</h1>');
  document.write('<p class="text-slate-400">Verifikasi Asisten: <span class="font-semibold text-emerald-400">' + namaAsisten + '</span></p>');
  document.write('</header>');
  document.write('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">');

  for (var k = 0; k < hasilEvaluasi.length; k++) {
    var item = hasilEvaluasi[k];
    var isLulus = item.status === "Lulus";
    var statusBg = isLulus ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" : "bg-rose-500/10 text-rose-400 border-rose-500/30";
    var statusBadge = isLulus ? "LULUS" : "TIDAK LULUS";

    document.write('<div class="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-xl flex flex-col justify-between">');
    document.write('<div>');
    document.write('<div class="flex justify-between items-center mb-4">');
    document.write('<h2 class="text-xl font-bold text-white">' + item.nama + '</h2>');
    document.write('<span class="px-3 py-1 text-xs font-bold rounded-full border ' + statusBg + '">' + statusBadge + '</span>');
    document.write('</div>');

    document.write('<div class="mb-4">');
    document.write('<p class="text-xs text-slate-400 uppercase tracking-wider mb-2">Nilai Tugas</p>');
    document.write('<div class="flex gap-2">');
    for (var m = 0; m < item.nilaiTugas.length; m++) {
      document.write('<span class="bg-slate-700 px-3 py-1 rounded text-sm font-mono">' + item.nilaiTugas[m] + '</span>');
    }
    document.write('</div>');
    document.write('</div>');
    document.write('</div>');

    document.write('<div class="pt-4 border-t border-slate-700/50 flex justify-between items-center">');
    document.write('<span class="text-sm text-slate-400">Rata-rata Nilai:</span>');
    document.write('<span class="text-2xl font-bold font-mono ' + (isLulus ? 'text-emerald-400' : 'text-rose-400') + '">' + item.rataRata + '</span>');
    document.write('</div>');
    document.write('</div>');
  }

  document.write('</div>');
  document.write('</div>');

  console.log("=== Hasil Evaluasi Praktikan ===");
  console.log(hasilEvaluasi);

} else {
  // Tampilan jika nama mengandung angka (termasuk "0"), kosong, atau Cancel
  document.write('<div class="max-w-md mx-auto mt-20 p-6 bg-slate-800 border border-rose-500/30 rounded-xl text-center">');
  document.write('<h2 class="text-xl font-bold text-rose-400 mb-2">Akses Ditolak</h2>');
  document.write('<p class="text-slate-300">Verifikasi identitas Asisten Lab tidak valid. Nama hanya boleh berupa huruf.</p>');
  document.write('</div>');
}