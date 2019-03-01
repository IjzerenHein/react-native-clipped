// @flow
import React from 'react';
import { storeObserver, Store } from '../store';
import { FlatButton } from './FlatButton';

export const DebugButton = storeObserver((props: { store: Store }) => {
  const { store } = props;
  return (
    <FlatButton
      style={{ marginRight: 8 }}
      label="Debug"
      onPress={() => {
        store.debug = !store.debug;
      }}
      checked={store.debug}
    />
  );
});
