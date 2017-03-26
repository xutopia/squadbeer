import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Form from './containers/inputExternal.js'
import BeerToFood from './containers/BeervsFood';
import FoodToBeer from './containers/FoodvsBeer';
import BarTypeChart from './components/barTypeChart';
import BarTypeDropdown from './components/barTypeDropdown';
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import App from './app.js';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={App} />
      <Route exact path="/" component={Form} />
      <Route exact path="/BeerToFood" component={BeerToFood} />
      <Route exact path="/FoodToBeer" component={FoodToBeer} />
      <Route exact path="/BarTypeChart" component={BarTypeChart} />
      <Route exact path="/BarTypeDopdown" component={BarTypeDropdown} />
  </Route>
);
