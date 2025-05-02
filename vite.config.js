// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite';
// import @tailwindcss;

// export default defineConfig({
//   plugins: [
//     react({
//       include: /\.(mdx|js|jsx|ts|tsx)$/,
//     }),
//  , tailwindcss()],
// });

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),tailwindcss()],
//   }
// )
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default ({
  plugins: [react(),tailwindcss()],
});