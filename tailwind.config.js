const colors = require('./tailwind/colors');
const animation = require('./tailwind/animations');
const keyframes = require('./tailwind/keyframes');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      animation,
      keyframes,
    },
  },
  plugins: [],
};
