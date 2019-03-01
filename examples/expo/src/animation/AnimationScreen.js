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

const ANIMATIONS = [
  'slideInLeft',
  'slideInRight',
  'slideInUp',
  'slideInDown',
  'closeSlidingDoors',
  'closeSlidingDoorsVertical',
  'growCenter',
  'flipInX',
  'flipInY',
  'slideOutLeft',
  'slideOutRight',
  'slideOutUp',
  'slideOutDown',
  'openSlidingDoors',
  'openSlidingDoorsVertical',
  'shrinkCenter',
  'flipOutX',
  'flipOutY',
];

const COLORS = ['cyan', 'azure', 'red', 'aero', 'aqua'];

export const AnimationScreen = storeObserver(
  class AnimationScreen extends Component<PropsType> {
    render() {
      const { store } = this.props;
      return (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            {ANIMATIONS.map((animation, index) => (
              <Clipped.Animation key={`${store.runId}.${index}`} animation={animation}>
                <Example label={animation} color={COLORS[index % COLORS.length]} />
              </Clipped.Animation>
            ))}
          </ScrollView>
        </SafeAreaView>
      );
    }
  }
);
