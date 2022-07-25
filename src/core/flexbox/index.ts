import { StyleSheet } from 'react-native';
import { basises } from './basis';

const directions = StyleSheet.create({
  'flex-row': {
    flexDirection: 'row',
  },
  'flex-row-reverse': {
    flexDirection: 'row-reverse',
  },
  'flex-col': {
    flexDirection: 'column',
  },
  'flex-col-reverse': {
    flexDirection: 'column-reverse',
  },
});

const wraps = StyleSheet.create({
  'flex-wrap': { flexWrap: 'wrap' },
  'flex-wrap-reverse': { flexWrap: 'wrap-reverse' },
  'flex-nowrap': { flexWrap: 'nowrap' },
});

const flexes = StyleSheet.create({
  'flex-1': { flexGrow: 1, flexShrink: 1, flexBasis: '0%' },
  'flex-2': { flexGrow: 2, flexShrink: 1, flexBasis: '0%' },
  'flex-3': { flexGrow: 3, flexShrink: 1, flexBasis: '0%' },
  'flex-auto': { flexGrow: 1, flexShrink: 1, flexBasis: 'auto' },
  'flex-initial': { flexGrow: 0, flexShrink: 1, flexBasis: 'auto' },
});
const grows = StyleSheet.create({
  'grow': { flexGrow: 1 },
  'grow-0': { flexGrow: 0 },
});
const shrinks = StyleSheet.create({
  'shrink': { flexShrink: 1 },
  'shrink-0': { flexShrink: 0 },
});
const justifyContents = StyleSheet.create({
  'justify-start': { justifyContent: 'flex-start' },
  'justify-end': { justifyContent: 'flex-end' },
  'justify-center': { justifyContent: 'center' },
  'justify-between': { justifyContent: 'space-between' },
  'justify-around': { justifyContent: 'space-around' },
  'justify-evenly': { justifyContent: 'space-evenly' },
});
const aligns = StyleSheet.create({
  'content-center': { alignContent: 'center' },
  'content-start': { alignContent: 'flex-start' },
  'content-end': { alignContent: 'flex-end' },
  'content-between': { alignContent: 'space-between' },
  'content-around': { alignContent: 'space-around' },
  'items-start': { alignItems: 'flex-start' },
  'items-end': { alignItems: 'flex-end' },
  'items-center': { alignItems: 'center' },
  'items-baseline': { alignItems: 'baseline' },
  'items-stretch': { alignItems: 'stretch' },
  'self-auto': { alignSelf: 'auto' },
  'self-start': { alignSelf: 'flex-start' },
  'self-end': { alignSelf: 'flex-end' },
  'self-center': { alignSelf: 'center' },
  'self-stretch': { alignSelf: 'stretch' },
  'self-baseline': { alignSelf: 'baseline' },
});

export const flexBox = {
  ...directions,
  ...basises,
  ...wraps,
  ...flexes,
  ...grows,
  ...shrinks,
  ...justifyContents,
  ...aligns,
};
