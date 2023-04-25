import { keyframes } from '@emotion/react';
import { Theme } from 'theme-ui';

const fadeIn = keyframes({ from: { top: '-10px' }, to: { top: 0 } });

export const theme: Theme = {
  cards: {
    pokecard: {
      position: 'relative',
      '&:hover': {
        animation: `${fadeIn} 1s backwards`,
      },
    },
  },
};
