import { defineConfig } from '@pandacss/dev';
import corePreset from './src/core-preset';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Presets to use
  presets: [corePreset],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // JSX framework to use
  jsxFramework: 'react',

  // The output directory for your css system
  outdir: 'styled-system',
});
