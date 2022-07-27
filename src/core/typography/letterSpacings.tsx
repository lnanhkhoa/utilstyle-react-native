import { StyleSheet } from 'react-native';
import { remToPx } from '../../configs/text';

// use rem instead of em, default fontsize = 16px

export const letterSpacings = StyleSheet.create({
  'tracking-tighter': { letterSpacing: remToPx(-0.05) },
  'tracking-tight': { letterSpacing: remToPx(-0.025) },
  'tracking-normal': { letterSpacing: 0 },
  'tracking-wide': { letterSpacing: remToPx(0.025) },
  'tracking-wider': { letterSpacing: remToPx(0.05) },
  'tracking-widest': { letterSpacing: remToPx(0.1) },
});
