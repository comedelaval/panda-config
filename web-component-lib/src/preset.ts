import { borders, borderWidths } from './theme/borders';
import { primitives } from './theme/colors';
import { fonts } from './theme/fonts';
import { fontSizes } from './theme/fontSizes';
import { fontWeights } from './theme/fontWeights';
import { keyframes } from './theme/keyframesAnimations';
import { lineHeights } from './theme/lineHeights';
import { radii } from './theme/radii';
import { colors } from './theme/semanticColors';
import { spacing } from './theme/spacing';
import { textStyles } from './theme/textStyles';
import { definePreset } from '@pandacss/dev';
import { recipes } from './recipes';
import { layerStyles } from './theme/layerStyles';

export const preset = definePreset({
  name: 'preset',
  theme: {
    recipes,
    extend: {
      layerStyles,
      tokens: {
        colors: primitives,
      },
      semanticTokens: {
        borders,
        borderWidths,
        colors,
        fonts,
        fontWeights,
        fontSizes,
        radii,
        lineHeights,
        spacing,
        // shadows,
      },
      textStyles,
      keyframes,
    },
  },
  conditions: {
    extend: {
      // Extend the default `dark` condition
      cafeynTheme: '[data-theme=Cafeyn] &',
      epresseTheme: '[data-theme=Epresse] &',
      blendleTheme: '[data-theme=Blendle] &',
      light: '[data-color-mode=light] &',
      dark: '[data-color-mode=dark] &',
    },
  },
});
