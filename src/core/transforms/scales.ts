import { ScaleTransform, ScaleXTransform, ScaleYTransform, StyleSheet } from 'react-native';

const scale = (x: number): ScaleTransform => ({ scale: x });
const scaleX = (x: number): ScaleXTransform => ({ scaleX: x });
const scaleY = (x: number): ScaleYTransform => ({ scaleY: x });

export const scales = StyleSheet.create({
  'scale-0': { transform: [scale(0)] },
  'scale-x-0': { transform: [scaleX(0)] },
  'scale-y-0': { transform: [scaleY(0)] },
  'scale-50': { transform: [scale(0.5)] },
  'scale-x-50': { transform: [scaleX(0.5)] },
  'scale-y-50': { transform: [scaleY(0.5)] },
  'scale-75': { transform: [scale(0.75)] },
  'scale-x-75': { transform: [scaleX(0.75)] },
  'scale-y-75': { transform: [scaleY(0.75)] },
  'scale-90': { transform: [scale(0.9)] },
  'scale-x-90': { transform: [scaleX(0.9)] },
  'scale-y-90': { transform: [scaleY(0.9)] },
  'scale-95': { transform: [scale(0.95)] },
  'scale-x-95': { transform: [scaleX(0.95)] },
  'scale-y-95': { transform: [scaleY(0.95)] },
  'scale-100': { transform: [scale(1)] },
  'scale-x-100': { transform: [scaleX(1)] },
  'scale-y-100': { transform: [scaleY(1)] },
  'scale-105': { transform: [scale(1.05)] },
  'scale-x-105': { transform: [scaleX(1.05)] },
  'scale-y-105': { transform: [scaleY(1.05)] },
  'scale-110': { transform: [scale(1.1)] },
  'scale-x-110': { transform: [scaleX(1.1)] },
  'scale-y-110': { transform: [scaleY(1.1)] },
  'scale-125': { transform: [scale(1.25)] },
  'scale-x-125': { transform: [scaleX(1.25)] },
  'scale-y-125': { transform: [scaleY(1.25)] },
  'scale-150': { transform: [scale(1.5)] },
  'scale-x-150': { transform: [scaleX(1.5)] },
  'scale-y-150': { transform: [scaleY(1.5)] },
});

export const scaleHelpers = {
  scale: (value: number) => scale(value / 100),
};
