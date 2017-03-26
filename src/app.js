import React from 'react';
import { render } from 'react-dom';
import BarSpecificChart from './containers/barSpecificChart.js'
import BeerToFood from './containers/BeervsFood.js';
import Form from './containers/inputExternal.js'
import BarTypeChart from './components/barTypeDropdown';

class App extends React.Component {
  render() {
    return (
    <div>
   		<Form />
   		<BarSpecificChart />
      <BeerToFood />
    </div>
    )
  }
}

export default App;
