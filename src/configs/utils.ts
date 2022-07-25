export function isFloat(n: number) {
  return n === +n && n !== (n | 0);
}

export function isInteger(n: number) {
  return n === +n && n === (n | 0);
}
