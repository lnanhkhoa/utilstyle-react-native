import React from 'react';

import { View, Text, Switch } from 'react-native';
import { classnames, us, useColorScheme, colors } from 'utilstyle-react-native';

export default function App() {
  const { colorScheme, setColorScheme } = useColorScheme();
  return (
    <View
      style={classnames(
        'flex-1',
        'items-center',
        'justify-center',
        'bg-blue-700',
        'dark:bg-indigo-900'
      )}
    >
      <Text style={classnames('font-bold', 'text-xl', 'text-gray-100', 'dark:text-red-300')}>
        Color Scheme: {colorScheme}
      </Text>
      <Switch
        onValueChange={(value) => setColorScheme(value ? 'dark' : 'light')}
        value={colorScheme === 'dark'}
        trackColor={{ false: colors['red-300'], true: colors.yellow }}
        ios_backgroundColor={colors['red-300']}
        style={classnames('my-3')}
      />
      <View
        style={[
          us.minH(300),
          classnames('bg-green-50', 'items-center', 'justify-center', 'm-2', 'p-4'),
          classnames('border-yellow-500', 'rounded-xl', 'border-4'),
        ]}
      >
        <Text
          style={classnames(
            'font-black',
            'text-2xl',
            'text-gray-600',
            'dark:text-red-300',
            'text-center'
          )}
        >
          A utility-first styles for React native
        </Text>
      </View>
    </View>
  );
}
