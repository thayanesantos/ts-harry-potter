// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import tailwindcss from '@tailwindcss/vite';
// import { ghPages } from 'vite-plugin-gh-pages';

// export default defineConfig({
//   base: 'https://thayanesantos.github.io/ts-harry-potter/',
//   plugins: [react(), tailwindcss(), ghPages()],
// });


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
