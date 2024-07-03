/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-background": "url('/src/assets/ManSittingAndWriting.webp')",
        "banner-background": "url('/src/assets/banner_home.png')",
        "followUs-background": "url('/src/assets/FollowUs.png')",
      },
      colors: {
        "dark-purple": "#081a51",
        "light-white": "rgba(255, 255, 255, 0.18)",
      },
    },
  },
  plugins: [],
};
