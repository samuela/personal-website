/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Courier', 'monospace'],
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
