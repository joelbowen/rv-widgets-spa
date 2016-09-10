import React from 'react';

const Widgets = () => (
  <div className="page-content">
    {/* <!-- Header Bar --> */}
    <div className="row header col-xs-12">
      <div className="user pull-right">
        <div className="item dropdown">
          <a className="dropdown-toggle">
            <img src="/assets/images/avatar.jpg" alt="" />
          </a>
        </div>
      </div>
      <div className="meta">
        <div className="page">Dashboard</div>
        <div className="breadcrumb-links">Home / Dashboard</div>
      </div>
    </div>
    {/* <!-- End Header Bar --> */}

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
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-center">ID</th>
                  <th>Name</th>
                  <th>Color</th>
                  <th>Price</th>
                  <th>Melts?</th>
                  <th>Inventory</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">1</td>
                  <td>Foo</td>
                  <td>red</td>
                  <td>$4.99</td>
                  <td>yes</td>
                  <td>27</td>
                </tr>
              </tbody>
            </table>
          </div>
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

export default Widgets;
