/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'purple-light': '#EBE5F9',
        'purple-dark': '#4B2995',
        'yellow-light': '#F1E9C9',
        'yellow-dark': '#C47F17',
      },
      backgroundImage: {
       'icon-location': "url('/icons/icon-location.svg')",
       'icon-car': "url('/icons/icon-car.svg')",
       'background': "url('/images/background.png')",
       'brand': "url('/images/brand.png')"
      },
    },
  },
  plugins: [],
}
