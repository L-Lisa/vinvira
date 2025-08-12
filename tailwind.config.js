/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        vinvira: {
          primary: "#6E0F3C",   // vinröd
          secondary: "#EAD1DC", // heather pink
          beige: "#F5F3F1",
          text: "#1C1C1C"
        }
      },
      borderRadius: {
        '2xl': '1rem'
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};
