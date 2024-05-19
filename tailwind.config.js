/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,md}'],
  theme: {
    extend: {
      colors: {
        border: 'var(--border)',
        button: 'var(--button)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        primary: 'var(--primary)',
        secondary: 'hsl(var(--secondary))',
      },
    },
  },
  plugins: [],
};
