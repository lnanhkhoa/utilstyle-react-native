import { StyleSheet, ViewStyle } from 'react-native';

type RadiusType =
  | 'border'
  | 'border-x'
  | 'border-y'
  | 'border-t'
  | 'border-r'
  | 'border-b'
  | 'border-l';

const generateBorderWidth = (prefix: RadiusType, properties = ['borderRadius']) => {
  const prefix_none = `${prefix}-0` as const;
  const prefix_1 = `${prefix}` as const;
  const prefix_2 = `${prefix}-2` as const;
  const prefix_4 = `${prefix}-4` as const;
  const prefix_8 = `${prefix}-8` as const;
  const listKeys = [prefix_none, prefix_1, prefix_2, prefix_4, prefix_8];

  const results: { [P in typeof listKeys[number]]?: ViewStyle } = {};

  const listValues = [0, 1, 2, 4, 8];

  listKeys.forEach((key, index) => {
    const objValue = properties.reduce((obj: any, element: string) => {
      obj[element] = listValues[index];
      return obj;
    }, {});
    results[key] = objValue;
  });
  return results;
};

export const borderWidths = StyleSheet.create({
  ...generateBorderWidth('border', ['borderWidth']),
  ...generateBorderWidth('border-x', ['borderLeftWidth', 'borderRightWidth']),
  ...generateBorderWidth('border-y', ['borderTopWidth', 'borderBottomWidth']),
  ...generateBorderWidth('border-t', ['borderTopWidth']),
  ...generateBorderWidth('border-l', ['borderLeftWidth']),
  ...generateBorderWidth('border-r', ['borderRightWidth']),
  ...generateBorderWidth('border-b', ['borderBottomWidth']),
});
