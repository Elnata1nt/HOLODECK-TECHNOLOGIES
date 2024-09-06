// tailwind.config.js
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow Condensed", "sans-serif"],
        newAmsterdam: ["New Amsterdam", "serif"],
      },
      width: {
        auto: "auto",
        full: "100%",
      },
      colors: {
        primary: '#a9e916',         // Substituído por --color-primary
        // base: '#f7114b',    
        secondary: '#5015bd',      // Substituído por --color-secondary
        secondaryporple: '#3c297a',  // secondaryporple
        third: '#364461',           // Substituído por --color-third'
        black: '#000000',           // Substituído por --color-black
        white: '#ffffff',           // Substituído por --color-white
        whitebg: '#e4ebf0',           // Substituído por --color-white
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },

    },
  },
  variants: {},
  plugins: [],
};
