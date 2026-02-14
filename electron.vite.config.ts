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
        root: 'src',
        build: {
            rollupOptions: {
                input: {
                    main: resolve(__dirname, 'src/index.html'),
                    popup: resolve(__dirname, 'src/popup.html')
                }
            }
        },
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src')
            }
        },
        plugins: [react(), tailwindcss()]
    }
})
