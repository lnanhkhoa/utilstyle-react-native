import React from 'react';

import { Text, View } from 'react-native';
import { classnames as cn, us } from 'utilstyle-react-native';

export default function TypographyExample() {
  return (
    <View style={cn('flex-1', 'items-center', 'justify-center', 'bg-blue')}>
      <View style={[cn('bg-red', 'border-8', 'border-cyan'), us.minW(100), us.maxH(200)]}>
        <Text
          style={cn(
            'text-3xl',
            'italic',
            'font-black',
            'tracking-wider',
            'underline',
            'text-amber-900',
            'decoration-amber-200',
            'p-10'
          )}
        >
          Typography Example
        </Text>
      </View>
    </View>
  );
}
