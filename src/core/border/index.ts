import { borderRadiuses } from './borderRadiuses';
import { borderStyles } from './borderStyles';
import { borderWidths } from './borderWidths';

type EdgeType = 't' | 'b' | 'l' | 'r' | 'tl' | 'tr' | 'br' | 'bl' | undefined;

export const border = {
  ...borderRadiuses,
  ...borderStyles,
  ...borderWidths,
};

export const borderRadiusHelpers = {
  round: (value: number, edge: EdgeType) => {
    switch (edge) {
      case 't':
        return { borderTopLeftRadius: value, borderTopRightRadius: value };
      case 'r':
        return { borderTopRightRadius: value, borderBottomRightRadius: value };
      case 'b':
        return { borderBottomRightRadius: value, borderBottomLeftRadius: value };
      case 'l':
        return { borderTopLeftRadius: value, borderBottomLeftRadius: value };
      case 'tl':
        return { borderTopLeftRadius: value };
      case 'tr':
        return { borderTopRightRadius: value };
      case 'br':
        return { borderBottomRightRadius: value };
      case 'bl':
        return { borderBottomLeftRadius: value };
      default:
        return { borderRadius: value };
    }
  },
};
