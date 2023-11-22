import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import * as path from 'path';
import { defineConfig } from 'vite';

dotenv.config();

export default defineConfig({
  plugins: [react()],
  root: 'src',
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  define: {
    API_BASE: `"${process.env.VITE_API_BASE}"`,
  },
});
