// @flow

/*
function arc(animValue: any): any {
  return Animated.multiply(animValue, animValue);
}

function arc2(animValue: any): any {
  const sub = Animated.subtract(1, animValue);
  return Animated.subtract(1, Animated.multiply(sub, sub));
}*/

export type ClippedAnimationName =
  | 'clipLeft'
  | 'clipRight'
  | 'clipUp'
  | 'clipDown'
  | 'clipLeftUp'
  | 'clipRightUp'
  | 'clipLeftDown'
  | 'clipRightDown'
  | 'clipInsideOut'
  | 'clipInsideOutX'
  | 'clipInsideOutY'
  | 'clipOutsideIn'
  | 'clipOutsideInX'
  | 'clipOutsideInY'
  | 'slideLeft'
  | 'slideRight'
  | 'slideUp'
  | 'slideDown'
  | 'slideLeftUp'
  | 'slideRightUp'
  | 'slideLeftDown'
  | 'slideRightDown'
  | 'slideInsideOut'
  | 'slideInsideOutX'
  | 'slideInsideOutY';

//| 'growTiles';

export type ClippedAnimationType = any;

export type ClippedAnimation = ClippedAnimationName | ClippedAnimationType;

export const ClippedAnimations: { [ClippedAnimationName]: ClippedAnimationType } = {
  clipLeft: [{ translateX: [1, 0] }],
  clipRight: [{ translateX: [-1, 0] }],
  clipUp: [{ translateY: [1, 0] }],
  clipDown: [{ translateY: [-1, 0] }],
  clipLeftUp: [{ translateX: [1, 0], translateY: [1, 0] }],
  clipLeftDown: [{ translateX: [1, 0], translateY: [-1, 0] }],
  clipRightUp: [{ translateX: [-1, 0], translateY: [1, 0] }],
  clipRightDown: [{ translateX: [-1, 0], translateY: [-1, 0] }],
  clipInsideOut: [{ scaleX: [0.001, 1], scaleY: [0.001, 1] }],
  clipInsideOutX: [
    { width: 0.5, translateX: [0.5, 0], hideMultiplier: 1 },
    { left: 0.5, width: 0.5, translateX: [-0.5, 0], hideMultiplier: 1 },
  ],
  clipInsideOutY: [
    { height: 0.5, translateY: [0.5, 0], hideMultiplier: 1 },
    { top: 0.5, height: 0.5, translateY: [-0.5, 0], hideMultiplier: 1 },
  ],
  clipOutsideIn: [
    { width: 0.5, translateX: [-0.5, 0], hideMultiplier: 1 },
    { left: 0.5, width: 0.5, translateX: [0.5, 0], hideMultiplier: 1 },
    { height: 0.5, translateY: [-0.5, 0], hideMultiplier: 1 },
    { top: 0.5, height: 0.5, translateY: [0.5, 0], hideMultiplier: 1 },
  ],
  clipOutsideInX: [
    { width: 0.5, translateX: [-0.5, 0], hideMultiplier: 1 },
    { left: 0.5, width: 0.5, translateX: [0.5, 0], hideMultiplier: 1 },
  ],
  clipOutsideInY: [
    { height: 0.5, translateY: [-0.5, 0], hideMultiplier: 1 },
    { top: 0.5, height: 0.5, translateY: [0.5, 0], hideMultiplier: 1 },
  ],
  slideLeft: [{ translateX: [1, 0], move: true }],
  slideRight: [{ translateX: [-1, 0], move: true }],
  slideUp: [{ translateY: [1, 0], move: true }],
  slideDown: [{ translateY: [-1, 0], move: true }],
  slideLeftUp: [{ translateX: [1, 0], translateY: [1, 0], move: true }],
  slideLeftDown: [{ translateX: [1, 0], translateY: [-1, 0], move: true }],
  slideRightUp: [{ translateX: [-1, 0], translateY: [1, 0], move: true }],
  slideRightDown: [{ translateX: [-1, 0], translateY: [-1, 0], move: true }],
  slideInsideOut: [
    {
      width: 0.5,
      height: 0.5,
      translateX: [0.5, 0],
      translateY: [0.5, 0],
      hideMultiplier: 1,
      move: true,
    },
    {
      left: 0.5,
      width: 0.5,
      height: 0.5,
      translateX: [-0.5, 0],
      translateY: [0.5, 0],
      hideMultiplier: 1,
      move: true,
    },
    {
      width: 0.5,
      height: 0.5,
      top: 0.5,
      translateX: [0.5, 0],
      translateY: [-0.5, 0],
      hideMultiplier: 1,
      move: true,
    },
    {
      left: 0.5,
      top: 0.5,
      width: 0.5,
      height: 0.5,
      translateX: [-0.5, 0],
      translateY: [-0.5, 0],
      hideMultiplier: 1,
      move: true,
    },
  ],
  slideInsideOutX: [
    { width: 0.5, translateX: [0.5, 0], hideMultiplier: 1, move: true },
    { left: 0.5, width: 0.5, translateX: [-0.5, 0], hideMultiplier: 1, move: true },
  ],
  slideInsideOutY: [
    { height: 0.5, translateY: [0.5, 0], hideMultiplier: 1, move: true },
    { top: 0.5, height: 0.5, translateY: [-0.5, 0], hideMultiplier: 1, move: true },
  ],

  /*center: [
    { width: 0.5, height: 0.5, translateX: [0.5, 0], translateY: [0.5, 0] },
    { width: 0.5, height: 0.5, left: 0.5, translateX: [-0.5, 0], translateY: [0.5, 0] },
    { width: 0.5, height: 0.5, top: 0.5, translateX: [0.5, 0], translateY: [-0.5, 0] },
    {
      width: 0.5,
      height: 0.5,
      left: 0.5,
      top: 0.5,
      translateX: [-0.5, 0],
      translateY: [-0.5, 0],
      move: true,
    },
  ],*/

  // Slide out

  /*growTiles: [
    { width: 0.5, height: 0.5, scaleX: [0.001, 1], scaleY: [0.001, 1] },
    { width: 0.5, height: 0.5, left: 0.5, scaleX: [0.001, 1], scaleY: [0.001, 1] },
    { width: 0.5, height: 0.5, top: 0.5, scaleX: [0.001, 1], scaleY: [0.001, 1] },
    { width: 0.5, height: 0.5, left: 0.5, top: 0.5, scaleX: [0.001, 1], scaleY: [0.001, 1] },
  ],*/
  /*flipInX: [{ rotateX: ['90deg', '0deg'], overlayColor: 'black', overlayOpacity: [0.5, 0] }],
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
  ],*/
};

export function resolveAnimation(animation: ClippedAnimation): ClippedAnimationType {
  if (typeof animation === 'string') {
    const dsl = ClippedAnimations[animation];
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
