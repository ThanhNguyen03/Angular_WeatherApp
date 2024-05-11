/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Include Angular component templates
  ],
  theme: {
    extend: {
      colors: {
        day: 'rgba(246,181,175,0.4117296576833859)',
        night: 'rgba(93,158,109,0.5349789574032738)',
        violet: 'rgba(255,60,42,0.6862394616049545)',
        lavender: 'rgba(141,69,233,0.7254551478794643)'
      },
      screens: {
        'custom-min': {
          min: '900px',
        },
        'custom-max': {
          max: '900px',
        },
        'custom-500': {
          max: '500px',
        },
      },
    },
  },
  plugins: [],
}

