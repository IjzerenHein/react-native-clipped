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
  Left: {
    left: 0.5,
  },
  Right: {
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
  },
};

const CONTENTS = ['cyan', 'azure', 'red', 'aero', 'aqua'];

export const ViewExamplesScreen = storeObserver(
  class ViewExamplesScreen extends Component<PropsType> {
    render() {
      const { store } = this.props;
      return (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            {Object.keys(VIEWS).map((name, index) => (
              <Clipped.View key={`${store.runId}.${index}`} {...VIEWS[name]}>
                <Example label={name} content={CONTENTS[index % CONTENTS.length]} />
              </Clipped.View>
            ))}
          </ScrollView>
        </SafeAreaView>
      );
    }
  }
);
