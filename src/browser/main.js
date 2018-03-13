import HomePage from './HomePage';
import React from 'react';
import store from './store';

import { Provider } from 'react-redux';
import { render } from 'react-dom';

render(
  <Provider store={store}>
    <HomePage />
  </Provider>,
  document.getElementById('root')
);
