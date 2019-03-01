// @flow
import React, { PureComponent } from 'react';
import { observable } from 'mobx';
import type { IObservableValue } from 'mobx';
import { inject, observer, Provider } from 'mobx-react';
import { StoreViewComponent } from './StoreViewComponent';

export class Store {
  _debug: IObservableValue<boolean>;
  _runId: IObservableValue<number>;

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

export class StoreProvider extends PureComponent<{}, { store: Store }> {
  state = {
    store: new Store(),
  };

  render() {
    return <Provider store={this.state.store} {...this.props} />;
  }
}

export function storeObserver(WrappedComponent: any) {
  return inject('store')(observer(WrappedComponent));
}

//export StoreViewComponent;
