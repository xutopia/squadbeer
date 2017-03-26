export function sendExternalId(result) {
  	console.log("Result: ",result);

  	let beerTotal = { beerTotals: [ {name:"Stella Artois", count: 15},
  					  {name:"Goose Island - Honker's Ale", count: 11} 
  					]  }
  		

  return {
    type: 'TOP_BEERS',
    payload: beerTotal
  };
}

