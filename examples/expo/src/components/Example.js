// @flow
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text, ImageBackground } from 'react-native';
import type { ShapeType, ContentType, SizeType, ShapeFnType } from './types';

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#00000080',
  },
});

type PropsType = {
  content: ContentType,
  size: SizeType,
  shape: ShapeType,
  style?: any,
  label?: string,
};

const MAX_WIDTH = Dimensions.get('window').width;
const MAX_HEIGHT = Dimensions.get('window').height;

const COLORS: { [ContentType]: string } = {
  red: '#FC4445',
  aqua: '#3FEEE6',
  cyan: '#55BCC9',
  aero: '#97CAEF',
  azure: '#CAFAFE',
};

export const CONTENTS: { [ContentType]: any } = {
  image1: { imageSource: require('../assets/eclipse.jpg') },
  image2: { imageSource: require('../assets/pizza.jpg') },
  red: { backgroundColor: COLORS.red },
  aqua: { backgroundColor: COLORS.aqua },
  cyan: { backgroundColor: COLORS.cyan },
  aero: { backgroundColor: COLORS.aero },
  azure: { backgroundColor: COLORS.azure },
};

export const SHAPES: { [ShapeType]: ShapeFnType } = {
  circle: ({ width, height }) => ({
    borderRadius: Math.min(width, height) / 2,
  }),
  square: () => ({}),
  roundedSquare: ({ width, height }) => ({
    borderRadius: Math.min(width, height) / 6,
  }),
  rect13: ({ height }) => ({
    height: height / 4,
  }),

  rect31: ({ width }) => ({
    width: width / 4,
  }),
  rect61: ({ height }) => ({
    height: height / 6,
  }),
  rect16: ({ width }) => ({
    width: width / 6,
  }),
};

export const SIZES = {
  tiny: {
    width: 16,
    height: 16,
  },
  small: {
    width: MAX_WIDTH / 4,
    height: MAX_WIDTH / 4,
  },
  medium: {
    width: MAX_WIDTH / 2,
    height: MAX_WIDTH / 2,
  },
  large: {
    width: MAX_WIDTH - 40,
    height: MAX_WIDTH - 40,
  },
  max: {
    width: MAX_WIDTH,
    height: MAX_HEIGHT,
  },
};

export class Example extends Component<PropsType> {
  static defaultProps = {
    size: 'large',
    shape: 'rect13',
    content: 'cyan',
  };

  render() {
    const { size, shape, content, label, style } = this.props;
    const sizeStyle = SIZES[size];
    const contentProps = CONTENTS[content];

    const containerStyle = {
      ...sizeStyle,
      ...SHAPES[shape](sizeStyle),
    };
    if (contentProps.backgroundColor) {
      containerStyle.backgroundColor = contentProps.backgroundColor;
    }
    if (size === 'max') {
      containerStyle.margin = 0;
      containerStyle.height = undefined;
      containerStyle.flex = 1;
    }

    const children = label ? <Text style={styles.text}>{label}</Text> : undefined;

    if (contentProps.imageSource) {
      return (
        <ImageBackground
          style={[styles.container, containerStyle, style]}
          source={contentProps.imageSource}>
          {children}
        </ImageBackground>
      );
    } else {
      return <View style={[styles.container, containerStyle, style]}>{children}</View>;
    }
  }
}
