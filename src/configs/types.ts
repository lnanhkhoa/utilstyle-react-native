export { View } from 'react-native';
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export type ValueStringType =
  | 'auto'
  | 'full'
  | 'px'
  | '1/2'
  | '1/3'
  | '2/3'
  | '1/4'
  | '2/4'
  | '3/4';

export type ValueNumberType =
  | 0
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 4.5
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;

export const mapStringValues = {
  'auto': 'auto',
  'px': 1,
  'full': '100%',
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
};

export type ValueType =
  | 0
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 4.5
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 'auto'
  | 'full'
  | 'px'
  | '1/2'
  | '1/3'
  | '2/3'
  | '1/4'
  | '2/4'
  | '3/4';

export type ResolutionType = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export type NameStyled = ViewStyle | ImageStyle | TextStyle;
