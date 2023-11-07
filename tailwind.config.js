/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-400": "#ED4B82",
        "primary-500": "#E91E63",
        "secondary-500": "#2196F3",
        "secondary-50": "#8BD7FA",
      },
    },
  },
  plugins: [],
};
