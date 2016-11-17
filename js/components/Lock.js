import React from 'react';
import {ListItem} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import LockedIcon from 'material-ui/svg-icons/action/lock-outline';
import UnlockedIcon from 'material-ui/svg-icons/action/lock-open';

const Lock = ({lock, unlockHandler}) => {
  const handleClick = () => unlockHandler(lock);
  const lockIcon = (lock.state == 'unlocked' ? <UnlockedIcon /> : <LockedIcon />);

  return(
    <ListItem primaryText={lock.name} rightIcon={lockIcon} onClick={handleClick} />
  );
}

export default Lock;
