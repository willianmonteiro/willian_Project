import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { config as configEnv } from 'dotenv'

configEnv()

export default defineConfig({
  plugins: [react()],
})
