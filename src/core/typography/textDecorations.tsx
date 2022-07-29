import { StyleSheet } from 'react-native';

import type { Entries } from '../../configs/types';
import { colors, ColorKeys } from '../customization';

const colorLightKeys = (Object.keys(colors) as ColorKeys[]).map((i) => `decoration-${i}` as const);
const colorDarkKeys = (Object.keys(colors) as ColorKeys[]).map(
  (i) => `dark:decoration-${i}` as const
);

const colorKeys = [...colorLightKeys, ...colorDarkKeys];
const colorEntries = Object.entries(colors) as Entries<typeof colors>;

export const textDecorationColors = colorEntries.reduce((all, item) => {
  const [key, value] = item;
  const newKey = `decoration-${key}` as const;
  const newDarkKey = `dark:decoration-${key}` as const;
  all[newKey] = { textDecorationColor: value };
  all[newDarkKey] = { textDecorationColor: value };
  return all;
}, {} as Record<typeof colorKeys[0], { textDecorationColor: string }>);

export const textDecorations = StyleSheet.create({
  'underline': { textDecorationLine: 'underline' },
  'under-through': { textDecorationLine: 'underline line-through' },
  'line-through': { textDecorationLine: 'line-through' },
  'no-underline': { textDecorationLine: 'none' },
  'decoration-solid': { textDecorationStyle: 'solid' },
  'decoration-double': { textDecorationStyle: 'double' },
  'decoration-dotted': { textDecorationStyle: 'dotted' },
  'decoration-dashed': { textDecorationStyle: 'dashed' },
  ...textDecorationColors,
});
