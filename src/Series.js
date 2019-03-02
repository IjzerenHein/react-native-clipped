// @flow
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { ClippedView } from './View';
import type { ClippedLayoutName, ClippedLayoutType } from './Layouts';
import { resolveLayout } from './Layouts';

export type ClippedSeriesProps = {
  style?: View.propTypes.style,
  children: any,
  layout: ClippedLayoutName | ClippedLayoutType,
  debug?: boolean,
};

export class ClippedSeries extends Component<ClippedSeriesProps> {
  render() {
    const { style, children, layout, debug, ...otherProps } = this.props;
    const layoutFn = resolveLayout(layout);
    return (
      <View style={style} {...otherProps}>
        {React.Children.map(children, (child, index) => {
          return (
            <ClippedView
              key={index}
              style={index ? StyleSheet.absoluteFill : undefined}
              debug={debug}
              {...layoutFn(index, React.Children.count(children))}>
              {child}
            </ClippedView>
          );
        })}
      </View>
    );
  }
}
