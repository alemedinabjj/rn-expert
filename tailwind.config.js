/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/*.{ts,tsx}', './src/components/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: 'InterSemiBold',
        subtitle: 'InterMedium',
        body: 'InterRegular',
        bold: 'InterBold',
      },
    },
  },
  plugins: [],
}
