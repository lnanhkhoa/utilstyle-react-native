import React from 'react';

import { View } from 'react-native';
import { us } from 'utilstyle-react-native';

export default function FlexExample() {
  return (
    <View style={us['flex-1']}>
      <View style={[us['flex-1'], { backgroundColor: 'red' }]} />
      <View style={[us['flex-2'], { backgroundColor: 'blue' }]} />
    </View>
  );
}
