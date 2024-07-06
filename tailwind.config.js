/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      'Sora': ['Sora', 'sans-serif'],
      'Inter': ['Inter', 'sans-serif'],
    },
    colors: {
      gradientFrom: '#f9c60e13',
      gradientVia: '#F9C80E',
      gradientTo: '#f9c60e13',
    },
    borderColor: {
      'gradient-to-r': 'transparent',
    },
  },
};
export const plugins = [
  function ({ addUtilities }) {
    addUtilities({
      '.border-b-gradient-to-r': {
        borderBottom: '4px solid transparent',
        borderImage: 'linear-gradient(to right, white, #7A16E6, white)',
        borderImageSlice: 1,
      },
    }, ['responsive', 'hover']);
  },
];
