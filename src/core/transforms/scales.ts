import type {
  ScaleTransform,
  ScaleXTransform,
  ScaleYTransform,
} from 'react-native';

const scale = (x: number): ScaleTransform => ({ scale: x });
const scaleX = (x: number): ScaleXTransform => ({ scaleX: x });
const scaleY = (x: number): ScaleYTransform => ({ scaleY: x });

export const scales = {
  'scale': (value: number) => scale(value / 100),

  'scale-0': scale(0),
  'scale-x-0': scaleX(0),
  'scale-y-0': scaleY(0),
  //
  'scale-50': scale(0.5),
  'scale-x-50': scaleX(0.5),
  'scale-y-50': scaleY(0.5),
  //
  'scale-75': scale(0.75),
  'scale-x-75': scaleX(0.75),
  'scale-y-75': scaleY(0.75),
  //
  'scale-90': scale(0.9),
  'scale-x-90': scaleX(0.9),
  'scale-y-90': scaleY(0.9),
  //
  'scale-95': scale(0.95),
  'scale-x-95': scaleX(0.95),
  'scale-y-95': scaleY(0.95),
  //
  'scale-100': scale(1),
  'scale-x-100': scaleX(1),
  'scale-y-100': scaleY(1),
  //
  'scale-105': scale(1.05),
  'scale-x-105': scaleX(1.05),
  'scale-y-105': scaleY(1.05),
  //
  'scale-110': scale(1.1),
  'scale-x-110': scaleX(1.1),
  'scale-y-110': scaleY(1.1),
  //
  'scale-125': scale(1.25),
  'scale-x-125': scaleX(1.25),
  'scale-y-125': scaleY(1.25),
  //
  'scale-150': scale(1.5),
  'scale-x-150': scaleX(1.5),
  'scale-y-150': scaleY(1.5),
};
