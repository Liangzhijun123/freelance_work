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
  },
};

export const plugins = [
  function ({ addUtilities }) {
    addUtilities({
      '.border-b-gradient-to-r': {
        borderBottom: '1px solid transparent',
        borderImage: 'linear-gradient(to right, #7b16e600, #7A16E6, #7b16e600)',
        borderImageSlice: -1,
      },
      '.border-t-gradient-to-r': {
        borderTop: '1px solid transparent',
        borderImage: 'linear-gradient(to right, #7b16e600, #7A16E6, #7b16e600)',
        borderImageSlice: -1,
      },
      '.border-bottom-gradient': {
        borderBottom: '4px solid transparent',
        borderImage: 'linear-gradient(to right, rgba(185, 91, 234, 0.0), rgba(185, 91, 234, 0.4), rgba(185, 91, 234, 0.0))',
        borderImageSlice: 1,
      },
    }, ['responsive', 'hover']);
  },
];
