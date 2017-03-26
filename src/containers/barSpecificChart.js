import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Bar } from 'react-chartjs-2';

// const Top20Chart = (props) => {
//   const metric = props.search;
//   // console.log('---- In Top20Chart, props.search = ', props.search);

//   dataSet.labels = props.data.map(
//     (candidate, index) => `${index + 1}. ${candidate.name}`
//   );

//   dataSet.datasets[0].data = props.data.map(
//     candidate => candidate[metric]
//   );

const dataSet = {
  labels: ["budweiser","stella","land shark","bud light"],
  datasets: [
    {
      label: 'Beer Sales',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      hoverBorderWidth: 4,
      data: [22,33,44,55,66,77,88,99,100]
    }
  ]
};

class BarSpecificChart extends Component {

  render() {

    return (
      <Bar
    data={dataSet}
	width={10}
	height={200}
	xAxisID={"Beers"}
	yAxisID={"Sales Report"}
	options={{
		maintainAspectRatio: false
	}}
	  />
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     null
//   };
// }

// function mapDispatchToProps(dispatch) {

//   return bindActionCreators(null, dispatch);
// }


export default BarSpecificChart;
