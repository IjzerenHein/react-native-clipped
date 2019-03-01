// @flow
import type { ClippedAnimationType } from './Animations';

export type ClippedTransitionType = 'slideLeft' | 'slideRight' | 'slideUp' | 'slideDown';

export const ClippedTransitions: {
  [ClippedTransitionType]: {
    show: ClippedAnimationType,
    hide: ClippedAnimationType,
  },
} = {
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
};
