// reducer that updates chart for food to beers
import { FETCH_BEERS_FROM_FOOD } from '../actions/actionTypes';

const INITIAL_STATE = { data: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_BEERS_FROM_FOOD:
      return { ...state, data: action.payload.data }
    default:
      return state;
  }
}
