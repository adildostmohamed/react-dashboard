import {
  SET_APP_CONFIG
} from 'actions/index';

const INITIAL_STATE = {};

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
    case SET_APP_CONFIG:
      return {...state, ...action.payload}
    default:
      return state;
  }
}
