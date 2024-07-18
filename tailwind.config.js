/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    },
    fontFamily:{
       clash:[ 'Clash Display', 'sans-serif'],
       satoshi:['Satoshi', 'sans-serif'],
       logo:["STIX Two Text", 'serif'],
       newsletter:["Baskervville SC",'serif'],
       bellefair:["Baskervville SC",'serif']
    },
    colors:{
      'global':'#292929',
      'dark': '#333333',
      'gray':'#616161',
      'end':'#C056097D',
      'start':'#79C2D2',
      'middle':'#4693ED',
      'white':'#fff'
    }
  },
  plugins: [],
}

