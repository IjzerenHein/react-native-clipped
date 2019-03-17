// @flow
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Clipped from 'react-native-clipped';
import type { Animation } from 'react-native-clipped';
import { storeObserver, Store } from '../store';

const styles = StyleSheet.create({
  box: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    // letterSpacing: 1,
    color: 'white',
  },
  solidBox: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  solidText: {
    fontSize: 32,
    // fontWeight: 'bold',
    // letterSpacing: 1,
    color: 'black',
  },
});

type PropsType = {
  store: Store,
  animations: Array<Animation>,
  solid?: boolean,
};
type StateType = {
  index: number,
};

export const ViewVideoExample = storeObserver(
  class ViewVideoExample extends Component<PropsType, StateType> {
    static defaultProps = {
      animations: Clipped.Animations,
    };
    state = { index: 0 };
    render() {
      const { store, animations, solid } = this.props;
      const { index } = this.state;
      const animation = animations[index % animations.length];
      return (
        <Clipped.Transition
          animation={animation}
          debug={store.debug}
          onTransitionEnd={this.onTransitionEnd}>
          <View key={animation} style={solid ? styles.solidBox : styles.box}>
            <Text style={solid ? styles.solidText : styles.text}>{animation}</Text>
          </View>
        </Clipped.Transition>
      );
    }

    onTransitionEnd = () => {
      this.setState({
        index: this.state.index + 1,
      });
    };
  }
);
