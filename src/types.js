// @flow
import { View } from 'react-native';

export type ClippedViewProps = {
  style?: View.propTypes.style,
  children: any,
  animation: string,
  move: boolean,
  fade: boolean,
  duration?: number,
  delay?: number,
  easing?: (t: number) => number,
  useNativeDriver?: boolean,
};
