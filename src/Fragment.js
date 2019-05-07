// @flow
import React from 'react';
import { StyleSheet, Animated, View } from 'react-native';

type PropsType = {
  style?: View.propTypes.style,
  children: any,
  width: number,
  height: number,
  move?: boolean,
  debug?: boolean,
  originalWidth?: number,
  originalHeight?: number,
  left?: number,
  top?: number,
  translateX?: any,
  translateY?: any,
  scaleX?: any,
  scaleY?: any,
  rotateZ?: any,
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
    debug = false,
    width,
    height,
    left = 0,
    top = 0,
    translateX,
    translateY,
    scaleX,
    scaleY,
    rotateZ,
    rotateX,
    rotateY,
    opacity,
    overlayColor,
    overlayOpacity,
    perspective,
  } = props;
  const originalWidth = props.originalWidth === undefined ? width : props.originalWidth;
  const originalHeight = props.originalHeight === undefined ? height : props.originalHeight;
  const fragmentStyle: any = {
    position: 'absolute',
    left,
    top,
    width,
    height,
    overflow: 'hidden',
    transform: [],
  };
  const outerStyle: any =
    !move && (originalWidth !== width || originalHeight !== height)
      ? {
          position: 'absolute',
          left: 0,
          top: 0,
          width,
          height,
          overflow: 'hidden',
          transform: [],
        }
      : fragmentStyle;
  const innerStyle: any = {
    position: 'absolute',
    left: -left,
    top: -top,
    width: originalWidth,
    height: originalHeight,
    transform: [],
  };
  if (perspective) {
    outerStyle.transform.push({ perspective });
  }
  if (rotateZ !== undefined) {
    innerStyle.transform.push({ rotateZ: `-${rotateZ}`.replace('--', '') });
  }
  if (translateX !== undefined) {
    if (!move) outerStyle.transform.push({ translateX });
    innerStyle.transform.push({ translateX: move ? translateX : Animated.subtract(0, translateX) });
  }
  if (translateY !== undefined) {
    if (!move) outerStyle.transform.push({ translateY });
    innerStyle.transform.push({ translateY: move ? translateY : Animated.subtract(0, translateY) });
  }
  if (scaleX !== undefined) {
    if (!move) outerStyle.transform.push({ scaleX });
    innerStyle.transform.push({ scaleX: move ? scaleX : Animated.divide(1, scaleX) });
  }
  if (scaleY !== undefined) {
    if (!move) outerStyle.transform.push({ scaleY });
    innerStyle.transform.push({ scaleY: move ? scaleY : Animated.divide(1, scaleY) });
  }
  if (rotateX !== undefined) {
    outerStyle.transform.push({ rotateX });
    outerStyle.backfaceVisibility = 'hidden';
  }
  if (rotateY !== undefined) {
    outerStyle.transform.push({ rotateY });
    outerStyle.backfaceVisibility = 'hidden';
  }
  if (rotateZ !== undefined) {
    outerStyle.transform.push({ rotateZ });
  }

  if (debug) {
    outerStyle.overflow = 'visible';
    outerStyle.backgroundColor = 'rgba(0, 0, 255, 0.2)';
    outerStyle.borderColor = 'royalblue';
    outerStyle.borderWidth = 1;
    outerStyle.borderStyle = 'dashed';
    return (
      <Animated.View style={outerStyle}>
        <Animated.View style={innerStyle}>{children}</Animated.View>
      </Animated.View>
    );
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
  const content = (
    <Animated.View style={outerStyle}>
      <Animated.View style={innerStyle}>
        {children}
        {overlay}
      </Animated.View>
    </Animated.View>
  );
  if (outerStyle !== fragmentStyle) {
    return <View style={fragmentStyle}>{content}</View>;
  } else {
    return content;
  }
};
