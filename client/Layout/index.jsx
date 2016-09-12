import React from 'react';
import Sidebar from '../Sidebar';

const Layout = (props) => (
  <div>
    <div id="content-wrapper">
      <Sidebar />
      {props.children}
    </div>
  </div>
);

const { element } = React.PropTypes;

Layout.propTypes = {
  children: element.isRequired,
};

module.exports = Layout;
