import { createStore, compose } from 'redux';
import { connect } from 'react-redux';
import Users from './data/users';
import Widgets from './data/widgets';

const GET_USERS = 'getUsers';
const GET_WIDGETS = 'getWidgets';
const SET_USER_SEARCH = 'setUserSearch';
const SET_WIDGET_SEARCH = 'setWidgetSearch';

const initialState = {
  user: {
    avatar: '/assets/images/avatar.jpg',
  },
  userSearch: '',
  users: {
    items: [],
  },
  widgetSearch: '',
  widgets: {
    items: [],
  },
};

const reduceSearch = (state, action, stateValue) => {
  const newState = {};
  const setState = {};
  setState[stateValue] = action.value;
  Object.assign(newState, state, setState);
  return newState;
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return Users.reducer(state, action.value);
    case GET_WIDGETS:
      return Widgets.reducer(state, action.value);
    case SET_USER_SEARCH:
      return reduceSearch(state, action, 'userSearch');
    case SET_WIDGET_SEARCH:
      return reduceSearch(state, action, 'widgetSearch');
    default:
      return state;
  }
};

const devTools = typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ?
  window.devToolsExtension() : (f) => f;
const checkForDevTools = process.env.NODE_ENV === 'development' ? devTools : (f) => f;
const store = createStore(rootReducer, initialState, compose(
  checkForDevTools
));

const mapStateToProps = (state) => ({
  user: state.user,
  users: state.users,
  widgets: state.widgets,
  userSearch: state.userSearch,
  widgetSearch: state.widgetSearch,
});

const mapDispatchToProps = (dispatch) => ({
  getUsers() {
    Users.get().then((res) =>
      dispatch({ type: GET_USERS, value: res.data }));
  },
  getWidgets() {
    Widgets.get().then((res) =>
      dispatch({ type: GET_WIDGETS, value: res.data }));
  },
  updateWidget(widget) {
    return Widgets.update(widget).then(() => this.getWidgets());
  },
  createWidget(widget) {
    return Widgets.create(widget).then(() => this.getWidgets());
  },
  setUserSearch(searchTerm) {
    dispatch({ type: SET_USER_SEARCH, value: searchTerm });
  },
  setWidgetSearch(searchTerm) {
    dispatch({ type: SET_WIDGET_SEARCH, value: searchTerm });
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

module.exports = { connector, store, rootReducer };
