import { rotates, rotateHelpers } from './rotates';
import { scales, scaleHelpers } from './scales';
import { translates, translateHelpers } from './translates';
import { skews } from './skews';

export const transforms = {
  ...rotates,
  ...scales,
  ...translates,
  ...skews,
};

export const transformHelpers = {
  ...rotateHelpers,
  ...scaleHelpers,
  ...translateHelpers,
};

export type TransformKeys = keyof typeof transforms;
