import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    include: ['**/*.test.tsx'],
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setupAfterEnv.ts',
  },
});
