import { padding } from './paddings';
import { margin } from './margins';
import type { ViewStyle } from 'react-native';

export const spacing = { ...padding, ...margin };

type DirectType = 't' | 'l' | 'r' | 'b' | 'x' | 'y' | undefined;

export const spacingHelpers = {
  p: (value: number, direction: DirectType): ViewStyle => {
    switch (direction) {
      case 't':
        return { paddingTop: value };
      case 'l':
        return { paddingLeft: value };
      case 'b':
        return { paddingBottom: value };
      case 'r':
        return { paddingRight: value };
      case 'x':
        return { paddingHorizontal: value };
      case 'y':
        return { paddingVertical: value };
      default:
        return { padding: value };
    }
  },
  m: (value: number, direction: DirectType): ViewStyle => {
    switch (direction) {
      case 't':
        return { marginTop: value };
      case 'l':
        return { marginLeft: value };
      case 'b':
        return { marginBottom: value };
      case 'r':
        return { marginRight: value };
      case 'x':
        return { marginHorizontal: value };
      case 'y':
        return { marginVertical: value };
      default:
        return { margin: value };
    }
  },
};
