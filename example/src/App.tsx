import React from 'react';

import { View, Text as Text, Switch } from 'react-native';
import {
  classnames,
  utilHelpers as uh,
  useColorScheme,
  colors,
  colorClassnames,
} from 'utilstyle-react-native';

export default function App() {
  const { colorScheme, setColorScheme } = useColorScheme();
  return (
    <View
      style={[
        classnames('flex-1', 'items-center', 'justify-center'),
        colorClassnames('bg-blue-700', 'dark:bg-indigo-900'),
      ]}
    >
      <Text
        style={[
          classnames('font-bold', 'text-xl'),
          colorClassnames('text-gray-100', 'dark:text-red-300'),
        ]}
      >
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
          uh.minH(300),
          classnames('items-center', 'justify-center', 'm-2', 'p-4'),
          classnames('rounded-xl', 'border-4'),
          colorClassnames('bg-green-50', 'border-yellow-500'),
        ]}
      >
        <Text
          style={[
            classnames('font-black', 'text-2xl', 'text-center'),
            colorClassnames('text-gray-600', 'dark:text-red-300'),
          ]}
        >
          A utility-first styles for React native
        </Text>
      </View>
    </View>
  );
}
