import {
  colorTokens,
  MOBILE_MAX_WIDTH,
  TABLET_MAX_WIDTH,
  typographyTokens,
} from '@/styles/tokens.css';
import { style } from '@vanilla-extract/css';

export const topBannerContainer = style({
  display: 'flex',
  alignItems: 'flex-end',
  minHeight: '540px',
  backgroundColor: '#CFE5FF',
  lineHeight: '0px',
});

export const topBannerContent = style({
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',

  '@media': {
    [`screen and (max-width: ${TABLET_MAX_WIDTH})`]: {
      marginTop: '84px',
      textAlign: 'center',
      flexDirection: 'column',
      gap: '211px',
    },
    [`screen and (max-width: ${MOBILE_MAX_WIDTH})`]: {
      marginTop: '48px',
      gap: '132px',
    },
  },
});

export const topBannerImg = style({
  maxWidth: '100%',
  height: 'auto',
});

export const topBannerDesc = style({
  fontSize: '40px',
  fontWeight: typographyTokens.fontWeight.bold,
  color: colorTokens.secondary.gray700,
  lineHeight: '1.4',
  '@media': {
    [`screen and (max-width: ${TABLET_MAX_WIDTH})`]: {
      fontSize: typographyTokens.fontSize['3xl'],
    },
  },
});

export const topBannerBtn = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '32px',
  minWidth: '357px',
  minHeight: '56px',
  border: 'none',
  borderRadius: '40px',
  backgroundColor: colorTokens.primary[100],
  fontSize: typographyTokens.fontSize.xl,
  fontWeight: typographyTokens.fontWeight.semibold,
  color: colorTokens.secondary.gray50,
  textDecoration: 'none',
  '@media': {
    [`screen and (max-width: ${MOBILE_MAX_WIDTH})`]: {
      minWidth: '240px',
    },
  },
});

export const featureContainer = style({
  padding: '138px 0',
  '@media': {
    [`screen and (max-width: ${TABLET_MAX_WIDTH})`]: {
      padding: '24px',
    },
  },
});

export const featureContent = style({
  maxWidth: '988px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  gap: '64px',
  backgroundColor: '#FCFCFC',
  '@media': {
    [`screen and (max-width: ${TABLET_MAX_WIDTH})`]: {
      backgroundColor: 'transparent',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '24px',
    },
  },
});

export const featureContentImg = style({
  '@media': {
    [`screen and (max-width: ${TABLET_MAX_WIDTH})`]: {
      width: '100%',
      height: 'auto',
    },
  },
});

export const featureDescLabel = style({
  fontSize: typographyTokens.fontSize['2lg'],
  fontWeight: typographyTokens.fontWeight.bold,
  color: colorTokens.primary[100],
  '@media': {
    [`screen and (max-width: ${MOBILE_MAX_WIDTH})`]: {
      fontSize: typographyTokens.fontSize.lg,
    },
  },
});

export const featureDescTitle = style({
  marginTop: '12px',
  fontSize: '40px',
  fontWeight: typographyTokens.fontWeight.bold,
  lineHeight: '1.444444',
  color: colorTokens.secondary.gray700,
  '@media': {
    [`screen and (max-width: ${TABLET_MAX_WIDTH})`]: {
      fontSize: typographyTokens.fontSize['3xl'],
    },
    [`screen and (max-width: ${MOBILE_MAX_WIDTH})`]: {
      fontSize: typographyTokens.fontSize['2xl'],
    },
  },
});

export const featureDesc = style({
  marginTop: '24px',
  fontSize: typographyTokens.fontSize['2xl'],
  lineHeight: '1.333333',
  fontWeight: typographyTokens.fontWeight.medium,
  color: colorTokens.secondary.gray700,
  '@media': {
    [`screen and (max-width: ${TABLET_MAX_WIDTH})`]: {
      fontSize: typographyTokens.fontSize['2lg'],
    },
    [`screen and (max-width: ${MOBILE_MAX_WIDTH})`]: {
      fontSize: typographyTokens.fontSize.lg,
    },
  },
});

export const featureReverseImg = style({
  order: 1,
  '@media': {
    [`screen and (max-width: ${TABLET_MAX_WIDTH})`]: {
      order: 0,
    },
  },
});

export const featureReverseDescContainer = style({
  textAlign: 'right',
});

export const featureReverse = style({
  justifyContent: 'flex-end',
  '@media': {
    [`screen and (max-width: ${TABLET_MAX_WIDTH})`]: {
      alignItems: 'flex-end',
    },
  },
});

export const bottomBannerContainer = style({
  display: 'flex',
  alignItems: 'flex-end',
  minHeight: '540px',
  backgroundColor: '#CFE5FF',
  lineHeight: '0',
});

export const bottomBannerContent = style({
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  '@media': {
    [`screen and (max-width: ${TABLET_MAX_WIDTH})`]: {
      flexDirection: 'column',
      gap: '217px',
    },
    [`screen and (max-width: ${MOBILE_MAX_WIDTH})`]: {
      gap: '130px',
    },
  },
});

export const bottomBannerDesc = style({
  fontSize: '40px',
  fontWeight: typographyTokens.fontWeight.bold,
  color: colorTokens.secondary.gray700,
  lineHeight: '1.4',
  '@media': {
    [`screen and (max-width: ${TABLET_MAX_WIDTH})`]: {
      marginTop: '200px',
      textAlign: 'center',
    },
    [`screen and (max-width: ${MOBILE_MAX_WIDTH})`]: {
      fontSize: typographyTokens.fontSize['3xl'],
    },
  },
});

export const bottomBannerImg = style({
  width: '100%',
  height: 'auto',
});
