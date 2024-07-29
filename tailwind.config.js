/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "off-black": "#111111",
        "pure-white": "#ffffff",
        "golden-sand": "#f4d04e",
        tin: "#7f7f7f",
      },
      screens: {
        xsm: { max: "389px" },
      },
    },
  },
  plugins: [],
};
