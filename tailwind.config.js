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
        "black-color": "var(--black-color)",
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",
        "grey": "var(--grey)",
        "head-primary": "var(--head-primary)",
      },
      fontFamily: {
        paragraph: ['var(--font-paragraph)'],
        heading: ['var(--font-heading)'],
      },
    },
  },
  plugins: [],
};
