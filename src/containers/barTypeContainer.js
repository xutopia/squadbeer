import React, { Component } from 'react';
import { connect } from 'react-redux';

import BarTypeChart from '../components/barTypeChart';
import BarTypeDropDown from '../components/barTypeDropdown';

const BarTypeContainer = () =>
  <div>
    <BarTypeDropDown />
    <BarTypeChart />
  </div>;

export default BarTypeContainer;
