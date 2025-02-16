/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        colors:{
            openticket:{
                "50": "#FEF8E6",
                "100": "#FEF1CC",
                "150": "#FDEAB3",
                "200": "#FCE399",
                "250": "#FCDD80",
                "300": "#FBD666",
                "350": "#FACF4D",
                "400": "#F9C833",
                "450": "#F9C11A",
                "500": "#F8BA00",
                "550": "#DFA700",
                "600": "#C69500",
                "650": "#AE8200",
                "700": "#957000",
                "750": "#7C5D00",
                "800": "#634A00",
                "850": "#4A3800",
                "900": "#322500",
                "950": "#191300"
            }
        }
    },
  },
  plugins: [],
  corePlugins:{
    preflight:false
  },
  darkMode:["class",'[data-theme="dark"]']
}

