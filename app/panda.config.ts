//import { pandaPreset } from './../web-component-lib/src/preset'
import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  presets: ['@pandacss/dev/presets', 'web-component-lib/preset'],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './src/**/*.{js,jsx,ts,vue}',
    './node_modules/web-component-lib/dist/panda.buildinfo.json',
  ],
  // The output directory for your css system
  outdir: '../generated',
  importMap: {
    css: '@acme/ui-lib/css',
    recipes: '@acme/ui-lib/recipes',
    patterns: '@acme/ui-lib/patterns',
    jsx: '@acme/ui-lib/jsx',
  },
});
