import type {
  RotateTransform,
  RotateXTransform,
  RotateYTransform,
  RotateZTransform,
} from 'react-native';

const rotate = (x: number): RotateTransform => ({ rotate: x + 'deg' });
const rotateX = (x: number): RotateXTransform => ({ rotateX: x + 'deg' });
const rotateY = (x: number): RotateYTransform => ({ rotateY: x + 'deg' });
const rotateZ = (x: number): RotateZTransform => ({ rotateZ: x + 'deg' });

export const rotates = {
  rotate,
  rotateX,
  rotateY,
  rotateZ,
  'rotate-0': rotate(0),
  'rotate-12': rotate(12),
  'rotate-25': rotate(25),
  'rotate-45': rotate(45),
  'rotate-90': rotate(90),
  'rotate-180': rotate(180),
  //
  'rotate-x-0': rotateX(0),
  'rotate-x-12': rotateX(12),
  'rotate-x-25': rotateX(25),
  'rotate-x-45': rotateX(45),
  'rotate-x-90': rotateX(90),
  'rotate-x-180': rotateX(180),
  //
  'rotate-y-0': rotateY(0),
  'rotate-y-12': rotateY(12),
  'rotate-y-25': rotateY(25),
  'rotate-y-45': rotateY(45),
  'rotate-y-90': rotateY(90),
  'rotate-y-180': rotateY(180),
  //
  'rotate-z-0': rotateZ(0),
  'rotate-z-12': rotateZ(12),
  'rotate-z-25': rotateZ(25),
  'rotate-z-45': rotateZ(45),
  'rotate-z-90': rotateZ(90),
  'rotate-z-180': rotateZ(180),
};
