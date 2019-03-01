// @flow
import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import { ClippedFragment } from './Fragment';
import { resolveAnimation, isExitAnimation } from './Animations';

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
  animation?: string,
  // move: boolean,
  //fade: boolean,
  duration?: number,
  delay?: number,
  easing?: (t: number) => number,
  useNativeDriver?: boolean,

  // Optimisation props
  width?: number,
  height?: number,

  // Debug props
  debug?: boolean,
};

type StateType = {
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
      animValue: undefined,
      anim: undefined,
      width: props.width,
      height: props.height,
    };
  }

  static getDerivedStateFromProps(props: ClippedViewProps, state: StateType) {
    let newState: any = null;
    if (state.width === undefined || state.height === undefined) {
      if (props.width !== undefined && props.height !== undefined) {
        newState = {
          width: props.width,
          height: props.height,
        };
      } else {
        return null;
      }
    }

    if (!state.anim && props.animation) {
      newState = newState || {};
      const { duration, delay, easing, useNativeDriver } = props;
      newState.animValue = new Animated.Value(0);
      newState.anim = Animated.timing(newState.animValue, {
        toValue: 1,
        duration,
        delay,
        easing,
        useNativeDriver,
      });
      newState.anim.start();
    } else if (state.anim && !props.animation) {
      newState = newState || {};
      newState.anim = undefined;
      newState.animValue = undefined;
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
    return result;
  }

  renderAnimation(width: number, height: number, debug?: boolean) {
    // $FlowFixMe
    const animValue: Animated.Value = this.state.animValue;
    const childContent = this.renderFragments(width, height, debug);
    const animation = resolveAnimation(this.props.animation);
    //const isExitAnimation = animation[0].exit || false;
    return animation.map((anim, idx) => {
      const vals: any = {
        //move: this.props.move,
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
      Object.keys(anim).forEach(key => {
        let val = anim[key];
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
            outputRange: val.map(arrVal => (multiplier !== 1 ? arrVal * multiplier : arrVal)),
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
      left = 0, // eslint-disable-line
      top = 0, // eslint-disable-line
      right = 0, // eslint-disable-line
      bottom = 0, // eslint-disable-line
      leftRotate = 0, // eslint-disable-line
      topRotate = 0, // eslint-disable-line
      rightRotate = 0, // eslint-disable-line
      bottomRotate = 0, // eslint-disable-line
      // Animation props
      animation, // eslint-disable-line
      duration, // eslint-disable-line
      delay, // eslint-disable-line
      easing, // eslint-disable-line
      useNativeDriver, // eslint-disable-line
      // Optimisation props
      width: propsWidth, // eslint-disable-line
      height: propsHeight, // eslint-disable-line
      // Debug props
      debug,
      ...otherProps
    } = this.props;
    const { width, height, anim } = this.state;
    return (
      <View
        style={style}
        onLayout={propsWidth || propsHeight ? undefined : this.onLayout}
        {...otherProps}>
        {propsWidth || propsHeight ? (
          undefined
        ) : (
          <View style={{ opacity: 0 }} collapsable={false}>
            {children}
          </View>
        )}
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
