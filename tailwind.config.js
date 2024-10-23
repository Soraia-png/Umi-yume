/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      cursor: {
        'custom': 'url(./src/assets/Imagens/cursorCerto.png), auto',
        'customButao': 'url(./src/assets/Imagens/cursorbutao.png), pointer',
      },
      fontFamily: {
        levi: ['"Levi Windows"', 'sans-serif'],
      },
      backgroundImage: {
        'fundo': "url('./src/assets/Backgroud.png')",
      }
    },
  },
  plugins: [],
}
