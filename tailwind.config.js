/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        vin: {
          bgLight: '#F5F7FF',
          bgDark:  '#0B1020',
          text:    '#141414',
          primary: '#4857FF',
          accent:  '#FF4DA6',
          haze:    '#DCE1FF'
        }
      },
      borderRadius: {
        '2xl': '1rem'
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.08)",
        glow: '0 10px 40px rgba(72,87,255,0.35)',
        glowPink: '0 10px 40px rgba(255,77,166,0.35)'
      }
    }
  },
  plugins: []
};
