// @flow
import { observable } from 'mobx';
import type { IObservableValue } from 'mobx';
import { SHAPES, CONTENTS, SIZES } from '../components/Example';
import type { SizeType, ShapeType, ContentType } from '../components/types';

const SHAPES_ARRAY = Object.keys(SHAPES);
const CONTENTS_ARRAY = Object.keys(CONTENTS);
const SIZES_ARRAY = Object.keys(SIZES);

const SIDE_VALUES = [
  0,
  0.05,
  0.1,
  0.15,
  0.2,
  0.25,
  0.3,
  0.35,
  0.4,
  0.45,
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  1,
];

const ROTATION_VALUES = [
  -0.5,
  -0.4,
  -0.3,
  -0.25,
  -0.2,
  -0.15,
  -0.1,
  -0.05,
  0,
  0.05,
  0.1,
  0.15,
  0.2,
  0.25,
  0.3,
  0.4,
  0.5,
];

export class StoreViewComponent {
  _content: IObservableValue<ContentType>;
  _size: IObservableValue<SizeType>;
  _shape: IObservableValue<ShapeType>;
  _left: IObservableValue<number>;
  _leftRotation: IObservableValue<number>;
  _top: IObservableValue<number>;
  _topRotation: IObservableValue<number>;
  _right: IObservableValue<number>;
  _rightRotation: IObservableValue<number>;
  _bottom: IObservableValue<number>;
  _bottomRotation: IObservableValue<number>;

  constructor(config: {
    shape: ShapeType,
    content: ContentType,
    size: SizeType,
    left?: number,
    leftRotation?: number,
    top?: number,
    topRotation?: number,
    right?: number,
    rightRotation?: number,
    bottom?: number,
    bottomRotation?: number,
  }) {
    const {
      shape,
      content,
      size,
      left,
      leftRotation,
      top,
      topRotation,
      right,
      rightRotation,
      bottom,
      bottomRotation,
    } = config;
    this._content = observable.box(content);
    this._size = observable.box(size);
    this._shape = observable.box(shape);
    this._left = observable.box(left || 0);
    this._leftRotation = observable.box(leftRotation || 0);
    this._top = observable.box(top || 0);
    this._topRotation = observable.box(topRotation || 0);
    this._right = observable.box(right || 0);
    this._rightRotation = observable.box(rightRotation || 0);
    this._bottom = observable.box(bottom || 0);
    this._bottomRotation = observable.box(bottomRotation || 0);
  }

  get shape(): ShapeType {
    return this._shape.get();
  }
  set shape(val: ShapeType) {
    this._shape.set(val);
  }
  get shapes(): Array<ShapeType> {
    return SHAPES_ARRAY;
  }

  get content(): ContentType {
    return this._content.get();
  }
  set content(val: ContentType) {
    this._content.set(val);
  }
  get contents(): Array<ContentType> {
    return CONTENTS_ARRAY;
  }

  get size(): SizeType {
    return this._size.get();
  }
  set size(val: SizeType) {
    this._size.set(val);
  }
  get sizes(): Array<SizeType> {
    return SIZES_ARRAY;
  }

  get sideValues(): Array<number> {
    return SIDE_VALUES;
  }
  get rotationValues(): Array<number> {
    return ROTATION_VALUES;
  }

  get left(): number {
    return this._left.get();
  }
  set left(val: number) {
    this._left.set(val);
  }
  get leftRotation(): number {
    return this._leftRotation.get();
  }
  set leftRotation(val: number) {
    this._leftRotation.set(val);
  }

  get right(): number {
    return this._right.get();
  }
  set right(val: number) {
    this._right.set(val);
  }
  get rightRotation(): number {
    return this._rightRotation.get();
  }
  set rightRotation(val: number) {
    this._rightRotation.set(val);
  }

  get top(): number {
    return this._top.get();
  }
  set top(val: number) {
    this._top.set(val);
  }
  get topRotation(): number {
    return this._topRotation.get();
  }
  set topRotation(val: number) {
    this._topRotation.set(val);
  }

  get bottom(): number {
    return this._bottom.get();
  }
  set bottom(val: number) {
    this._bottom.set(val);
  }
  get bottomRotation(): number {
    return this._bottomRotation.get();
  }
  set bottomRotation(val: number) {
    this._bottomRotation.set(val);
  }
}
