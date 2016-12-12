export const GET_APP_CONFIG = 'GET_APP_CONFIG';
export const SET_APP_CONFIG = 'SET_APP_CONFIG';

import { getUserAppConfig } from 'mocks/AppConfig';

export function getAppConfig() {
  return function(dispatch) {
    return getUserAppConfig().then((data) => {
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
