import { defineRecipe } from '@pandacss/dev';

export const dotSeparator = defineRecipe({
  className: 'dotSeparator',
  description: 'styles for dot component',
  base: {
    width: '0.25rem',
    height: '0.25rem',
    borderRadius: '50%',
    backgroundColor: 'systemNeutral',
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
  },
});
