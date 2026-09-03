module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        starBlue: "#0A2A6B",
        starRed: "#E30613",
        cream: "#FFFFFF",
        ink: "#0A0F1F"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        serif: ["Instrument Serif", "serif"],
        mono: ["JetBrains Mono", "monospace"]
      }
    }
  },
  plugins: []
}
