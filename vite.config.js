// import { defineConfig } from 'vite';
// import laravel from 'laravel-vite-plugin';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//     plugins: [
//         laravel({
//             input: [
//                 'resources/sass/app.scss',
//                 'resources/js/app.js',
//             ],
//             refresh: true,
//         }),
//         react(),
//     ],
// });


import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [
    laravel({
      input: [
         'resources/sass/app.scss',
         'resources/js/app.js',
      ],
      refresh: true,
    }),
    reactRefresh()
  ],
});