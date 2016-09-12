import React from 'react';
import Header from '../Header';
import { connector } from '../Store';
import List from './List';
import One from './One';

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
  getInitialState() {
    return {
      createOrUpdate: false,
      updateForm: false,
      editWidget: {},
    };
  },
  toggleCreateWidget() {
    this.setState({
      createOrUpdate: !this.state.createOrUpdate,
      editWidget: {},
      updateForm: true,
    });
    return setTimeout(() => this.setState({ updateForm: false }), 0);
  },
  editWidget(widget) {
    this.setState({
      createOrUpdate: true,
      editWidget: widget,
      updateForm: true,
    });
    window.scrollTo(0, 0);
    return setTimeout(() => this.setState({ updateForm: false }), 0);
  },
  render() {
    return (
      <div className="page-content">
        <Header {...location} />
        {
          this.state.createOrUpdate ?
            <One
              toggleCreateWidget={this.toggleCreateWidget}
              editWidget={this.state.editWidget}
              updateForm={this.state.updateForm}
            /> : null
        }
        <div className="row">
          <div className="col-lg-12">
            <List
              location={this.props.location}
              editWidget={this.editWidget}
              toggleCreateWidget={this.toggleCreateWidget}
            />
          </div>
        </div>
      </div>
    );
  },
});

export default connector(Widgets);
