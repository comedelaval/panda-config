import { defineRecipe } from '@pandacss/dev';
import { defaultGrid } from '../commonCss/default';
import { articleCardMinimal } from './articleCardMinimal';
import { articles } from './articles';
import { issues } from './issues';
import { podcastHighlighted } from './podcastHighlighted';

export const gridSlider = defineRecipe({
  className: 'grid',
  description: 'Grid with auto hide row and show on click',
  base: {
    defaultGrid,
    margin: '0px 0px 2rem 0px !important',
    '&[data-expended=false] li[data-tohide=true]': {
      display: 'none',
      opacity: '0',
    },
    '&[data-expended=true] li[data-tohide=true]': {
      display: 'block',
      animationName: 'fadeIn',
      animationDuration: '1.5s',
    },
    ' & li': {
      transition:
        'background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
    },
    ' & li:hover, & .cover-visual:hover': {
      BackgroundColor: '#f0f0f0',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
      transform: 'translateY(-5px)',
      _portrait: {
        transform: 'none',
        boxShadow: '0 0px 0px rgba(0, 0, 0, 0.2)',
      },
    },
    '& img': {
      maxWidth: '100% !important',
    },
    padding: '0px 0px !important',
    overflowY: { base: 'hidden', lg: 'visible' },
  },
  variants: {
    visual: {
      podcastHighlighted,
      articleCardMinimal,
      issues,
      articles,
      category: {
        gridTemplateColumns: 'repeat(auto-fit, 188px)',
        gridTemplateRows: '140px', //explicite row
        gridAutoRows: '0', // implicit row
        '&[data-expended=true]': {
          gridAutoRows: 'auto',
        },
      },
      topic: {
        gridTemplateColumns: 'repeat(auto-fit, 176px)',
        gridTemplateRows: '120px', //explicite row
        gridAutoRows: '0', // implicit row
        '& li': {
          width: '176px',
        },
        _portrait: {
          gridAutoFlow: 'column',
          overflowX: 'auto',
        },
        '&[data-expended=true]': {
          gridAutoRows: '120px',
        },
      },
      collection: {
        gridTemplateColumns: 'repeat(auto-fit, 240px)',
        gridTemplateRows: '279px',
        gridAutoRows: '0',
        '&[data-expended=true]': {
          gridAutoRows: 'auto',
        },
      },
      leaderboards: {
        gridTemplateColumns: 'repeat(auto-fill, 1fr)',
        ' & li:hover': {
          boxShadow: '0 0px 0px rgba(0, 0, 0, 0.2)',
          transform: 'translateY(0px)',
        },
      },
      leaderboardsCupMedium: {
        gridTemplateColumns: 'repeat(2, 495px)',
        ' & li:hover': {
          boxShadow: '0 0px 0px rgba(0, 0, 0, 0.2)',
          transform: 'translateY(0px)',
        },
      },
      leaderboardsCupMinimal: {
        gridTemplateColumns: '1fr',
        ' & li:hover': {
          boxShadow: '0 0px 0px rgba(0, 0, 0, 0.2)',
          transform: 'translateY(0px)',
        },
      },
    },
  },
});
