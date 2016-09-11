import axios from 'axios';

exports.get = () => axios.get('/users');
exports.reducer = (state, users) => {
  const newState = {};
  Object.assign(newState, state, { users: { items: users } });
  return newState;
};
