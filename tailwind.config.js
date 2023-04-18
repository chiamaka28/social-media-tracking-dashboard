/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        limeGreen: "hsl(163, 72%, 41%)",
        brightRed: "hsl(356, 69%, 56%)",
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        instagram: "linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)",
        youtube: "hsl(348, 97%, 39%)",
        darkToggle: "linear gradient hsl(210, 78%, 56%) to hsl(146, 68%, 55%)",
        lightToggle: "hsl(230, 22%, 74%)",
        "veryDarkBlue(BG)": "hsl(230, 17%, 14%)",
        topBgPattern: "hsl(232, 19%, 15%)",
        cardBg: "hsl(228, 28%, 20%)",
        cardText: "hsl(228, 34%, 66%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
