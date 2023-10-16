/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{js.jsx,ts,tsx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f1edeb',
          100: '#d3c8c1',
          200: '#bdaea3',
          300: '#9f897a',
          400: '#8d7260',
          500: '#704f38',
          600: '#664833',
          700: '#503828',
          800: '#3e2b1f',
          900: '#2f2118',
      },
      grey: {
        50: '#e9e9ea',
        100: '#bababd',
        300: '#696a70',
        400: '#4c4d54',
        500: '#1f2029',
        600: '#1c1d25',
        700: '#16171d',
        800: '#111217',
        900: '#0d0d11',
    },
    text_color: {
        50: '#ededed',
        100: '#c8c8c8',
        200: '#adadad',
        300: '#888788',
        400: '#717071',
        500: '#4d4c4d',
        600: '#464546',
        700: '#373637',
        800: '#2a2a2a',
        900: '#202020',
    },
    red: {
        50: '#fbefee',
        100: '#f3cccc',
        200: '#edb3b3',
        300: '#e49090',
        400: '#df7b7a',
        500: '#d75a59',
        600: '#c45251',
        700: '#99403f',
        800: '#763231',
        900: '#5a2625',
    
    },
    white: {
        50: '#fdfdfd',
        100: '#f9f9f9',
        200: '#f7f7f7',
        300: '#f3f3f3',
        400: '#f1f1f1',
        500: '#ededed',
        600: '#d8d8d8',
        700: '#a8a8a8',
        800: '#828282',
        900: '#646464',
    },
    violet: {
        50: '#f2f1f2',
        100: '#d5d3d5',
        200: '#c1bdc1',
        300: '#a59fa5',
        400: '#948d94',
        500: '#797079',
        600: '#6e666e',
        700: '#565056',
        800: '#433e43',
        900: '#332f33',
    },
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
