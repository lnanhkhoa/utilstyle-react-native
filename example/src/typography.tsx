import React from 'react';

import { Text, View } from 'react-native';
import { classnames as cn, utilColors as uC, utilHelpers as uH } from 'utilstyle-react-native';

export default function TypographyExample() {
  return (
    <View style={[cn('flex-1', 'items-center', 'justify-center'), uC['bg-blue']]}>
      <View style={[cn('border-8'), uC['bg-red'], uC['border-cyan'], uH.minW(100), uH.maxH(200)]}>
        <Text
          style={[
            cn(
              'text-3xl',
              'italic',
              'font-black',
              'tracking-wider',
              'underline',
              'decoration-amber-200',
              'p-10'
            ),
            uC['text-amber-900'],
          ]}
        >
          Typography Example
        </Text>
      </View>
    </View>
  );
}
