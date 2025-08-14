/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      // Mobile-first breakpoints
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        // WCAG AA compliant color palette
        vin: {
          // Primary brand colors with proper contrast
          primary: {
            50: '#F5F3FF',
            100: '#EDE9FE',
            200: '#DDD6FE',
            300: '#C4B5FD',
            400: '#A78BFA',
            500: '#8B5CF6', // Main primary - meets WCAG AA
            600: '#7C3AED',
            700: '#6D28D9',
            800: '#5B21B6',
            900: '#4C1D95',
          },
          // Secondary colors
          secondary: {
            50: '#F0F9FF',
            100: '#E0F2FE',
            200: '#BAE6FD',
            300: '#7DD3FC',
            400: '#38BDF8',
            500: '#0EA5E9', // Main secondary
            600: '#0284C7',
            700: '#0369A1',
            800: '#075985',
            900: '#0C4A6E',
          },
          // Accent colors
          accent: {
            50: '#FEF2F2',
            100: '#FEE2E2',
            200: '#FECACA',
            300: '#FCA5A5',
            400: '#F87171',
            500: '#EF4444', // Main accent
            600: '#DC2626',
            700: '#B91C1C',
            800: '#991B1B',
            900: '#7F1D1D',
          },
          // Neutral colors for text and backgrounds
          neutral: {
            50: '#FAFAFA',
            100: '#F5F5F5',
            200: '#E5E5E5',
            300: '#D4D4D4',
            400: '#A3A3A3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
          },
          // Semantic colors
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
          info: '#3B82F6',
          
          // Legacy support (keeping for existing components)
          white: '#FFFFFF',
          
          // Special harmony colors
          peachfuzz: '#FFB6A3',
          cyan: '#00E0FF'
        }
      },
      // Enhanced shadows for better depth perception
      boxShadow: {
        'soft': "0 8px 24px rgba(0,0,0,0.08)",
        'glow': '0 10px 40px rgba(139,92,246,0.35)',
        'glowHighlight': '0 10px 40px rgba(0,224,255,0.35)',
        'glowAccent': '0 10px 40px rgba(239,68,68,0.35)',
        'orb-glow': '0 0 40px rgba(139,92,246,0.3)',
        'orb-glow-highlight': '0 0 40px rgba(0,224,255,0.3)',
        'orb-glow-accent': '0 0 40px rgba(239,68,68,0.3)',
        // New accessible shadows
        'accessible': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'accessible-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      // Enhanced typography scale
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      // Enhanced spacing for mobile-first
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      // Enhanced border radius
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      // Enhanced animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'orb-breathe': 'orb-breathe 6s ease-in-out infinite',
        'orb-glow': 'orb-glow 4s ease-in-out infinite',
        'orb-logo': 'orb-logo 8s ease-in-out infinite',
        'orb-rotate': 'orb-rotate 20s linear infinite',
        'orb-rotate-reverse': 'orb-rotate-reverse 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'orb-breathe': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.7' },
          '50%': { transform: 'scale(1.02)', opacity: '0.9' },
        },
        'orb-glow': {
          '0%, 100%': { opacity: '0.3', filter: 'blur(0px)' },
          '50%': { opacity: '0.6', filter: 'blur(0.5px)' },
        },
        'orb-logo': {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(1.02)' },
        },
        'orb-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'orb-rotate-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      }
    }
  },
  plugins: [
    // Add focus-visible plugin for better keyboard navigation
    function({ addUtilities }) {
      const newUtilities = {
        '.focus-visible': {
          'outline': '2px solid #3B82F6',
          'outline-offset': '2px',
        },
      }
      addUtilities(newUtilities)
    }
  ]
}
