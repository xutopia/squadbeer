export default function(state = null, action) {
  switch(action.type) {

  case 'TOP_BEERS':
  	console.log("PAYLOADA:", action.payload);
    return action.payload
  }

  return state;
}
