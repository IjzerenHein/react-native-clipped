// @flow
import { ClippedFragment } from './Fragment';
import { ClippedView } from './View';
import { ClippedTransition } from './Transition';
import { ClippedAnimations, isExitAnimation as isClippedExitAnimation } from './Animations';
import { ClippedSeries } from './Series';
import { ClippedLayouts } from './Layouts';
import type { ClippedAnimationName } from './Animations';
import type { ClippedLayoutName } from './Layouts';

export const Fragment = ClippedFragment;
export const View = ClippedView;
export const Transition = ClippedTransition;
export const Series = ClippedSeries;
export const Animations: Array<ClippedAnimationName> = Object.keys(ClippedAnimations);
export const Layouts: Array<ClippedLayoutName> = Object.keys(ClippedLayouts);
export const isExitAnimation = isClippedExitAnimation;
