module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'card-background-dark': '#2A2D36',
        'progress-empty': '#57585c',
        'progress-green': '#5cb860',
        'bluish-dark': '#c0caed',
        'input-dark': '#1b1b1c',
        'input-dark-text': '#848484',
        'input-error': '#C15051',
        'button-disabled': '#808080',
        'button': '#7289da',
        'grid-inactive': '#424b6c',
        'grid-active': '#7289da',
        'seed-active-green': 'rgba(92, 184, 96, 0.24)',
        'white': '#ffffff',
      },
    },
  },
  plugins: [],
}