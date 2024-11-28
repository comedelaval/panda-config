import { preset } from './src/preset';
import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  presets: ['@pandacss/dev/presets', preset],
  // Where to look for your css declarations
  include: [
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './pages/**/*.{js,jsx,ts,tsx,vue}',
  ],

  // Files to exclude
  exclude: [],

  outdir: '../generated',
  importMap: {
    css: '@acme/ui-lib/css',
    recipes: '@acme/ui-lib/recipes',
    patterns: '@acme/ui-lib/patterns',
  },
});
