import * as React from 'react';

import { View } from 'react-native';
import { flexBox } from 'utilstyle-react-native';

export default function FlexExample() {
  return (
    <View style={flexBox['flex-1']}>
      <View style={[flexBox['flex-1'], { backgroundColor: 'red' }]} />
      <View style={[flexBox['flex-2'], { backgroundColor: 'blue' }]} />
    </View>
  );
}
