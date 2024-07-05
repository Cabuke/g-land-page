module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      boxShadow: {
        "2xl": "-15px 11px 5px -6px rgba(230,250,248,1);",
      },
      colors: {
        blue: {
          600: "#12175E",
          500: "#5B67CA",
          400: "#05B4FE",
          300: "#D2F2FF",
          200: "#EBF9FF",
          100: "#F6F6FF",
        },

        pink: {
          300: "#FAE7E34D",
        },

        green: {
          300: "#61DA83",
          200: "#DAFAE3",
          100: "#F1FDF5",
        },

        gray: {
          500: "#23232369",
          400: "#2A2B34",
          300: "#65677B",
          200: "#E4E4E4",
          100: "#F6F6F6",
        },

        white: "#fff",
      },

      fontFamily: {
        sf: ["SF Pro Display", "sans-serif"],
      },
      maxWidth: {
        "8xl": "90rem", // 1440px (novo tamanho)
      },
    },
  },
  plugins: [],
};
