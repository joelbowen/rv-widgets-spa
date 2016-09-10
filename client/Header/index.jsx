import React from 'react';

const Header = ({ name, breadcrumbs }) => (
  <div className="row header col-xs-12">
    <div className="user pull-right">
      <div className="item dropdown">
        <a className="dropdown-toggle">
          <img src="/assets/images/avatar.jpg" alt="" />
        </a>
      </div>
    </div>
    <div className="meta">
      <div className="page">{name}</div>
      <div className="breadcrumb-links">{breadcrumbs.join(' / ')}</div>
    </div>
  </div>
);

const { arrayOf, string } = React.PropTypes;

Header.propTypes = {
  name: string.isRequired,
  breadcrumbs: arrayOf(string).isRequired,
};

export default Header;
