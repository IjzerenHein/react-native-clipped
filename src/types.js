// @flow
import { View } from 'react-native';

export type ClippedAnimationProps = {
  style?: View.propTypes.style,
  children: any,
  animation: string,
  move: boolean,
  fade: boolean,
  duration?: number,
  delay?: number,
  easing?: (t: number) => number,
  useNativeDriver?: boolean,
  width?: number,
  height?: number,
  debug?: boolean,
};

export type ClippedViewProps = {
  style?: View.propTypes.style,
  children: any,
  left?: number,
  right?: number,
  top?: number,
  bottom?: number,
  leftRotate?: number,
  rightRotate?: number,
  bottomRotate?: number,
  topRotate?: number,
  width?: number,
  height?: number,
  debug?: boolean,
};
