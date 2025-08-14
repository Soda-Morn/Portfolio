import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    VitePWA({
      registerType: 'auto',
      includeAssets: ['/icons/image.png'],
      manifest: {
        name: 'Soda Morn',
        short_name: 'Soda Morn',
        description: 'Soda Morn Portfolio',
        theme_color: '#ffffff',
        background_color: '#f0f0f0',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/icons/soda2.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/soda1.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})