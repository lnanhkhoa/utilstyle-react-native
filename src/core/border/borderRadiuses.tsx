import { StyleSheet, ViewStyle } from 'react-native';
import { remToPx } from '../../configs/text';

type RadiusType =
  | 'rounded'
  | 'rounded-t'
  | 'rounded-r'
  | 'rounded-l'
  | 'rounded-b'
  | 'rounded-tl'
  | 'rounded-tr'
  | 'rounded-br'
  | 'rounded-bl';

const generateBorderRadiuses = (
  prefix: RadiusType,
  properties = ['borderRadius']
) => {
  const prefix_none = `${prefix}-none` as const;
  const prefix_sm = `${prefix}-sm` as const;
  const prefix_empty = `${prefix}` as const;
  const prefix_md = `${prefix}-md` as const;
  const prefix_lg = `${prefix}-lg` as const;
  const prefix_xl = `${prefix}-xl` as const;
  const prefix_2xl = `${prefix}-2xl` as const;
  const prefix_3xl = `${prefix}-3xl` as const;
  const prefix_full = `${prefix}-full` as const;
  const listKeys = [
    prefix_none,
    prefix_sm,
    prefix_empty,
    prefix_md,
    prefix_lg,
    prefix_xl,
    prefix_2xl,
    prefix_3xl,
    prefix_full,
  ];

  const results: { [P in typeof listKeys[number]]?: ViewStyle } = {};

  const listValues = [
    0,
    remToPx(0.125),
    remToPx(0.25),
    remToPx(0.375),
    remToPx(0.5),
    remToPx(0.75),
    remToPx(1),
    remToPx(1.5),
    9999,
  ];

  listKeys.forEach((key, index) => {
    const objValue = properties.reduce((obj: any, element: string) => {
      obj[element] = listValues[index];
      return obj;
    }, {});
    results[key] = objValue;
  });
  return results;
};

export const borderRadiuses = StyleSheet.create({
  ...generateBorderRadiuses('rounded', ['borderRadius']),
  ...generateBorderRadiuses('rounded-t', [
    'borderTopLeftRadius',
    'borderTopRightRadius',
  ]),
  ...generateBorderRadiuses('rounded-r', [
    'borderTopRightRadius',
    'borderBottomRightRadius',
  ]),
  ...generateBorderRadiuses('rounded-b', [
    'borderBottomRightRadius',
    'borderBottomLeftRadius',
  ]),
  ...generateBorderRadiuses('rounded-l', [
    'borderTopLeftRadius',
    'borderBottomLeftRadius',
  ]),
  ...generateBorderRadiuses('rounded-tl', ['borderTopLeftRadius']),
  ...generateBorderRadiuses('rounded-tr', ['borderTopRightRadius']),
  ...generateBorderRadiuses('rounded-br', ['borderBottomRightRadius']),
  ...generateBorderRadiuses('rounded-bl', ['borderBottomLeftRadius']),
});
