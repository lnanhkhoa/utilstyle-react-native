export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}
import { StyleSheet } from 'react-native';
import { flexBox, layout, spacing } from './core';

const utilStyles = StyleSheet.create({ ...flexBox, ...layout, ...spacing });

export function styled(Component) {
  return (props) => <Component className={['flex-1']} {...props} />;
}
