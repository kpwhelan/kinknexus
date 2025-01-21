import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    server: {
        host: 'localhost',
        port: 5173,
        strictPort: true,
        cors: {
            origin: 'http://localhost', // Update this to match your Laravel app's URL
            credentials: true,
        },
        hmr: {
            host: 'localhost',
        },
    },
});
