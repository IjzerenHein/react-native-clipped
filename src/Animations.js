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
  | 'slideLeft'
  | 'slideRight'
  | 'slideUp'
  | 'slideDown'
  | 'slideLeftUp'
  | 'slideRightUp'
  | 'slideLeftDown'
  | 'slideRightDown'
  | 'insideOut'
  | 'insideOutX'
  | 'insideOutY'
  | 'outsideIn'
  | 'outsideInX'
  | 'outsideInY';

//| 'growTiles';

export type ClippedAnimationType = any;

export type ClippedAnimation = ClippedAnimationName | ClippedAnimationType;

export const ClippedAnimations: { [ClippedAnimationName]: ClippedAnimationType } = {
  slideLeft: [{ translateX: [1, 0] }],
  slideRight: [{ translateX: [-1, 0] }],
  slideUp: [{ translateY: [1, 0] }],
  slideDown: [{ translateY: [-1, 0] }],
  slideLeftUp: [{ translateX: [1, 0], translateY: [1, 0] }],
  slideLeftDown: [{ translateX: [1, 0], translateY: [-1, 0] }],
  slideRightUp: [{ translateX: [-1, 0], translateY: [1, 0] }],
  slideRightDown: [{ translateX: [-1, 0], translateY: [-1, 0] }],
  insideOut: [{ scaleX: [0.001, 1], scaleY: [0.001, 1], move: false }],
  insideOutX: [
    { width: 0.5, translateX: [0.5, 0], hideMultiplier: 1 },
    { left: 0.5, width: 0.5, translateX: [-0.5, 0], hideMultiplier: 1 },
  ],
  insideOutY: [
    { height: 0.5, translateY: [0.5, 0], hideMultiplier: 1 },
    { top: 0.5, height: 0.5, translateY: [-0.5, 0], hideMultiplier: 1 },
  ],
  outsideIn: [
    { width: 0.5, translateX: [-0.5, 0], move: false, hideMultiplier: 1 },
    { left: 0.5, width: 0.5, translateX: [0.5, 0], move: false, hideMultiplier: 1 },
    { height: 0.5, translateY: [-0.5, 0], move: false, hideMultiplier: 1 },
    { top: 0.5, height: 0.5, translateY: [0.5, 0], move: false, hideMultiplier: 1 },
  ],
  outsideInX: [
    { width: 0.5, translateX: [-0.5, 0], move: false, hideMultiplier: 1 },
    { left: 0.5, width: 0.5, translateX: [0.5, 0], move: false, hideMultiplier: 1 },
  ],
  outsideInY: [
    { height: 0.5, translateY: [-0.5, 0], move: false, hideMultiplier: 1 },
    { top: 0.5, height: 0.5, translateY: [0.5, 0], move: false, hideMultiplier: 1 },
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
