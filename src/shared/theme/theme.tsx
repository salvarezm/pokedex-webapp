import type { Theme } from 'theme-ui';
import { keyframes } from '@emotion/react';
import { lighten } from '@theme-ui/color';

const fadeIn = keyframes({ from: { top: '-10px' }, to: { top: 0 } });

export const theme: Theme = {
  styles: {
    a: {
      cursor: 'pointer',
    },
  },
  fonts: {
    body: 'Nunito,system-ui, sans-serif',
    heading: 'Nunito,"Avenir Next", sans-serif',
    monospace: 'Nunito,Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 18, 20, 24, 28, 34, 49, 63, 77, 84],
  sizes: [8, 16, 32, 40, 48],
  zIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  fontWeights: {
    heading: 500,
    display: 400,
    body: 400,
  },
  lineHeights: {
    heading: 1.5,
    display: 1.5,
    body: 1.5,
  },
  colors: {
    text: '#000',
    white: '#fff',
    primary: '#30a7d7',
    fire: '#fd7d24',
    blue: '#0072b0',
    red: '#dd2d51',
    gray: '#919191',
  },
  buttons: {
    fire: {
      backgroundColor: 'fire',
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted',
    },
    pokecard: {
      position: 'relative',
      padding: '8px',
      borderRadius: '8px',
      cursor: 'pointer',
      '&:hover': {
        animation: `${fadeIn} 1s backwards`,
      },
    },
    pokeImg: {
      bg: lighten('gray', 0.4),
      borderRadius: 4,
    },
    standarCard: {
      borderRadius: 4,
      padding: '16px',
    },
    pokeBasePoints: {
      bg: lighten('gray', 0.1),
      borderRadius: 4,
      padding: '16px',
    },
  },
  badges: {
    primary: {
      color: 'white',
      bg: 'primary',
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px',
    },
    fire: {
      background: 'linear-gradient(180deg, #fd7d24 50%, #fd7d24 50%)',
    },
    grass: { background: 'linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%)' },
    poison: { background: 'linear-gradient(180deg, #b97fc9 50%, #b97fc9 50%)' },
    flying: { background: 'linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)' },
    water: { background: 'linear-gradient(180deg, #4592c4 50%, #4592c4 50%)' },
    bug: { background: 'linear-gradient(180deg, #729f3f 50%, #729f3f 50%)' },
    normal: { background: 'linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%)' },
  },
  text: {
    default: {
      color: 'text',
      fontSize: 3,
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: 6,
    },
    subheading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: [3, 5],
    },
    labelHeading: {
      fontFamily: 'heading',
      fontWeight: 'body',
      lineHeight: 'heading',
      fontSize: 3,
    },
  },
  links: {
    nav: {
      px: 2,
      py: 1,
      letterSpacing: '0.2em',
      height: ['60px', '70px'],
      textAlign: 'center',
      color: 'black',
      fontSize: 1,
      '&.home': {
        borderBottom: '3px solid gray',
      },
      '&.home:hover, &.home.selected': {
        backgroundColor: 'gray',
        color: 'white',
      },
      '&.stack': {
        borderBottom: '3px solid #fd7d24',
      },
      '&.stack:hover, &.stack.selected': {
        backgroundColor: '#fd7d24',
        color: 'white',
      },
      '&.about': {
        borderBottom: '3px solid #4592c4',
      },
      '&.about:hover, &.about.selected': {
        backgroundColor: '#4592c4',
        color: 'white',
      },
    },
  },
};
