import type { SkewXTransform, SkewYTransform } from 'react-native';

const skewX = (x: number): SkewXTransform => ({ skewX: x + 'deg' });
const skewY = (x: number): SkewYTransform => ({ skewY: x + 'deg' });

export const skews = {
  'skew-x-0': skewX(0),
  'skew-y-0': skewY(0),
  'skew-x-1': skewX(1),
  'skew-y-1': skewY(1),
  'skew-x-2': skewX(2),
  'skew-y-2': skewY(2),
  'skew-x-3': skewX(3),
  'skew-y-3': skewY(3),
  'skew-x-6': skewX(6),
  'skew-y-6': skewY(6),
  'skew-x-12': skewX(12),
  'skew-y-12': skewY(12),
};
