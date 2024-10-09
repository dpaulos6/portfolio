/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(267deg, rgb(0, 123, 255) 0%, rgb(52, 211, 153) 100%)",
      },
    },
  },
  plugins: [],
};
