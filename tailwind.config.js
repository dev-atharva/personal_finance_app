/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    screens:{
      'sm':'300px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      // Add your custom breakpoints here
      'xs': '480px',
    }
  },
  plugins: [],
}

