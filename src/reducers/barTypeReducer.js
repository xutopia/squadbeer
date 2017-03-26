export default function barTypes(state = {}, action) {
  switch (action.type) {
    case 'get_bar_types': {
      return [action.payload.data];
    }
    case 'get_bartype_beers': {
      return {
        ...state,
        
      };
    }






  }
}