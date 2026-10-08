import { colorTokens, MOBILE_MAX_WIDTH } from '@/styles/tokens.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  margin: '0 24px',
  '@media': {
    [`screen and (max-width: ${MOBILE_MAX_WIDTH})`]: { margin: '0 16px' },
  },
});

export const wrapper = style({
  maxWidth: '1520px',
  height: '70px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const logoWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '9px',
  cursor: 'pointer',
});

export const logo = style({
  '@media': {
    [`screen and (max-width: ${MOBILE_MAX_WIDTH})`]: {
      display: 'none',
    },
  },
});

export const loginButton = style({
  width: '128px',
  height: '48px',
  color: colorTokens.secondary.gray100,
  backgroundColor: colorTokens.primary[100],
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
});
