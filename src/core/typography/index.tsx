import { fontSizes } from './fontSizes';
import { fontStyles } from './fontStyles';
import { fontVariants } from './fontVariants';
import { fontWeights } from './fontWeights';
import { letterSpacings } from './letterSpacings';
import { lineHeights } from './lineHeights';
import { textAligns } from './textAligns';
import { textAlignVerticals } from './textAlignVerticals';
import { textTransfroms } from './textTransfroms';
import { textDecorations } from './textDecorations';

export const typography = {
  ...fontSizes,
  ...fontStyles,
  ...fontVariants,
  ...fontWeights,
  ...letterSpacings,
  ...textDecorations,
  ...lineHeights,
  ...textAligns,
  ...textAlignVerticals,
  ...textTransfroms,
};
