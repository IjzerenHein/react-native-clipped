// @flow
import React from 'react';
import { StyleSheet, Animated, View } from 'react-native';

type PropsType = {
  style?: View.propTypes.style,
  children: any,
  width: number,
  height: number,
  move?: boolean,
  originalWidth?: number,
  originalHeight?: number,
  left?: number,
  top?: number,
  translateX?: any,
  translateY?: any,
  scaleX?: any,
  scaleY?: any,
  rotateX?: any,
  rotateY?: any,
  opacity?: any,
  overlayColor?: string,
  overlayOpacity?: any,
  perspective?: number,
};

export const ClippedFragment = (props: PropsType) => {
  const {
    children,
    move = false,
    width,
    height,
    originalWidth,
    originalHeight,
    left = 0,
    top = 0,
    translateX,
    translateY,
    scaleX,
    scaleY,
    rotateX,
    rotateY,
    opacity,
    overlayColor,
    overlayOpacity,
    perspective,
  } = props;
  const outerStyle: any = {
    position: 'absolute',
    left,
    top,
    width,
    height,
    overflow: 'hidden',
    transform: [],
  };
  const innerStyle = {
    position: 'absolute',
    left: -left,
    top: -top,
    width: originalWidth === undefined ? width : originalWidth,
    height: originalHeight === undefined ? height : originalHeight,
    transform: [],
  };
  if (perspective) {
    outerStyle.transform.push({ perspective });
  }
  if (translateX !== undefined) {
    outerStyle.transform.push({ translateX });
    if (!move) innerStyle.transform.push({ translateX: Animated.subtract(0, translateX) });
  }
  if (translateY !== undefined) {
    outerStyle.transform.push({ translateY });
    if (!move) innerStyle.transform.push({ translateY: Animated.subtract(0, translateY) });
  }
  if (scaleX !== undefined) {
    outerStyle.transform.push({ scaleX });
    if (!move) innerStyle.transform.push({ scaleX: Animated.divide(1, scaleX) });
  }
  if (scaleY !== undefined) {
    outerStyle.transform.push({ scaleY });
    if (!move) innerStyle.transform.push({ scaleY: Animated.divide(1, scaleY) });
  }
  if (rotateX !== undefined) {
    outerStyle.transform.push({ rotateX });
    outerStyle.backfaceVisibility = 'hidden';
  }
  if (rotateY !== undefined) {
    outerStyle.transform.push({ rotateY });
    outerStyle.backfaceVisibility = 'hidden';
  }
  if (opacity !== undefined) {
    outerStyle.opacity = opacity;
  }
  let overlay;
  if (overlayColor) {
    overlay = (
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: overlayColor,
          opacity: overlayOpacity || 1,
        }}
      />
    );
  }
  return (
    <Animated.View style={outerStyle}>
      <Animated.View style={innerStyle}>
        {children}
        {overlay}
      </Animated.View>
    </Animated.View>
  );
};
