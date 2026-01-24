/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Source Code Pro"', 'monospace'],
        serif: ['"Crimson Pro"', 'Charter', 'Georgia', 'serif'],
      },
      colors: {
        'dark-red': '#8B0000',
        'light-gray': '#e9ecef',
        'container-bg': '#fefefe',
      },
    },
  },
  plugins: [],
};
