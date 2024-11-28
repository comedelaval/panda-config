import { css } from '@styled/css';

export const coverCSS = css({
  '& .cover-visual, .threedot-cover-visual img': {
    border: 'secondary !important',
    borderRadius: 's !important',
  },
  '& .cover-progression': {
    bg: 'iconEnable !important',
    '& div': {
      bg: 'surfaceBrand !important',
    },
  },
  '& .cover-bottom-information-title': {
    textStyle: 'bodyBaseSemiBold !important',
    color: 'textPrimary !important',
    width: '120px !important',
  },
  '& .cover-bottom-information-date, .cover-bottom-information p': {
    textStyle: 'bodyInfoRegular !important',
    color: 'textPrimary !important',
  },
});
