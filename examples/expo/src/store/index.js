// @flow
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { observable } from 'mobx';
import { inject, observer, Provider } from 'mobx-react';

export class Store {
  constructor() {
    this._debug = observable.box(false);
    this._runId = observable.box(0);
  }

  get debug(): boolean {
    return this._debug.get();
  }
  set debug(val: boolean) {
    this._debug.set(val);
  }

  get runId(): number {
    return this._runId.get();
  }
  set runId(val: number) {
    this._runId.set(val);
  }
}

export class StoreProvider extends PureComponent {
  state = {
    store: new Store(),
  };

  render() {
    return <Provider store={this.state.store} {...this.props} />;
  }
}

export function storeObserver(WrappedComponent) {
  return inject('store')(observer(WrappedComponent));
}

export const StorePropType = PropTypes.any.isRequired;
