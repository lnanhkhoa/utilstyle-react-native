import type { SkewXTransform, SkewYTransform } from 'react-native';

const skewX = (x: number): SkewXTransform => ({ skewX: x + 'deg' });
const skewY = (x: number): SkewYTransform => ({ skewY: x + 'deg' });

export const skews = {
  'skew-x-0': { tranform: [skewX(0)] },
  'skew-y-0': { tranform: [skewY(0)] },
  'skew-x-1': { tranform: [skewX(1)] },
  'skew-y-1': { tranform: [skewY(1)] },
  'skew-x-2': { tranform: [skewX(2)] },
  'skew-y-2': { tranform: [skewY(2)] },
  'skew-x-3': { tranform: [skewX(3)] },
  'skew-y-3': { tranform: [skewY(3)] },
  'skew-x-6': { tranform: [skewX(6)] },
  'skew-y-6': { tranform: [skewY(6)] },
  'skew-x-12': { tranform: [skewX(12)] },
  'skew-y-12': { tranform: [skewY(12)] },
};
