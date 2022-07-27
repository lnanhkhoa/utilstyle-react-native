import { StyleSheet } from 'react-native';
import { remToPx } from '../../configs/text';

// use rem instead of em, default fontsize = 16px

export const lineHeights = StyleSheet.create({
  'leading-3': { lineHeight: remToPx(0.75) /* 12px */ },
  'leading-4': { lineHeight: remToPx(1) /* 16px */ },
  'leading-5': { lineHeight: remToPx(1.25) /* 20px */ },
  'leading-6': { lineHeight: remToPx(1.5) /* 24px */ },
  'leading-7': { lineHeight: remToPx(1.75) /* 28px */ },
  'leading-8': { lineHeight: remToPx(2) /* 32px */ },
  'leading-9': { lineHeight: remToPx(2.25) /* 36px */ },
  'leading-10': { lineHeight: remToPx(2.5) /* 40px */ },
});
