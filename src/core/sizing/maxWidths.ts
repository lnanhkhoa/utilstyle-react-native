import { StyleSheet, Dimensions } from 'react-native';

export const maxWidths = StyleSheet.create({
  'max-w-0': { maxWidth: 0 },
  'max-w-full': { maxWidth: '100%' },
  'max-w-1/2': { maxWidth: '50%' },
  'max-w-screen': { maxWidth: Dimensions.get('screen').width },
});
