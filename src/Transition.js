// @flow
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { ClippedView } from './View';
import type { ClippedTransitionType } from './Transitions';
import { ClippedTransitions } from './Transitions';

export type ClippedTransitionProps = {
  style?: View.propTypes.style,
  children: any,
  // Animation props
  transition: ClippedTransitionType,
  duration?: number,
  delay?: number,
  easing?: (t: number) => number,
  useNativeDriver?: boolean,
  onTransitionEnd?: () => void,
  // Debug props
  debug?: boolean,
  width?: number,
  height?: number,
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
      width: props.width,
      height: props.height,
      child: React.Children.only(props.children),
      prevChildren: [],
    };
  }

  static getDerivedStateFromProps(props: ClippedTransitionProps, state: StateType) {
    let newState: any = null;

    if (props.width !== undefined && props.height !== undefined) {
      if (state.width !== props.width || state.height !== props.height) {
        newState = {
          width: props.width,
          height: props.height,
        };
      }
    }

    const child = React.Children.only(props.children);

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
      transition, // eslint-disable-line
      duration, // eslint-disable-line
      delay, // eslint-disable-line
      easing, // eslint-disable-line
      useNativeDriver, // eslint-disable-line
      onTransitionEnd, // eslint-disable-line
      // Optimisation props
      width: propsWidth, // eslint-disable-line
      height: propsHeight, // eslint-disable-line
      // Debug props
      debug,
      ...otherProps
    } = this.props;

    const { child, prevChildren } = this.state;
    const children = child ? [...prevChildren, child] : prevChildren;
    const { show, hide } = ClippedTransitions[transition];
    return (
      <View style={style} {...otherProps}>
        {children.map(child => {
          const isHiding = child !== this.state.child;
          return (
            <ClippedView
              key={child.key}
              style={isHiding ? StyleSheet.absoluteFill : undefined}
              animation={isHiding ? hide : show}
              duration={duration}
              delay={delay}
              easing={easing}
              useNativeDriver={useNativeDriver}
              onAnimationEnd={
                isHiding
                  ? () => {
                      const idx = this.state.prevChildren.indexOf(child);
                      if (idx >= 0) {
                        const prevChildren = this.state.prevChildren.slice(0);
                        prevChildren.splice(idx, 1);
                        this.setState({
                          prevChildren,
                        });
                      }
                    }
                  : onTransitionEnd
              }
              debug={debug}>
              {child}
            </ClippedView>
          );
        })}
      </View>
    );
  }
}
