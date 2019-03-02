// @flow
export type ClippedLayoutName = 'rows' | 'columns' | 'rows2';

export type ClippedLayoutType = (
  index: number,
  count: number
) => {
  left?: number,
  right?: number,
  top?: number,
  bottom?: number,
  leftRotate?: number,
  rightRotate?: number,
  topRotate?: number,
  bottomRotate?: number,
};

export const ClippedLayouts: {
  [ClippedLayoutName]: ClippedLayoutType,
} = {
  rows: (index, count) => ({
    left: index / count,
    right: (count - 1 - index) / count,
  }),
  columns: (index, count) => ({
    top: index / count,
    bottom: (count - 1 - index) / count,
  }),
  rows2: (index, count) => ({
    left: index / count,
    leftRotate: 0.5,
    right: (count - 1 - index) / count,
    rightRotate: 0.5,
  }),
};

export function resolveLayout(layout: ClippedLayoutName | ClippedLayoutType): ClippedLayoutType {
  if (typeof layout === 'string') {
    const dsl = ClippedLayouts[layout];
    if (!dsl) throw new Error(`[Clipped] Invalid layout specified: ${layout}`);
    layout = dsl;
  }
  if (!layout) {
    throw new Error(`[Clipped] Invalid layout specified: ${layout}`);
  }
  return layout;
}
