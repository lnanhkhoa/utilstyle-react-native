import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default function App() {
  const [rotate, setRotate] = React.useState('360deg');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          if (rotate === '360deg') {
            setRotate('180deg');
          } else {
            setRotate('360deg');
          }
        }}
        style={[styles.absolute, { transform: [{ rotateY: rotate }] }]}
      >
        <Text>123123</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  absolute: {
    backfaceVisibility: 'hidden',
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
