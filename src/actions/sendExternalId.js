import axios from 'axios'
export function sendExternalId(result) {
  	console.log("Result: ",result);

  	let beerTotal = axios.post('/api/externalId',{result:result})
  	
  return {
    type: 'TOP_BEERS',
    payload: beerTotal
  };
}

