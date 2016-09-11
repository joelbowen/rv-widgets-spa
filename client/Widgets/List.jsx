import React from 'react';
import { connector } from '../Store';

const { bool, string, number, func, arrayOf, shape } = React.PropTypes;

const WidgetsList = React.createClass({
  propTypes: {
    getWidgets: func,
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
    this.props.getWidgets();
    this.hideIfHome = this.props.location.pathname === '/' ? { display: 'none' } : {};
  },
  render() {
    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th className="text-center">ID</th>
              <th>Name</th>
              <th style={this.hideIfHome}>
                Color
              </th>
              <th style={this.hideIfHome}>
                Price
              </th>
              <th style={this.hideIfHome}>
                Melts
              </th>
              <th style={this.hideIfHome}>
                Inventory
              </th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.widgets.items.map((w) => (
                <tr key={w.id}>
                  <td className="text-center">
                    {w.id}
                  </td>
                  <td>
                    {w.name}
                  </td>
                  <td style={this.hideIfHome}>
                    {w.color}
                  </td>
                  <td style={this.hideIfHome}>
                    {w.price}
                  </td>
                  <td style={this.hideIfHome}>
                    {w.melts}
                  </td>
                  <td style={this.hideIfHome}>
                    {w.inventory}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  },
});

export default connector(WidgetsList);
