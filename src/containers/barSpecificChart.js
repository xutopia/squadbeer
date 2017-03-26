import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Bar } from 'react-chartjs-2';


class BarSpecificChart extends Component {
constructor(props) {
    super(props);
    this.mapDataSet = this.mapDataSet.bind(this);
}



mapDataSet(state) {

  if(!state) {
    return;
  }
  const dataSet = {
  labels: ["."],
  datasets: [
    {
      label: 'Beer Sales',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      hoverBorderWidth: 4,
      data: [0]
    }
  ]
};

  console.log("BEERTOTALS:",state.beerTotals)

  state.beerTotals.map(beer => {
     dataSet.datasets[0].data.push(beer.count)
  })

  state.beerTotals.map(beer => {
    
    dataSet.labels.push(beer.name)

  })
  console.log("WHAT",dataSet)
  return dataSet;

}

  render() {

    return (
      <Bar
  data={this.mapDataSet(this.props.topBeers)}
	width={10}
	height={10}
	xAxisID={"Beers"}
	yAxisID={"Sales Report"}
  options={{
    maintainAspectRatio: false
  }}
	  />
    )
  }

}

function mapStateToProps(state) {
  console.log("STATE",state.topBeers)
  return {
    topBeers: state.topBeers
  };
}

export default connect(mapStateToProps)(BarSpecificChart);