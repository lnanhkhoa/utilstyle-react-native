import React from 'react';

import { View, Text } from 'react-native';
import { us } from 'utilstyle-react-native';

export default function TypographyExample() {
  return (
    <View
      style={[
        us['flex-1'],
        us['items-center'],
        us['justify-center'],
        us['bg-blue'],
      ]}
    >
      <View
        style={[
          us.minW(100),
          us['bg-red'],
          us.maxH(200),
          us['border-8'],
          us['border-cyan'],
        ]}
      >
        <Text
          style={[
            us['text-3xl'],
            us.italic,
            us['font-black'],
            us['tracking-wider'],
            us['underline'],
            us['text-amber-900'],
            us['decoration-amber-200'],
            us['p-10'],
          ]}
        >
          Typography Example
        </Text>
      </View>
    </View>
  );
}
