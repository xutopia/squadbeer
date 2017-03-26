import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import BarSpecificChart from './containers/barSpecificChart.js'
// import BeerToFood from './containers/BeervsFood.js';
import Form from './containers/inputExternal.js'
import BeerToFood from './containers/BeervsFood';
import FoodToBeer from './containers/FoodvsBeer';
import BarTypeChart from './components/barTypeChart';
import BarTypeDropdown from './components/barTypeDropdown';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Form} />
        <Route exact path="/BeerToFood" component={BeerToFood} />
        <Route exact path="/FoodToBeer" component={FoodToBeer} />
        <Route exact path="/BarTypeChart" component={BarTypeChart} />
        <Route exact path="/BarTypeDopdown" component={BarTypeDropdown} />
      </div>
    </BrowserRouter>
  )
}

function select({ app }) {
  return { ...app };
}

export default connect(select)(App);
