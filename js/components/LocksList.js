import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {List} from 'material-ui/List';

import LocksActions from '../actions/LocksActions';
import Lock from './Lock';

class LocksList extends Component {
  constructor(props) {
    super(props);
    this.artionsCreator = bindActionCreators(LocksActions, props.dispatch);
    this.unlock = this.unlock.bind(this);
  }

  componentWillMount() {
    if (this.props.state == 'idle') {
      this.artionsCreator.getLocks();
    }
  }

  render() {
    const {list} = this.props;
    return (
      <List>
        {list.map(lock =>
          <Lock key={lock.id} lock={lock} unlockHandler={this.unlock} />
        )}
      </List>
    );
  }

  unlock(lock) {
    this.artionsCreator.unlock(lock);
  }
}


export default connect(state => state.Locks)(LocksList);
