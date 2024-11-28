import { defineRecipe } from '@pandacss/dev';

export const button = defineRecipe({
  className: 'button',
  description: 'The styles for the Button component',
  base: {
    fontFamily: 'sourcesans3',
    position: 'relative',
    textStyle: 'body',
    fontWeight: 'semiBold',
    borderRadius: 'sm',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    _disabled: {
      cursor: 'not-allowed',
    },
  },
  variants: {
    visual: {
      dark: {
        layerStyle: 'buttonSurfacePrimary',
      },
      white: {
        layerStyle: 'buttonSurfaceSecondary',
        boxShadow:
          '0px 8px 16px 0px rgba(0, 0, 0, 0.05), 0px 2px 8px 0px rgba(0, 0, 0, 0.05)',
      },
      text: {
        color: 'textPrimary',
        textDecoration: 'underline',
      },
      brand: {
        layerStyle: 'buttonSurfaceBrand',
        color: 'buttonBrandColor',
      },
      filter: {
        layerStyle: 'buttonTemporary',
        width: '9.25rem',
      },
    },
    size: {
      xs: {
        height: '2.125rem',
        padding: '0rem 1rem',
        fontSize: '2xs',
        borderRadius: 'sm',
      },
      sm: {
        height: '12',
        padding: '0rem 2.375rem',
        fontSize: 'xs',
        borderRadius: 'sm',
      },
      md: {
        height: '12',
        padding: '0rem 3.0625rem',
        fontSize: '0.6875rem',
        borderRadius: 'md',
      },
      lg: {
        height: '2.875rem',
        padding: '0.5rem 1rem',
        borderRadius: 'sm',
      },
      xl: {
        height: '3.75rem',
        padding: '0rem 5rem',
        fontSize: 'sm',
        borderRadius: 'sm',
      },
    },
  },
  defaultVariants: {
    visual: 'dark',
    size: 'sm',
  },
});
