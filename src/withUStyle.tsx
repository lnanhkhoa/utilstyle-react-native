import React from 'react';
import { StyleSheet } from 'react-native';

type WithUStyleProps = {
  classnames?: object;
  style?: object;
};

export function withUStyle<P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & WithUStyleProps> {
  return (props) => {
    const styles = StyleSheet.flatten([props.style, props.classnames]);
    return <Component styles={styles} {...(props as P)} />;
  };
}
