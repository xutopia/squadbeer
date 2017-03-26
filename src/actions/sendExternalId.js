import axios from 'axios'
export function sendExternalId(result) {
  	console.log("Result: ",result);

  	let beerTotal = result
  	
  return {
    type: 'TOP_BEERS',
    payload: beerTotal
  };
}

