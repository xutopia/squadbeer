import { combineReducers } from 'redux';
import TopBeers from './topBeers';
import barType from './barTypeReducer';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  topBeers: TopBeers,
  routing:routerReducer,
  barType
});

export default rootReducer;
