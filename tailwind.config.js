/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glass: "0 30px 60px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
}
