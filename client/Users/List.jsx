import React from 'react';
import { connector } from '../Store';

const { string, number, func, arrayOf, shape } = React.PropTypes;

const UserList = React.createClass({
  propTypes: {
    getUsers: func,
    setUserSearch: func,
    userSearch: string,
    users: shape({
      items: arrayOf(shape({
        name: string,
        id: number,
        gravatar: string,
      })),
    }),
    location: shape({
      pathname: string,
      search: string,
      state: string,
      action: string,
      key: string,
    }),
  },
  componentWillMount() {
    this.hideIfHome = { display: 'none' };
  },
  componentDidMount() {
    this.props.getUsers();
    this.hideIfHome = this.props.location.pathname === '/' ? { display: 'none' } : {};
  },
  handleSearchEvent(event) {
    this.props.setUserSearch(event.target.value);
  },
  render() {
    return (
      <div className="widget">
        <div className="widget-header">Users
          <div className="pull-right">
            <ul className="list-unstyled list-inline">
              <li>
                <input
                  value={this.props.userSearch} onChange={this.handleSearchEvent}
                  type="text" className="form-control input-sm"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th className="text-center">ID</th>
                <th>Name</th>
                <th style={this.hideIfHome}>
                  Avatar
                </th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.users.items
                .filter((u) => `${u.id} ${u.name}`
                .toUpperCase().indexOf(this.props.userSearch.toUpperCase()) >= 0)
                .map((u) => (
                  <tr key={u.id}>
                    <td className="text-center">
                      {u.id}
                    </td>
                    <td>
                      {u.name}
                    </td>
                    <td style={this.hideIfHome}>
                      <img src={u.gravatar} alt="user" />
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  },
});

export default connector(UserList);
