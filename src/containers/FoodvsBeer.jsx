// Component for requesting specific foods ordered and how many of each type of beer was ordered with said food
import React, { Component } from 'react';
import { connect } from 'react-redux';

class FoodToBeer extends Component {
  render() {
    return (
      <div>
        Food to Beer chart
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { state };
}

export default connect(mapStateToProps)(FoodToBeer);
