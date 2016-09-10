import React from 'react';
import Header from '../Header';
import { connector } from '../Store';

const location = {
  name: 'Dashboard',
  breadcrumbs: [
    'Home',
    'Dashboard',
  ],
};

const Dashboard = () => (
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
            <div className="title">{5}</div>
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
            <div className="title">{10}</div>
            <div className="comment">Widgets</div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Tables --> */}
    <div className="row">

      {/* <!-- Users listing --> */}
      <div className="col-lg-6">
        <div className="widget">
          <div className="widget-header">Users
            <div className="pull-right">
              <input type="text" className="form-control input-sm" />
            </div>
          </div>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-center">ID</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">1</td>
                  <td>Joe Bloggs</td>
                </tr>
                <tr>
                  <td className="text-center">2</td>
                  <td>Timothy Hernandez</td>
                </tr>
                <tr>
                  <td className="text-center">3</td>
                  <td>Joe Bickham</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-center">ID</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">1</td>
                  <td>A</td>
                </tr>
                <tr>
                  <td className="text-center">2</td>
                  <td>B</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <!-- End Widgets --> */}

    </div>
    {/* <!-- End Tables --> */}
  </div>
);

export default connector(Dashboard);
