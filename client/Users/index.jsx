import React from 'react';
import Header from '../Header';

const location = {
  name: 'Users',
  breadcrumbs: [
    'Home',
    'Users',
  ],
};

const Users = () => (
  <div className="page-content">
    <Header {...location} />
    {/* <!-- Tables --> */}
    <div className="row">

      {/* <!-- Widget listing --> */}
      <div className="col-lg-12">
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
                  <th>Avatar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">1</td>
                  <td>JBoss McHuston</td>
                  <td>
                    <img src="https://s.gravatar.com/avatar/e11550b1bf793d43639292b196374262?s=48" alt="user" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <!-- End Widgets --> */}

    </div>
    {/* <!-- End Row --> */}
  </div>
);

export default Users;
