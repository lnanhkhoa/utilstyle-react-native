import type {
  TranslateXTransform,
  TranslateYTransform,
  ViewStyle,
} from 'react-native';
import {
  mapStringValues,
  ValueNumberType,
  ValueType,
} from '../../configs/types';
import { remToPx } from '../../configs/text';
import { isFloat } from '../../configs/utils';

const translateX = (x: number): TranslateXTransform => ({ translateX: x });
const translateY = (x: number): TranslateYTransform => ({ translateY: x });
const translateXrem = (x: number): TranslateXTransform => ({
  translateX: remToPx(x),
});
const translateYrem = (x: number): TranslateYTransform => ({
  translateY: remToPx(x),
});

function makeValues(value: ValueNumberType) {
  return [translateX(value), translateY(value)];
}

function makeKeys(value: ValueType) {
  return [`translate-x-${value}`, `translate-y-${value}`] as const;
}

function generateTranslate(value: ValueType) {
  const base = 0.25;
  const afterValue =
    typeof value === 'number' && isFloat(value)
      ? remToPx(value * base)
      : mapStringValues[value];

  const keys = makeKeys(afterValue);
  const values = makeValues(afterValue);

  const obj: { [P in typeof keys[number]]?: ViewStyle } = {};
  keys.forEach((i, index) => {
    obj[i] = values[index];
  });
  return obj;
}

export const translates = {
  translateX,
  translateXrem,
  translateY,
  translateYrem,
  ...generateTranslate(0),
  ...generateTranslate('px'),
  ...generateTranslate(0.5),
  ...generateTranslate(1),
  ...generateTranslate(1.5),
  ...generateTranslate(2),
  ...generateTranslate(2.5),
  ...generateTranslate(3),
  ...generateTranslate(3.5),
  ...generateTranslate(4),
};
