module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nwordle: {
          gray: {
            50: '#f6f7f8',
            100: '#edeff1',
            200: '#d3d6da',
            300: '#878a8c',
            400: '#787c7e',
          },
          yellow: {
            50: '#c9b458',
            100: '#b59f3b',
          },
          green: {
            50: '#6aaa64',
            100: '#538d4e',
          },
          orange: {
            50: '#f5793a',
          },
          blue: {
            50: '#85c0f9',
          },
        },
      },
    },
  },
  plugins: [],
};
