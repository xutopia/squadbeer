import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {red500, indigo300} from 'material-ui/styles/colors';
import { bindActionCreators } from 'redux';
import { sendExternalId } from '../actions/sendExternalId.js';
import { sendExternalIdForFood } from '../actions/sendExternalIdForFood.js'
import axios from 'axios';

const styles = {
  errorStyle: {
    color: red500,
  },
  floatingLabelStyle: {
    color: indigo300,
  },
  floatingLabelFocusStyle: {
    color: indigo300,
  },
};

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      foodInput:''
    };

  this.handleSubmit = this.handleSubmit.bind(this);
  this.onInputChange = this.onInputChange.bind(this);

}

onInputChange(event, state) {

  this.setState({
    ...state,
    input: event.target.value
   });
}

onFoodChange(event, state) {

  this.setState({
    ...state,
    foodInput: event.target.value
   });
}


handleSubmit (event) {
  event.preventDefault();

  if(this.state.input === '') {
    this.props.sendExternalIdForFood(this.state.foodInput)
  }

  let result = this.state.input;
  axios.post('/api/externalId',{result:result})
       .then(res => {
         this.props.sendExternalId(res);
       })
   
}

render() {
 return (
  <div>
  <form onSubmit={this.handleSubmit}>
    <TextField
      floatingLabelText="Bar's Best Selling Beer"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      value={this.state.input}
      onChange={(event) => this.onInputChange(event, this.state)}
    /><br />
  </form>

  <form onSubmit={this.handleSubmit}>
    <TextField
      floatingLabelText="Bar's Best Selling Food"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      value={this.state.foodInput}
      onChange={(event) => this.onFoodChange(event, this.state)}
    /><br />
  </form>
  </div>
);

  }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({ sendExternalId , sendExternalIdForFood}, dispatch);
}


export default connect(null, mapDispatchToProps)(Form);
