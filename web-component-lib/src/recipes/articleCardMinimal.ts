export const articleCardMinimal = {
  articleCardMinimal: {
    display: 'grid',
    gap: '1rem',
    gridTemplateColumns: {
      base: '193px 1fr',
      md: '657px 1fr',
      lg: '578px 1fr',
    },
    gridTemplateRows: { base: '154px', lg: '140px' },
    maxWidth: { base: '343px', lg: '752px' },
    padding: '0px',
    paddingBottom: '16px',
    borderBottom: 'horizontalSeparator',
    '& * > img': {
      height: '100% !important',
    },
    '& * > .articleCardMinimalLogo': {
      height: { base: '32px' },
      marginBottom: '10px',
    },
    '& .articleCardMinimalIllustration': {
      width: { base: '134px', md: '158px' },
      height: { base: '120px', md: '140px' },
      overflow: 'hidden',
      borderRadius: '4px',
      '& img': {
        width: '100% !important',
        height: '100% !important',
        objectFit: 'cover',
      },
    },
    '& * > .articleCardMinimalSaved': {
      position: { base: 'absolute', md: 'relative', lg: 'relative' },
      right: { base: '14px', lg: '0' },
    },
  },
};
