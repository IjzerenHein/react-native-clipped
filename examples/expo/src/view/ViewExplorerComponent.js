// @flow
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { observer } from 'mobx-react';
import * as Clipped from 'react-native-clipped';
import { Example } from '../components';
import { StoreViewComponent } from '../store/StoreViewComponent';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type PropsType = {
  style: any,
  storeComponent: StoreViewComponent,
  debug?: boolean,
};

export const ViewExplorerComponent = observer(
  class ViewExplorerComponent extends Component<PropsType> {
    render() {
      const { style, storeComponent, debug } = this.props;
      const {
        size,
        shape,
        content,
        // label,
        left,
        top,
        right,
        bottom,
        leftRotation,
        topRotation,
        rightRotation,
        bottomRotation,
      } = storeComponent;
      return (
        <View style={[styles.container, style]}>
          <Clipped.View
            left={left}
            top={top}
            right={right}
            bottom={bottom}
            leftRotate={leftRotation}
            topRotate={topRotation}
            rightRotate={rightRotation}
            bottomRotate={bottomRotation}
            debug={debug}>
            <Example content={content} size={size} shape={shape} />
          </Clipped.View>
        </View>
      );
    }
  }
);
