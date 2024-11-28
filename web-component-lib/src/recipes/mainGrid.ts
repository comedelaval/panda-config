import { defineRecipe } from '@pandacss/dev';
import { defaultGrid } from '../commonCss/default';

export const mainGrid = defineRecipe({
  className: 'mainGrid',
  description: 'default grid',
  base: {
    padding: '0px',
    defaultGrid,
  },
  variants: {
    visual: {
      specialBloc: {
        marginTop: '-40px',
        maxWidth: '1280px',
      },
      tabs: {
        gap: '{spacing.3}',
        padding: '0',
      },
    },
  },
});
