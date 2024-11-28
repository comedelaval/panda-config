import { defineKeyframes } from '@pandacss/dev';

export const keyframes = defineKeyframes({
  slideToRight: {
    '0%': { transform: 'translateX(-100px)', opacity: '0' },
    '100%': { transform: 'translateX(0px)', opacity: '1' },
  },
  slideToLeft: {
    '0%': { transform: 'translateX(0px)', opacity: '1' },
    '100%': { transform: 'translateX(-100px)', opacity: '0' },
  },
  bottomToTop: {
    '0%': { transform: 'translateY(100px)', opacity: '0' },
    '100%': { transform: 'translateY(0px)', opacity: '1' },
  },
  TopToBottom: {
    '0%': { transform: 'translateY(0px)', opacity: '1' },
    '100%': { transform: 'translateY(100px)', opacity: '0' },
  },
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  swing: {
    '0%': { transform: 'rotate(-15deg)' },
    '50%': { transform: 'rotate(15deg)' },
    '100%': { transform: 'rotate(-15deg)' },
  },
  zoomInOut: {
    '0%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.2)' },
    '100%': { transform: 'scale(1)' },
  },
});
