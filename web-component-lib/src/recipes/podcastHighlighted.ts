export const podcastHighlighted = {
  display: 'grid',
  gap: '4xl !important',
  marginBottom: '4xl !important',
  gridTemplateColumns: {
    base: '1fr',
    md: 'minmax(130px, 240px) minmax(150px, 1fr)',
  },
  gridTemplateRows: 'minmax(130px, 240px)',
  borderRadius: 'md',
  border: 'secondary',
  background: 'surfacePrimary',
  _hover: {
    BackgroundColor: '#f0f0f0',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    transform: 'translateY(-5px)',
    transition:
      'background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
    _portrait: {
      transform: 'none',
    },
  },
  '& .podcast-img img': {
    borderTopLeftRadius: 'md',
    borderTopRightRadius: { base: 'md', md: '' },
    borderBottomLeftRadius: { base: '', md: 'md' },
  },
  '& .podcastHighlighted_content_wrap': {
    padding: { base: '{spacing.xl} {spacing.xl}', md: '{spacing.xl} 0' },
    display: 'grid',
    gap: 'xl',
    '& .podcastHighlighted_content_wrap_infos': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100% !important',
      '& .podcast_publication_title': {
        textStyle: 'title',
        color: 'textPrimary',
      },
      '& .podcast_preview': {
        textStyle: 'bodyBig',
        color: 'textPrimary',
        maxWidth: '33rem',
        lineClamp: '2',
      },
    },
  },
};
