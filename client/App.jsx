import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Layout from './Layout';
import Dashboard from './Dashboard';
import Users from './Users';
import Widgets from './Widgets';
import './app.scss';

const App = () => (
  <div id="page-wrapper" className="open">
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Dashboard} />
        <Route path="/users" component={Users} />
        <Route path="/widgets" component={Widgets} />
      </Route>
    </Router>
  </div>
);

render(
  <App />,
  document.getElementById('app')
);
