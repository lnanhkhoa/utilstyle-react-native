import { StyleSheet } from 'react-native';
import { positions } from './positions';

const aspectRatios = StyleSheet.create({
  'aspect-auto': {
    aspectRatio: undefined,
  },
  'aspect-square': {
    aspectRatio: 1,
  },
  'aspect-video': {
    aspectRatio: 16 / 9,
  },
});

// const containers = StyleSheet.create({});
// const columns = StyleSheet.create({});
// const breakAfters = StyleSheet.create({});
// const breakBefores = StyleSheet.create({});
// const boxDecorationBreaks = StyleSheet.create({});
// const boxSizings = StyleSheet.create({});
const displays = StyleSheet.create({
  flex: {
    display: 'flex',
  },
  hidden: {
    display: 'none',
  },
});
// const floats = StyleSheet.create({});
// const clears = StyleSheet.create({});
// const isolations = StyleSheet.create({});
// const objectFits = StyleSheet.create({});
// const objectPosition = StyleSheet.create({});
const overflows = StyleSheet.create({
  'overflow-auto': {
    overflow: undefined,
  },
  'overflow-hidden': {
    overflow: 'hidden',
  },
  'overflow-scroll': {
    overflow: 'scroll',
  },
  'overflow-visible': {
    overflow: 'visible',
  },
});
// const overscrolls = StyleSheet.create({});
const visibilities = StyleSheet.create({
  'backface-visible': {
    backfaceVisibility: 'visible',
  },
  'backface-hidden': {
    backfaceVisibility: 'hidden',
  },
});
const zIndexes = StyleSheet.create({
  'z-0': { zIndex: 0 },
  'z-10': { zIndex: 10 },
  'z-20': { zIndex: 20 },
  'z-30': { zIndex: 30 },
  'z-40': { zIndex: 40 },
  'z-50': { zIndex: 50 },
  'z-auto': { zIndex: undefined },
});

export const layout = {
  ...aspectRatios,
  ...displays,
  ...overflows,
  ...positions,
  ...visibilities,
  ...zIndexes,
};
