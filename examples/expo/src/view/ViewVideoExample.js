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
    color: 'white',
  },
  solidBox: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  solidText: {
    fontSize: 32,
    color: 'black',
  },
});

type PropsType = {
  store: Store,
  animations: Array<Animation>,
  solid?: boolean,
  move?: boolean,
};
type StateType = {
  index: number,
  hide: boolean,
};

export const ViewVideoExample = storeObserver(
  class ViewVideoExample extends Component<PropsType, StateType> {
    static defaultProps = {
      animations: Clipped.Animations,
      //animations: ['scaleCenter'],
    };
    state = { index: 0, hide: false };
    render() {
      const { store, animations, solid, move } = this.props;
      const { index, hide } = this.state;
      const animation = animations[index % animations.length];
      return (
        <Clipped.Transition
          animation={animation}
          move={move}
          debug={store.debug}
          onTransitionEnd={this.onTransitionEnd}>
          {!hide ? (
            <View key={animation} style={solid ? styles.solidBox : styles.box}>
              <Text style={solid ? styles.solidText : styles.text}>{animation}</Text>
            </View>
          ) : (
            undefined
          )}
        </Clipped.Transition>
      );
    }

    onTransitionEnd = () => {
      this.setState({
        hide: !this.state.hide,
        index: this.state.index + (this.state.hide ? 1 : 0),
      });
    };
  }
);
