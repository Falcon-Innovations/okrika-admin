/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        deluge: {
          50: "#EAE5F0",
          100: "#F4DAFF",
          200: "#DBB1ED",
          300: "#E199FF",
          400: "#9579B4",
          500: "#9C29CC",
          600: "#624681",
          700: "#493460",
          800: "#3B2A4D",
          900: "#2C203A",
        },
        neutral: {
          100: "#E2E2E2",
          200: "#C5C5C5",
          300: "#A9A9A9",
          700: "#383838",
          800: "#1C1C1C",
        },
        error: "#FF644F",
      },
      fontFamily: {
        display: ["var(--font-sf)", "system-ui", "sans-serif"],
        default: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        // Tooltip
        "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        // Tooltip
        "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
    // screens: {
    //   lg: { max: "1040px" },
    //   // => @media (max-width: 1040px) { ... }

    //   md: { max: "980px" },
    //   // => @media (max-width: 960px) { ... }

    //   sm: { max: "700px" },
    //   // => @media (max-width: 576px) { ... }
    // },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    plugin(({ addVariant }) => {
      addVariant("radix-side-top", '&[data-side="top"]');
      addVariant("radix-side-bottom", '&[data-side="bottom"]');
    }),
  ],
};
