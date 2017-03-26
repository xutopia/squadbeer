import { combineReducers } from 'redux';
import TopBeers from './topBeers';
import barType from './barTypeReducer';

const rootReducer = combineReducers({
  topBeers: TopBeers,
  barType
});

export default rootReducer;
