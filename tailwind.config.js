/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kaisei: ['Kaisei Tokumin', 'sans-serif']
      },
      fontSize: {
        '2xl': '2.25rem', // custom font size for h1
        xl: '1.875rem', // custom font size for h2
        lg: '1.5rem', // custom font size for h3
        md: '1.125rem', // custom font size for h4
        sm: '1rem', // custom font size for h5
        xs: '0.875rem', // custom font size for h6
      },
      fontWeight: {
        bold: '700', // custom font weight for all heading tags
      },
    },
  },
  plugins: [],
}