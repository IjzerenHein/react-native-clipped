// @flow
import React, { Component } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import * as Clipped from 'react-native-clipped';
import { storeObserver, Store } from '../store';
import { Example } from '../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

type PropsType = {
  store: Store,
};

const VIEWS = {
  /*Rotate: {
    rotate: 0.09,
  },*/
  Left: {
    left: 0.1,
    leftRotate: 0.2,
    debug: true,
  },
  /*Right: {
    right: 0.5,
  },
  Top: {
    top: 0.5,
  },
  Bottom: {
    bottom: 0.5,
  },
  LeftRight: {
    left: 0.25,
    right: 0.25,
  },
  TopBottom: {
    top: 0.25,
    bottom: 0.25,
  },*/
};

const COLORS = ['cyan', 'azure', 'red', 'aero', 'aqua'];

export const ViewScreen = storeObserver(
  class ViewScreen extends Component<PropsType> {
    render() {
      const { store } = this.props;
      return (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            {Object.keys(VIEWS).map((name, index) => (
              <Clipped.View key={`${store.runId}.${index}`} {...VIEWS[name]}>
                <Example label={name} color={COLORS[index % COLORS.length]} />
              </Clipped.View>
            ))}
          </ScrollView>
        </SafeAreaView>
      );
    }
  }
);
