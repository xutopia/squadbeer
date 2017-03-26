export default function(state = null, action) {
  switch(action.type) {

  case 'TOP_BEERS':
  	console.log("PAYLOADA:", action.payload.data);
    return action.payload.data
  }

  return state;
}
