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

const CONTENTS = ['image1', 'image2', 'cyan', 'azure', 'red', 'aero', 'aqua'];

const PROPS = {
  shape: 'square',
  size: 'large',
};

export const SeriesScreen = storeObserver(
  class SeriesScreen extends Component<PropsType> {
    render() {
      const { store } = this.props;
      return (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            {Clipped.Layouts.map((layout, index) => (
              <Clipped.Series key={`${store.runId}.${index}`} layout={layout} debug={store.debug}>
                <Example content={CONTENTS[(index + store.runId) % CONTENTS.length]} {...PROPS} />
                <Example
                  content={CONTENTS[(index + store.runId + 1) % CONTENTS.length]}
                  {...PROPS}
                />
                <Example
                  content={CONTENTS[(index + store.runId + 2) % CONTENTS.length]}
                  {...PROPS}
                />
              </Clipped.Series>
            ))}
          </ScrollView>
        </SafeAreaView>
      );
    }
  }
);
