// @flow
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Video } from 'expo';
import * as Clipped from 'react-native-clipped';
import { storeObserver, Store } from '../store';
import { ViewVideoExample } from './ViewVideoExample';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content1: {
    position: 'absolute',
    left: 20,
    top: 50,
  },
  content2: {
    position: 'absolute',
    left: 20,
    top: 200,
  },
  content3: {
    position: 'absolute',
    left: 20,
    top: 350,
  },
  content4: {
    position: 'absolute',
    left: 20,
    top: 500,
  },
});

type PropsType = {
  store: Store,
};
type StateType = {};

const ANIMATIONS = Clipped.Animations.filter(anim => !anim.startsWith('slide'));
const SLIDE_ANIMATIONS = Clipped.Animations.filter(anim => anim.startsWith('slide'));

export const ViewVideoScreen = storeObserver(
  class ViewVideoScreen extends Component<PropsType, StateType> {
    render() {
      return (
        <View style={styles.container}>
          <Video
            style={StyleSheet.absoluteFill}
            source={require('../assets/space.mp4')}
            isLooping
            shouldPlay
            resizeMode="cover"
          />
          <View style={styles.content1}>
            <ViewVideoExample solid animations={ANIMATIONS} />
          </View>
          <View style={styles.content2}>
            <ViewVideoExample animations={ANIMATIONS} />
          </View>
          <View style={styles.content3}>
            <ViewVideoExample solid animations={SLIDE_ANIMATIONS} />
          </View>
          <View style={styles.content4}>
            <ViewVideoExample animations={SLIDE_ANIMATIONS} />
          </View>
        </View>
      );
    }
  }
);
