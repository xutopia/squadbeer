import React, { Component } from 'react';
import { connect } from 'react-redux';

import { HorizontalBar } from 'react-chartjs-2';

import chooseBarType from '../actions/barTypeVsBeerActions';

class BarTypeChart extends Component {
  constructor(props) {
    super(props);
    this.states({ temp: 'temp'});
  }
}

export default BarTypeChart;

