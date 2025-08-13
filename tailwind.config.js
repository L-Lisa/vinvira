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
          bgDark: '#0B0F19',
          bgLight: '#FDFDFE',
          primary: '#7B4FFF',
          accent: '#FFB6A3',
          highlight: '#00E0FF',
          textLight: '#FFFFFF',
          textDark: '#1A1A1A'
        }
      },
      borderRadius: {
        '2xl': '1rem'
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.08)",
        glow: '0 10px 40px rgba(123,79,255,0.35)',
        glowPink: '0 10px 40px rgba(255,182,163,0.35)',
        glowHighlight: '0 10px 40px rgba(0,224,255,0.35)',
        'orb-glow': '0 0 40px rgba(123,79,255,0.3)',
        'orb-glow-accent': '0 0 40px rgba(255,182,163,0.3)',
        'orb-glow-highlight': '0 0 40px rgba(0,224,255,0.3)'
      }
    }
  },
  plugins: []
};
