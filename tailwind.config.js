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
          bgDark: '#000000',
          bgLight: '#F9F5FF',
          primary: '#8656F1',
          secondary: '#14984FC',
          accent: '#F9F5FF',
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
        glowSecondary: '0 10px 40px rgba(20,152,252,0.35)',
        glowAccent: '0 10px 40px rgba(249,245,255,0.35)',
        'orb-glow': '0 0 40px rgba(134,86,241,0.3)',
        'orb-glow-secondary': '0 0 40px rgba(20,152,252,0.3)',
        'orb-glow-accent': '0 0 40px rgba(249,245,255,0.3)'
      }
    }
  },
  plugins: []
};
