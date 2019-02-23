// @flow
import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import * as Clippable from 'react-native-clippable';
import { storeObserver, Store } from '../store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

type PropsType = {
  store: Store,
};

export const TransitionScreen = storeObserver(
  class TransitionScreen extends Component<PropsType> {
    render() {
      return <ScrollView style={styles.container} />;
    }
  }
);
