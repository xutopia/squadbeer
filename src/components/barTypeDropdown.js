import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import getBarTypes, { getBarTypeBeerConsumption } from '../actions/barTypeActions';

class BarTypeDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.props.getBarTypes();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, i, value) {
    const { barTypeOptions } = this.props;
    if (this.state.value !== value) {
      this.setState({ value });
      this.props.getBarTypeBeerConsumption(barTypeOptions[value]);
    }
  }

  render() {
    const options = this.props.barTypeOptions
      .map((opt, i) => <MenuItem value={i} primaryText={opt} />);

    return (
      <DropDownMenu value={this.state.value} onChange={this.handleChange}>
        { options }
      </DropDownMenu>
    );
  }
}

BarTypeDropdown.defaultProps = {
  barTypeOptions: [
    'loading...'
  ]
};

BarTypeDropdown.propTypes = {
  barTypeOptions: React.PropTypes.array,
  getBarTypes: React.PropTypes.func,
  getBarTypeBeerConsumption: React.PropTypes.func
};

function mapStateToProps(state) {
  return {
    barType: state.barType,
    barTypeOptions: state.barType.types
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getBarTypes, getBarTypeBeerConsumption }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BarTypeDropdown);
