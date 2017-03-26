import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {red500, indigo300} from 'material-ui/styles/colors';
import { bindActionCreators } from 'redux';
import { sendExternalId } from '../actions/sendExternalId.js';
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
      input: ''
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


handleSubmit (event) {
  event.preventDefault();

  let input = this.state.input;
   this.props.sendExternalId(input);
}

render() {
 return (
  <form onSubmit={this.handleSubmit}>
    <TextField
      floatingLabelText="Enter External Id"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      value={this.state.one}
      onChange={(event) => this.onInputChange(event, this.state)}
    /><br />
  </form>
);

  }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({ sendExternalId }, dispatch);
}


export default connect(null, mapDispatchToProps)(Form);
