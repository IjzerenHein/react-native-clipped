// @flow
export type ContentType = 'image1' | 'image2' | 'red' | 'aqua' | 'cyan' | 'aero' | 'azure';
export type SizeType = 'tiny' | 'small' | 'medium' | 'large' | 'max';
export type ShapeType =
  | 'circle'
  | 'square'
  | 'roundedSquare'
  | 'rect13'
  | 'rect31'
  | 'rect16'
  | 'rect61';
export type ShapeFnType = (input: { width: number, height: number }) => any;
export type ShapesType = { [ShapeType]: ShapeFnType };
