// @flow
import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import type { ClippedViewProps } from './types';
import { ClippedFragment } from './Fragment';

type StateType = {
  width: ?number,
  height: ?number,
};

export class ClippedView extends Component<ClippedViewProps, StateType> {
  constructor(props: ClippedViewProps) {
    super(props);
    this.state = {
      width: props.width,
      height: props.height,
    };
  }

  renderContent(width: number, height: number, debug?: boolean) {
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

  render() {
    const {
      style,
      children,
      debug,
      left = 0, // eslint-disable-line
      top = 0, // eslint-disable-line
      right = 0, // eslint-disable-line
      bottom = 0, // eslint-disable-line
      leftRotate = 0, // eslint-disable-line
      topRotate = 0, // eslint-disable-line
      rightRotate = 0, // eslint-disable-line
      bottomRotate = 0, // eslint-disable-line
      width: propsWidth, // eslint-disable-line
      height: propsHeight, // eslint-disable-line
      ...otherProps
    } = this.props;
    const { width, height } = this.state;
    return (
      <View style={style} onLayout={this.onLayout} {...otherProps}>
        <View style={{ opacity: 0 }} collapsable={false}>
          {children}
        </View>
        {debug && width && height ? this.renderContent(width, height, debug) : undefined}
        {width && height ? this.renderContent(width, height) : undefined}
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
