// Component for requesting specific beers ordered and how many of each type of food was ordered with said beer
import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputExternal from './inputExternal';
import { HorizontalBar } from 'react-chartjs-2';
import { fetchBeersByFood } from '../actions/actionFile';

const dataSet = {
  labels: [],
  datasets: [
    {
      label: 'Food to Beers Map',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      hoverBorderWidth: 4,
      data: []
    }
  ]
};


class BeerToFood extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputChange: ''
    };
  }

  mapDataToDataSet(beerData) {
    if(beerData !== null) {
      dataSet.labels = beerData.x;
      dataSet.datasets[0].data = beerData.y;
    }
  }

  render() {
    return (
      <div>
        What kinds of food do people order with this kind of beer?
        <InputExternal dispatchAction={fetchBeersByFood} />
        
        <HorizontalBar data={this.mapDataToDataSet(this.props.data)} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { state };
}

export default connect(mapStateToProps)(BeerToFood);
