/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./index.html"
  ],
  theme: {
    colors: {
      gray: { 
        light: '#B3B3B3',
        DEFAULT: '#373737'
      },
      white: '#EEEEEE',
      red: '#ef4444',
      blue: '#3b82f6',
    },
    extend: {},
  },
  plugins: [],
}

