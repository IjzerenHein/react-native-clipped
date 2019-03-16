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
  | 'revealLeft'
  | 'revealRight'
  | 'revealUp'
  | 'revealDown'
  | 'revealLeftUp'
  | 'revealRightUp'
  | 'revealLeftDown'
  | 'revealRightDown'
  | 'revealOutsideX'
  | 'revealOutsideY'
  | 'revealCenter'
  | 'conceilLeft'
  | 'conceilRight'
  | 'conceilUp'
  | 'conceilDown'
  | 'conceilOutsideX'
  | 'conceilOutsideY'
  | 'conceilCenter'
  | 'slideInLeft'
  | 'slideInRight'
  | 'slideInUp'
  | 'slideInDown'
  | 'slideInLeftUp'
  | 'slideInLeftDown'
  | 'slideInRightUp'
  | 'slideInRightDown'
  | 'slideInCenterX'
  | 'slideInCenterY'
  | 'slideInCenter'
  | 'slideOutLeft'
  | 'slideOutRight'
  | 'slideOutUp'
  | 'slideOutDown'
  | 'slideOutLeftUp'
  | 'slideOutLeftDown'
  | 'slideOutRightUp'
  | 'slideOutRightDown'
  | 'growTiles';

export type ClippedAnimationType = any;

export type ClippedAnimation = ClippedAnimationName | ClippedAnimationType;

export const ClippedAnimations: { [ClippedAnimationName]: ClippedAnimationType } = {
  // Reveal
  revealLeft: [{ translateX: [1, 0] }],
  revealLeftUp: [{ translateX: [1, 0], translateY: [1, 0] }],
  revealLeftDown: [{ translateX: [1, 0], translateY: [-1, 0] }],
  revealRight: [{ translateX: [-1, 0] }],
  revealRightUp: [{ translateX: [-1, 0], translateY: [1, 0] }],
  revealRightDown: [{ translateX: [-1, 0], translateY: [-1, 0] }],
  revealUp: [{ translateY: [1, 0] }],
  revealDown: [{ translateY: [-1, 0] }],
  revealCenter: [{ scaleX: [0.001, 1], scaleY: [0.001, 1] }],
  revealOutsideX: [
    { width: 0.5, translateX: [-0.5, 0] },
    { left: 0.5, width: 0.5, translateX: [0.5, 0] },
  ],
  revealOutsideY: [
    { height: 0.5, translateY: [-0.5, 0] },
    { top: 0.5, height: 0.5, translateY: [0.5, 0] },
  ],

  // Conceil
  conceilLeft: [{ exit: true, translateX: [0, -1] }],
  conceilRight: [{ exit: true, translateX: [0, 1] }],
  conceilUp: [{ exit: true, translateY: [0, -1] }],
  conceilDown: [{ exit: true, translateY: [0, 1] }],
  conceilCenter: [{ exit: true, scaleX: [1, 0.001], scaleY: [1, 0.001] }],
  conceilOutsideX: [
    { exit: true, width: 0.5, translateX: [0, -0.5] },
    { left: 0.5, width: 0.5, translateX: [0, 0.5] },
  ],
  conceilOutsideY: [
    { exit: true, height: 0.5, translateY: [0, -0.5] },
    { top: 0.5, height: 0.5, translateY: [0, 0.5] },
  ],

  // Slide in
  slideInLeft: [{ translateX: [1, 0], move: true }],
  slideInRight: [{ translateX: [-1, 0], move: true }],
  slideInUp: [{ translateY: [1, 0], move: true }],
  slideInDown: [{ translateY: [-1, 0], move: true }],
  slideInLeftUp: [{ translateX: [1, 0], translateY: [1, 0], move: true }],
  slideInLeftDown: [{ translateX: [1, 0], translateY: [-1, 0], move: true }],
  slideInRightUp: [{ translateX: [-1, 0], translateY: [1, 0], move: true }],
  slideInRightDown: [{ translateX: [-1, 0], translateY: [-1, 0], move: true }],
  slideInCenterX: [
    { width: 0.5, translateX: [0.5, 0], move: true },
    { left: 0.5, width: 0.5, translateX: [-0.5, 0], move: true },
  ],
  slideInCenterY: [
    { height: 0.5, translateY: [0.5, 0], move: true },
    { top: 0.5, height: 0.5, translateY: [-0.5, 0], move: true },
  ],
  slideInCenter: [
    { width: 0.5, height: 0.5, translateX: [0.5, 0], translateY: [0.5, 0], move: true },
    { width: 0.5, height: 0.5, left: 0.5, translateX: [-0.5, 0], translateY: [0.5, 0], move: true },
    { width: 0.5, height: 0.5, top: 0.5, translateX: [0.5, 0], translateY: [-0.5, 0], move: true },
    {
      width: 0.5,
      height: 0.5,
      left: 0.5,
      top: 0.5,
      translateX: [-0.5, 0],
      translateY: [-0.5, 0],
      move: true,
    },
  ],

  // Slide out
  slideOutLeft: [{ exit: true, translateX: [0, -1], move: true }],
  slideOutRight: [{ exit: true, translateX: [0, 1], move: true }],
  slideOutUp: [{ exit: true, translateY: [0, -1], move: true }],
  slideOutDown: [{ exit: true, translateY: [0, 1], move: true }],
  slideOutLeftUp: [{ exit: true, translateX: [0, -1], translateY: [0, -1], move: true }],
  slideOutLeftDown: [{ exit: true, translateX: [0, -1], translateY: [0, 1], move: true }],
  slideOutRightUp: [{ exit: true, translateX: [0, 1], translateY: [0, -1], move: true }],
  slideOutRightDown: [{ exit: true, translateX: [0, 1], translateY: [0, 1], move: true }],
  growTiles: [
    { width: 0.5, height: 0.5, scaleX: [0.001, 1], scaleY: [0.001, 1] },
    { width: 0.5, height: 0.5, left: 0.5, scaleX: [0.001, 1], scaleY: [0.001, 1] },
    { width: 0.5, height: 0.5, top: 0.5, scaleX: [0.001, 1], scaleY: [0.001, 1] },
    { width: 0.5, height: 0.5, left: 0.5, top: 0.5, scaleX: [0.001, 1], scaleY: [0.001, 1] },
  ],
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

export function isExitAnimation(animation: ClippedAnimation): boolean {
  animation = resolveAnimation(animation);
  return animation[0].exit || false;
}
