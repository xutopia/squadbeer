export default function barTypes(state = {}, action) {
  switch (action.type) {
    case 'get_bar_types': {
      return {
        ...state,
        types: action.payload.data.bar_types
      };
    }
    case 'get_bartype_beers': {
      // const { query } = action;
      const beerByType = state.beerByType || {};
      const { data, barType } = action.payload.data;
      console.log('\nbar type consumption reducer!!')
      console.log(action.payload.data);

      beerByType[barType] = data;

      return {
        ...state,
        beerByType
      };
    }
    default: {
      return { ...state };
    }
  }
};
