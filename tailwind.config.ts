/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui'

const config = {
  content: [
    './resources/**/*.edge',
    './resources/**/*.{js,ts,jsx,tsx,svelte}',
    './inertia/**/*.{js,ts,jsx,tsx,svelte}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['dark'],
  },
  plugins: [daisyui],
}

export default config
