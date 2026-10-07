// src/styles/typography.css.js
import { style } from '@vanilla-extract/css';
import { typographyTokens } from './tokens.css';

/**
 * typography 스타일 생성을 위한 헬퍼 함수
 */
const createTypography = (sizeKey, lineKey = sizeKey) => {
  return {
    bold: style({
      fontSize: typographyTokens.fontSize[sizeKey],
      lineHeight: typographyTokens.lineHeight[lineKey],
      fontWeight: typographyTokens.fontWeight.bold,
    }),
    semibold: style({
      fontSize: typographyTokens.fontSize[sizeKey],
      lineHeight: typographyTokens.lineHeight[lineKey],
      fontWeight: typographyTokens.fontWeight.semibold,
    }),
    medium: style({
      fontSize: typographyTokens.fontSize[sizeKey],
      lineHeight: typographyTokens.lineHeight[lineKey],
      fontWeight: typographyTokens.fontWeight.medium,
    }),
    regular: style({
      fontSize: typographyTokens.fontSize[sizeKey],
      lineHeight: typographyTokens.lineHeight[lineKey],
      fontWeight: typographyTokens.fontWeight.regular,
    }),
  };
};

// 헬퍼 함수를 통한 깔끔한 타이포그래피 세트 생성
export const text3xl = createTypography('3xl');
export const text2xl = createTypography('2xl');
export const textXl = createTypography('xl');
export const text2lg = createTypography('2lg');
export const textLg = createTypography('lg');
export const textMd = createTypography('md');
export const textSm = createTypography('sm');

// Line Height 예외 스펙 지원 (12px / 18px vs 12px / 20px)
export const textXs = createTypography('xs'); // 12px / 20px
export const textXsShort = createTypography('xs', 'xsShort'); // 12px / 18px
