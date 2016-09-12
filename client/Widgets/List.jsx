import React from 'react';
import { connector } from '../Store';

const { bool, string, number, func, arrayOf, shape } = React.PropTypes;

const WidgetsList = React.createClass({
  propTypes: {
    editWidget: func,
    getWidgets: func,
    setWidgetSearch: func,
    toggleCreateWidget: func,
    widgetSearch: string,
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
  handleSearchEvent(event) {
    this.props.setWidgetSearch(event.target.value);
  },
  toggleCreateWidget() {
    this.props.toggleCreateWidget();
  },
  render() {
    return (
      <div className="widget">
        <div className="widget-header">Widgets
          <div className="pull-right">
            <ul className="list-unstyled list-inline">
              <li style={this.hideIfHome}>
                <button className="btn btn-sm btn-info" onClick={this.toggleCreateWidget}>
                  + Create
                </button>
              </li>
              <li>
                <input
                  value={this.props.widgetSearch} onChange={this.handleSearchEvent}
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
                this.props.widgets.items
                .filter((w) => `${w.id} ${w.name} ${w.color} ${w.price} ${w.inventory}`
                .toUpperCase().indexOf(this.props.widgetSearch.toUpperCase()) >= 0)
                .map((w) => (
                  <tr key={w.id}>
                    <td className="text-center">
                      {w.id}
                    </td>
                    <td>
                      {
                        this.props.location.pathname === '/' ? w.name : (
                          <a href="#edit" onClick={() => this.props.editWidget(w)}>
                            {w.name}
                          </a>
                        )
                      }
                    </td>
                    <td style={this.hideIfHome}>
                      {w.color}
                    </td>
                    <td style={this.hideIfHome}>
                      {w.price}
                    </td>
                    <td style={this.hideIfHome}>
                      { w.melts ? 'Yes' : 'No' }
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
      </div>
    );
  },
});

export default connector(WidgetsList);
