// Component for requesting specific foods ordered and how many of each type of beer was ordered with said food
import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputExternal from './inputExternal';

class FoodToBeer extends Component {
  render() {
    return (
      <div>
        What kind of beer do people order with this kind of food?
        <InputExternal />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { state };
}

export default connect(mapStateToProps)(FoodToBeer);
