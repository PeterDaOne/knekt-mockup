// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line will correctly scan all .tsx files, including KnektPlatform.tsx
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}