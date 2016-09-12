import React from 'react';
import { IndexLink, Link } from 'react-router';

const Sidebar = () => (
  <div id="sidebar-wrapper">
    <ul className="sidebar">
      <li className="sidebar-main">
        <IndexLink to="/">Dashboard
          <span className="menu-icon fa fa-tachometer" />
        </IndexLink>
      </li>
      <li className="sidebar-title">
        <span>NAVIGATION</span>
      </li>
      <li className="sidebar-list">
        <IndexLink to="/" activeClassName="active">
          Dashboard
          <span className="menu-icon fa fa-tachometer" />
        </IndexLink>
      </li>
      <li className="sidebar-list">
        <Link to="/users" activeClassName="active">
          Users
          <span className="menu-icon fa fa-users" />
        </Link>
      </li>
      <li className="sidebar-list">
        <Link to="/widgets" activeClassName="active">Widgets
          <span className="menu-icon fa fa-cubes" />
        </Link>
      </li>
    </ul>
    <div className="sidebar-footer col-xs-12">
      <a target="_blank" rel="noopener noreferrer">&copy; 2015 Red Ventures</a>
    </div>
  </div>
);

export default Sidebar;
