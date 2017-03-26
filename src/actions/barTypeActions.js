import Axios from 'axios';

export default function getBarTypes(location) {
  // const request = Axios.get(`/api/barTypes/${location}`);
  const request = Axios.get('/api/barTypes');
  console.log('get bar types!');
  return {
    type: 'get_bar_types',
    payload: request
  };
}

export function getBarTypeBeerConsumption(bar_type) {
  console.log('get beer consumption!', bar_type);
  const request = Axios.post('/api/barTypeConsumption', { bar_type });
  return {
    type: 'get_bartype_beers',
    payload: request
  };
}
