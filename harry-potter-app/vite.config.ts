import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  base: '/ts-harry-potter/',
  plugins: [react(), tailwindcss(), ghPages()],
});


