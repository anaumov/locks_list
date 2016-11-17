import * as ActionTypes from '../constants/ActionTypes';

const defaultNotification = { style: null, message: null };
const defaultState = {
  state: 'idle',
  list: [],
  pagination: {},
  notification: defaultNotification,
};

const updateLock = (list, index) => {
  const lock = list[index];
  return [
    ...list.slice(0, index),
    { ...lock, state: 'unlocked' },
    ...list.slice(index + 1),
  ];
};

const LocksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.UNLOCKED: {
      const lockIndex = state.list.indexOf(action.lock);
      return { ...state, list: updateLock(state.list, lockIndex) };
    }
    case ActionTypes.NOTIFY:
      return {
        ...state,
        notification: {
          style: action.style,
          message: action.message,
        },
      };
    case ActionTypes.RESET_NOTIFICATION:
      return { ...state, notification: defaultNotification };
    case ActionTypes.FETCHING:
      return { ...state, state: 'fetching' };
    case ActionTypes.FETCHED:
      return {
        ...state,
        state: 'fetched',
        list: action.locks.data,
        pagination: action.locks.pagination,
      };
    default:
      return state;
  }
};

export default LocksReducer;
