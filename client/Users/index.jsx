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

const { func, string, shape } = React.PropTypes;
const Users = React.createClass({
  propTypes: {
    setUserSearch: func,
    userSearch: string,
    location: shape({
      pathname: string,
      search: string,
      state: string,
      action: string,
      key: string,
    }),
  },
  handleSearchEvent(event) {
    this.props.setUserSearch(event.target.value);
  },
  render() {
    return (
      <div className="page-content">
        <Header {...location} />
        {/* <!-- Tables --> */}
        <div className="row">

          {/* <!-- Widget listing --> */}
          <div className="col-lg-12">
            <div className="widget">
              <div className="widget-header">Users
                <div className="pull-right">
                  <input
                    value={this.props.userSearch} onChange={this.handleSearchEvent}
                    type="text" className="form-control input-sm"
                  />
                </div>
              </div>
              <div className="table-responsive">
                <List location={this.props.location} />
              </div>
            </div>
          </div>
          {/* <!-- End Widgets --> */}

        </div>
        {/* <!-- End Row --> */}
      </div>
    );
  },
});

export default connector(Users);
