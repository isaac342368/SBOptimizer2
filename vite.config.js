import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'SBOptimizer2';
// https://vitejs.dev/config/
export default defineConfig({
  base: '/SBOptimizer2/',
  plugins: [react()],
})
