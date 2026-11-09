function Footer() {
  const tahun = new Date().getFullYear();

  return (
    <footer className="bg-kopi-900 px-4 py-5 text-center text-sm text-kopi-100">
      <p>&copy; {tahun} Kedai Kopi Senja. Selamat menikmati.</p>
    </footer>
  );
}

export default Footer;
