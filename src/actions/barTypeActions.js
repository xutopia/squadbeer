import Axios from 'axios';

export default function getBarTypes(location = null) {
  const request = Axios.get(`/api/barTypes/${location}`);
  return {
    type: 'get_bar_types',
    payload: request
  };
}

export function getBarTypeBeers(barType) {
  const request = null; // Axios.get(`/api/representatives/${location}`);
  return {
    type: 'get_bartype_beers',
    payload: request
  };
}
