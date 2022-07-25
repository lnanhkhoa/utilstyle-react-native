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
