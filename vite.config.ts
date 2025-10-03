import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  plugins: [
    react(),

    // Plugin para transformações dinâmicas de imagens
    imagetools({
      // Configurações padrão para diferentes formatos
      defaultDirectives: (url) => {
        if (url.searchParams.has('responsive')) {
          return new URLSearchParams(
            'w=320;640;1024;1280;1920&format=webp;jpg&as=srcset'
          )
        }
        if (url.searchParams.has('thumbnail')) {
          return new URLSearchParams('w=150&h=150&fit=cover&format=webp')
        }
        if (url.searchParams.has('hero')) {
          return new URLSearchParams(
            'w=1920&h=1080&fit=cover&format=webp;jpg&quality=80'
          )
        }
        return new URLSearchParams()
      }
    })
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@core': path.resolve(__dirname, './src/core'),
      '@features': path.resolve(__dirname, './src/features'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@ty[es': path.resolve(__dirname, './src/ty[es')
    }
  },

  // Configurações de build para otimização adicional
  build: {
    rollupOptions: {
      output: {
        // Separar assets por tipo
        assetFileNames: (assetInfo) => {
          // Usar 'names' ao invés de 'name' (deprecated)
          const fileName = assetInfo.names?.[0] || 'unknown'
          const info = fileName.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        }
      }
    }
  }
})
