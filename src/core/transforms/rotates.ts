import {
  RotateTransform,
  RotateXTransform,
  RotateYTransform,
  RotateZTransform,
  StyleSheet,
} from 'react-native';

const rotate = (x: number): RotateTransform => ({ rotate: x + 'deg' });
const rotateX = (x: number): RotateXTransform => ({ rotateX: x + 'deg' });
const rotateY = (x: number): RotateYTransform => ({ rotateY: x + 'deg' });
const rotateZ = (x: number): RotateZTransform => ({ rotateZ: x + 'deg' });

export const rotates = StyleSheet.create({
  'rotate-0': { transform: [rotate(0)] },
  'rotate-12': { transform: [rotate(12)] },
  'rotate-25': { transform: [rotate(25)] },
  'rotate-45': { transform: [rotate(45)] },
  'rotate-90': { transform: [rotate(90)] },
  'rotate-180': { transform: [rotate(180)] },
  //
  'rotate-x-0': { transform: [rotateX(0)] },
  'rotate-x-12': { transform: [rotateX(12)] },
  'rotate-x-25': { transform: [rotateX(25)] },
  'rotate-x-45': { transform: [rotateX(45)] },
  'rotate-x-90': { transform: [rotateX(90)] },
  'rotate-x-180': { transform: [rotateX(180)] },
  //
  'rotate-y-0': { transform: [rotateY(0)] },
  'rotate-y-12': { transform: [rotateY(12)] },
  'rotate-y-25': { transform: [rotateY(25)] },
  'rotate-y-45': { transform: [rotateY(45)] },
  'rotate-y-90': { transform: [rotateY(90)] },
  'rotate-y-180': { transform: [rotateY(180)] },
  //
  'rotate-z-0': { transform: [rotateZ(0)] },
  'rotate-z-12': { transform: [rotateZ(12)] },
  'rotate-z-25': { transform: [rotateZ(25)] },
  'rotate-z-45': { transform: [rotateZ(45)] },
  'rotate-z-90': { transform: [rotateZ(90)] },
  'rotate-z-180': { transform: [rotateZ(180)] },
});

export const rotateHelpers = { rotate, rotateX, rotateY, rotateZ };
