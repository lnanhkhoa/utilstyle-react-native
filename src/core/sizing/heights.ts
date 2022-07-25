import {
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
  Dimensions,
} from 'react-native';
import { remToPx } from '../../configs/text';

type NameStyled = ViewStyle | ImageStyle | TextStyle;

const h = StyleSheet.create({
  'h-0': { height: 0 },
  'h-px': { height: 1 },
  'h-0.5': { height: remToPx(0.125) },
  'h-1': { height: remToPx(0.25) },
  'h-1.5': { height: remToPx(0.375) },
  'h-2': { height: remToPx(0.5) },
  'h-2.5': { height: remToPx(0.625) },
  'h-3': { height: remToPx(0.75) },
  'h-3.5': { height: remToPx(0.875) },
  'h-4': { height: remToPx(1) },
  'h-5': { height: remToPx(1.25) },
  'h-6': { height: remToPx(1.5) },
  'h-7': { height: remToPx(1.75) },
  'h-8': { height: remToPx(2) },
  'h-9': { height: remToPx(2.25) },
  'h-10': { height: remToPx(2.5) },
  'h-11': { height: remToPx(2.75) },
  'h-12': { height: remToPx(3) },
  'h-14': { height: remToPx(3.5) },
  'h-16': { height: remToPx(4) },
  'h-auto': { height: 'auto' },
  'h-1/2': { height: '50%' },
  'h-1/3': { height: '33.333333%' },
  'h-2/3': { height: '66.666667%' },
  'h-1/4': { height: '25%' },
  'h-2/4': { height: '50%' },
  'h-3/4': { height: '75%' },
  'h-1/5': { height: '20%' },
  'h-2/5': { height: '40%' },
  'h-3/5': { height: '60%' },
  'h-4/5': { height: '80%' },
  'h-1/6': { height: '16.666667%' },
  'h-2/6': { height: '33.333333%' },
  'h-3/6': { height: '50%' },
  'h-4/6': { height: '66.666667%' },
  'h-5/6': { height: '83.333333%' },
  'h-1/12': { height: '8.333333%' },
  'h-2/12': { height: '16.666667%' },
  'h-3/12': { height: '25%' },
  'h-4/12': { height: '33.333333%' },
  'h-5/12': { height: '41.666667%' },
  'h-6/12': { height: '50%' },
  'h-7/12': { height: '58.333333%' },
  'h-8/12': { height: '66.666667%' },
  'h-9/12': { height: '75%' },
  'h-10/12': { height: '83.333333%' },
  'h-11/12': { height: '91.666667%' },
  'h-full': { height: '100%' },
  'h-screen': { height: Dimensions.get('screen').height },
});
const heightAttr = {
  h: (value: number | string): NameStyled => ({ height: value }),
};

export const heights = {
  ...h,
  ...heightAttr,
};
