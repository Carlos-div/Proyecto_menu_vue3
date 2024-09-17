/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
       primary: '#be9d56', //  blue
       secondary: '#f1c40f', //  yellow
       dark: '#2c3e50', //   dark blue
      },
      borderRadius: {
        'rouFull-1': '208px',
        'rouFull-2': '208px',
      },
    },
  },
  plugins: [],
}

