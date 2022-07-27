import { StyleSheet, ViewStyle } from 'react-native';

function createboxShadow(
  height: number,
  width: number,
  blur: number,
  _spread: number,
  color: string,
  opacity: number
): ViewStyle {
  return {
    shadowOffset: {
      height,
      width,
    },
    shadowRadius: blur,
    shadowColor: color,
    shadowOpacity: opacity,
    elevation: 5,
  };
}

export const boxShadows = StyleSheet.create({
  'shadow-sm': createboxShadow(0, 1, 2, 0, 'rgb(0,0,0)', 0.05),
  'shadow': createboxShadow(0, 1, 3, 0, 'rgb(0,0,0)', 0.1),
  'shadow-md': createboxShadow(0, 4, 6, -1, 'rgb(0,0,0)', 0.1),
  'shadow-lg': createboxShadow(0, 10, 15, -3, 'rgb(0,0,0)', 0.1),
  'shadow-xl': createboxShadow(0, 20, 25, -3, 'rgb(0,0,0)', 0.1),
  'shadow-2xl': createboxShadow(0, 25, 50, -3, 'rgb(0,0,0)', 0.25),
  'shadow-none': createboxShadow(0, 0, 0, 0, 'transparent', 0),
});
