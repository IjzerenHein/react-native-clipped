// @flow
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  label: {
    fontSize: 11,
    textTransform: 'uppercase',
    color: '#888888',
  },
});

export const Label = (props: { style?: any, children?: any }) => (
  <Text style={[styles.label, props.style]}>{props.children}</Text>
);
