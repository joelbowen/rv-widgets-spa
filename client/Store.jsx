import { createStore, compose } from 'redux';
import { connect } from 'react-redux';

const initialState = {
  user: {
    avatar: '/assets/images/avatar.jpg',
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
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
});

const connector = connect(mapStateToProps);

module.exports = { connector, store, rootReducer };
