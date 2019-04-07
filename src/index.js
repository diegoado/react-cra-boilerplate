import 'normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import Routes from 'routes';

import context from 'context';
import createStore from 'store';

import './styles.scss';
import * as serviceWorker from './serviceWorker';

const store = createStore();

const renderApp = AppRoutes => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store} context={context}>
        <AppRoutes />
      </Provider>
    </AppContainer>,
    document.querySelector('[data-js="app-root"]')
  );
};

renderApp(Routes);

if (module.hot) {
  module.hot.accept('routes', () => {
    const AppRoutes = require('routes').default;
    renderApp(AppRoutes);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
