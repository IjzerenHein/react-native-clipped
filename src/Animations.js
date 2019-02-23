// @flow
import React from 'react';
import { View, Animated } from 'react-native';
import { ClippedFragment } from './Fragment';

function arc(animValue: any): any {
  return Animated.multiply(animValue, animValue);
}

function arc2(animValue: any): any {
  const sub = Animated.subtract(1, animValue);
  return Animated.subtract(1, Animated.multiply(sub, sub));
}

const mul = Animated.multiply;
const add = Animated.add;
const sub = Animated.subtract;
const div = Animated.divide;

const animations = {
  slideInLeft: [{ translateX: [-1, 0] }],
  slideInRight: [{ translateX: [1, 0] }],
  slideInUp: [{ translateY: [1, 0] }],
  slideInDown: [{ translateY: [-1, 0] }],
  slideOutLeft: [{ exit: true, translateX: [0, -1] }],
  slideOutRight: [{ exit: true, translateX: [0, 1] }],
  slideOutUp: [{ exit: true, translateY: [0, -1] }],
  slideOutDown: [{ exit: true, translateY: [0, 1] }],
  openSlidingDoors: [
    { exit: true, width: 0.5, translateX: [0, -1] },
    { left: 0.5, width: 0.5, translateX: [0, 1] },
  ],
  closeSlidingDoors: [
    { width: 0.5, translateX: [-1, 0] },
    { left: 0.5, width: 0.5, translateX: [1, 0] },
  ],
  openSlidingDoorsVertical: [
    { exit: true, height: 0.5, translateY: [0, -1] },
    { top: 0.5, height: 0.5, translateY: [0, 1] },
  ],
  closeSlidingDoorsVertical: [
    { height: 0.5, translateY: [-1, 0] },
    { top: 0.5, height: 0.5, translateY: [1, 0] },
  ],
  growCenter: [{ scaleX: [0.001, 1], scaleY: [0.001, 1] }],
  shrinkCenter: [{ exit: true, scaleX: [1, 0.001], scaleY: [1, 0.001] }],
  flipInX: [{ rotateX: ['90deg', '0deg'], overlayColor: 'black', overlayOpacity: [0.5, 0] }],
  flipOutX: [{ exit: true, rotateX: ['0deg', '90deg'] }],
  flipInY: [{ rotateY: ['90deg', '0deg'] }],
  flipOutY: [{ exit: true, rotateY: ['0deg', '90deg'] }],
  harmonicaInX: [
    {
      height: 0.5,
      translateY: a => mul(sub(1, arc2(a)), 0.25),
      //translateY: a => mul(arc2(a), 0.25),
      rotateX: ['90deg', '0deg'],
      overlayColor: 'white',
      overlayOpacity: [0.8, 0],
      // perspective: 10,
    },
    {
      height: 0.5,
      top: 0.5,
      translateY: a => mul(sub(1, arc2(a)), -0.25),
      //translateY: [-0.25, 0],
      rotateX: ['270deg', '360deg'],
      overlayColor: 'black',
      overlayOpacity: [0.8, 0],
      // perspective: 10,
    },
  ],
};

export function resolveAnimation(animation: any) {
  if (typeof animation === 'string') {
    const dsl = animations[animation];
    if (!dsl) throw new Error(`[Clipped] Invalid animation specified: ${animation}`);
    animation = dsl;
  }
  if (!Array.isArray(animation)) {
    throw new Error(`[Clipped] Invalid animation specified, not an array: ${animation}`);
  }
  if (!animation.length) {
    throw new Error(`[Clipped] Invalid animation specified, array is empty: ${animation}`);
  }
  return animation;
}

export function isExitAnimation(animation: any) {
  animation = resolveAnimation(animation);
  return animation[0].exit || false;
}

export function renderAnimation(
  animation: any,
  move: boolean,
  fade: boolean,
  props: any,
  animValue: Animated.Value,
  width: number,
  height: number
) {
  animation = resolveAnimation(animation);
  const isExitAnimation = animation[0].exit || false;
  const children = animation.map((anim, idx) => {
    const vals: any = {
      move,
      left: 0,
      top: 0,
      width,
      height,
      originalWidth: width,
      originalHeight: height,
    };
    if (fade) {
      vals.opacity = animValue.interpolate({
        inputRange: [0, 1],
        outputRange: isExitAnimation ? [1, 0] : [0, 1],
      });
    }
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
    return <ClippedFragment key={idx} {...props} {...vals} />;
  });
  return (
    <View
      style={[
        props.style,
        {
          width,
          height,
          overflow: move ? 'visible' : 'hidden',
        },
      ]}>
      {children}
    </View>
  );
}
