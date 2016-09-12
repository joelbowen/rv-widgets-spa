import axios from 'axios';
import Promise from 'promise';

exports.get = () => axios.get('/widgets');

exports.create = (w) => new Promise((resolve, reject) => {
  if (!w.name) { return reject({ response: { data: 'Missing name' } }); }
  if (!w.price) { return reject({ response: { data: 'Missing price' } }); }
  return resolve(axios.post('/widgets', {
    name: w.name,
    price: w.price,
    color: w.color,
    inventory: w.inventory.toString(),
    melts: w.melts.toString(),
  }));
});

exports.update = (w) => new Promise((resolve, reject) => {
  if (!w.name) { return reject({ response: { data: 'Missing name' } }); }
  if (!w.price) { return reject({ response: { data: 'Missing price' } }); }
  return resolve(axios.put(`/widgets/${w.id}`, {
    name: w.name,
    price: w.price,
    color: w.color,
    inventory: w.inventory,
    melts: w.melts,
  }));
});

exports.reducer = (state, widgets) => {
  const newState = {};
  Object.assign(newState, state, { widgets: { items: widgets } });
  return newState;
};
