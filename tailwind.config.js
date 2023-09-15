/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        peach: "#E7816B",
        black: "#1D1C1E",
        lightPeach: "#FFAD9B",
        darkGrey: "#333136",
        lightGrey: "#F1F3F5",
      },
      backgroundImage: {
        webMobile: "url('/src/assets/home/mobile/image-web-design.jpg')",
        webTablet: "url('/src/assets/home/tablet/image-web-design.jpg')",
        webDesktop: "url('/src/assets/home/desktop/image-web-design-large.jpg')",
      },
      spacing: { container: "var(--container-w)" },
      cx: "calc((100% - var(--container-w)) / 2)",
    },
    screens: {
      ss: "375px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1440px",
    },
    fontFamily: {
      jost: ["Jost", "sans serif"],
    },
  },
  plugins: [],
};
