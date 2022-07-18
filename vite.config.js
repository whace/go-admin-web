import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    server: {
      port: 8999,
    },
    resolve: {
      alias: {
        '/@': resolve(__dirname, './src'),
      },
    },
    plugins: [react()],
  };
});
