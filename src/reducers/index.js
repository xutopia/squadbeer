import { combineReducers } from 'redux';
import TopBeers from './topBeers.js';

const rootReducer = combineReducers({

	topBeers: TopBeers
  
});

export default rootReducer;