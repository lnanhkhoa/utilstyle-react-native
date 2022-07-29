import { StyleSheet } from 'react-native';
import { remToPx } from '../../configs/text';

export const fontSizes = StyleSheet.create({
  'text-xs': {
    fontSize: remToPx(0.75) /* 12px */,
    lineHeight: remToPx(1) /* 16px */,
  },
  'text-sm': {
    fontSize: remToPx(0.875) /* 14px */,
    lineHeight: remToPx(1.25) /* 20px */,
  },
  'text-base': {
    fontSize: remToPx(1) /* 16px */,
    lineHeight: remToPx(1.5) /* 24px */,
  },
  'text-lg': {
    fontSize: remToPx(1.125) /* 18px */,
    lineHeight: remToPx(1.75) /* 28px */,
  },
  'text-xl': {
    fontSize: remToPx(1.25) /* 20px */,
    lineHeight: remToPx(1.75) /* 28px */,
  },
  'text-2xl': {
    fontSize: remToPx(1.5) /* 24px */,
    lineHeight: remToPx(2) /* 32px */,
  },
  'text-3xl': {
    fontSize: remToPx(1.875) /* 30px */,
    lineHeight: remToPx(2.25) /* 36px */,
  },
  'text-4xl': {
    fontSize: remToPx(2.25) /* 36px */,
    lineHeight: remToPx(2.5) /* 40px */,
  },
  'text-5xl': {
    fontSize: remToPx(3) /* 48px */,
    lineHeight: remToPx(3.25) /* 52px */,
  },
});
