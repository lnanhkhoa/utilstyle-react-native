import { rotates } from './rotates';
import { scales } from './scales';
import { translates } from './translates';
import { skews } from './skews';

export const transforms = {
  ...rotates,
  ...scales,
  ...translates,
  ...skews,
};
