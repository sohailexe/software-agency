/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        primary: "2.25rem",
        secondary: "1.62",
        default: "2.25rem",
      },
      colors: {
        primary: {
          DEFAULT: "#3D63EA", // Default primary color
        },
        secondary: "#ffed4a",
        dark: {
          DEFAULT: "#1A202C", // Default dark color
          200: "#4A5568", // Lighter shade of dark
        },
        light: {
          DEFAULT: "#E7DAED", // Default light color
          200: "#F9F9FF",
        },
      },
      fontFamily: {
        display: ["Inter", "s"],
        body: ["Inter", "s"],
      },
      boxShadow: {
        box: "0px 4px 40px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
