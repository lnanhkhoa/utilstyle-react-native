import type { Entries } from '../../configs/types';
import { colors, ColorKeys } from '../customization';

const borderColorKeys = (Object.keys(colors) as ColorKeys[]).map(
  (i) => `border-${i}` as const
);
const colorEntries = Object.entries(colors) as Entries<typeof colors>;

export const borderColors = colorEntries.reduce((all, item) => {
  const [key, value] = item;
  const newKey = `border-${key}` as const;
  all[newKey] = { borderColor: value };
  return all;
}, {} as Record<typeof borderColorKeys[0], { borderColor: string }>);
