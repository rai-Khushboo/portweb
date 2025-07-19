/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // primary: {
        //   DEFAULT: '#7C3AED', // blue-violet
        //   light: '#A78BFA',
        //   dark: '#5B21B6',
        // },
      },
    },
  },
  plugins: [],
}