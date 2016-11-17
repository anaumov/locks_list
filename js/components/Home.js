import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import style from '../../css/app.css';

import LocksList from './LocksList';
import LocksNotification from './LocksNotification';

class Home extends Component {
  render() {
    const {title, dispatch} = this.props;
    return (
      <MuiThemeProvider>
        <div>
          <LocksList />
          <LocksNotification />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(state => state)(Home)
