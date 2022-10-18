export const FONT_SIZE_REGEX = /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl)/;
export const emToPx = (value: number, base: number) => value * base;
export const remToPx = (value: number) => emToPx(value, 16);
