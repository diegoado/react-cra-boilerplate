import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import Immutable from 'immutable';
import thunk from 'redux-thunk';

import history from '../../routes/history';
import createRootReducer from '../reducers';

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const logger = ({ dispatch, getState }) => next => action => {
  if (action.type && !/@@router\//.test(action.type)) {
    console.group(`LOGGER->Action: ${action.type}`);
    console.log('Curr State:', getState());
    const nextAction = next(action);
    console.log('Next State:', getState());
    console.groupEnd();

    return nextAction;
  }
  return next(action);
};

const middleware = [thunk, logger, routerMiddleware(history)];

const configureStore = ({ firstState } = Immutable.Map()) => {
  const enhancer = composeEnhancers(applyMiddleware(...middleware));

  const appStore = createStore(
    createRootReducer(history),
    firstState,
    enhancer
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextCreateRootReducer = require('../reducers').default;
      appStore.replaceReducer(nextCreateRootReducer(history));
    });
  }
  return appStore;
};

export default configureStore;
