import { createStore, compose } from 'redux';
import { connect } from 'react-redux';
import Users from './data/users';

const GET_USERS = 'getUsers';
const SET_USER_SEARCH = 'setUserSearch';

const initialState = {
  user: {
    avatar: '/assets/images/avatar.jpg',
  },
  userSearch: '',
  users: {
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
    case SET_USER_SEARCH:
      return reduceSearch(state, action, 'userSearch');
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
  userSearch: state.userSearch,
});

const mapDispatchToProps = (dispatch) => ({
  getUsers() {
    Users.get().then((res) =>
      dispatch({ type: GET_USERS, value: res.data }));
  },
  setUserSearch(searchTerm) {
    dispatch({ type: SET_USER_SEARCH, value: searchTerm });
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

module.exports = { connector, store, rootReducer };
