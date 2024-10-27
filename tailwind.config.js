/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      sizes: {
        "sm":"576px",
        "md":"900px",
    
      },
      fontSize:{
          "4xl":"60px"
      },
      
    },
  },
  plugins: [],
}

