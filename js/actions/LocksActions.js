import Kisi from 'kisi-client';
import * as LocksActionTypes from '../constants/ActionTypes';

const kisiClient = new Kisi();
kisiClient.setLoginSecret('94c2056abb993b570517f2d3a89c9b5a');


const LocksActions = {
  unlock: lock => {
    return (dispatch => {
      kisiClient
        .post(`locks/${lock.id}/unlock`)
        .then(() => dispatch(LocksActions.unlocked(lock)))
        .catch(error => dispatch(LocksActions.unlockFail(lock, error.reason)));
    });
  },
  unlocked: lock => ({ type: LocksActionTypes.UNLOCKED, lock }),
  unlockFail: (lock, reason) => {
    return dispatch => {
      const message = `Unable to unlock ${lock.name}. Reason: ${reason}`;
      dispatch(LocksActions.notify('error', message));
      setTimeout(() => dispatch(LocksActions.resetNotification()), 4000);
    };
  },
  notify: (style, message) => ({ type: LocksActionTypes.NOTIFY, style, message }),
  resetNotification: () => ({ type: LocksActionTypes.RESET_NOTIFICATION }),
  error: lock => ({ type: LocksActionTypes.UNLOCKED, lock }),
  fetching: () => ({ type: LocksActionTypes.FETCHING }),
  getLocks: () => {
    return dispatch => {
      dispatch(LocksActions.fetching());
      kisiClient
        .get('locks')
        .then(locks => dispatch(LocksActions.gotLocks(locks)));
    };
  },
  gotLocks: locks => ({ type: LocksActionTypes.FETCHED, locks }),
};

export default LocksActions;
