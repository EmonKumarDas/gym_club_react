module.exports = {
  content: ["./src/**/*.{html,js}"],
  themes: [
    {
      mytheme: {

        "primary": "#d1c9ff",

        "secondary": "#f98b7a",

        "accent": "#f7749b",

        "neutral": "#312A3C",

        "base-100": "#282C43",

        "info": "#8DE5F7",

        "success": "#11744C",

        "warning": "#F1BD65",

        "error": "#F22652",
      },
    },
  ],
  plugins: [require("daisyui")],
}
