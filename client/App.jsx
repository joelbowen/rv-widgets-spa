import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { store } from './Store';
import Layout from './Layout';
import Dashboard from './Dashboard';
import Users from './Users';
import Widgets from './Widgets';

import './app.scss';

const App = () => (
  <div id="page-wrapper" className="open">
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Dashboard} />
          <Route path="/users" component={Users} />
          <Route path="/widgets" component={Widgets} />
        </Route>
      </Router>
    </Provider>
  </div>
);

render(
  <App />,
  document.getElementById('app')
);
