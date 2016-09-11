import axios from 'axios';

exports.get = () => axios.get('/widgets');
exports.reducer = (state, widgets) => {
  const newState = {};
  Object.assign(newState, state, { widgets: { items: widgets } });
  return newState;
};
