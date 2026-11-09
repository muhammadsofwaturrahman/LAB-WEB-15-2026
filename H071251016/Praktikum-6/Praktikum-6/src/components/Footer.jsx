function Footer() {
  // Tahun diambil otomatis dan disimpan dengan const
  const tahun = new Date().getFullYear();
  const nama = "Muhammad Sofwaturrohman";

  return (
    <footer className="bg-primary px-5 py-6 text-center text-sm text-white">
      <p>
        &copy; {tahun} {nama}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
