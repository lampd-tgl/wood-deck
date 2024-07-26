import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  build: {
    minify: false,
    lib: {
      entry: './src/index.js',
      name: 'WoodDeck',
      fileName: `wood-deck@1.0.21`,
      formats: ['es'],
    },

    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
    },
  },
})
