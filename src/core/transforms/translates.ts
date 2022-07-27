import type {
  TranslateXTransform,
  TranslateYTransform,
  ViewStyle,
} from 'react-native';
import type { ValueType } from '../../configs/types';
import { mapStringValues } from '../../configs/types';
import { remToPx } from '../../configs/text';

const translateX = (x: number): TranslateXTransform => ({ translateX: x });
const translateY = (x: number): TranslateYTransform => ({ translateY: x });
const translateXrem = (x: number): TranslateXTransform => ({
  translateX: remToPx(x),
});
const translateYrem = (x: number): TranslateYTransform => ({
  translateY: remToPx(x),
});

function makeValues(value: number | string) {
  if (typeof value === 'number') {
    return [translateX(value), translateY(value)];
  }
  return [translateX(0), translateY(0)];
}

function makeKeys(value: ValueType) {
  return [`translate-x-${value}`, `translate-y-${value}`] as const;
}

function generateTranslate(value: ValueType) {
  const base = 0.25;
  const afterValue =
    typeof value === 'number' ? remToPx(value * base) : mapStringValues[value];

  const keys = makeKeys(value);
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
