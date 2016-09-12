import React from 'react';
import { connector } from '../Store';

const Header = ({ name, breadcrumbs, user }) => (
  <div className="row header col-xs-12">
    <div className="user pull-right">
      <div className="item dropdown">
        <a className="dropdown-toggle">
          <img src={user.avatar} alt="" />
        </a>
      </div>
    </div>
    <div className="meta">
      <div className="page">{name}</div>
      <div className="breadcrumb-links">{breadcrumbs.join(' / ')}</div>
    </div>
  </div>
);

const { arrayOf, string, shape } = React.PropTypes;

Header.propTypes = {
  name: string.isRequired,
  breadcrumbs: arrayOf(string).isRequired,
  user: shape({
    avatar: string.isRequired,
  }),
};

export default connector(Header);
