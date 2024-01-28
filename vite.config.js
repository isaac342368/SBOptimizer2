import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'SBOptimizer2';
// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/SBOptimizer2/' : './',
  plugins: [react()],
})
