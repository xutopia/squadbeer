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

  if(this.props.topBeers) {

  const dataSet = {
  labels: ["."],
  datasets: [
    {
      label: 'Beer Sales',
      backgroundColor: 'rgb(204, 153, 0)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgb(255, 255, 0)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      hoverBorderWidth: 4,
      data: [0]
    }
  ]
};

  console.log("BEERTOTALS:",state)

  state.count.map(count => {
     dataSet.datasets[0].data.push(count)
  })

  state.name.map(beer => {
    
    dataSet.labels.push(beer)

  })
  console.log("WHAT",dataSet)
  return dataSet;

} else {
   

  const dataSet = {
  labels: ["."],
  datasets: [
    {
      label: 'Food Sales',
      backgroundColor: 'rgb(255, 0, 0)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgb(204, 0, 0)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      hoverBorderWidth: 4,
      data: [0]
    }
  ]
};


  state.foodTotals.map(food => {
     dataSet.datasets[0].data.push(food.count)
  })

  state.foodTotals.map(food => {
    
    dataSet.labels.push(food.name)

  })
  console.log("WHAT food",dataSet)
  return dataSet;
}
  }

  render() {

    return (
      <Bar
  data={this.props.topBeers ? this.mapDataSet(this.props.topBeers) : this.mapDataSet(this.props.topFoods)}
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

