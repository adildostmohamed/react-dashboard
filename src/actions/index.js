export const GET_APP_CONFIG = 'GET_APP_CONFIG';
export const SET_APP_CONFIG = 'SET_APP_CONFIG';
export const GET_COMPONENTS_CONFIG = 'GET_COMPONENTS_CONFIG';
export const SET_COMPONENTS_CONFIG = 'SET_COMPONENTS_CONFIG';
export const SET_LOGGED_IN_USER = 'SET_LOGGED_IN_USER';

import { getAppConfigFromFirebase, getComponentsConfigFromFirebase } from 'mocks/AppConfig';

//an action using redux-thunk to fetch the app config object from firebase, then call the setAppConfig action to set it to the app state
export function getAppConfig() {
  return function(dispatch) {
    return getAppConfigFromFirebase().then((data) => {
      const appConfig = data;
      dispatch(setAppConfig(appConfig));
    });
  }
}

export function setAppConfig(config){
  return {
    type: SET_APP_CONFIG,
    payload: config
  }
}

//an action using redux-thunk to fetch the components config object from firebase, then call the setComponentsConfig to set it to the app state
export function getComponentsConfig() {
  return function(dispatch) {
    return getComponentsConfigFromFirebase().then((data) => {
      const componentsConfig = data;
      dispatch(setComponentsConfig(componentsConfig));
    });
  }
}

export function setComponentsConfig(config) {
  return {
    type: SET_COMPONENTS_CONFIG,
    payload: config
  }
}

export function setLoggedInUser(user) {
  return {
    type: SET_LOGGED_IN_USER,
    payload: user
  }
}
