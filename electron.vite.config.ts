import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    main: {
        plugins: [externalizeDepsPlugin()],
        build: {
            lib: {
                entry: resolve('main/index.ts')
            }
        }
    },
    preload: {
        plugins: [externalizeDepsPlugin()],
        build: {
            lib: {
                entry: resolve('preload/index.ts')
            }
        }
    },
    renderer: {
        build: {
            rollupOptions: {
                input: resolve('src/index.html')
            }
        },
        resolve: {
            alias: {
                '@renderer': resolve('src/renderer/src'),
                '@': resolve('src/renderer/src')
            }
        },
        plugins: [react(), tailwindcss()]
    }
})
