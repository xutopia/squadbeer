import React ,{ Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppBar from 'material-ui/AppBar';
import SwipeableViews from 'react-swipeable-views';
import {Tabs, Tab} from 'material-ui/Tabs';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';
import IconButton from 'material-ui/IconButton';
import Dashboard from 'material-ui/svg-icons/av/queue-music';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export const teal900 = '#004D40';

const styles = {
  bar: {
    "background-color": "#512DA8"
  },
  largeIcon: {
    width: 60,
    height: 60,
    color: "white"
  }
};

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.props.GetUser();
    this.state = {open: false};
  }

  handleToggle () { this.setState({open: !this.state.open}) };
  handleClose () {this.setState({open: false}) };

 render() {
   return (
     <AppBar
      style={styles.bar}
      title="Squad Beer"
      iconElementLeft={<div> <Dashboard style={styles.largeIcon} onTouchTap={this.handleToggle}/> <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}> 
          <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/"/>}>App</MenuItem>
          <MenuItem><a style={{color:'black'}} href='/logout'>Logout</a></MenuItem>
        </Drawer></div>}
      onTitleTouchTap = {()=> {hashHistory.push("/")}}
    />
  )
 }
}

export default Navigation;