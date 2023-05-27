/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#fafafa",
        textColor: "#707070",
        btnBgColor: "#fcfcfc",
        catalogBg: "#F2F2FD",
        fullBlue: "#007DCA",
        searchBgColor: "#F2F2F2",
        borderColor: "#707070",
        borderColor2: "#e2e2e2",

        borderColorCard: "#c1c1c1",
        closeColorBtn: "#B8B8B8",
        yandexText: "#868695",
        // SignIn
        SignInBgColor: "#0077B6",
        OpacitySignIn: "#E8E8E8",
        // set wear
        setButtonColor: "#E8E8E8",
        setTexOpacity: "#A1A1A1",
        setPriceRed: "#D50000",
        // Skeleton Color
        skeltonColor: "#F4F4F4",
        bgCard: "rgba(255, 255, 255, 0.4)",
        // season-----
        borderSpring: "#008F0E",
        bgSpring: "rgba(0, 143, 14, 0.1)",
        borderSummer: "#EAA700",
        bgSummer: "rgba(234, 167, 0, 0.1)",
        borderAutumm: "#E17A02",
        bgAutumm: "rgba(225, 122, 2, 0.1)",
        borderWinter: "#007DCA",
        bgWinter: "rgba(0, 125, 202, 0.1)",
        // yandex navbar
        yandexNavbar: " rgba(255, 255, 255, 0.8)",
        yandexWhite: " #FFFFFF",
        // Icons Colors
        Alyuminy: "#4D4D4D",
        // Make body Mobile
        makeBodyBg: "rgba(252,252,252,0.5)",

        // BgCategory...
        bgCategory: "#F8F8F8",
        textOpacity: "#D9D9D9",

        // Basket Result Money
        BasketMoneyColor: "#008F0E",
        // Loading...
        LoadinBg: "rgba(252,252,252,0.8)",

        // Products Colors
        PC1: "#7000FF",
        PC2: "#000",
        PC3: "#fff",
        PC4: "#7F7F7F",
        PC5: "#0D5F91",
        PC6: "#E2B000",
        TextTitle: "#212121",
      },
      fontFamily: {
        // Chrome for
        // 400
        AeonikProRegular: ["OTFAeonikProRegular", "sans-serif"],
        // 500
        AeonikProMedium: ["OTFAeonikProMedium", "sans-serif"],
      },
      boxShadow: {
        myShadow1: "1px -2px 0 0 rgb(17,24,39)",
        myShadow2: "-1px -2px 0 0 rgb(17,24,39)",
        cardShadow: "0px 1px 10px 0px rgba(0,0,0,0.59)",
        navbarShadow: "0px -4px 14px -4px rgba(0,0,0,0.75)",
        navMenuShadov: "0px -2px 10px -8px rgba(0,0,0,0.75)",
      },
    },
    letterSpacing: {
      "1": "0.01em",
    },
    screens: {
      ss: "320px",
      ls: "360px",
      ll: "390px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
    },
  },
  plugins: [],
};
