import { defineConfig } from 'vite'
import { getDirname } from '@adonisjs/core/helpers'
import inertia from '@adonisjs/inertia/client'
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adonisjs from '@adonisjs/vite/client'

export default defineConfig({
  plugins: [
    inertia({ ssr: { enabled: true, entrypoint: 'inertia/app/ssr.ts' } }),
    svelte({
      compilerOptions: { hydratable: true },
      preprocess: [vitePreprocess()],
    }),
    adonisjs({ entrypoints: ['inertia/app/app.ts'], reload: ['resources/views/**/*.edge'] }),
  ],

  /**
   * Define aliases for importing modules from
   * your frontend code
   */
  resolve: {
    alias: {
      '~/': `${getDirname(import.meta.url)}/inertia/`,
      '@pages': `${getDirname(import.meta.url)}/inertia/pages/`,
      '@components': `${getDirname(import.meta.url)}/inertia/components/`,
    },
  },
})
