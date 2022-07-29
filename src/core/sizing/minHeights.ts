import { StyleSheet, Dimensions } from 'react-native';

export const minHeights = StyleSheet.create({
  'min-h-0': { minHeight: 0 },
  'min-h-full': { minHeight: '100%' },
  'min-h-1/2': { minHeight: '50%' },
  'min-h-screen': { minHeight: Dimensions.get('screen').height },
});
