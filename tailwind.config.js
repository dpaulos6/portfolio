/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(267deg, rgb(218, 124, 37) 0.36%, rgb(185, 35, 225) 102.06%)",
      },
    },
  },
  plugins: [],
};
