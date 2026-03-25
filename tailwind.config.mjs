/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a1a2e',
        'dark-accent': '#0f0f1a',
        'steel-blue': '#4a6fa5',
        'metallic-gold': '#c4a35a',
      },
      fontFamily: {
        'noto': ['"Noto Sans JP"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
