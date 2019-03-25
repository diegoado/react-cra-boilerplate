import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router/immutable';

import history from './history';
import context from '../context';

import App from '@components/app';

const Routes = () => (
  <ConnectedRouter history={history} context={context}>
    <Switch>
      <Route path="/" component={App} exact />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
