module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/*.svg",
  ],
  theme: {
    fontFamily: {
      body: [`'Jones*'`, "sans-serif"],
    },
    extend: {
      colors: {
        body: "#FEF2EC",
      },
      backgroundImage: {
        events:
          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(254,242,236,1) 100%)",
        "events-dark":
          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(34,24,28,1) 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
