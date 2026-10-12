/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg-primary: 'var(--bg-primary)',
        bg-secondary: 'var(--bg-secondary)',
        bg-tertiary: 'var(--bg-tertiary)',
        bg-surface: 'var(--bg-surface)',
        fg-primary: 'var(--fg-primary)',
        fg-secondary: 'var(--fg-secondary)',
        fg-muted: 'var(--fg-muted)',
        accent-gold: 'var(--accent-gold)',
        accent-gold-light: 'var(--accent-gold-light)',
        accent-gold-very-light: 'var(--accent-gold-very-light)',
        border: 'var(--border-color)',
        card-hover: 'var(--card-hover)',
      },
      fontFamily: {
        primary: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        secondary: ['Manrope', 'Inter', 'sans-serif'],
      },
    },
  },
};