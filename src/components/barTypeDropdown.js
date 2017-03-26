import React, { Component } from 'react';
import { connect } from 'react-redux';

class BarTypeDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barType: this.props.barType
    }
    this.props.getBarTypes();
    
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    if (event.option !== this.state.barType) {
      this.setState({ barType: event.option });
    }
  }

  render() {
    return (
      <form>
        <select
          value={this.state.barType}
          onChange={this.changeHandler}
          options={this.props.barTypeOptions}
          placeholder="select the type of establishment"
        />
      </form>
    );
  }
}

BarTypeDropdown.defaultProps = {
  barType: 'bar/pub',
  barTypeOptions: [
    'bar/pub',
    'bar/pub',
    'bar/pub',
    'bar/pub',
    'bar/pub',
    'bar/pub',
    'bar/pub'
};

BarTypeDropdown.propTypes = {
  barType: React.PropTypes.string,
  barTypeOptions: React.PropTypes.array
};


function mapStateToProps(state) {
  return {
    barType: state.bar.barType,
    barTypeOptions: state.barTypes
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getBarTypes }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BarTypeDropdown);
