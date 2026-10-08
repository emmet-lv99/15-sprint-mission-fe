// src/styles/tokens.css.js
import { createGlobalTheme } from '@vanilla-extract/css';

/**
 * 1. Color Tokens (:root CSS Custom Properties)
 */
export const colorTokens = createGlobalTheme(':root', {
  // Primary color (Blue Scale)
  primary: {
    100: '#3692FF',
    200: '#1967D6',
    300: '#1251AA',
  },

  // Error color (Red Scale)
  error: {
    red: '#F74747',
  },

  // Secondary color (Gray Scale)
  secondary: {
    gray900: '#111827',
    gray800: '#1F2937',
    gray700: '#374151',
    gray600: '#4B5563',
    gray500: '#6B7280',
    gray400: '#9CA3AF',
    gray200: '#E5E7EB',
    gray100: '#F3F4F6',
    gray50: '#F9FAFB',
  },
});

/**
 * 2. Typography Tokens (:root CSS Custom Properties)
 */
export const typographyTokens = createGlobalTheme(':root', {
  // Font Size (1rem = 16px)
  fontSize: {
    '3xl': '2rem', // 32px
    '2xl': '1.5rem', // 24px
    xl: '1.25rem', // 20px
    '2lg': '1.125rem', // 18px
    lg: '1rem', // 16px
    md: '0.875rem', // 14px
    sm: '0.8125rem', // 13px
    xs: '0.75rem', // 12px
  },

  // Line Height (1rem = 16px)
  lineHeight: {
    '3xl': '2.625rem', // 42px
    '2xl': '2rem', // 32px
    xl: '2rem', // 32px
    '2lg': '1.625rem', // 26px
    lg: '1.625rem', // 26px
    md: '1.5rem', // 24px
    sm: '1.375rem', // 22px
    xs: '1.25rem', // 20px
    xsShort: '1.125rem', // 18px
  },

  // Font Weight
  fontWeight: {
    bold: '700',
    semibold: '600',
    medium: '500',
    regular: '400',
  },
});

export const TABLET_MAX_WIDTH = '744px';
export const MOBILE_MAX_WIDTH = '375px';
