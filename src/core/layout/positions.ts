import { StyleSheet, ViewStyle } from 'react-native';
import { remToPx } from '../../configs/text';
import type { ValueType } from '../../configs/types';
import { mapStringValues } from '../../configs/types';

function makeInsetValues(value: string | number) {
  return [
    {
      top: value,
      right: value,
      bottom: value,
      left: value,
    },
    { left: value, right: value },
    { top: value, bottom: value },
    {
      top: value,
    },
    {
      right: value,
    },
    {
      bottom: value,
    },
    {
      left: value,
    },
  ];
}

function makeInsetKeys(value: ValueType) {
  const inset_key = `inset-${value}` as const;
  const inset_x_key = `inset-x-${value}` as const;
  const inset_y_key = `inset-y-${value}` as const;
  const top_key = `top-${value}` as const;
  const right_key = `right-${value}` as const;
  const left_key = `left-${value}` as const;
  const bottom_key = `bottom-${value}` as const;
  return [inset_key, inset_x_key, inset_y_key, top_key, right_key, bottom_key, left_key];
}

function generateInsetPositions(value: ValueType) {
  const base = 0.25;
  const afterValue = typeof value === 'number' ? remToPx(value * base) : mapStringValues[value];

  const keys = makeInsetKeys(value);
  const values = makeInsetValues(afterValue);

  const obj: { [P in typeof keys[number]]?: ViewStyle } = {};
  keys.forEach((i, index) => {
    obj[i] = values[index];
  });
  return obj;
}

export const positions = StyleSheet.create({
  relative: {
    position: 'relative',
  },
  absolute: {
    position: 'absolute',
  },
  ...generateInsetPositions('px'),
  ...generateInsetPositions(0),
  ...generateInsetPositions(0.5),
  ...generateInsetPositions(1),
  ...generateInsetPositions(1.5),
  ...generateInsetPositions(2),
  ...generateInsetPositions(2.5),
  ...generateInsetPositions(3),
  ...generateInsetPositions(3.5),
  ...generateInsetPositions(4),
  ...generateInsetPositions(4.5),
  ...generateInsetPositions(5),
  ...generateInsetPositions(6),
  ...generateInsetPositions(7),
  ...generateInsetPositions(8),
  ...generateInsetPositions(9),
  ...generateInsetPositions(10),
  ...generateInsetPositions(11),
  ...generateInsetPositions(12),
  ...generateInsetPositions('auto'),
  ...generateInsetPositions('1/2'),
  ...generateInsetPositions('1/3'),
  ...generateInsetPositions('2/3'),
  ...generateInsetPositions('1/4'),
  ...generateInsetPositions('2/4'),
  ...generateInsetPositions('3/4'),
});
