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

const CONTENTS = ['cyan', 'azure', 'red', 'aero', 'aqua'];

export const ViewAnimationsScreen = storeObserver(
  class ViewAnimationsScreen extends Component<PropsType> {
    render() {
      const { store } = this.props;
      return (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            {Clipped.Animations.filter(anim => !Clipped.isExitAnimation(anim)).map(
              (animation, index) => (
                <Clipped.View
                  key={`${store.runId}.${index}`}
                  animation={animation}
                  debug={store.debug}>
                  <Example label={animation} content={CONTENTS[index % CONTENTS.length]} />
                </Clipped.View>
              )
            )}
            {Clipped.Animations.filter(anim => Clipped.isExitAnimation(anim)).map(
              (animation, index) => (
                <Clipped.View
                  key={`${store.runId}.${index}`}
                  animation={animation}
                  debug={store.debug}>
                  <Example label={animation} content={CONTENTS[index % CONTENTS.length]} />
                </Clipped.View>
              )
            )}
          </ScrollView>
        </SafeAreaView>
      );
    }
  }
);
