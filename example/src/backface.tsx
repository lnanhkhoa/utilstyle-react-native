import * as React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import { multiply } from 'utilstyle-react-native';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const [rotate, setRotate] = React.useState('360deg');

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

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
        <Text>Result: {result}</Text>
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
