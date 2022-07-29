import type { Entries } from '../../configs/types';
import { colors, ColorKeys } from '../customization';

const textLightColorKeys = (Object.keys(colors) as ColorKeys[]).map((i) => `text-${i}` as const);
const textDarkColorKeys = (Object.keys(colors) as ColorKeys[]).map(
  (i) => `dark:text-${i}` as const
);

const textColorKeys = [...textLightColorKeys, ...textDarkColorKeys];
const colorEntries = Object.entries(colors) as Entries<typeof colors>;

export const textColors = colorEntries.reduce((all, item) => {
  const [key, value] = item;
  const newKey = `text-${key}` as const;
  const newDarkKey = `dark:text-${key}` as const;
  all[newKey] = { color: value };
  all[newDarkKey] = { color: value };
  return all;
}, {} as Record<typeof textColorKeys[0], { color: string }>);
