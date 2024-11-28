import { defineLayerStyles } from '@pandacss/dev';
export const layerStyles = defineLayerStyles({
  input: {
    description: 'Input styles',
    value: {
      padding: 'sm',
      color: 'textPrimary',
      backgroundColor: 'systemBackground',
      '&[data-disabled=true]': {
        backgroundColor: {
          _cafeynTheme: '{colors.starkWhiteLight.50}',
          _blendleTheme: '{colors.neutralDark.400}',
          _epresseTheme: '{colors.neutralDark.400}',
        },
        color: '{colors.textSecondary}',
      },
    },
  },
  surfacePrimary: {
    description: 'Surface primary',
    value: {
      color: 'systemWhite',
      backgroundColor: 'brandSecondary',
      _disabled: {
        backgroundColor: '{colors.starkWhiteLight.50}',
        color: '{colors.textSecondary}',
      },
    },
  },
  surfaceTertiary: {
    description: 'Surface primary',
    value: {
      backgroundColor: '#FFFFFF',
    },
  },
  buttonSurfacePrimary: {
    description: 'Button style',
    value: {
      color: 'systemWhite',
      backgroundColor: 'brandSecondary',
      _disabled: {
        backgroundColor: '{colors.alabasterLight.700}',
        color: '{colors.textSecondary}',
      },
      _hover: {
        '&:not(:disabled, [disabled], [data-disabled])': {
          backgroundColor: {
            _cafeynTheme: '#4C362C',
            _blendleTheme: '{colors.neutralDark.400}',
            _epresseTheme: '{colors.neutralDark.400}',
          },
        },
      },
    },
  },
  buttonSurfaceSecondary: {
    description: 'Button style',
    value: {
      color: 'textPrimary',
      backgroundColor: '{colors.surfacePrimary}',
      _disabled: {
        backgroundColor: {
          _cafeynTheme: '{colors.alabasterLight.50}',
          _blendleTheme: '{colors.neutralDark.400}',
          _epresseTheme: '{colors.neutralDark.400}',
        },
        color: {
          base: '{colors.transparencyLight.70}',
        },
      },
      _hover: {
        '&:not(:disabled, [disabled], [data-disabled])': {
          backgroundColor: {
            _cafeynTheme: '#F2ECE2',
            _blendleTheme: '{colors.neutralDark.400}',
            _epresseTheme: '{colors.neutralDark.400}',
          },
        },
      },
    },
  },
  buttonSurfaceBrand: {
    description: 'Button style',
    value: {
      color: {
        _blendleTheme: 'textWhite',
        _epresseTheme: 'textWhite',
        _cafeynTheme: 'textPrimary',
      },
      backgroundColor: '{colors.surfaceBrand}',
      _disabled: {
        backgroundColor: '#ffffff',
        _hover: {
          backgroundColor: '#ffffff',
        },
      },
      _hover: {
        backgroundColor: '{colors.surfaceBrandHover}',
        color: 'textPrimary',
      },
    },
  },
  buttonTemporary: {
    description: 'Button style',
    value: {
      color: 'textPrimary',
      backgroundColor: '#ffffff',
      _disabled: {
        backgroundColor: '{colors.alabasterLight.700}',
        color: '{colors.transparencyLight.70}',
        _hover: {
          backgroundColor: '{colors.alabasterLight.700}',
        },
      },
      _hover: {
        backgroundColor: '{colors.systemBlack}',
        color: 'textWhite',
      },
      '&[data-active=true]': {
        backgroundColor: '{colors.systemBlack}',
        color: 'textWhite',
      },
      border: 'primary',
    },
  },
  topicSelected: {
    description: 'Use in onboarding topics',
    value: {
      backgroundColor: 'surfaceBrand',
      borderWidth: '2px',
      boxShadow:
        '0px 4px 8px -2px rgba(16, 24, 40, 0.10), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
      border: 'brand',
      color: {
        _cafeynTheme: 'textPrimary',
        _blendleTheme: 'textWhite',
        _epresseTheme: 'textWhite',
      },
    },
  },
  topic: {
    description: 'Use in onboarding topics',
    value: {
      backgroundColor: 'surfaceBrandLight',
      borderWidth: '2px',
      border: 'brand',
      _hover: {
        boxShadow:
          '0px 4px 8px -2px rgba(16, 24, 40, 0.10), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
        border: 'brand',
        backgroundColor: 'surfaceBrand',
        color: {
          _cafeynTheme: 'textPrimary',
          _blendleTheme: 'textWhite',
          _epresseTheme: 'textWhite',
        },
      },
    },
  },
});
