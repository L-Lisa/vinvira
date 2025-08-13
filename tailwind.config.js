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
          bgDark: '#0F0F1A',
          bgLight: '#F9FAFB',
          primary: '#8656F1',
          secondary: '#14984FC',
          highlight: '#00E0FF',
          accent: '#FFB6A3',
          text: '#000000',
          white: '#FFFFFF'
        }
      },
      borderRadius: {
        '2xl': '1rem'
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.08)",
        glow: '0 10px 40px rgba(134,86,241,0.35)',
        glowHighlight: '0 10px 40px rgba(0,224,255,0.35)',
        glowAccent: '0 10px 40px rgba(255,182,163,0.35)',
        'orb-glow': '0 0 40px rgba(134,86,241,0.3)',
        'orb-glow-highlight': '0 0 40px rgba(0,224,255,0.3)',
        'orb-glow-accent': '0 0 40px rgba(255,182,163,0.3)'
      }
    }
  },
  plugins: []
};
