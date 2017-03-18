import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import * as reducers from './reducers/reducers';

import App from './components/App';
import Cart from './components/Cart';
import ServiceGroup from './components/ServiceGroup';

const store = createStore(combineReducers(reducers));

const run = () => {
  const state = store.getState();
  render((
    <Provider store={store}>
      <App>
        <Cart />
        <ServiceGroup />
      </App>
    </Provider>
  ), document.getElementById('container'))
};

run();
store.subscribe(run);
