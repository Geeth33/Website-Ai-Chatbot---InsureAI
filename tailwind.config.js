/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#030213",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#8B5CF6",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#6366F1",
          foreground: "#ffffff",
        },
        background: "#ffffff",
        foreground: "#030213",
        muted: "#f3f3f5",
        "muted-foreground": "#717182",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
