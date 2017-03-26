import React from 'react';
import {render} from 'react-dom';
import BarSpecificChart from './containers/barSpecificChart.js'
import BeerToFood from './containers/BeervsFood.js';
import BarTypeChart from './components/barTypeChart';

class App extends React.Component {
  render () {
    return (
    <div>
      <BarTypeChart />
   		{/*<BarSpecificChart />
      <BeerToFood />*/}
    </div>
    )
  }
}

export default App;
