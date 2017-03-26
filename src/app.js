import React from 'react';
import {render} from 'react-dom';
import BarSpecificChart from './containers/barSpecificChart.js'
import BeerToFood from './containers/BeervsFood.js';
import InputExternal from './containers/inputExternal.js'

class App extends React.Component {
  render () {
    return (
    <div>
   		<InputExternal />
   		<BarSpecificChart />
      <BeerToFood />
    </div>
    )
  }
}

export default App;
