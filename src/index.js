// @flow
import { ClippedFragment } from './Fragment';
import { ClippedView } from './View';
import { ClippedTransition } from './Transition';
import { ClippedAnimations } from './Animations';
import { ClippedTransitions } from './Transitions';
import type { ClippedAnimationType } from './Animations';
import type { ClippedTransitionType } from './Transitions';

export const Fragment = ClippedFragment;
export const View = ClippedView;
export const Transition = ClippedTransition;
export const Animations: Array<ClippedAnimationType> = Object.keys(ClippedAnimations);
export const Transitions: Array<ClippedTransitionType> = Object.keys(ClippedTransitions);
