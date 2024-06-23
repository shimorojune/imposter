/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx", "./public/index.html"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [],
};
