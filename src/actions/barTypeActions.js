import Axios from 'axios';

export default function (location) {
  const request = null; // Axios.get(`/api/representatives/${location}`);
  return {
    type: 'get_bar_types',
    payload: request
  };
}


