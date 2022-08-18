import type { Entries, NameStyled } from '../../configs/types';
import { colors, ColorKeys } from '../customization';

const bgLightColorKeys = (Object.keys(colors) as ColorKeys[]).map((i) => `bg-${i}` as const);
const bgDarkColorKeys = (Object.keys(colors) as ColorKeys[]).map((i) => `dark:bg-${i}` as const);

const bgColorKeys = [...bgLightColorKeys, ...bgDarkColorKeys];
const colorEntries = Object.entries(colors) as Entries<typeof colors>;

export const backgrounds = colorEntries.reduce((all, item) => {
  const [key, value] = item;
  const newKey = `bg-${key}` as const;
  const newDarkKey = `dark:bg-${key}` as const;
  all[newKey] = { backgroundColor: value };
  all[newDarkKey] = { backgroundColor: value };
  return all;
}, {} as Record<typeof bgColorKeys[0], { backgroundColor: string }>);

export const backgroundHelpers = {
  bg: (value: string): NameStyled => ({
    backgroundColor: value,
  }),
};
