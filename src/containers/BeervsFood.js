// Component for requesting specific beers ordered and how many of each type of food was ordered with said beer
import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputExternal from './inputExternal';
import { Bar } from 'react-chartjs-2';

class BeerToFood extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputChange: ''
    };
  }

  handleInputChange(state, event) {
    const text = event.target.value;
  }

  render() {
    return (
      <div>
        What kinds of food do people order with this kind of beer?
        <InputExternal />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { state };
}

export default connect(mapStateToProps)(BeerToFood);
