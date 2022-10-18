import { backgrounds } from './core/background';
import { borderColors } from './core/border/boderColors';
import { textColors } from './core/typography/textColors';
import { textDecorationColors } from './core/typography/textDecorations';
import { colorSchemeStore } from './useColorScheme';
import type { NameStyled } from './configs/types';

export const utilColors = {
  ...backgrounds,
  ...borderColors,
  ...textColors,
  ...textDecorationColors,
};

type UtilColorKeys = keyof typeof utilColors;
export function colorClassnames(...keyNames: UtilColorKeys[]) {
  const keys = [...keyNames];
  const { colorScheme } = colorSchemeStore;
  const filterKeys =
    colorScheme === 'light' ? keys.filter((i) => i?.startsWith && !i.startsWith('dark:')) : keys;

  return filterKeys.reduce(
    (obj, key) => (utilColors.hasOwnProperty(key) ? Object.assign(obj, utilColors[key]) : obj),
    {} as NameStyled
  );
}
