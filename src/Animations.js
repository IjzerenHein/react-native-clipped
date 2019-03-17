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
  | 'concealLeft'
  | 'concealRight'
  | 'concealUp'
  | 'concealDown'
  | 'concealOutsideX'
  | 'concealOutsideY'
  | 'concealCenter'
  | 'concealLeftUp'
  | 'concealRightUp'
  | 'concealLeftDown'
  | 'concealRightDown'
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
  revealLeft: [{ translateX: [1, 0] }],
  concealLeft: [{ exit: true, translateX: [0, -1] }],
  revealRight: [{ translateX: [-1, 0] }],
  concealRight: [{ exit: true, translateX: [0, 1] }],
  revealUp: [{ translateY: [1, 0] }],
  concealUp: [{ exit: true, translateY: [0, -1] }],
  revealDown: [{ translateY: [-1, 0] }],
  concealDown: [{ exit: true, translateY: [0, 1] }],

  revealCenter: [{ scaleX: [0.001, 1], scaleY: [0.001, 1] }],
  concealCenter: [{ exit: true, scaleX: [1, 0.001], scaleY: [1, 0.001] }],
  revealOutsideX: [
    { width: 0.5, translateX: [-0.5, 0] },
    { left: 0.5, width: 0.5, translateX: [0.5, 0] },
  ],
  concealOutsideX: [
    { exit: true, width: 0.5, translateX: [0, -0.5] },
    { left: 0.5, width: 0.5, translateX: [0, 0.5] },
  ],
  revealOutsideY: [
    { height: 0.5, translateY: [-0.5, 0] },
    { top: 0.5, height: 0.5, translateY: [0.5, 0] },
  ],
  concealOutsideY: [
    { exit: true, height: 0.5, translateY: [0, -0.5] },
    { top: 0.5, height: 0.5, translateY: [0, 0.5] },
  ],

  revealLeftUp: [{ translateX: [1, 0], translateY: [1, 0] }],
  concealLeftUp: [{ exit: true, translateX: [0, -1], translateY: [0, -1] }],
  revealLeftDown: [{ translateX: [1, 0], translateY: [-1, 0] }],
  concealLeftDown: [{ exit: true, translateX: [0, -1], translateY: [0, 1] }],
  revealRightUp: [{ translateX: [-1, 0], translateY: [1, 0] }],
  concealRightUp: [{ exit: true, translateX: [0, 1], translateY: [0, -1] }],
  revealRightDown: [{ translateX: [-1, 0], translateY: [-1, 0] }],
  concealRightDown: [{ exit: true, translateX: [0, 1], translateY: [0, 1] }],

  // Slide in
  slideInLeft: [{ translateX: [1, 0], move: true }],
  slideOutLeft: [{ exit: true, translateX: [0, -1], move: true }],
  slideInRight: [{ translateX: [-1, 0], move: true }],
  slideOutRight: [{ exit: true, translateX: [0, 1], move: true }],
  slideInUp: [{ translateY: [1, 0], move: true }],
  slideOutUp: [{ exit: true, translateY: [0, -1], move: true }],
  slideInDown: [{ translateY: [-1, 0], move: true }],
  slideOutDown: [{ exit: true, translateY: [0, 1], move: true }],
  slideInLeftUp: [{ translateX: [1, 0], translateY: [1, 0], move: true }],
  slideOutLeftUp: [{ exit: true, translateX: [0, -1], translateY: [0, -1], move: true }],
  slideInLeftDown: [{ translateX: [1, 0], translateY: [-1, 0], move: true }],
  slideOutLeftDown: [{ exit: true, translateX: [0, -1], translateY: [0, 1], move: true }],
  slideInRightUp: [{ translateX: [-1, 0], translateY: [1, 0], move: true }],
  slideOutRightUp: [{ exit: true, translateX: [0, 1], translateY: [0, -1], move: true }],
  slideInRightDown: [{ translateX: [-1, 0], translateY: [-1, 0], move: true }],
  slideOutRightDown: [{ exit: true, translateX: [0, 1], translateY: [0, 1], move: true }],
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
