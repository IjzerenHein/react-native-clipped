// @flow
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { storeObserver, Store } from '../store';
import { Option, Label } from '../components';
import { ViewExplorerComponent } from './ViewExplorerComponent';
import { StoreViewComponent } from '../store/StoreViewComponent';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'column',
    flex: 1,
  },
  header: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingTop: 8,
  },
  headerRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstCol: {
    flex: 0.5,
  },
  col: {
    flex: 1,
  },
});

type PropsType = {
  store: Store,
};

export const ViewExplorerScreen = storeObserver(
  class ViewExplorerScreen extends Component<PropsType> {
    _storeComponent = new StoreViewComponent({
      shape: 'square',
      content: 'red',
      size: 'medium',
    });

    render() {
      const { store } = this.props;
      const { debug } = store;
      const storeComponent = this._storeComponent;
      const header = (
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <Option
              storeComponent={storeComponent}
              label="Content"
              name="content"
              values={storeComponent.contents}
            />
            <Option
              storeComponent={storeComponent}
              label="Size"
              name="size"
              values={storeComponent.sizes}
            />
            <Option
              storeComponent={storeComponent}
              label="Shape"
              name="shape"
              values={storeComponent.shapes}
            />
          </View>
          <View style={styles.row}>
            <Label style={styles.firstCol} />
            <Label style={styles.col}>Value</Label>
            <Label style={styles.col}>Rotation</Label>
          </View>
          <View style={styles.row}>
            <Label style={styles.firstCol}>Left</Label>
            <Option
              storeComponent={storeComponent}
              label="Left"
              name="left"
              slider
              minimumValue={0}
              maximumValue={1}
            />
            <Option
              storeComponent={storeComponent}
              label="Rotation"
              name="leftRotation"
              slider
              minimumValue={-1}
              maximumValue={1}
            />
          </View>
          <View style={styles.row}>
            <Label style={styles.firstCol}>Right</Label>
            <Option
              storeComponent={storeComponent}
              label="Right"
              name="right"
              slider
              minimumValue={0}
              maximumValue={1}
            />
            <Option
              storeComponent={storeComponent}
              label="Rotation"
              name="rightRotation"
              slider
              minimumValue={-1}
              maximumValue={1}
            />
          </View>
          <View style={styles.row}>
            <Label style={styles.firstCol}>Top</Label>
            <Option
              storeComponent={storeComponent}
              label="Top"
              name="top"
              slider
              minimumValue={0}
              maximumValue={1}
            />
            <Option
              storeComponent={storeComponent}
              label="Rotation"
              name="topRotation"
              slider
              minimumValue={-1}
              maximumValue={1}
            />
          </View>
          <View style={styles.row}>
            <Label style={styles.firstCol}>Bottom</Label>
            <Option
              storeComponent={storeComponent}
              label="Bottom"
              name="bottom"
              slider
              minimumValue={0}
              maximumValue={1}
            />
            <Option
              storeComponent={storeComponent}
              label="Rotation"
              name="bottomRotation"
              slider
              minimumValue={-1}
              maximumValue={1}
            />
          </View>
        </View>
      );

      return (
        <View style={styles.container}>
          {header}
          <ViewExplorerComponent storeComponent={storeComponent} debug={debug} />
        </View>
      );
    }
  }
);
