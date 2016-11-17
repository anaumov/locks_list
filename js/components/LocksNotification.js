import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import {connect} from 'react-redux'

const LocksNotification = ({style, message}) => {
  return(
    <Snackbar open={message != null} message={message || ''} />
  );
}

export default connect(state => state.Locks.notification)(LocksNotification);
