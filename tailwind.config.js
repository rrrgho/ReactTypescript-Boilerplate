/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        twilight: "#01959F",
        twilightHover: "#086970",
        angry: "#E11428",
        angryHover: "#8D131F",
      },
      borderRadius: {
        button: "8px",
      },
    },
  },
  plugins: [],
};
