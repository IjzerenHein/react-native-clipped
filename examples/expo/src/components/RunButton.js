// @flow
import React from 'react';
import { storeObserver, Store } from '../store';
import { FlatButton } from './FlatButton';

export const RunButton = storeObserver((props: { store: Store }) => {
  const { store } = props;
  return (
    <FlatButton
      style={{ marginLeft: 8 }}
      label="Re-Run"
      onPress={() => {
        store.runId = store.runId + 1;
      }}
    />
  );
});
