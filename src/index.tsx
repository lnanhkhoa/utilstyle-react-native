export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}
import {
  flexBox,
  layout,
  spacing,
  typography,
  backgrounds,
  border,
  sizing,
} from './core';

export const us = {
  ...flexBox,
  ...layout,
  ...spacing,
  ...typography,
  ...backgrounds,
  ...border,
  ...sizing,
};
