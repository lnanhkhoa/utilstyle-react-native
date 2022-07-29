import type { Entries } from '../../configs/types';
import { colors, ColorKeys } from '../customization';

const borderLightColorKeys = (Object.keys(colors) as ColorKeys[]).map(
  (i) => `border-${i}` as const
);
const borderDarkColorKeys = (Object.keys(colors) as ColorKeys[]).map(
  (i) => `dark:border-${i}` as const
);

const borderColorKeys = [...borderLightColorKeys, ...borderDarkColorKeys];
const colorEntries = Object.entries(colors) as Entries<typeof colors>;

export const borderColors = colorEntries.reduce((all, item) => {
  const [key, value] = item;
  const newKey = `border-${key}` as const;
  const newDarkKey = `dark:border-${key}` as const;
  all[newKey] = { borderColor: value };
  all[newDarkKey] = { borderColor: value };
  return all;
}, {} as Record<typeof borderColorKeys[0], { borderColor: string }>);
