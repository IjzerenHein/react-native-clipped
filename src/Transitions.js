// @flow
import type { ClippedAnimationName } from './Animations';

export type ClippedTransitionName =
  | 'slideLeft'
  | 'slideRight'
  | 'slideUp'
  | 'slideDown'
  | 'slidingDoors'
  | 'slidingDoorsVertical'
  | 'center';

export type ClippedTransitionType = {
  show: ClippedAnimationName,
  hide: ClippedAnimationName,
};

export const ClippedTransitions: { [ClippedTransitionName]: ClippedTransitionType } = {
  slideLeft: {
    show: 'slideInLeft',
    hide: 'slideOutLeft',
  },
  slideRight: {
    show: 'slideInRight',
    hide: 'slideOutRight',
  },
  slideUp: {
    show: 'slideInUp',
    hide: 'slideOutUp',
  },
  slideDown: {
    show: 'slideInDown',
    hide: 'slideOutDown',
  },
  slidingDoors: {
    show: 'closeSlidingDoors',
    hide: 'openSlidingDoors',
  },
  slidingDoorsVertical: {
    show: 'closeSlidingDoorsVertical',
    hide: 'openSlidingDoorsVertical',
  },
  center: {
    show: 'growCenter',
    hide: 'shrinkCenter',
  },
};

export function resolveTransition(
  transition: ClippedTransitionName | ClippedTransitionType
): ClippedTransitionType {
  if (typeof transition === 'string') {
    const dsl = ClippedTransitions[transition];
    if (!dsl) throw new Error(`[Clipped] Invalid transition specified: ${transition}`);
    transition = dsl;
  }
  if (!transition) {
    throw new Error(`[Clipped] Invalid transition specified: ${transition}`);
  }
  return transition;
}
