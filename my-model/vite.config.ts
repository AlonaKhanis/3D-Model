import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/3D-Model/', // Correctly specify the subpath for GitHub Pages
  plugins: [react()],
});
