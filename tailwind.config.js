/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(267deg, rgb(0, 102, 204) 0%, rgb(30, 144, 255) 100%)",
      },
    },
  },
  plugins: [],
};
