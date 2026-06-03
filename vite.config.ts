import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import fs from 'fs';

// Ensure public folder exists and contains our PWA icon
try {
  const publicDir = path.resolve(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }
  const srcIcon = path.resolve(__dirname, 'src/assets/images/pwa_app_icon_1780456255449.png');
  const destIcon = path.resolve(publicDir, 'pwa-icon.png');
  if (fs.existsSync(srcIcon)) {
    fs.copyFileSync(srcIcon, destIcon);
    console.log('PWA app icon copied successfully to /public/pwa-icon.png');
  }
} catch (e) {
  console.error('Failed to copy PWA app icon:', e);
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
