import React from 'react';
import {render} from 'react-dom';
import BarSpecificChart from './containers/barSpecificChart.js';
import InputExternal from './containers/inputExternal.js'

class App extends React.Component {
  render () {
    return ( 
    <div>
   		<InputExternal />
   		<BarSpecificChart />
    </div>
    )
  }
}

export default App;