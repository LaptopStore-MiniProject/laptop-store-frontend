/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], 
      },
      fontSize: {
        xs: '12px',
        sm: '13px',
        base: ['14px', '24px'],
        lg: '16px',
        xl: '20px',
        '2xl': '24px',
      },
      colors: {
        pv: {
          text: {
            primary: '#333333',
            secondary: '#434657',
            inverse: '#848788',
          },
          surface: {
            base: '#000000',
            muted: '#f8f8fc',
          }
        }
      },
      spacing: {
        '1': '6.4px',
        '2': '8px',
      }
    },
  },
  plugins: [],
}