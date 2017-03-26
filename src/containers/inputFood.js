import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {red500, indigo300} from 'material-ui/styles/colors';

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


class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  onInputChange(event, state) {
    this.setState({
      ...state,
      input: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatchAction(this.state.input);
  }

  render() {
   return (
    <div>
    <form onSubmit={(e) => this.handleSubmit(e)}>
      <TextField
        floatingLabelText="Food's Best Beer Partner"
        floatingLabelStyle={styles.floatingLabelStyle}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        value={this.state.input}
        onChange={(event) => this.onInputChange(event, this.state)}
      /><br />
    </form>
    </div>
  );

    }
  }


  export default connect()(InputForm);
