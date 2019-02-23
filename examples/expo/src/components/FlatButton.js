// @flow
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 16,
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'dodgerblue',
  },
});

type PropsType = {
  label: string,
  onPress: () => void,
  checked?: boolean,
  style?: any,
};

export const FlatButton = (props: PropsType) => {
  const { label, onPress, checked, style } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[style, styles.container, checked ? { backgroundColor: 'dodgerblue' } : undefined]}>
        <Text style={[styles.text, checked ? { color: 'white' } : undefined]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};
