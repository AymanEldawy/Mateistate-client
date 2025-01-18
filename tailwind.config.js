/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    // extend: {},
    colors: ({ colors }) => ({
      ...colors,
      primary: "#144479",
      secondary: "",
      "dark-bg": "#212121",
      "dark-border": "#303030",
      "dark-text": "",
      "dark-primary": "",
      "light-bg": "",
      "light-border": "",
      "light-color": "",
      "light-primary": "",
      // "light-green": "#008776",
      "light-green": "#3b82f6",
      "dark-green": "#2a6fdf",
      // "dark-green": "#005c50",
    }),
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    opacity: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [],
};
