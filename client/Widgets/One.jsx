import React from 'react';
import { connector } from '../Store';

const { func, number, string, bool, shape } = React.PropTypes;

const OneWidget = React.createClass({
  propTypes: {
    toggleCreateWidget: func,
    updateWidget: func,
    createWidget: func,
    updateForm: bool,
    editWidget: shape({
      id: number,
      name: string,
      color: string,
      price: string,
      inventory: number,
      melts: bool,
    }),
  },
  getDefaultProps() {
    return {
      editWidget: {},
    };
  },
  getInitialState() {
    return {
      error: null,
      widget: {
        id: this.props.editWidget.id || null,
        name: this.props.editWidget.name || '',
        price: this.props.editWidget.price || '',
        color: this.props.editWidget.color || 'red',
        melts: this.props.editWidget.melts || false,
        inventory: this.props.editWidget.inventory || 0.00,
      },
    };
  },
  componentDidUpdate() {
    if (this.props.updateForm && !this.state.updated) {
      /* eslint react/no-did-update-set-state: [0] */
      /**
       * We're safely calling this.setState inside of a conditional *
       **/
      this.setState({
        widget: Object.assign(this.state.widget, this.props.editWidget),
        updated: true,
      });
      setTimeout(() => this.setState({ updated: false }), 0);
    }
  },
  createWidget() {
    if (this.props.editWidget.id) {
      return this.props.updateWidget(this.state.widget)
        .then(() => this.toggleCreateWidget())
        .catch((error) => this.setState({ error }));
    }
    return this.props.createWidget(this.state.widget)
      .then(() => this.toggleCreateWidget())
      .catch((error) => this.setState({ error }));
  },
  handleNameChange(e) {
    this.setState({ widget: Object.assign(this.state.widget, { name: e.target.value }) });
  },
  handlePriceChange(e) {
    this.setState({ widget: Object.assign(this.state.widget, { price: e.target.value }) });
  },
  handleColorChange(e) {
    this.setState({ widget: Object.assign(this.state.widget, { color: e.target.value }) });
  },
  handleMeltChange() {
    const melts = this.state.widget.melts || false;
    this.setState({ widget: Object.assign(this.state.widget, { melts: !melts }) });
  },
  handleCountChange(e) {
    this.setState({
      widget: Object.assign(this.state.widget, {
        inventory: parseInt(e.target.value, 10).toFixed(0),
      }),
    });
  },
  toggleCreateWidget() {
    this.props.toggleCreateWidget();
  },
  render() {
    return (
      <div className="row">

        {/* <!-- Widget listing --> */}
        <div className="col-lg-12">
          <div className="widget">
            <div className="widget-header">
              { this.props.editWidget.id ? 'Edit' : 'Save' } Widget
            </div>
            <div className="widget-body">
              <form className="form-horizontal">

                <legend>
                  { this.props.editWidget.id ? 'Edit' : 'Save' } Widget
                </legend>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="controls">
                        <label htmlFor="widget-name">Name</label>
                        <input
                          id="widget-name" name="widget-name" type="text"
                          onChange={this.handleNameChange} value={this.state.widget.name}
                          placeholder="foo-bar" className="input-large form-control"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col-lg-6">
                        <div className="controls">
                          <div className="input-prepend">
                            <label htmlFor="widget-price">Price</label>
                            <div className="input-group">
                              <span className="input-group-addon">$</span>
                              <input
                                id="widget-price" name="widget-price"
                                onChange={this.handlePriceChange} value={this.state.widget.price}
                                className="input-large form-control" placeholder="0.00"
                                type="number" step="0.01"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="controls">
                          <label htmlFor="widget-color">Color</label>
                          <select
                            id="widget-color" name="widget-color"
                            className="input-large form-control"
                            onChange={this.handleColorChange}
                            value={this.state.widget.color}
                          >
                            <option value="red">red</option>
                            <option value="purple">purple</option>
                            <option value="black">black</option>
                            <option value="green">green</option>
                            <option value="magenta">magenta</option>
                            <option value="white">white</option>
                            <option value="depends on the viewing angle">
                              depends on the viewing angle
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col-lg-6">
                        <div className="controls">
                          <label htmlFor="widget-count">Inventory</label>
                          <input
                            onChange={this.handleCountChange} value={this.state.widget.inventory}
                            id="widget-count" name="widget-count" type="number" step="1"
                            placeholder="#?" className="input-large form-control"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="controls text-center">
                          <label htmlFor="widget-properties">Melts</label><br />
                          <input
                            type="checkbox"
                            name="widget-properties"
                            className="input-large"
                            id="widget-properties-0"
                            onChange={this.handleMeltChange}
                            checked={this.state.widget.melts}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              {
                this.state.error ? (
                  <div className="form-group">
                    <div className="alert alert-danger text-center">
                      There was a problem with your request, the response was:
                      {` "${this.state.error.response.data}"`}
                    </div>
                  </div>
                ) : null
              }
              <div className="form-group">
                <button
                  className="btn btn-lg btn-info"
                  onClick={this.toggleCreateWidget}
                  style={{ marginLeft: 0 }}
                >
                  Cancel
                </button>
                <button className="btn btn-lg btn-info pull-right" onClick={this.createWidget}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

export default connector(OneWidget);
