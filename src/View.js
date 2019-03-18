// @flow
import React, { Component } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { ClippedFragment } from './Fragment';
import { resolveAnimation } from './Animations';
import type { ClippedAnimation } from './Animations';

export type ClippedViewAnimationProps = {};

export type ClippedViewProps = {
  style?: View.propTypes.style,
  children: any,

  // Clipping props
  left?: number,
  right?: number,
  top?: number,
  bottom?: number,
  leftRotate?: number,
  rightRotate?: number,
  bottomRotate?: number,
  topRotate?: number,

  // Animation props
  animation?: ClippedAnimation,
  animValue?: any,
  hide?: boolean,
  invert?: boolean,
  //fade: boolean,
  duration?: number,
  delay?: number,
  easing?: (t: number) => number,
  useNativeDriver?: boolean,
  onAnimationEnd?: () => void,

  // Debug props
  debug?: boolean,
};

type StateType = {
  animation?: ClippedAnimation,
  hide?: boolean,
  invert?: boolean,
  animValue?: Animated.Value,
  anim: any,
  width: ?number,
  height: ?number,
};

export class ClippedView extends Component<ClippedViewProps, StateType> {
  static defaultProps = {
    duration: 1000,
    delay: 0,
    useNativeDriver: true,
  };

  constructor(props: ClippedViewProps) {
    super(props);
    this.state = {
      animation: undefined,
      hide: undefined,
      invert: undefined,
      animValue: undefined,
      anim: undefined,
      width: undefined,
      height: undefined,
    };
  }

  static getDerivedStateFromProps(props: ClippedViewProps, state: StateType) {
    let newState: any = null;
    if (state.width === undefined || state.height === undefined) {
      return null;
    }

    if (props.animValue) {
      return state.animValue !== props.animValue ? { animValue: props.animValue } : null;
    } else if (!state.anim && props.animation) {
      newState = newState || {};
      const { duration, delay, easing, useNativeDriver } = props;
      newState.animation = props.animation;
      newState.hide = props.hide;
      newState.invert = props.invert;
      newState.animValue = new Animated.Value(0);
      newState.anim = Animated.timing(newState.animValue, {
        toValue: 1,
        duration,
        delay,
        easing,
        useNativeDriver,
      });
      newState.anim.start(props.onAnimationEnd);
      /*} else if (state.anim && !props.animation) {
      newState = newState || {};
      newState.animation = undefined;
      newState.anim = undefined;
      newState.animValue = undefined;*/
    } else if (
      state.animation &&
      props.animation &&
      (state.animation !== props.animation ||
        state.hide !== props.hide ||
        state.invert !== props.invert)
    ) {
      newState = newState || {};
      const { duration, delay, easing, useNativeDriver } = props;
      newState.animation = props.animation;
      newState.hide = props.hide;
      newState.invert = props.invert;
      const animValue = new Animated.Value(0);
      newState.animValue = Animated.add(Animated.subtract(state.animValue || 0, 1), animValue);
      newState.anim = Animated.timing(animValue, {
        toValue: 1,
        duration,
        delay,
        easing,
        useNativeDriver,
      });
      newState.anim.start(props.onAnimationEnd);
    }

    return newState;
  }

  renderFragments(width: number, height: number, debug?: boolean) {
    const {
      children,
      left = 0,
      top = 0,
      right = 0,
      bottom = 0,
      leftRotate = 0,
      topRotate = 0,
      rightRotate = 0,
      bottomRotate = 0,
    } = this.props;
    let result = debug ? undefined : children;
    if (left && !leftRotate) {
      result = (
        <ClippedFragment
          debug={debug}
          width={width}
          height={height}
          translateX={Animated.multiply(left, width)}>
          {result}
        </ClippedFragment>
      );
    }
    if (leftRotate) {
      result = (
        <ClippedFragment
          debug={debug}
          width={width * 2}
          height={height * 2}
          originalWidth={width}
          originalHeight={height}
          top={(height * 2 - height) / -2}
          left={width / -2}
          //translateY={leftRotate * height}
          translateX={Animated.add(width / 2, Animated.multiply(left, width))}
          rotateZ={`${leftRotate * 45}deg`}>
          {result}
        </ClippedFragment>
      );
    }
    if (right && !rightRotate) {
      result = (
        <ClippedFragment
          debug={debug}
          width={width}
          height={height}
          translateX={Animated.multiply(right, -width)}>
          {result}
        </ClippedFragment>
      );
    }
    if (rightRotate) {
      result = (
        <ClippedFragment
          debug={debug}
          width={width * 2}
          height={height * 2}
          originalWidth={width}
          originalHeight={height}
          top={(height * 2 - height) / -2}
          left={width / -2}
          //translateY={leftRotate * height}
          translateX={Animated.add(width / -2, Animated.multiply(right, -width))}
          rotateZ={`${rightRotate * 45}deg`}>
          {result}
        </ClippedFragment>
      );
    }
    if (top && !topRotate) {
      result = (
        <ClippedFragment
          debug={debug}
          width={width}
          height={height}
          translateY={Animated.multiply(top, height)}>
          {result}
        </ClippedFragment>
      );
    }
    if (topRotate) {
      result = (
        <ClippedFragment
          debug={debug}
          width={width * 2}
          height={height * 2}
          originalWidth={width}
          originalHeight={height}
          top={height / -2}
          left={(width * 2 - width) / -2}
          translateY={Animated.add(height / 2, Animated.multiply(top, height))}
          rotateZ={`${topRotate * 45}deg`}>
          {result}
        </ClippedFragment>
      );
    }
    if (bottom && !bottomRotate) {
      result = (
        <ClippedFragment
          debug={debug}
          width={width}
          height={height}
          translateY={Animated.multiply(bottom, -height)}>
          {result}
        </ClippedFragment>
      );
    }
    if (bottomRotate) {
      result = (
        <ClippedFragment
          debug={debug}
          width={width * 2}
          height={height * 2}
          originalWidth={width}
          originalHeight={height}
          top={height / -2}
          left={(width * 2 - width) / -2}
          translateY={Animated.add(height / -2, Animated.multiply(bottom, -height))}
          rotateZ={`${bottomRotate * 45}deg`}>
          {result}
        </ClippedFragment>
      );
    }
    if (result === children) {
      result = <View style={StyleSheet.absoluteFill}>{children}</View>;
    }
    return result;
  }

  renderAnimation(width: number, height: number, debug?: boolean) {
    // $FlowFixMe
    const animValue: Animated.Value = this.state.animValue;
    const childContent = this.renderFragments(width, height, debug);
    const animation = resolveAnimation(this.state.animation);
    const { hide, invert } = this.props;
    return animation.map((anim, idx) => {
      const vals: any = {
        debug,
        left: 0,
        top: 0,
        width,
        height,
        originalWidth: width,
        originalHeight: height,
      };
      /*if (fade) {
        vals.opacity = animValue.interpolate({
          inputRange: [0, 1],
          outputRange: isExitAnimation ? [1, 0] : [0, 1],
        });
      }*/
      const { hideMultiplier = -1, ...anim2 } = anim;
      Object.keys(anim2).forEach(key => {
        let val = anim2[key];
        let multiplier = 1;
        switch (key) {
          case 'left':
          case 'width':
          case 'translateX':
            multiplier = width;
            break;
          case 'top':
          case 'height':
          case 'translateY':
            multiplier = height;
            break;
        }
        if (Array.isArray(val)) {
          val = animValue.interpolate({
            inputRange: [0, 1],
            outputRange: hide
              ? val
                  .map(arrVal => (multiplier !== 1 ? arrVal * multiplier * hideMultiplier : arrVal))
                  .reverse()
              : val.map(arrVal => (multiplier !== 1 ? arrVal * multiplier : arrVal)),
          });
        } else if (typeof val === 'function') {
          val = val(animValue);
          if (multiplier !== 1) {
            val = Animated.multiply(val, multiplier);
          }
        } else if (multiplier !== 1) {
          val = val * multiplier;
        }
        vals[key] = val;
      });
      return (
        <ClippedFragment key={idx} {...vals}>
          {childContent}
        </ClippedFragment>
      );
    });
  }

  render() {
    const {
      style,
      children,
      // Clipping props
      left, // eslint-disable-line
      top, // eslint-disable-line
      right, // eslint-disable-line
      bottom, // eslint-disable-line
      leftRotate, // eslint-disable-line
      topRotate, // eslint-disable-line
      rightRotate, // eslint-disable-line
      bottomRotate, // eslint-disable-line
      // Animation props
      animation, // eslint-disable-line
      hide, // eslint-disable-line
      invert, // eslint-disable-line
      duration, // eslint-disable-line
      delay, // eslint-disable-line
      easing, // eslint-disable-line
      animValue, // eslint-disable-line
      useNativeDriver, // eslint-disable-line
      onAnimationEnd, // eslint-disable-line
      // Debug props
      debug,
      ...otherProps
    } = this.props;
    const { width, height, anim } = this.state;
    return (
      <View style={style} onLayout={this.onLayout} {...otherProps}>
        <View style={{ opacity: 0 }} collapsable={false}>
          {children}
        </View>
        {!anim && debug && width && height ? this.renderFragments(width, height, debug) : undefined}
        {!anim && width && height ? this.renderFragments(width, height) : undefined}
        {anim && debug && width && height ? this.renderAnimation(width, height, debug) : undefined}
        {anim && width && height ? this.renderAnimation(width, height) : undefined}
      </View>
    );
  }

  onLayout = (event: any) => {
    const { height, width } = event.nativeEvent.layout;
    if (this.state.width !== width || this.state.height !== height) {
      this.setState({ width, height });
    }
  };
}
