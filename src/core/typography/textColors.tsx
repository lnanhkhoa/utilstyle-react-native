import type { Entries } from '../../configs/types';
import { colors, ColorKeys } from '../customization';

const textColorKeys = (Object.keys(colors) as ColorKeys[]).map(
  (i) => `text-${i}` as const
);
const colorEntries = Object.entries(colors) as Entries<typeof colors>;

export const textColors = colorEntries.reduce((all, item) => {
  const [key, value] = item;
  const newKey = `text-${key}` as const;
  all[newKey] = { color: value };
  return all;
}, {} as Record<typeof textColorKeys[0], { color: string }>);
