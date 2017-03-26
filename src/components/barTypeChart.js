import React from 'react';
import { connect } from 'react-redux';

import { HorizontalBar } from 'react-chartjs-2';

const chartData = {
  labels: [],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: []
    }
  ]
};

const chartOptions = {
};

const BarTypeChart = ({ data }) => {
  chartData.labels = data[0];
  chartData.datasets[0].data = data[1];

  return (
    <HorizontalBar
      data={chartData}
      options={chartOptions}
    />
  );
};

function mapStateToProps(state) {
  data: state.currData
}

BarTypeChart.propTypes = {
  data: React.PropTypes.array
};

BarTypeChart.defaultProps = {
  data: [ ['a', 'b', 'c'], [1, 2, 3] ]
};

export default connect(mapStateToProps)(BarTypeChart);
