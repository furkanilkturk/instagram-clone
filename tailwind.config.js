/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      phoneImg: "468.32px 634.15px",
    },
    extend: {
      colors: {
        "ig-stroke": "#dbdbdb",
        "ig-secondary-text": "#737373",
        "ig-primary-button": "#0095f6",
        "ig-facebook-link": "#00376b",
      },
      backgroundImage: {
        phone: "url('/home-phones.png')",
      },
    },
  },
  plugins: [],
};
