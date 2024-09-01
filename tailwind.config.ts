import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enable dark mode with the 'class' strategy
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ffc57c", // Lighter variant 2
          200: "#ffab4d", // Lighter variant 1
          300: "#f29e27", // Actual color
          400: "#d88a20", // Darker variant 1
          500: "#bf761a", // Darker variant 2
          DEFAULT: "#f29e27",
        },
        secondary: {
          100: "#f8b084", // Lighter variant 2
          200: "#f48e56", // Lighter variant 1
          300: "#f06122", // Actual color
          400: "#d8571d", // Darker variant 1
          500: "#bf4c18", // Darker variant 2
          DEFAULT: "#f06122",
        },
        accent: {
          100: "#fde28e", // Lighter variant 2
          200: "#fdd74e", // Lighter variant 1
          300: "#f9cd13", // Actual color
          400: "#e2b10f", // Darker variant 1
          500: "#c8970c", // Darker variant 2
          DEFAULT: "#f9cd13",
        },
        background: {
          100: "#2a2b2d", // Lighter variant 2
          200: "#1a1b1d", // Lighter variant 1
          300: "#060708", // Actual color
          400: "#050506", // Darker variant 1
          500: "#030304", // Darker variant 2
          DEFAULT: "#060708",
          dark: {
            100: "#f2f2f2", // Lighter variant 2
            200: "#ebebeb", // Lighter variant 1
            300: "#ffffff", // Actual color
            400: "#e4e4e4", // Darker variant 1
            500: "#dcdcdc", // Darker variant 2
          },
        },
        text: {
          100: "#f2f2f2", // Lighter variant 2
          200: "#ebebeb", // Lighter variant 1
          300: "#ffffff", // Actual color
          400: "#e4e4e4", // Darker variant 1
          500: "#dcdcdc", // Darker variant 2
          DEFAULT: "#ffffff",
          dark: {
            100: "#333333", // Lighter variant 2
            200: "#262626", // Lighter variant 1
            300: "#060708", // Actual color
            400: "#050506", // Darker variant 1
            500: "#040404", // Darker variant 2
          },
        },
        highlight: {
          100: "#f4c9b5", // Lighter variant 2
          200: "#f0a27f", // Lighter variant 1
          300: "#e29c2c", // Actual color
          400: "#c48726", // Darker variant 1
          500: "#a8701f", // Darker variant 2
          DEFAULT: "#e29c2c",
        },
        white: "#ffffff",
        black: "#000000",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
