import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio/' // Sostituisci 'nome-repo' con il nome della tua repository su GitHub
    : '/'
}
