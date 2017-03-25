// Component for requesting specific beers ordered and how many of each type of food was ordered with said beer
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BeerToFood extends Component {
  render() {
    return (
      <div>
        Beer to Food chart
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { state };
}

export default connect(mapStateToProps)(BeerToFood);
