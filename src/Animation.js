// @flow
import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import type { ClippedAnimationProps } from './types';
import { renderAnimation, isExitAnimation } from './Animations';

type StateType = {
  val: Animated.Value,
  anim: any,
  width: ?number,
  height: ?number,
};

export class ClippedAnimation extends Component<ClippedAnimationProps, StateType> {
  static defaultProps = {
    animation: 'slideInLeft',
    move: false,
    fade: false,
    duration: 1000,
    delay: 0,
    useNativeDriver: true,
  };

  constructor(props: ClippedAnimationProps) {
    super(props);
    this.state = {
      val: new Animated.Value(0),
      anim: undefined,
      width: props.width,
      height: props.height,
    };
  }

  static getDerivedStateFromProps(props: ClippedAnimationProps, state: StateType) {
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
      width, // eslint-disable-line
      height, // eslint-disable-line
      ...otherProps
    } = this.props;
    const { val, anim } = this.state;
    if (!anim || this.state.width === undefined || this.state.height === undefined) {
      return (
        <View
          {...otherProps}
          onLayout={!width && !height ? this.onLayout : undefined}
          style={[otherProps.style, !isExitAnimation(animation) ? { opacity: 0 } : undefined]}
        />
      );
    }
    return renderAnimation(
      animation,
      move,
      fade,
      otherProps,
      val,
      this.state.width || 0,
      this.state.height || 0
    );
  }

  onLayout = (event: any) => {
    const { height, width } = event.nativeEvent.layout;
    if (this.state.width !== width || this.state.height !== height) {
      this.setState({ width, height });
    }
  };
}
