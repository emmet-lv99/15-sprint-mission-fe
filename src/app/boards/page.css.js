import {
  colorTokens,
  MOBILE_MAX_WIDTH,
  TABLET_MAX_WIDTH,
  typographyTokens,
} from '@/styles/tokens.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '24px',
  '@media': {
    [`screen and (max-width: ${MOBILE_MAX_WIDTH})`]: {
      padding: '16px',
    },
  },
});

export const content = style({
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
  '@media': {
    [`screen and (max-width: ${TABLET_MAX_WIDTH})`]: {
      gap: '24px',
    },
  },
});

export const sectionTitle = style({
  fontSize: typographyTokens.fontSize.xl,
  fontWeight: typographyTokens.fontWeight.bold,
  color: colorTokens.secondary.gray900,
  '@media': {
    [`screen and (max-width: ${MOBILE_MAX_WIDTH})`]: {
      fontSize: typographyTokens.fontSize['2lg'],
    },
  },
});

export const bestArticleListContainer = style({
  marginTop: '24px',
  '@media': {
    [`screen and (max-width: ${MOBILE_MAX_WIDTH})`]: {
      marginTop: '16px',
    },
  },
});
