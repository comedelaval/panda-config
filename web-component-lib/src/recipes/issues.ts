export const issues = {
  issues: {
    margin: '0',
    width: { base: 'calc(96vw - 0%)', lg: '100%' },
    scrollbarWidth: 'none',
    gridAutoFlow: { base: 'column', lg: 'unset' },
    overflowX: { base: 'auto', lg: 'unset' },
    _portrait: {
      gridAutoFlow: 'column',
      overflowX: 'auto',
    },
    gridTemplateColumns: 'repeat(auto-fit, 154px)',
    gridTemplateRows: 'auto',
    gridAutoRows: '0',
    gap: '1rem',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '&#productPage_old_content': {
      gridAutoFlow: 'unset',
      width: '101%',
      gridTemplateColumns: {
        base: 'repeat(2, 154px)',
        md: 'repeat(auto-fill, 154px)',
        lg: 'repeat(auto-fill, 154px)',
      },
    },
    '&#library_issues_grid': {
      paddingTop: 'xl',
      gridAutoFlow: 'unset',
      width: '101%',
      overflowX: 'hidden',
      gridTemplateColumns: 'repeat(auto-fill, 154px)',
      '& .contain': {
        objectFit: 'unset !important',
      },
    },
    '&[data-expended=true]': {
      gridAutoRows: 'auto',
    },
    ' & li:hover': {
      boxShadow: '0 0px 0px rgba(0, 0, 0, 0.2)',
      transform: 'none',
    },
  },
};
