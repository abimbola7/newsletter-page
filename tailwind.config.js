/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors : {
        //primary
        tomato : "hsl(4, 100%, 67%)",
        //neutral
        darkSlate : "hsl(234, 29%, 20%)",
        charcoal : "hsl(235, 18%, 26%)",
        grey : "hsl(231, 7%, 60%)",
        white : "hsl(0, 0%, 100%)"
      },
    },
    screens: {      
      // => @media (min-width: 475px) { ... }
      'sm': '600px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}

