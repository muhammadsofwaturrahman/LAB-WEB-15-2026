// Variabel State Global untuk Menyimpan Data Tim Terpilih
let anggotaTerpilihId = null;
let daftarTugasAktif = [];

// Seleksi Elemen DOM
const statusAnggota = document.getElementById("statusAnggota");
const daftarAnggota = document.getElementById("daftarAnggota");

const judulTugas = document.getElementById("judulTugas");
const progresTugas = document.getElementById("progresTugas");
const statusTugas = document.getElementById("statusTugas");
const daftarTugas = document.getElementById("daftarTugas");

const formTugas = document.getElementById("formTugas");
const inputJudul = document.getElementById("inputJudul");
const btnSimpan = document.getElementById("btnSimpan");
const pesanErrorForm = document.getElementById("pesanErrorForm");
const notifikasiSukses = document.getElementById("notifikasiSukses");

const inputCari = document.getElementById("inputCari");
const pesanKosongCari = document.getElementById("pesanKosongCari");

// ==========================================
// F1. MENAMPILKAN DAFTAR ANGGOTA TIM
// ==========================================
async function muatAnggota() {
  statusAnggota.textContent = "Memuat anggota...";
  
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    if (!response.ok) {
      throw new Error("Gagal mengambil data dari server. Status: " + response.status);
    }
    
    const pengguna = await response.json();
    statusAnggota.textContent = ""; // Hapus teks loading
    
    pengguna.forEach((user) => {
      const btn = document.createElement("button");
      btn.textContent = user.name;
      btn.className = "w-full text-left px-4 py-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-600/30 text-sm font-medium";
      
      // Event listener saat anggota diklik (F2)
      btn.addEventListener("click", () => {
        pilihAnggota(user, btn);
      });
      
      daftarAnggota.appendChild(btn);
    });
  } catch (error) {
    statusAnggota.textContent = "Error: " + error.message;
    statusAnggota.classList.add("text-rose-400");
  }
}

// ==========================================
// F2. MENAMPILKAN TUGAS ANGGOTA
// ==========================================
async function pilihAnggota(user, tombolElemen) {
  anggotaTerpilihId = user.id;
  
  // Penanda anggota aktif menggunakan classList
  const semuaTombol = daftarAnggota.querySelectorAll("button");
  semuaTombol.forEach((b) => {
    b.classList.remove("bg-indigo-600", "text-white", "border-indigo-500");
    b.classList.add("bg-slate-700/50", "text-slate-200");
  });
  
  tombolElemen.classList.remove("bg-slate-700/50", "text-slate-200");
  tombolElemen.classList.add("bg-indigo-600", "text-white", "border-indigo-500");

  // Update Judul
  judulTugas.textContent = "Tugas " + user.name;
  
  // Reset Status & Tampilan
  statusTugas.textContent = "Memuat tugas...";
  statusTugas.classList.remove("hidden");
  daftarTugas.innerHTML = ""; // Mengosongkan daftar lama
  inputCari.value = "";
  pesanKosongCari.classList.add("hidden");
  sembunyikanPesanForm();

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?userId=" + user.id);
    
    if (!response.ok) {
      throw new Error("Gagal mengambil tugas. Status: " + response.status);
    }

    daftarTugasAktif = await response.json();
    statusTugas.classList.add("hidden");
    
    renderDaftarTugas();
  } catch (error) {
    statusTugas.textContent = "Error: " + error.message;
    statusTugas.classList.add("text-rose-400");
  }
}

// Fungsi Render Seluruh Daftar Tugas ke Layar
function renderDaftarTugas() {
  daftarTugas.innerHTML = ""; // Mengosongkan elemen sebelum render
  
  daftarTugasAktif.forEach((tugas) => {
    const li = buatElemenTugas(tugas);
    daftarTugas.appendChild(li);
  });
  
  perbaruiProgres();
}

// Fungsi Membuat Node Elemen Tugas Baru
function buatElemenTugas(tugas) {
  const li = document.createElement("li");
  li.className = "flex items-center justify-between p-3 rounded-lg bg-slate-900/60 border border-slate-700 text-sm gap-3";
  
  const spanJudul = document.createElement("span");
  spanJudul.textContent = tugas.title;
  spanJudul.className = "flex-1 text-slate-200";

  // Jika tugas selesai, beri styling khusus (coret teks)
  if (tugas.completed) {
    spanJudul.classList.add("line-through", "text-slate-500");
  }
  
  li.appendChild(spanJudul);

  const containerAksi = document.createElement("div");
  containerAksi.className = "flex items-center gap-2";

  // F5: Tombol Tandai Selesai (Hanya muncul jika belum completed)
  if (!tugas.completed) {
    const btnSelesai = document.createElement("button");
    btnSelesai.textContent = "Tandai selesai";
    btnSelesai.className = "px-3 py-1 bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/30 rounded text-xs transition-colors";
    
    btnSelesai.addEventListener("click", () => {
      tugas.completed = true;
      spanJudul.classList.add("line-through", "text-slate-500");
      btnSelesai.remove(); // Hapus tombol selesai dari DOM
      perbaruiProgres(); // Update progres
    });
    
    containerAksi.appendChild(btnSelesai);
  }

  // F5: Tombol Hapus Tugas
  const btnHapus = document.createElement("button");
  btnHapus.textContent = "Hapus";
  btnHapus.className = "px-3 py-1 bg-rose-600/20 hover:bg-rose-600 text-rose-400 hover:text-white border border-rose-500/30 rounded text-xs transition-colors";
  
  btnHapus.addEventListener("click", () => {
    // Hapus data dari array aktif
    daftarTugasAktif = daftarTugasAktif.filter((t) => t !== tugas);
    li.remove(); // Hapus elemen li dari DOM
    perbaruiProgres(); // Update progres
    filterTugas(); // Cek kembali pencarian
  });

  containerAksi.appendChild(btnHapus);
  li.appendChild(containerAksi);

  return li;
}

// Fungsi Memperbarui Ringkasan Progres (X dari Y tugas selesai)
function perbaruiProgres() {
  const total = daftarTugasAktif.length;
  const selesai = daftarTugasAktif.filter((t) => t.completed).length;
  progresTugas.textContent = selesai + " dari " + total + " tugas selesai";
}

// ==========================================
// F3. MENCARI TUGAS
// ==========================================
inputCari.addEventListener("input", filterTugas);

function filterTugas() {
  const kataKunci = inputCari.value.toLowerCase();
  const semuaLi = daftarTugas.querySelectorAll("li");
  let jumlahTampak = 0;

  semuaLi.forEach((li) => {
    const teksJudul = li.querySelector("span").textContent.toLowerCase();
    
    if (teksJudul.includes(kataKunci)) {
      li.classList.remove("hidden");
      jumlahTampak++;
    } else {
      li.classList.add("hidden");
    }
  });

  // Tampilkan pesan jika tidak ada tugas yang cocok
  if (jumlahTampak === 0 && semuaLi.length > 0) {
    pesanKosongCari.classList.remove("hidden");
  } else {
    pesanKosongCari.classList.add("hidden");
  }
}

// ==========================================
// F4. MENAMBAH TUGAS BARU
// ==========================================
formTugas.addEventListener("submit", async (event) => {
  event.preventDefault(); // Mencegah reload halaman
  sembunyikanPesanForm();

  if (!anggotaTerpilihId) {
    tampilkanErrorForm("Pilih anggota tim terlebih dahulu!");
    return;
  }

  const judulBersih = inputJudul.value.trim();

  // Validasi: judul kosong atau kurang dari 5 karakter
  if (judulBersih.length < 5) {
    tampilkanErrorForm("Judul tugas minimal harus 5 karakter.");
    return;
  }

  // Ubah status tombol saat menyimpan
  btnSimpan.textContent = "Menyimpan...";
  btnSimpan.disabled = true;

  try {
    // Panggil fungsi Promise simpanTugas
    const tugasBaru = await simpanTugas(judulBersih);
    
    // Tambahkan tugas baru ke array dan DOM
    daftarTugasAktif.push(tugasBaru);
    const liBaru = buatElemenTugas(tugasBaru);
    daftarTugas.appendChild(liBaru);
    
    perbaruiProgres();
    inputJudul.value = "";
    filterTugas();

    // Notifikasi Sukses yang hilang otomatis setelah 3 detik
    notifikasiSukses.textContent = "Tugas berhasil ditambahkan.";
    notifikasiSukses.classList.remove("hidden");
    
    setTimeout(() => {
      notifikasiSukses.classList.add("hidden");
    }, 3000);

  } catch (error) {
    tampilkanErrorForm(error.message);
  } finally {
    // Kembali ke teks asal di bagian finally
    btnSimpan.textContent = "Simpan";
    btnSimpan.disabled = false;
  }
});

// Simulasi Menyimpan ke Server dengan Promise
function simpanTugas(judul) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Cek apakah judul sudah ada di daftar (case-insensitive)
      const sudahAda = daftarTugasAktif.some(
        (t) => t.title.toLowerCase() === judul.toLowerCase()
      );

      if (sudahAda) {
        reject(new Error("Tugas dengan judul ini sudah ada di daftar!"));
      } else {
        resolve({ title: judul, completed: false });
      }
    }, 1000);
  });
}

// Helper Pesan Form
function tampilkanErrorForm(pesan) {
  pesanErrorForm.textContent = pesan;
  pesanErrorForm.classList.remove("hidden");
}

function sembunyikanPesanForm() {
  pesanErrorForm.classList.add("hidden");
  notifikasiSukses.classList.add("hidden");
}

// ==========================================
// INISIALISASI PROGRAM
// ==========================================
// Mengambil daftar anggota saat halaman pertama kali dibuka
muatAnggota();