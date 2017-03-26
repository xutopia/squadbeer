import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import getBarTypes, { getBarTypeBeerConsumption, setCurrentType } from '../actions/barTypeActions';
import BarTypeChart from './barTypeChart';

const barTypes = [
  'Bar/Pub',
  'Trendy Bar',
  'Casual Dining',
  'Lounge',
  'Beer Bar / Pub',
  'Casual Bar',
  'Party POC',
  'Night Club',
  'Restaurant',
  'Trendy Restaurant',
  'Adult',
  'Sporting Active',
  'Hotel',
  'Sports Bar'
];

class BarTypeDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      type: null,
      update: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps() {
    // console.log('receiving props!');
    if (!this.state.update) {
      this.setState({ update: true });
      this.props.setCurrentType(this.state.type);
    }
  }

  handleChange(event, i, value) {
    if (this.state.value !== value) {
      this.setState({
        value,
        type: barTypes[value],
        update: false
      });
      this.props.getBarTypeBeerConsumption(barTypes[value]);
    }
  }

  render() {
    const options = barTypes
      .map((opt, i) => <MenuItem value={i} primaryText={opt} />);

    const styles = { customWidth: { width: 200 } };
    return (
      <div>
        <DropDownMenu
          style={styles.customWidth}
          autoWidth={false}
          value={this.state.value}
          onChange={this.handleChange}
        >
          { options }
        </DropDownMenu>
        <BarTypeChart current={this.state.type} />
      </div>
    );
  }
}

BarTypeDropdown.defaultProps = {
  // barTypeOptions: ['loading...']
};

BarTypeDropdown.propTypes = {
  // barTypeOptions: React.PropTypes.array,
  // getBarTypes: React.PropTypes.func,
  getBarTypeBeerConsumption: React.PropTypes.func
};

function mapStateToProps(state) {
  return {
    barType: state.barType,
    barTypeOptions: state.barType.types
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getBarTypes, getBarTypeBeerConsumption, setCurrentType }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BarTypeDropdown);
