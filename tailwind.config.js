/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          ivory: "#FAF8F5",
          cream: "#F4EFE6",
          sand: "#E9E3D8",
          charcoal: "#2B2724",
          espresso: "#191614",
          dark: "#12100E",
          taupe: "#8C827A",
          muted: "#A89F96",
          border: "#E4DCD0",
        },
        champagne: {
          50: "#FAF7F2",
          100: "#F5EFE5",
          200: "#E9DCBF",
          300: "#D9C4A6",
          400: "#C5A880",
          500: "#B8966C",
          600: "#A38054",
          700: "#86663E",
          800: "#694F31",
          900: "#4D3924",
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        luxury: '.15em',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(25, 22, 20, 0.05)',
        'elevated': '0 12px 30px -4px rgba(25, 22, 20, 0.08)',
        'deep': '0 20px 40px -6px rgba(25, 22, 20, 0.12)',
      },
      animation: {
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
      },
      keyframes: {
        'border-beam': {
          '100%': {
            'offset-distance': '100%',
          },
        },
      },
    },
  },
  plugins: [],
}
