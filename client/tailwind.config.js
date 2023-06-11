/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        md: '43.76rem',
        lg: '56.25rem',
        xl: '75rem'
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)'
      }
    },
    fontFamily: {
      'inter': ['Inter', 'sans - serif']
    }
  },
  plugins: [],
}

