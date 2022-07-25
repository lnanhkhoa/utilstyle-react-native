import {
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
  Dimensions,
} from 'react-native';

type NameStyled = ViewStyle | ImageStyle | TextStyle;

const mWidths = StyleSheet.create({
  'max-w-0': { maxWidth: 0 },
  'max-w-full': { maxWidth: '100%' },
  'max-w-1/2': { maxWidth: '50%' },
  'max-w-screen': { maxWidth: Dimensions.get('screen').width },
});
const maxWidthAttr = {
  'max-w': (value: number | string): NameStyled => ({
    maxWidth: value,
  }),
};

export const maxWidths = {
  ...mWidths,
  ...maxWidthAttr,
};
