export const borderWidths = {
  thin: { value: '1' },
  thick: { value: '2' },
  medium: { value: '1.5' },
};

export const borders = {
  // string value
  subtle: { value: '1px solid red' },
  // string value with reference to color token
  danger: { value: '1px solid {colors.red.400}' },
  error: {
    value: {
      color: '{colors.surfaceError}',
      style: 'solid',
      width: borderWidths.thin.value,
    },
  },
  success: {
    value: {
      color: '{colors.systemSuccess}',
      style: 'solid',
      width: borderWidths.thin.value,
    },
  },
  brand: {
    value: {
      _cafeynTheme: {
        base: '1px solid {colors.starkWhiteLight.200}',
        _dark: '1px solid {colors.starkWhiteDark.200}',
      },
      _blendleTheme: {
        base: '1px solid {colors.razzmatazzLight.500}',
        _dark: '1px solid {colors.razzmatazzLight.500}',
      },
      _epresseTheme: {
        base: '1px solid {colors.tangerineLight.600}',
        _dark: '1px solid {colors.tangerineLight.600}',
      },
    },
  },
  searchInput: {
    value: {
      _cafeynTheme: {
        base: '1px solid {colors.starkWhiteLight.200}',
        _dark: '1px solid {colors.starkWhiteDark.200}',
      },
      _blendleTheme: {
        base: '1px solid {colors.neutralLight.200}',
        _dark: '1px solid {colors.neutralLight.200}',
      },
      _epresseTheme: {
        base: '1px solid {colors.neutralLight.200}',
        _dark: '1px solid {colors.neutralLight.200}',
      },
    },
  },
  // composite value
  accent: { value: { width: '1px', color: 'red', style: 'solid' } },
  active: {
    value: { width: '1', color: '{colors.borderActive}', style: 'solid' },
  },
  optin: {
    value: {
      _cafeynTheme: {
        base: '1px solid {colors.systemNeutral}',
        _dark: '1px solid {colors.alabasterDark.500}',
      },
      _blendleTheme: {
        base: '1px solid {colors.systemNeutral}',
        _dark: '1px solid {colors.alabasterDark.500}',
      },
      _epresseTheme: {
        base: '1px solid {colors.systemNeutral}',
        _dark: '1px solid {colors.alabasterDark.500}',
      },
    },
  },
  primary: {
    value: {
      _cafeynTheme: {
        base: '1px solid {colors.starkWhiteLight.100}',
        _dark: '1px solid {colors.starkWhiteDark.100}',
      },
      _blendleTheme: {
        base: '1px solid {colors.neutralDark.100}',
        _dark: '1px solid {colors.neutralDark.100}',
      },
      _epresseTheme: {
        base: '1px solid {colors.neutralDark.100}',
        _dark: '1px solid {colors.neutralDark.100}',
      },
    },
  },
  primaryInvert: {
    value: {
      _cafeynTheme: '{colors.borderPrimaryInvert}',
      _blendleTheme: '{colors.borderPrimaryInvert}',
      _epresseTheme: '{colors.borderPrimaryInvert}',
      style: 'solid',
      width: borderWidths.thin.value,
    },
  },
  secondary: {
    value: {
      color: '{colors.borderSecondary}',
      style: 'solid',
      width: borderWidths.thin.value,
    },
  },
  horizontalSeparator: {
    value: {
      color: '{colors.borderSecondary}',
      style: 'solid',
      width: borderWidths.thin.value,
    },
  },
};
