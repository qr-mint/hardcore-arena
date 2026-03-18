import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        react(),
        tailwindcss()
    ],
    server: {
        port: 8080,
        allowedHosts: ["6ee6f73aa6fd.ngrok-free.app"]
    },
    resolve: {
		alias: {
			'@': fileURLToPath(new URL('../src', import.meta.url)),
			buffer: 'buffer/',
			process: 'process/browser',
			stream: 'stream-browserify',
		},
	},
})
