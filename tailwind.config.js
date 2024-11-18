module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#03071e',
        'dark-red': '#370617',
        'crimson-red': '#6a040f',
        'red': '#9d0208',
        'bright-red': '#d00000',
        'bright-orange': '#dc2f02',
        'orange': '#e85d04',
        'golden-orange': '#f48c06',
        'light-yellow': '#faa307',
        'bright-yellow': '#ffba08',
      },
      fontFamily: {
        title: ['Bebas Neue', 'sans-serif'], 
        body: ['Noto Serif', 'serif'],
        edu: ['Edu AU VIC WA NT Pre', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
