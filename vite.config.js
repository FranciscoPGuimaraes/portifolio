import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [vue(), react()],
    resolve: {
        alias: {
            src: path.resolve(__dirname, './src')
        }
    }
});