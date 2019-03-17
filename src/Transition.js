// @flow
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { ClippedView } from './View';
import type { ClippedAnimationName, ClippedAnimationType } from './Animations';
import { resolveAnimation, isExitAnimation } from './Animations';

export type ClippedTransitionProps = {
  style?: View.propTypes.style,
  children: any,
  // Animation props
  animation: ClippedAnimationName | ClippedAnimationType,
  duration?: number,
  delay?: number,
  easing?: (t: number) => number,
  useNativeDriver?: boolean,
  onTransitionEnd?: () => void,
  // Debug props
  debug?: boolean,
};

type StateType = {
  width: ?number,
  height: ?number,
  child: any,
  prevChildren: Array<any>,
};

export class ClippedTransition extends Component<ClippedTransitionProps, StateType> {
  constructor(props: ClippedTransitionProps) {
    super(props);
    this.state = {
      width: undefined,
      height: undefined,
      child: React.Children.only(props.children),
      prevChildren: [],
    };
  }

  static getDerivedStateFromProps(props: ClippedTransitionProps, state: StateType) {
    let newState: any = null;

    const child = isExitAnimation(props.animation)
      ? undefined
      : React.Children.only(props.children);

    if (!child && state.child) {
      newState = newState || {};
      newState.child = undefined;
      newState.prevChildren = [...state.prevChildren, state.child];
    } else if (!state.child && child) {
      newState = newState || {};
      newState.child = child;
    } else if (state.child && child && state.child.key !== child.key) {
      newState = newState || {};
      newState.child = child;
      newState.prevChildren = [...state.prevChildren, state.child];
    }

    return newState;
  }

  render() {
    const {
      style,
      // Animation props
      animation,
      duration, // eslint-disable-line
      delay, // eslint-disable-line
      easing, // eslint-disable-line
      useNativeDriver, // eslint-disable-line
      onTransitionEnd, // eslint-disable-line
      // Debug props
      debug,
      ...otherProps
    } = this.props;

    const { child, prevChildren } = this.state;
    const children = child ? [...prevChildren, child] : prevChildren;
    const anim = resolveAnimation(animation);
    const exit = isExitAnimation(animation);
    return (
      <View style={style} {...otherProps}>
        {React.Children.map(children, child => {
          const isHiding = child !== this.state.child;
          if (!isHiding && exit) return null;
          return (
            <ClippedView
              key={child.key}
              style={isHiding && !exit ? StyleSheet.absoluteFill : undefined}
              animation={isHiding ? (exit ? anim : undefined) : anim}
              duration={duration}
              delay={delay}
              easing={easing}
              useNativeDriver={useNativeDriver}
              onAnimationEnd={isHiding && !exit ? undefined : this.onAnimationEnd}
              debug={debug}>
              {child}
            </ClippedView>
          );
        })}
      </View>
    );
  }

  onAnimationEnd = () => {
    const { onTransitionEnd } = this.props;
    if (this.state.prevChildren.length) {
      this.setState({
        prevChildren: [],
      });
    }
    if (onTransitionEnd) onTransitionEnd();
  };
}
