import React from 'react';
import Header from '../Header';
import { connector } from '../Store';
import List from './List';

const location = {
  name: 'Widgets',
  breadcrumbs: [
    'Home',
    'Widgets',
  ],
};

const { string, shape } = React.PropTypes;

const Widgets = React.createClass({
  propTypes: {
    location: shape({
      pathname: string,
      search: string,
      state: string,
      action: string,
      key: string,
    }),
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
              <div className="widget-header">Widgets
                <div className="pull-right">
                  <button className="btn btn-sm btn-info">+ Create</button>
                </div>
              </div>
              <List location={this.props.location} />
            </div>
          </div>
          {/* <!-- End Widgets --> */}
        </div>
        {/* <!-- End Row --> */}

        <hr />

        {/* <!-- Create/Edit --> */}
        <div className="row">

          {/* <!-- Widget listing --> */}
          <div className="col-lg-12">
            <div className="widget">
              <div className="widget-header">Create/Edit Template</div>
              <div className="widget-body">
                <form className="form-horizontal">

                  <legend>Create Widget</legend>

                  {/* <!-- Name--> */}
                  <div className="controls">
                    Name
                    <input
                      id="widget-name" name="widget-name" type="text"
                      placeholder="foo-bar" className="input-medium"
                    />
                  </div>

                  {/* <!-- Price --> */}
                  <div className="controls">
                    <div className="input-prepend">
                      Price
                      <span className="add-on">$</span>
                      <input
                        id="widget-price" name="widget-price"
                        className="input-medium" placeholder="0.00" type="text"
                      />
                    </div>
                  </div>

                  {/* <!-- Color --> */}
                  <div className="controls">
                    Color
                    <select id="widget-color" name="widget-color" className="input-large">
                      <option>red</option>
                      <option>purple</option>
                      <option>black</option>
                      <option>green</option>
                      <option>magenta</option>
                      <option>white</option>
                      <option>depends on the viewing angle</option>
                    </select>
                  </div>

                  {/* <!-- Melts --> */}
                  <div className="controls">
                    Melts
                    <input
                      type="checkbox" name="widget-properties"
                      id="widget-properties-0" value="melts"
                    />
                  </div>

                  {/* <!-- Inventory --> */}
                  <div className="controls">
                    Inventory
                    <input
                      id="widget-count" name="widget-count" type="text"
                      placeholder="#?" className="input-small"
                    />
                  </div>
                </form>
              </div>
              {/* <!-- End Widget body --> */}
            </div>
            {/* <!-- End Widget --> */}
          </div>
          {/* <!-- End Column --> */}
        </div>
        {/* <!-- End Row --> */}
      </div>
    );
  },
});

export default connector(Widgets);
