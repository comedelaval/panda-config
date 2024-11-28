import { defineRecipe } from '@pandacss/dev';
import { shadows } from '../theme/shadows';

export const tag = defineRecipe({
  className: 'tagPubisher',
  description: 'styles for the tag component',
  base: {
    height: '2rem',
    width: '4.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '{spacing.4xs} {spacing.3xs}',
    borderRadius: 'lg',
    // border: 'secondary',
    background: 'surfacePrimary',
    '& img': {
      // TODO FIT IMG
      maxWidth: '100% !important',
      height: '100% !important',
      width: '100%',
      objectFit: 'contain',
    },
    '& .missingLogo': {
      textStyle: 'titleCappSemiBold',
      textAlign: 'center',
    },
  },
  variants: {
    visual: {
      selected: {
        cursor: 'pointer',
        '& .red-cross-circle': {
          borderRadius: '50%',
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
          bg: 'systemBackground',
          width: '1.25rem',
          height: '1.25rem',
          position: 'absolute',
          boxShadow:
            '0px 4px 8px -2px rgba(33, 23, 18, 0.10), 0px 2px 4px -2px rgba(33, 23, 18, 0.05)',
          visibility: 'hidden',
        },
        _hover: {
          background:
            'linear-gradient(0deg, rgba(33, 23, 18, 0.20) 0%, rgba(33, 23, 18, 0.20) 100%)',
          '& .red-cross-circle': {
            visibility: 'visible',
          },
        },
      },
      title: {
        background: 'surfaceBrand',
        color: {
          _blendleTheme: 'textWhite',
          _epresseTheme: 'textWhite',
          _cafeynTheme: 'textPrimary',
        },
        textStyle: 'bodyInfoRegular',
        width: 'auto',
        display: 'inline-flex',
        padding: '{spacing.4xs} {spacing.xs}',
      },
      logo: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        border: 'primary',
      },
      newsfeed: {
        '& img': {
          width: 'auto',
        },
        padding: '0px',
        background: 'transparent',
        borderRadius: '0px',
        maxWidth: '100% !important',
        height: '100% !important',
        justifyContent: 'flex-start',
      },
      missingLogo: {
        background: 'surfacePrimary',
        color: 'textPrimary',
        textStyle: 'bodyInfoSemiBold',
        width: 'auto',
        display: 'inline-flex',
        border: 'primary',
      },
    },
    size: {
      xl: {
        boxShadow: 'none',
      },
      '2xl': {
        boxShadow: shadows['2xl'],
      },
      md: {
        boxShadow: shadows.md,
      },
      sm: {
        boxShadow: shadows.xm,
        background: 'surfaceBrand',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
