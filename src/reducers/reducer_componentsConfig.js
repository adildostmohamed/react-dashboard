import {
  SET_COMPONENTS_CONFIG
} from 'actions/index';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_COMPONENTS_CONFIG:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
