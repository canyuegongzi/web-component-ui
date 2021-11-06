import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // entry: resolve(__dirname, 'src/vitedemo.tsx'),
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      formats: [ 'es' ],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: [ '@canyuegongzi/web-core' ],
      /*input: {
        main: resolve(__dirname, 'index.html'),
        admin: resolve(__dirname, 'demo.html')
      }*/
    }
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'h.f'
  }
});
