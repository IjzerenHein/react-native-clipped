// @flow
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';

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
  style: any,
  colors: 'red' | 'aqua' | 'cyan' | 'aero' | 'azure' | string,
  size: 'tiny' | 'small' | 'medium' | 'large' | 'max',
  shape: 'circle' | 'square' | 'rounded' | 'horzRect' | 'vertRect',
  label: string,
  backgroundColor: string,
  imageSource: any,
};

const MAX_WIDTH = Dimensions.get('window').width;
const MAX_HEIGHT = Dimensions.get('window').height;

const COLORS = {
  red: '#FC4445',
  aqua: '#3FEEE6',
  cyan: '#55BCC9',
  aero: '#97CAEF',
  azure: '#CAFAFE',
};

const SHAPES = {
  circle: ({ width, height }) => ({
    borderRadius: Math.min(width, height) / 2,
  }),
  square: () => ({}),
  roundedSquare: ({ width, height }) => ({
    borderRadius: Math.min(width, height) / 6,
  }),

  rect: ({ height }) => ({
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

const SIZES = {
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
    shape: 'rect',
    color: 'cyan',
  };

  render() {
    const { size, shape, color, label, imageSource } = this.props;
    const sizeStyle = SIZES[size];

    const style = {
      ...sizeStyle,
      ...SHAPES[shape](sizeStyle),
      backgroundColor: COLORS[color] || color,
    };
    if (size.label === 'Max') {
      style.margin = 0;
      style.height = undefined;
      style.flex = 1;
    }
    return (
      <View style={[styles.container, this.props.style, style]}>
        <Text style={styles.text}>{label}</Text>
      </View>
    );
  }
}
