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

const CONTENTS = ['cyan', 'azure', 'red', 'aero', 'aqua', 'image1', 'image2'];

export const TransitionsScreen = storeObserver(
  class TransitionsScreen extends Component<PropsType> {
    render() {
      const { store } = this.props;
      return (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            {Clipped.Animations.filter(a => !Clipped.isExitAnimation(a)).map((animation, index) => (
              <Clipped.Transition
                key={`transition.${index}`}
                animation={animation}
                debug={store.debug}>
                <Example
                  key={`${animation}.${store.runId}`}
                  label={animation}
                  content={CONTENTS[(index + store.runId) % CONTENTS.length]}
                />
              </Clipped.Transition>
            ))}
          </ScrollView>
        </SafeAreaView>
      );
    }
  }
);
