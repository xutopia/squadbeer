import React ,{ Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { render } from 'react-dom';
import BarSpecificChart from '../containers/barSpecificChart.js';
import Form from '../containers/inputExternal.js';

class Navigation extends Component {
  constructor(props) {
    super(props);
  
  }

 render() {
   return (
     <div>
      <Form />
      <BarSpecificChart />
     </div>
  )
 }
}

export default Navigation;