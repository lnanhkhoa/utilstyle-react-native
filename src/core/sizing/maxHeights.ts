import {
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
  Dimensions,
} from 'react-native';

type NameStyled = ViewStyle | ImageStyle | TextStyle;

const mHeight = StyleSheet.create({
  'max-h-0': { maxHeight: 0 },
  'max-h-full': { maxHeight: '100%' },
  'max-h-1/2': { maxHeight: '50%' },
  'max-h-screen': { maxHeight: Dimensions.get('screen').height },
});
const maxHeightAttr = {
  maxH: (value: number | string): NameStyled => ({
    maxHeight: value,
  }),
};

export const maxHeights = {
  ...mHeight,
  ...maxHeightAttr,
};
