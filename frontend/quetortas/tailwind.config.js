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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        lunasima: ["var(--font-lunasima)"],
        love: ["var(--font-love)"],
        lucky: ["var(--font-luckiest-guy)"],
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
