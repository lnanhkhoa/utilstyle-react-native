import type { Entries } from '../../configs/types';
import { colors, ColorKeys } from '../customization';

const bgColorKeys = (Object.keys(colors) as ColorKeys[]).map(
  (i) => `bg-${i}` as const
);
const colorEntries = Object.entries(colors) as Entries<typeof colors>;

export const backgrounds = colorEntries.reduce((all, item) => {
  const [key, value] = item;
  const newKey = `bg-${key}` as const;
  all[newKey] = { backgroundColor: value };
  return all;
}, {} as Record<typeof bgColorKeys[0], { backgroundColor: string }>);
