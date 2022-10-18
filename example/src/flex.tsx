import React from 'react';

import { View } from 'react-native';
import { utilStyles as us, utilColors as uC } from 'utilstyle-react-native';

export default function FlexExample() {
  return (
    <View style={us['flex-1']}>
      <View style={[us['flex-1'], uC['bg-red']]} />
      <View style={[us['flex-2'], uC['bg-blue']]} />
    </View>
  );
}
