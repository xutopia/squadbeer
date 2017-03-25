import React from 'react';
import {render} from 'react-dom';
import BarSpecificChart from './containers/barSpecificChart.js'

class App extends React.Component {
  render () {
    return ( 
    <div>
   		<BarSpecificChart />
    </div>
    )
  }
}

export default App;