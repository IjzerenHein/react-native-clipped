// @flow
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

type PropsType = {
  label: string,
  onPress: () => void,
};

export const Button = (props: PropsType) => {
  const { label, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          paddingVertical: 20,
          paddingHorizontal: 12,
          borderRadius: 16,
          marginRight: 8,
          backgroundColor: 'dodgerblue',
          minWidth: 200,
        }}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
          }}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
