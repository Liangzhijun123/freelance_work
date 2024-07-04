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
export const plugins = [];

