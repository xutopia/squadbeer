// Component for requesting specific beers ordered and how many of each type of food was ordered with said beer
import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputExternal from './inputExternal';
import BarSpecificChart from './barSpecificChart';

class BeerToFood extends Component {
  render() {
    return (
      <div>
        What kinds of food do people order with this kind of beer?
        <InputExternal />
        <BarSpecificChart />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { state };
}

export default connect(mapStateToProps)(BeerToFood);
