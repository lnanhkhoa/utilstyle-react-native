import { StyleSheet, Dimensions } from 'react-native';

export const maxHeights = StyleSheet.create({
  'max-h-0': { maxHeight: 0 },
  'max-h-full': { maxHeight: '100%' },
  'max-h-1/2': { maxHeight: '50%' },
  'max-h-screen': { maxHeight: Dimensions.get('screen').height },
});
