import {
  flexBox,
  layout,
  spacing,
  typography,
  border,
  sizing,
  transforms,
  effects,
  transformHelpers,
  sizingHelpers,
  backgroundHelpers,
  borderRadiusHelpers,
  spacingHelpers,
} from './core';
import type { TransformKeys } from './core';
import type { NameStyled } from './configs/types';
import type { TransformsStyle } from 'react-native';

export const utilStyles = {
  ...flexBox,
  ...layout,
  ...spacing,
  ...typography,
  ...border,
  ...sizing,
  ...effects,
};
export const utilHelpers = {
  ...transformHelpers,
  ...sizingHelpers,
  ...backgroundHelpers,
  ...borderRadiusHelpers,
  ...spacingHelpers,
};

type UtilStyleKeys = keyof typeof utilStyles;
export function classnames(...keyNames: UtilStyleKeys[]) {
  return keyNames.reduce(
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
