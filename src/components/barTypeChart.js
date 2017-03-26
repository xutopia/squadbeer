import React from 'react';
import { connect } from 'react-redux';

import { HorizontalBar } from 'react-chartjs-2';

const chartData = {
  labels: [],
  datasets: [
    {
      label: 'Alcohol Consumption by Volume',
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

const BarTypeChart = ({ data, current }) => {
  if (data && data[current]) {
    chartData.labels = data[current].name;
    chartData.datasets[0].data = data[current].consumption;
  }

  return (
    <HorizontalBar
      data={chartData}
      options={chartOptions}
    />
  );
};

function mapStateToProps(state) {
  return {
    data: state.barType.beerByType,
    current: state.barType.current
  };
}

BarTypeChart.propTypes = {
  data: React.PropTypes.array
};

BarTypeChart.defaultProps = {
  data: []
};

export default connect(mapStateToProps)(BarTypeChart);
