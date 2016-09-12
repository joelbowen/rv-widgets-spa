import React from 'react';
import Header from '../Header';
import { connector } from '../Store';
import UserList from '../Users/List';
import WidgetsList from '../Widgets/List';

const location = {
  name: 'Dashboard',
  breadcrumbs: [
    'Home',
    'Dashboard',
  ],
};

const Dashboard = (props) => (
  <div className="page-content">
    <Header {...location} />
    {/* <!-- Dashboard Boxes --> */}
    <div className="row">
      <div className="col-lg-3 col-md-6 col-xs-12">
        <div className="widget">
          <div className="widget-header">
            <div className="widget-icon green pull-left">
              <i className="fa fa-users" />
            </div>
            <div className="title">
              {
                props.users.items.length >= 0 ? props.users.items.length
                  : <i className="fa fa-circle-o-notch fa-spin" aria-hidden="true" />
              }
            </div>
            <div className="comment">Users</div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-xs-12">
        <div className="widget">
          <div className="widget-header">
            <div className="widget-icon green pull-left">
              <i className="fa fa-users" />
            </div>
            <div className="title">
              {
                props.widgets.items.length >= 0 ? props.widgets.items.length
                  : <i className="fa fa-circle-o-notch fa-spin" aria-hidden="true" />
              }
            </div>
            <div className="comment">Widgets</div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Tables --> */}
    <div className="row">

      {/* <!-- Users listing --> */}
      <div className="col-lg-6">
        <UserList location={props.location} />
      </div>
      {/* <!-- End Users --> */}

      {/* <!-- Widget listing --> */}
      <div className="col-lg-6">
        <div className="widget">
          <div className="widget-header">Widgets
            <div className="pull-right">
              <input type="text" className="form-control input-sm" />
            </div>
          </div>
          <WidgetsList location={props.location} />
        </div>
      </div>
      {/* <!-- End Widgets --> */}

    </div>
    {/* <!-- End Tables --> */}
  </div>
);

const { bool, string, number, arrayOf, shape } = React.PropTypes;
Dashboard.propTypes = {
  location: shape({
    pathname: string,
    search: string,
    state: string,
    action: string,
    key: string,
  }),
  users: shape({
    items: arrayOf(shape({
      name: string,
      id: number,
      gravatar: string,
    })),
  }),
  widgets: shape({
    items: arrayOf(shape({
      id: number,
      name: string,
      color: string,
      price: string,
      inventory: number,
      melts: bool,
    })),
  }),
};

export default connector(Dashboard);
