import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'src/images',
          dest: ''
        }
      ]
    })
  ],
  build: {
    base: '/goit-advancedjs-hw-01/',
    outDir: 'dist',
  },
});
