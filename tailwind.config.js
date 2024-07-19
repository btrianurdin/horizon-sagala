/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#ecf0ff",
          100: "#dce3ff",
          200: "#bfc9ff",
          300: "#99a6ff",
          400: "#7077ff",
          500: "#554fff",
          600: "#422afb",
          700: "#3d24de",
          800: "#3220b3",
          900: "#2c228d",
          950: "#1c1452",
        },
      },
      boxShadow: {
        brand: "rgba(112, 144, 176, 0.18) 14px 17px 40px 4px",
      },
    },
  },
  plugins: [],
};
