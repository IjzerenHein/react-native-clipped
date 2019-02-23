// @flow
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { observable } from 'mobx';
// @flow
import { inject, observer, Provider } from 'mobx-react';

export class Store {
  constructor() {
    this._debug = observable.box(false);
  }

  get debug() {
    return this._debug.get();
  }
  set debug(val) {
    this._debug.set(val);
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
