/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        kopi: {
          50: "#fbf7f2",
          100: "#f3e9dc",
          200: "#e4cfb5",
          400: "#b98a5e",
          600: "#8a5a3c",
          700: "#6b4429",
          900: "#2e1d12",
        },
        senja: "#e08a3c",
      },
    },
  },
  plugins: [],
};
