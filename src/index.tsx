import {
  flexBox,
  layout,
  spacing,
  typography,
  backgrounds,
  border,
  sizing,
  transforms,
  transformHelpers,
  sizingHelpers,
  effects,
} from './core';
import type { TransformKeys } from './core';
import type { NameStyled } from './configs/types';
import type { TransformsStyle } from 'react-native';
import { colorSchemeStore } from './useColorScheme';

export { useColorScheme } from './useColorScheme';
export { colors } from './core/customization/colors';

export const utilStyles = {
  ...flexBox,
  ...layout,
  ...spacing,
  ...typography,
  ...backgrounds,
  ...border,
  ...sizing,
  ...effects,
};
export const us = { ...utilStyles, ...transformHelpers, ...sizingHelpers };

type UtilStyleKeys = keyof typeof utilStyles;
export function classnames(...keyNames: UtilStyleKeys[]) {
  const keys = [...keyNames];
  const { colorScheme } = colorSchemeStore;
  const filterKeys =
    colorScheme === 'light' ? keys.filter((i) => i?.startsWith && !i.startsWith('dark:')) : keys;

  return filterKeys.reduce(
    (obj, key) => (utilStyles.hasOwnProperty(key) ? Object.assign(obj, utilStyles[key]) : obj),
    {} as NameStyled
  );
}

export function transformsStyles(...keys: TransformKeys[]) {
  const attrs = keys.reduce(
    (obj, key) =>
      transforms.hasOwnProperty(key) ? Object.assign(obj, transforms[key].transform[0]) : obj,
    {} as any
  );

  return { transform: Object.keys(attrs).map((key) => ({ [key]: attrs[key] })) } as TransformsStyle;
}
