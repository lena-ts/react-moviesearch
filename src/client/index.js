import React from 'react';
import { hydrate } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/App';
import reducers from '../reducers';
import { getStore } from './store';

import 'normalize.css';
import '../styles/index.scss';

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

console.log('preloaded state', preloadedState);

const store = getStore(preloadedState);

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
