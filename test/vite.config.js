import { defineConfig } from 'vite';
import monacoEditorPlugin from '../dist/index.js';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { fileURLToPath } from 'url';

const dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  root: 'test',
  // base: 'sub',
  build: {
    minify: false,
  },
  plugins: [
    vue(),
    monacoEditorPlugin({
      publicPath: 'a/monacoeditorwork',
      // customDistPath: (root, buildOutDir, base) => {
      //   return path.join(root, buildOutDir);
      // },
      // publicPath: 'https://unpkg.com/vite-plugin-monaco-editor@1.0.5/cdn',
      // forceBuildCDN: true,
      customWorkers: [
        {
          label: 'graphql',
          entry: 'monaco-graphql/esm/graphql.worker',
        },
        {
          label: 'share',
          entry: path.resolve(dirname, 'src/worker/share.worker'),
        },
      ],
    }),
  ],
});
