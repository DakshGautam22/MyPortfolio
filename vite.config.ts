import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://dakshgautam22.github.io/MyPortfolio/', // Chae this if you are using a custom domain or a user page (dakshgautam22.github.io)
})
