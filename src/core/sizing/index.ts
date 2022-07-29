import type { NameStyled } from '../../configs/types';
import { heights } from './heights';
import { maxHeights } from './maxHeights';
import { minHeights } from './minHeights';
//
import { widths } from './widths';
import { minWidths } from './minWidths';
import { maxWidths } from './maxWidths';

export const sizing = {
  ...heights,
  ...maxHeights,
  ...minHeights,
  ...widths,
  ...minWidths,
  ...maxWidths,
};

export const sizingHelpers = {
  h: (value: string | number | undefined) => ({ height: value }),
  maxH: (value: number | string): NameStyled => ({
    maxHeight: value,
  }),
  minH: (value: number | string): NameStyled => ({
    minHeight: value,
  }),
  w: (value: number | string | undefined) => ({ width: value }),
  minW: (value: number | string): NameStyled => ({
    minWidth: value,
  }),
  maxW: (value: number | string): NameStyled => ({
    maxWidth: value,
  }),
};
