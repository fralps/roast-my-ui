/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './resources/**/*.edge',
    './resources/**/*.{js,ts,jsx,tsx,svelte}',
    './inertia/**/*.{js,ts,jsx,tsx,svelte}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
