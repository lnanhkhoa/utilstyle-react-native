import {
  StyleSheet,
  ViewStyle,
  ImageStyle,
  TextStyle,
  Dimensions,
} from 'react-native';
type NameStyled = ViewStyle | ImageStyle | TextStyle;

const mHeights = StyleSheet.create({
  'min-h-0': { minHeight: 0 },
  'min-h-full': { minHeight: '100%' },
  'min-h-1/2': { minHeight: '50%' },
  'min-h-screen': { minHeight: Dimensions.get('screen').height },
});
const minHeightAttr = {
  minH: (value: number | string): NameStyled => ({
    minHeight: value,
  }),
};

export const minHeights = {
  ...mHeights,
  ...minHeightAttr,
};
