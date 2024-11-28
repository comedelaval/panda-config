const articleCardFullContent = {
  borderRadius: 'sm',
  position: 'absolute',
  width: '100%',
  padding: '2xs',
  background:
    'linear-gradient(180deg, rgba(21, 32, 43, 0.16) 21.15%, rgba(21, 32, 43, 0.88) 100%)',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  '& .articleCardFull_content_action': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  '& * > .articleCardFull_title p': {
    textStyle: 'title',
    color: 'textWhite',
  },
  '& * > .articleCardFull_infos': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& .text_infos': {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      textStyle: 'captionSemiBold',
      color: 'textTertiary',
    },
  },
};

export const articles = {
  articles: {
    width: { base: 'calc(96vw - 0%)', lg: 'auto' },
    scrollbarWidth: 'none',
    gridAutoFlow: { base: 'column', lg: 'unset' },
    overflowX: { base: 'auto', lg: 'visible' },
    _portrait: {
      gridAutoFlow: 'column',
      overflowX: 'auto',
    },
    gridTemplateColumns: 'repeat(auto-fit, 240px)',
    gridTemplateRows: '240px',
    gridAutoRows: '0',
    gap: '1rem',
    '& li': {
      width: '240px',
    },
    '&[data-expended=true]': {
      gridAutoRows: '240px',
    },
    '& * > .articleCardFull_content': {
      articleCardFullContent,
    },
  },
};
