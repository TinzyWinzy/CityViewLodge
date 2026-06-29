import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import {VitePWA} from 'vite-plugin-pwa';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icons/*.svg'],
      manifest: {
        name: 'City View Guest House',
        short_name: 'City View',
        description: 'Boutique guest house in Braeside, Harare. Solar-powered, secure, book direct on WhatsApp.',
        theme_color: '#1a1a1a',
        background_color: '#FDFCFB',
        display: 'standalone',
        orientation: 'portrait-primary',
        start_url: '/',
        scope: '/',
        icons: [
          { src: '/icons/icon-192.svg', sizes: '192x192', type: 'image/svg+xml' },
          { src: '/icons/icon-512.svg', sizes: '512x512', type: 'image/svg+xml' },
          { src: '/icons/icon-maskable.svg', sizes: '512x512', type: 'image/svg+xml', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,jpg,jpeg,png,ico}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/www\.cityviewguesthouse\.co\.zw\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'cityview-pages',
              expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 30 },
              networkTimeoutSeconds: 5,
            },
          },
          {
            urlPattern: /^https:\/\/www\.google\.com\/maps\/embed.*/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'cityview-maps',
              expiration: { maxEntries: 5, maxAgeSeconds: 60 * 60 * 24 * 7 },
            },
          },
        ],
      },
    })],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
