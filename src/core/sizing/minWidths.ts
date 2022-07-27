import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native';
type NameStyled = ViewStyle | ImageStyle | TextStyle;

const mWidths = StyleSheet.create({
  'min-w-0': { minWidth: 0 },
  'min-w-full': { minWidth: '100%' },
  'min-w-1/2': { minWidth: '50%' },
  'min-w-screen': { minWidth: 0 },
});
const minWidthAttr = {
  minW: (value: number | string): NameStyled => ({
    minWidth: value,
  }),
};

export const minWidths = {
  ...mWidths,
  ...minWidthAttr,
};
