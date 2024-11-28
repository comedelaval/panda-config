import { defineRecipe } from '@pandacss/dev';

export const liSlider = defineRecipe({
  className: 'li-slider',
  description: 'The styles for the li element',
  base: {
    borderRadius: '8',
  },
  variants: {
    visual: {
      leaderboards: {
        width: '280px',
        height: '280px',
      },
      leaderBoardsLeague: {
        width: '240px',
        height: '240px',
      },
      leaderboardsCupMinimal: {
        width: '320px',
      },
      leaderboardsCupMedium: {},
      exhibition: {
        width: '217px',
        height: '279px',
      },
      collectionSelection: {
        width: '217px',
        height: '279px',
      },
      categorySelection: {
        height: '120px',
        width: '207px',
      },
      catalog: {},
      articlesSelection: {
        height: '240px',
        width: '240px',
      },
      articleMedium: {
        height: '240px',
        width: '240px',
      },
      recommandedArticles: {
        height: '240px',
        width: '240px',
      },
      cardCollectionArticle: {
        height: '279px',
        width: '217px',
      },
      favoriteIssue: {
        height: '257px',
        width: '174px',
      },
      issueList: {
        height: '257px',
        width: '174px',
      },
      issuesSelection: {
        height: '257px',
        width: '174px',
      },
      favoritePublications: {
        height: '257px',
        width: '174px',
      },
      currentReadings: {
        height: '257px',
        width: '174px',
      },
      latestIssues: {
        height: '257px',
        width: '174px',
      },
    },
  },
});
