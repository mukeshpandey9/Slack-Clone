/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      custom: {
        "clip-path": "ellipse(75% 100% at center top)",
      },
      colors: {
        darkPurple: "#541554",
      },
    },
  },
  plugins: [],

  // addComponents: {
  //   ".clip-path": {
  //     clipPath: "ellipse(75% 100% at center top)",
  //   },
  // },
};
