module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
    keyframes : {
      blob: {
          "0%" : {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%" : {
            transform: "translate(30px, 0px) scale(1)",
          },
          "66%" : {
            transform: "translate(-30px, 0px) scale(1)",
          },
          "100%" : {
            transform: "ytanslate(0px, 0px) scale(1)",
          },
        } ,
      },
    },
  },
  plugins: [],
}
