import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig({
  plugins: [
    injectHTML(),
    FullReload(['./src/**/**.html']),
    SortCss({ sort: 'mobile-first' }),
    viteStaticCopy({
      targets: [
        {
          src: 'src/images',
          dest: ''
        }
      ]
    }),
  ],
  root: 'src',
  build: {
    base: '/goit-advancedjs-hw-01/',
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: './src/index.html',
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        entryFileNames: chunkInfo => {
          if (chunkInfo.name === 'commonHelpers') {
            return 'commonHelpers.js';
          }
          return '[name].js';
        },
        assetFileNames: assetInfo => {
          if (assetInfo.name && assetInfo.name.endsWith('.html')) {
            return '[name].[ext]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});
