module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      bg: {
        light: "#F6FFE4",
        DEFAULT: "#F6FFE4",
        dark: "#223003",
      },
      blue: {
        light: "#4DBAD2",
        DEFAULT: "#4DBAD2",
        dark: "#437EF1",
      },
      green: {
        light: "#95EA61",
        DEFAULT: "#95EA61",
        dark: "#479E12",
      },
      smoke: {
        light: "#2B3C21",
        DEFAULT: "#2B3C21",
        dark: "#5E8F40",
      },
      nav: {
        light: "#525252",
        dark: "#525252",
        dark: "#FFFFFF",
      },
      card: {
        light: "#F1DA60",
        default: "#F1DA60",
        dark: "#806F19",
      },
      footer: {
        light: "#B8D87A",
        default: "#B8D87A",
        dark: "#184000",
      },
    },
    extend: {
      dropShadow: {
        nxl: "7px 7px 0px #000000",
        inxl: "-4px -4px 0px #000000",
      },
      width: {
        card: "240px",
      },
      height: {
        card: "240px",
      },
    },
  },
  plugins: [],
};
