import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: { 
        "rubik": ['Rubik', 'sans-serif'] 
      },
      colors: {
        'Blue': 'hsl(246, 80%, 60%)',
        'Light-red': 'hsl(15, 100%, 70%)',
        'Soft-blue': 'hsl(195, 74%, 62%)',
        'Light-red2': 'hsl(348, 100%, 68%)',
        'Lime-green': 'hsl(145, 58%, 55%)',
        'Violet': 'hsl(264, 64%, 52%)',
        'Soft-orange': 'hsl(43, 84%, 65%)',
        'Very-dark-blue': 'hsl(226, 43%, 10%)',
        'Dark blue': 'hsl(235, 46%, 20%)',
        'Desaturated-blue': 'hsl(235, 45%, 61%)',
        'Pale-Blue': 'hsl(236, 100%, 87%)'
      },
      screens: {
        'xs': '300px',
        'sm': '640px',
        'md': '790px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
};
export default config;
