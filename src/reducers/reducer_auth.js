import {
  AUTH_USER,
  SIGN_OUT_USER,
  AUTH_ERROR } from 'actions/index';

const INITIAL_STATE =  {
  authenticated: false,
  user: null,
  error: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        authenticated: true,
        user: action.payload,
        error: null
      };
    case SIGN_OUT_USER:
      return {
        ...state,
        authenticated: false,
        user: null,
        error: null
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload.message
      };
    default:
      return state;
  }
}
