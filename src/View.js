// @flow
import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import type { ClippedViewProps } from './types';
import { renderAnimation, isExitAnimation } from './Animations';

type StateType = {
  val: Animated.Value,
  anim: any,
  width: ?number,
  height: ?number,
};

export class ClippedView extends Component<ClippedViewProps, StateType> {
  static defaultProps = {
    animation: 'slideInLeft',
    move: false,
    fade: false,
    duration: 1000,
    delay: 0,
    useNativeDriver: true,
  };

  state = {
    val: new Animated.Value(0),
    anim: undefined,
    width: undefined,
    height: undefined,
  };

  static getDerivedStateFromProps(props: ClippedViewProps, state: StateType) {
    if (state.width !== undefined && state.height !== undefined && !state.anim) {
      const { duration, delay, easing, useNativeDriver } = props;
      const anim = Animated.timing(state.val, {
        toValue: 1,
        duration,
        delay,
        easing,
        useNativeDriver,
      });
      anim.start();
      return {
        anim,
      };
    }
    return null;
  }

  render() {
    const {
      animation,
      move,
      fade,
      duration, // eslint-disable-line
      delay, // eslint-disable-line
      easing, // eslint-disable-line
      useNativeDriver, // eslint-disable-line
      ...otherProps
    } = this.props;
    const { val, anim, width, height } = this.state;
    if (!anim || width === undefined || height === undefined) {
      return (
        <View
          {...otherProps}
          onLayout={this.onLayout}
          style={[otherProps.style, !isExitAnimation(animation) ? { opacity: 0 } : undefined]}
        />
      );
    }
    return renderAnimation(animation, move, fade, otherProps, val, width || 0, height || 0);
  }

  onLayout = (event: any) => {
    const { height, width } = event.nativeEvent.layout;
    if (this.state.width !== width || this.state.height !== height) {
      this.setState({ width, height });
    }
  };
}
