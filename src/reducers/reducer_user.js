import {
  SET_LOGGED_IN_USER
} from 'actions/index';

const INITIAL_STATE = {};

export default function(state=INITIAL_STATE, action) {
  switch (action.type) {
    case SET_LOGGED_IN_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
