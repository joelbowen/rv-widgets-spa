import React from 'react';
import Header from '../Header';
import { connector } from '../Store';
import List from './List';

const location = {
  name: 'Users',
  breadcrumbs: [
    'Home',
    'Users',
  ],
};

const Users = (props) => (
  <div className="page-content">
    <Header {...location} />
    {/* <!-- Tables --> */}
    <div className="row">

      {/* <!-- Widget listing --> */}
      <div className="col-lg-12">
        <List location={props.location} />
      </div>
      {/* <!-- End Widgets --> */}

    </div>
    {/* <!-- End Row --> */}
  </div>
);

const { string, shape } = React.PropTypes;
Users.propTypes = {
  location: shape({
    pathname: string,
    search: string,
    state: string,
    action: string,
    key: string,
  }),
};

export default connector(Users);
