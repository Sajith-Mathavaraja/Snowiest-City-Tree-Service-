/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F6F52',     // Forest Moss (Primary buttons/brand)
        secondary: '#1F2933',   // Deep Charcoal (Header/Footer/Titles)
        accent: '#5cb0ed',      // Muted Winter Steel Blue (Softer CTAs & Highlights)
        success: '#4F6F52',
        warning: '#5cb0ed',
        background: '#1F2933',  // Changed to Deep Charcoal for global dark theme
        card: 'rgba(31, 41, 51, 0.75)', // Frosted Deep Charcoal cards
        sage: '#D8E3D0',        // Sage (Secondary Cards/Accents)
        text: '#FFFFFF',        // Changed to White for high contrast text readability
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        numbers: ['"Space Grotesk"', 'sans-serif'],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(to right bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.3))',
      }
    },
  },
  plugins: [],
}
