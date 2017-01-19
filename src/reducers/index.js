import { combineReducers } from 'redux';

//import the appConfigReducer that scaffolds the application
import appConfigReducer from 'reducers/reducer_appConfig';
//import the componentsConfigReducer which when called will set componentsConfig on the application state
import componentsConfigReducer from 'reducers/reducer_componentsConfig';
//import userReducer which is called when a user attempts to login
import authReducer from 'reducers/reducer_auth';
//import form reducer from redux-form
import { reducer as FormReducer } from 'redux-form';

//create a root reducer that will be exported
const rootReducer = combineReducers({
  appConfig: appConfigReducer,
  componentsConfig: componentsConfigReducer,
  auth: authReducer,
  form: FormReducer
});

export default rootReducer;
